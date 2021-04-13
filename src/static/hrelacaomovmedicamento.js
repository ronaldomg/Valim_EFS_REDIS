/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:1:46.91
*/
gx.evt.autoSkip = false;
gx.define('hrelacaomovmedicamento', false, function () {
   this.ServerClass =  "hrelacaomovmedicamento" ;
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
   this.Validv_Familiaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFAMILIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
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
   this.Validv_Familiaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFAMILIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112912_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132912_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152912_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e162912_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e172912_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e182912_client=function()
   {
      this.executeServerEvent("'TIPOMOVIMENTO'", false, null, false, false);
   };
   this.e202912_client=function()
   {
      this.executeServerEvent("'PROMPTPRODUTO'", true, null, false, false);
   };
   this.e212912_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,23,26,29,32,39,44,47,50,53,55,56,59,61,64,66,67,70,72,73,74,77,79,82,84,86,89,91,94,96,99,101,104,106,107,110,112,113,114,115,116,120,121,122,123,124,128,129,130,131,132,134,137,139,142,144,147,149,152,154,157,159,162,164,167,169,172,174,177,179,182,184,187,189,192,194,197,199,202,204,207,209,212,214,217,219,222,224,227,229,232,234,247,248,249,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269];
   this.GXLastCtrlId =269;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABTXT",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK54", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV69TxtTela",gxold:"OV69TxtTela",gxvar:"AV69TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV69TxtTela=Value},v2z:function(Value){gx.O.ZV69TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV69TxtTela)},c2v:function(){gx.O.AV69TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"IMAGE9",grid:0};
   GXValidFnc[17]={fld:"IMGEXCTXTTELA",grid:0};
   GXValidFnc[20]={fld:"TABLE7",grid:0};
   GXValidFnc[23]={fld:"TAB1",grid:0};
   GXValidFnc[26]={fld:"TABLE8",grid:0};
   GXValidFnc[29]={fld:"TXTLAYOUT", format:0,grid:0};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGERARCSV",gxz:"ZV17GerarCsv",gxold:"OV17GerarCsv",gxvar:"AV17GerarCsv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV17GerarCsv=Value},v2z:function(Value){gx.O.ZV17GerarCsv=Value},v2c:function(){gx.fn.setCheckBoxValue("vGERARCSV",gx.O.AV17GerarCsv,"S")},c2v:function(){gx.O.AV17GerarCsv=this.val()},val:function(){return gx.fn.getControlValue("vGERARCSV")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[44]={fld:"TXTSELECAO", format:0,grid:0};
   GXValidFnc[47]={fld:"TABLE6",grid:0};
   GXValidFnc[50]={fld:"TABLE1",grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV14FilialId",gxold:"OV14FilialId",gxvar:"AV14FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV14FilialId,0)},c2v:function(){gx.O.AV14FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOMEREDUZIDO",gxz:"ZV15FilialNomeReduzido",gxold:"OV15FilialNomeReduzido",gxvar:"AV15FilialNomeReduzido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15FilialNomeReduzido=Value},v2z:function(Value){gx.O.ZV15FilialNomeReduzido=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOMEREDUZIDO",gx.O.AV15FilialNomeReduzido,0)},c2v:function(){gx.O.AV15FilialNomeReduzido=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOMEREDUZIDO")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPO",gxz:"ZV39ProdutoTipo",gxold:"OV39ProdutoTipo",gxvar:"AV39ProdutoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ProdutoTipo=Value},v2z:function(Value){gx.O.ZV39ProdutoTipo=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOTIPO",gx.O.AV39ProdutoTipo,0)},c2v:function(){gx.O.AV39ProdutoTipo=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPO")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaid,isvalid:null,rgrid:[],fld:"vFAMILIAID",gxz:"ZV71FamiliaId",gxold:"OV71FamiliaId",gxvar:"AV71FamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71FamiliaId=Value},v2z:function(Value){gx.O.ZV71FamiliaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAID",gx.O.AV71FamiliaId,0)},c2v:function(){gx.O.AV71FamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIADESCRICAO",gxz:"ZV72FamiliaDescricao",gxold:"OV72FamiliaDescricao",gxvar:"AV72FamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72FamiliaDescricao=Value},v2z:function(Value){gx.O.ZV72FamiliaDescricao=Value},v2c:function(){gx.fn.setControlValue("vFAMILIADESCRICAO",gx.O.AV72FamiliaDescricao,0)},c2v:function(){gx.O.AV72FamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV36ProdutoId",gxold:"OV36ProdutoId",gxvar:"AV36ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV36ProdutoId,0)},c2v:function(){gx.O.AV36ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[73]={fld:"BMPPROMPT",grid:0};
   GXValidFnc[74]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV34ProdutoDescricaoResumida",gxold:"OV34ProdutoDescricaoResumida",gxvar:"AV34ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV34ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV34ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV34ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[79]={fld:"TABLE3",grid:0};
   GXValidFnc[82]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATAINI",gxz:"ZV44SaidaDataIni",gxold:"OV44SaidaDataIni",gxvar:"AV44SaidaDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44SaidaDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV44SaidaDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADATAINI",gx.O.AV44SaidaDataIni,0)},c2v:function(){gx.O.AV44SaidaDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATAINI")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[86]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATAFIM",gxz:"ZV43SaidaDataFim",gxold:"OV43SaidaDataFim",gxvar:"AV43SaidaDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43SaidaDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV43SaidaDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSAIDADATAFIM",gx.O.AV43SaidaDataFim,0)},c2v:function(){gx.O.AV43SaidaDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATAFIM")},nac:gx.falseFn};
   GXValidFnc[89]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[91]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOMOVIMENTACAO",gxz:"ZV52TipoMovimentacao",gxold:"OV52TipoMovimentacao",gxvar:"AV52TipoMovimentacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV52TipoMovimentacao=Value},v2z:function(Value){gx.O.ZV52TipoMovimentacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOMOVIMENTACAO",gx.O.AV52TipoMovimentacao)},c2v:function(){gx.O.AV52TipoMovimentacao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOMOVIMENTACAO")},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACLIENTENOME",gxz:"ZV42SaidaClienteNome",gxold:"OV42SaidaClienteNome",gxvar:"AV42SaidaClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SaidaClienteNome=Value},v2z:function(Value){gx.O.ZV42SaidaClienteNome=Value},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTENOME",gx.O.AV42SaidaClienteNome,0)},c2v:function(){gx.O.AV42SaidaClienteNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACLIENTENOME")},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV45SaidaNoDocumento",gxold:"OV45SaidaNoDocumento",gxvar:"AV45SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45SaidaNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV45SaidaNoDocumento,0)},c2v:function(){gx.O.AV45SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[106]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV28PessoaId",gxold:"OV28PessoaId",gxvar:"AV28PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV28PessoaId,0)},c2v:function(){gx.O.AV28PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV27PessoaFantasia",gxold:"OV27PessoaFantasia",gxvar:"AV27PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaFantasia=Value},v2z:function(Value){gx.O.ZV27PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV27PessoaFantasia,0)},c2v:function(){gx.O.AV27PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA1",gxz:"ZV54TrnPerda1",gxold:"OV54TrnPerda1",gxvar:"AV54TrnPerda1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54TrnPerda1=Value},v2z:function(Value){gx.O.ZV54TrnPerda1=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA1",gx.O.AV54TrnPerda1,0)},c2v:function(){gx.O.AV54TrnPerda1=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA1")},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA2",gxz:"ZV61TrnPerda2",gxold:"OV61TrnPerda2",gxvar:"AV61TrnPerda2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61TrnPerda2=Value},v2z:function(Value){gx.O.ZV61TrnPerda2=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA2",gx.O.AV61TrnPerda2,0)},c2v:function(){gx.O.AV61TrnPerda2=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA2")},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA3",gxz:"ZV62TrnPerda3",gxold:"OV62TrnPerda3",gxvar:"AV62TrnPerda3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62TrnPerda3=Value},v2z:function(Value){gx.O.ZV62TrnPerda3=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA3",gx.O.AV62TrnPerda3,0)},c2v:function(){gx.O.AV62TrnPerda3=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA3")},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA4",gxz:"ZV63TrnPerda4",gxold:"OV63TrnPerda4",gxvar:"AV63TrnPerda4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63TrnPerda4=Value},v2z:function(Value){gx.O.ZV63TrnPerda4=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA4",gx.O.AV63TrnPerda4,0)},c2v:function(){gx.O.AV63TrnPerda4=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA4")},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA5",gxz:"ZV64TrnPerda5",gxold:"OV64TrnPerda5",gxvar:"AV64TrnPerda5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64TrnPerda5=Value},v2z:function(Value){gx.O.ZV64TrnPerda5=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA5",gx.O.AV64TrnPerda5,0)},c2v:function(){gx.O.AV64TrnPerda5=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA5")},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA6",gxz:"ZV65TrnPerda6",gxold:"OV65TrnPerda6",gxvar:"AV65TrnPerda6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65TrnPerda6=Value},v2z:function(Value){gx.O.ZV65TrnPerda6=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA6",gx.O.AV65TrnPerda6,0)},c2v:function(){gx.O.AV65TrnPerda6=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA6")},nac:gx.falseFn};
   GXValidFnc[121]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA7",gxz:"ZV66TrnPerda7",gxold:"OV66TrnPerda7",gxvar:"AV66TrnPerda7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66TrnPerda7=Value},v2z:function(Value){gx.O.ZV66TrnPerda7=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA7",gx.O.AV66TrnPerda7,0)},c2v:function(){gx.O.AV66TrnPerda7=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA7")},nac:gx.falseFn};
   GXValidFnc[122]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA8",gxz:"ZV67TrnPerda8",gxold:"OV67TrnPerda8",gxvar:"AV67TrnPerda8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67TrnPerda8=Value},v2z:function(Value){gx.O.ZV67TrnPerda8=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA8",gx.O.AV67TrnPerda8,0)},c2v:function(){gx.O.AV67TrnPerda8=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA8")},nac:gx.falseFn};
   GXValidFnc[123]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA9",gxz:"ZV68TrnPerda9",gxold:"OV68TrnPerda9",gxvar:"AV68TrnPerda9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68TrnPerda9=Value},v2z:function(Value){gx.O.ZV68TrnPerda9=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA9",gx.O.AV68TrnPerda9,0)},c2v:function(){gx.O.AV68TrnPerda9=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA9")},nac:gx.falseFn};
   GXValidFnc[124]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA10",gxz:"ZV55TrnPerda10",gxold:"OV55TrnPerda10",gxvar:"AV55TrnPerda10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55TrnPerda10=Value},v2z:function(Value){gx.O.ZV55TrnPerda10=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA10",gx.O.AV55TrnPerda10,0)},c2v:function(){gx.O.AV55TrnPerda10=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA10")},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA11",gxz:"ZV56TrnPerda11",gxold:"OV56TrnPerda11",gxvar:"AV56TrnPerda11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56TrnPerda11=Value},v2z:function(Value){gx.O.ZV56TrnPerda11=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA11",gx.O.AV56TrnPerda11,0)},c2v:function(){gx.O.AV56TrnPerda11=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA11")},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA12",gxz:"ZV57TrnPerda12",gxold:"OV57TrnPerda12",gxvar:"AV57TrnPerda12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57TrnPerda12=Value},v2z:function(Value){gx.O.ZV57TrnPerda12=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA12",gx.O.AV57TrnPerda12,0)},c2v:function(){gx.O.AV57TrnPerda12=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA12")},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA13",gxz:"ZV58TrnPerda13",gxold:"OV58TrnPerda13",gxvar:"AV58TrnPerda13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58TrnPerda13=Value},v2z:function(Value){gx.O.ZV58TrnPerda13=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA13",gx.O.AV58TrnPerda13,0)},c2v:function(){gx.O.AV58TrnPerda13=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA13")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA14",gxz:"ZV59TrnPerda14",gxold:"OV59TrnPerda14",gxvar:"AV59TrnPerda14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59TrnPerda14=Value},v2z:function(Value){gx.O.ZV59TrnPerda14=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA14",gx.O.AV59TrnPerda14,0)},c2v:function(){gx.O.AV59TrnPerda14=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA14")},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRNPERDA15",gxz:"ZV60TrnPerda15",gxold:"OV60TrnPerda15",gxvar:"AV60TrnPerda15",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60TrnPerda15=Value},v2z:function(Value){gx.O.ZV60TrnPerda15=Value},v2c:function(){gx.fn.setControlValue("vTRNPERDA15",gx.O.AV60TrnPerda15,0)},c2v:function(){gx.O.AV60TrnPerda15=this.val()},val:function(){return gx.fn.getControlValue("vTRNPERDA15")},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TABLE9",grid:0};
   GXValidFnc[137]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNPREVENDA",gxz:"ZV76GXV1",gxold:"OV76GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=Value},v2z:function(Value){gx.O.ZV76GXV1=Value},v2c:function(){gx.fn.setControlValue("CTLSNPREVENDA",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=this.val()},val:function(){return gx.fn.getControlValue("CTLSNPREVENDA")},nac:gx.falseFn};
   GXValidFnc[142]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNCONDICIONAL",gxz:"ZV77GXV2",gxold:"OV77GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV77GXV2=Value},v2c:function(){gx.fn.setControlValue("CTLSNCONDICIONAL",gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(){return gx.fn.getControlValue("CTLSNCONDICIONAL")},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNORCAMENTO",gxz:"ZV78GXV3",gxold:"OV78GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV3=Value},v2z:function(Value){gx.O.ZV78GXV3=Value},v2c:function(){gx.fn.setControlValue("CTLSNORCAMENTO",gx.O.GXV3,0)},c2v:function(){gx.O.GXV3=this.val()},val:function(){return gx.fn.getControlValue("CTLSNORCAMENTO")},nac:gx.falseFn};
   GXValidFnc[152]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNENTREGAFUTURA",gxz:"ZV79GXV4",gxold:"OV79GXV4",gxvar:"GXV4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV4=Value},v2z:function(Value){gx.O.ZV79GXV4=Value},v2c:function(){gx.fn.setControlValue("CTLSNENTREGAFUTURA",gx.O.GXV4,0)},c2v:function(){gx.O.GXV4=this.val()},val:function(){return gx.fn.getControlValue("CTLSNENTREGAFUTURA")},nac:gx.falseFn};
   GXValidFnc[157]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[159]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNSIMPLESREMESSA",gxz:"ZV80GXV5",gxold:"OV80GXV5",gxvar:"GXV5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV5=Value},v2z:function(Value){gx.O.ZV80GXV5=Value},v2c:function(){gx.fn.setControlValue("CTLSNSIMPLESREMESSA",gx.O.GXV5,0)},c2v:function(){gx.O.GXV5=this.val()},val:function(){return gx.fn.getControlValue("CTLSNSIMPLESREMESSA")},nac:gx.falseFn};
   GXValidFnc[162]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[164]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNDAV",gxz:"ZV81GXV6",gxold:"OV81GXV6",gxvar:"GXV6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV6=Value},v2z:function(Value){gx.O.ZV81GXV6=Value},v2c:function(){gx.fn.setControlValue("CTLSNDAV",gx.O.GXV6,0)},c2v:function(){gx.O.GXV6=this.val()},val:function(){return gx.fn.getControlValue("CTLSNDAV")},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNCUPOMFISCAL",gxz:"ZV82GXV7",gxold:"OV82GXV7",gxvar:"GXV7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV7=Value},v2z:function(Value){gx.O.ZV82GXV7=Value},v2c:function(){gx.fn.setControlValue("CTLSNCUPOMFISCAL",gx.O.GXV7,0)},c2v:function(){gx.O.GXV7=this.val()},val:function(){return gx.fn.getControlValue("CTLSNCUPOMFISCAL")},nac:gx.falseFn};
   GXValidFnc[172]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNCUPOMFISCALELE",gxz:"ZV83GXV8",gxold:"OV83GXV8",gxvar:"GXV8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV8=Value},v2z:function(Value){gx.O.ZV83GXV8=Value},v2c:function(){gx.fn.setControlValue("CTLSNCUPOMFISCALELE",gx.O.GXV8,0)},c2v:function(){gx.O.GXV8=this.val()},val:function(){return gx.fn.getControlValue("CTLSNCUPOMFISCALELE")},nac:gx.falseFn};
   GXValidFnc[177]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNNOTASAIDANORMAL",gxz:"ZV84GXV9",gxold:"OV84GXV9",gxvar:"GXV9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV9=Value},v2z:function(Value){gx.O.ZV84GXV9=Value},v2c:function(){gx.fn.setControlValue("CTLSNNOTASAIDANORMAL",gx.O.GXV9,0)},c2v:function(){gx.O.GXV9=this.val()},val:function(){return gx.fn.getControlValue("CTLSNNOTASAIDANORMAL")},nac:gx.falseFn};
   GXValidFnc[182]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[184]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNNOTASAIDACOM",gxz:"ZV85GXV10",gxold:"OV85GXV10",gxvar:"GXV10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV10=Value},v2z:function(Value){gx.O.ZV85GXV10=Value},v2c:function(){gx.fn.setControlValue("CTLSNNOTASAIDACOM",gx.O.GXV10,0)},c2v:function(){gx.O.GXV10=this.val()},val:function(){return gx.fn.getControlValue("CTLSNNOTASAIDACOM")},nac:gx.falseFn};
   GXValidFnc[187]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNNOTASAIDAAJUSTE",gxz:"ZV86GXV11",gxold:"OV86GXV11",gxvar:"GXV11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV11=Value},v2z:function(Value){gx.O.ZV86GXV11=Value},v2c:function(){gx.fn.setControlValue("CTLSNNOTASAIDAAJUSTE",gx.O.GXV11,0)},c2v:function(){gx.O.GXV11=this.val()},val:function(){return gx.fn.getControlValue("CTLSNNOTASAIDAAJUSTE")},nac:gx.falseFn};
   GXValidFnc[192]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[194]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNDEVOLUCAOSAIDA",gxz:"ZV87GXV12",gxold:"OV87GXV12",gxvar:"GXV12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV12=Value},v2z:function(Value){gx.O.ZV87GXV12=Value},v2c:function(){gx.fn.setControlValue("CTLSNDEVOLUCAOSAIDA",gx.O.GXV12,0)},c2v:function(){gx.O.GXV12=this.val()},val:function(){return gx.fn.getControlValue("CTLSNDEVOLUCAOSAIDA")},nac:gx.falseFn};
   GXValidFnc[197]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[199]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNAJUSTESAIDA",gxz:"ZV88GXV13",gxold:"OV88GXV13",gxvar:"GXV13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV13=Value},v2z:function(Value){gx.O.ZV88GXV13=Value},v2c:function(){gx.fn.setControlValue("CTLSNAJUSTESAIDA",gx.O.GXV13,0)},c2v:function(){gx.O.GXV13=this.val()},val:function(){return gx.fn.getControlValue("CTLSNAJUSTESAIDA")},nac:gx.falseFn};
   GXValidFnc[202]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[204]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNNOTAENTRADANORMAL",gxz:"ZV89GXV14",gxold:"OV89GXV14",gxvar:"GXV14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV14=Value},v2z:function(Value){gx.O.ZV89GXV14=Value},v2c:function(){gx.fn.setControlValue("CTLSNNOTAENTRADANORMAL",gx.O.GXV14,0)},c2v:function(){gx.O.GXV14=this.val()},val:function(){return gx.fn.getControlValue("CTLSNNOTAENTRADANORMAL")},nac:gx.falseFn};
   GXValidFnc[207]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[209]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNNOTAENTRADACOM",gxz:"ZV90GXV15",gxold:"OV90GXV15",gxvar:"GXV15",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV15=Value},v2z:function(Value){gx.O.ZV90GXV15=Value},v2c:function(){gx.fn.setControlValue("CTLSNNOTAENTRADACOM",gx.O.GXV15,0)},c2v:function(){gx.O.GXV15=this.val()},val:function(){return gx.fn.getControlValue("CTLSNNOTAENTRADACOM")},nac:gx.falseFn};
   GXValidFnc[212]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[214]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNNOTAENTRADAAJUSTE",gxz:"ZV91GXV16",gxold:"OV91GXV16",gxvar:"GXV16",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV16=Value},v2z:function(Value){gx.O.ZV91GXV16=Value},v2c:function(){gx.fn.setControlValue("CTLSNNOTAENTRADAAJUSTE",gx.O.GXV16,0)},c2v:function(){gx.O.GXV16=this.val()},val:function(){return gx.fn.getControlValue("CTLSNNOTAENTRADAAJUSTE")},nac:gx.falseFn};
   GXValidFnc[217]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[219]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNDEVOLUCAOENTRADA",gxz:"ZV92GXV17",gxold:"OV92GXV17",gxvar:"GXV17",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV17=Value},v2z:function(Value){gx.O.ZV92GXV17=Value},v2c:function(){gx.fn.setControlValue("CTLSNDEVOLUCAOENTRADA",gx.O.GXV17,0)},c2v:function(){gx.O.GXV17=this.val()},val:function(){return gx.fn.getControlValue("CTLSNDEVOLUCAOENTRADA")},nac:gx.falseFn};
   GXValidFnc[222]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[224]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNAJUSTEENTRADA",gxz:"ZV93GXV18",gxold:"OV93GXV18",gxvar:"GXV18",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV18=Value},v2z:function(Value){gx.O.ZV93GXV18=Value},v2c:function(){gx.fn.setControlValue("CTLSNAJUSTEENTRADA",gx.O.GXV18,0)},c2v:function(){gx.O.GXV18=this.val()},val:function(){return gx.fn.getControlValue("CTLSNAJUSTEENTRADA")},nac:gx.falseFn};
   GXValidFnc[227]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[229]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNTROCA",gxz:"ZV94GXV19",gxold:"OV94GXV19",gxvar:"GXV19",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV19=Value},v2z:function(Value){gx.O.ZV94GXV19=Value},v2c:function(){gx.fn.setControlValue("CTLSNTROCA",gx.O.GXV19,0)},c2v:function(){gx.O.GXV19=this.val()},val:function(){return gx.fn.getControlValue("CTLSNTROCA")},nac:gx.falseFn};
   GXValidFnc[232]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[234]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNTRANSFERENCIA",gxz:"ZV95GXV20",gxold:"OV95GXV20",gxvar:"GXV20",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV20=Value},v2z:function(Value){gx.O.ZV95GXV20=Value},v2c:function(){gx.fn.setControlValue("CTLSNTRANSFERENCIA",gx.O.GXV20,0)},c2v:function(){gx.O.GXV20=this.val()},val:function(){return gx.fn.getControlValue("CTLSNTRANSFERENCIA")},nac:gx.falseFn};
   GXValidFnc[247]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV8AcessoSistemaSequencia",gxold:"OV8AcessoSistemaSequencia",gxvar:"AV8AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV8AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV8AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[248]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaempresaid,isvalid:null,rgrid:[],fld:"vFAMILIAEMPRESAID",gxz:"ZV73FamiliaEmpresaId",gxold:"OV73FamiliaEmpresaId",gxvar:"AV73FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73FamiliaEmpresaId=Value},v2z:function(Value){gx.O.ZV73FamiliaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAEMPRESAID",gx.O.AV73FamiliaEmpresaId,0)},c2v:function(){gx.O.AV73FamiliaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[249]={fld:"JAVASCRIPT", format:2,grid:0};
   GXValidFnc[251]={fld:"BTNHELP",grid:0};
   GXValidFnc[252]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[253]={fld:"PROMPT_FAMILIAID",grid:0};
   GXValidFnc[254]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[255]={fld:"PROMPT_TRNPERDA1",grid:0};
   GXValidFnc[256]={fld:"PROMPT_TRNPERDA2",grid:0};
   GXValidFnc[257]={fld:"PROMPT_TRNPERDA3",grid:0};
   GXValidFnc[258]={fld:"PROMPT_TRNPERDA4",grid:0};
   GXValidFnc[259]={fld:"PROMPT_TRNPERDA5",grid:0};
   GXValidFnc[260]={fld:"PROMPT_TRNPERDA6",grid:0};
   GXValidFnc[261]={fld:"PROMPT_TRNPERDA7",grid:0};
   GXValidFnc[262]={fld:"PROMPT_TRNPERDA8",grid:0};
   GXValidFnc[263]={fld:"PROMPT_TRNPERDA9",grid:0};
   GXValidFnc[264]={fld:"PROMPT_TRNPERDA10",grid:0};
   GXValidFnc[265]={fld:"PROMPT_TRNPERDA11",grid:0};
   GXValidFnc[266]={fld:"PROMPT_TRNPERDA12",grid:0};
   GXValidFnc[267]={fld:"PROMPT_TRNPERDA13",grid:0};
   GXValidFnc[268]={fld:"PROMPT_TRNPERDA14",grid:0};
   GXValidFnc[269]={fld:"PROMPT_TRNPERDA15",grid:0};
   this.AV69TxtTela = "" ;
   this.ZV69TxtTela = "" ;
   this.OV69TxtTela = "" ;
   this.AV17GerarCsv = "" ;
   this.ZV17GerarCsv = "" ;
   this.OV17GerarCsv = "" ;
   this.AV14FilialId = 0 ;
   this.ZV14FilialId = 0 ;
   this.OV14FilialId = 0 ;
   this.AV15FilialNomeReduzido = "" ;
   this.ZV15FilialNomeReduzido = "" ;
   this.OV15FilialNomeReduzido = "" ;
   this.AV39ProdutoTipo = "" ;
   this.ZV39ProdutoTipo = "" ;
   this.OV39ProdutoTipo = "" ;
   this.AV71FamiliaId = "" ;
   this.ZV71FamiliaId = "" ;
   this.OV71FamiliaId = "" ;
   this.AV72FamiliaDescricao = "" ;
   this.ZV72FamiliaDescricao = "" ;
   this.OV72FamiliaDescricao = "" ;
   this.AV36ProdutoId = 0 ;
   this.ZV36ProdutoId = 0 ;
   this.OV36ProdutoId = 0 ;
   this.AV34ProdutoDescricaoResumida = "" ;
   this.ZV34ProdutoDescricaoResumida = "" ;
   this.OV34ProdutoDescricaoResumida = "" ;
   this.AV44SaidaDataIni = gx.date.nullDate() ;
   this.ZV44SaidaDataIni = gx.date.nullDate() ;
   this.OV44SaidaDataIni = gx.date.nullDate() ;
   this.AV43SaidaDataFim = gx.date.nullDate() ;
   this.ZV43SaidaDataFim = gx.date.nullDate() ;
   this.OV43SaidaDataFim = gx.date.nullDate() ;
   this.AV52TipoMovimentacao = "" ;
   this.ZV52TipoMovimentacao = "" ;
   this.OV52TipoMovimentacao = "" ;
   this.AV42SaidaClienteNome = "" ;
   this.ZV42SaidaClienteNome = "" ;
   this.OV42SaidaClienteNome = "" ;
   this.AV45SaidaNoDocumento = 0 ;
   this.ZV45SaidaNoDocumento = 0 ;
   this.OV45SaidaNoDocumento = 0 ;
   this.AV28PessoaId = 0 ;
   this.ZV28PessoaId = 0 ;
   this.OV28PessoaId = 0 ;
   this.AV27PessoaFantasia = "" ;
   this.ZV27PessoaFantasia = "" ;
   this.OV27PessoaFantasia = "" ;
   this.AV54TrnPerda1 = "" ;
   this.ZV54TrnPerda1 = "" ;
   this.OV54TrnPerda1 = "" ;
   this.AV61TrnPerda2 = "" ;
   this.ZV61TrnPerda2 = "" ;
   this.OV61TrnPerda2 = "" ;
   this.AV62TrnPerda3 = "" ;
   this.ZV62TrnPerda3 = "" ;
   this.OV62TrnPerda3 = "" ;
   this.AV63TrnPerda4 = "" ;
   this.ZV63TrnPerda4 = "" ;
   this.OV63TrnPerda4 = "" ;
   this.AV64TrnPerda5 = "" ;
   this.ZV64TrnPerda5 = "" ;
   this.OV64TrnPerda5 = "" ;
   this.AV65TrnPerda6 = "" ;
   this.ZV65TrnPerda6 = "" ;
   this.OV65TrnPerda6 = "" ;
   this.AV66TrnPerda7 = "" ;
   this.ZV66TrnPerda7 = "" ;
   this.OV66TrnPerda7 = "" ;
   this.AV67TrnPerda8 = "" ;
   this.ZV67TrnPerda8 = "" ;
   this.OV67TrnPerda8 = "" ;
   this.AV68TrnPerda9 = "" ;
   this.ZV68TrnPerda9 = "" ;
   this.OV68TrnPerda9 = "" ;
   this.AV55TrnPerda10 = "" ;
   this.ZV55TrnPerda10 = "" ;
   this.OV55TrnPerda10 = "" ;
   this.AV56TrnPerda11 = "" ;
   this.ZV56TrnPerda11 = "" ;
   this.OV56TrnPerda11 = "" ;
   this.AV57TrnPerda12 = "" ;
   this.ZV57TrnPerda12 = "" ;
   this.OV57TrnPerda12 = "" ;
   this.AV58TrnPerda13 = "" ;
   this.ZV58TrnPerda13 = "" ;
   this.OV58TrnPerda13 = "" ;
   this.AV59TrnPerda14 = "" ;
   this.ZV59TrnPerda14 = "" ;
   this.OV59TrnPerda14 = "" ;
   this.AV60TrnPerda15 = "" ;
   this.ZV60TrnPerda15 = "" ;
   this.OV60TrnPerda15 = "" ;
   this.GXV1 = "" ;
   this.ZV76GXV1 = "" ;
   this.OV76GXV1 = "" ;
   this.GXV2 = "" ;
   this.ZV77GXV2 = "" ;
   this.OV77GXV2 = "" ;
   this.GXV3 = "" ;
   this.ZV78GXV3 = "" ;
   this.OV78GXV3 = "" ;
   this.GXV4 = "" ;
   this.ZV79GXV4 = "" ;
   this.OV79GXV4 = "" ;
   this.GXV5 = "" ;
   this.ZV80GXV5 = "" ;
   this.OV80GXV5 = "" ;
   this.GXV6 = "" ;
   this.ZV81GXV6 = "" ;
   this.OV81GXV6 = "" ;
   this.GXV7 = "" ;
   this.ZV82GXV7 = "" ;
   this.OV82GXV7 = "" ;
   this.GXV8 = "" ;
   this.ZV83GXV8 = "" ;
   this.OV83GXV8 = "" ;
   this.GXV9 = "" ;
   this.ZV84GXV9 = "" ;
   this.OV84GXV9 = "" ;
   this.GXV10 = "" ;
   this.ZV85GXV10 = "" ;
   this.OV85GXV10 = "" ;
   this.GXV11 = "" ;
   this.ZV86GXV11 = "" ;
   this.OV86GXV11 = "" ;
   this.GXV12 = "" ;
   this.ZV87GXV12 = "" ;
   this.OV87GXV12 = "" ;
   this.GXV13 = "" ;
   this.ZV88GXV13 = "" ;
   this.OV88GXV13 = "" ;
   this.GXV14 = "" ;
   this.ZV89GXV14 = "" ;
   this.OV89GXV14 = "" ;
   this.GXV15 = "" ;
   this.ZV90GXV15 = "" ;
   this.OV90GXV15 = "" ;
   this.GXV16 = "" ;
   this.ZV91GXV16 = "" ;
   this.OV91GXV16 = "" ;
   this.GXV17 = "" ;
   this.ZV92GXV17 = "" ;
   this.OV92GXV17 = "" ;
   this.GXV18 = "" ;
   this.ZV93GXV18 = "" ;
   this.OV93GXV18 = "" ;
   this.GXV19 = "" ;
   this.ZV94GXV19 = "" ;
   this.OV94GXV19 = "" ;
   this.GXV20 = "" ;
   this.ZV95GXV20 = "" ;
   this.OV95GXV20 = "" ;
   this.AV8AcessoSistemaSequencia = 0 ;
   this.ZV8AcessoSistemaSequencia = 0 ;
   this.OV8AcessoSistemaSequencia = 0 ;
   this.AV73FamiliaEmpresaId = "" ;
   this.ZV73FamiliaEmpresaId = "" ;
   this.OV73FamiliaEmpresaId = "" ;
   this.AV69TxtTela = "" ;
   this.AV17GerarCsv = "" ;
   this.AV14FilialId = 0 ;
   this.AV15FilialNomeReduzido = "" ;
   this.AV39ProdutoTipo = "" ;
   this.AV71FamiliaId = "" ;
   this.AV72FamiliaDescricao = "" ;
   this.AV36ProdutoId = 0 ;
   this.AV34ProdutoDescricaoResumida = "" ;
   this.AV44SaidaDataIni = gx.date.nullDate() ;
   this.AV43SaidaDataFim = gx.date.nullDate() ;
   this.AV52TipoMovimentacao = "" ;
   this.AV42SaidaClienteNome = "" ;
   this.AV45SaidaNoDocumento = 0 ;
   this.AV28PessoaId = 0 ;
   this.AV27PessoaFantasia = "" ;
   this.AV54TrnPerda1 = "" ;
   this.AV61TrnPerda2 = "" ;
   this.AV62TrnPerda3 = "" ;
   this.AV63TrnPerda4 = "" ;
   this.AV64TrnPerda5 = "" ;
   this.AV65TrnPerda6 = "" ;
   this.AV66TrnPerda7 = "" ;
   this.AV67TrnPerda8 = "" ;
   this.AV68TrnPerda9 = "" ;
   this.AV55TrnPerda10 = "" ;
   this.AV56TrnPerda11 = "" ;
   this.AV57TrnPerda12 = "" ;
   this.AV58TrnPerda13 = "" ;
   this.AV59TrnPerda14 = "" ;
   this.AV60TrnPerda15 = "" ;
   this.GXV1 = "" ;
   this.GXV2 = "" ;
   this.GXV3 = "" ;
   this.GXV4 = "" ;
   this.GXV5 = "" ;
   this.GXV6 = "" ;
   this.GXV7 = "" ;
   this.GXV8 = "" ;
   this.GXV9 = "" ;
   this.GXV10 = "" ;
   this.GXV11 = "" ;
   this.GXV12 = "" ;
   this.GXV13 = "" ;
   this.GXV14 = "" ;
   this.GXV15 = "" ;
   this.GXV16 = "" ;
   this.GXV17 = "" ;
   this.GXV18 = "" ;
   this.GXV19 = "" ;
   this.GXV20 = "" ;
   this.AV8AcessoSistemaSequencia = 0 ;
   this.AV73FamiliaEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A9349FilialNomeReduzido = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.A2951FamiliaDescricao = "" ;
   this.Events = {"e112912_client": ["'FECHAR'", true] ,"e132912_client": ["ENTER", true] ,"e152912_client": ["'SALVARTXT'", true] ,"e162912_client": ["VTXTTELA.CLICK", true] ,"e172912_client": ["'EXCLUIRTXT'", true] ,"e182912_client": ["'TIPOMOVIMENTO'", true] ,"e202912_client": ["'PROMPTPRODUTO'", true] ,"e212912_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV96Pgmname',fld:'vPGMNAME'},{av:'AV6SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV9EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV69TxtTela',fld:'vTXTTELA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV108Udparg4',fld:'vUDPARG4'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV110Udparg5',fld:'vUDPARG5'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV14FilialId',fld:'vFILIALID'},{av:'A9349FilialNomeReduzido',fld:'FILIALNOMEREDUZIDO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV112Udparg6',fld:'vUDPARG6'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV36ProdutoId',fld:'vPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'}],[{av:'AV16filtros',fld:'vFILTROS'},{av:'AV69TxtTela',fld:'vTXTTELA'},{av:'AV113GXV22',fld:'vGXV22'},{av:'AV7SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV106GXV21',fld:'vGXV21'},{av:'AV17GerarCsv',fld:'vGERARCSV'},{av:'AV14FilialId',fld:'vFILIALID'},{av:'AV39ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV36ProdutoId',fld:'vPRODUTOID'},{av:'AV44SaidaDataIni',fld:'vSAIDADATAINI'},{av:'AV43SaidaDataFim',fld:'vSAIDADATAFIM'},{av:'AV52TipoMovimentacao',fld:'vTIPOMOVIMENTACAO'},{av:'AV42SaidaClienteNome',fld:'vSAIDACLIENTENOME'},{av:'AV45SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV54TrnPerda1',fld:'vTRNPERDA1'},{av:'AV61TrnPerda2',fld:'vTRNPERDA2'},{av:'AV62TrnPerda3',fld:'vTRNPERDA3'},{av:'AV63TrnPerda4',fld:'vTRNPERDA4'},{av:'AV64TrnPerda5',fld:'vTRNPERDA5'},{av:'AV65TrnPerda6',fld:'vTRNPERDA6'},{av:'AV66TrnPerda7',fld:'vTRNPERDA7'},{av:'AV67TrnPerda8',fld:'vTRNPERDA8'},{av:'AV68TrnPerda9',fld:'vTRNPERDA9'},{av:'AV55TrnPerda10',fld:'vTRNPERDA10'},{av:'AV56TrnPerda11',fld:'vTRNPERDA11'},{av:'AV57TrnPerda12',fld:'vTRNPERDA12'},{av:'AV58TrnPerda13',fld:'vTRNPERDA13'},{av:'AV59TrnPerda14',fld:'vTRNPERDA14'},{av:'AV60TrnPerda15',fld:'vTRNPERDA15'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV15FilialNomeReduzido',fld:'vFILIALNOMEREDUZIDO'},{av:'AV34ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV8AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV48SnErro',fld:'vSNERRO'},{av:'AV69TxtTela',fld:'vTXTTELA'},{av:'AV96Pgmname',fld:'vPGMNAME'},{av:'AV14FilialId',fld:'vFILIALID'},{av:'AV39ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV36ProdutoId',fld:'vPRODUTOID'},{av:'AV44SaidaDataIni',fld:'vSAIDADATAINI'},{av:'AV43SaidaDataFim',fld:'vSAIDADATAFIM'},{av:'AV52TipoMovimentacao',fld:'vTIPOMOVIMENTACAO'},{ctrl:'vTIPOMOVIMENTACAO'},{av:'AV53TransacaoSaidaCodigoCol',fld:'vTRANSACAOSAIDACODIGOCOL'},{av:'AV42SaidaClienteNome',fld:'vSAIDACLIENTENOME'},{av:'AV45SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV71FamiliaId',fld:'vFAMILIAID'},{av:'AV16filtros',fld:'vFILTROS'},{av:'AV17GerarCsv',fld:'vGERARCSV'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV99Udparg1',fld:'vUDPARG1'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A9349FilialNomeReduzido',fld:'FILIALNOMEREDUZIDO'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV73FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'A2951FamiliaDescricao',fld:'FAMILIADESCRICAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV102Udparg2',fld:'vUDPARG2'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV104Udparg3',fld:'vUDPARG3'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV54TrnPerda1',fld:'vTRNPERDA1'},{av:'AV61TrnPerda2',fld:'vTRNPERDA2'},{av:'AV62TrnPerda3',fld:'vTRNPERDA3'},{av:'AV63TrnPerda4',fld:'vTRNPERDA4'},{av:'AV64TrnPerda5',fld:'vTRNPERDA5'},{av:'AV65TrnPerda6',fld:'vTRNPERDA6'},{av:'AV66TrnPerda7',fld:'vTRNPERDA7'},{av:'AV67TrnPerda8',fld:'vTRNPERDA8'},{av:'AV68TrnPerda9',fld:'vTRNPERDA9'},{av:'AV55TrnPerda10',fld:'vTRNPERDA10'},{av:'AV56TrnPerda11',fld:'vTRNPERDA11'},{av:'AV57TrnPerda12',fld:'vTRNPERDA12'},{av:'AV58TrnPerda13',fld:'vTRNPERDA13'},{av:'AV59TrnPerda14',fld:'vTRNPERDA14'},{av:'AV60TrnPerda15',fld:'vTRNPERDA15'},{av:'AV9EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV26NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV25NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV40QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV48SnErro',fld:'vSNERRO'},{av:'AV98GXLvl139',fld:'vGXLVL139'},{av:'AV15FilialNomeReduzido',fld:'vFILIALNOMEREDUZIDO'},{av:'AV72FamiliaDescricao',fld:'vFAMILIADESCRICAO'},{av:'AV100GXLvl157',fld:'vGXLVL157'},{av:'AV101GXLvl172',fld:'vGXLVL172'},{av:'AV34ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV43SaidaDataFim',fld:'vSAIDADATAFIM'},{av:'AV44SaidaDataIni',fld:'vSAIDADATAINI'},{av:'AV103GXLvl210',fld:'vGXLVL210'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV53TransacaoSaidaCodigoCol',fld:'vTRANSACAOSAIDACODIGOCOL'},{av:'AV5OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'PROMPTPRODUTO'"] = [[{av:'AV14FilialId',fld:'vFILIALID'},{av:'Gx_date',fld:'vTODAY'},{av:'AV29PrecoNulo',fld:'vPRECONULO'},{av:'AV31ProdutoCategoria',fld:'vPRODUTOCATEGORIA'},{av:'AV30ProdutoCadastrado',fld:'vPRODUTOCADASTRADO'},{av:'AV35ProdutoGrupoIdRet',fld:'vPRODUTOGRUPOIDRET'},{av:'AV38ProdutoSubGrupoRet',fld:'vPRODUTOSUBGRUPORET'},{av:'AV33ProdutoCodigoRet',fld:'vPRODUTOCODIGORET'},{av:'AV49SnVencLote',fld:'vSNVENCLOTE'}],[{av:'AV37ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV21LoteCombinacao',fld:'vLOTECOMBINACAO'},{av:'AV32ProdutoCodigoId',fld:'vPRODUTOCODIGOID'},{av:'AV50SubGrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV18GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV36ProdutoId',fld:'vPRODUTOID'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV9EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV69TxtTela',fld:'vTXTTELA'},{av:'AV96Pgmname',fld:'vPGMNAME'},{av:'AV17GerarCsv',fld:'vGERARCSV'},{av:'AV14FilialId',fld:'vFILIALID'},{av:'AV39ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV36ProdutoId',fld:'vPRODUTOID'},{av:'AV44SaidaDataIni',fld:'vSAIDADATAINI'},{av:'AV43SaidaDataFim',fld:'vSAIDADATAFIM'},{av:'AV52TipoMovimentacao',fld:'vTIPOMOVIMENTACAO'},{av:'AV42SaidaClienteNome',fld:'vSAIDACLIENTENOME'},{av:'AV45SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV54TrnPerda1',fld:'vTRNPERDA1'},{av:'AV61TrnPerda2',fld:'vTRNPERDA2'},{av:'AV62TrnPerda3',fld:'vTRNPERDA3'},{av:'AV63TrnPerda4',fld:'vTRNPERDA4'},{av:'AV64TrnPerda5',fld:'vTRNPERDA5'},{av:'AV65TrnPerda6',fld:'vTRNPERDA6'},{av:'AV66TrnPerda7',fld:'vTRNPERDA7'},{av:'AV67TrnPerda8',fld:'vTRNPERDA8'},{av:'AV68TrnPerda9',fld:'vTRNPERDA9'},{av:'AV55TrnPerda10',fld:'vTRNPERDA10'},{av:'AV56TrnPerda11',fld:'vTRNPERDA11'},{av:'AV57TrnPerda12',fld:'vTRNPERDA12'},{av:'AV58TrnPerda13',fld:'vTRNPERDA13'},{av:'AV59TrnPerda14',fld:'vTRNPERDA14'},{av:'AV60TrnPerda15',fld:'vTRNPERDA15'},{av:'AV16filtros',fld:'vFILTROS'}],[{av:'AV5OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV96Pgmname',fld:'vPGMNAME'},{av:'AV6SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV69TxtTela',fld:'vTXTTELA'},{av:'AV9EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV108Udparg4',fld:'vUDPARG4'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV110Udparg5',fld:'vUDPARG5'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV14FilialId',fld:'vFILIALID'},{av:'A9349FilialNomeReduzido',fld:'FILIALNOMEREDUZIDO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV112Udparg6',fld:'vUDPARG6'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV36ProdutoId',fld:'vPRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'}],[{av:'AV106GXV21',fld:'vGXV21'},{av:'AV7SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV17GerarCsv',fld:'vGERARCSV'},{av:'AV14FilialId',fld:'vFILIALID'},{av:'AV39ProdutoTipo',fld:'vPRODUTOTIPO'},{av:'AV36ProdutoId',fld:'vPRODUTOID'},{av:'AV44SaidaDataIni',fld:'vSAIDADATAINI'},{av:'AV43SaidaDataFim',fld:'vSAIDADATAFIM'},{av:'AV52TipoMovimentacao',fld:'vTIPOMOVIMENTACAO'},{av:'AV42SaidaClienteNome',fld:'vSAIDACLIENTENOME'},{av:'AV45SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV28PessoaId',fld:'vPESSOAID'},{av:'AV54TrnPerda1',fld:'vTRNPERDA1'},{av:'AV61TrnPerda2',fld:'vTRNPERDA2'},{av:'AV62TrnPerda3',fld:'vTRNPERDA3'},{av:'AV63TrnPerda4',fld:'vTRNPERDA4'},{av:'AV64TrnPerda5',fld:'vTRNPERDA5'},{av:'AV65TrnPerda6',fld:'vTRNPERDA6'},{av:'AV66TrnPerda7',fld:'vTRNPERDA7'},{av:'AV67TrnPerda8',fld:'vTRNPERDA8'},{av:'AV68TrnPerda9',fld:'vTRNPERDA9'},{av:'AV55TrnPerda10',fld:'vTRNPERDA10'},{av:'AV56TrnPerda11',fld:'vTRNPERDA11'},{av:'AV57TrnPerda12',fld:'vTRNPERDA12'},{av:'AV58TrnPerda13',fld:'vTRNPERDA13'},{av:'AV59TrnPerda14',fld:'vTRNPERDA14'},{av:'AV60TrnPerda15',fld:'vTRNPERDA15'},{av:'AV16filtros',fld:'vFILTROS'},{av:'AV27PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV15FilialNomeReduzido',fld:'vFILIALNOMEREDUZIDO'},{av:'AV34ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV9EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV96Pgmname',fld:'vPGMNAME'},{av:'AV69TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["'TIPOMOVIMENTO'"] = [[{av:'AV16filtros',fld:'vFILTROS'}],[]];
   this.setPrompt("PROMPT_FILIALID", [55]);
   this.setPrompt("PROMPT_FAMILIAID", [66]);
   this.setPrompt("PROMPT_PESSOAID", [106]);
   this.setPrompt("PROMPT_TRNPERDA1", [112]);
   this.setPrompt("PROMPT_TRNPERDA2", [113]);
   this.setPrompt("PROMPT_TRNPERDA3", [114]);
   this.setPrompt("PROMPT_TRNPERDA4", [115]);
   this.setPrompt("PROMPT_TRNPERDA5", [116]);
   this.setPrompt("PROMPT_TRNPERDA6", [120]);
   this.setPrompt("PROMPT_TRNPERDA7", [121]);
   this.setPrompt("PROMPT_TRNPERDA8", [122]);
   this.setPrompt("PROMPT_TRNPERDA9", [123]);
   this.setPrompt("PROMPT_TRNPERDA10", [124]);
   this.setPrompt("PROMPT_TRNPERDA11", [128]);
   this.setPrompt("PROMPT_TRNPERDA12", [129]);
   this.setPrompt("PROMPT_TRNPERDA13", [130]);
   this.setPrompt("PROMPT_TRNPERDA14", [131]);
   this.setPrompt("PROMPT_TRNPERDA15", [132]);
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.addBCProperty("Filtros", ["SNPreVenda"], this.GXValidFnc[139], "AV16filtros");
   this.addBCProperty("Filtros", ["SNCondicional"], this.GXValidFnc[144], "AV16filtros");
   this.addBCProperty("Filtros", ["SNOrcamento"], this.GXValidFnc[149], "AV16filtros");
   this.addBCProperty("Filtros", ["SNEntregaFutura"], this.GXValidFnc[154], "AV16filtros");
   this.addBCProperty("Filtros", ["SNSimplesRemessa"], this.GXValidFnc[159], "AV16filtros");
   this.addBCProperty("Filtros", ["SNDAV"], this.GXValidFnc[164], "AV16filtros");
   this.addBCProperty("Filtros", ["SNCupomFiscal"], this.GXValidFnc[169], "AV16filtros");
   this.addBCProperty("Filtros", ["SNCupomFiscalEle"], this.GXValidFnc[174], "AV16filtros");
   this.addBCProperty("Filtros", ["SNNotaSaidaNormal"], this.GXValidFnc[179], "AV16filtros");
   this.addBCProperty("Filtros", ["SNNotaSaidaCom"], this.GXValidFnc[184], "AV16filtros");
   this.addBCProperty("Filtros", ["SNNotaSaidaAjuste"], this.GXValidFnc[189], "AV16filtros");
   this.addBCProperty("Filtros", ["SNDevolucaoSaida"], this.GXValidFnc[194], "AV16filtros");
   this.addBCProperty("Filtros", ["SNAjusteSaida"], this.GXValidFnc[199], "AV16filtros");
   this.addBCProperty("Filtros", ["SNNotaEntradaNormal"], this.GXValidFnc[204], "AV16filtros");
   this.addBCProperty("Filtros", ["SNNotaEntradaCom"], this.GXValidFnc[209], "AV16filtros");
   this.addBCProperty("Filtros", ["SNNotaEntradaAjuste"], this.GXValidFnc[214], "AV16filtros");
   this.addBCProperty("Filtros", ["SNDevolucaoEntrada"], this.GXValidFnc[219], "AV16filtros");
   this.addBCProperty("Filtros", ["SNAjusteEntrada"], this.GXValidFnc[224], "AV16filtros");
   this.addBCProperty("Filtros", ["SNTroca"], this.GXValidFnc[229], "AV16filtros");
   this.addBCProperty("Filtros", ["SNTransferencia"], this.GXValidFnc[234], "AV16filtros");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaomovmedicamento());
