/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:50:49.60
*/
gx.evt.autoSkip = false;
gx.define('halterarcotacao', false, function () {
   this.ServerClass =  "halterarcotacao" ;
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
      this.AV35EmpresaId=gx.fn.getControlValue("vEMPRESAID") ;
      this.AV44Mod=gx.fn.getControlValue("vMOD") ;
   };
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Fornecedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORNECEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Solicitacaoitemseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAOITEMSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classificacaoestempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSIFICACAOESTEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Classprodmarca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSPRODMARCA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cotacaomarca=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOTACAOMARCA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cotacaosnganhador=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOTACAOSNGANHADOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("TEXTBLOCK21","Visible", 0 );
      gx.fn.setCtrlProperty("TEXTBLOCK22","Visible", 0 );
      gx.fn.setCtrlProperty("TEXTBLOCK24","Visible", 0 );
      gx.fn.setCtrlProperty("TEXTBLOCK25","Visible", 0 );
      gx.fn.setCtrlProperty("TEXTBLOCK11","Visible", 0 );
      gx.fn.setCtrlProperty("TEXTBLOCK12","Visible", 0 );
      gx.fn.setCtrlProperty("TEXTBLOCK8","Visible", 0 );
      gx.fn.setCtrlProperty("TEXTBLOCK10","Visible", 0 );
      gx.fn.setCtrlProperty("TEXTBLOCK13","Visible", 0 );
      gx.fn.setCtrlProperty("TEXTBLOCK14","Visible", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCFRETE","Visible", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCICMS","Visible", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCIPI","Visible", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCICMSST","Visible", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORFRETECHAR","Visible", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORICMSCHAR","Visible", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORICMSSTCHAR","Visible", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORIPICHAR","Visible", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORENCARGOS","Visible", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORSEGURO","Visible", 0 );
   };
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("vCOTACAOSNGANHADOR","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOMARCA","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORAVISTA","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORAPRAZO","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAONUMEROFORNECEDOR","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOENTREGA","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPAGAMENTO","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOGARANTIA","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCDESCONTO1","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCDESCONTO2","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCDESCONTO3","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCDESCONTO4","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCDESCONTO5","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORFRETECHAR","Class", "ApenasLeitura" );
      gx.fn.setCtrlProperty("vCOTACAOVALORICMSCHAR","Class", "ApenasLeitura" );
      gx.fn.setCtrlProperty("vCOTACAOVALORICMSSTCHAR","Class", "ApenasLeitura" );
      gx.fn.setCtrlProperty("vCOTACAOVALORIPICHAR","Class", "ApenasLeitura" );
      gx.fn.setCtrlProperty("vCOTACAOVALORENCARGOS","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORSEGURO","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORTOTALAVISTA","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOVALORTOTALAPRAZO","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCFRETE","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCIPI","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCICMS","Enabled", 0 );
      gx.fn.setCtrlProperty("vCOTACAOPCICMSST","Enabled", 0 );
      gx.fn.setCtrlProperty("BUTTON1","Enabled", 0 );
   };
   this.e12mb2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13mb2_client=function()
   {
      this.executeServerEvent("'CANCEL'", false, null, false, false);
   };
   this.e15mb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,17,20,22,23,28,31,34,36,37,38,41,43,46,48,49,52,54,57,59,62,64,67,69,72,74,75,76,77,78,81,83,86,88,92,94,97,99,101,103,106,108,110,112,115,117,119,121,124,126,128,130,133,135,138,140,143,145,148,150,153,155,158,167,169];
   this.GXLastCtrlId =169;
   GXValidFnc[3]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={fld:"TABLE6",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV32SolicitacaoNumero",gxold:"OV32SolicitacaoNumero",gxvar:"AV32SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV32SolicitacaoNumero,0)},c2v:function(){gx.O.AV32SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Fornecedorid,isvalid:null,rgrid:[],fld:"vFORNECEDORID",gxz:"ZV34FornecedorId",gxold:"OV34FornecedorId",gxvar:"AV34FornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34FornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34FornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORNECEDORID",gx.O.AV34FornecedorId,0)},c2v:function(){gx.O.AV34FornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFANTASIA",gxz:"ZV40Fantasia",gxold:"OV40Fantasia",gxvar:"AV40Fantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40Fantasia=Value},v2z:function(Value){gx.O.ZV40Fantasia=Value},v2c:function(){gx.fn.setControlValue("vFANTASIA",gx.O.AV40Fantasia,0)},c2v:function(){gx.O.AV40Fantasia=this.val()},val:function(){return gx.fn.getControlValue("vFANTASIA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaoitemseq,isvalid:null,rgrid:[],fld:"vSOLICITACAOITEMSEQ",gxz:"ZV33SolicitacaoItemSeq",gxold:"OV33SolicitacaoItemSeq",gxvar:"AV33SolicitacaoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33SolicitacaoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33SolicitacaoItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAOITEMSEQ",gx.O.AV33SolicitacaoItemSeq,0)},c2v:function(){gx.O.AV33SolicitacaoItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAOITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV39ProdutoDescricao",gxold:"OV39ProdutoDescricao",gxvar:"AV39ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV39ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV39ProdutoDescricao,0)},c2v:function(){gx.O.AV39ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[31]={fld:"TABLE4",grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOVALORAVISTA",gxz:"ZV12CotacaoValorAvista",gxold:"OV12CotacaoValorAvista",gxvar:"AV12CotacaoValorAvista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12CotacaoValorAvista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12CotacaoValorAvista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOVALORAVISTA",gx.O.AV12CotacaoValorAvista,4,',')},c2v:function(){gx.O.AV12CotacaoValorAvista=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOVALORAVISTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoestempresaid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTEMPRESAID",gxz:"ZV46ClassificacaoEstEmpresaId",gxold:"OV46ClassificacaoEstEmpresaId",gxvar:"AV46ClassificacaoEstEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ClassificacaoEstEmpresaId=Value},v2z:function(Value){gx.O.ZV46ClassificacaoEstEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTEMPRESAID",gx.O.AV46ClassificacaoEstEmpresaId,0)},c2v:function(){gx.O.AV46ClassificacaoEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classprodmarca,isvalid:null,rgrid:[],fld:"vCLASSPRODMARCA",gxz:"ZV45ClassProdMarca",gxold:"OV45ClassProdMarca",gxvar:"AV45ClassProdMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ClassProdMarca=Value},v2z:function(Value){gx.O.ZV45ClassProdMarca=Value},v2c:function(){gx.fn.setControlValue("vCLASSPRODMARCA",gx.O.AV45ClassProdMarca,0)},c2v:function(){gx.O.AV45ClassProdMarca=this.val()},val:function(){return gx.fn.getControlValue("vCLASSPRODMARCA")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOVALORAPRAZO",gxz:"ZV13CotacaoValoraPrazo",gxold:"OV13CotacaoValoraPrazo",gxvar:"AV13CotacaoValoraPrazo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13CotacaoValoraPrazo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV13CotacaoValoraPrazo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOVALORAPRAZO",gx.O.AV13CotacaoValoraPrazo,4,',')},c2v:function(){gx.O.AV13CotacaoValoraPrazo=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOVALORAPRAZO",'.',',')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cotacaomarca,isvalid:null,rgrid:[],fld:"vCOTACAOMARCA",gxz:"ZV11CotacaoMarca",gxold:"OV11CotacaoMarca",gxvar:"AV11CotacaoMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11CotacaoMarca=Value},v2z:function(Value){gx.O.ZV11CotacaoMarca=Value},v2c:function(){gx.fn.setControlValue("vCOTACAOMARCA",gx.O.AV11CotacaoMarca,0)},c2v:function(){gx.O.AV11CotacaoMarca=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAOMARCA")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOESTDESCRICAO",gxz:"ZV48OpcaoClassificacaoEstDescricao",gxold:"OV48OpcaoClassificacaoEstDescricao",gxvar:"AV48OpcaoClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48OpcaoClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.ZV48OpcaoClassificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAOESTDESCRICAO",gx.O.AV48OpcaoClassificacaoEstDescricao,0)},c2v:function(){gx.O.AV48OpcaoClassificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOPAGAMENTO",gxz:"ZV16CotacaoPagamento",gxold:"OV16CotacaoPagamento",gxvar:"AV16CotacaoPagamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16CotacaoPagamento=Value},v2z:function(Value){gx.O.ZV16CotacaoPagamento=Value},v2c:function(){gx.fn.setControlValue("vCOTACAOPAGAMENTO",gx.O.AV16CotacaoPagamento,0)},c2v:function(){gx.O.AV16CotacaoPagamento=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAOPAGAMENTO")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOENTREGA",gxz:"ZV15CotacaoEntrega",gxold:"OV15CotacaoEntrega",gxvar:"AV15CotacaoEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CotacaoEntrega=Value},v2z:function(Value){gx.O.ZV15CotacaoEntrega=Value},v2c:function(){gx.fn.setControlValue("vCOTACAOENTREGA",gx.O.AV15CotacaoEntrega,0)},c2v:function(){gx.O.AV15CotacaoEntrega=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAOENTREGA")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAONUMEROFORNECEDOR",gxz:"ZV14CotacaoNumeroFornecedor",gxold:"OV14CotacaoNumeroFornecedor",gxvar:"AV14CotacaoNumeroFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14CotacaoNumeroFornecedor=Value},v2z:function(Value){gx.O.ZV14CotacaoNumeroFornecedor=Value},v2c:function(){gx.fn.setControlValue("vCOTACAONUMEROFORNECEDOR",gx.O.AV14CotacaoNumeroFornecedor,0)},c2v:function(){gx.O.AV14CotacaoNumeroFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAONUMEROFORNECEDOR")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOGARANTIA",gxz:"ZV17CotacaoGarantia",gxold:"OV17CotacaoGarantia",gxvar:"AV17CotacaoGarantia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17CotacaoGarantia=Value},v2z:function(Value){gx.O.ZV17CotacaoGarantia=Value},v2c:function(){gx.fn.setControlValue("vCOTACAOGARANTIA",gx.O.AV17CotacaoGarantia,0)},c2v:function(){gx.O.AV17CotacaoGarantia=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAOGARANTIA")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOPCDESCONTO1",gxz:"ZV19CotacaoPCDesconto1",gxold:"OV19CotacaoPCDesconto1",gxvar:"AV19CotacaoPCDesconto1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19CotacaoPCDesconto1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV19CotacaoPCDesconto1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOPCDESCONTO1",gx.O.AV19CotacaoPCDesconto1,2,',')},c2v:function(){gx.O.AV19CotacaoPCDesconto1=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOPCDESCONTO1",'.',',')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOPCDESCONTO2",gxz:"ZV20CotacaoPCDesconto2",gxold:"OV20CotacaoPCDesconto2",gxvar:"AV20CotacaoPCDesconto2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20CotacaoPCDesconto2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV20CotacaoPCDesconto2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOPCDESCONTO2",gx.O.AV20CotacaoPCDesconto2,2,',')},c2v:function(){gx.O.AV20CotacaoPCDesconto2=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOPCDESCONTO2",'.',',')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOPCDESCONTO3",gxz:"ZV21CotacaoPCDesconto3",gxold:"OV21CotacaoPCDesconto3",gxvar:"AV21CotacaoPCDesconto3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CotacaoPCDesconto3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV21CotacaoPCDesconto3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOPCDESCONTO3",gx.O.AV21CotacaoPCDesconto3,2,',')},c2v:function(){gx.O.AV21CotacaoPCDesconto3=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOPCDESCONTO3",'.',',')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOPCDESCONTO4",gxz:"ZV22CotacaoPCDesconto4",gxold:"OV22CotacaoPCDesconto4",gxvar:"AV22CotacaoPCDesconto4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CotacaoPCDesconto4=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV22CotacaoPCDesconto4=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOPCDESCONTO4",gx.O.AV22CotacaoPCDesconto4,2,',')},c2v:function(){gx.O.AV22CotacaoPCDesconto4=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOPCDESCONTO4",'.',',')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOPCDESCONTO5",gxz:"ZV23CotacaoPCDesconto5",gxold:"OV23CotacaoPCDesconto5",gxvar:"AV23CotacaoPCDesconto5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CotacaoPCDesconto5=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23CotacaoPCDesconto5=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOPCDESCONTO5",gx.O.AV23CotacaoPCDesconto5,2,',')},c2v:function(){gx.O.AV23CotacaoPCDesconto5=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOPCDESCONTO5",'.',',')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCOMDESCONTOVISTA",gxz:"ZV59ValorComDescontoVista",gxold:"OV59ValorComDescontoVista",gxvar:"AV59ValorComDescontoVista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59ValorComDescontoVista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV59ValorComDescontoVista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCOMDESCONTOVISTA",gx.O.AV59ValorComDescontoVista,4,',')},c2v:function(){gx.O.AV59ValorComDescontoVista=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCOMDESCONTOVISTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCOMDESCONTOPRAZO",gxz:"ZV64ValorComDescontoPrazo",gxold:"OV64ValorComDescontoPrazo",gxvar:"AV64ValorComDescontoPrazo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64ValorComDescontoPrazo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV64ValorComDescontoPrazo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORCOMDESCONTOPRAZO",gx.O.AV64ValorComDescontoPrazo,4,',')},c2v:function(){gx.O.AV64ValorComDescontoPrazo=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORCOMDESCONTOPRAZO",'.',',')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cotacaosnganhador,isvalid:null,rgrid:[],fld:"vCOTACAOSNGANHADOR",gxz:"ZV41CotacaoSnGanhador",gxold:"OV41CotacaoSnGanhador",gxvar:"AV41CotacaoSnGanhador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV41CotacaoSnGanhador=Value},v2z:function(Value){gx.O.ZV41CotacaoSnGanhador=Value},v2c:function(){gx.fn.setCheckBoxValue("vCOTACAOSNGANHADOR",gx.O.AV41CotacaoSnGanhador,"S")},c2v:function(){gx.O.AV41CotacaoSnGanhador=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAOSNGANHADOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[94]={fld:"TABLE5",grid:0};
   GXValidFnc[97]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOPCFRETE",gxz:"ZV52CotacaoPCFrete",gxold:"OV52CotacaoPCFrete",gxvar:"AV52CotacaoPCFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52CotacaoPCFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV52CotacaoPCFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOPCFRETE",gx.O.AV52CotacaoPCFrete,2,',')},c2v:function(){gx.O.AV52CotacaoPCFrete=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOPCFRETE",'.',',')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOVALORFRETECHAR",gxz:"ZV56CotacaoValorFreteChar",gxold:"OV56CotacaoValorFreteChar",gxvar:"AV56CotacaoValorFreteChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56CotacaoValorFreteChar=Value},v2z:function(Value){gx.O.ZV56CotacaoValorFreteChar=Value},v2c:function(){gx.fn.setControlValue("vCOTACAOVALORFRETECHAR",gx.O.AV56CotacaoValorFreteChar,0)},c2v:function(){gx.O.AV56CotacaoValorFreteChar=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAOVALORFRETECHAR")},nac:gx.falseFn};
   GXValidFnc[106]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOPCIPI",gxz:"ZV53CotacaoPCIPI",gxold:"OV53CotacaoPCIPI",gxvar:"AV53CotacaoPCIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53CotacaoPCIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV53CotacaoPCIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOPCIPI",gx.O.AV53CotacaoPCIPI,2,',')},c2v:function(){gx.O.AV53CotacaoPCIPI=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOPCIPI",'.',',')},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOVALORIPICHAR",gxz:"ZV60CotacaoValorIPIChar",gxold:"OV60CotacaoValorIPIChar",gxvar:"AV60CotacaoValorIPIChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60CotacaoValorIPIChar=Value},v2z:function(Value){gx.O.ZV60CotacaoValorIPIChar=Value},v2c:function(){gx.fn.setControlValue("vCOTACAOVALORIPICHAR",gx.O.AV60CotacaoValorIPIChar,0)},c2v:function(){gx.O.AV60CotacaoValorIPIChar=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAOVALORIPICHAR")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOPCICMS",gxz:"ZV54CotacaoPCICMS",gxold:"OV54CotacaoPCICMS",gxvar:"AV54CotacaoPCICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54CotacaoPCICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV54CotacaoPCICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOPCICMS",gx.O.AV54CotacaoPCICMS,2,',')},c2v:function(){gx.O.AV54CotacaoPCICMS=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOPCICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOVALORICMSCHAR",gxz:"ZV62CotacaoValorICMSChar",gxold:"OV62CotacaoValorICMSChar",gxvar:"AV62CotacaoValorICMSChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62CotacaoValorICMSChar=Value},v2z:function(Value){gx.O.ZV62CotacaoValorICMSChar=Value},v2c:function(){gx.fn.setControlValue("vCOTACAOVALORICMSCHAR",gx.O.AV62CotacaoValorICMSChar,0)},c2v:function(){gx.O.AV62CotacaoValorICMSChar=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAOVALORICMSCHAR")},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOPCICMSST",gxz:"ZV55CotacaoPCICMSST",gxold:"OV55CotacaoPCICMSST",gxvar:"AV55CotacaoPCICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55CotacaoPCICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV55CotacaoPCICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOPCICMSST",gx.O.AV55CotacaoPCICMSST,2,',')},c2v:function(){gx.O.AV55CotacaoPCICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOPCICMSST",'.',',')},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOVALORICMSSTCHAR",gxz:"ZV63CotacaoValorICMSSTChar",gxold:"OV63CotacaoValorICMSSTChar",gxvar:"AV63CotacaoValorICMSSTChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63CotacaoValorICMSSTChar=Value},v2z:function(Value){gx.O.ZV63CotacaoValorICMSSTChar=Value},v2c:function(){gx.fn.setControlValue("vCOTACAOVALORICMSSTCHAR",gx.O.AV63CotacaoValorICMSSTChar,0)},c2v:function(){gx.O.AV63CotacaoValorICMSSTChar=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAOVALORICMSSTCHAR")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOVALORENCARGOS",gxz:"ZV25CotacaoValorEncargos",gxold:"OV25CotacaoValorEncargos",gxvar:"AV25CotacaoValorEncargos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25CotacaoValorEncargos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV25CotacaoValorEncargos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOVALORENCARGOS",gx.O.AV25CotacaoValorEncargos,2,',')},c2v:function(){gx.O.AV25CotacaoValorEncargos=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOVALORENCARGOS",'.',',')},nac:gx.falseFn};
   GXValidFnc[138]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOVALORSEGURO",gxz:"ZV26CotacaoValorSeguro",gxold:"OV26CotacaoValorSeguro",gxvar:"AV26CotacaoValorSeguro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CotacaoValorSeguro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV26CotacaoValorSeguro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOVALORSEGURO",gx.O.AV26CotacaoValorSeguro,2,',')},c2v:function(){gx.O.AV26CotacaoValorSeguro=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOVALORSEGURO",'.',',')},nac:gx.falseFn};
   GXValidFnc[143]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOVALORTOTALAVISTA",gxz:"ZV29CotacaoValorTotalAVista",gxold:"OV29CotacaoValorTotalAVista",gxvar:"AV29CotacaoValorTotalAVista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29CotacaoValorTotalAVista=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV29CotacaoValorTotalAVista=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOVALORTOTALAVISTA",gx.O.AV29CotacaoValorTotalAVista,4,',')},c2v:function(){gx.O.AV29CotacaoValorTotalAVista=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOVALORTOTALAVISTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[148]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAOVALORTOTALAPRAZO",gxz:"ZV30CotacaoValorTotalaPrazo",gxold:"OV30CotacaoValorTotalaPrazo",gxvar:"AV30CotacaoValorTotalaPrazo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CotacaoValorTotalaPrazo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV30CotacaoValorTotalaPrazo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOTACAOVALORTOTALAPRAZO",gx.O.AV30CotacaoValorTotalaPrazo,4,',')},c2v:function(){gx.O.AV30CotacaoValorTotalaPrazo=this.val()},val:function(){return gx.fn.getDecimalValue("vCOTACAOVALORTOTALAPRAZO",'.',',')},nac:gx.falseFn};
   GXValidFnc[153]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIFERENCA",gxz:"ZV31Diferenca",gxold:"OV31Diferenca",gxvar:"AV31Diferenca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Diferenca=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV31Diferenca=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIFERENCA",gx.O.AV31Diferenca,2,',')},c2v:function(){gx.O.AV31Diferenca=this.val()},val:function(){return gx.fn.getDecimalValue("vDIFERENCA",'.',',')},nac:gx.falseFn};
   GXValidFnc[158]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUM",gxz:"ZV61num",gxold:"OV61num",gxvar:"AV61num",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61num=Value},v2z:function(Value){gx.O.ZV61num=Value},v2c:function(){gx.fn.setControlValue("vNUM",gx.O.AV61num,0)},c2v:function(){gx.O.AV61num=this.val()},val:function(){return gx.fn.getControlValue("vNUM")},nac:gx.falseFn};
   GXValidFnc[167]={fld:"JS", format:1,grid:0};
   GXValidFnc[169]={fld:"PROMPT_CLASSPRODMARCA_COTACAOMARCA",grid:0};
   this.AV32SolicitacaoNumero = 0 ;
   this.ZV32SolicitacaoNumero = 0 ;
   this.OV32SolicitacaoNumero = 0 ;
   this.AV34FornecedorId = 0 ;
   this.ZV34FornecedorId = 0 ;
   this.OV34FornecedorId = 0 ;
   this.AV40Fantasia = "" ;
   this.ZV40Fantasia = "" ;
   this.OV40Fantasia = "" ;
   this.AV33SolicitacaoItemSeq = 0 ;
   this.ZV33SolicitacaoItemSeq = 0 ;
   this.OV33SolicitacaoItemSeq = 0 ;
   this.AV39ProdutoDescricao = "" ;
   this.ZV39ProdutoDescricao = "" ;
   this.OV39ProdutoDescricao = "" ;
   this.AV12CotacaoValorAvista = 0 ;
   this.ZV12CotacaoValorAvista = 0 ;
   this.OV12CotacaoValorAvista = 0 ;
   this.AV46ClassificacaoEstEmpresaId = "" ;
   this.ZV46ClassificacaoEstEmpresaId = "" ;
   this.OV46ClassificacaoEstEmpresaId = "" ;
   this.AV45ClassProdMarca = "" ;
   this.ZV45ClassProdMarca = "" ;
   this.OV45ClassProdMarca = "" ;
   this.AV13CotacaoValoraPrazo = 0 ;
   this.ZV13CotacaoValoraPrazo = 0 ;
   this.OV13CotacaoValoraPrazo = 0 ;
   this.AV11CotacaoMarca = "" ;
   this.ZV11CotacaoMarca = "" ;
   this.OV11CotacaoMarca = "" ;
   this.AV48OpcaoClassificacaoEstDescricao = "" ;
   this.ZV48OpcaoClassificacaoEstDescricao = "" ;
   this.OV48OpcaoClassificacaoEstDescricao = "" ;
   this.AV16CotacaoPagamento = "" ;
   this.ZV16CotacaoPagamento = "" ;
   this.OV16CotacaoPagamento = "" ;
   this.AV15CotacaoEntrega = "" ;
   this.ZV15CotacaoEntrega = "" ;
   this.OV15CotacaoEntrega = "" ;
   this.AV14CotacaoNumeroFornecedor = "" ;
   this.ZV14CotacaoNumeroFornecedor = "" ;
   this.OV14CotacaoNumeroFornecedor = "" ;
   this.AV17CotacaoGarantia = "" ;
   this.ZV17CotacaoGarantia = "" ;
   this.OV17CotacaoGarantia = "" ;
   this.AV19CotacaoPCDesconto1 = 0 ;
   this.ZV19CotacaoPCDesconto1 = 0 ;
   this.OV19CotacaoPCDesconto1 = 0 ;
   this.AV20CotacaoPCDesconto2 = 0 ;
   this.ZV20CotacaoPCDesconto2 = 0 ;
   this.OV20CotacaoPCDesconto2 = 0 ;
   this.AV21CotacaoPCDesconto3 = 0 ;
   this.ZV21CotacaoPCDesconto3 = 0 ;
   this.OV21CotacaoPCDesconto3 = 0 ;
   this.AV22CotacaoPCDesconto4 = 0 ;
   this.ZV22CotacaoPCDesconto4 = 0 ;
   this.OV22CotacaoPCDesconto4 = 0 ;
   this.AV23CotacaoPCDesconto5 = 0 ;
   this.ZV23CotacaoPCDesconto5 = 0 ;
   this.OV23CotacaoPCDesconto5 = 0 ;
   this.AV59ValorComDescontoVista = 0 ;
   this.ZV59ValorComDescontoVista = 0 ;
   this.OV59ValorComDescontoVista = 0 ;
   this.AV64ValorComDescontoPrazo = 0 ;
   this.ZV64ValorComDescontoPrazo = 0 ;
   this.OV64ValorComDescontoPrazo = 0 ;
   this.AV41CotacaoSnGanhador = "" ;
   this.ZV41CotacaoSnGanhador = "" ;
   this.OV41CotacaoSnGanhador = "" ;
   this.AV52CotacaoPCFrete = 0 ;
   this.ZV52CotacaoPCFrete = 0 ;
   this.OV52CotacaoPCFrete = 0 ;
   this.AV56CotacaoValorFreteChar = "" ;
   this.ZV56CotacaoValorFreteChar = "" ;
   this.OV56CotacaoValorFreteChar = "" ;
   this.AV53CotacaoPCIPI = 0 ;
   this.ZV53CotacaoPCIPI = 0 ;
   this.OV53CotacaoPCIPI = 0 ;
   this.AV60CotacaoValorIPIChar = "" ;
   this.ZV60CotacaoValorIPIChar = "" ;
   this.OV60CotacaoValorIPIChar = "" ;
   this.AV54CotacaoPCICMS = 0 ;
   this.ZV54CotacaoPCICMS = 0 ;
   this.OV54CotacaoPCICMS = 0 ;
   this.AV62CotacaoValorICMSChar = "" ;
   this.ZV62CotacaoValorICMSChar = "" ;
   this.OV62CotacaoValorICMSChar = "" ;
   this.AV55CotacaoPCICMSST = 0 ;
   this.ZV55CotacaoPCICMSST = 0 ;
   this.OV55CotacaoPCICMSST = 0 ;
   this.AV63CotacaoValorICMSSTChar = "" ;
   this.ZV63CotacaoValorICMSSTChar = "" ;
   this.OV63CotacaoValorICMSSTChar = "" ;
   this.AV25CotacaoValorEncargos = 0 ;
   this.ZV25CotacaoValorEncargos = 0 ;
   this.OV25CotacaoValorEncargos = 0 ;
   this.AV26CotacaoValorSeguro = 0 ;
   this.ZV26CotacaoValorSeguro = 0 ;
   this.OV26CotacaoValorSeguro = 0 ;
   this.AV29CotacaoValorTotalAVista = 0 ;
   this.ZV29CotacaoValorTotalAVista = 0 ;
   this.OV29CotacaoValorTotalAVista = 0 ;
   this.AV30CotacaoValorTotalaPrazo = 0 ;
   this.ZV30CotacaoValorTotalaPrazo = 0 ;
   this.OV30CotacaoValorTotalaPrazo = 0 ;
   this.AV31Diferenca = 0 ;
   this.ZV31Diferenca = 0 ;
   this.OV31Diferenca = 0 ;
   this.AV61num = "" ;
   this.ZV61num = "" ;
   this.OV61num = "" ;
   this.AV32SolicitacaoNumero = 0 ;
   this.AV34FornecedorId = 0 ;
   this.AV40Fantasia = "" ;
   this.AV33SolicitacaoItemSeq = 0 ;
   this.AV39ProdutoDescricao = "" ;
   this.AV12CotacaoValorAvista = 0 ;
   this.AV46ClassificacaoEstEmpresaId = "" ;
   this.AV45ClassProdMarca = "" ;
   this.AV13CotacaoValoraPrazo = 0 ;
   this.AV11CotacaoMarca = "" ;
   this.AV48OpcaoClassificacaoEstDescricao = "" ;
   this.AV16CotacaoPagamento = "" ;
   this.AV15CotacaoEntrega = "" ;
   this.AV14CotacaoNumeroFornecedor = "" ;
   this.AV17CotacaoGarantia = "" ;
   this.AV19CotacaoPCDesconto1 = 0 ;
   this.AV20CotacaoPCDesconto2 = 0 ;
   this.AV21CotacaoPCDesconto3 = 0 ;
   this.AV22CotacaoPCDesconto4 = 0 ;
   this.AV23CotacaoPCDesconto5 = 0 ;
   this.AV59ValorComDescontoVista = 0 ;
   this.AV64ValorComDescontoPrazo = 0 ;
   this.AV41CotacaoSnGanhador = "" ;
   this.AV52CotacaoPCFrete = 0 ;
   this.AV56CotacaoValorFreteChar = "" ;
   this.AV53CotacaoPCIPI = 0 ;
   this.AV60CotacaoValorIPIChar = "" ;
   this.AV54CotacaoPCICMS = 0 ;
   this.AV62CotacaoValorICMSChar = "" ;
   this.AV55CotacaoPCICMSST = 0 ;
   this.AV63CotacaoValorICMSSTChar = "" ;
   this.AV25CotacaoValorEncargos = 0 ;
   this.AV26CotacaoValorSeguro = 0 ;
   this.AV29CotacaoValorTotalAVista = 0 ;
   this.AV30CotacaoValorTotalaPrazo = 0 ;
   this.AV31Diferenca = 0 ;
   this.AV61num = "" ;
   this.AV35EmpresaId = "" ;
   this.AV44Mod = "" ;
   this.A2931OpcaoClassificacaoEstId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4051SolicitacaoItemUsuarioAlt = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A2926OpcaoClassificacaoEstDescricao = "" ;
   this.A3397CotacaoSnGanhador = "" ;
   this.A3451CotacaoTipo = "" ;
   this.A3394CotacaoMarca = "" ;
   this.A3453CotacaoNumeroFornecedor = "" ;
   this.A3454CotacaoEntrega = "" ;
   this.A3455CotacaoPagamento = "" ;
   this.A3456CotacaoGarantia = "" ;
   this.A3466CotacaoValorEncargos = 0 ;
   this.A3467CotacaoValorSeguro = 0 ;
   this.A3462CotacaoValorFrete = 0 ;
   this.A3463CotacaoValorIPI = 0 ;
   this.A3464CotacaoValorICMS = 0 ;
   this.A3465CotacaoValorICMSST = 0 ;
   this.A3473CotacaoValorTotalAVista = 0 ;
   this.A3479CotacaoValorTotalaPrazo = 0 ;
   this.A4240CotacaoPCFrete = 0 ;
   this.A4241CotacaoPCIPI = 0 ;
   this.A4242CotacaoPCICMS = 0 ;
   this.A4243CotacaoPCICMSST = 0 ;
   this.A3396CotacaoValoraPrazo = 0 ;
   this.A3474CotacaoValorComDesc1Pra = 0 ;
   this.A3475CotacaoValorComDesc2Pra = 0 ;
   this.A3476CotacaoValorComDesc3Pra = 0 ;
   this.A3477CotacaoValorComDesc4Pra = 0 ;
   this.A3478CotacaoValorComDesc5Pra = 0 ;
   this.A3457CotacaoPCDesconto1 = 0 ;
   this.A3395CotacaoValorAvista = 0 ;
   this.A3468CotacaoValorComDesc1Vis = 0 ;
   this.A3458CotacaoPCDesconto2 = 0 ;
   this.A3469CotacaoValorComDesc2Vis = 0 ;
   this.A3459CotacaoPCDesconto3 = 0 ;
   this.A3470CotacaoValorComDesc3Vis = 0 ;
   this.A3460CotacaoPCDesconto4 = 0 ;
   this.A3471CotacaoValorComDesc4Vis = 0 ;
   this.A3461CotacaoPCDesconto5 = 0 ;
   this.A3472CotacaoValorComDesc5Vis = 0 ;
   this.Events = {"e12mb2_client": ["ENTER", true] ,"e13mb2_client": ["'CANCEL'", true] ,"e15mb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12CotacaoValorAvista',fld:'vCOTACAOVALORAVISTA'},{av:'AV51SnExisteMarca',fld:'vSNEXISTEMARCA'},{av:'AV11CotacaoMarca',fld:'vCOTACAOMARCA'},{av:'AV15CotacaoEntrega',fld:'vCOTACAOENTREGA'},{av:'AV16CotacaoPagamento',fld:'vCOTACAOPAGAMENTO'},{av:'AV19CotacaoPCDesconto1',fld:'vCOTACAOPCDESCONTO1'},{av:'AV20CotacaoPCDesconto2',fld:'vCOTACAOPCDESCONTO2'},{av:'AV21CotacaoPCDesconto3',fld:'vCOTACAOPCDESCONTO3'},{av:'AV22CotacaoPCDesconto4',fld:'vCOTACAOPCDESCONTO4'},{av:'AV23CotacaoPCDesconto5',fld:'vCOTACAOPCDESCONTO5'},{av:'AV56CotacaoValorFreteChar',fld:'vCOTACAOVALORFRETECHAR'},{av:'AV60CotacaoValorIPIChar',fld:'vCOTACAOVALORIPICHAR'},{av:'AV62CotacaoValorICMSChar',fld:'vCOTACAOVALORICMSCHAR'},{av:'AV63CotacaoValorICMSSTChar',fld:'vCOTACAOVALORICMSSTCHAR'},{av:'AV18CotacaoValorFrete',fld:'vCOTACAOVALORFRETE'},{av:'AV70CotacaoPCFreteAux',fld:'vCOTACAOPCFRETEAUX'},{av:'AV27CotacaoValorICMS',fld:'vCOTACAOVALORICMS'},{av:'AV69CotacaoPCICMSAux',fld:'vCOTACAOPCICMSAUX'},{av:'AV24CotacaoValorIPI',fld:'vCOTACAOVALORIPI'},{av:'AV68CotacaoPCIPIAux',fld:'vCOTACAOPCIPIAUX'},{av:'AV28CotacaoValorICMSST',fld:'vCOTACAOVALORICMSST'},{av:'AV67CotacaoPCICMSSTAux',fld:'vCOTACAOPCICMSSTAUX'},{av:'AV32SolicitacaoNumero',fld:'vSOLICITACAONUMERO',hsh:true},{av:'AV33SolicitacaoItemSeq',fld:'vSOLICITACAOITEMSEQ',hsh:true},{av:'AV34FornecedorId',fld:'vFORNECEDORID',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV35EmpresaId',fld:'vEMPRESAID',hsh:true},{av:'AV38CotacaoTipo',fld:'vCOTACAOTIPO'},{av:'AV13CotacaoValoraPrazo',fld:'vCOTACAOVALORAPRAZO'},{av:'AV41CotacaoSnGanhador',fld:'vCOTACAOSNGANHADOR'},{av:'AV14CotacaoNumeroFornecedor',fld:'vCOTACAONUMEROFORNECEDOR'},{av:'AV17CotacaoGarantia',fld:'vCOTACAOGARANTIA'},{av:'AV25CotacaoValorEncargos',fld:'vCOTACAOVALORENCARGOS'},{av:'AV26CotacaoValorSeguro',fld:'vCOTACAOVALORSEGURO'},{av:'AV52CotacaoPCFrete',fld:'vCOTACAOPCFRETE'},{av:'AV53CotacaoPCIPI',fld:'vCOTACAOPCIPI'},{av:'AV54CotacaoPCICMS',fld:'vCOTACAOPCICMS'},{av:'AV55CotacaoPCICMSST',fld:'vCOTACAOPCICMSST'},{av:'A2929ClassificacaoEstEmpresaId',fld:'CLASSIFICACAOESTEMPRESAID'},{av:'AV46ClassificacaoEstEmpresaId',fld:'vCLASSIFICACAOESTEMPRESAID'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV45ClassProdMarca',fld:'vCLASSPRODMARCA'},{av:'A2931OpcaoClassificacaoEstId',fld:'OPCAOCLASSIFICACAOESTID'}],[{av:'AV36SnErro',fld:'vSNERRO'},{av:'AV56CotacaoValorFreteChar',fld:'vCOTACAOVALORFRETECHAR'},{av:'AV60CotacaoValorIPIChar',fld:'vCOTACAOVALORIPICHAR'},{av:'AV62CotacaoValorICMSChar',fld:'vCOTACAOVALORICMSCHAR'},{av:'AV63CotacaoValorICMSSTChar',fld:'vCOTACAOVALORICMSSTCHAR'},{av:'AV52CotacaoPCFrete',fld:'vCOTACAOPCFRETE'},{av:'AV54CotacaoPCICMS',fld:'vCOTACAOPCICMS'},{av:'AV53CotacaoPCIPI',fld:'vCOTACAOPCIPI'},{av:'AV55CotacaoPCICMSST',fld:'vCOTACAOPCICMSST'},{av:'AV18CotacaoValorFrete',fld:'vCOTACAOVALORFRETE'},{av:'AV24CotacaoValorIPI',fld:'vCOTACAOVALORIPI'},{av:'AV27CotacaoValorICMS',fld:'vCOTACAOVALORICMS'},{av:'AV28CotacaoValorICMSST',fld:'vCOTACAOVALORICMSST'},{av:'AV51SnExisteMarca',fld:'vSNEXISTEMARCA'}]];
   this.EvtParms["'CANCEL'"] = [[],[]];
   this.setPrompt("PROMPT_CLASSPRODMARCA_COTACAOMARCA", [38,48]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A3396CotacaoValoraPrazo", "COTACAOVALORAPRAZO", 0, "decimal");
   this.setVCMap("A3457CotacaoPCDesconto1", "COTACAOPCDESCONTO1", 0, "decimal");
   this.setVCMap("A3474CotacaoValorComDesc1Pra", "COTACAOVALORCOMDESC1PRA", 0, "decimal");
   this.setVCMap("A3458CotacaoPCDesconto2", "COTACAOPCDESCONTO2", 0, "decimal");
   this.setVCMap("A3475CotacaoValorComDesc2Pra", "COTACAOVALORCOMDESC2PRA", 0, "decimal");
   this.setVCMap("A3459CotacaoPCDesconto3", "COTACAOPCDESCONTO3", 0, "decimal");
   this.setVCMap("A3476CotacaoValorComDesc3Pra", "COTACAOVALORCOMDESC3PRA", 0, "decimal");
   this.setVCMap("A3460CotacaoPCDesconto4", "COTACAOPCDESCONTO4", 0, "decimal");
   this.setVCMap("A3477CotacaoValorComDesc4Pra", "COTACAOVALORCOMDESC4PRA", 0, "decimal");
   this.setVCMap("A3461CotacaoPCDesconto5", "COTACAOPCDESCONTO5", 0, "decimal");
   this.setVCMap("A3478CotacaoValorComDesc5Pra", "COTACAOVALORCOMDESC5PRA", 0, "decimal");
   this.setVCMap("A3395CotacaoValorAvista", "COTACAOVALORAVISTA", 0, "decimal");
   this.setVCMap("A3468CotacaoValorComDesc1Vis", "COTACAOVALORCOMDESC1VIS", 0, "decimal");
   this.setVCMap("A3469CotacaoValorComDesc2Vis", "COTACAOVALORCOMDESC2VIS", 0, "decimal");
   this.setVCMap("A3470CotacaoValorComDesc3Vis", "COTACAOVALORCOMDESC3VIS", 0, "decimal");
   this.setVCMap("A3471CotacaoValorComDesc4Vis", "COTACAOVALORCOMDESC4VIS", 0, "decimal");
   this.setVCMap("A3472CotacaoValorComDesc5Vis", "COTACAOVALORCOMDESC5VIS", 0, "decimal");
   this.setVCMap("AV35EmpresaId", "vEMPRESAID", 0, "char");
   this.setVCMap("AV44Mod", "vMOD", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new halterarcotacao());
