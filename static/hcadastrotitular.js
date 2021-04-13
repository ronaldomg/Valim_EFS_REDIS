/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:34:52.81
*/
gx.evt.autoSkip = false;
gx.define('hcadastrotitular', false, function () {
   this.ServerClass =  "hcadastrotitular" ;
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
      this.AV84Modo=gx.fn.getControlValue("vMODO") ;
      this.AV121SnCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV122SnFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV123SnFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV124SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Validv_Categoriaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCATEGORIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Titularpessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Titularnaturalidadeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARNATURALIDADEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Titularcidadeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARCIDADEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Titularcidadeidcom=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARCIDADEIDCOM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Titulartpidmensal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARTPIDMENSAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Categoriaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCATEGORIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipocobrancaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCOBRANCAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s152_client=function()
   {
      gx.fn.setCtrlProperty("vCATEGORIAID","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARNOMEPESSOA","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARRG","Enabled", 0 );
      gx.fn.setCtrlProperty("vORGAOEMISSOR","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARCPF","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARDTNASCIMENTO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARNOMEPAI","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARNOMEMAE","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARNATURALIDADEID","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARPROFISSAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARLOCALTRABALHO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARDTADMISSAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARDTCANCELAMENTO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULAREMAIL","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARATIVO","Enabled", 0 );
      gx.fn.setCtrlProperty("vESTADOCIVIL","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARSEXO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARDTRECADASTRAMENTO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARDTVALIDADE","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARCEP","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARENDERECO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARENDNUMERO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARENDCOMPLEMENTO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARBAIRRO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARCIDADEID","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARTELEFONE","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARCELULAR","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARCEPCOMERCIAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARENDERECOCOMERCIAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARENDNUMEROCOM","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARENDCOMPLEMENTOCOM","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARBAIRROCOMERCIAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARCIDADEIDCOM","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARTELEFONECOMERCIAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARBANCO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARAGENCIA","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARDIGITO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARCONTABANC","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULAROBSERVACAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARTPIDMENSAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vTITULARTPDESCMENSAL","Enabled", 0 );
   };
   this.e11gx2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13gx2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15gx2_client=function()
   {
      this.executeServerEvent("'UPLOAD'", true, null, false, false);
   };
   this.e17gx2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,15,17,18,21,23,26,28,31,33,36,38,40,43,45,48,50,53,55,59,62,64,65,68,70,73,75,78,80,83,85,89,91,94,97,100,103,106,109,111,114,116,119,121,124,126,129,131,134,136,137,140,143,146,148,149,154,156,159,161,163,168,170,172,174,177,179,180,185,187,189,191,196,199,201,202,207,209,212,214,216,221,223,225,227,230,232,233,238,240,243,246,249,251,254,256,259,261,263,266,268,271,273,274,277,279,282,285,287,289,295,301,302,303,304,305,306,307,309,310,311,312,313,314];
   this.GXLastCtrlId =314;
   this.TABCSSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV136Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV136Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV136Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hcadastrotitular_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE12",grid:0};
   GXValidFnc[12]={fld:"TABLE13",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Categoriaid,isvalid:null,rgrid:[],fld:"vCATEGORIAID",gxz:"ZV23CategoriaId",gxold:"OV23CategoriaId",gxvar:"AV23CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23CategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIAID",gx.O.AV23CategoriaId,0)},c2v:function(){gx.O.AV23CategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIADESCABREVIADA",gxz:"ZV67CategoriaDescAbreviada",gxold:"OV67CategoriaDescAbreviada",gxvar:"AV67CategoriaDescAbreviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67CategoriaDescAbreviada=Value},v2z:function(Value){gx.O.ZV67CategoriaDescAbreviada=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIADESCABREVIADA",gx.O.AV67CategoriaDescAbreviada,0)},c2v:function(){gx.O.AV67CategoriaDescAbreviada=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIADESCABREVIADA")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Titularpessoaid,isvalid:null,rgrid:[],fld:"vTITULARPESSOAID",gxz:"ZV24TitularPessoaId",gxold:"OV24TitularPessoaId",gxvar:"AV24TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV24TitularPessoaId,0)},c2v:function(){gx.O.AV24TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK47", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARNOMEPESSOA",gxz:"ZV25TitularNomePessoa",gxold:"OV25TitularNomePessoa",gxvar:"AV25TitularNomePessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TitularNomePessoa=Value},v2z:function(Value){gx.O.ZV25TitularNomePessoa=Value},v2c:function(){gx.fn.setControlValue("vTITULARNOMEPESSOA",gx.O.AV25TitularNomePessoa,0)},c2v:function(){gx.O.AV25TitularNomePessoa=this.val()},val:function(){return gx.fn.getControlValue("vTITULARNOMEPESSOA")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE14",grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARRG",gxz:"ZV28TitularRG",gxold:"OV28TitularRG",gxvar:"AV28TitularRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TitularRG=Value},v2z:function(Value){gx.O.ZV28TitularRG=Value},v2c:function(){gx.fn.setControlValue("vTITULARRG",gx.O.AV28TitularRG,0)},c2v:function(){gx.O.AV28TitularRG=this.val()},val:function(){return gx.fn.getControlValue("vTITULARRG")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORGAOEMISSOR",gxz:"ZV29OrgaoEmissor",gxold:"OV29OrgaoEmissor",gxvar:"AV29OrgaoEmissor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29OrgaoEmissor=Value},v2z:function(Value){gx.O.ZV29OrgaoEmissor=Value},v2c:function(){gx.fn.setControlValue("vORGAOEMISSOR",gx.O.AV29OrgaoEmissor,0)},c2v:function(){gx.O.AV29OrgaoEmissor=this.val()},val:function(){return gx.fn.getControlValue("vORGAOEMISSOR")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK50", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARCPF",gxz:"ZV30TitularCPF",gxold:"OV30TitularCPF",gxvar:"AV30TitularCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TitularCPF=Value},v2z:function(Value){gx.O.ZV30TitularCPF=Value},v2c:function(){gx.fn.setControlValue("vTITULARCPF",gx.O.AV30TitularCPF,0)},c2v:function(){gx.O.AV30TitularCPF=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCPF")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARDTNASCIMENTO",gxz:"ZV31TitularDtNascimento",gxold:"OV31TitularDtNascimento",gxvar:"AV31TitularDtNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TitularDtNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31TitularDtNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTITULARDTNASCIMENTO",gx.O.AV31TitularDtNascimento,0)},c2v:function(){gx.O.AV31TitularDtNascimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTITULARDTNASCIMENTO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK52", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARNOMEPAI",gxz:"ZV32TitularNomePai",gxold:"OV32TitularNomePai",gxvar:"AV32TitularNomePai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TitularNomePai=Value},v2z:function(Value){gx.O.ZV32TitularNomePai=Value},v2c:function(){gx.fn.setControlValue("vTITULARNOMEPAI",gx.O.AV32TitularNomePai,0)},c2v:function(){gx.O.AV32TitularNomePai=this.val()},val:function(){return gx.fn.getControlValue("vTITULARNOMEPAI")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARNOMEMAE",gxz:"ZV33TitularNomeMae",gxold:"OV33TitularNomeMae",gxvar:"AV33TitularNomeMae",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33TitularNomeMae=Value},v2z:function(Value){gx.O.ZV33TitularNomeMae=Value},v2c:function(){gx.fn.setControlValue("vTITULARNOMEMAE",gx.O.AV33TitularNomeMae,0)},c2v:function(){gx.O.AV33TitularNomeMae=this.val()},val:function(){return gx.fn.getControlValue("vTITULARNOMEMAE")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK53", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titularnaturalidadeid,isvalid:null,rgrid:[],fld:"vTITULARNATURALIDADEID",gxz:"ZV34TitularNaturalidadeId",gxold:"OV34TitularNaturalidadeId",gxvar:"AV34TitularNaturalidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TitularNaturalidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34TitularNaturalidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARNATURALIDADEID",gx.O.AV34TitularNaturalidadeId,0)},c2v:function(){gx.O.AV34TitularNaturalidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARNATURALIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARNATURALIDADENOME",gxz:"ZV35TitularNaturalidadeNome",gxold:"OV35TitularNaturalidadeNome",gxvar:"AV35TitularNaturalidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35TitularNaturalidadeNome=Value},v2z:function(Value){gx.O.ZV35TitularNaturalidadeNome=Value},v2c:function(){gx.fn.setControlValue("vTITULARNATURALIDADENOME",gx.O.AV35TitularNaturalidadeNome,0)},c2v:function(){gx.O.AV35TitularNaturalidadeNome=this.val()},val:function(){return gx.fn.getControlValue("vTITULARNATURALIDADENOME")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPROFISSAO",gxz:"ZV37TitularProfissao",gxold:"OV37TitularProfissao",gxvar:"AV37TitularProfissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TitularProfissao=Value},v2z:function(Value){gx.O.ZV37TitularProfissao=Value},v2c:function(){gx.fn.setControlValue("vTITULARPROFISSAO",gx.O.AV37TitularProfissao,0)},c2v:function(){gx.O.AV37TitularProfissao=this.val()},val:function(){return gx.fn.getControlValue("vTITULARPROFISSAO")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK57", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARLOCALTRABALHO",gxz:"ZV36TitularLocalTrabalho",gxold:"OV36TitularLocalTrabalho",gxvar:"AV36TitularLocalTrabalho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TitularLocalTrabalho=Value},v2z:function(Value){gx.O.ZV36TitularLocalTrabalho=Value},v2c:function(){gx.fn.setControlValue("vTITULARLOCALTRABALHO",gx.O.AV36TitularLocalTrabalho,0)},c2v:function(){gx.O.AV36TitularLocalTrabalho=this.val()},val:function(){return gx.fn.getControlValue("vTITULARLOCALTRABALHO")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK59", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARDTADMISSAO",gxz:"ZV57TitularDtAdmissao",gxold:"OV57TitularDtAdmissao",gxvar:"AV57TitularDtAdmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57TitularDtAdmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV57TitularDtAdmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTITULARDTADMISSAO",gx.O.AV57TitularDtAdmissao,0)},c2v:function(){gx.O.AV57TitularDtAdmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTITULARDTADMISSAO")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK61", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULAREMAIL",gxz:"ZV55TitularEmail",gxold:"OV55TitularEmail",gxvar:"AV55TitularEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55TitularEmail=Value},v2z:function(Value){gx.O.ZV55TitularEmail=Value},v2c:function(){gx.fn.setControlValue("vTITULAREMAIL",gx.O.AV55TitularEmail,0)},c2v:function(){gx.O.AV55TitularEmail=this.val()},val:function(){return gx.fn.getControlValue("vTITULAREMAIL")},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARSTATUSBIOMETRIA",gxz:"ZV133TitularStatusBiometria",gxold:"OV133TitularStatusBiometria",gxvar:"AV133TitularStatusBiometria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV133TitularStatusBiometria=Value},v2z:function(Value){gx.O.ZV133TitularStatusBiometria=Value},v2c:function(){gx.fn.setControlValue("vTITULARSTATUSBIOMETRIA",gx.O.AV133TitularStatusBiometria,0)},c2v:function(){gx.O.AV133TitularStatusBiometria=this.val()},val:function(){return gx.fn.getControlValue("vTITULARSTATUSBIOMETRIA")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TABLE15",grid:0};
   GXValidFnc[94]={fld:"TABLEIMAGEM",grid:0};
   GXValidFnc[97]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM",gxz:"ZV135Imagem",gxold:"OV135Imagem",gxvar:"AV135Imagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV135Imagem=Value},v2z:function(Value){gx.O.ZV135Imagem=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGEM",gx.O.AV135Imagem,gx.O.AV161Imagem_GXI)},c2v:function(){gx.O.AV161Imagem_GXI=this.val_GXI();gx.O.AV135Imagem=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEM")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEM_GXI")}, gxvar_GXI:'AV161Imagem_GXI',nac:gx.falseFn};
   GXValidFnc[103]={fld:"TXTCARREGARIMG", format:0,grid:0};
   GXValidFnc[106]={fld:"TABLE16",grid:0};
   GXValidFnc[109]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARATIVOANT",gxz:"ZV143TitularAtivoAnt",gxold:"OV143TitularAtivoAnt",gxvar:"AV143TitularAtivoAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV143TitularAtivoAnt=Value},v2z:function(Value){gx.O.ZV143TitularAtivoAnt=Value},v2c:function(){gx.fn.setControlValue("vTITULARATIVOANT",gx.O.AV143TitularAtivoAnt,0)},c2v:function(){gx.O.AV143TitularAtivoAnt=this.val()},val:function(){return gx.fn.getControlValue("vTITULARATIVOANT")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARATIVO",gxz:"ZV59TitularAtivo",gxold:"OV59TitularAtivo",gxvar:"AV59TitularAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV59TitularAtivo=Value},v2z:function(Value){gx.O.ZV59TitularAtivo=Value},v2c:function(){gx.fn.setCheckBoxValue("vTITULARATIVO",gx.O.AV59TitularAtivo,"S")},c2v:function(){gx.O.AV59TitularAtivo=this.val()},val:function(){return gx.fn.getControlValue("vTITULARATIVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[114]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARDTCANCELAMENTO",gxz:"ZV108TitularDtCancelamento",gxold:"OV108TitularDtCancelamento",gxvar:"AV108TitularDtCancelamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108TitularDtCancelamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV108TitularDtCancelamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTITULARDTCANCELAMENTO",gx.O.AV108TitularDtCancelamento,0)},c2v:function(){gx.O.AV108TitularDtCancelamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTITULARDTCANCELAMENTO")},nac:gx.falseFn};
   GXValidFnc[119]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[121]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARDTRECADASTRAMENTO",gxz:"ZV58TitularDtRecadastramento",gxold:"OV58TitularDtRecadastramento",gxvar:"AV58TitularDtRecadastramento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58TitularDtRecadastramento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV58TitularDtRecadastramento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTITULARDTRECADASTRAMENTO",gx.O.AV58TitularDtRecadastramento,0)},c2v:function(){gx.O.AV58TitularDtRecadastramento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTITULARDTRECADASTRAMENTO")},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK58", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARDTVALIDADE",gxz:"ZV127TitularDtValidade",gxold:"OV127TitularDtValidade",gxvar:"AV127TitularDtValidade",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127TitularDtValidade=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV127TitularDtValidade=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTITULARDTVALIDADE",gx.O.AV127TitularDtValidade,0)},c2v:function(){gx.O.AV127TitularDtValidade=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTITULARDTVALIDADE")},nac:gx.falseFn};
   GXValidFnc[129]={fld:"TEXTBLOCK60", format:0,grid:0};
   GXValidFnc[131]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vESTADOCIVIL",gxz:"ZV26EstadoCivil",gxold:"OV26EstadoCivil",gxvar:"AV26EstadoCivil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26EstadoCivil=Value},v2z:function(Value){gx.O.ZV26EstadoCivil=Value},v2c:function(){gx.fn.setComboBoxValue("vESTADOCIVIL",gx.O.AV26EstadoCivil)},c2v:function(){gx.O.AV26EstadoCivil=this.val()},val:function(){return gx.fn.getControlValue("vESTADOCIVIL")},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TEXTBLOCK62", format:0,grid:0};
   GXValidFnc[136]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARSEXO",gxz:"ZV27TitularSexo",gxold:"OV27TitularSexo",gxvar:"AV27TitularSexo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27TitularSexo=Value},v2z:function(Value){gx.O.ZV27TitularSexo=Value},v2c:function(){gx.fn.setComboBoxValue("vTITULARSEXO",gx.O.AV27TitularSexo)},c2v:function(){gx.O.AV27TitularSexo=this.val()},val:function(){return gx.fn.getControlValue("vTITULARSEXO")},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TAB2",grid:0};
   GXValidFnc[140]={fld:"TABLE4",grid:0};
   GXValidFnc[143]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[146]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[148]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARCEP",gxz:"ZV38TitularCep",gxold:"OV38TitularCep",gxvar:"AV38TitularCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38TitularCep=Value},v2z:function(Value){gx.O.ZV38TitularCep=Value},v2c:function(){gx.fn.setControlValue("vTITULARCEP",gx.O.AV38TitularCep,0)},c2v:function(){gx.O.AV38TitularCep=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCEP")},nac:gx.falseFn};
   GXValidFnc[149]={fld:"IMGPROMPT1",grid:0};
   GXValidFnc[154]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[156]={fld:"TABLE10",grid:0};
   GXValidFnc[159]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARENDERECO",gxz:"ZV39TitularEndereco",gxold:"OV39TitularEndereco",gxvar:"AV39TitularEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39TitularEndereco=Value},v2z:function(Value){gx.O.ZV39TitularEndereco=Value},v2c:function(){gx.fn.setControlValue("vTITULARENDERECO",gx.O.AV39TitularEndereco,0)},c2v:function(){gx.O.AV39TitularEndereco=this.val()},val:function(){return gx.fn.getControlValue("vTITULARENDERECO")},nac:gx.falseFn};
   GXValidFnc[161]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[163]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARENDNUMERO",gxz:"ZV40TitularEndNumero",gxold:"OV40TitularEndNumero",gxvar:"AV40TitularEndNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40TitularEndNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40TitularEndNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARENDNUMERO",gx.O.AV40TitularEndNumero,0)},c2v:function(){gx.O.AV40TitularEndNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARENDNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[168]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[170]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARENDCOMPLEMENTO",gxz:"ZV41TitularEndComplemento",gxold:"OV41TitularEndComplemento",gxvar:"AV41TitularEndComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41TitularEndComplemento=Value},v2z:function(Value){gx.O.ZV41TitularEndComplemento=Value},v2c:function(){gx.fn.setControlValue("vTITULARENDCOMPLEMENTO",gx.O.AV41TitularEndComplemento,0)},c2v:function(){gx.O.AV41TitularEndComplemento=this.val()},val:function(){return gx.fn.getControlValue("vTITULARENDCOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[172]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARBAIRRO",gxz:"ZV42TitularBairro",gxold:"OV42TitularBairro",gxvar:"AV42TitularBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42TitularBairro=Value},v2z:function(Value){gx.O.ZV42TitularBairro=Value},v2c:function(){gx.fn.setControlValue("vTITULARBAIRRO",gx.O.AV42TitularBairro,0)},c2v:function(){gx.O.AV42TitularBairro=this.val()},val:function(){return gx.fn.getControlValue("vTITULARBAIRRO")},nac:gx.falseFn};
   GXValidFnc[177]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titularcidadeid,isvalid:null,rgrid:[],fld:"vTITULARCIDADEID",gxz:"ZV44TitularCidadeId",gxold:"OV44TitularCidadeId",gxvar:"AV44TitularCidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44TitularCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44TitularCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARCIDADEID",gx.O.AV44TitularCidadeId,0)},c2v:function(){gx.O.AV44TitularCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARCIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[180]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARCIDADENOME",gxz:"ZV43TitularCidadeNome",gxold:"OV43TitularCidadeNome",gxvar:"AV43TitularCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43TitularCidadeNome=Value},v2z:function(Value){gx.O.ZV43TitularCidadeNome=Value},v2c:function(){gx.fn.setControlValue("vTITULARCIDADENOME",gx.O.AV43TitularCidadeNome,0)},c2v:function(){gx.O.AV43TitularCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCIDADENOME")},nac:gx.falseFn};
   GXValidFnc[185]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[187]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARTELEFONE",gxz:"ZV45TitularTelefone",gxold:"OV45TitularTelefone",gxvar:"AV45TitularTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45TitularTelefone=Value},v2z:function(Value){gx.O.ZV45TitularTelefone=Value},v2c:function(){gx.fn.setControlValue("vTITULARTELEFONE",gx.O.AV45TitularTelefone,0)},c2v:function(){gx.O.AV45TitularTelefone=this.val()},val:function(){return gx.fn.getControlValue("vTITULARTELEFONE")},nac:gx.falseFn};
   GXValidFnc[189]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[191]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARCELULAR",gxz:"ZV56TitularCelular",gxold:"OV56TitularCelular",gxvar:"AV56TitularCelular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56TitularCelular=Value},v2z:function(Value){gx.O.ZV56TitularCelular=Value},v2c:function(){gx.fn.setControlValue("vTITULARCELULAR",gx.O.AV56TitularCelular,0)},c2v:function(){gx.O.AV56TitularCelular=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCELULAR")},nac:gx.falseFn};
   GXValidFnc[196]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[199]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[201]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARCEPCOMERCIAL",gxz:"ZV47TitularCepComercial",gxold:"OV47TitularCepComercial",gxvar:"AV47TitularCepComercial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47TitularCepComercial=Value},v2z:function(Value){gx.O.ZV47TitularCepComercial=Value},v2c:function(){gx.fn.setControlValue("vTITULARCEPCOMERCIAL",gx.O.AV47TitularCepComercial,0)},c2v:function(){gx.O.AV47TitularCepComercial=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCEPCOMERCIAL")},nac:gx.falseFn};
   GXValidFnc[202]={fld:"IMGPROMPT2",grid:0};
   GXValidFnc[207]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[209]={fld:"TABLE5",grid:0};
   GXValidFnc[212]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARENDERECOCOMERCIAL",gxz:"ZV48TitularEnderecoComercial",gxold:"OV48TitularEnderecoComercial",gxvar:"AV48TitularEnderecoComercial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48TitularEnderecoComercial=Value},v2z:function(Value){gx.O.ZV48TitularEnderecoComercial=Value},v2c:function(){gx.fn.setControlValue("vTITULARENDERECOCOMERCIAL",gx.O.AV48TitularEnderecoComercial,0)},c2v:function(){gx.O.AV48TitularEnderecoComercial=this.val()},val:function(){return gx.fn.getControlValue("vTITULARENDERECOCOMERCIAL")},nac:gx.falseFn};
   GXValidFnc[214]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[216]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARENDNUMEROCOM",gxz:"ZV49TitularEndNumeroCom",gxold:"OV49TitularEndNumeroCom",gxvar:"AV49TitularEndNumeroCom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49TitularEndNumeroCom=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49TitularEndNumeroCom=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARENDNUMEROCOM",gx.O.AV49TitularEndNumeroCom,0)},c2v:function(){gx.O.AV49TitularEndNumeroCom=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARENDNUMEROCOM",'.')},nac:gx.falseFn};
   GXValidFnc[221]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[223]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARENDCOMPLEMENTOCOM",gxz:"ZV50TitularEndComplementoCom",gxold:"OV50TitularEndComplementoCom",gxvar:"AV50TitularEndComplementoCom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50TitularEndComplementoCom=Value},v2z:function(Value){gx.O.ZV50TitularEndComplementoCom=Value},v2c:function(){gx.fn.setControlValue("vTITULARENDCOMPLEMENTOCOM",gx.O.AV50TitularEndComplementoCom,0)},c2v:function(){gx.O.AV50TitularEndComplementoCom=this.val()},val:function(){return gx.fn.getControlValue("vTITULARENDCOMPLEMENTOCOM")},nac:gx.falseFn};
   GXValidFnc[225]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[227]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARBAIRROCOMERCIAL",gxz:"ZV51TitularBairroComercial",gxold:"OV51TitularBairroComercial",gxvar:"AV51TitularBairroComercial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51TitularBairroComercial=Value},v2z:function(Value){gx.O.ZV51TitularBairroComercial=Value},v2c:function(){gx.fn.setControlValue("vTITULARBAIRROCOMERCIAL",gx.O.AV51TitularBairroComercial,0)},c2v:function(){gx.O.AV51TitularBairroComercial=this.val()},val:function(){return gx.fn.getControlValue("vTITULARBAIRROCOMERCIAL")},nac:gx.falseFn};
   GXValidFnc[230]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[232]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titularcidadeidcom,isvalid:null,rgrid:[],fld:"vTITULARCIDADEIDCOM",gxz:"ZV52TitularCidadeIdCom",gxold:"OV52TitularCidadeIdCom",gxvar:"AV52TitularCidadeIdCom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52TitularCidadeIdCom=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52TitularCidadeIdCom=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARCIDADEIDCOM",gx.O.AV52TitularCidadeIdCom,0)},c2v:function(){gx.O.AV52TitularCidadeIdCom=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARCIDADEIDCOM",'.')},nac:gx.falseFn};
   GXValidFnc[233]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARCIDADENOMECOM",gxz:"ZV53TitularCidadeNomeCom",gxold:"OV53TitularCidadeNomeCom",gxvar:"AV53TitularCidadeNomeCom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53TitularCidadeNomeCom=Value},v2z:function(Value){gx.O.ZV53TitularCidadeNomeCom=Value},v2c:function(){gx.fn.setControlValue("vTITULARCIDADENOMECOM",gx.O.AV53TitularCidadeNomeCom,0)},c2v:function(){gx.O.AV53TitularCidadeNomeCom=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCIDADENOMECOM")},nac:gx.falseFn};
   GXValidFnc[238]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[240]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARTELEFONECOMERCIAL",gxz:"ZV54TitularTelefoneComercial",gxold:"OV54TitularTelefoneComercial",gxvar:"AV54TitularTelefoneComercial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54TitularTelefoneComercial=Value},v2z:function(Value){gx.O.ZV54TitularTelefoneComercial=Value},v2c:function(){gx.fn.setControlValue("vTITULARTELEFONECOMERCIAL",gx.O.AV54TitularTelefoneComercial,0)},c2v:function(){gx.O.AV54TitularTelefoneComercial=this.val()},val:function(){return gx.fn.getControlValue("vTITULARTELEFONECOMERCIAL")},nac:gx.falseFn};
   GXValidFnc[243]={fld:"TAB3",grid:0};
   GXValidFnc[246]={fld:"TABLE6",grid:0};
   GXValidFnc[249]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[251]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARBANCO",gxz:"ZV109TitularBanco",gxold:"OV109TitularBanco",gxvar:"AV109TitularBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV109TitularBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV109TitularBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARBANCO",gx.O.AV109TitularBanco,0)},c2v:function(){gx.O.AV109TitularBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARBANCO",'.')},nac:gx.falseFn};
   GXValidFnc[254]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[256]={fld:"TABLE11",grid:0};
   GXValidFnc[259]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARAGENCIA",gxz:"ZV110TitularAgencia",gxold:"OV110TitularAgencia",gxvar:"AV110TitularAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110TitularAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV110TitularAgencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARAGENCIA",gx.O.AV110TitularAgencia,0)},c2v:function(){gx.O.AV110TitularAgencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARAGENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[261]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[263]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARDIGITO",gxz:"ZV111TitularDigito",gxold:"OV111TitularDigito",gxvar:"AV111TitularDigito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111TitularDigito=Value},v2z:function(Value){gx.O.ZV111TitularDigito=Value},v2c:function(){gx.fn.setControlValue("vTITULARDIGITO",gx.O.AV111TitularDigito,0)},c2v:function(){gx.O.AV111TitularDigito=this.val()},val:function(){return gx.fn.getControlValue("vTITULARDIGITO")},nac:gx.falseFn};
   GXValidFnc[266]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[268]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARCONTABANC",gxz:"ZV112TitularContaBanc",gxold:"OV112TitularContaBanc",gxvar:"AV112TitularContaBanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112TitularContaBanc=Value},v2z:function(Value){gx.O.ZV112TitularContaBanc=Value},v2c:function(){gx.fn.setControlValue("vTITULARCONTABANC",gx.O.AV112TitularContaBanc,0)},c2v:function(){gx.O.AV112TitularContaBanc=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCONTABANC")},nac:gx.falseFn};
   GXValidFnc[271]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[273]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titulartpidmensal,isvalid:null,rgrid:[],fld:"vTITULARTPIDMENSAL",gxz:"ZV114TitularTpIdMensal",gxold:"OV114TitularTpIdMensal",gxvar:"AV114TitularTpIdMensal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114TitularTpIdMensal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV114TitularTpIdMensal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARTPIDMENSAL",gx.O.AV114TitularTpIdMensal,0)},c2v:function(){gx.O.AV114TitularTpIdMensal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARTPIDMENSAL",'.')},nac:gx.falseFn};
   GXValidFnc[274]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARTPDESCMENSAL",gxz:"ZV115TitularTpDescMensal",gxold:"OV115TitularTpDescMensal",gxvar:"AV115TitularTpDescMensal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115TitularTpDescMensal=Value},v2z:function(Value){gx.O.ZV115TitularTpDescMensal=Value},v2c:function(){gx.fn.setControlValue("vTITULARTPDESCMENSAL",gx.O.AV115TitularTpDescMensal,0)},c2v:function(){gx.O.AV115TitularTpDescMensal=this.val()},val:function(){return gx.fn.getControlValue("vTITULARTPDESCMENSAL")},nac:gx.falseFn};
   GXValidFnc[277]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[279]={lvl:0,type:"svchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULAROBSERVACAO",gxz:"ZV113TitularObservacao",gxold:"OV113TitularObservacao",gxvar:"AV113TitularObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113TitularObservacao=Value},v2z:function(Value){gx.O.ZV113TitularObservacao=Value},v2c:function(){gx.fn.setControlValue("vTITULAROBSERVACAO",gx.O.AV113TitularObservacao,0)},c2v:function(){gx.O.AV113TitularObservacao=this.val()},val:function(){return gx.fn.getControlValue("vTITULAROBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[282]={fld:"TABLE9",grid:0};
   GXValidFnc[285]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[287]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIO",gxz:"ZV94Usuario",gxold:"OV94Usuario",gxvar:"AV94Usuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94Usuario=Value},v2z:function(Value){gx.O.ZV94Usuario=Value},v2c:function(){gx.fn.setControlValue("vUSUARIO",gx.O.AV94Usuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV94Usuario=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 287 , function() {
   });
   GXValidFnc[289]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAHORA",gxz:"ZV95DataHora",gxold:"OV95DataHora",gxvar:"AV95DataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95DataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV95DataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAHORA",gx.O.AV95DataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV95DataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 289 , function() {
   });
   GXValidFnc[295]={fld:"TABLE8",grid:0};
   GXValidFnc[301]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTADOR",gxz:"ZV104Contador",gxold:"OV104Contador",gxvar:"AV104Contador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104Contador=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV104Contador=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTADOR",gx.O.AV104Contador,0)},c2v:function(){gx.O.AV104Contador=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTADOR",'.')},nac:gx.falseFn};
   GXValidFnc[302]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFECHAR",gxz:"ZV103SnFechar",gxold:"OV103SnFechar",gxvar:"AV103SnFechar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103SnFechar=Value},v2z:function(Value){gx.O.ZV103SnFechar=Value},v2c:function(){gx.fn.setControlValue("vSNFECHAR",gx.O.AV103SnFechar,0)},c2v:function(){gx.O.AV103SnFechar=this.val()},val:function(){return gx.fn.getControlValue("vSNFECHAR")},nac:gx.falseFn};
   GXValidFnc[303]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV106AcessoSistemaSequencia",gxold:"OV106AcessoSistemaSequencia",gxvar:"AV106AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV106AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV106AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV106AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[304]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Categoriaempresaid,isvalid:null,rgrid:[],fld:"vCATEGORIAEMPRESAID",gxz:"ZV66CategoriaEmpresaId",gxold:"OV66CategoriaEmpresaId",gxvar:"AV66CategoriaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66CategoriaEmpresaId=Value},v2z:function(Value){gx.O.ZV66CategoriaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIAEMPRESAID",gx.O.AV66CategoriaEmpresaId,0)},c2v:function(){gx.O.AV66CategoriaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[305]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocobrancaempresaid,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAEMPRESAID",gxz:"ZV117TipoCobrancaEmpresaId",gxold:"OV117TipoCobrancaEmpresaId",gxvar:"AV117TipoCobrancaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117TipoCobrancaEmpresaId=Value},v2z:function(Value){gx.O.ZV117TipoCobrancaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAEMPRESAID",gx.O.AV117TipoCobrancaEmpresaId,0)},c2v:function(){gx.O.AV117TipoCobrancaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOBRANCAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[306]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAVE",gxz:"ZV142Chave",gxold:"OV142Chave",gxvar:"AV142Chave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV142Chave=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV142Chave=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCHAVE",gx.O.AV142Chave,0)},c2v:function(){gx.O.AV142Chave=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCHAVE",'.')},nac:gx.falseFn};
   GXValidFnc[307]={fld:"JS", format:2,grid:0};
   GXValidFnc[309]={fld:"BTNHELP",grid:0};
   GXValidFnc[310]={fld:"PROMPT_CATEGORIAID",grid:0};
   GXValidFnc[311]={fld:"PROMPT_TITULARNATURALIDADEID",grid:0};
   GXValidFnc[312]={fld:"PROMPT_TITULARCIDADEID",grid:0};
   GXValidFnc[313]={fld:"PROMPT_TITULARCIDADEIDCOM",grid:0};
   GXValidFnc[314]={fld:"PROMPT_TITULARTPIDMENSAL",grid:0};
   this.AV23CategoriaId = 0 ;
   this.ZV23CategoriaId = 0 ;
   this.OV23CategoriaId = 0 ;
   this.AV67CategoriaDescAbreviada = "" ;
   this.ZV67CategoriaDescAbreviada = "" ;
   this.OV67CategoriaDescAbreviada = "" ;
   this.AV24TitularPessoaId = 0 ;
   this.ZV24TitularPessoaId = 0 ;
   this.OV24TitularPessoaId = 0 ;
   this.AV25TitularNomePessoa = "" ;
   this.ZV25TitularNomePessoa = "" ;
   this.OV25TitularNomePessoa = "" ;
   this.AV28TitularRG = "" ;
   this.ZV28TitularRG = "" ;
   this.OV28TitularRG = "" ;
   this.AV29OrgaoEmissor = "" ;
   this.ZV29OrgaoEmissor = "" ;
   this.OV29OrgaoEmissor = "" ;
   this.AV30TitularCPF = "" ;
   this.ZV30TitularCPF = "" ;
   this.OV30TitularCPF = "" ;
   this.AV31TitularDtNascimento = gx.date.nullDate() ;
   this.ZV31TitularDtNascimento = gx.date.nullDate() ;
   this.OV31TitularDtNascimento = gx.date.nullDate() ;
   this.AV32TitularNomePai = "" ;
   this.ZV32TitularNomePai = "" ;
   this.OV32TitularNomePai = "" ;
   this.AV33TitularNomeMae = "" ;
   this.ZV33TitularNomeMae = "" ;
   this.OV33TitularNomeMae = "" ;
   this.AV34TitularNaturalidadeId = 0 ;
   this.ZV34TitularNaturalidadeId = 0 ;
   this.OV34TitularNaturalidadeId = 0 ;
   this.AV35TitularNaturalidadeNome = "" ;
   this.ZV35TitularNaturalidadeNome = "" ;
   this.OV35TitularNaturalidadeNome = "" ;
   this.AV37TitularProfissao = "" ;
   this.ZV37TitularProfissao = "" ;
   this.OV37TitularProfissao = "" ;
   this.AV36TitularLocalTrabalho = "" ;
   this.ZV36TitularLocalTrabalho = "" ;
   this.OV36TitularLocalTrabalho = "" ;
   this.AV57TitularDtAdmissao = gx.date.nullDate() ;
   this.ZV57TitularDtAdmissao = gx.date.nullDate() ;
   this.OV57TitularDtAdmissao = gx.date.nullDate() ;
   this.AV55TitularEmail = "" ;
   this.ZV55TitularEmail = "" ;
   this.OV55TitularEmail = "" ;
   this.AV133TitularStatusBiometria = "" ;
   this.ZV133TitularStatusBiometria = "" ;
   this.OV133TitularStatusBiometria = "" ;
   this.AV161Imagem_GXI = "" ;
   this.AV135Imagem = "" ;
   this.ZV135Imagem = "" ;
   this.OV135Imagem = "" ;
   this.AV143TitularAtivoAnt = "" ;
   this.ZV143TitularAtivoAnt = "" ;
   this.OV143TitularAtivoAnt = "" ;
   this.AV59TitularAtivo = "" ;
   this.ZV59TitularAtivo = "" ;
   this.OV59TitularAtivo = "" ;
   this.AV108TitularDtCancelamento = gx.date.nullDate() ;
   this.ZV108TitularDtCancelamento = gx.date.nullDate() ;
   this.OV108TitularDtCancelamento = gx.date.nullDate() ;
   this.AV58TitularDtRecadastramento = gx.date.nullDate() ;
   this.ZV58TitularDtRecadastramento = gx.date.nullDate() ;
   this.OV58TitularDtRecadastramento = gx.date.nullDate() ;
   this.AV127TitularDtValidade = gx.date.nullDate() ;
   this.ZV127TitularDtValidade = gx.date.nullDate() ;
   this.OV127TitularDtValidade = gx.date.nullDate() ;
   this.AV26EstadoCivil = "" ;
   this.ZV26EstadoCivil = "" ;
   this.OV26EstadoCivil = "" ;
   this.AV27TitularSexo = "" ;
   this.ZV27TitularSexo = "" ;
   this.OV27TitularSexo = "" ;
   this.AV38TitularCep = "" ;
   this.ZV38TitularCep = "" ;
   this.OV38TitularCep = "" ;
   this.AV39TitularEndereco = "" ;
   this.ZV39TitularEndereco = "" ;
   this.OV39TitularEndereco = "" ;
   this.AV40TitularEndNumero = 0 ;
   this.ZV40TitularEndNumero = 0 ;
   this.OV40TitularEndNumero = 0 ;
   this.AV41TitularEndComplemento = "" ;
   this.ZV41TitularEndComplemento = "" ;
   this.OV41TitularEndComplemento = "" ;
   this.AV42TitularBairro = "" ;
   this.ZV42TitularBairro = "" ;
   this.OV42TitularBairro = "" ;
   this.AV44TitularCidadeId = 0 ;
   this.ZV44TitularCidadeId = 0 ;
   this.OV44TitularCidadeId = 0 ;
   this.AV43TitularCidadeNome = "" ;
   this.ZV43TitularCidadeNome = "" ;
   this.OV43TitularCidadeNome = "" ;
   this.AV45TitularTelefone = "" ;
   this.ZV45TitularTelefone = "" ;
   this.OV45TitularTelefone = "" ;
   this.AV56TitularCelular = "" ;
   this.ZV56TitularCelular = "" ;
   this.OV56TitularCelular = "" ;
   this.AV47TitularCepComercial = "" ;
   this.ZV47TitularCepComercial = "" ;
   this.OV47TitularCepComercial = "" ;
   this.AV48TitularEnderecoComercial = "" ;
   this.ZV48TitularEnderecoComercial = "" ;
   this.OV48TitularEnderecoComercial = "" ;
   this.AV49TitularEndNumeroCom = 0 ;
   this.ZV49TitularEndNumeroCom = 0 ;
   this.OV49TitularEndNumeroCom = 0 ;
   this.AV50TitularEndComplementoCom = "" ;
   this.ZV50TitularEndComplementoCom = "" ;
   this.OV50TitularEndComplementoCom = "" ;
   this.AV51TitularBairroComercial = "" ;
   this.ZV51TitularBairroComercial = "" ;
   this.OV51TitularBairroComercial = "" ;
   this.AV52TitularCidadeIdCom = 0 ;
   this.ZV52TitularCidadeIdCom = 0 ;
   this.OV52TitularCidadeIdCom = 0 ;
   this.AV53TitularCidadeNomeCom = "" ;
   this.ZV53TitularCidadeNomeCom = "" ;
   this.OV53TitularCidadeNomeCom = "" ;
   this.AV54TitularTelefoneComercial = "" ;
   this.ZV54TitularTelefoneComercial = "" ;
   this.OV54TitularTelefoneComercial = "" ;
   this.AV109TitularBanco = 0 ;
   this.ZV109TitularBanco = 0 ;
   this.OV109TitularBanco = 0 ;
   this.AV110TitularAgencia = 0 ;
   this.ZV110TitularAgencia = 0 ;
   this.OV110TitularAgencia = 0 ;
   this.AV111TitularDigito = "" ;
   this.ZV111TitularDigito = "" ;
   this.OV111TitularDigito = "" ;
   this.AV112TitularContaBanc = "" ;
   this.ZV112TitularContaBanc = "" ;
   this.OV112TitularContaBanc = "" ;
   this.AV114TitularTpIdMensal = 0 ;
   this.ZV114TitularTpIdMensal = 0 ;
   this.OV114TitularTpIdMensal = 0 ;
   this.AV115TitularTpDescMensal = "" ;
   this.ZV115TitularTpDescMensal = "" ;
   this.OV115TitularTpDescMensal = "" ;
   this.AV113TitularObservacao = "" ;
   this.ZV113TitularObservacao = "" ;
   this.OV113TitularObservacao = "" ;
   this.AV94Usuario = "" ;
   this.ZV94Usuario = "" ;
   this.OV94Usuario = "" ;
   this.AV95DataHora = gx.date.nullDate() ;
   this.ZV95DataHora = gx.date.nullDate() ;
   this.OV95DataHora = gx.date.nullDate() ;
   this.AV104Contador = 0 ;
   this.ZV104Contador = 0 ;
   this.OV104Contador = 0 ;
   this.AV103SnFechar = "" ;
   this.ZV103SnFechar = "" ;
   this.OV103SnFechar = "" ;
   this.AV106AcessoSistemaSequencia = 0 ;
   this.ZV106AcessoSistemaSequencia = 0 ;
   this.OV106AcessoSistemaSequencia = 0 ;
   this.AV66CategoriaEmpresaId = "" ;
   this.ZV66CategoriaEmpresaId = "" ;
   this.OV66CategoriaEmpresaId = "" ;
   this.AV117TipoCobrancaEmpresaId = "" ;
   this.ZV117TipoCobrancaEmpresaId = "" ;
   this.OV117TipoCobrancaEmpresaId = "" ;
   this.AV142Chave = 0 ;
   this.ZV142Chave = 0 ;
   this.OV142Chave = 0 ;
   this.AV136Tab = [ ] ;
   this.AV23CategoriaId = 0 ;
   this.AV67CategoriaDescAbreviada = "" ;
   this.AV24TitularPessoaId = 0 ;
   this.AV25TitularNomePessoa = "" ;
   this.AV28TitularRG = "" ;
   this.AV29OrgaoEmissor = "" ;
   this.AV30TitularCPF = "" ;
   this.AV31TitularDtNascimento = gx.date.nullDate() ;
   this.AV32TitularNomePai = "" ;
   this.AV33TitularNomeMae = "" ;
   this.AV34TitularNaturalidadeId = 0 ;
   this.AV35TitularNaturalidadeNome = "" ;
   this.AV37TitularProfissao = "" ;
   this.AV36TitularLocalTrabalho = "" ;
   this.AV57TitularDtAdmissao = gx.date.nullDate() ;
   this.AV55TitularEmail = "" ;
   this.AV133TitularStatusBiometria = "" ;
   this.AV135Imagem = "" ;
   this.AV143TitularAtivoAnt = "" ;
   this.AV59TitularAtivo = "" ;
   this.AV108TitularDtCancelamento = gx.date.nullDate() ;
   this.AV58TitularDtRecadastramento = gx.date.nullDate() ;
   this.AV127TitularDtValidade = gx.date.nullDate() ;
   this.AV26EstadoCivil = "" ;
   this.AV27TitularSexo = "" ;
   this.AV38TitularCep = "" ;
   this.AV39TitularEndereco = "" ;
   this.AV40TitularEndNumero = 0 ;
   this.AV41TitularEndComplemento = "" ;
   this.AV42TitularBairro = "" ;
   this.AV44TitularCidadeId = 0 ;
   this.AV43TitularCidadeNome = "" ;
   this.AV45TitularTelefone = "" ;
   this.AV56TitularCelular = "" ;
   this.AV47TitularCepComercial = "" ;
   this.AV48TitularEnderecoComercial = "" ;
   this.AV49TitularEndNumeroCom = 0 ;
   this.AV50TitularEndComplementoCom = "" ;
   this.AV51TitularBairroComercial = "" ;
   this.AV52TitularCidadeIdCom = 0 ;
   this.AV53TitularCidadeNomeCom = "" ;
   this.AV54TitularTelefoneComercial = "" ;
   this.AV109TitularBanco = 0 ;
   this.AV110TitularAgencia = 0 ;
   this.AV111TitularDigito = "" ;
   this.AV112TitularContaBanc = "" ;
   this.AV114TitularTpIdMensal = 0 ;
   this.AV115TitularTpDescMensal = "" ;
   this.AV113TitularObservacao = "" ;
   this.AV94Usuario = "" ;
   this.AV95DataHora = gx.date.nullDate() ;
   this.AV104Contador = 0 ;
   this.AV103SnFechar = "" ;
   this.AV106AcessoSistemaSequencia = 0 ;
   this.AV66CategoriaEmpresaId = "" ;
   this.AV117TipoCobrancaEmpresaId = "" ;
   this.AV142Chave = 0 ;
   this.AV84Modo = "" ;
   this.AV121SnCliente = "" ;
   this.AV122SnFornecedor = "" ;
   this.AV123SnFabricante = "" ;
   this.AV124SnPrompt = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A993TipoCobrancaDescricao = "" ;
   this.A2622CategoriaId = 0 ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2596CategoriaDescAbreviada = "" ;
   this.A545TipoTelefoneId = "" ;
   this.A544EmpresaTipoTelefoneEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A826TelefonePessoaUsuarioId = "" ;
   this.A542TelefonePessoaNumero = "" ;
   this.A229TiposEnderecoId = "" ;
   this.A228EmpresaTiposEnderecoEmpresaId = "" ;
   this.A844EnderecoPessoaUsuarioId = "" ;
   this.A220EnderecoPessoaLogradouro = "" ;
   this.A221EnderecoPessoaNumero = 0 ;
   this.A222EnderecoPessoaComplemento = "" ;
   this.A223EnderecoPessoaBairro = "" ;
   this.A224EnderecoPessoaCidadeId = 0 ;
   this.A225EnderecoPessoaCidadeNome = "" ;
   this.A226EnderecoPessoaCep = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A71PessoaFantasia = "" ;
   this.A423PessoaEndereco = "" ;
   this.A424PessoaNumeroEnd = 0 ;
   this.A425PessoaComplemento = "" ;
   this.A426PessoaBairro = "" ;
   this.A427PessoaCep = "" ;
   this.A72PessoaTelefone = "" ;
   this.A432PessoaCelular = "" ;
   this.A434PessoaEmail = "" ;
   this.A439PessoaRG = "" ;
   this.A440PessoaOrgaoExp = "" ;
   this.A442PessoaDataNasc = gx.date.nullDate() ;
   this.A7774PessoaSnBiometria = "" ;
   this.A443PessoaSituacao = "" ;
   this.A460PessoaNaturalidadeId = 0 ;
   this.A461PessoaNaturalidadeNome = "" ;
   this.A463PessoaCidadeId = 0 ;
   this.A464PessoaCidadeNome = "" ;
   this.A469PessoaSexo = "" ;
   this.A470PessoaEstadoCivil = "" ;
   this.A473PessoaCPF = "" ;
   this.A474PessoaLocalTrabalho = "" ;
   this.A2019PessoaCargo = "" ;
   this.A435PessoaDataCadastro = gx.date.nullDate() ;
   this.A467PessoaDataCancelamento = gx.date.nullDate() ;
   this.A487PessoaNomePai = "" ;
   this.A488PessoaNomeMae = "" ;
   this.A493PessoaDataRecadastramento = gx.date.nullDate() ;
   this.A3207PessoaDataValidadeCadastro = gx.date.nullDate() ;
   this.A455PessoaBanco = 0 ;
   this.A456PessoaAgencia = 0 ;
   this.A2751PessoaDigitoAgencia = "" ;
   this.A457PessoaContaBancaria = "" ;
   this.A466PessoaObservacao = "" ;
   this.A830PessoaUsuarioId = "" ;
   this.A831PessoaDataHoraAlt = gx.date.nullDate() ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A147CidadesId = 0 ;
   this.A2597CategoriaTipoCobranca = "" ;
   this.A3129CategoriaSnVlrDependente = "" ;
   this.Events = {"e11gx2_client": ["'FECHAR'", true] ,"e13gx2_client": ["ENTER", true] ,"e15gx2_client": ["'UPLOAD'", true] ,"e17gx2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV103SnFechar',fld:'vSNFECHAR'},{av:'AV104Contador',fld:'vCONTADOR'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV138BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV131PastaImagem',fld:'vPASTAIMAGEM'},{av:'AV142Chave',fld:'vCHAVE'},{av:'AV23CategoriaId',fld:'vCATEGORIAID'},{av:'AV67CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV25TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV28TitularRG',fld:'vTITULARRG'},{av:'AV29OrgaoEmissor',fld:'vORGAOEMISSOR'},{av:'AV30TitularCPF',fld:'vTITULARCPF'},{av:'AV31TitularDtNascimento',fld:'vTITULARDTNASCIMENTO'},{av:'AV32TitularNomePai',fld:'vTITULARNOMEPAI'},{av:'AV33TitularNomeMae',fld:'vTITULARNOMEMAE'},{av:'AV34TitularNaturalidadeId',fld:'vTITULARNATURALIDADEID'},{av:'AV35TitularNaturalidadeNome',fld:'vTITULARNATURALIDADENOME'},{av:'AV37TitularProfissao',fld:'vTITULARPROFISSAO'},{av:'AV36TitularLocalTrabalho',fld:'vTITULARLOCALTRABALHO'},{av:'AV57TitularDtAdmissao',fld:'vTITULARDTADMISSAO'},{av:'AV108TitularDtCancelamento',fld:'vTITULARDTCANCELAMENTO'},{av:'AV55TitularEmail',fld:'vTITULAREMAIL'},{av:'AV59TitularAtivo',fld:'vTITULARATIVO'},{av:'AV26EstadoCivil',fld:'vESTADOCIVIL'},{av:'AV27TitularSexo',fld:'vTITULARSEXO'},{av:'AV58TitularDtRecadastramento',fld:'vTITULARDTRECADASTRAMENTO'},{av:'AV127TitularDtValidade',fld:'vTITULARDTVALIDADE'},{av:'AV38TitularCep',fld:'vTITULARCEP'},{av:'AV39TitularEndereco',fld:'vTITULARENDERECO'},{av:'AV40TitularEndNumero',fld:'vTITULARENDNUMERO'},{av:'AV41TitularEndComplemento',fld:'vTITULARENDCOMPLEMENTO'},{av:'AV42TitularBairro',fld:'vTITULARBAIRRO'},{av:'AV44TitularCidadeId',fld:'vTITULARCIDADEID'},{av:'AV43TitularCidadeNome',fld:'vTITULARCIDADENOME'},{av:'AV45TitularTelefone',fld:'vTITULARTELEFONE'},{av:'AV56TitularCelular',fld:'vTITULARCELULAR'},{av:'AV47TitularCepComercial',fld:'vTITULARCEPCOMERCIAL'},{av:'AV48TitularEnderecoComercial',fld:'vTITULARENDERECOCOMERCIAL'},{av:'AV49TitularEndNumeroCom',fld:'vTITULARENDNUMEROCOM'},{av:'AV50TitularEndComplementoCom',fld:'vTITULARENDCOMPLEMENTOCOM'},{av:'AV51TitularBairroComercial',fld:'vTITULARBAIRROCOMERCIAL'},{av:'AV52TitularCidadeIdCom',fld:'vTITULARCIDADEIDCOM'},{av:'AV53TitularCidadeNomeCom',fld:'vTITULARCIDADENOMECOM'},{av:'AV54TitularTelefoneComercial',fld:'vTITULARTELEFONECOMERCIAL'},{av:'AV109TitularBanco',fld:'vTITULARBANCO'},{av:'AV110TitularAgencia',fld:'vTITULARAGENCIA'},{av:'AV111TitularDigito',fld:'vTITULARDIGITO'},{av:'AV112TitularContaBanc',fld:'vTITULARCONTABANC'},{av:'AV113TitularObservacao',fld:'vTITULAROBSERVACAO'},{av:'AV114TitularTpIdMensal',fld:'vTITULARTPIDMENSAL'},{av:'AV115TitularTpDescMensal',fld:'vTITULARTPDESCMENSAL'}],[{av:'AV103SnFechar',fld:'vSNFECHAR'},{av:'AV104Contador',fld:'vCONTADOR'},{av:'AV135Imagem',fld:'vIMAGEM'},{av:'AV126ImagemTituloCan',fld:'vIMAGEMTITULOCAN'},{av:'AV107ImagemTitulo',fld:'vIMAGEMTITULO'},{av:'AV99NovoNomeAux',fld:'vNOVONOMEAUX'},{av:'AV61path',fld:'vPATH'},{av:'AV140Path2',fld:'vPATH2'},{av:'AV23CategoriaId',fld:'vCATEGORIAID'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV67CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV25TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV28TitularRG',fld:'vTITULARRG'},{av:'AV29OrgaoEmissor',fld:'vORGAOEMISSOR'},{av:'AV30TitularCPF',fld:'vTITULARCPF'},{av:'AV31TitularDtNascimento',fld:'vTITULARDTNASCIMENTO'},{av:'AV32TitularNomePai',fld:'vTITULARNOMEPAI'},{av:'AV33TitularNomeMae',fld:'vTITULARNOMEMAE'},{av:'AV34TitularNaturalidadeId',fld:'vTITULARNATURALIDADEID'},{av:'AV35TitularNaturalidadeNome',fld:'vTITULARNATURALIDADENOME'},{av:'AV37TitularProfissao',fld:'vTITULARPROFISSAO'},{av:'AV36TitularLocalTrabalho',fld:'vTITULARLOCALTRABALHO'},{av:'AV57TitularDtAdmissao',fld:'vTITULARDTADMISSAO'},{av:'AV108TitularDtCancelamento',fld:'vTITULARDTCANCELAMENTO'},{av:'AV55TitularEmail',fld:'vTITULAREMAIL'},{av:'AV59TitularAtivo',fld:'vTITULARATIVO'},{av:'AV26EstadoCivil',fld:'vESTADOCIVIL'},{av:'AV27TitularSexo',fld:'vTITULARSEXO'},{av:'AV58TitularDtRecadastramento',fld:'vTITULARDTRECADASTRAMENTO'},{av:'AV127TitularDtValidade',fld:'vTITULARDTVALIDADE'},{av:'AV38TitularCep',fld:'vTITULARCEP'},{av:'AV39TitularEndereco',fld:'vTITULARENDERECO'},{av:'AV40TitularEndNumero',fld:'vTITULARENDNUMERO'},{av:'AV41TitularEndComplemento',fld:'vTITULARENDCOMPLEMENTO'},{av:'AV42TitularBairro',fld:'vTITULARBAIRRO'},{av:'AV44TitularCidadeId',fld:'vTITULARCIDADEID'},{av:'AV43TitularCidadeNome',fld:'vTITULARCIDADENOME'},{av:'AV45TitularTelefone',fld:'vTITULARTELEFONE'},{av:'AV56TitularCelular',fld:'vTITULARCELULAR'},{av:'AV47TitularCepComercial',fld:'vTITULARCEPCOMERCIAL'},{av:'AV48TitularEnderecoComercial',fld:'vTITULARENDERECOCOMERCIAL'},{av:'AV49TitularEndNumeroCom',fld:'vTITULARENDNUMEROCOM'},{av:'AV50TitularEndComplementoCom',fld:'vTITULARENDCOMPLEMENTOCOM'},{av:'AV51TitularBairroComercial',fld:'vTITULARBAIRROCOMERCIAL'},{av:'AV52TitularCidadeIdCom',fld:'vTITULARCIDADEIDCOM'},{av:'AV53TitularCidadeNomeCom',fld:'vTITULARCIDADENOMECOM'},{av:'AV54TitularTelefoneComercial',fld:'vTITULARTELEFONECOMERCIAL'},{av:'AV109TitularBanco',fld:'vTITULARBANCO'},{av:'AV110TitularAgencia',fld:'vTITULARAGENCIA'},{av:'AV111TitularDigito',fld:'vTITULARDIGITO'},{av:'AV112TitularContaBanc',fld:'vTITULARCONTABANC'},{av:'AV113TitularObservacao',fld:'vTITULAROBSERVACAO'},{av:'AV114TitularTpIdMensal',fld:'vTITULARTPIDMENSAL'},{av:'AV115TitularTpDescMensal',fld:'vTITULARTPDESCMENSAL'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV106AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV124SnPrompt',fld:'vSNPROMPT'},{av:'AV121SnCliente',fld:'vSNCLIENTE'},{av:'AV122SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV123SnFabricante',fld:'vSNFABRICANTE'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV138BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV131PastaImagem',fld:'vPASTAIMAGEM'},{av:'AV142Chave',fld:'vCHAVE'}],[{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV123SnFabricante',fld:'vSNFABRICANTE'},{av:'AV122SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV126ImagemTituloCan',fld:'vIMAGEMTITULOCAN'},{av:'AV107ImagemTitulo',fld:'vIMAGEMTITULO'},{av:'AV99NovoNomeAux',fld:'vNOVONOMEAUX'},{av:'AV140Path2',fld:'vPATH2'}]];
   this.EvtParms["ENTER"] = [[{av:'AV84Modo',fld:'vMODO'},{av:'AV23CategoriaId',fld:'vCATEGORIAID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV66CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2597CategoriaTipoCobranca',fld:'CATEGORIATIPOCOBRANCA'},{av:'A3129CategoriaSnVlrDependente',fld:'CATEGORIASNVLRDEPENDENTE'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV72EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV71ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV67CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV25TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV30TitularCPF',fld:'vTITULARCPF'},{av:'AV31TitularDtNascimento',fld:'vTITULARDTNASCIMENTO'},{av:'AV32TitularNomePai',fld:'vTITULARNOMEPAI'},{av:'AV33TitularNomeMae',fld:'vTITULARNOMEMAE'},{av:'AV34TitularNaturalidadeId',fld:'vTITULARNATURALIDADEID'},{av:'A147CidadesId',fld:'CIDADESID'},{av:'AV57TitularDtAdmissao',fld:'vTITULARDTADMISSAO'},{av:'AV108TitularDtCancelamento',fld:'vTITULARDTCANCELAMENTO'},{av:'AV59TitularAtivo',fld:'vTITULARATIVO'},{av:'AV26EstadoCivil',fld:'vESTADOCIVIL'},{av:'AV27TitularSexo',fld:'vTITULARSEXO'},{av:'AV38TitularCep',fld:'vTITULARCEP'},{av:'AV39TitularEndereco',fld:'vTITULARENDERECO'},{av:'AV40TitularEndNumero',fld:'vTITULARENDNUMERO'},{av:'AV42TitularBairro',fld:'vTITULARBAIRRO'},{av:'AV44TitularCidadeId',fld:'vTITULARCIDADEID'},{av:'AV47TitularCepComercial',fld:'vTITULARCEPCOMERCIAL'},{av:'AV48TitularEnderecoComercial',fld:'vTITULARENDERECOCOMERCIAL'},{av:'AV49TitularEndNumeroCom',fld:'vTITULARENDNUMEROCOM'},{av:'AV51TitularBairroComercial',fld:'vTITULARBAIRROCOMERCIAL'},{av:'AV52TitularCidadeIdCom',fld:'vTITULARCIDADEIDCOM'},{av:'AV114TitularTpIdMensal',fld:'vTITULARTPIDMENSAL'},{av:'AV116TipoCobMensalParm',fld:'vTIPOCOBMENSALPARM'},{av:'AV117TipoCobrancaEmpresaId',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV28TitularRG',fld:'vTITULARRG'},{av:'AV29OrgaoEmissor',fld:'vORGAOEMISSOR'},{av:'AV35TitularNaturalidadeNome',fld:'vTITULARNATURALIDADENOME'},{av:'AV37TitularProfissao',fld:'vTITULARPROFISSAO'},{av:'AV36TitularLocalTrabalho',fld:'vTITULARLOCALTRABALHO'},{av:'AV55TitularEmail',fld:'vTITULAREMAIL'},{av:'AV58TitularDtRecadastramento',fld:'vTITULARDTRECADASTRAMENTO'},{av:'AV127TitularDtValidade',fld:'vTITULARDTVALIDADE'},{av:'AV41TitularEndComplemento',fld:'vTITULARENDCOMPLEMENTO'},{av:'AV43TitularCidadeNome',fld:'vTITULARCIDADENOME'},{av:'AV45TitularTelefone',fld:'vTITULARTELEFONE'},{av:'AV56TitularCelular',fld:'vTITULARCELULAR'},{av:'AV50TitularEndComplementoCom',fld:'vTITULARENDCOMPLEMENTOCOM'},{av:'AV53TitularCidadeNomeCom',fld:'vTITULARCIDADENOMECOM'},{av:'AV54TitularTelefoneComercial',fld:'vTITULARTELEFONECOMERCIAL'},{av:'AV109TitularBanco',fld:'vTITULARBANCO'},{av:'AV110TitularAgencia',fld:'vTITULARAGENCIA'},{av:'AV111TitularDigito',fld:'vTITULARDIGITO'},{av:'AV112TitularContaBanc',fld:'vTITULARCONTABANC'},{av:'AV113TitularObservacao',fld:'vTITULAROBSERVACAO'},{av:'AV105CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV120CategoriaSnVlrDependente',fld:'vCATEGORIASNVLRDEPENDENTE'},{av:'AV125ClassificacaoPrincipal',fld:'vCLASSIFICACAOPRINCIPAL'},{av:'AV129TitularAux',fld:'vTITULARAUX'},{av:'AV138BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV131PastaImagem',fld:'vPASTAIMAGEM'},{av:'AV143TitularAtivoAnt',fld:'vTITULARATIVOANT'},{av:'AV142Chave',fld:'vCHAVE'},{av:'AV115TitularTpDescMensal',fld:'vTITULARTPDESCMENSAL'}],[{av:'AV70tpErro',fld:'vTPERRO'},{av:'AV155GXLvl187',fld:'vGXLVL187'},{av:'AV105CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV120CategoriaSnVlrDependente',fld:'vCATEGORIASNVLRDEPENDENTE'},{av:'AV93CategoriaIdAux',fld:'vCATEGORIAIDAUX'},{av:'AV156GXLvl204',fld:'vGXLVL204'},{av:'AV71ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV67CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV23CategoriaId',fld:'vCATEGORIAID'},{av:'AV158GXLvl284',fld:'vGXLVL284'},{av:'AV159GXLvl360',fld:'vGXLVL360'},{av:'AV160GXLvl407',fld:'vGXLVL407'},{av:'AV115TitularTpDescMensal',fld:'vTITULARTPDESCMENSAL'},{av:'AV94Usuario',fld:'vUSUARIO'},{av:'AV95DataHora',fld:'vDATAHORA'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'AV24TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV108TitularDtCancelamento',fld:'vTITULARDTCANCELAMENTO'},{av:'AV85Retorno',fld:'vRETORNO'},{av:'AV84Modo',fld:'vMODO'},{av:'AV114TitularTpIdMensal',fld:'vTITULARTPIDMENSAL'},{av:'AV113TitularObservacao',fld:'vTITULAROBSERVACAO'},{av:'AV112TitularContaBanc',fld:'vTITULARCONTABANC'},{av:'AV111TitularDigito',fld:'vTITULARDIGITO'},{av:'AV110TitularAgencia',fld:'vTITULARAGENCIA'},{av:'AV109TitularBanco',fld:'vTITULARBANCO'},{av:'AV54TitularTelefoneComercial',fld:'vTITULARTELEFONECOMERCIAL'},{av:'AV53TitularCidadeNomeCom',fld:'vTITULARCIDADENOMECOM'},{av:'AV52TitularCidadeIdCom',fld:'vTITULARCIDADEIDCOM'},{av:'AV51TitularBairroComercial',fld:'vTITULARBAIRROCOMERCIAL'},{av:'AV50TitularEndComplementoCom',fld:'vTITULARENDCOMPLEMENTOCOM'},{av:'AV49TitularEndNumeroCom',fld:'vTITULARENDNUMEROCOM'},{av:'AV48TitularEnderecoComercial',fld:'vTITULARENDERECOCOMERCIAL'},{av:'AV47TitularCepComercial',fld:'vTITULARCEPCOMERCIAL'},{av:'AV56TitularCelular',fld:'vTITULARCELULAR'},{av:'AV45TitularTelefone',fld:'vTITULARTELEFONE'},{av:'AV43TitularCidadeNome',fld:'vTITULARCIDADENOME'},{av:'AV44TitularCidadeId',fld:'vTITULARCIDADEID'},{av:'AV42TitularBairro',fld:'vTITULARBAIRRO'},{av:'AV41TitularEndComplemento',fld:'vTITULARENDCOMPLEMENTO'},{av:'AV40TitularEndNumero',fld:'vTITULARENDNUMERO'},{av:'AV39TitularEndereco',fld:'vTITULARENDERECO'},{av:'AV38TitularCep',fld:'vTITULARCEP'},{av:'AV127TitularDtValidade',fld:'vTITULARDTVALIDADE'},{av:'AV58TitularDtRecadastramento',fld:'vTITULARDTRECADASTRAMENTO'},{av:'AV27TitularSexo',fld:'vTITULARSEXO'},{av:'AV26EstadoCivil',fld:'vESTADOCIVIL'},{av:'AV59TitularAtivo',fld:'vTITULARATIVO'},{av:'AV55TitularEmail',fld:'vTITULAREMAIL'},{av:'AV57TitularDtAdmissao',fld:'vTITULARDTADMISSAO'},{av:'AV36TitularLocalTrabalho',fld:'vTITULARLOCALTRABALHO'},{av:'AV37TitularProfissao',fld:'vTITULARPROFISSAO'},{av:'AV35TitularNaturalidadeNome',fld:'vTITULARNATURALIDADENOME'},{av:'AV34TitularNaturalidadeId',fld:'vTITULARNATURALIDADEID'},{av:'AV33TitularNomeMae',fld:'vTITULARNOMEMAE'},{av:'AV32TitularNomePai',fld:'vTITULARNOMEPAI'},{av:'AV31TitularDtNascimento',fld:'vTITULARDTNASCIMENTO'},{av:'AV30TitularCPF',fld:'vTITULARCPF'},{av:'AV29OrgaoEmissor',fld:'vORGAOEMISSOR'},{av:'AV28TitularRG',fld:'vTITULARRG'},{av:'AV25TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV104Contador',fld:'vCONTADOR'},{av:'AV129TitularAux',fld:'vTITULARAUX'},{av:'AV126ImagemTituloCan',fld:'vIMAGEMTITULOCAN'},{av:'AV107ImagemTitulo',fld:'vIMAGEMTITULO'},{av:'AV99NovoNomeAux',fld:'vNOVONOMEAUX'},{av:'AV61path',fld:'vPATH'},{av:'AV140Path2',fld:'vPATH2'},{av:'AV145RetornoWebService',fld:'vRETORNOWEBSERVICE'},{av:'AV148Chamada',fld:'vCHAMADA'},{av:'AV146retHttp',fld:'vRETHTTP'},{av:'AV147Pos',fld:'vPOS'}]];
   this.EvtParms["'UPLOAD'"] = [[],[]];
   this.setPrompt("PROMPT_CATEGORIAID", [17]);
   this.setPrompt("IMGPROMPT1", [148]);
   this.setPrompt("PROMPT_TITULARNATURALIDADEID", [64]);
   this.setPrompt("IMGPROMPT2", [201]);
   this.setPrompt("PROMPT_TITULARCIDADEID", [179]);
   this.setPrompt("PROMPT_TITULARCIDADEIDCOM", [232]);
   this.setPrompt("PROMPT_TITULARTPIDMENSAL", [273]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV84Modo", "vMODO", 0, "char");
   this.setVCMap("AV121SnCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV122SnFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV123SnFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV124SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastrotitular());
