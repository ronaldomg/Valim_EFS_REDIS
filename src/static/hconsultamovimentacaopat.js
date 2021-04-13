/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:32:37.17
*/
gx.evt.autoSkip = false;
gx.define('hconsultamovimentacaopat', false, function () {
   this.ServerClass =  "hconsultamovimentacaopat" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
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
   this.e11g42_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e12g42_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14g42_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e15g42_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e13g42_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e16g42_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e17g42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e21g42_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,22,25,27,28,31,33,34,37,39,41,45,48,50,53,55,57,60,62,65,67,69,72,74,77,79,81,84,86,89,92,94,96,98,100,103,105,107,115,116,117,118,119,120,121,122,123,124,125,126,132,136,139,141,143,145,147,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,166,167,168,169,170,171,172,173];
   this.GXLastCtrlId =173;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",114,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamovimentacaopat",[],false,1,true,true,0,true,false,false,"CollSdtConsultaMovimentacaoPat.SdtConsultaMovimentacaoPatItem",0,"px","Novo registro",true,false,false,null,null,false,"AV156SdtConsultaMovimentacaoPat",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV137",115,"CTLBEMCODIGO","Código do HistoricoBem","","BemCodigo","int",0,"px",7,7,"right",null,[],"GXV137","GXV137",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV138",116,"CTLBEMSUBGRUPO","Grp","","BemSubGrupo","int",0,"px",2,2,"right",null,[],"GXV138","GXV138",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV139",117,"CTLBEMDESCRICAORESUMIDA","Descrição","","BemDescricaoResumida","svchar",0,"px",40,40,"left",null,[],"GXV139","GXV139",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox("GXV13A",118,"CTLBEMSITUACAO","Situação","BemSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit("GXV13B",119,"CTLBEMDTAQUISICAO","Dt. Aquisição","","BemDtAquisicao","date",0,"px",10,10,"right",null,[],"GXV13B","GXV13B",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV13C",120,"CTLBEMDTINICIOAPURACAO","Dt. Ini. Apuração","","BemDtInicioApuracao","date",0,"px",10,10,"right",null,[],"GXV13C","GXV13C",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV13D",121,"CTLBEMVLRAQUISICAO","Vlr Aquisição","","BemVlrAquisicao","decimal",0,"px",22,22,"right",null,[],"GXV13D","GXV13D",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV13E",122,"CTLBEMVLRBEM","Vlr Bem","","BemVlrBem","decimal",0,"px",22,22,"right",null,[],"GXV13E","GXV13E",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV13F",123,"CTLLANCAMENTOBEMVLRREDUTORA","Valor de Aquisição","","LancamentoBemVlrRedutora","decimal",0,"px",22,22,"right",null,[],"GXV13F","GXV13F",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV13G",124,"CTLVLRTOTALDEPRECIADO","Total Depreciado","","VlrTotalDepreciado","decimal",0,"px",22,22,"right",null,[],"GXV13G","GXV13G",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV13H",125,"CTLBEMVLRVENDA","Vlr Baixa","","BemVlrVenda","decimal",0,"px",22,22,"right",null,[],"GXV13H","GXV13H",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV13I",126,"CTLVLRATUAL","Vlr Atual","","VlrAtual","decimal",0,"px",22,22,"right",null,[],"GXV13I","GXV13I",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TABLE11",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK33", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSITUACAO",gxz:"ZV68BemSituacao",gxold:"OV68BemSituacao",gxvar:"AV68BemSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV68BemSituacao=Value},v2z:function(Value){gx.O.ZV68BemSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vBEMSITUACAO",gx.O.AV68BemSituacao)},c2v:function(){gx.O.AV68BemSituacao=this.val()},val:function(){return gx.fn.getControlValue("vBEMSITUACAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK41", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemdepartamentocodigo,isvalid:null,rgrid:[],fld:"vBEMDEPARTAMENTOCODIGO",gxz:"ZV75BemDepartamentoCodigo",gxold:"OV75BemDepartamentoCodigo",gxvar:"AV75BemDepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75BemDepartamentoCodigo=Value},v2z:function(Value){gx.O.ZV75BemDepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("vBEMDEPARTAMENTOCODIGO",gx.O.AV75BemDepartamentoCodigo,0)},c2v:function(){gx.O.AV75BemDepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vBEMDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDEPARTAMENTONOME",gxz:"ZV88BemDepartamentoNome",gxold:"OV88BemDepartamentoNome",gxvar:"AV88BemDepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88BemDepartamentoNome=Value},v2z:function(Value){gx.O.ZV88BemDepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vBEMDEPARTAMENTONOME",gx.O.AV88BemDepartamentoNome,0)},c2v:function(){gx.O.AV88BemDepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vBEMDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK42", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Origemrecursoid,isvalid:null,rgrid:[],fld:"vORIGEMRECURSOID",gxz:"ZV76OrigemRecursoId",gxold:"OV76OrigemRecursoId",gxvar:"AV76OrigemRecursoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76OrigemRecursoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV76OrigemRecursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSOID",gx.O.AV76OrigemRecursoId,0)},c2v:function(){gx.O.AV76OrigemRecursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORIGEMRECURSOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORIGEMRECURSODESCRICAO",gxz:"ZV85OrigemRecursoDescricao",gxold:"OV85OrigemRecursoDescricao",gxvar:"AV85OrigemRecursoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85OrigemRecursoDescricao=Value},v2z:function(Value){gx.O.ZV85OrigemRecursoDescricao=Value},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSODESCRICAO",gx.O.AV85OrigemRecursoDescricao,0)},c2v:function(){gx.O.AV85OrigemRecursoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vORIGEMRECURSODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaidfor,isvalid:null,rgrid:[],fld:"vPESSOAIDFOR",gxz:"ZV77PessoaIdFor",gxold:"OV77PessoaIdFor",gxvar:"AV77PessoaIdFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77PessoaIdFor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77PessoaIdFor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDFOR",gx.O.AV77PessoaIdFor,0)},c2v:function(){gx.O.AV77PessoaIdFor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDFOR",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIAFOR",gxz:"ZV93PessoaFantasiaFor",gxold:"OV93PessoaFantasiaFor",gxvar:"AV93PessoaFantasiaFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93PessoaFantasiaFor=Value},v2z:function(Value){gx.O.ZV93PessoaFantasiaFor=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIAFOR",gx.O.AV93PessoaFantasiaFor,0)},c2v:function(){gx.O.AV93PessoaFantasiaFor=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIAFOR")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMNOTAFISCAL",gxz:"ZV78BemNotaFiscal",gxold:"OV78BemNotaFiscal",gxvar:"AV78BemNotaFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78BemNotaFiscal=Value},v2z:function(Value){gx.O.ZV78BemNotaFiscal=Value},v2c:function(){gx.fn.setControlValue("vBEMNOTAFISCAL",gx.O.AV78BemNotaFiscal,0)},c2v:function(){gx.O.AV78BemNotaFiscal=this.val()},val:function(){return gx.fn.getControlValue("vBEMNOTAFISCAL")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE12",grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPENASBEMTOTDEPRE",gxz:"ZV155ApenasBemTotDepre",gxold:"OV155ApenasBemTotDepre",gxvar:"AV155ApenasBemTotDepre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV155ApenasBemTotDepre=Value},v2z:function(Value){gx.O.ZV155ApenasBemTotDepre=Value},v2c:function(){gx.fn.setCheckBoxValue("vAPENASBEMTOTDEPRE",gx.O.AV155ApenasBemTotDepre,"S")},c2v:function(){gx.O.AV155ApenasBemTotDepre=this.val()},val:function(){return gx.fn.getControlValue("vAPENASBEMTOTDEPRE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[48]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[50]={fld:"TABLE13",grid:0};
   GXValidFnc[53]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOBEMDATAINI",gxz:"ZV65LancamentoBemDataIni",gxold:"OV65LancamentoBemDataIni",gxvar:"AV65LancamentoBemDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65LancamentoBemDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV65LancamentoBemDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOBEMDATAINI",gx.O.AV65LancamentoBemDataIni,0)},c2v:function(){gx.O.AV65LancamentoBemDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOBEMDATAINI")},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOBEMDATAFIM",gxz:"ZV66LancamentoBemDataFim",gxold:"OV66LancamentoBemDataFim",gxvar:"AV66LancamentoBemDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66LancamentoBemDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV66LancamentoBemDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOBEMDATAFIM",gx.O.AV66LancamentoBemDataFim,0)},c2v:function(){gx.O.AV66LancamentoBemDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOBEMDATAFIM")},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TEXTBLOCK32", format:0,grid:0};
   GXValidFnc[62]={fld:"TABLE14",grid:0};
   GXValidFnc[65]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDTAQUISICAOINI",gxz:"ZV67BemDtAquisicaoIni",gxold:"OV67BemDtAquisicaoIni",gxvar:"AV67BemDtAquisicaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67BemDtAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV67BemDtAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTAQUISICAOINI",gx.O.AV67BemDtAquisicaoIni,0)},c2v:function(){gx.O.AV67BemDtAquisicaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTAQUISICAOINI")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK37", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDTAQUISICAOFIM",gxz:"ZV82BemDtAquisicaoFim",gxold:"OV82BemDtAquisicaoFim",gxvar:"AV82BemDtAquisicaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82BemDtAquisicaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV82BemDtAquisicaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTAQUISICAOFIM",gx.O.AV82BemDtAquisicaoFim,0)},c2v:function(){gx.O.AV82BemDtAquisicaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTAQUISICAOFIM")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[74]={fld:"TABLE15",grid:0};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMIDINI",gxz:"ZV73TipoBemIdIni",gxold:"OV73TipoBemIdIni",gxvar:"AV73TipoBemIdIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73TipoBemIdIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73TipoBemIdIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMIDINI",gx.O.AV73TipoBemIdIni,0)},c2v:function(){gx.O.AV73TipoBemIdIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMIDINI",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMIDFIM",gxz:"ZV74TipoBemIdFim",gxold:"OV74TipoBemIdFim",gxvar:"AV74TipoBemIdFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74TipoBemIdFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74TipoBemIdFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMIDFIM",gx.O.AV74TipoBemIdFim,0)},c2v:function(){gx.O.AV74TipoBemIdFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMIDFIM",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[86]={fld:"TABLE16",grid:0};
   GXValidFnc[89]={fld:"TABLE17",grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGOINI",gxz:"ZV69BemCodigoIni",gxold:"OV69BemCodigoIni",gxvar:"AV69BemCodigoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69BemCodigoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69BemCodigoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOINI",gx.O.AV69BemCodigoIni,0)},c2v:function(){gx.O.AV69BemCodigoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOINI",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOINI",gxz:"ZV71BemSubGrupoIni",gxold:"OV71BemSubGrupoIni",gxvar:"AV71BemSubGrupoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71BemSubGrupoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71BemSubGrupoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOINI",gx.O.AV71BemSubGrupoIni,0)},c2v:function(){gx.O.AV71BemSubGrupoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOINI",'.')},nac:gx.falseFn};
   GXValidFnc[98]={fld:"TEXTBLOCK40", format:0,grid:0};
   GXValidFnc[100]={fld:"TABLE18",grid:0};
   GXValidFnc[103]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGOFIM",gxz:"ZV70BemCodigoFim",gxold:"OV70BemCodigoFim",gxvar:"AV70BemCodigoFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70BemCodigoFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70BemCodigoFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGOFIM",gx.O.AV70BemCodigoFim,0)},c2v:function(){gx.O.AV70BemCodigoFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGOFIM",'.')},nac:gx.falseFn};
   GXValidFnc[105]={fld:"TEXTBLOCK45", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPOFIM",gxz:"ZV72BemSubGrupoFim",gxold:"OV72BemSubGrupoFim",gxvar:"AV72BemSubGrupoFim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72BemSubGrupoFim=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72BemSubGrupoFim=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPOFIM",gx.O.AV72BemSubGrupoFim,0)},c2v:function(){gx.O.AV72BemSubGrupoFim=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPOFIM",'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMCODIGO",gxz:"ZV168GXV137",gxold:"OV168GXV137",gxvar:"GXV137",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV137=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV168GXV137=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLBEMCODIGO",row || gx.fn.currentGridRowImpl(114),gx.O.GXV137,0)},c2v:function(){gx.O.GXV137=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLBEMCODIGO",row || gx.fn.currentGridRowImpl(114),'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMSUBGRUPO",gxz:"ZV169GXV138",gxold:"OV169GXV138",gxvar:"GXV138",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV138=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV169GXV138=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLBEMSUBGRUPO",row || gx.fn.currentGridRowImpl(114),gx.O.GXV138,0)},c2v:function(){gx.O.GXV138=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLBEMSUBGRUPO",row || gx.fn.currentGridRowImpl(114),'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDESCRICAORESUMIDA",gxz:"ZV170GXV139",gxold:"OV170GXV139",gxvar:"GXV139",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV139=Value},v2z:function(Value){gx.O.ZV170GXV139=Value},v2c:function(row){gx.fn.setGridControlValue("CTLBEMDESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(114),gx.O.GXV139,0)},c2v:function(){gx.O.GXV139=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLBEMDESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(114))},nac:gx.falseFn};
   GXValidFnc[118]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMSITUACAO",gxz:"ZV171GXV13A",gxold:"OV171GXV13A",gxvar:"GXV13A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.GXV13A=Value},v2z:function(Value){gx.O.ZV171GXV13A=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLBEMSITUACAO",row || gx.fn.currentGridRowImpl(114),gx.O.GXV13A)},c2v:function(){gx.O.GXV13A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLBEMSITUACAO",row || gx.fn.currentGridRowImpl(114))},nac:gx.falseFn};
   GXValidFnc[119]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDTAQUISICAO",gxz:"ZV172GXV13B",gxold:"OV172GXV13B",gxvar:"GXV13B",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13B=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV172GXV13B=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLBEMDTAQUISICAO",row || gx.fn.currentGridRowImpl(114),gx.O.GXV13B,0)},c2v:function(){gx.O.GXV13B=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLBEMDTAQUISICAO",row || gx.fn.currentGridRowImpl(114))},nac:gx.falseFn};
   GXValidFnc[120]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMDTINICIOAPURACAO",gxz:"ZV173GXV13C",gxold:"OV173GXV13C",gxvar:"GXV13C",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13C=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV173GXV13C=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLBEMDTINICIOAPURACAO",row || gx.fn.currentGridRowImpl(114),gx.O.GXV13C,0)},c2v:function(){gx.O.GXV13C=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLBEMDTINICIOAPURACAO",row || gx.fn.currentGridRowImpl(114))},nac:gx.falseFn};
   GXValidFnc[121]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMVLRAQUISICAO",gxz:"ZV174GXV13D",gxold:"OV174GXV13D",gxvar:"GXV13D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13D=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV174GXV13D=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLBEMVLRAQUISICAO",row || gx.fn.currentGridRowImpl(114),gx.O.GXV13D,2,',')},c2v:function(){gx.O.GXV13D=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLBEMVLRAQUISICAO",row || gx.fn.currentGridRowImpl(114),'.',',')},nac:gx.falseFn};
   GXValidFnc[122]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMVLRBEM",gxz:"ZV175GXV13E",gxold:"OV175GXV13E",gxvar:"GXV13E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13E=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV175GXV13E=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLBEMVLRBEM",row || gx.fn.currentGridRowImpl(114),gx.O.GXV13E,2,',')},c2v:function(){gx.O.GXV13E=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLBEMVLRBEM",row || gx.fn.currentGridRowImpl(114),'.',',')},nac:gx.falseFn};
   GXValidFnc[123]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLLANCAMENTOBEMVLRREDUTORA",gxz:"ZV176GXV13F",gxold:"OV176GXV13F",gxvar:"GXV13F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13F=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV176GXV13F=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLLANCAMENTOBEMVLRREDUTORA",row || gx.fn.currentGridRowImpl(114),gx.O.GXV13F,2,',')},c2v:function(){gx.O.GXV13F=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLLANCAMENTOBEMVLRREDUTORA",row || gx.fn.currentGridRowImpl(114),'.',',')},nac:gx.falseFn};
   GXValidFnc[124]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRTOTALDEPRECIADO",gxz:"ZV177GXV13G",gxold:"OV177GXV13G",gxvar:"GXV13G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13G=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV177GXV13G=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRTOTALDEPRECIADO",row || gx.fn.currentGridRowImpl(114),gx.O.GXV13G,2,',')},c2v:function(){gx.O.GXV13G=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRTOTALDEPRECIADO",row || gx.fn.currentGridRowImpl(114),'.',',')},nac:gx.falseFn};
   GXValidFnc[125]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLBEMVLRVENDA",gxz:"ZV178GXV13H",gxold:"OV178GXV13H",gxvar:"GXV13H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13H=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV178GXV13H=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLBEMVLRVENDA",row || gx.fn.currentGridRowImpl(114),gx.O.GXV13H,2,',')},c2v:function(){gx.O.GXV13H=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLBEMVLRVENDA",row || gx.fn.currentGridRowImpl(114),'.',',')},nac:gx.falseFn};
   GXValidFnc[126]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:114,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVLRATUAL",gxz:"ZV179GXV13I",gxold:"OV179GXV13I",gxvar:"GXV13I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV13I=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV179GXV13I=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVLRATUAL",row || gx.fn.currentGridRowImpl(114),gx.O.GXV13I,2,',')},c2v:function(){gx.O.GXV13I=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVLRATUAL",row || gx.fn.currentGridRowImpl(114),'.',',')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TABLE3",grid:0};
   GXValidFnc[136]={fld:"TABLE4",grid:0};
   GXValidFnc[139]={fld:"IMAGE6",grid:0};
   GXValidFnc[141]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[143]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[145]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[147]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[149]={fld:"IMAGE11",grid:0};
   GXValidFnc[150]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDPAGGERADAS",gxz:"ZV106QtdPagGeradas",gxold:"OV106QtdPagGeradas",gxvar:"AV106QtdPagGeradas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106QtdPagGeradas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV106QtdPagGeradas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDPAGGERADAS",gx.O.AV106QtdPagGeradas,0)},c2v:function(){gx.O.AV106QtdPagGeradas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDPAGGERADAS",'.')},nac:gx.falseFn};
   GXValidFnc[151]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[152]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV159Ordenacao",gxold:"OV159Ordenacao",gxvar:"AV159Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV159Ordenacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV159Ordenacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDENACAO",gx.O.AV159Ordenacao,0)},c2v:function(){gx.O.AV159Ordenacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDENACAO",'.')},nac:gx.falseFn};
   GXValidFnc[153]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOBEM",gxz:"ZV16EmpresaPadraoBem",gxold:"OV16EmpresaPadraoBem",gxvar:"AV16EmpresaPadraoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EmpresaPadraoBem=Value},v2z:function(Value){gx.O.ZV16EmpresaPadraoBem=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOBEM",gx.O.AV16EmpresaPadraoBem,0)},c2v:function(){gx.O.AV16EmpresaPadraoBem=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOBEM")},nac:gx.falseFn};
   GXValidFnc[154]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTER",gxz:"ZV100QtCaracter",gxold:"OV100QtCaracter",gxvar:"AV100QtCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100QtCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV100QtCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTER",gx.O.AV100QtCaracter,0)},c2v:function(){gx.O.AV100QtCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[155]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraobemdepartamento,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOBEMDEPARTAMENTO",gxz:"ZV96EmpresaPadraoBemDepartamento",gxold:"OV96EmpresaPadraoBemDepartamento",gxvar:"AV96EmpresaPadraoBemDepartamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96EmpresaPadraoBemDepartamento=Value},v2z:function(Value){gx.O.ZV96EmpresaPadraoBemDepartamento=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOBEMDEPARTAMENTO",gx.O.AV96EmpresaPadraoBemDepartamento,0)},c2v:function(){gx.O.AV96EmpresaPadraoBemDepartamento=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOBEMDEPARTAMENTO")},nac:gx.falseFn};
   GXValidFnc[156]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDTOTALPAGGRID",gxz:"ZV127QtdTotalPagGrid",gxold:"OV127QtdTotalPagGrid",gxvar:"AV127QtdTotalPagGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127QtdTotalPagGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV127QtdTotalPagGrid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDTOTALPAGGRID",gx.O.AV127QtdTotalPagGrid,0)},c2v:function(){gx.O.AV127QtdTotalPagGrid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDTOTALPAGGRID",'.')},nac:gx.falseFn};
   GXValidFnc[157]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERELATIVO",gxz:"ZV18NomeRelativo",gxold:"OV18NomeRelativo",gxvar:"AV18NomeRelativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18NomeRelativo=Value},v2z:function(Value){gx.O.ZV18NomeRelativo=Value},v2c:function(){gx.fn.setControlValue("vNOMERELATIVO",gx.O.AV18NomeRelativo,0)},c2v:function(){gx.O.AV18NomeRelativo=this.val()},val:function(){return gx.fn.getControlValue("vNOMERELATIVO")},nac:gx.falseFn};
   GXValidFnc[158]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEABSOLUTO",gxz:"ZV17NomeAbsoluto",gxold:"OV17NomeAbsoluto",gxvar:"AV17NomeAbsoluto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17NomeAbsoluto=Value},v2z:function(Value){gx.O.ZV17NomeAbsoluto=Value},v2c:function(){gx.fn.setControlValue("vNOMEABSOLUTO",gx.O.AV17NomeAbsoluto,0)},c2v:function(){gx.O.AV17NomeAbsoluto=this.val()},val:function(){return gx.fn.getControlValue("vNOMEABSOLUTO")},nac:gx.falseFn};
   GXValidFnc[159]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOTIPOBEM",gxz:"ZV97EmpresaPadraoTipoBem",gxold:"OV97EmpresaPadraoTipoBem",gxvar:"AV97EmpresaPadraoTipoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97EmpresaPadraoTipoBem=Value},v2z:function(Value){gx.O.ZV97EmpresaPadraoTipoBem=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOTIPOBEM",gx.O.AV97EmpresaPadraoTipoBem,0)},c2v:function(){gx.O.AV97EmpresaPadraoTipoBem=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOTIPOBEM")},nac:gx.falseFn};
   GXValidFnc[160]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraopessoa,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOPESSOA",gxz:"ZV98EmpresaPadraoPessoa",gxold:"OV98EmpresaPadraoPessoa",gxvar:"AV98EmpresaPadraoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98EmpresaPadraoPessoa=Value},v2z:function(Value){gx.O.ZV98EmpresaPadraoPessoa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOPESSOA",gx.O.AV98EmpresaPadraoPessoa,0)},c2v:function(){gx.O.AV98EmpresaPadraoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOPESSOA")},nac:gx.falseFn};
   GXValidFnc[161]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoorigemrecurso,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOORIGEMRECURSO",gxz:"ZV99EmpresaPadraoOrigemRecurso",gxold:"OV99EmpresaPadraoOrigemRecurso",gxvar:"AV99EmpresaPadraoOrigemRecurso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99EmpresaPadraoOrigemRecurso=Value},v2z:function(Value){gx.O.ZV99EmpresaPadraoOrigemRecurso=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOORIGEMRECURSO",gx.O.AV99EmpresaPadraoOrigemRecurso,0)},c2v:function(){gx.O.AV99EmpresaPadraoOrigemRecurso=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOORIGEMRECURSO")},nac:gx.falseFn};
   GXValidFnc[162]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAOFOR",gxz:"ZV91NaoFor",gxold:"OV91NaoFor",gxvar:"AV91NaoFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91NaoFor=Value},v2z:function(Value){gx.O.ZV91NaoFor=Value},v2c:function(){gx.fn.setControlValue("vNAOFOR",gx.O.AV91NaoFor,0)},c2v:function(){gx.O.AV91NaoFor=this.val()},val:function(){return gx.fn.getControlValue("vNAOFOR")},nac:gx.falseFn};
   GXValidFnc[163]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIMFOR",gxz:"ZV92SimFor",gxold:"OV92SimFor",gxvar:"AV92SimFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92SimFor=Value},v2z:function(Value){gx.O.ZV92SimFor=Value},v2c:function(){gx.fn.setControlValue("vSIMFOR",gx.O.AV92SimFor,0)},c2v:function(){gx.O.AV92SimFor=this.val()},val:function(){return gx.fn.getControlValue("vSIMFOR")},nac:gx.falseFn};
   GXValidFnc[164]={fld:"JS", format:2,grid:0};
   GXValidFnc[166]={fld:"BTNHELP",grid:0};
   GXValidFnc[167]={fld:"PROMPT_BEMDEPARTAMENTOCODIGO",grid:0};
   GXValidFnc[168]={fld:"PROMPT_ORIGEMRECURSOID",grid:0};
   GXValidFnc[169]={fld:"PROMPT_PESSOAIDFOR",grid:0};
   GXValidFnc[170]={fld:"PROMPT_TIPOBEMIDINI",grid:0};
   GXValidFnc[171]={fld:"PROMPT_TIPOBEMIDFIM",grid:0};
   GXValidFnc[172]={fld:"PROMPT_BEMCODIGOINI_BEMSUBGRUPOINI",grid:0};
   GXValidFnc[173]={fld:"PROMPT_BEMCODIGOFIM_BEMSUBGRUPOFIM",grid:0};
   this.AV68BemSituacao = "" ;
   this.ZV68BemSituacao = "" ;
   this.OV68BemSituacao = "" ;
   this.AV75BemDepartamentoCodigo = "" ;
   this.ZV75BemDepartamentoCodigo = "" ;
   this.OV75BemDepartamentoCodigo = "" ;
   this.AV88BemDepartamentoNome = "" ;
   this.ZV88BemDepartamentoNome = "" ;
   this.OV88BemDepartamentoNome = "" ;
   this.AV76OrigemRecursoId = 0 ;
   this.ZV76OrigemRecursoId = 0 ;
   this.OV76OrigemRecursoId = 0 ;
   this.AV85OrigemRecursoDescricao = "" ;
   this.ZV85OrigemRecursoDescricao = "" ;
   this.OV85OrigemRecursoDescricao = "" ;
   this.AV77PessoaIdFor = 0 ;
   this.ZV77PessoaIdFor = 0 ;
   this.OV77PessoaIdFor = 0 ;
   this.AV93PessoaFantasiaFor = "" ;
   this.ZV93PessoaFantasiaFor = "" ;
   this.OV93PessoaFantasiaFor = "" ;
   this.AV78BemNotaFiscal = "" ;
   this.ZV78BemNotaFiscal = "" ;
   this.OV78BemNotaFiscal = "" ;
   this.AV155ApenasBemTotDepre = "" ;
   this.ZV155ApenasBemTotDepre = "" ;
   this.OV155ApenasBemTotDepre = "" ;
   this.AV65LancamentoBemDataIni = gx.date.nullDate() ;
   this.ZV65LancamentoBemDataIni = gx.date.nullDate() ;
   this.OV65LancamentoBemDataIni = gx.date.nullDate() ;
   this.AV66LancamentoBemDataFim = gx.date.nullDate() ;
   this.ZV66LancamentoBemDataFim = gx.date.nullDate() ;
   this.OV66LancamentoBemDataFim = gx.date.nullDate() ;
   this.AV67BemDtAquisicaoIni = gx.date.nullDate() ;
   this.ZV67BemDtAquisicaoIni = gx.date.nullDate() ;
   this.OV67BemDtAquisicaoIni = gx.date.nullDate() ;
   this.AV82BemDtAquisicaoFim = gx.date.nullDate() ;
   this.ZV82BemDtAquisicaoFim = gx.date.nullDate() ;
   this.OV82BemDtAquisicaoFim = gx.date.nullDate() ;
   this.AV73TipoBemIdIni = 0 ;
   this.ZV73TipoBemIdIni = 0 ;
   this.OV73TipoBemIdIni = 0 ;
   this.AV74TipoBemIdFim = 0 ;
   this.ZV74TipoBemIdFim = 0 ;
   this.OV74TipoBemIdFim = 0 ;
   this.AV69BemCodigoIni = 0 ;
   this.ZV69BemCodigoIni = 0 ;
   this.OV69BemCodigoIni = 0 ;
   this.AV71BemSubGrupoIni = 0 ;
   this.ZV71BemSubGrupoIni = 0 ;
   this.OV71BemSubGrupoIni = 0 ;
   this.AV70BemCodigoFim = 0 ;
   this.ZV70BemCodigoFim = 0 ;
   this.OV70BemCodigoFim = 0 ;
   this.AV72BemSubGrupoFim = 0 ;
   this.ZV72BemSubGrupoFim = 0 ;
   this.OV72BemSubGrupoFim = 0 ;
   this.ZV168GXV137 = 0 ;
   this.OV168GXV137 = 0 ;
   this.ZV169GXV138 = 0 ;
   this.OV169GXV138 = 0 ;
   this.ZV170GXV139 = "" ;
   this.OV170GXV139 = "" ;
   this.ZV171GXV13A = "" ;
   this.OV171GXV13A = "" ;
   this.ZV172GXV13B = gx.date.nullDate() ;
   this.OV172GXV13B = gx.date.nullDate() ;
   this.ZV173GXV13C = gx.date.nullDate() ;
   this.OV173GXV13C = gx.date.nullDate() ;
   this.ZV174GXV13D = 0 ;
   this.OV174GXV13D = 0 ;
   this.ZV175GXV13E = 0 ;
   this.OV175GXV13E = 0 ;
   this.ZV176GXV13F = 0 ;
   this.OV176GXV13F = 0 ;
   this.ZV177GXV13G = 0 ;
   this.OV177GXV13G = 0 ;
   this.ZV178GXV13H = 0 ;
   this.OV178GXV13H = 0 ;
   this.ZV179GXV13I = 0 ;
   this.OV179GXV13I = 0 ;
   this.AV106QtdPagGeradas = 0 ;
   this.ZV106QtdPagGeradas = 0 ;
   this.OV106QtdPagGeradas = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV159Ordenacao = 0 ;
   this.ZV159Ordenacao = 0 ;
   this.OV159Ordenacao = 0 ;
   this.AV16EmpresaPadraoBem = "" ;
   this.ZV16EmpresaPadraoBem = "" ;
   this.OV16EmpresaPadraoBem = "" ;
   this.AV100QtCaracter = 0 ;
   this.ZV100QtCaracter = 0 ;
   this.OV100QtCaracter = 0 ;
   this.AV96EmpresaPadraoBemDepartamento = "" ;
   this.ZV96EmpresaPadraoBemDepartamento = "" ;
   this.OV96EmpresaPadraoBemDepartamento = "" ;
   this.AV127QtdTotalPagGrid = 0 ;
   this.ZV127QtdTotalPagGrid = 0 ;
   this.OV127QtdTotalPagGrid = 0 ;
   this.AV18NomeRelativo = "" ;
   this.ZV18NomeRelativo = "" ;
   this.OV18NomeRelativo = "" ;
   this.AV17NomeAbsoluto = "" ;
   this.ZV17NomeAbsoluto = "" ;
   this.OV17NomeAbsoluto = "" ;
   this.AV97EmpresaPadraoTipoBem = "" ;
   this.ZV97EmpresaPadraoTipoBem = "" ;
   this.OV97EmpresaPadraoTipoBem = "" ;
   this.AV98EmpresaPadraoPessoa = "" ;
   this.ZV98EmpresaPadraoPessoa = "" ;
   this.OV98EmpresaPadraoPessoa = "" ;
   this.AV99EmpresaPadraoOrigemRecurso = "" ;
   this.ZV99EmpresaPadraoOrigemRecurso = "" ;
   this.OV99EmpresaPadraoOrigemRecurso = "" ;
   this.AV91NaoFor = "" ;
   this.ZV91NaoFor = "" ;
   this.OV91NaoFor = "" ;
   this.AV92SimFor = "" ;
   this.ZV92SimFor = "" ;
   this.OV92SimFor = "" ;
   this.AV68BemSituacao = "" ;
   this.AV75BemDepartamentoCodigo = "" ;
   this.AV88BemDepartamentoNome = "" ;
   this.AV76OrigemRecursoId = 0 ;
   this.AV85OrigemRecursoDescricao = "" ;
   this.AV77PessoaIdFor = 0 ;
   this.AV93PessoaFantasiaFor = "" ;
   this.AV78BemNotaFiscal = "" ;
   this.AV155ApenasBemTotDepre = "" ;
   this.AV65LancamentoBemDataIni = gx.date.nullDate() ;
   this.AV66LancamentoBemDataFim = gx.date.nullDate() ;
   this.AV67BemDtAquisicaoIni = gx.date.nullDate() ;
   this.AV82BemDtAquisicaoFim = gx.date.nullDate() ;
   this.AV73TipoBemIdIni = 0 ;
   this.AV74TipoBemIdFim = 0 ;
   this.AV69BemCodigoIni = 0 ;
   this.AV71BemSubGrupoIni = 0 ;
   this.AV70BemCodigoFim = 0 ;
   this.AV72BemSubGrupoFim = 0 ;
   this.AV106QtdPagGeradas = 0 ;
   this.AV5Pagina = 0 ;
   this.AV159Ordenacao = 0 ;
   this.AV16EmpresaPadraoBem = "" ;
   this.AV100QtCaracter = 0 ;
   this.AV96EmpresaPadraoBemDepartamento = "" ;
   this.AV127QtdTotalPagGrid = 0 ;
   this.AV18NomeRelativo = "" ;
   this.AV17NomeAbsoluto = "" ;
   this.AV97EmpresaPadraoTipoBem = "" ;
   this.AV98EmpresaPadraoPessoa = "" ;
   this.AV99EmpresaPadraoOrigemRecurso = "" ;
   this.AV91NaoFor = "" ;
   this.AV92SimFor = "" ;
   this.GXV137 = 0 ;
   this.GXV138 = 0 ;
   this.GXV139 = "" ;
   this.GXV13A = "" ;
   this.GXV13B = gx.date.nullDate() ;
   this.GXV13C = gx.date.nullDate() ;
   this.GXV13D = 0 ;
   this.GXV13E = 0 ;
   this.GXV13F = 0 ;
   this.GXV13G = 0 ;
   this.GXV13H = 0 ;
   this.GXV13I = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A2331OrigemRecursoId = 0 ;
   this.A2330OrigemRecursoEmpresaId = "" ;
   this.A2332OrigemRecursoDescricao = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2249DepartamentoNome = "" ;
   this.Events = {"e11g42_client": ["'GXM_PREVIOUS'", true] ,"e12g42_client": ["'GXM_NEXT'", true] ,"e14g42_client": ["'GXM_FIRST'", true] ,"e15g42_client": ["'GXM_LAST'", true] ,"e13g42_client": ["'FECHAR'", true] ,"e16g42_client": ["'IMPRIMIR'", true] ,"e17g42_client": ["ENTER", true] ,"e21g42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'subGrid_Rows'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV16EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV67BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV82BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV69BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV70BemCodigoFim',fld:'vBEMCODIGOFIM'},{av:'AV73TipoBemIdIni',fld:'vTIPOBEMIDINI'},{av:'AV74TipoBemIdFim',fld:'vTIPOBEMIDFIM'},{av:'AV68BemSituacao',fld:'vBEMSITUACAO'},{av:'AV75BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV77PessoaIdFor',fld:'vPESSOAIDFOR'},{av:'AV76OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV78BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV155ApenasBemTotDepre',fld:'vAPENASBEMTOTDEPRE'},{av:'AV66LancamentoBemDataFim',fld:'vLANCAMENTOBEMDATAFIM'},{av:'AV65LancamentoBemDataIni',fld:'vLANCAMENTOBEMDATAINI'},{av:'AV120EmpresaPadraoLancBem',fld:'vEMPRESAPADRAOLANCBEM'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV16EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV67BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV82BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV69BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV70BemCodigoFim',fld:'vBEMCODIGOFIM'},{av:'AV73TipoBemIdIni',fld:'vTIPOBEMIDINI'},{av:'AV74TipoBemIdFim',fld:'vTIPOBEMIDFIM'},{av:'AV68BemSituacao',fld:'vBEMSITUACAO'},{av:'AV75BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV77PessoaIdFor',fld:'vPESSOAIDFOR'},{av:'AV76OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV78BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV155ApenasBemTotDepre',fld:'vAPENASBEMTOTDEPRE'},{av:'AV66LancamentoBemDataFim',fld:'vLANCAMENTOBEMDATAFIM'},{av:'AV65LancamentoBemDataIni',fld:'vLANCAMENTOBEMDATAINI'},{av:'AV120EmpresaPadraoLancBem',fld:'vEMPRESAPADRAOLANCBEM'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'AV16EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV67BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV82BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV69BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV70BemCodigoFim',fld:'vBEMCODIGOFIM'},{av:'AV73TipoBemIdIni',fld:'vTIPOBEMIDINI'},{av:'AV74TipoBemIdFim',fld:'vTIPOBEMIDFIM'},{av:'AV68BemSituacao',fld:'vBEMSITUACAO'},{av:'AV75BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV77PessoaIdFor',fld:'vPESSOAIDFOR'},{av:'AV76OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV78BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV155ApenasBemTotDepre',fld:'vAPENASBEMTOTDEPRE'},{av:'AV66LancamentoBemDataFim',fld:'vLANCAMENTOBEMDATAFIM'},{av:'AV65LancamentoBemDataIni',fld:'vLANCAMENTOBEMDATAINI'},{av:'AV120EmpresaPadraoLancBem',fld:'vEMPRESAPADRAOLANCBEM'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV16EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV67BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV82BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV69BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV70BemCodigoFim',fld:'vBEMCODIGOFIM'},{av:'AV73TipoBemIdIni',fld:'vTIPOBEMIDINI'},{av:'AV74TipoBemIdFim',fld:'vTIPOBEMIDFIM'},{av:'AV68BemSituacao',fld:'vBEMSITUACAO'},{av:'AV75BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV77PessoaIdFor',fld:'vPESSOAIDFOR'},{av:'AV76OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV78BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV155ApenasBemTotDepre',fld:'vAPENASBEMTOTDEPRE'},{av:'AV66LancamentoBemDataFim',fld:'vLANCAMENTOBEMDATAFIM'},{av:'AV65LancamentoBemDataIni',fld:'vLANCAMENTOBEMDATAINI'},{av:'AV120EmpresaPadraoLancBem',fld:'vEMPRESAPADRAOLANCBEM'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'subGrid_Rows'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV180Pgmname',fld:'vPGMNAME'},{av:'AV65LancamentoBemDataIni',fld:'vLANCAMENTOBEMDATAINI'},{av:'AV66LancamentoBemDataFim',fld:'vLANCAMENTOBEMDATAFIM'},{av:'AV67BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV82BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV69BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV70BemCodigoFim',fld:'vBEMCODIGOFIM'},{av:'AV71BemSubGrupoIni',fld:'vBEMSUBGRUPOINI'},{av:'AV72BemSubGrupoFim',fld:'vBEMSUBGRUPOFIM'},{av:'AV73TipoBemIdIni',fld:'vTIPOBEMIDINI'},{av:'AV74TipoBemIdFim',fld:'vTIPOBEMIDFIM'},{av:'AV68BemSituacao',fld:'vBEMSITUACAO'},{av:'AV75BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV77PessoaIdFor',fld:'vPESSOAIDFOR'},{av:'AV76OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV78BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV155ApenasBemTotDepre',fld:'vAPENASBEMTOTDEPRE'}],[{av:'AV18NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV17NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV160FiltroRelatorio',fld:'vFILTRORELATORIO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV65LancamentoBemDataIni',fld:'vLANCAMENTOBEMDATAINI'},{av:'AV66LancamentoBemDataFim',fld:'vLANCAMENTOBEMDATAFIM'},{av:'AV67BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV82BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV73TipoBemIdIni',fld:'vTIPOBEMIDINI'},{av:'AV74TipoBemIdFim',fld:'vTIPOBEMIDFIM'},{av:'AV69BemCodigoIni',fld:'vBEMCODIGOINI'},{av:'AV70BemCodigoFim',fld:'vBEMCODIGOFIM'},{av:'AV71BemSubGrupoIni',fld:'vBEMSUBGRUPOINI'},{av:'AV72BemSubGrupoFim',fld:'vBEMSUBGRUPOFIM'},{av:'AV105snError',fld:'vSNERROR'},{av:'AV75BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'AV96EmpresaPadraoBemDepartamento',fld:'vEMPRESAPADRAOBEMDEPARTAMENTO'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'A2249DepartamentoNome',fld:'DEPARTAMENTONOME'},{av:'AV100QtCaracter',fld:'vQTCARACTER'},{av:'AV76OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV99EmpresaPadraoOrigemRecurso',fld:'vEMPRESAPADRAOORIGEMRECURSO'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'AV77PessoaIdFor',fld:'vPESSOAIDFOR'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV98EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV16EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV68BemSituacao',fld:'vBEMSITUACAO'},{av:'AV78BemNotaFiscal',fld:'vBEMNOTAFISCAL'},{av:'AV155ApenasBemTotDepre',fld:'vAPENASBEMTOTDEPRE'},{av:'AV120EmpresaPadraoLancBem',fld:'vEMPRESAPADRAOLANCBEM'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV105snError',fld:'vSNERROR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV182GXLvl239',fld:'vGXLVL239'},{av:'AV88BemDepartamentoNome',fld:'vBEMDEPARTAMENTONOME'},{av:'AV183GXLvl252',fld:'vGXLVL252'},{av:'AV85OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV184GXLvl265',fld:'vGXLVL265'},{av:'AV93PessoaFantasiaFor',fld:'vPESSOAFANTASIAFOR'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114},{av:'AV162QtdeLinGrid',fld:'vQTDELINGRID'},{av:'AV163Res',fld:'vRES'},{av:'AV164ResInt',fld:'vRESINT'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV127QtdTotalPagGrid',fld:'vQTDTOTALPAGGRID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV156SdtConsultaMovimentacaoPat',fld:'vSDTCONSULTAMOVIMENTACAOPAT',grid:114}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.setPrompt("PROMPT_BEMDEPARTAMENTOCODIGO", [21]);
   this.setPrompt("PROMPT_ORIGEMRECURSOID", [27]);
   this.setPrompt("PROMPT_PESSOAIDFOR", [33]);
   this.setPrompt("PROMPT_TIPOBEMIDINI", [77]);
   this.setPrompt("PROMPT_TIPOBEMIDFIM", [81]);
   this.setPrompt("PROMPT_BEMCODIGOINI_BEMSUBGRUPOINI", [92,96]);
   this.setPrompt("PROMPT_BEMCODIGOFIM_BEMSUBGRUPOFIM", [103,107]);
   this.EnterCtrl = ["BTNPESQUISAR"];
   GridContainer.addRefreshingVar(this.GXValidFnc[156]);
   GridContainer.addRefreshingVar(this.GXValidFnc[151]);
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["BemCodigo"], this.GXValidFnc[115], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["BemSubGrupo"], this.GXValidFnc[116], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["BemDescricaoResumida"], this.GXValidFnc[117], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["BemSituacao"], this.GXValidFnc[118], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["BemDtAquisicao"], this.GXValidFnc[119], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["BemDtInicioApuracao"], this.GXValidFnc[120], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["BemVlrAquisicao"], this.GXValidFnc[121], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["BemVlrBem"], this.GXValidFnc[122], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["LancamentoBemVlrRedutora"], this.GXValidFnc[123], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["VlrTotalDepreciado"], this.GXValidFnc[124], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["BemVlrVenda"], this.GXValidFnc[125], "AV156SdtConsultaMovimentacaoPat");
   this.addGridBCProperty("Sdtconsultamovimentacaopat", ["VlrAtual"], this.GXValidFnc[126], "AV156SdtConsultaMovimentacaoPat");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamovimentacaopat());
