/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:1:37.59
*/
gx.evt.autoSkip = false;
gx.define('htrndocumentodependente', false, function () {
   this.ServerClass =  "htrndocumentodependente" ;
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
      this.AV17SNCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV18SNFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV19SNFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV20SNPrompt=gx.fn.getControlValue("vSNPROMPT") ;
      this.AV21Modo=gx.fn.getControlValue("vMODO") ;
   };
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
   this.Validv_Dependenteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPENDENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Documentodependenteseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDOCUMENTODEPENDENTESEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1316u2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1116u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1416u2_client=function()
   {
      this.executeServerEvent("'UPLOAD'", true, null, false, false);
   };
   this.e1716u2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,23,26,29,31,34,36,38,41,44,46,49,51,54,56,58,61,64,67,70,72,74,84];
   this.GXLastCtrlId =84;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TABLE12",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLE9",grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Titularpessoaid,isvalid:null,rgrid:[],fld:"vTITULARPESSOAID",gxz:"ZV12TitularPessoaId",gxold:"OV12TitularPessoaId",gxvar:"AV12TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV12TitularPessoaId,0)},c2v:function(){gx.O.AV12TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARNOMEPESSOA",gxz:"ZV13TitularNomePessoa",gxold:"OV13TitularNomePessoa",gxvar:"AV13TitularNomePessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13TitularNomePessoa=Value},v2z:function(Value){gx.O.ZV13TitularNomePessoa=Value},v2c:function(){gx.fn.setControlValue("vTITULARNOMEPESSOA",gx.O.AV13TitularNomePessoa,0)},c2v:function(){gx.O.AV13TitularNomePessoa=this.val()},val:function(){return gx.fn.getControlValue("vTITULARNOMEPESSOA")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABDEPENDENTE",grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[31]={fld:"TABLE10",grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Dependenteid,isvalid:null,rgrid:[],fld:"vDEPENDENTEID",gxz:"ZV14DependenteId",gxold:"OV14DependenteId",gxvar:"AV14DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14DependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDEPENDENTEID",gx.O.AV14DependenteId,0)},c2v:function(){gx.O.AV14DependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENDENTENOME",gxz:"ZV15DependenteNome",gxold:"OV15DependenteNome",gxvar:"AV15DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15DependenteNome=Value},v2z:function(Value){gx.O.ZV15DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV15DependenteNome,0)},c2v:function(){gx.O.AV15DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE13",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Documentodependenteseq,isvalid:null,rgrid:[],fld:"vDOCUMENTODEPENDENTESEQ",gxz:"ZV16DocumentoDependenteSeq",gxold:"OV16DocumentoDependenteSeq",gxvar:"AV16DocumentoDependenteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DocumentoDependenteSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16DocumentoDependenteSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTODEPENDENTESEQ",gx.O.AV16DocumentoDependenteSeq,0)},c2v:function(){gx.O.AV16DocumentoDependenteSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTODEPENDENTESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTODEPENDENTEARQUIVO",gxz:"ZV23DocumentoDependenteArquivo",gxold:"OV23DocumentoDependenteArquivo",gxvar:"AV23DocumentoDependenteArquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DocumentoDependenteArquivo=Value},v2z:function(Value){gx.O.ZV23DocumentoDependenteArquivo=Value},v2c:function(){gx.fn.setControlValue("vDOCUMENTODEPENDENTEARQUIVO",gx.O.AV23DocumentoDependenteArquivo,0)},c2v:function(){gx.O.AV23DocumentoDependenteArquivo=this.val()},val:function(){return gx.fn.getControlValue("vDOCUMENTODEPENDENTEARQUIVO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTODEPENDENTEDESCRICAO",gxz:"ZV22DocumentoDependenteDescricao",gxold:"OV22DocumentoDependenteDescricao",gxvar:"AV22DocumentoDependenteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22DocumentoDependenteDescricao=Value},v2z:function(Value){gx.O.ZV22DocumentoDependenteDescricao=Value},v2c:function(){gx.fn.setControlValue("vDOCUMENTODEPENDENTEDESCRICAO",gx.O.AV22DocumentoDependenteDescricao,0)},c2v:function(){gx.O.AV22DocumentoDependenteDescricao=this.val()},val:function(){return gx.fn.getControlValue("vDOCUMENTODEPENDENTEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE7",grid:0};
   GXValidFnc[61]={fld:"TXTUPLOAD", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM",gxz:"ZV48Imagem",gxold:"OV48Imagem",gxvar:"AV48Imagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48Imagem=Value},v2z:function(Value){gx.O.ZV48Imagem=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGEM",gx.O.AV48Imagem,gx.O.AV59Imagem_GXI)},c2v:function(){gx.O.AV59Imagem_GXI=this.val_GXI();gx.O.AV48Imagem=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEM")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEM_GXI")}, gxvar_GXI:'AV59Imagem_GXI',nac:gx.falseFn};
   GXValidFnc[67]={fld:"TABLE1",grid:0};
   GXValidFnc[70]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTODEPENDENTEUSUARIOALT",gxz:"ZV28DocumentoDependenteUsuarioAlt",gxold:"OV28DocumentoDependenteUsuarioAlt",gxvar:"AV28DocumentoDependenteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DocumentoDependenteUsuarioAlt=Value},v2z:function(Value){gx.O.ZV28DocumentoDependenteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vDOCUMENTODEPENDENTEUSUARIOALT",gx.O.AV28DocumentoDependenteUsuarioAlt,0)},c2v:function(){gx.O.AV28DocumentoDependenteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vDOCUMENTODEPENDENTEUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTODEPENDENTEDATAHORAALT",gxz:"ZV27DocumentoDependenteDataHoraAlt",gxold:"OV27DocumentoDependenteDataHoraAlt",gxvar:"AV27DocumentoDependenteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DocumentoDependenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27DocumentoDependenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTODEPENDENTEDATAHORAALT",gx.O.AV27DocumentoDependenteDataHoraAlt,0)},c2v:function(){gx.O.AV27DocumentoDependenteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDOCUMENTODEPENDENTEDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"BTNHELP",grid:0};
   this.AV12TitularPessoaId = 0 ;
   this.ZV12TitularPessoaId = 0 ;
   this.OV12TitularPessoaId = 0 ;
   this.AV13TitularNomePessoa = "" ;
   this.ZV13TitularNomePessoa = "" ;
   this.OV13TitularNomePessoa = "" ;
   this.AV14DependenteId = 0 ;
   this.ZV14DependenteId = 0 ;
   this.OV14DependenteId = 0 ;
   this.AV15DependenteNome = "" ;
   this.ZV15DependenteNome = "" ;
   this.OV15DependenteNome = "" ;
   this.AV16DocumentoDependenteSeq = 0 ;
   this.ZV16DocumentoDependenteSeq = 0 ;
   this.OV16DocumentoDependenteSeq = 0 ;
   this.AV23DocumentoDependenteArquivo = "" ;
   this.ZV23DocumentoDependenteArquivo = "" ;
   this.OV23DocumentoDependenteArquivo = "" ;
   this.AV22DocumentoDependenteDescricao = "" ;
   this.ZV22DocumentoDependenteDescricao = "" ;
   this.OV22DocumentoDependenteDescricao = "" ;
   this.AV59Imagem_GXI = "" ;
   this.AV48Imagem = "" ;
   this.ZV48Imagem = "" ;
   this.OV48Imagem = "" ;
   this.AV28DocumentoDependenteUsuarioAlt = "" ;
   this.ZV28DocumentoDependenteUsuarioAlt = "" ;
   this.OV28DocumentoDependenteUsuarioAlt = "" ;
   this.AV27DocumentoDependenteDataHoraAlt = gx.date.nullDate() ;
   this.ZV27DocumentoDependenteDataHoraAlt = gx.date.nullDate() ;
   this.OV27DocumentoDependenteDataHoraAlt = gx.date.nullDate() ;
   this.AV12TitularPessoaId = 0 ;
   this.AV13TitularNomePessoa = "" ;
   this.AV14DependenteId = 0 ;
   this.AV15DependenteNome = "" ;
   this.AV16DocumentoDependenteSeq = 0 ;
   this.AV23DocumentoDependenteArquivo = "" ;
   this.AV22DocumentoDependenteDescricao = "" ;
   this.AV48Imagem = "" ;
   this.AV28DocumentoDependenteUsuarioAlt = "" ;
   this.AV27DocumentoDependenteDataHoraAlt = gx.date.nullDate() ;
   this.AV17SNCliente = "" ;
   this.AV18SNFornecedor = "" ;
   this.AV19SNFabricante = "" ;
   this.AV20SNPrompt = "" ;
   this.AV21Modo = "" ;
   this.A8560DocumentoDependenteSeq = 0 ;
   this.A2653DependenteId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A8557DocumentoDependenteArquivo = "" ;
   this.A8556DocumentoDependenteDescricao = "" ;
   this.A8558DocumentoDependenteUsuarioAlt = "" ;
   this.A8559DocumentoDependenteDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e1316u2_client": ["ENTER", true] ,"e1116u2_client": ["'FECHAR'", true] ,"e1416u2_client": ["'UPLOAD'", true] ,"e1716u2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV23DocumentoDependenteArquivo',fld:'vDOCUMENTODEPENDENTEARQUIVO'}],[{av:'AV23DocumentoDependenteArquivo',fld:'vDOCUMENTODEPENDENTEARQUIVO'},{av:'AV48Imagem',fld:'vIMAGEM'}]];
   this.EvtParms["ENTER"] = [[{av:'AV22DocumentoDependenteDescricao',fld:'vDOCUMENTODEPENDENTEDESCRICAO'},{av:'AV21Modo',fld:'vMODO'},{av:'AV23DocumentoDependenteArquivo',fld:'vDOCUMENTODEPENDENTEARQUIVO'},{av:'AV14DependenteId',fld:'vDEPENDENTEID'},{av:'AV12TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV45DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'AV16DocumentoDependenteSeq',fld:'vDOCUMENTODEPENDENTESEQ'},{av:'AV24EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV13TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV15DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV17SNCliente',fld:'vSNCLIENTE'},{av:'AV18SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV19SNFabricante',fld:'vSNFABRICANTE'},{av:'AV20SNPrompt',fld:'vSNPROMPT'},{av:'AV28DocumentoDependenteUsuarioAlt',fld:'vDOCUMENTODEPENDENTEUSUARIOALT'},{av:'AV27DocumentoDependenteDataHoraAlt',fld:'vDOCUMENTODEPENDENTEDATAHORAALT'},{av:'A8560DocumentoDependenteSeq',fld:'DOCUMENTODEPENDENTESEQ'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A2653DependenteId',fld:'DEPENDENTEID'}],[{av:'AV49BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV29SNErro',fld:'vSNERRO'},{av:'AV30DIRETORIOIMGDOC',fld:'vDIRETORIOIMGDOC'},{av:'AV45DependenteIdAux',fld:'vDEPENDENTEIDAUX'},{av:'AV32Titular',fld:'vTITULAR'},{av:'AV33Dependente',fld:'vDEPENDENTE'},{av:'AV34Sequencia',fld:'vSEQUENCIA'},{av:'AV35Img',fld:'vIMG'},{av:'AV23DocumentoDependenteArquivo',fld:'vDOCUMENTODEPENDENTEARQUIVO'},{av:'AV20SNPrompt',fld:'vSNPROMPT'},{av:'AV19SNFabricante',fld:'vSNFABRICANTE'},{av:'AV18SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV17SNCliente',fld:'vSNCLIENTE'},{av:'AV15DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV14DependenteId',fld:'vDEPENDENTEID'},{av:'AV13TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV12TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV16DocumentoDependenteSeq',fld:'vDOCUMENTODEPENDENTESEQ'},{av:'AV22DocumentoDependenteDescricao',fld:'vDOCUMENTODEPENDENTEDESCRICAO'},{av:'AV28DocumentoDependenteUsuarioAlt',fld:'vDOCUMENTODEPENDENTEUSUARIOALT'},{av:'AV27DocumentoDependenteDataHoraAlt',fld:'vDOCUMENTODEPENDENTEDATAHORAALT'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV12TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV13TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV14DependenteId',fld:'vDEPENDENTEID'},{av:'AV15DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV17SNCliente',fld:'vSNCLIENTE'},{av:'AV18SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV19SNFabricante',fld:'vSNFABRICANTE'},{av:'AV20SNPrompt',fld:'vSNPROMPT'}],[{av:'AV20SNPrompt',fld:'vSNPROMPT'},{av:'AV19SNFabricante',fld:'vSNFABRICANTE'},{av:'AV18SNFornecedor',fld:'vSNFORNECEDOR'},{av:'AV17SNCliente',fld:'vSNCLIENTE'},{av:'AV15DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV14DependenteId',fld:'vDEPENDENTEID'},{av:'AV13TitularNomePessoa',fld:'vTITULARNOMEPESSOA'},{av:'AV12TitularPessoaId',fld:'vTITULARPESSOAID'}]];
   this.EvtParms["'UPLOAD'"] = [[],[{av:'AV51isCloud',fld:'vISCLOUD'},{av:'AV50DirUpload',fld:'vDIRUPLOAD'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV17SNCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV18SNFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV19SNFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV20SNPrompt", "vSNPROMPT", 0, "char");
   this.setVCMap("AV21Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new htrndocumentodependente());
