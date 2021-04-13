/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:53:27.16
*/
gx.evt.autoSkip = false;
gx.define('hclientesnaocompraram', false, function () {
   this.ServerClass =  "hclientesnaocompraram" ;
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
      this.AV51EmpresaPadraoCod=gx.fn.getControlValue("vEMPRESAPADRAOCOD") ;
   };
   this.Validv_Naocompraramcidadeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNAOCOMPRARAMCIDADEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naocompraramuf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNAOCOMPRARAMUF");
         this.AnyError  = 0;
         if ( ! ( this.AV28NaoCompraramUf == "" || this.AV28NaoCompraramUf == "AC" || this.AV28NaoCompraramUf == "AL" || this.AV28NaoCompraramUf == "AP" || this.AV28NaoCompraramUf == "AM" || this.AV28NaoCompraramUf == "BA" || this.AV28NaoCompraramUf == "CE" || this.AV28NaoCompraramUf == "DF" || this.AV28NaoCompraramUf == "ES" || this.AV28NaoCompraramUf == "GO" || this.AV28NaoCompraramUf == "MA" || this.AV28NaoCompraramUf == "MT" || this.AV28NaoCompraramUf == "MS" || this.AV28NaoCompraramUf == "MG" || this.AV28NaoCompraramUf == "PA" || this.AV28NaoCompraramUf == "PB" || this.AV28NaoCompraramUf == "PR" || this.AV28NaoCompraramUf == "PE" || this.AV28NaoCompraramUf == "PI" || this.AV28NaoCompraramUf == "RJ" || this.AV28NaoCompraramUf == "RN" || this.AV28NaoCompraramUf == "RS" || this.AV28NaoCompraramUf == "RO" || this.AV28NaoCompraramUf == "RR" || this.AV28NaoCompraramUf == "SC" || this.AV28NaoCompraramUf == "SP" || this.AV28NaoCompraramUf == "SE" || this.AV28NaoCompraramUf == "TO" || this.AV28NaoCompraramUf == "EX" ) )
         {
            try {
               gxballoon.setError("Campo NaoCompraramUf fora do intervalo");
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
   this.Validv_Empresapadraocla=function()
   {
      gx.ajax.validSrvEvt("dyncall","validv_Empresapadraocla",["gx.O.AV17EmpresaPadraoCla", "gx.O.AV8ClassificacaoId"],["AV8ClassificacaoId"]);
      return true;
   }
   this.s122_client=function()
   {
      this.AV45TpAtualizacao =  "N"  ;
      this.AV11ConsClienteSuspenso =  "S"  ;
      this.AV10ConsClientesCancel =  "S"  ;
   };
   this.e171zy1_client=function()
   {
      this.clearMessages();
      this.AV32OpcClassificIni =  ""  ;
      this.AV31OpcClassificFin =  ""  ;
      this.refreshOutputs([{av:'AV32OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV31OpcClassificFin',fld:'vOPCCLASSIFICFIN'}]);
   };
   this.e181zy1_client=function()
   {
      this.clearMessages();
      this.AV56ValorCodificacaoIni =  ""  ;
      this.AV55ValorCodificacaoFin =  ""  ;
      this.refreshOutputs([{av:'AV56ValorCodificacaoIni',fld:'vVALORCODIFICACAOINI'},{av:'AV55ValorCodificacaoFin',fld:'vVALORCODIFICACAOFIN'}]);
   };
   this.e131zy2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e111zy2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141zy2_client=function()
   {
      this.executeServerEvent("'TIPOMOVIMENTO'", true, null, false, false);
   };
   this.e151zy2_client=function()
   {
      this.executeServerEvent("VVENDEDORID.ISVALID", true, null, false, true);
   };
   this.e191zy2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,27,29,32,34,40,42,43,46,48,51,53,56,58,60,63,65,68,70,72,75,77,80,82,85,87,90,92,94,97,99,102,104,107,109,111,114,116,117,120,122,123,125,134,137,140,143,146,155,156,158,160,161,162,163];
   this.GXLastCtrlId =163;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE13",grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV15DataIni",gxold:"OV15DataIni",gxvar:"AV15DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV15DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV15DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIM",gxz:"ZV14DataFim",gxold:"OV14DataFim",gxvar:"AV14DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV14DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPORDENACAO",gxz:"ZV46TpOrdenacao",gxold:"OV46TpOrdenacao",gxvar:"AV46TpOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV46TpOrdenacao=Value},v2z:function(Value){gx.O.ZV46TpOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPORDENACAO",gx.O.AV46TpOrdenacao)},c2v:function(){gx.O.AV46TpOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vTPORDENACAO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPATUALIZACAO",gxz:"ZV45TpAtualizacao",gxold:"OV45TpAtualizacao",gxvar:"AV45TpAtualizacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV45TpAtualizacao=Value},v2z:function(Value){gx.O.ZV45TpAtualizacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPATUALIZACAO",gx.O.AV45TpAtualizacao)},c2v:function(){gx.O.AV45TpAtualizacao=this.val()},val:function(){return gx.fn.getControlValue("vTPATUALIZACAO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naocompraramcidadeid,isvalid:null,rgrid:[],fld:"vNAOCOMPRARAMCIDADEID",gxz:"ZV26NaoCompraramCidadeId",gxold:"OV26NaoCompraramCidadeId",gxvar:"AV26NaoCompraramCidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26NaoCompraramCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26NaoCompraramCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNAOCOMPRARAMCIDADEID",gx.O.AV26NaoCompraramCidadeId,0)},c2v:function(){gx.O.AV26NaoCompraramCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNAOCOMPRARAMCIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAOCOMPRARAMCIDADENOME",gxz:"ZV27NaoCompraramCidadeNome",gxold:"OV27NaoCompraramCidadeNome",gxvar:"AV27NaoCompraramCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27NaoCompraramCidadeNome=Value},v2z:function(Value){gx.O.ZV27NaoCompraramCidadeNome=Value},v2c:function(){gx.fn.setControlValue("vNAOCOMPRARAMCIDADENOME",gx.O.AV27NaoCompraramCidadeNome,0)},c2v:function(){gx.O.AV27NaoCompraramCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("vNAOCOMPRARAMCIDADENOME")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naocompraramuf,isvalid:null,rgrid:[],fld:"vNAOCOMPRARAMUF",gxz:"ZV28NaoCompraramUf",gxold:"OV28NaoCompraramUf",gxvar:"AV28NaoCompraramUf",ucs:[],op:[48],ip:[48],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28NaoCompraramUf=Value},v2z:function(Value){gx.O.ZV28NaoCompraramUf=Value},v2c:function(){gx.fn.setComboBoxValue("vNAOCOMPRARAMUF",gx.O.AV28NaoCompraramUf)},c2v:function(){gx.O.AV28NaoCompraramUf=this.val()},val:function(){return gx.fn.getControlValue("vNAOCOMPRARAMUF")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[53]={fld:"TABLE16",grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACODIFICACAOPRINCIAPALINI",gxz:"ZV36PessoaCodificacaoPrinciapalIni",gxold:"OV36PessoaCodificacaoPrinciapalIni",gxvar:"AV36PessoaCodificacaoPrinciapalIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36PessoaCodificacaoPrinciapalIni=Value},v2z:function(Value){gx.O.ZV36PessoaCodificacaoPrinciapalIni=Value},v2c:function(){gx.fn.setControlValue("vPESSOACODIFICACAOPRINCIAPALINI",gx.O.AV36PessoaCodificacaoPrinciapalIni,0)},c2v:function(){gx.O.AV36PessoaCodificacaoPrinciapalIni=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACODIFICACAOPRINCIAPALINI")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACODIFICACAOPRINCIAPALFIM",gxz:"ZV35PessoaCodificacaoPrinciapalFim",gxold:"OV35PessoaCodificacaoPrinciapalFim",gxvar:"AV35PessoaCodificacaoPrinciapalFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PessoaCodificacaoPrinciapalFim=Value},v2z:function(Value){gx.O.ZV35PessoaCodificacaoPrinciapalFim=Value},v2c:function(){gx.fn.setControlValue("vPESSOACODIFICACAOPRINCIAPALFIM",gx.O.AV35PessoaCodificacaoPrinciapalFim,0)},c2v:function(){gx.O.AV35PessoaCodificacaoPrinciapalFim=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACODIFICACAOPRINCIAPALFIM")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[65]={fld:"TABLE15",grid:0};
   GXValidFnc[68]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACADASTRAMENTOINI",gxz:"ZV13DataCadastramentoIni",gxold:"OV13DataCadastramentoIni",gxvar:"AV13DataCadastramentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13DataCadastramentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13DataCadastramentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACADASTRAMENTOINI",gx.O.AV13DataCadastramentoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13DataCadastramentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACADASTRAMENTOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[70]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACADASTRAMENTOFIM",gxz:"ZV12DataCadastramentoFim",gxold:"OV12DataCadastramentoFim",gxvar:"AV12DataCadastramentoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12DataCadastramentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12DataCadastramentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACADASTRAMENTOFIM",gx.O.AV12DataCadastramentoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV12DataCadastramentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACADASTRAMENTOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[75]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPPESSOA",gxz:"ZV47TpPessoa",gxold:"OV47TpPessoa",gxvar:"AV47TpPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV47TpPessoa=Value},v2z:function(Value){gx.O.ZV47TpPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vTPPESSOA",gx.O.AV47TpPessoa)},c2v:function(){gx.O.AV47TpPessoa=this.val()},val:function(){return gx.fn.getControlValue("vTPPESSOA")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e171zy1_client',rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV8ClassificacaoId",gxold:"OV8ClassificacaoId",gxvar:"AV8ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV8ClassificacaoId=Value},v2z:function(Value){gx.O.ZV8ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV8ClassificacaoId)},c2v:function(){gx.O.AV8ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[87]={fld:"TABLE5",grid:0};
   GXValidFnc[90]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICINI",gxz:"ZV32OpcClassificIni",gxold:"OV32OpcClassificIni",gxvar:"AV32OpcClassificIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32OpcClassificIni=Value},v2z:function(Value){gx.O.ZV32OpcClassificIni=Value},v2c:function(){gx.fn.setControlValue("vOPCCLASSIFICINI",gx.O.AV32OpcClassificIni,0)},c2v:function(){gx.O.AV32OpcClassificIni=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICINI")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCCLASSIFICFIN",gxz:"ZV31OpcClassificFin",gxold:"OV31OpcClassificFin",gxvar:"AV31OpcClassificFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31OpcClassificFin=Value},v2z:function(Value){gx.O.ZV31OpcClassificFin=Value},v2c:function(){gx.fn.setControlValue("vOPCCLASSIFICFIN",gx.O.AV31OpcClassificFin,0)},c2v:function(){gx.O.AV31OpcClassificFin=this.val()},val:function(){return gx.fn.getControlValue("vOPCCLASSIFICFIN")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e181zy1_client',rgrid:[],fld:"vCODIFICACAOID",gxz:"ZV50Codificacaoid",gxold:"OV50Codificacaoid",gxvar:"AV50Codificacaoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV50Codificacaoid=Value},v2z:function(Value){gx.O.ZV50Codificacaoid=Value},v2c:function(){gx.fn.setComboBoxValue("vCODIFICACAOID",gx.O.AV50Codificacaoid)},c2v:function(){gx.O.AV50Codificacaoid=this.val()},val:function(){return gx.fn.getControlValue("vCODIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[104]={fld:"TABLE6",grid:0};
   GXValidFnc[107]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFICACAOINI",gxz:"ZV56ValorCodificacaoIni",gxold:"OV56ValorCodificacaoIni",gxvar:"AV56ValorCodificacaoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56ValorCodificacaoIni=Value},v2z:function(Value){gx.O.ZV56ValorCodificacaoIni=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFICACAOINI",gx.O.AV56ValorCodificacaoIni,0)},c2v:function(){gx.O.AV56ValorCodificacaoIni=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFICACAOINI")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"char",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCODIFICACAOFIN",gxz:"ZV55ValorCodificacaoFin",gxold:"OV55ValorCodificacaoFin",gxvar:"AV55ValorCodificacaoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55ValorCodificacaoFin=Value},v2z:function(Value){gx.O.ZV55ValorCodificacaoFin=Value},v2c:function(){gx.fn.setControlValue("vVALORCODIFICACAOFIN",gx.O.AV55ValorCodificacaoFin,0)},c2v:function(){gx.O.AV55ValorCodificacaoFin=this.val()},val:function(){return gx.fn.getControlValue("vVALORCODIFICACAOFIN")},nac:gx.falseFn};
   GXValidFnc[114]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[116]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTESATRASO",gxz:"ZV9ClientesAtraso",gxold:"OV9ClientesAtraso",gxvar:"AV9ClientesAtraso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ClientesAtraso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9ClientesAtraso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTESATRASO",gx.O.AV9ClientesAtraso,0)},c2v:function(){gx.O.AV9ClientesAtraso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTESATRASO",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[120]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[122]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorid,isvalid:'e151zy2_client',rgrid:[],fld:"vVENDEDORID",gxz:"ZV81VendedorId",gxold:"OV81VendedorId",gxvar:"AV81VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81VendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV81VendedorId,0)},c2v:function(){gx.O.AV81VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV82VendedorNome",gxold:"OV82VendedorNome",gxvar:"AV82VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82VendedorNome=Value},v2z:function(Value){gx.O.ZV82VendedorNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV82VendedorNome,0)},c2v:function(){gx.O.AV82VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[125]={fld:"TABLE1",grid:0};
   GXValidFnc[134]={fld:"FILTRARMOV", format:0,grid:0};
   GXValidFnc[137]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONSCLIENTESUSPENSO",gxz:"ZV11ConsClienteSuspenso",gxold:"OV11ConsClienteSuspenso",gxvar:"AV11ConsClienteSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV11ConsClienteSuspenso=Value},v2z:function(Value){gx.O.ZV11ConsClienteSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vCONSCLIENTESUSPENSO",gx.O.AV11ConsClienteSuspenso,"S")},c2v:function(){gx.O.AV11ConsClienteSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vCONSCLIENTESUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[140]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONSCLIENTESCANCEL",gxz:"ZV10ConsClientesCancel",gxold:"OV10ConsClientesCancel",gxvar:"AV10ConsClientesCancel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV10ConsClientesCancel=Value},v2z:function(Value){gx.O.ZV10ConsClientesCancel=Value},v2c:function(){gx.fn.setCheckBoxValue("vCONSCLIENTESCANCEL",gx.O.AV10ConsClientesCancel,"S")},c2v:function(){gx.O.AV10ConsClientesCancel=this.val()},val:function(){return gx.fn.getControlValue("vCONSCLIENTESCANCEL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[143]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPENASCLIENTESCOMPRARM",gxz:"ZV6ApenasClientesComprarm",gxold:"OV6ApenasClientesComprarm",gxvar:"AV6ApenasClientesComprarm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV6ApenasClientesComprarm=Value},v2z:function(Value){gx.O.ZV6ApenasClientesComprarm=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASCLIENTESCOMPRARM",gx.O.AV6ApenasClientesComprarm,"S")},c2v:function(){gx.O.AV6ApenasClientesComprarm=this.val()},val:function(){return gx.fn.getControlValue("vAPENASCLIENTESCOMPRARM")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[146]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGERARCSV",gxz:"ZV52SNGerarCSV",gxold:"OV52SNGerarCSV",gxvar:"AV52SNGerarCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV52SNGerarCSV=Value},v2z:function(Value){gx.O.ZV52SNGerarCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNGERARCSV",gx.O.AV52SNGerarCSV,"S")},c2v:function(){gx.O.AV52SNGerarCSV=this.val()},val:function(){return gx.fn.getControlValue("vSNGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[155]={fld:"JS", format:2,grid:0};
   GXValidFnc[156]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraocla,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCLA",gxz:"ZV17EmpresaPadraoCla",gxold:"OV17EmpresaPadraoCla",gxvar:"AV17EmpresaPadraoCla",ucs:[],op:[82],ip:[82,156],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadraoCla=Value},v2z:function(Value){gx.O.ZV17EmpresaPadraoCla=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCLA",gx.O.AV17EmpresaPadraoCla,0)},c2v:function(){gx.O.AV17EmpresaPadraoCla=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCLA")},nac:gx.falseFn};
   GXValidFnc[158]={fld:"BTNHELP",grid:0};
   GXValidFnc[160]={fld:"PROMPT_NAOCOMPRARAMCIDADEID",grid:0};
   GXValidFnc[161]={fld:"PROMPT_OPCCLASSIFICINI",grid:0};
   GXValidFnc[162]={fld:"PROMPT_OPCCLASSIFICFIN",grid:0};
   GXValidFnc[163]={fld:"PROMPT_VENDEDORID",grid:0};
   this.AV15DataIni = gx.date.nullDate() ;
   this.ZV15DataIni = gx.date.nullDate() ;
   this.OV15DataIni = gx.date.nullDate() ;
   this.AV14DataFim = gx.date.nullDate() ;
   this.ZV14DataFim = gx.date.nullDate() ;
   this.OV14DataFim = gx.date.nullDate() ;
   this.AV46TpOrdenacao = "" ;
   this.ZV46TpOrdenacao = "" ;
   this.OV46TpOrdenacao = "" ;
   this.AV45TpAtualizacao = "" ;
   this.ZV45TpAtualizacao = "" ;
   this.OV45TpAtualizacao = "" ;
   this.AV26NaoCompraramCidadeId = 0 ;
   this.ZV26NaoCompraramCidadeId = 0 ;
   this.OV26NaoCompraramCidadeId = 0 ;
   this.AV27NaoCompraramCidadeNome = "" ;
   this.ZV27NaoCompraramCidadeNome = "" ;
   this.OV27NaoCompraramCidadeNome = "" ;
   this.AV28NaoCompraramUf = "" ;
   this.ZV28NaoCompraramUf = "" ;
   this.OV28NaoCompraramUf = "" ;
   this.AV36PessoaCodificacaoPrinciapalIni = "" ;
   this.ZV36PessoaCodificacaoPrinciapalIni = "" ;
   this.OV36PessoaCodificacaoPrinciapalIni = "" ;
   this.AV35PessoaCodificacaoPrinciapalFim = "" ;
   this.ZV35PessoaCodificacaoPrinciapalFim = "" ;
   this.OV35PessoaCodificacaoPrinciapalFim = "" ;
   this.AV13DataCadastramentoIni = gx.date.nullDate() ;
   this.ZV13DataCadastramentoIni = gx.date.nullDate() ;
   this.OV13DataCadastramentoIni = gx.date.nullDate() ;
   this.AV12DataCadastramentoFim = gx.date.nullDate() ;
   this.ZV12DataCadastramentoFim = gx.date.nullDate() ;
   this.OV12DataCadastramentoFim = gx.date.nullDate() ;
   this.AV47TpPessoa = "" ;
   this.ZV47TpPessoa = "" ;
   this.OV47TpPessoa = "" ;
   this.AV8ClassificacaoId = "" ;
   this.ZV8ClassificacaoId = "" ;
   this.OV8ClassificacaoId = "" ;
   this.AV32OpcClassificIni = "" ;
   this.ZV32OpcClassificIni = "" ;
   this.OV32OpcClassificIni = "" ;
   this.AV31OpcClassificFin = "" ;
   this.ZV31OpcClassificFin = "" ;
   this.OV31OpcClassificFin = "" ;
   this.AV50Codificacaoid = "" ;
   this.ZV50Codificacaoid = "" ;
   this.OV50Codificacaoid = "" ;
   this.AV56ValorCodificacaoIni = "" ;
   this.ZV56ValorCodificacaoIni = "" ;
   this.OV56ValorCodificacaoIni = "" ;
   this.AV55ValorCodificacaoFin = "" ;
   this.ZV55ValorCodificacaoFin = "" ;
   this.OV55ValorCodificacaoFin = "" ;
   this.AV9ClientesAtraso = 0 ;
   this.ZV9ClientesAtraso = 0 ;
   this.OV9ClientesAtraso = 0 ;
   this.AV81VendedorId = 0 ;
   this.ZV81VendedorId = 0 ;
   this.OV81VendedorId = 0 ;
   this.AV82VendedorNome = "" ;
   this.ZV82VendedorNome = "" ;
   this.OV82VendedorNome = "" ;
   this.AV11ConsClienteSuspenso = "" ;
   this.ZV11ConsClienteSuspenso = "" ;
   this.OV11ConsClienteSuspenso = "" ;
   this.AV10ConsClientesCancel = "" ;
   this.ZV10ConsClientesCancel = "" ;
   this.OV10ConsClientesCancel = "" ;
   this.AV6ApenasClientesComprarm = "" ;
   this.ZV6ApenasClientesComprarm = "" ;
   this.OV6ApenasClientesComprarm = "" ;
   this.AV52SNGerarCSV = "" ;
   this.ZV52SNGerarCSV = "" ;
   this.OV52SNGerarCSV = "" ;
   this.AV17EmpresaPadraoCla = "" ;
   this.ZV17EmpresaPadraoCla = "" ;
   this.OV17EmpresaPadraoCla = "" ;
   this.AV15DataIni = gx.date.nullDate() ;
   this.AV14DataFim = gx.date.nullDate() ;
   this.AV46TpOrdenacao = "" ;
   this.AV45TpAtualizacao = "" ;
   this.AV26NaoCompraramCidadeId = 0 ;
   this.AV27NaoCompraramCidadeNome = "" ;
   this.AV28NaoCompraramUf = "" ;
   this.AV36PessoaCodificacaoPrinciapalIni = "" ;
   this.AV35PessoaCodificacaoPrinciapalFim = "" ;
   this.AV13DataCadastramentoIni = gx.date.nullDate() ;
   this.AV12DataCadastramentoFim = gx.date.nullDate() ;
   this.AV47TpPessoa = "" ;
   this.AV8ClassificacaoId = "" ;
   this.AV32OpcClassificIni = "" ;
   this.AV31OpcClassificFin = "" ;
   this.AV50Codificacaoid = "" ;
   this.AV56ValorCodificacaoIni = "" ;
   this.AV55ValorCodificacaoFin = "" ;
   this.AV9ClientesAtraso = 0 ;
   this.AV81VendedorId = 0 ;
   this.AV82VendedorNome = "" ;
   this.AV11ConsClienteSuspenso = "" ;
   this.AV10ConsClientesCancel = "" ;
   this.AV6ApenasClientesComprarm = "" ;
   this.AV52SNGerarCSV = "" ;
   this.AV17EmpresaPadraoCla = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1148VendedorNome = "" ;
   this.A147CidadesId = 0 ;
   this.A566TipoPermissaoUsuarioUsuarioId = "" ;
   this.A3138TipoPermissaoSnControla = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.A75UsuarioId = "" ;
   this.Events = {"e131zy2_client": ["ENTER", true] ,"e111zy2_client": ["'FECHAR'", true] ,"e141zy2_client": ["'TIPOMOVIMENTO'", true] ,"e151zy2_client": ["VVENDEDORID.ISVALID", true] ,"e191zy2_client": ["CANCEL", true] ,"e171zy1_client": ["VCLASSIFICACAOID.ISVALID", false] ,"e181zy1_client": ["VCODIFICACAOID.ISVALID", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV41SnErro',fld:'vSNERRO'},{av:'AV46TpOrdenacao',fld:'vTPORDENACAO'},{av:'AV86Pgmname',fld:'vPGMNAME'},{av:'AV37QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV15DataIni',fld:'vDATAINI'},{av:'AV14DataFim',fld:'vDATAFIM'},{av:'AV45TpAtualizacao',fld:'vTPATUALIZACAO'},{av:'AV26NaoCompraramCidadeId',fld:'vNAOCOMPRARAMCIDADEID'},{av:'AV28NaoCompraramUf',fld:'vNAOCOMPRARAMUF'},{av:'AV36PessoaCodificacaoPrinciapalIni',fld:'vPESSOACODIFICACAOPRINCIAPALINI'},{av:'AV35PessoaCodificacaoPrinciapalFim',fld:'vPESSOACODIFICACAOPRINCIAPALFIM'},{av:'AV13DataCadastramentoIni',fld:'vDATACADASTRAMENTOINI'},{av:'AV12DataCadastramentoFim',fld:'vDATACADASTRAMENTOFIM'},{av:'AV47TpPessoa',fld:'vTPPESSOA'},{av:'AV8ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV32OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV31OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV9ClientesAtraso',fld:'vCLIENTESATRASO'},{av:'AV11ConsClienteSuspenso',fld:'vCONSCLIENTESUSPENSO'},{av:'AV10ConsClientesCancel',fld:'vCONSCLIENTESCANCEL'},{av:'AV6ApenasClientesComprarm',fld:'vAPENASCLIENTESCOMPRARM'},{av:'AV50Codificacaoid',fld:'vCODIFICACAOID'},{av:'AV56ValorCodificacaoIni',fld:'vVALORCODIFICACAOINI'},{av:'AV55ValorCodificacaoFin',fld:'vVALORCODIFICACAOFIN'},{av:'AV52SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV81VendedorId',fld:'vVENDEDORID'},{av:'AV87Pgmdesc',fld:'vPGMDESC'},{av:'A147CidadesId',fld:'CIDADESID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV83VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV16EmpresaLogadaid',fld:'vEMPRESALOGADAID'}],[{av:'AV21filtros',fld:'vFILTROS'},{av:'AV33OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV30NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV29NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV81VendedorId',fld:'vVENDEDORID'},{av:'AV52SNGerarCSV',fld:'vSNGERARCSV'},{av:'AV55ValorCodificacaoFin',fld:'vVALORCODIFICACAOFIN'},{av:'AV56ValorCodificacaoIni',fld:'vVALORCODIFICACAOINI'},{av:'AV50Codificacaoid',fld:'vCODIFICACAOID'},{av:'AV6ApenasClientesComprarm',fld:'vAPENASCLIENTESCOMPRARM'},{av:'AV10ConsClientesCancel',fld:'vCONSCLIENTESCANCEL'},{av:'AV11ConsClienteSuspenso',fld:'vCONSCLIENTESUSPENSO'},{av:'AV9ClientesAtraso',fld:'vCLIENTESATRASO'},{av:'AV31OpcClassificFin',fld:'vOPCCLASSIFICFIN'},{av:'AV32OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV8ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV47TpPessoa',fld:'vTPPESSOA'},{av:'AV12DataCadastramentoFim',fld:'vDATACADASTRAMENTOFIM'},{av:'AV13DataCadastramentoIni',fld:'vDATACADASTRAMENTOINI'},{av:'AV35PessoaCodificacaoPrinciapalFim',fld:'vPESSOACODIFICACAOPRINCIAPALFIM'},{av:'AV36PessoaCodificacaoPrinciapalIni',fld:'vPESSOACODIFICACAOPRINCIAPALINI'},{av:'AV28NaoCompraramUf',fld:'vNAOCOMPRARAMUF'},{av:'AV26NaoCompraramCidadeId',fld:'vNAOCOMPRARAMCIDADEID'},{av:'AV45TpAtualizacao',fld:'vTPATUALIZACAO'},{av:'AV14DataFim',fld:'vDATAFIM'},{av:'AV15DataIni',fld:'vDATAINI'},{av:'AV37QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV46TpOrdenacao',fld:'vTPORDENACAO'},{av:'AV49Orientacao',fld:'vORIENTACAO'},{av:'AV42SNFECREL',fld:'vSNFECREL'},{av:'AV41SnErro',fld:'vSNERRO'},{av:'AV90GXLvl165',fld:'vGXLVL165'},{av:'AV91GXLvl232',fld:'vGXLVL232'},{av:'AV62SNPreVenda',fld:'vSNPREVENDA'},{av:'AV63SNCondicional',fld:'vSNCONDICIONAL'},{av:'AV64SNOrcamento',fld:'vSNORCAMENTO'},{av:'AV65SNEntregaFutura',fld:'vSNENTREGAFUTURA'},{av:'AV66SNSimplesRemessa',fld:'vSNSIMPLESREMESSA'},{av:'AV67SNDAV',fld:'vSNDAV'},{av:'AV80SNCupomFiscal',fld:'vSNCUPOMFISCAL'},{av:'AV68SNCupomFiscalEle',fld:'vSNCUPOMFISCALELE'},{av:'AV69SNNotaSaidaNormal',fld:'vSNNOTASAIDANORMAL'},{av:'AV70SNNotaSaidaCom',fld:'vSNNOTASAIDACOM'},{av:'AV71SNNotaSaidaAjuste',fld:'vSNNOTASAIDAAJUSTE'},{av:'AV72SNDevolucaoSaida',fld:'vSNDEVOLUCAOSAIDA'},{av:'AV73SNAjusteSaida',fld:'vSNAJUSTESAIDA'},{av:'AV74SNNotaEntradaNormal',fld:'vSNNOTAENTRADANORMAL'},{av:'AV75SNNotaEntradaCom',fld:'vSNNOTAENTRADACOM'},{av:'AV77SNNotaEntradaAjuste',fld:'vSNNOTAENTRADAAJUSTE'},{av:'AV76SNAjusteEntrada',fld:'vSNAJUSTEENTRADA'},{av:'AV78SNTroca',fld:'vSNTROCA'},{av:'AV79SNTransferencia',fld:'vSNTRANSFERENCIA'},{av:'AV57OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'TIPOMOVIMENTO'"] = [[{av:'AV20FilialId',fld:'vFILIALID'}],[{av:'AV20FilialId',fld:'vFILIALID'}]];
   this.EvtParms["VCLASSIFICACAOID.ISVALID"] = [[],[{av:'AV32OpcClassificIni',fld:'vOPCCLASSIFICINI'},{av:'AV31OpcClassificFin',fld:'vOPCCLASSIFICFIN'}]];
   this.EvtParms["VCODIFICACAOID.ISVALID"] = [[],[{av:'AV56ValorCodificacaoIni',fld:'vVALORCODIFICACAOINI'},{av:'AV55ValorCodificacaoFin',fld:'vVALORCODIFICACAOFIN'}]];
   this.EvtParms["VVENDEDORID.ISVALID"] = [[{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV83VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV81VendedorId',fld:'vVENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'}],[{av:'AV82VendedorNome',fld:'vVENDEDORNOME'}]];
   this.setPrompt("PROMPT_NAOCOMPRARAMCIDADEID", [42]);
   this.setPrompt("PROMPT_OPCCLASSIFICINI", [90]);
   this.setPrompt("PROMPT_OPCCLASSIFICFIN", [94]);
   this.setPrompt("PROMPT_VENDEDORID", [122]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV51EmpresaPadraoCod", "vEMPRESAPADRAOCOD", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hclientesnaocompraram());
