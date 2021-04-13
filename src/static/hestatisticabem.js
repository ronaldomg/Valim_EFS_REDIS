/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:31:5.28
*/
gx.evt.autoSkip = false;
gx.define('hestatisticabem', false, function () {
   this.ServerClass =  "hestatisticabem" ;
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
   this.Validv_Condicaobemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONDICAOBEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoabemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOABEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Responsavelpatid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vRESPONSAVELPATID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraoresponsavel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAORESPONSAVEL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraocondicao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOCONDICAO");
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
   this.e11fh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15fh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,17,19,24,27,29,32,34,36,39,41,42,43,46,48,49,52,54,55,58,60,61,64,66,69,71,73,75,77,79,81,84,86,89,91,93,96,98,101,103,105,108,110,113,115,117,120,122,125,127,129,138,139,140,141,142,143,145,146,147,148,149,150,151,152,153,154];
   this.GXLastCtrlId =154;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TABLE6",grid:0};
   GXValidFnc[14]={fld:"TITOPLAYOUT", format:0,grid:0};
   GXValidFnc[17]={fld:"LBLTPESTATISTICA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOESTATISTICA",gxz:"ZV22TipoEstatistica",gxold:"OV22TipoEstatistica",gxvar:"AV22TipoEstatistica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22TipoEstatistica=Value},v2z:function(Value){gx.O.ZV22TipoEstatistica=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOESTATISTICA",gx.O.AV22TipoEstatistica)},c2v:function(){gx.O.AV22TipoEstatistica=this.val()},val:function(){return gx.fn.getControlValue("vTIPOESTATISTICA")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TITOPSELECAO", format:0,grid:0};
   GXValidFnc[27]={fld:"LBLMESANOREF", format:0,grid:0};
   GXValidFnc[29]={fld:"TABLERANGEMAREF",grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREF",gxz:"ZV57MesRef",gxold:"OV57MesRef",gxvar:"AV57MesRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57MesRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57MesRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREF",gx.O.AV57MesRef,0)},c2v:function(){gx.O.AV57MesRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREF",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"BARRA", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREF",gxz:"ZV58AnoRef",gxold:"OV58AnoRef",gxvar:"AV58AnoRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58AnoRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58AnoRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREF",gx.O.AV58AnoRef,0)},c2v:function(){gx.O.AV58AnoRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREF",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"LBLSITUACAO", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOBEM",gxz:"ZV42SituacaoBem",gxold:"OV42SituacaoBem",gxvar:"AV42SituacaoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV42SituacaoBem=Value},v2z:function(Value){gx.O.ZV42SituacaoBem=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOBEM",gx.O.AV42SituacaoBem)},c2v:function(){gx.O.AV42SituacaoBem=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOBEM")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV83Nao",gxold:"OV83Nao",gxvar:"AV83Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83Nao=Value},v2z:function(Value){gx.O.ZV83Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV83Nao,0)},c2v:function(){gx.O.AV83Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV82Sim",gxold:"OV82Sim",gxvar:"AV82Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82Sim=Value},v2z:function(Value){gx.O.ZV82Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV82Sim,0)},c2v:function(){gx.O.AV82Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"LBLCONDBEM", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Condicaobemid,isvalid:null,rgrid:[],fld:"vCONDICAOBEMID",gxz:"ZV23CondicaoBemId",gxold:"OV23CondicaoBemId",gxvar:"AV23CondicaoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CondicaoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23CondicaoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMID",gx.O.AV23CondicaoBemId,0)},c2v:function(){gx.O.AV23CondicaoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONDICAOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONDICAOBEMDESCRICAO",gxz:"ZV37CondicaoBemDescricao",gxold:"OV37CondicaoBemDescricao",gxvar:"AV37CondicaoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37CondicaoBemDescricao=Value},v2z:function(Value){gx.O.ZV37CondicaoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONDICAOBEMDESCRICAO",gx.O.AV37CondicaoBemDescricao,0)},c2v:function(){gx.O.AV37CondicaoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONDICAOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"LBLFORNECEDOR", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoabemid,isvalid:null,rgrid:[],fld:"vPESSOABEMID",gxz:"ZV41PessoaBemId",gxold:"OV41PessoaBemId",gxvar:"AV41PessoaBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PessoaBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41PessoaBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOABEMID",gx.O.AV41PessoaBemId,0)},c2v:function(){gx.O.AV41PessoaBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOABEMID",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOABEMNOME",gxz:"ZV38PessoaBemNome",gxold:"OV38PessoaBemNome",gxvar:"AV38PessoaBemNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38PessoaBemNome=Value},v2z:function(Value){gx.O.ZV38PessoaBemNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOABEMNOME",gx.O.AV38PessoaBemNome,0)},c2v:function(){gx.O.AV38PessoaBemNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOABEMNOME")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"LBLREFERENCIA", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Responsavelpatid,isvalid:null,rgrid:[],fld:"vRESPONSAVELPATID",gxz:"ZV55ResponsavelPatId",gxold:"OV55ResponsavelPatId",gxvar:"AV55ResponsavelPatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55ResponsavelPatId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55ResponsavelPatId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRESPONSAVELPATID",gx.O.AV55ResponsavelPatId,0)},c2v:function(){gx.O.AV55ResponsavelPatId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRESPONSAVELPATID",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPONSAVELPATNOME",gxz:"ZV54ResponsavelPatNome",gxold:"OV54ResponsavelPatNome",gxvar:"AV54ResponsavelPatNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54ResponsavelPatNome=Value},v2z:function(Value){gx.O.ZV54ResponsavelPatNome=Value},v2c:function(){gx.fn.setControlValue("vRESPONSAVELPATNOME",gx.O.AV54ResponsavelPatNome,0)},c2v:function(){gx.O.AV54ResponsavelPatNome=this.val()},val:function(){return gx.fn.getControlValue("vRESPONSAVELPATNOME")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"LBLCODBEM", format:0,grid:0};
   GXValidFnc[66]={fld:"TABLERANGECODBEM",grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGOINI",gxz:"ZV25BemCodigoIni",gxold:"OV25BemCodigoIni",gxvar:"AV25BemCodigoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25BemCodigoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25BemCodigoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOINI",gx.O.AV25BemCodigoIni,0)},c2v:function(){gx.O.AV25BemCodigoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOINI",'.')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"BARRA2", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOINI",gxz:"ZV27BemSubGrupoIni",gxold:"OV27BemSubGrupoIni",gxvar:"AV27BemSubGrupoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27BemSubGrupoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27BemSubGrupoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOINI",gx.O.AV27BemSubGrupoIni,0)},c2v:function(){gx.O.AV27BemSubGrupoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOINI",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"LBLA2", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGOFIN",gxz:"ZV26BemCodigoFin",gxold:"OV26BemCodigoFin",gxvar:"AV26BemCodigoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26BemCodigoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26BemCodigoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOFIN",gx.O.AV26BemCodigoFin,0)},c2v:function(){gx.O.AV26BemCodigoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"BARRA3", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOFIN",gxz:"ZV28BemSubGrupoFin",gxold:"OV28BemSubGrupoFin",gxvar:"AV28BemSubGrupoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28BemSubGrupoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28BemSubGrupoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOFIN",gx.O.AV28BemSubGrupoFin,0)},c2v:function(){gx.O.AV28BemSubGrupoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"LBLTPBEM", format:0,grid:0};
   GXValidFnc[86]={fld:"TABLERANGETPBEM",grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMIDINI",gxz:"ZV29TipoBemIdIni",gxold:"OV29TipoBemIdIni",gxvar:"AV29TipoBemIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TipoBemIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29TipoBemIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMIDINI",gx.O.AV29TipoBemIdIni,0)},c2v:function(){gx.O.AV29TipoBemIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"LBLA", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMIDFIN",gxz:"ZV30TipoBemIdFin",gxold:"OV30TipoBemIdFin",gxvar:"AV30TipoBemIdFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30TipoBemIdFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30TipoBemIdFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMIDFIN",gx.O.AV30TipoBemIdFin,0)},c2v:function(){gx.O.AV30TipoBemIdFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMIDFIN",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"LBLDEPTO", format:0,grid:0};
   GXValidFnc[98]={fld:"TABLERANGEDEPTO",grid:0};
   GXValidFnc[101]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDEPARTAMENTOCODIGOINI",gxz:"ZV31BemDepartamentoCodigoIni",gxold:"OV31BemDepartamentoCodigoIni",gxvar:"AV31BemDepartamentoCodigoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31BemDepartamentoCodigoIni=Value},v2z:function(Value){gx.O.ZV31BemDepartamentoCodigoIni=Value},v2c:function(){gx.fn.setControlValue("vBEMDEPARTAMENTOCODIGOINI",gx.O.AV31BemDepartamentoCodigoIni,0)},c2v:function(){gx.O.AV31BemDepartamentoCodigoIni=this.val()},val:function(){return gx.fn.getControlValue("vBEMDEPARTAMENTOCODIGOINI")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"LBLA3", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDEPARTAMENTOCODIGOFIN",gxz:"ZV32BemDepartamentoCodigoFin",gxold:"OV32BemDepartamentoCodigoFin",gxvar:"AV32BemDepartamentoCodigoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32BemDepartamentoCodigoFin=Value},v2z:function(Value){gx.O.ZV32BemDepartamentoCodigoFin=Value},v2c:function(){gx.fn.setControlValue("vBEMDEPARTAMENTOCODIGOFIN",gx.O.AV32BemDepartamentoCodigoFin,0)},c2v:function(){gx.O.AV32BemDepartamentoCodigoFin=this.val()},val:function(){return gx.fn.getControlValue("vBEMDEPARTAMENTOCODIGOFIN")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"LBLDTAQUISICAO", format:0,grid:0};
   GXValidFnc[110]={fld:"TABLERANGEDTAQ",grid:0};
   GXValidFnc[113]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDTAQUISICAOINI",gxz:"ZV33BemDtAquisicaoIni",gxold:"OV33BemDtAquisicaoIni",gxvar:"AV33BemDtAquisicaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33BemDtAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33BemDtAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTAQUISICAOINI",gx.O.AV33BemDtAquisicaoIni,0)},c2v:function(){gx.O.AV33BemDtAquisicaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTAQUISICAOINI")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"LBLA4", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDTAQUISICAOFIN",gxz:"ZV34BemDtAquisicaoFin",gxold:"OV34BemDtAquisicaoFin",gxvar:"AV34BemDtAquisicaoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34BemDtAquisicaoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34BemDtAquisicaoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTAQUISICAOFIN",gx.O.AV34BemDtAquisicaoFin,0)},c2v:function(){gx.O.AV34BemDtAquisicaoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTAQUISICAOFIN")},nac:gx.falseFn};
   GXValidFnc[120]={fld:"LBLDTTRANSVENDA", format:0,grid:0};
   GXValidFnc[122]={fld:"TABLERANGEDTTV",grid:0};
   GXValidFnc[125]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDTVENDAINI",gxz:"ZV35BemDtVendaIni",gxold:"OV35BemDtVendaIni",gxvar:"AV35BemDtVendaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35BemDtVendaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV35BemDtVendaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTVENDAINI",gx.O.AV35BemDtVendaIni,0)},c2v:function(){gx.O.AV35BemDtVendaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTVENDAINI")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"LBLA5", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDTVENDAFIN",gxz:"ZV36BemDtVendaFin",gxold:"OV36BemDtVendaFin",gxvar:"AV36BemDtVendaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36BemDtVendaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV36BemDtVendaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTVENDAFIN",gx.O.AV36BemDtVendaFin,0)},c2v:function(){gx.O.AV36BemDtVendaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTVENDAFIN")},nac:gx.falseFn};
   GXValidFnc[138]={fld:"JS", format:2,grid:0};
   GXValidFnc[139]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoresponsavel,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAORESPONSAVEL",gxz:"ZV50EmpresaPadraoResponsavel",gxold:"OV50EmpresaPadraoResponsavel",gxvar:"AV50EmpresaPadraoResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50EmpresaPadraoResponsavel=Value},v2z:function(Value){gx.O.ZV50EmpresaPadraoResponsavel=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAORESPONSAVEL",gx.O.AV50EmpresaPadraoResponsavel,0)},c2v:function(){gx.O.AV50EmpresaPadraoResponsavel=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAORESPONSAVEL")},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraocondicao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCONDICAO",gxz:"ZV49EmpresaPadraoCondicao",gxold:"OV49EmpresaPadraoCondicao",gxvar:"AV49EmpresaPadraoCondicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49EmpresaPadraoCondicao=Value},v2z:function(Value){gx.O.ZV49EmpresaPadraoCondicao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCONDICAO",gx.O.AV49EmpresaPadraoCondicao,0)},c2v:function(){gx.O.AV49EmpresaPadraoCondicao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCONDICAO")},nac:gx.falseFn};
   GXValidFnc[141]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraopessoa,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOPESSOA",gxz:"ZV46EmpresaPadraoPessoa",gxold:"OV46EmpresaPadraoPessoa",gxvar:"AV46EmpresaPadraoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46EmpresaPadraoPessoa=Value},v2z:function(Value){gx.O.ZV46EmpresaPadraoPessoa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOPESSOA",gx.O.AV46EmpresaPadraoPessoa,0)},c2v:function(){gx.O.AV46EmpresaPadraoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOPESSOA")},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOBEM",gxz:"ZV20EmpresaPadraoBem",gxold:"OV20EmpresaPadraoBem",gxvar:"AV20EmpresaPadraoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20EmpresaPadraoBem=Value},v2z:function(Value){gx.O.ZV20EmpresaPadraoBem=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOBEM",gx.O.AV20EmpresaPadraoBem,0)},c2v:function(){gx.O.AV20EmpresaPadraoBem=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOBEM")},nac:gx.falseFn};
   GXValidFnc[143]={fld:"JSMASK", format:2,grid:0};
   GXValidFnc[145]={fld:"BTNHELP",grid:0};
   GXValidFnc[146]={fld:"PROMPT_CONDICAOBEMID",grid:0};
   GXValidFnc[147]={fld:"PROMPT_PESSOABEMID",grid:0};
   GXValidFnc[148]={fld:"PROMPT_RESPONSAVELPATID",grid:0};
   GXValidFnc[149]={fld:"PROMPT_BEMCODIGOINI_BEMSUBGRUPOINI",grid:0};
   GXValidFnc[150]={fld:"PROMPT_BEMCODIGOFIN_BEMSUBGRUPOFIN",grid:0};
   GXValidFnc[151]={fld:"PROMPT_TIPOBEMIDINI",grid:0};
   GXValidFnc[152]={fld:"PROMPT_TIPOBEMIDFIN",grid:0};
   GXValidFnc[153]={fld:"PROMPT_BEMDEPARTAMENTOCODIGOINI",grid:0};
   GXValidFnc[154]={fld:"PROMPT_BEMDEPARTAMENTOCODIGOFIN",grid:0};
   this.AV22TipoEstatistica = "" ;
   this.ZV22TipoEstatistica = "" ;
   this.OV22TipoEstatistica = "" ;
   this.AV57MesRef = 0 ;
   this.ZV57MesRef = 0 ;
   this.OV57MesRef = 0 ;
   this.AV58AnoRef = 0 ;
   this.ZV58AnoRef = 0 ;
   this.OV58AnoRef = 0 ;
   this.AV42SituacaoBem = "" ;
   this.ZV42SituacaoBem = "" ;
   this.OV42SituacaoBem = "" ;
   this.AV83Nao = "" ;
   this.ZV83Nao = "" ;
   this.OV83Nao = "" ;
   this.AV82Sim = "" ;
   this.ZV82Sim = "" ;
   this.OV82Sim = "" ;
   this.AV23CondicaoBemId = 0 ;
   this.ZV23CondicaoBemId = 0 ;
   this.OV23CondicaoBemId = 0 ;
   this.AV37CondicaoBemDescricao = "" ;
   this.ZV37CondicaoBemDescricao = "" ;
   this.OV37CondicaoBemDescricao = "" ;
   this.AV41PessoaBemId = 0 ;
   this.ZV41PessoaBemId = 0 ;
   this.OV41PessoaBemId = 0 ;
   this.AV38PessoaBemNome = "" ;
   this.ZV38PessoaBemNome = "" ;
   this.OV38PessoaBemNome = "" ;
   this.AV55ResponsavelPatId = 0 ;
   this.ZV55ResponsavelPatId = 0 ;
   this.OV55ResponsavelPatId = 0 ;
   this.AV54ResponsavelPatNome = "" ;
   this.ZV54ResponsavelPatNome = "" ;
   this.OV54ResponsavelPatNome = "" ;
   this.AV25BemCodigoIni = 0 ;
   this.ZV25BemCodigoIni = 0 ;
   this.OV25BemCodigoIni = 0 ;
   this.AV27BemSubGrupoIni = 0 ;
   this.ZV27BemSubGrupoIni = 0 ;
   this.OV27BemSubGrupoIni = 0 ;
   this.AV26BemCodigoFin = 0 ;
   this.ZV26BemCodigoFin = 0 ;
   this.OV26BemCodigoFin = 0 ;
   this.AV28BemSubGrupoFin = 0 ;
   this.ZV28BemSubGrupoFin = 0 ;
   this.OV28BemSubGrupoFin = 0 ;
   this.AV29TipoBemIdIni = 0 ;
   this.ZV29TipoBemIdIni = 0 ;
   this.OV29TipoBemIdIni = 0 ;
   this.AV30TipoBemIdFin = 0 ;
   this.ZV30TipoBemIdFin = 0 ;
   this.OV30TipoBemIdFin = 0 ;
   this.AV31BemDepartamentoCodigoIni = "" ;
   this.ZV31BemDepartamentoCodigoIni = "" ;
   this.OV31BemDepartamentoCodigoIni = "" ;
   this.AV32BemDepartamentoCodigoFin = "" ;
   this.ZV32BemDepartamentoCodigoFin = "" ;
   this.OV32BemDepartamentoCodigoFin = "" ;
   this.AV33BemDtAquisicaoIni = gx.date.nullDate() ;
   this.ZV33BemDtAquisicaoIni = gx.date.nullDate() ;
   this.OV33BemDtAquisicaoIni = gx.date.nullDate() ;
   this.AV34BemDtAquisicaoFin = gx.date.nullDate() ;
   this.ZV34BemDtAquisicaoFin = gx.date.nullDate() ;
   this.OV34BemDtAquisicaoFin = gx.date.nullDate() ;
   this.AV35BemDtVendaIni = gx.date.nullDate() ;
   this.ZV35BemDtVendaIni = gx.date.nullDate() ;
   this.OV35BemDtVendaIni = gx.date.nullDate() ;
   this.AV36BemDtVendaFin = gx.date.nullDate() ;
   this.ZV36BemDtVendaFin = gx.date.nullDate() ;
   this.OV36BemDtVendaFin = gx.date.nullDate() ;
   this.AV50EmpresaPadraoResponsavel = "" ;
   this.ZV50EmpresaPadraoResponsavel = "" ;
   this.OV50EmpresaPadraoResponsavel = "" ;
   this.AV49EmpresaPadraoCondicao = "" ;
   this.ZV49EmpresaPadraoCondicao = "" ;
   this.OV49EmpresaPadraoCondicao = "" ;
   this.AV46EmpresaPadraoPessoa = "" ;
   this.ZV46EmpresaPadraoPessoa = "" ;
   this.OV46EmpresaPadraoPessoa = "" ;
   this.AV20EmpresaPadraoBem = "" ;
   this.ZV20EmpresaPadraoBem = "" ;
   this.OV20EmpresaPadraoBem = "" ;
   this.AV22TipoEstatistica = "" ;
   this.AV57MesRef = 0 ;
   this.AV58AnoRef = 0 ;
   this.AV42SituacaoBem = "" ;
   this.AV83Nao = "" ;
   this.AV82Sim = "" ;
   this.AV23CondicaoBemId = 0 ;
   this.AV37CondicaoBemDescricao = "" ;
   this.AV41PessoaBemId = 0 ;
   this.AV38PessoaBemNome = "" ;
   this.AV55ResponsavelPatId = 0 ;
   this.AV54ResponsavelPatNome = "" ;
   this.AV25BemCodigoIni = 0 ;
   this.AV27BemSubGrupoIni = 0 ;
   this.AV26BemCodigoFin = 0 ;
   this.AV28BemSubGrupoFin = 0 ;
   this.AV29TipoBemIdIni = 0 ;
   this.AV30TipoBemIdFin = 0 ;
   this.AV31BemDepartamentoCodigoIni = "" ;
   this.AV32BemDepartamentoCodigoFin = "" ;
   this.AV33BemDtAquisicaoIni = gx.date.nullDate() ;
   this.AV34BemDtAquisicaoFin = gx.date.nullDate() ;
   this.AV35BemDtVendaIni = gx.date.nullDate() ;
   this.AV36BemDtVendaFin = gx.date.nullDate() ;
   this.AV50EmpresaPadraoResponsavel = "" ;
   this.AV49EmpresaPadraoCondicao = "" ;
   this.AV46EmpresaPadraoPessoa = "" ;
   this.AV20EmpresaPadraoBem = "" ;
   this.A2281ResponsavelPatId = 0 ;
   this.A2280ResponsavelPatEmpresaId = "" ;
   this.A2282ResponsavelPatNome = "" ;
   this.A2339PessoaBemSnFornec = "" ;
   this.A2337PessoaBemId = 0 ;
   this.A2336PessoaBemEmpId = "" ;
   this.A2338PessoaBemNome = "" ;
   this.A2334CondicaoBemId = 0 ;
   this.A2333CondicaoBemEmpresaId = "" ;
   this.A2335CondicaoBemDescricao = "" ;
   this.Events = {"e11fh2_client": ["'FECHAR'", true] ,"e13fh2_client": ["ENTER", true] ,"e15fh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV22TipoEstatistica',fld:'vTIPOESTATISTICA'},{av:'AV57MesRef',fld:'vMESREF'},{av:'AV58AnoRef',fld:'vANOREF'},{av:'AV23CondicaoBemId',fld:'vCONDICAOBEMID'},{av:'A2333CondicaoBemEmpresaId',fld:'CONDICAOBEMEMPRESAID'},{av:'AV49EmpresaPadraoCondicao',fld:'vEMPRESAPADRAOCONDICAO'},{av:'A2334CondicaoBemId',fld:'CONDICAOBEMID'},{av:'A2335CondicaoBemDescricao',fld:'CONDICAOBEMDESCRICAO'},{av:'AV41PessoaBemId',fld:'vPESSOABEMID'},{av:'A2336PessoaBemEmpId',fld:'PESSOABEMEMPID'},{av:'AV46EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2339PessoaBemSnFornec',fld:'PESSOABEMSNFORNEC'},{av:'A2338PessoaBemNome',fld:'PESSOABEMNOME'},{av:'AV55ResponsavelPatId',fld:'vRESPONSAVELPATID'},{av:'A2280ResponsavelPatEmpresaId',fld:'RESPONSAVELPATEMPRESAID'},{av:'AV50EmpresaPadraoResponsavel',fld:'vEMPRESAPADRAORESPONSAVEL'},{av:'A2281ResponsavelPatId',fld:'RESPONSAVELPATID'},{av:'A2282ResponsavelPatNome',fld:'RESPONSAVELPATNOME'},{av:'AV25BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV26BemCodigoFin',fld:'vBEMCODIGOFIN'},{av:'AV27BemSubGrupoIni',fld:'vBEMSUBGRUPOINI'},{av:'AV28BemSubGrupoFin',fld:'vBEMSUBGRUPOFIN'},{av:'AV29TipoBemIdIni',fld:'vTIPOBEMIDINI'},{av:'AV30TipoBemIdFin',fld:'vTIPOBEMIDFIN'},{av:'AV31BemDepartamentoCodigoIni',fld:'vBEMDEPARTAMENTOCODIGOINI'},{av:'AV32BemDepartamentoCodigoFin',fld:'vBEMDEPARTAMENTOCODIGOFIN'},{av:'AV33BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV34BemDtAquisicaoFin',fld:'vBEMDTAQUISICAOFIN'},{av:'AV35BemDtVendaIni',fld:'vBEMDTVENDAINI'},{av:'AV36BemDtVendaFin',fld:'vBEMDTVENDAFIN'},{av:'AV86Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV42SituacaoBem',fld:'vSITUACAOBEM'},{av:'AV24ResponsavelId',fld:'vRESPONSAVELID'},{av:'AV87Pgmdesc',fld:'vPGMDESC'}],[{av:'AV53snErro',fld:'vSNERRO'},{av:'AV88GXLvl129',fld:'vGXLVL129'},{av:'AV37CondicaoBemDescricao',fld:'vCONDICAOBEMDESCRICAO'},{av:'AV89GXLvl141',fld:'vGXLVL141'},{av:'AV38PessoaBemNome',fld:'vPESSOABEMNOME'},{av:'AV90GXLvl154',fld:'vGXLVL154'},{av:'AV54ResponsavelPatNome',fld:'vRESPONSAVELPATNOME'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.setPrompt("PROMPT_CONDICAOBEMID", [48]);
   this.setPrompt("PROMPT_PESSOABEMID", [54]);
   this.setPrompt("PROMPT_RESPONSAVELPATID", [60]);
   this.setPrompt("PROMPT_BEMCODIGOINI_BEMSUBGRUPOINI", [69,73]);
   this.setPrompt("PROMPT_BEMCODIGOFIN_BEMSUBGRUPOFIN", [77,81]);
   this.setPrompt("PROMPT_TIPOBEMIDINI", [89]);
   this.setPrompt("PROMPT_TIPOBEMIDFIN", [93]);
   this.setPrompt("PROMPT_BEMDEPARTAMENTOCODIGOINI", [101]);
   this.setPrompt("PROMPT_BEMDEPARTAMENTOCODIGOFIN", [105]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hestatisticabem());
