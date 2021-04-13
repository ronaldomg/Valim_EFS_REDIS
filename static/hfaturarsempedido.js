/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:18:29.87
*/
gx.evt.autoSkip = false;
gx.define('hfaturarsempedido', false, function () {
   this.ServerClass =  "hfaturarsempedido" ;
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
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Listaservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLISTASERVICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e202fw1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hfaturarsempedidoparm",[]), []);
      this.refreshOutputs([]);
   };
   this.e112fw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132fw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142fw2_client=function()
   {
      this.executeServerEvent("VPESSOAID.ISVALID", true, null, false, true);
   };
   this.e162fw2_client=function()
   {
      this.executeServerEvent("'COPIARNOTA'", false, null, false, false);
   };
   this.e172fw2_client=function()
   {
      this.executeServerEvent("VLISTASERVICOID.ISVALID", true, null, false, true);
   };
   this.e182fw2_client=function()
   {
      this.executeServerEvent("VFILIALID.ISVALID", true, null, false, true);
   };
   this.e212fw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,7,10,12,13,16,18,19,22,24,27,29,32,34,37,39,43,46,48,51,53,56,58,64,71,72,75,76,77,78,80,81,83,84,85];
   this.GXLastCtrlId =85;
   GXValidFnc[3]={fld:"TABLE3",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[12]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:'e182fw2_client',rgrid:[],fld:"vFILIALID",gxz:"ZV131FilialId",gxold:"OV131FilialId",gxvar:"AV131FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV131FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV131FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV131FilialId,0)},c2v:function(){gx.O.AV131FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV133FilialNome",gxold:"OV133FilialNome",gxvar:"AV133FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV133FilialNome=Value},v2z:function(Value){gx.O.ZV133FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV133FilialNome,0)},c2v:function(){gx.O.AV133FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:'e142fw2_client',rgrid:[],fld:"vPESSOAID",gxz:"ZV113PessoaID",gxold:"OV113PessoaID",gxvar:"AV113PessoaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113PessoaID=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV113PessoaID=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV113PessoaID,0)},c2v:function(){gx.O.AV113PessoaID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV114PessoaFantasia",gxold:"OV114PessoaFantasia",gxvar:"AV114PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114PessoaFantasia=Value},v2z:function(Value){gx.O.ZV114PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV114PessoaFantasia,0)},c2v:function(){gx.O.AV114PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTEMISSAO",gxz:"ZV7DtEmissao",gxold:"OV7DtEmissao",gxvar:"AV7DtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7DtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTEMISSAO",gx.O.AV7DtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7DtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTEMISSAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Listaservicoid,isvalid:'e172fw2_client',rgrid:[],fld:"vLISTASERVICOID",gxz:"ZV115ListaServicoID",gxold:"OV115ListaServicoID",gxvar:"AV115ListaServicoID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115ListaServicoID=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV115ListaServicoID=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLISTASERVICOID",gx.O.AV115ListaServicoID,0)},c2v:function(){gx.O.AV115ListaServicoID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLISTASERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORFATURA",gxz:"ZV116ValorFatura",gxold:"OV116ValorFatura",gxvar:"AV116ValorFatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV116ValorFatura=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV116ValorFatura=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORFATURA",gx.O.AV116ValorFatura,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV116ValorFatura=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORFATURA",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[37]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORAREDUZIR",gxz:"ZV117ValorAReduzir",gxold:"OV117ValorAReduzir",gxvar:"AV117ValorAReduzir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117ValorAReduzir=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV117ValorAReduzir=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORAREDUZIR",gx.O.AV117ValorAReduzir,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV117ValorAReduzir=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORAREDUZIR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISENTOISS",gxz:"ZV118IsentoISS",gxold:"OV118IsentoISS",gxvar:"AV118IsentoISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV118IsentoISS=Value},v2z:function(Value){gx.O.ZV118IsentoISS=Value},v2c:function(){gx.fn.setCheckBoxValue("vISENTOISS",gx.O.AV118IsentoISS,"S")},c2v:function(){gx.O.AV118IsentoISS=this.val()},val:function(){return gx.fn.getControlValue("vISENTOISS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[46]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERCENTUALISS",gxz:"ZV120PercentualISS",gxold:"OV120PercentualISS",gxvar:"AV120PercentualISS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120PercentualISS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV120PercentualISS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPERCENTUALISS",gx.O.AV120PercentualISS,2,',')},c2v:function(){gx.O.AV120PercentualISS=this.val()},val:function(){return gx.fn.getDecimalValue("vPERCENTUALISS",'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV121Observacao",gxold:"OV121Observacao",gxvar:"AV121Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121Observacao=Value},v2z:function(Value){gx.O.ZV121Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV121Observacao,0)},c2v:function(){gx.O.AV121Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLANCARFINANCEIRO",gxz:"ZV135SnLancarFinanceiro",gxold:"OV135SnLancarFinanceiro",gxvar:"AV135SnLancarFinanceiro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV135SnLancarFinanceiro=Value},v2z:function(Value){gx.O.ZV135SnLancarFinanceiro=Value},v2c:function(){gx.fn.setComboBoxValue("vSNLANCARFINANCEIRO",gx.O.AV135SnLancarFinanceiro)},c2v:function(){gx.O.AV135SnLancarFinanceiro=this.val()},val:function(){return gx.fn.getControlValue("vSNLANCARFINANCEIRO")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLE16",grid:0};
   GXValidFnc[71]={fld:"JS", format:2,grid:0};
   GXValidFnc[72]={fld:"TABINVISIVEL",grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLISTASERVICOIDIN",gxz:"ZV124ListaServicoIdIN",gxold:"OV124ListaServicoIdIN",gxvar:"AV124ListaServicoIdIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124ListaServicoIdIN=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV124ListaServicoIdIN=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLISTASERVICOIDIN",gx.O.AV124ListaServicoIdIN,0)},c2v:function(){gx.O.AV124ListaServicoIdIN=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLISTASERVICOIDIN",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOTASERVICOSEQ",gxz:"ZV128NotaServicoSeq",gxold:"OV128NotaServicoSeq",gxvar:"AV128NotaServicoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128NotaServicoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV128NotaServicoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNOTASERVICOSEQ",gx.O.AV128NotaServicoSeq,0)},c2v:function(){gx.O.AV128NotaServicoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNOTASERVICOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV123Sim",gxold:"OV123Sim",gxvar:"AV123Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123Sim=Value},v2z:function(Value){gx.O.ZV123Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV123Sim,0)},c2v:function(){gx.O.AV123Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV122Nao",gxold:"OV122Nao",gxvar:"AV122Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122Nao=Value},v2z:function(Value){gx.O.ZV122Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV122Nao,0)},c2v:function(){gx.O.AV122Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"BTNPARM",grid:0};
   GXValidFnc[81]={fld:"BTNHELP",grid:0};
   GXValidFnc[83]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[84]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[85]={fld:"PROMPT_LISTASERVICOID",grid:0};
   this.AV131FilialId = 0 ;
   this.ZV131FilialId = 0 ;
   this.OV131FilialId = 0 ;
   this.AV133FilialNome = "" ;
   this.ZV133FilialNome = "" ;
   this.OV133FilialNome = "" ;
   this.AV113PessoaID = 0 ;
   this.ZV113PessoaID = 0 ;
   this.OV113PessoaID = 0 ;
   this.AV114PessoaFantasia = "" ;
   this.ZV114PessoaFantasia = "" ;
   this.OV114PessoaFantasia = "" ;
   this.AV7DtEmissao = gx.date.nullDate() ;
   this.ZV7DtEmissao = gx.date.nullDate() ;
   this.OV7DtEmissao = gx.date.nullDate() ;
   this.AV115ListaServicoID = 0 ;
   this.ZV115ListaServicoID = 0 ;
   this.OV115ListaServicoID = 0 ;
   this.AV116ValorFatura = 0 ;
   this.ZV116ValorFatura = 0 ;
   this.OV116ValorFatura = 0 ;
   this.AV117ValorAReduzir = 0 ;
   this.ZV117ValorAReduzir = 0 ;
   this.OV117ValorAReduzir = 0 ;
   this.AV118IsentoISS = "" ;
   this.ZV118IsentoISS = "" ;
   this.OV118IsentoISS = "" ;
   this.AV120PercentualISS = 0 ;
   this.ZV120PercentualISS = 0 ;
   this.OV120PercentualISS = 0 ;
   this.AV121Observacao = "" ;
   this.ZV121Observacao = "" ;
   this.OV121Observacao = "" ;
   this.AV135SnLancarFinanceiro = "" ;
   this.ZV135SnLancarFinanceiro = "" ;
   this.OV135SnLancarFinanceiro = "" ;
   this.AV124ListaServicoIdIN = 0 ;
   this.ZV124ListaServicoIdIN = 0 ;
   this.OV124ListaServicoIdIN = 0 ;
   this.AV128NotaServicoSeq = 0 ;
   this.ZV128NotaServicoSeq = 0 ;
   this.OV128NotaServicoSeq = 0 ;
   this.AV123Sim = "" ;
   this.ZV123Sim = "" ;
   this.OV123Sim = "" ;
   this.AV122Nao = "" ;
   this.ZV122Nao = "" ;
   this.OV122Nao = "" ;
   this.AV131FilialId = 0 ;
   this.AV133FilialNome = "" ;
   this.AV113PessoaID = 0 ;
   this.AV114PessoaFantasia = "" ;
   this.AV7DtEmissao = gx.date.nullDate() ;
   this.AV115ListaServicoID = 0 ;
   this.AV116ValorFatura = 0 ;
   this.AV117ValorAReduzir = 0 ;
   this.AV118IsentoISS = "" ;
   this.AV120PercentualISS = 0 ;
   this.AV121Observacao = "" ;
   this.AV135SnLancarFinanceiro = "" ;
   this.AV124ListaServicoIdIN = 0 ;
   this.AV128NotaServicoSeq = 0 ;
   this.AV123Sim = "" ;
   this.AV122Nao = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A2983ListaServicoId = 0 ;
   this.A9276ListaServicoPercISS = 0 ;
   this.A11576NotaServicoPessoaId = 0 ;
   this.A11575NotaServicoPessoaEmpId = "" ;
   this.A9339NotaServicoListaServico = 0 ;
   this.A9323NotaServicoVlrServico = 0 ;
   this.A9324NotaServicoVlrDeducoes = 0 ;
   this.A9347NotaServicoOutrasInformacoes = "" ;
   this.A9332NotaServicoVlrIss = 0 ;
   this.A9333NotaServicoVlrIssRetido = 0 ;
   this.A9348NotaServicoSeq = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A140SistemaId = "" ;
   this.A138EmpresaId = "" ;
   this.A4303SistemaEmpresaSoma = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A434PessoaEmail = "" ;
   this.A9369NotaServicoOSEmpId = "" ;
   this.Events = {"e112fw2_client": ["'FECHAR'", true] ,"e132fw2_client": ["ENTER", true] ,"e142fw2_client": ["VPESSOAID.ISVALID", true] ,"e162fw2_client": ["'COPIARNOTA'", true] ,"e172fw2_client": ["VLISTASERVICOID.ISVALID", true] ,"e182fw2_client": ["VFILIALID.ISVALID", true] ,"e212fw2_client": ["CANCEL", true] ,"e202fw1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV134FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV10EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A4303SistemaEmpresaSoma',fld:'SISTEMAEMPRESASOMA'},{av:'AV135SnLancarFinanceiro',fld:'vSNLANCARFINANCEIRO'},{av:'A9348NotaServicoSeq',fld:'NOTASERVICOSEQ'},{av:'A9369NotaServicoOSEmpId',fld:'NOTASERVICOOSEMPID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV102PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV113PessoaID',fld:'vPESSOAID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV99SdtTela',fld:'vSDTTELA'},{av:'AV7DtEmissao',fld:'vDTEMISSAO'},{av:'AV115ListaServicoID',fld:'vLISTASERVICOID'},{av:'AV116ValorFatura',fld:'vVALORFATURA'},{av:'AV117ValorAReduzir',fld:'vVALORAREDUZIR'},{av:'AV118IsentoISS',fld:'vISENTOISS'},{av:'AV120PercentualISS',fld:'vPERCENTUALISS'},{av:'AV121Observacao',fld:'vOBSERVACAO'},{av:'AV131FilialId',fld:'vFILIALID'},{av:'AV48ObraEmpresaid',fld:'vOBRAEMPRESAID'},{av:'AV132SnSucesso',fld:'vSNSUCESSO'},{av:'AV14MsgErro',fld:'vMSGERRO'}],[{av:'AV130ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV131FilialId',fld:'vFILIALID'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{av:'AV133FilialNome',fld:'vFILIALNOME'},{av:'AV148GXLvl287',fld:'vGXLVL287'},{av:'gx.fn.getCtrlProperty("BTNPARM","Visible")',ctrl:'BTNPARM',prop:'Visible'},{av:'AV31UltimaNota',fld:'vULTIMANOTA'},{av:'AV125PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV99SdtTela',fld:'vSDTTELA'},{av:'AV36TpSerie',fld:'vTPSERIE'},{av:'AV37DataAtual',fld:'vDATAATUAL'},{av:'AV38Ano',fld:'vANO'},{av:'AV57SdtObra',fld:'vSDTOBRA'},{av:'AV129VlrIssRetido',fld:'vVLRISSRETIDO'},{av:'AV128NotaServicoSeq',fld:'vNOTASERVICOSEQ'},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV132SnSucesso',fld:'vSNSUCESSO'},{av:'AV113PessoaID',fld:'vPESSOAID'},{av:'AV114PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV7DtEmissao',fld:'vDTEMISSAO'},{av:'AV115ListaServicoID',fld:'vLISTASERVICOID'},{av:'AV116ValorFatura',fld:'vVALORFATURA'},{av:'AV117ValorAReduzir',fld:'vVALORAREDUZIR'},{av:'AV118IsentoISS',fld:'vISENTOISS'},{av:'AV120PercentualISS',fld:'vPERCENTUALISS'},{av:'AV121Observacao',fld:'vOBSERVACAO'},{av:'AV135SnLancarFinanceiro',fld:'vSNLANCARFINANCEIRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV29TpErro',fld:'vTPERRO'},{av:'AV135SnLancarFinanceiro',fld:'vSNLANCARFINANCEIRO'},{av:'AV131FilialId',fld:'vFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV134FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV113PessoaID',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV102PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV7DtEmissao',fld:'vDTEMISSAO'},{av:'AV115ListaServicoID',fld:'vLISTASERVICOID'},{av:'A2983ListaServicoId',fld:'LISTASERVICOID'},{av:'AV116ValorFatura',fld:'vVALORFATURA'},{av:'AV117ValorAReduzir',fld:'vVALORAREDUZIR'},{av:'AV118IsentoISS',fld:'vISENTOISS'},{av:'AV120PercentualISS',fld:'vPERCENTUALISS'},{av:'A9348NotaServicoSeq',fld:'NOTASERVICOSEQ'},{av:'A9369NotaServicoOSEmpId',fld:'NOTASERVICOOSEMPID'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV99SdtTela',fld:'vSDTTELA'},{av:'AV121Observacao',fld:'vOBSERVACAO'}],[{av:'AV126DetItemNFSE',fld:'vDETITEMNFSE'},{av:'AV127SdtParCPC',fld:'vSDTPARCPC'},{av:'AV29TpErro',fld:'vTPERRO'},{av:'AV143GXLvl149',fld:'vGXLVL149'},{av:'AV144GXLvl165',fld:'vGXLVL165'},{av:'AV11ErroDt',fld:'vERRODT'},{av:'AV145GXLvl197',fld:'vGXLVL197'},{av:'AV136TransacaoPagRecId',fld:'vTRANSACAOPAGRECID'},{av:'AV31UltimaNota',fld:'vULTIMANOTA'},{av:'AV125PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV99SdtTela',fld:'vSDTTELA'},{av:'AV36TpSerie',fld:'vTPSERIE'},{av:'AV37DataAtual',fld:'vDATAATUAL'},{av:'AV38Ano',fld:'vANO'},{av:'AV57SdtObra',fld:'vSDTOBRA'}]];
   this.EvtParms["VPESSOAID.ISVALID"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV102PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV113PessoaID',fld:'vPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'}],[{av:'AV114PessoaFantasia',fld:'vPESSOAFANTASIA'}]];
   this.EvtParms["'COPIARNOTA'"] = [[{av:'AV113PessoaID',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV102PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A9348NotaServicoSeq',fld:'NOTASERVICOSEQ'},{av:'A11575NotaServicoPessoaEmpId',fld:'NOTASERVICOPESSOAEMPID'},{av:'A11576NotaServicoPessoaId',fld:'NOTASERVICOPESSOAID'},{av:'A9339NotaServicoListaServico',fld:'NOTASERVICOLISTASERVICO'},{av:'A9323NotaServicoVlrServico',fld:'NOTASERVICOVLRSERVICO'},{av:'A9324NotaServicoVlrDeducoes',fld:'NOTASERVICOVLRDEDUCOES'},{av:'A9347NotaServicoOutrasInformacoes',fld:'NOTASERVICOOUTRASINFORMACOES'},{av:'A9333NotaServicoVlrIssRetido',fld:'NOTASERVICOVLRISSRETIDO'},{av:'A9332NotaServicoVlrIss',fld:'NOTASERVICOVLRISS'},{av:'A2983ListaServicoId',fld:'LISTASERVICOID'},{av:'A9276ListaServicoPercISS',fld:'LISTASERVICOPERCISS'}],[{av:'AV29TpErro',fld:'vTPERRO'},{av:'AV149GXLvl397',fld:'vGXLVL397'},{av:'AV115ListaServicoID',fld:'vLISTASERVICOID'},{av:'AV116ValorFatura',fld:'vVALORFATURA'},{av:'AV117ValorAReduzir',fld:'vVALORAREDUZIR'},{av:'AV121Observacao',fld:'vOBSERVACAO'},{av:'AV118IsentoISS',fld:'vISENTOISS'},{av:'AV120PercentualISS',fld:'vPERCENTUALISS'}]];
   this.EvtParms["VLISTASERVICOID.ISVALID"] = [[{av:'AV120PercentualISS',fld:'vPERCENTUALISS'},{av:'A2983ListaServicoId',fld:'LISTASERVICOID'},{av:'AV115ListaServicoID',fld:'vLISTASERVICOID'},{av:'A9276ListaServicoPercISS',fld:'LISTASERVICOPERCISS'}],[{av:'AV120PercentualISS',fld:'vPERCENTUALISS'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["VFILIALID.ISVALID"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV134FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV131FilialId',fld:'vFILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV133FilialNome',fld:'vFILIALNOME'}]];
   this.setPrompt("PROMPT_FILIALID", [12]);
   this.setPrompt("PROMPT_PESSOAID", [18]);
   this.setPrompt("PROMPT_LISTASERVICOID", [29]);
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfaturarsempedido());
