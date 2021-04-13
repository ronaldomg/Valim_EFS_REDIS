/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:28.96
*/
gx.evt.autoSkip = false;
gx.define('hdepreciacaobaixapat', false, function () {
   this.ServerClass =  "hdepreciacaobaixapat" ;
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
   this.Validv_Bemdepartamentocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMDEPARTAMENTOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Origemrecursoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vORIGEMRECURSOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaidfor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAIDFOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraoorigemrecurso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOORIGEMRECURSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraopessoa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOPESSOA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraobemdepartamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOBEMDEPARTAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11im2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13im2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15im2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16im2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17im2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19im2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,33,38,41,43,46,48,50,52,55,57,60,62,64,66,67,68,71,73,76,78,80,84,86,89,91,93,95,97,99,101,103,106,108,109,112,114,115,118,120,121,124,126,133,134,135,136,137,140,141,143,145,146,147,148,149,150,151];
   this.GXLastCtrlId =151;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV69TxtTela",gxold:"OV69TxtTela",gxvar:"AV69TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV69TxtTela=Value},v2z:function(Value){gx.O.ZV69TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV69TxtTela)},c2v:function(){gx.O.AV69TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE5",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALIZACONTACONTABIL",gxz:"ZV48TotalizaContaContabil",gxold:"OV48TotalizaContaContabil",gxvar:"AV48TotalizaContaContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV48TotalizaContaContabil=Value},v2z:function(Value){gx.O.ZV48TotalizaContaContabil=Value},v2c:function(){gx.fn.setCheckBoxValue("vTOTALIZACONTACONTABIL",gx.O.AV48TotalizaContaContabil,"S")},c2v:function(){gx.O.AV48TotalizaContaContabil=this.val()},val:function(){return gx.fn.getControlValue("vTOTALIZACONTACONTABIL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERACSV",gxz:"ZV49GeraCSV",gxold:"OV49GeraCSV",gxvar:"AV49GeraCSV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV49GeraCSV=Value},v2z:function(Value){gx.O.ZV49GeraCSV=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERACSV",gx.O.AV49GeraCSV,"S")},c2v:function(){gx.O.AV49GeraCSV=this.val()},val:function(){return gx.fn.getControlValue("vGERACSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[38]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={fld:"TABLE8",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREFERENCIA",gxz:"ZV45MesReferencia",gxold:"OV45MesReferencia",gxvar:"AV45MesReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45MesReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45MesReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREFERENCIA",gx.O.AV45MesReferencia,0)},c2v:function(){gx.O.AV45MesReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TBBARRA", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREFERENCIA",gxz:"ZV46AnoReferencia",gxold:"OV46AnoReferencia",gxvar:"AV46AnoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46AnoReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46AnoReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREFERENCIA",gx.O.AV46AnoReferencia,0)},c2v:function(){gx.O.AV46AnoReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[57]={fld:"TABLE9",grid:0};
   GXValidFnc[60]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDTAQUISICAOINI",gxz:"ZV19BemDtAquisicaoIni",gxold:"OV19BemDtAquisicaoIni",gxvar:"AV19BemDtAquisicaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19BemDtAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19BemDtAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTAQUISICAOINI",gx.O.AV19BemDtAquisicaoIni,0)},c2v:function(){gx.O.AV19BemDtAquisicaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTAQUISICAOINI")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TBA3", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDTAQUISICAOFIM",gxz:"ZV20BemDtAquisicaoFim",gxold:"OV20BemDtAquisicaoFim",gxvar:"AV20BemDtAquisicaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20BemDtAquisicaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20BemDtAquisicaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTAQUISICAOFIM",gx.O.AV20BemDtAquisicaoFim,0)},c2v:function(){gx.O.AV20BemDtAquisicaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTAQUISICAOFIM")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSITUACAOATIVO",gxz:"ZV42BemSituacaoAtivo",gxold:"OV42BemSituacaoAtivo",gxvar:"AV42BemSituacaoAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV42BemSituacaoAtivo=Value},v2z:function(Value){gx.O.ZV42BemSituacaoAtivo=Value},v2c:function(){gx.fn.setCheckBoxValue("vBEMSITUACAOATIVO",gx.O.AV42BemSituacaoAtivo,"S")},c2v:function(){gx.O.AV42BemSituacaoAtivo=this.val()},val:function(){return gx.fn.getControlValue("vBEMSITUACAOATIVO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[67]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSITUACAOBAIXA",gxz:"ZV43BemSituacaoBaixa",gxold:"OV43BemSituacaoBaixa",gxvar:"AV43BemSituacaoBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV43BemSituacaoBaixa=Value},v2z:function(Value){gx.O.ZV43BemSituacaoBaixa=Value},v2c:function(){gx.fn.setCheckBoxValue("vBEMSITUACAOBAIXA",gx.O.AV43BemSituacaoBaixa,"S")},c2v:function(){gx.O.AV43BemSituacaoBaixa=this.val()},val:function(){return gx.fn.getControlValue("vBEMSITUACAOBAIXA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSITUACAOTRANSF",gxz:"ZV44BemSituacaoTransf",gxold:"OV44BemSituacaoTransf",gxvar:"AV44BemSituacaoTransf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV44BemSituacaoTransf=Value},v2z:function(Value){gx.O.ZV44BemSituacaoTransf=Value},v2c:function(){gx.fn.setCheckBoxValue("vBEMSITUACAOTRANSF",gx.O.AV44BemSituacaoTransf,"S")},c2v:function(){gx.O.AV44BemSituacaoTransf=this.val()},val:function(){return gx.fn.getControlValue("vBEMSITUACAOTRANSF")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[71]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[73]={fld:"TABLE11",grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMIDINI",gxz:"ZV25TipoBemIdIni",gxold:"OV25TipoBemIdIni",gxvar:"AV25TipoBemIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TipoBemIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25TipoBemIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMIDINI",gx.O.AV25TipoBemIdIni,0)},c2v:function(){gx.O.AV25TipoBemIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TBA4", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMIDFIM",gxz:"ZV26TipoBemIdFim",gxold:"OV26TipoBemIdFim",gxvar:"AV26TipoBemIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TipoBemIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26TipoBemIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMIDFIM",gx.O.AV26TipoBemIdFim,0)},c2v:function(){gx.O.AV26TipoBemIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[86]={fld:"TABLE12",grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGOINI",gxz:"ZV21BemCodigoIni",gxold:"OV21BemCodigoIni",gxvar:"AV21BemCodigoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21BemCodigoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21BemCodigoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOINI",gx.O.AV21BemCodigoIni,0)},c2v:function(){gx.O.AV21BemCodigoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOINI",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TBBARRA3", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOINI",gxz:"ZV23BemSubGrupoIni",gxold:"OV23BemSubGrupoIni",gxvar:"AV23BemSubGrupoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23BemSubGrupoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23BemSubGrupoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOINI",gx.O.AV23BemSubGrupoIni,0)},c2v:function(){gx.O.AV23BemSubGrupoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOINI",'.')},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TBA", format:0,grid:0};
   GXValidFnc[97]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGOFIM",gxz:"ZV22BemCodigoFim",gxold:"OV22BemCodigoFim",gxvar:"AV22BemCodigoFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22BemCodigoFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22BemCodigoFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOFIM",gx.O.AV22BemCodigoFim,0)},c2v:function(){gx.O.AV22BemCodigoFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOFIM",'.')},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TBBARRA4", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOFIM",gxz:"ZV24BemSubGrupoFim",gxold:"OV24BemSubGrupoFim",gxvar:"AV24BemSubGrupoFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24BemSubGrupoFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24BemSubGrupoFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOFIM",gx.O.AV24BemSubGrupoFim,0)},c2v:function(){gx.O.AV24BemSubGrupoFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOFIM",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TABLE3",grid:0};
   GXValidFnc[106]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemdepartamentocodigo,isvalid:null,rgrid:[],fld:"vBEMDEPARTAMENTOCODIGO",gxz:"ZV27BemDepartamentoCodigo",gxold:"OV27BemDepartamentoCodigo",gxvar:"AV27BemDepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27BemDepartamentoCodigo=Value},v2z:function(Value){gx.O.ZV27BemDepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("vBEMDEPARTAMENTOCODIGO",gx.O.AV27BemDepartamentoCodigo,0)},c2v:function(){gx.O.AV27BemDepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vBEMDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDEPARTAMENTONOME",gxz:"ZV32BemDepartamentoNome",gxold:"OV32BemDepartamentoNome",gxvar:"AV32BemDepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32BemDepartamentoNome=Value},v2z:function(Value){gx.O.ZV32BemDepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vBEMDEPARTAMENTONOME",gx.O.AV32BemDepartamentoNome,0)},c2v:function(){gx.O.AV32BemDepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vBEMDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Origemrecursoid,isvalid:null,rgrid:[],fld:"vORIGEMRECURSOID",gxz:"ZV29OrigemRecursoId",gxold:"OV29OrigemRecursoId",gxvar:"AV29OrigemRecursoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29OrigemRecursoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29OrigemRecursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSOID",gx.O.AV29OrigemRecursoId,0)},c2v:function(){gx.O.AV29OrigemRecursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORIGEMRECURSOID",'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORIGEMRECURSODESCRICAO",gxz:"ZV33OrigemRecursoDescricao",gxold:"OV33OrigemRecursoDescricao",gxvar:"AV33OrigemRecursoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33OrigemRecursoDescricao=Value},v2z:function(Value){gx.O.ZV33OrigemRecursoDescricao=Value},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSODESCRICAO",gx.O.AV33OrigemRecursoDescricao,0)},c2v:function(){gx.O.AV33OrigemRecursoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORIGEMRECURSODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[118]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaidfor,isvalid:null,rgrid:[],fld:"vPESSOAIDFOR",gxz:"ZV28PessoaIdFor",gxold:"OV28PessoaIdFor",gxvar:"AV28PessoaIdFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaIdFor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PessoaIdFor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDFOR",gx.O.AV28PessoaIdFor,0)},c2v:function(){gx.O.AV28PessoaIdFor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDFOR",'.')},nac:gx.falseFn};
   GXValidFnc[121]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIAFOR",gxz:"ZV34PessoaFantasiaFor",gxold:"OV34PessoaFantasiaFor",gxvar:"AV34PessoaFantasiaFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PessoaFantasiaFor=Value},v2z:function(Value){gx.O.ZV34PessoaFantasiaFor=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIAFOR",gx.O.AV34PessoaFantasiaFor,0)},c2v:function(){gx.O.AV34PessoaFantasiaFor=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIAFOR")},nac:gx.falseFn};
   GXValidFnc[124]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[126]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMNOTAFISCAL",gxz:"ZV30BemNotaFiscal",gxold:"OV30BemNotaFiscal",gxvar:"AV30BemNotaFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30BemNotaFiscal=Value},v2z:function(Value){gx.O.ZV30BemNotaFiscal=Value},v2c:function(){gx.fn.setControlValue("vBEMNOTAFISCAL",gx.O.AV30BemNotaFiscal,0)},c2v:function(){gx.O.AV30BemNotaFiscal=this.val()},val:function(){return gx.fn.getControlValue("vBEMNOTAFISCAL")},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoorigemrecurso,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOORIGEMRECURSO",gxz:"ZV36EmpresaPadraoOrigemRecurso",gxold:"OV36EmpresaPadraoOrigemRecurso",gxvar:"AV36EmpresaPadraoOrigemRecurso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36EmpresaPadraoOrigemRecurso=Value},v2z:function(Value){gx.O.ZV36EmpresaPadraoOrigemRecurso=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOORIGEMRECURSO",gx.O.AV36EmpresaPadraoOrigemRecurso,0)},c2v:function(){gx.O.AV36EmpresaPadraoOrigemRecurso=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOORIGEMRECURSO")},nac:gx.falseFn};
   GXValidFnc[134]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraopessoa,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOPESSOA",gxz:"ZV35EmpresaPadraoPessoa",gxold:"OV35EmpresaPadraoPessoa",gxvar:"AV35EmpresaPadraoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35EmpresaPadraoPessoa=Value},v2z:function(Value){gx.O.ZV35EmpresaPadraoPessoa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOPESSOA",gx.O.AV35EmpresaPadraoPessoa,0)},c2v:function(){gx.O.AV35EmpresaPadraoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOPESSOA")},nac:gx.falseFn};
   GXValidFnc[135]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOTIPOBEM",gxz:"ZV56EmpresaPadraoTipoBem",gxold:"OV56EmpresaPadraoTipoBem",gxvar:"AV56EmpresaPadraoTipoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56EmpresaPadraoTipoBem=Value},v2z:function(Value){gx.O.ZV56EmpresaPadraoTipoBem=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOTIPOBEM",gx.O.AV56EmpresaPadraoTipoBem,0)},c2v:function(){gx.O.AV56EmpresaPadraoTipoBem=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOTIPOBEM")},nac:gx.falseFn};
   GXValidFnc[136]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraobemdepartamento,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOBEMDEPARTAMENTO",gxz:"ZV37EmpresaPadraoBemDepartamento",gxold:"OV37EmpresaPadraoBemDepartamento",gxvar:"AV37EmpresaPadraoBemDepartamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37EmpresaPadraoBemDepartamento=Value},v2z:function(Value){gx.O.ZV37EmpresaPadraoBemDepartamento=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOBEMDEPARTAMENTO",gx.O.AV37EmpresaPadraoBemDepartamento,0)},c2v:function(){gx.O.AV37EmpresaPadraoBemDepartamento=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOBEMDEPARTAMENTO")},nac:gx.falseFn};
   GXValidFnc[137]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOBEM",gxz:"ZV57EmpresaPadraoBem",gxold:"OV57EmpresaPadraoBem",gxvar:"AV57EmpresaPadraoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57EmpresaPadraoBem=Value},v2z:function(Value){gx.O.ZV57EmpresaPadraoBem=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOBEM",gx.O.AV57EmpresaPadraoBem,0)},c2v:function(){gx.O.AV57EmpresaPadraoBem=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOBEM")},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTER",gxz:"ZV38QtCaracter",gxold:"OV38QtCaracter",gxvar:"AV38QtCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38QtCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38QtCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTER",gx.O.AV38QtCaracter,0)},c2v:function(){gx.O.AV38QtCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[141]={fld:"JS", format:2,grid:0};
   GXValidFnc[143]={fld:"BTNHELP",grid:0};
   GXValidFnc[145]={fld:"PROMPT_TIPOBEMIDINI",grid:0};
   GXValidFnc[146]={fld:"PROMPT_TIPOBEMIDFIM",grid:0};
   GXValidFnc[147]={fld:"PROMPT_BEMCODIGOINI_BEMSUBGRUPOINI",grid:0};
   GXValidFnc[148]={fld:"PROMPT_BEMCODIGOFIM_BEMSUBGRUPOFIM",grid:0};
   GXValidFnc[149]={fld:"PROMPT_BEMDEPARTAMENTOCODIGO",grid:0};
   GXValidFnc[150]={fld:"PROMPT_ORIGEMRECURSOID",grid:0};
   GXValidFnc[151]={fld:"PROMPT_PESSOAIDFOR",grid:0};
   this.AV69TxtTela = "" ;
   this.ZV69TxtTela = "" ;
   this.OV69TxtTela = "" ;
   this.AV48TotalizaContaContabil = "" ;
   this.ZV48TotalizaContaContabil = "" ;
   this.OV48TotalizaContaContabil = "" ;
   this.AV49GeraCSV = "" ;
   this.ZV49GeraCSV = "" ;
   this.OV49GeraCSV = "" ;
   this.AV45MesReferencia = 0 ;
   this.ZV45MesReferencia = 0 ;
   this.OV45MesReferencia = 0 ;
   this.AV46AnoReferencia = 0 ;
   this.ZV46AnoReferencia = 0 ;
   this.OV46AnoReferencia = 0 ;
   this.AV19BemDtAquisicaoIni = gx.date.nullDate() ;
   this.ZV19BemDtAquisicaoIni = gx.date.nullDate() ;
   this.OV19BemDtAquisicaoIni = gx.date.nullDate() ;
   this.AV20BemDtAquisicaoFim = gx.date.nullDate() ;
   this.ZV20BemDtAquisicaoFim = gx.date.nullDate() ;
   this.OV20BemDtAquisicaoFim = gx.date.nullDate() ;
   this.AV42BemSituacaoAtivo = "" ;
   this.ZV42BemSituacaoAtivo = "" ;
   this.OV42BemSituacaoAtivo = "" ;
   this.AV43BemSituacaoBaixa = "" ;
   this.ZV43BemSituacaoBaixa = "" ;
   this.OV43BemSituacaoBaixa = "" ;
   this.AV44BemSituacaoTransf = "" ;
   this.ZV44BemSituacaoTransf = "" ;
   this.OV44BemSituacaoTransf = "" ;
   this.AV25TipoBemIdIni = 0 ;
   this.ZV25TipoBemIdIni = 0 ;
   this.OV25TipoBemIdIni = 0 ;
   this.AV26TipoBemIdFim = 0 ;
   this.ZV26TipoBemIdFim = 0 ;
   this.OV26TipoBemIdFim = 0 ;
   this.AV21BemCodigoIni = 0 ;
   this.ZV21BemCodigoIni = 0 ;
   this.OV21BemCodigoIni = 0 ;
   this.AV23BemSubGrupoIni = 0 ;
   this.ZV23BemSubGrupoIni = 0 ;
   this.OV23BemSubGrupoIni = 0 ;
   this.AV22BemCodigoFim = 0 ;
   this.ZV22BemCodigoFim = 0 ;
   this.OV22BemCodigoFim = 0 ;
   this.AV24BemSubGrupoFim = 0 ;
   this.ZV24BemSubGrupoFim = 0 ;
   this.OV24BemSubGrupoFim = 0 ;
   this.AV27BemDepartamentoCodigo = "" ;
   this.ZV27BemDepartamentoCodigo = "" ;
   this.OV27BemDepartamentoCodigo = "" ;
   this.AV32BemDepartamentoNome = "" ;
   this.ZV32BemDepartamentoNome = "" ;
   this.OV32BemDepartamentoNome = "" ;
   this.AV29OrigemRecursoId = 0 ;
   this.ZV29OrigemRecursoId = 0 ;
   this.OV29OrigemRecursoId = 0 ;
   this.AV33OrigemRecursoDescricao = "" ;
   this.ZV33OrigemRecursoDescricao = "" ;
   this.OV33OrigemRecursoDescricao = "" ;
   this.AV28PessoaIdFor = 0 ;
   this.ZV28PessoaIdFor = 0 ;
   this.OV28PessoaIdFor = 0 ;
   this.AV34PessoaFantasiaFor = "" ;
   this.ZV34PessoaFantasiaFor = "" ;
   this.OV34PessoaFantasiaFor = "" ;
   this.AV30BemNotaFiscal = "" ;
   this.ZV30BemNotaFiscal = "" ;
   this.OV30BemNotaFiscal = "" ;
   this.AV36EmpresaPadraoOrigemRecurso = "" ;
   this.ZV36EmpresaPadraoOrigemRecurso = "" ;
   this.OV36EmpresaPadraoOrigemRecurso = "" ;
   this.AV35EmpresaPadraoPessoa = "" ;
   this.ZV35EmpresaPadraoPessoa = "" ;
   this.OV35EmpresaPadraoPessoa = "" ;
   this.AV56EmpresaPadraoTipoBem = "" ;
   this.ZV56EmpresaPadraoTipoBem = "" ;
   this.OV56EmpresaPadraoTipoBem = "" ;
   this.AV37EmpresaPadraoBemDepartamento = "" ;
   this.ZV37EmpresaPadraoBemDepartamento = "" ;
   this.OV37EmpresaPadraoBemDepartamento = "" ;
   this.AV57EmpresaPadraoBem = "" ;
   this.ZV57EmpresaPadraoBem = "" ;
   this.OV57EmpresaPadraoBem = "" ;
   this.AV38QtCaracter = 0 ;
   this.ZV38QtCaracter = 0 ;
   this.OV38QtCaracter = 0 ;
   this.AV69TxtTela = "" ;
   this.AV48TotalizaContaContabil = "" ;
   this.AV49GeraCSV = "" ;
   this.AV45MesReferencia = 0 ;
   this.AV46AnoReferencia = 0 ;
   this.AV19BemDtAquisicaoIni = gx.date.nullDate() ;
   this.AV20BemDtAquisicaoFim = gx.date.nullDate() ;
   this.AV42BemSituacaoAtivo = "" ;
   this.AV43BemSituacaoBaixa = "" ;
   this.AV44BemSituacaoTransf = "" ;
   this.AV25TipoBemIdIni = 0 ;
   this.AV26TipoBemIdFim = 0 ;
   this.AV21BemCodigoIni = 0 ;
   this.AV23BemSubGrupoIni = 0 ;
   this.AV22BemCodigoFim = 0 ;
   this.AV24BemSubGrupoFim = 0 ;
   this.AV27BemDepartamentoCodigo = "" ;
   this.AV32BemDepartamentoNome = "" ;
   this.AV29OrigemRecursoId = 0 ;
   this.AV33OrigemRecursoDescricao = "" ;
   this.AV28PessoaIdFor = 0 ;
   this.AV34PessoaFantasiaFor = "" ;
   this.AV30BemNotaFiscal = "" ;
   this.AV36EmpresaPadraoOrigemRecurso = "" ;
   this.AV35EmpresaPadraoPessoa = "" ;
   this.AV56EmpresaPadraoTipoBem = "" ;
   this.AV37EmpresaPadraoBemDepartamento = "" ;
   this.AV57EmpresaPadraoBem = "" ;
   this.AV38QtCaracter = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A2331OrigemRecursoId = 0 ;
   this.A2330OrigemRecursoEmpresaId = "" ;
   this.A2332OrigemRecursoDescricao = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2249DepartamentoNome = "" ;
   this.Events = {"e11im2_client": ["'FECHAR'", true] ,"e13im2_client": ["ENTER", true] ,"e15im2_client": ["'SALVARTXT'", true] ,"e16im2_client": ["VTXTTELA.CLICK", true] ,"e17im2_client": ["'EXCLUIRTXT'", true] ,"e19im2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV89Pgmname',fld:'vPGMNAME'},{av:'AV85SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV69TxtTela',fld:'vTXTTELA'}],[{av:'AV69TxtTela',fld:'vTXTTELA'},{av:'AV95GXV2',fld:'vGXV2'},{av:'AV86SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV94GXV1',fld:'vGXV1'},{av:'AV48TotalizaContaContabil',fld:'vTOTALIZACONTACONTABIL'},{av:'AV49GeraCSV',fld:'vGERACSV'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV45MesReferencia',fld:'vMESREFERENCIA'},{av:'AV46AnoReferencia',fld:'vANOREFERENCIA'},{av:'AV19BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV20BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV25TipoBemIdIni',fld:'vTIPOBEMIDINI'},{av:'AV26TipoBemIdFim',fld:'vTIPOBEMIDFIM'},{av:'AV21BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV22BemCodigoFim',fld:'vBEMCODIGOFIM'},{av:'AV23BemSubGrupoIni',fld:'vBEMSUBGRUPOINI'},{av:'AV24BemSubGrupoFim',fld:'vBEMSUBGRUPOFIM'},{av:'AV42BemSituacaoAtivo',fld:'vBEMSITUACAOATIVO'},{av:'AV43BemSituacaoBaixa',fld:'vBEMSITUACAOBAIXA'},{av:'AV44BemSituacaoTransf',fld:'vBEMSITUACAOTRANSF'},{av:'AV69TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV89Pgmname',fld:'vPGMNAME'},{av:'AV47snErro',fld:'vSNERRO'},{av:'AV27BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'AV37EmpresaPadraoBemDepartamento',fld:'vEMPRESAPADRAOBEMDEPARTAMENTO'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'A2249DepartamentoNome',fld:'DEPARTAMENTONOME'},{av:'AV29OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV36EmpresaPadraoOrigemRecurso',fld:'vEMPRESAPADRAOORIGEMRECURSO'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'AV28PessoaIdFor',fld:'vPESSOAIDFOR'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV35EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV39OrderedBy',fld:'vORDEREDBY'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV48TotalizaContaContabil',fld:'vTOTALIZACONTACONTABIL'},{av:'AV49GeraCSV',fld:'vGERACSV'},{av:'AV90Pgmdesc',fld:'vPGMDESC'}],[{av:'AV47snErro',fld:'vSNERRO'},{av:'AV81SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV69TxtTela',fld:'vTXTTELA'},{av:'AV91GXLvl180',fld:'vGXLVL180'},{av:'AV32BemDepartamentoNome',fld:'vBEMDEPARTAMENTONOME'},{av:'AV92GXLvl193',fld:'vGXLVL193'},{av:'AV33OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV93GXLvl206',fld:'vGXLVL206'},{av:'AV34PessoaFantasiaFor',fld:'vPESSOAFANTASIAFOR'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV84OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV69TxtTela',fld:'vTXTTELA'},{av:'AV89Pgmname',fld:'vPGMNAME'},{av:'AV48TotalizaContaContabil',fld:'vTOTALIZACONTACONTABIL'},{av:'AV49GeraCSV',fld:'vGERACSV'}],[{av:'AV84OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV89Pgmname',fld:'vPGMNAME'},{av:'AV85SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV69TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV94GXV1',fld:'vGXV1'},{av:'AV86SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV48TotalizaContaContabil',fld:'vTOTALIZACONTACONTABIL'},{av:'AV49GeraCSV',fld:'vGERACSV'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV89Pgmname',fld:'vPGMNAME'},{av:'AV69TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_TIPOBEMIDINI", [76]);
   this.setPrompt("PROMPT_TIPOBEMIDFIM", [80]);
   this.setPrompt("PROMPT_BEMCODIGOINI_BEMSUBGRUPOINI", [89,93]);
   this.setPrompt("PROMPT_BEMCODIGOFIM_BEMSUBGRUPOFIM", [97,101]);
   this.setPrompt("PROMPT_BEMDEPARTAMENTOCODIGO", [108]);
   this.setPrompt("PROMPT_ORIGEMRECURSOID", [114]);
   this.setPrompt("PROMPT_PESSOAIDFOR", [120]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdepreciacaobaixapat());
