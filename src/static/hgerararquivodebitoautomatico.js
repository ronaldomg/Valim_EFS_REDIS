/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:47.39
*/
gx.evt.autoSkip = false;
gx.define('hgerararquivodebitoautomatico', false, function () {
   this.ServerClass =  "hgerararquivodebitoautomatico" ;
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
   this.Validv_Tipocobrancaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCOBRANCAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bancoagenciaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOAGENCIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOEMPRESAID");
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
   this.e11kg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13kg2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15kg2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16kg2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17kg2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e18kg2_client=function()
   {
      this.executeServerEvent("'BUSCARARQUIVO'", true, null, false, false);
   };
   this.e20kg2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,32,35,37,39,42,44,45,48,50,53,55,57,59,64,67,69,72,74,77,79,82,84,88,95,98,99,100,102,104,105,106];
   this.GXLastCtrlId =106;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV64TxtTela",gxold:"OV64TxtTela",gxvar:"AV64TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV64TxtTela=Value},v2z:function(Value){gx.O.ZV64TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV64TxtTela)},c2v:function(){gx.O.AV64TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE6",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[32]={fld:"TABLE8",grid:0};
   GXValidFnc[35]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDT_VENCIMENTO_INI",gxz:"ZV19Dt_Vencimento_ini",gxold:"OV19Dt_Vencimento_ini",gxvar:"AV19Dt_Vencimento_ini",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Dt_Vencimento_ini=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19Dt_Vencimento_ini=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDT_VENCIMENTO_INI",gx.O.AV19Dt_Vencimento_ini,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19Dt_Vencimento_ini=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDT_VENCIMENTO_INI")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[37]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDT_VENCIMENTO_FIM",gxz:"ZV31Dt_Vencimento_fim",gxold:"OV31Dt_Vencimento_fim",gxvar:"AV31Dt_Vencimento_fim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Dt_Vencimento_fim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31Dt_Vencimento_fim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDT_VENCIMENTO_FIM",gx.O.AV31Dt_Vencimento_fim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31Dt_Vencimento_fim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDT_VENCIMENTO_FIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocobrancaid,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAID",gxz:"ZV20TipoCobrancaId",gxold:"OV20TipoCobrancaId",gxvar:"AV20TipoCobrancaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TipoCobrancaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20TipoCobrancaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAID",gx.O.AV20TipoCobrancaId,0)},c2v:function(){gx.O.AV20TipoCobrancaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCOBRANCAID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCADESCRICAO",gxz:"ZV33TipoCobrancaDescricao",gxold:"OV33TipoCobrancaDescricao",gxvar:"AV33TipoCobrancaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33TipoCobrancaDescricao=Value},v2z:function(Value){gx.O.ZV33TipoCobrancaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCADESCRICAO",gx.O.AV33TipoCobrancaDescricao,0)},c2v:function(){gx.O.AV33TipoCobrancaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOBRANCADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[50]={fld:"TABLE5",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoid,isvalid:null,rgrid:[],fld:"vBANCOID",gxz:"ZV21BancoId",gxold:"OV21BancoId",gxvar:"AV21BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21BancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOID",gx.O.AV21BancoId,0)},c2v:function(){gx.O.AV21BancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoagenciaid,isvalid:null,rgrid:[],fld:"vBANCOAGENCIAID",gxz:"ZV22BancoAgenciaId",gxold:"OV22BancoAgenciaId",gxvar:"AV22BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22BancoAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIAID",gx.O.AV22BancoAgenciaId,0)},c2v:function(){gx.O.AV22BancoAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOAGENCIANOME",gxz:"ZV23BancoAgenciaNome",gxold:"OV23BancoAgenciaNome",gxvar:"AV23BancoAgenciaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23BancoAgenciaNome=Value},v2z:function(Value){gx.O.ZV23BancoAgenciaNome=Value},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIANOME",gx.O.AV23BancoAgenciaNome,0)},c2v:function(){gx.O.AV23BancoAgenciaNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCOAGENCIANOME")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATA_VENCIMENTO",gxz:"ZV25Data_Vencimento",gxold:"OV25Data_Vencimento",gxvar:"AV25Data_Vencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Data_Vencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25Data_Vencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATA_VENCIMENTO",gx.O.AV25Data_Vencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25Data_Vencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATA_VENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNROSEQUENCIAL",gxz:"ZV26NroSequencial",gxold:"OV26NroSequencial",gxvar:"AV26NroSequencial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26NroSequencial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26NroSequencial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNROSEQUENCIAL",gx.O.AV26NroSequencial,0)},c2v:function(){gx.O.AV26NroSequencial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNROSEQUENCIAL",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMCONVENIO",gxz:"ZV49NumConvenio",gxold:"OV49NumConvenio",gxvar:"AV49NumConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49NumConvenio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49NumConvenio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMCONVENIO",gx.O.AV49NumConvenio,0)},c2v:function(){gx.O.AV49NumConvenio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMCONVENIO",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESANOME",gxz:"ZV28EmpresaNome",gxold:"OV28EmpresaNome",gxvar:"AV28EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EmpresaNome=Value},v2z:function(Value){gx.O.ZV28EmpresaNome=Value},v2c:function(){gx.fn.setControlValue("vEMPRESANOME",gx.O.AV28EmpresaNome,0)},c2v:function(){gx.O.AV28EmpresaNome=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESANOME")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV39Diretorio",gxold:"OV39Diretorio",gxvar:"AV39Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39Diretorio=Value},v2z:function(Value){gx.O.ZV39Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV39Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV39Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[95]={fld:"JS", format:2,grid:0};
   GXValidFnc[98]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV36QtdeChar",gxold:"OV36QtdeChar",gxvar:"AV36QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV36QtdeChar,0)},c2v:function(){gx.O.AV36QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoempresaid,isvalid:null,rgrid:[],fld:"vBANCOEMPRESAID",gxz:"ZV48BancoEmpresaId",gxold:"OV48BancoEmpresaId",gxvar:"AV48BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48BancoEmpresaId=Value},v2z:function(Value){gx.O.ZV48BancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vBANCOEMPRESAID",gx.O.AV48BancoEmpresaId,0)},c2v:function(){gx.O.AV48BancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vBANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocobrancaempresaid,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAEMPRESAID",gxz:"ZV32TipoCobrancaEmpresaId",gxold:"OV32TipoCobrancaEmpresaId",gxvar:"AV32TipoCobrancaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TipoCobrancaEmpresaId=Value},v2z:function(Value){gx.O.ZV32TipoCobrancaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAEMPRESAID",gx.O.AV32TipoCobrancaEmpresaId,0)},c2v:function(){gx.O.AV32TipoCobrancaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOBRANCAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"BTNHELP",grid:0};
   GXValidFnc[104]={fld:"PROMPT_TIPOCOBRANCAID",grid:0};
   GXValidFnc[105]={fld:"PROMPT_BANCOID",grid:0};
   GXValidFnc[106]={fld:"PROMPT_BANCOAGENCIAID",grid:0};
   this.AV64TxtTela = "" ;
   this.ZV64TxtTela = "" ;
   this.OV64TxtTela = "" ;
   this.AV19Dt_Vencimento_ini = gx.date.nullDate() ;
   this.ZV19Dt_Vencimento_ini = gx.date.nullDate() ;
   this.OV19Dt_Vencimento_ini = gx.date.nullDate() ;
   this.AV31Dt_Vencimento_fim = gx.date.nullDate() ;
   this.ZV31Dt_Vencimento_fim = gx.date.nullDate() ;
   this.OV31Dt_Vencimento_fim = gx.date.nullDate() ;
   this.AV20TipoCobrancaId = 0 ;
   this.ZV20TipoCobrancaId = 0 ;
   this.OV20TipoCobrancaId = 0 ;
   this.AV33TipoCobrancaDescricao = "" ;
   this.ZV33TipoCobrancaDescricao = "" ;
   this.OV33TipoCobrancaDescricao = "" ;
   this.AV21BancoId = 0 ;
   this.ZV21BancoId = 0 ;
   this.OV21BancoId = 0 ;
   this.AV22BancoAgenciaId = 0 ;
   this.ZV22BancoAgenciaId = 0 ;
   this.OV22BancoAgenciaId = 0 ;
   this.AV23BancoAgenciaNome = "" ;
   this.ZV23BancoAgenciaNome = "" ;
   this.OV23BancoAgenciaNome = "" ;
   this.AV25Data_Vencimento = gx.date.nullDate() ;
   this.ZV25Data_Vencimento = gx.date.nullDate() ;
   this.OV25Data_Vencimento = gx.date.nullDate() ;
   this.AV26NroSequencial = 0 ;
   this.ZV26NroSequencial = 0 ;
   this.OV26NroSequencial = 0 ;
   this.AV49NumConvenio = 0 ;
   this.ZV49NumConvenio = 0 ;
   this.OV49NumConvenio = 0 ;
   this.AV28EmpresaNome = "" ;
   this.ZV28EmpresaNome = "" ;
   this.OV28EmpresaNome = "" ;
   this.AV39Diretorio = "" ;
   this.ZV39Diretorio = "" ;
   this.OV39Diretorio = "" ;
   this.AV36QtdeChar = 0 ;
   this.ZV36QtdeChar = 0 ;
   this.OV36QtdeChar = 0 ;
   this.AV48BancoEmpresaId = "" ;
   this.ZV48BancoEmpresaId = "" ;
   this.OV48BancoEmpresaId = "" ;
   this.AV32TipoCobrancaEmpresaId = "" ;
   this.ZV32TipoCobrancaEmpresaId = "" ;
   this.OV32TipoCobrancaEmpresaId = "" ;
   this.AV64TxtTela = "" ;
   this.AV19Dt_Vencimento_ini = gx.date.nullDate() ;
   this.AV31Dt_Vencimento_fim = gx.date.nullDate() ;
   this.AV20TipoCobrancaId = 0 ;
   this.AV33TipoCobrancaDescricao = "" ;
   this.AV21BancoId = 0 ;
   this.AV22BancoAgenciaId = 0 ;
   this.AV23BancoAgenciaNome = "" ;
   this.AV25Data_Vencimento = gx.date.nullDate() ;
   this.AV26NroSequencial = 0 ;
   this.AV49NumConvenio = 0 ;
   this.AV28EmpresaNome = "" ;
   this.AV39Diretorio = "" ;
   this.AV36QtdeChar = 0 ;
   this.AV48BancoEmpresaId = "" ;
   this.AV32TipoCobrancaEmpresaId = "" ;
   this.A953BancoAgenciaId = 0 ;
   this.A947BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A954BancoAgenciaNome = "" ;
   this.A948BancoNome = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A993TipoCobrancaDescricao = "" ;
   this.Events = {"e11kg2_client": ["'FECHAR'", true] ,"e13kg2_client": ["ENTER", true] ,"e15kg2_client": ["'SALVARTXT'", true] ,"e16kg2_client": ["VTXTTELA.CLICK", true] ,"e17kg2_client": ["'EXCLUIRTXT'", true] ,"e18kg2_client": ["'BUSCARARQUIVO'", true] ,"e20kg2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV39Diretorio',fld:'vDIRETORIO'},{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV76SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV64TxtTela',fld:'vTXTTELA'}],[{av:'AV64TxtTela',fld:'vTXTTELA'},{av:'AV89GXV2',fld:'vGXV2'},{av:'AV77SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV88GXV1',fld:'vGXV1'},{av:'AV25Data_Vencimento',fld:'vDATA_VENCIMENTO'},{av:'AV26NroSequencial',fld:'vNROSEQUENCIAL'},{av:'AV49NumConvenio',fld:'vNUMCONVENIO'},{av:'AV28EmpresaNome',fld:'vEMPRESANOME'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19Dt_Vencimento_ini',fld:'vDT_VENCIMENTO_INI'},{av:'AV31Dt_Vencimento_fim',fld:'vDT_VENCIMENTO_FIM'},{av:'AV20TipoCobrancaId',fld:'vTIPOCOBRANCAID'},{av:'A991TipoCobrancaEmpresaId',fld:'TIPOCOBRANCAEMPRESAID'},{av:'AV32TipoCobrancaEmpresaId',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'A993TipoCobrancaDescricao',fld:'TIPOCOBRANCADESCRICAO'},{av:'AV21BancoId',fld:'vBANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV48BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A948BancoNome',fld:'BANCONOME'},{av:'AV22BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A954BancoAgenciaNome',fld:'BANCOAGENCIANOME'},{av:'AV39Diretorio',fld:'vDIRETORIO'},{av:'AV25Data_Vencimento',fld:'vDATA_VENCIMENTO'},{av:'AV26NroSequencial',fld:'vNROSEQUENCIAL'},{av:'AV49NumConvenio',fld:'vNUMCONVENIO'},{av:'AV28EmpresaNome',fld:'vEMPRESANOME'},{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV13Ordenacao',fld:'vORDENACAO'},{av:'AV64TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV50TpErro',fld:'vTPERRO'},{av:'AV85GXLvl118',fld:'vGXLVL118'},{av:'AV33TipoCobrancaDescricao',fld:'vTIPOCOBRANCADESCRICAO'},{av:'AV86GXLvl137',fld:'vGXLVL137'},{av:'AV23BancoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'AV87GXLvl152',fld:'vGXLVL152'},{av:'AV12OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV28EmpresaNome',fld:'vEMPRESANOME'},{av:'AV49NumConvenio',fld:'vNUMCONVENIO'},{av:'AV26NroSequencial',fld:'vNROSEQUENCIAL'},{av:'AV25Data_Vencimento',fld:'vDATA_VENCIMENTO'},{av:'AV39Diretorio',fld:'vDIRETORIO'},{av:'AV22BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV21BancoId',fld:'vBANCOID'},{av:'AV20TipoCobrancaId',fld:'vTIPOCOBRANCAID'},{av:'AV31Dt_Vencimento_fim',fld:'vDT_VENCIMENTO_FIM'},{av:'AV19Dt_Vencimento_ini',fld:'vDT_VENCIMENTO_INI'},{av:'AV73SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV75OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV64TxtTela',fld:'vTXTTELA'},{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV25Data_Vencimento',fld:'vDATA_VENCIMENTO'},{av:'AV26NroSequencial',fld:'vNROSEQUENCIAL'},{av:'AV49NumConvenio',fld:'vNUMCONVENIO'},{av:'AV28EmpresaNome',fld:'vEMPRESANOME'}],[{av:'AV75OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV76SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV64TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV88GXV1',fld:'vGXV1'},{av:'AV77SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV25Data_Vencimento',fld:'vDATA_VENCIMENTO'},{av:'AV26NroSequencial',fld:'vNROSEQUENCIAL'},{av:'AV49NumConvenio',fld:'vNUMCONVENIO'},{av:'AV28EmpresaNome',fld:'vEMPRESANOME'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV64TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["'BUSCARARQUIVO'"] = [[],[]];
   this.setPrompt("PROMPT_TIPOCOBRANCAID", [44]);
   this.setPrompt("PROMPT_BANCOID", [53]);
   this.setPrompt("PROMPT_BANCOAGENCIAID", [57]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgerararquivodebitoautomatico());
