/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:25:2.97
*/
gx.evt.autoSkip = false;
gx.define('hbem', false, function () {
   this.ServerClass =  "hbem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV90EmpresaPadraoBem=gx.fn.getControlValue("vEMPRESAPADRAOBEM") ;
      this.AV99SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A2072TipoBemEmpresaId=gx.fn.getControlValue("TIPOBEMEMPRESAID") ;
      this.A2034TipoBemId=gx.fn.getIntegerValue("TIPOBEMID",'.') ;
      this.A2330OrigemRecursoEmpresaId=gx.fn.getControlValue("ORIGEMRECURSOEMPRESAID") ;
      this.A2331OrigemRecursoId=gx.fn.getIntegerValue("ORIGEMRECURSOID",'.') ;
      this.A2332OrigemRecursoDescricao=gx.fn.getControlValue("ORIGEMRECURSODESCRICAO") ;
      this.A2336PessoaBemEmpId=gx.fn.getControlValue("PESSOABEMEMPID") ;
      this.A2337PessoaBemId=gx.fn.getIntegerValue("PESSOABEMID",'.') ;
      this.A2338PessoaBemNome=gx.fn.getControlValue("PESSOABEMNOME") ;
      this.A2252BemDepartamentoEmpresaId=gx.fn.getControlValue("BEMDEPARTAMENTOEMPRESAID") ;
      this.A2253BemDepartamentoCodigo=gx.fn.getControlValue("BEMDEPARTAMENTOCODIGO") ;
      this.A2254BemDepartamentoNome=gx.fn.getControlValue("BEMDEPARTAMENTONOME") ;
   };
   this.Validv_Tipobemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOBEMID");
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
   this.Validv_Empresapadraodepartamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAODEPARTAMENTO");
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
   this.Validv_Empresapadraotipobem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOTIPOBEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11di2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12di2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13di2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14di2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15di2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16di2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e17di2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e22di2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e23di2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e24di2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e25di2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e18di2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e26di2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27di2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,24,27,30,33,35,37,39,42,44,46,49,51,52,54,56,59,61,63,66,68,69,71,73,74,81,85,86,87,88,89,90,91,92,93,96,99,101,107,111,114,116,118,120,122,124,126,127,128,129,130,131,132,133,134,135,136,138,139,140,141,142,143,144];
   this.GXLastCtrlId =144;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",84,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hbem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2262,85,"BEMCODIGO","","","BemCodigo","int",0,"px",7,7,"right",null,[],2262,"BemCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2318,86,"BEMSUBGRUPO","Grp","","BemSubgrupo","int",0,"px",2,2,"right",null,[],2318,"BemSubgrupo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2264,87,"BEMDESCRICAORESUMIDA","","","BemDescricaoResumida","svchar",0,"px",40,40,"left",null,[],2264,"BemDescricaoResumida",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2035,88,"TIPOBEMDESCRICAO","","","TipoBemDescricao","svchar",0,"px",40,40,"left",null,[],2035,"TipoBemDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2321,89,"BEMDTAQUISICAO","","","BemDtAquisicao","date",0,"px",10,10,"right",null,[],2321,"BemDtAquisicao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2320,90,"BEMSITUACAO","","BemSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",91,0,"px",17,"px","e22di2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",92,0,"px",17,"px","e23di2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",93,0,"px",17,"px","e24di2_client","","Cons","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE11",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMCODIGO",gxz:"ZV42BemCodigo",gxold:"OV42BemCodigo",gxvar:"AV42BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV42BemCodigo,0)},c2v:function(){gx.O.AV42BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMSUBGRUPO",gxz:"ZV43BemSubgrupo",gxold:"OV43BemSubgrupo",gxvar:"AV43BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV43BemSubgrupo,0)},c2v:function(){gx.O.AV43BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLE14",grid:0};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMSITUACAO",gxz:"ZV48BemSituacao",gxold:"OV48BemSituacao",gxvar:"AV48BemSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV48BemSituacao=Value},v2z:function(Value){gx.O.ZV48BemSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vBEMSITUACAO",gx.O.AV48BemSituacao)},c2v:function(){gx.O.AV48BemSituacao=this.val()},val:function(){return gx.fn.getControlValue("vBEMSITUACAO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNORIGEMRECURSO",gxz:"ZV96SnOrigemRecurso",gxold:"OV96SnOrigemRecurso",gxvar:"AV96SnOrigemRecurso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV96SnOrigemRecurso=Value},v2z:function(Value){gx.O.ZV96SnOrigemRecurso=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNORIGEMRECURSO",gx.O.AV96SnOrigemRecurso,"S")},c2v:function(){gx.O.AV96SnOrigemRecurso=this.val()},val:function(){return gx.fn.getControlValue("vSNORIGEMRECURSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV44BemDescricaoResumida",gxold:"OV44BemDescricaoResumida",gxvar:"AV44BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV44BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV44BemDescricaoResumida,0)},c2v:function(){gx.O.AV44BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[39]={fld:"TABLE12",grid:0};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMDTAQUISICAOINI",gxz:"ZV45BemDtAquisicaoIni",gxold:"OV45BemDtAquisicaoIni",gxvar:"AV45BemDtAquisicaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45BemDtAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV45BemDtAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTAQUISICAOINI",gx.O.AV45BemDtAquisicaoIni,0)},c2v:function(){gx.O.AV45BemDtAquisicaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTAQUISICAOINI")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMDTAQUISICAOFIM",gxz:"ZV55BemDtAquisicaoFim",gxold:"OV55BemDtAquisicaoFim",gxvar:"AV55BemDtAquisicaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55BemDtAquisicaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV55BemDtAquisicaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBEMDTAQUISICAOFIM",gx.O.AV55BemDtAquisicaoFim,0)},c2v:function(){gx.O.AV55BemDtAquisicaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBEMDTAQUISICAOFIM")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipobemid,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOBEMID",gxz:"ZV53TipoBemId",gxold:"OV53TipoBemId",gxvar:"AV53TipoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53TipoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53TipoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMID",gx.O.AV53TipoBemId,0)},c2v:function(){gx.O.AV53TipoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMDESCRICAO",gxz:"ZV54TipoBemDescricao",gxold:"OV54TipoBemDescricao",gxvar:"AV54TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54TipoBemDescricao=Value},v2z:function(Value){gx.O.ZV54TipoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOBEMDESCRICAO",gx.O.AV54TipoBemDescricao,0)},c2v:function(){gx.O.AV54TipoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[56]={fld:"TABLE13",grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORIGEMRECURSOINI",gxz:"ZV97OrigemRecursoIni",gxold:"OV97OrigemRecursoIni",gxvar:"AV97OrigemRecursoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97OrigemRecursoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV97OrigemRecursoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSOINI",gx.O.AV97OrigemRecursoIni,0)},c2v:function(){gx.O.AV97OrigemRecursoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORIGEMRECURSOINI",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORIGEMRECURSOFIN",gxz:"ZV98OrigemRecursoFin",gxold:"OV98OrigemRecursoFin",gxvar:"AV98OrigemRecursoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98OrigemRecursoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98OrigemRecursoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORIGEMRECURSOFIN",gx.O.AV98OrigemRecursoFin,0)},c2v:function(){gx.O.AV98OrigemRecursoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORIGEMRECURSOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoabemid,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOABEMID",gxz:"ZV51PessoaBemId",gxold:"OV51PessoaBemId",gxvar:"AV51PessoaBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51PessoaBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51PessoaBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOABEMID",gx.O.AV51PessoaBemId,0)},c2v:function(){gx.O.AV51PessoaBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOABEMID",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOABEMNOME",gxz:"ZV52PessoaBemNome",gxold:"OV52PessoaBemNome",gxvar:"AV52PessoaBemNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52PessoaBemNome=Value},v2z:function(Value){gx.O.ZV52PessoaBemNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOABEMNOME",gx.O.AV52PessoaBemNome,0)},c2v:function(){gx.O.AV52PessoaBemNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOABEMNOME")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemdepartamentocodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMDEPARTAMENTOCODIGO",gxz:"ZV46BemDepartamentoCodigo",gxold:"OV46BemDepartamentoCodigo",gxvar:"AV46BemDepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46BemDepartamentoCodigo=Value},v2z:function(Value){gx.O.ZV46BemDepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("vBEMDEPARTAMENTOCODIGO",gx.O.AV46BemDepartamentoCodigo,0)},c2v:function(){gx.O.AV46BemDepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vBEMDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDEPARTAMENTONOME",gxz:"ZV47BemDepartamentoNome",gxold:"OV47BemDepartamentoNome",gxvar:"AV47BemDepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47BemDepartamentoNome=Value},v2z:function(Value){gx.O.ZV47BemDepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vBEMDEPARTAMENTONOME",gx.O.AV47BemDepartamentoNome,0)},c2v:function(){gx.O.AV47BemDepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vBEMDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TABLE15",grid:0};
   GXValidFnc[85]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMCODIGO",gxz:"Z2262BemCodigo",gxold:"O2262BemCodigo",gxvar:"A2262BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2262BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2262BemCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(84),gx.O.A2262BemCodigo,0)},c2v:function(){gx.O.A2262BemCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(84),'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMSUBGRUPO",gxz:"Z2318BemSubgrupo",gxold:"O2318BemSubgrupo",gxvar:"A2318BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2318BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2318BemSubgrupo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(84),gx.O.A2318BemSubgrupo,0)},c2v:function(){gx.O.A2318BemSubgrupo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(84),'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMDESCRICAORESUMIDA",gxz:"Z2264BemDescricaoResumida",gxold:"O2264BemDescricaoResumida",gxvar:"A2264BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2264BemDescricaoResumida=Value},v2z:function(Value){gx.O.Z2264BemDescricaoResumida=Value},v2c:function(row){gx.fn.setGridControlValue("BEMDESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(84),gx.O.A2264BemDescricaoResumida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2264BemDescricaoResumida=this.val()},val:function(row){return gx.fn.getGridControlValue("BEMDESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMDESCRICAO",gxz:"Z2035TipoBemDescricao",gxold:"O2035TipoBemDescricao",gxvar:"A2035TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2035TipoBemDescricao=Value},v2z:function(Value){gx.O.Z2035TipoBemDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBEMDESCRICAO",row || gx.fn.currentGridRowImpl(84),gx.O.A2035TipoBemDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2035TipoBemDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBEMDESCRICAO",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMDTAQUISICAO",gxz:"Z2321BemDtAquisicao",gxold:"O2321BemDtAquisicao",gxvar:"A2321BemDtAquisicao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2321BemDtAquisicao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2321BemDtAquisicao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMDTAQUISICAO",row || gx.fn.currentGridRowImpl(84),gx.O.A2321BemDtAquisicao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2321BemDtAquisicao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BEMDTAQUISICAO",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMSITUACAO",gxz:"Z2320BemSituacao",gxold:"O2320BemSituacao",gxvar:"A2320BemSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2320BemSituacao=Value},v2z:function(Value){gx.O.Z2320BemSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("BEMSITUACAO",row || gx.fn.currentGridRowImpl(84),gx.O.A2320BemSituacao)},c2v:function(){gx.O.A2320BemSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("BEMSITUACAO",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(84),gx.O.AV7bmpAlt,gx.O.AV112Bmpalt_GXI)},c2v:function(){gx.O.AV112Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(84))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(84))}, gxvar_GXI:'AV112Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(84),gx.O.AV8bmpExc,gx.O.AV113Bmpexc_GXI)},c2v:function(){gx.O.AV113Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(84))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(84))}, gxvar_GXI:'AV113Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(84),gx.O.AV16bmpCon,gx.O.AV114Bmpcon_GXI)},c2v:function(){gx.O.AV114Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(84))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(84))}, gxvar_GXI:'AV114Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[96]={fld:"TABLE16",grid:0};
   GXValidFnc[99]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALBENS",gxz:"ZV61TotalBens",gxold:"OV61TotalBens",gxvar:"AV61TotalBens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61TotalBens=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61TotalBens=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTOTALBENS",gx.O.AV61TotalBens,0)},c2v:function(){gx.O.AV61TotalBens=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTOTALBENS",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TABLE8",grid:0};
   GXValidFnc[111]={fld:"TABLE7",grid:0};
   GXValidFnc[114]={fld:"IMAGE6",grid:0};
   GXValidFnc[116]={fld:"BTNNOVO",grid:0};
   GXValidFnc[118]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[120]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[122]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[124]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[126]={fld:"IMAGE5",grid:0};
   GXValidFnc[127]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTER",gxz:"ZV85QtCaracter",gxold:"OV85QtCaracter",gxvar:"AV85QtCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85QtCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV85QtCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTER",gx.O.AV85QtCaracter,0)},c2v:function(){gx.O.AV85QtCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTD_PAGINAS",gxz:"ZV89qtd_paginas",gxold:"OV89qtd_paginas",gxvar:"AV89qtd_paginas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89qtd_paginas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89qtd_paginas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTD_PAGINAS",gx.O.AV89qtd_paginas,0)},c2v:function(){gx.O.AV89qtd_paginas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTD_PAGINAS",'.')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraopessoa,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOPESSOA",gxz:"ZV92EmpresaPadraoPessoa",gxold:"OV92EmpresaPadraoPessoa",gxvar:"AV92EmpresaPadraoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92EmpresaPadraoPessoa=Value},v2z:function(Value){gx.O.ZV92EmpresaPadraoPessoa=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOPESSOA",gx.O.AV92EmpresaPadraoPessoa,0)},c2v:function(){gx.O.AV92EmpresaPadraoPessoa=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOPESSOA")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraodepartamento,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAODEPARTAMENTO",gxz:"ZV94EmpresaPadraoDepartamento",gxold:"OV94EmpresaPadraoDepartamento",gxvar:"AV94EmpresaPadraoDepartamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94EmpresaPadraoDepartamento=Value},v2z:function(Value){gx.O.ZV94EmpresaPadraoDepartamento=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAODEPARTAMENTO",gx.O.AV94EmpresaPadraoDepartamento,0)},c2v:function(){gx.O.AV94EmpresaPadraoDepartamento=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAODEPARTAMENTO")},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraoorigemrecurso,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOORIGEMRECURSO",gxz:"ZV93EmpresaPadraoOrigemRecurso",gxold:"OV93EmpresaPadraoOrigemRecurso",gxvar:"AV93EmpresaPadraoOrigemRecurso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93EmpresaPadraoOrigemRecurso=Value},v2z:function(Value){gx.O.ZV93EmpresaPadraoOrigemRecurso=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOORIGEMRECURSO",gx.O.AV93EmpresaPadraoOrigemRecurso,0)},c2v:function(){gx.O.AV93EmpresaPadraoOrigemRecurso=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOORIGEMRECURSO")},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV78ChamaOnBlurMascara",gxold:"OV78ChamaOnBlurMascara",gxvar:"AV78ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV78ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV78ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV78ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[134]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraotipobem,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOTIPOBEM",gxz:"ZV91EmpresaPadraoTipoBem",gxold:"OV91EmpresaPadraoTipoBem",gxvar:"AV91EmpresaPadraoTipoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91EmpresaPadraoTipoBem=Value},v2z:function(Value){gx.O.ZV91EmpresaPadraoTipoBem=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOTIPOBEM",gx.O.AV91EmpresaPadraoTipoBem,0)},c2v:function(){gx.O.AV91EmpresaPadraoTipoBem=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOTIPOBEM")},nac:gx.falseFn};
   GXValidFnc[135]={fld:"JS", format:2,grid:0};
   GXValidFnc[136]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAATUAL",gxz:"ZV100PaginaAtual",gxold:"OV100PaginaAtual",gxvar:"AV100PaginaAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100PaginaAtual=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV100PaginaAtual=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAATUAL",gx.O.AV100PaginaAtual,0)},c2v:function(){gx.O.AV100PaginaAtual=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAATUAL",'.')},nac:gx.falseFn};
   GXValidFnc[138]={fld:"BTNHELP",grid:0};
   GXValidFnc[139]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   GXValidFnc[140]={fld:"PROMPT_TIPOBEMID",grid:0};
   GXValidFnc[141]={fld:"PROMPT_ORIGEMRECURSOINI",grid:0};
   GXValidFnc[142]={fld:"PROMPT_ORIGEMRECURSOFIN",grid:0};
   GXValidFnc[143]={fld:"PROMPT_PESSOABEMID",grid:0};
   GXValidFnc[144]={fld:"PROMPT_BEMDEPARTAMENTOCODIGO",grid:0};
   this.AV42BemCodigo = 0 ;
   this.ZV42BemCodigo = 0 ;
   this.OV42BemCodigo = 0 ;
   this.AV43BemSubgrupo = 0 ;
   this.ZV43BemSubgrupo = 0 ;
   this.OV43BemSubgrupo = 0 ;
   this.AV48BemSituacao = "" ;
   this.ZV48BemSituacao = "" ;
   this.OV48BemSituacao = "" ;
   this.AV96SnOrigemRecurso = "" ;
   this.ZV96SnOrigemRecurso = "" ;
   this.OV96SnOrigemRecurso = "" ;
   this.AV44BemDescricaoResumida = "" ;
   this.ZV44BemDescricaoResumida = "" ;
   this.OV44BemDescricaoResumida = "" ;
   this.AV45BemDtAquisicaoIni = gx.date.nullDate() ;
   this.ZV45BemDtAquisicaoIni = gx.date.nullDate() ;
   this.OV45BemDtAquisicaoIni = gx.date.nullDate() ;
   this.AV55BemDtAquisicaoFim = gx.date.nullDate() ;
   this.ZV55BemDtAquisicaoFim = gx.date.nullDate() ;
   this.OV55BemDtAquisicaoFim = gx.date.nullDate() ;
   this.AV53TipoBemId = 0 ;
   this.ZV53TipoBemId = 0 ;
   this.OV53TipoBemId = 0 ;
   this.AV54TipoBemDescricao = "" ;
   this.ZV54TipoBemDescricao = "" ;
   this.OV54TipoBemDescricao = "" ;
   this.AV97OrigemRecursoIni = 0 ;
   this.ZV97OrigemRecursoIni = 0 ;
   this.OV97OrigemRecursoIni = 0 ;
   this.AV98OrigemRecursoFin = 0 ;
   this.ZV98OrigemRecursoFin = 0 ;
   this.OV98OrigemRecursoFin = 0 ;
   this.AV51PessoaBemId = 0 ;
   this.ZV51PessoaBemId = 0 ;
   this.OV51PessoaBemId = 0 ;
   this.AV52PessoaBemNome = "" ;
   this.ZV52PessoaBemNome = "" ;
   this.OV52PessoaBemNome = "" ;
   this.AV46BemDepartamentoCodigo = "" ;
   this.ZV46BemDepartamentoCodigo = "" ;
   this.OV46BemDepartamentoCodigo = "" ;
   this.AV47BemDepartamentoNome = "" ;
   this.ZV47BemDepartamentoNome = "" ;
   this.OV47BemDepartamentoNome = "" ;
   this.Z2262BemCodigo = 0 ;
   this.O2262BemCodigo = 0 ;
   this.Z2318BemSubgrupo = 0 ;
   this.O2318BemSubgrupo = 0 ;
   this.Z2264BemDescricaoResumida = "" ;
   this.O2264BemDescricaoResumida = "" ;
   this.Z2035TipoBemDescricao = "" ;
   this.O2035TipoBemDescricao = "" ;
   this.Z2321BemDtAquisicao = gx.date.nullDate() ;
   this.O2321BemDtAquisicao = gx.date.nullDate() ;
   this.Z2320BemSituacao = "" ;
   this.O2320BemSituacao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV61TotalBens = 0 ;
   this.ZV61TotalBens = 0 ;
   this.OV61TotalBens = 0 ;
   this.AV85QtCaracter = 0 ;
   this.ZV85QtCaracter = 0 ;
   this.OV85QtCaracter = 0 ;
   this.AV89qtd_paginas = 0 ;
   this.ZV89qtd_paginas = 0 ;
   this.OV89qtd_paginas = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV92EmpresaPadraoPessoa = "" ;
   this.ZV92EmpresaPadraoPessoa = "" ;
   this.OV92EmpresaPadraoPessoa = "" ;
   this.AV94EmpresaPadraoDepartamento = "" ;
   this.ZV94EmpresaPadraoDepartamento = "" ;
   this.OV94EmpresaPadraoDepartamento = "" ;
   this.AV93EmpresaPadraoOrigemRecurso = "" ;
   this.ZV93EmpresaPadraoOrigemRecurso = "" ;
   this.OV93EmpresaPadraoOrigemRecurso = "" ;
   this.AV78ChamaOnBlurMascara = "" ;
   this.ZV78ChamaOnBlurMascara = "" ;
   this.OV78ChamaOnBlurMascara = "" ;
   this.AV91EmpresaPadraoTipoBem = "" ;
   this.ZV91EmpresaPadraoTipoBem = "" ;
   this.OV91EmpresaPadraoTipoBem = "" ;
   this.AV100PaginaAtual = 0 ;
   this.ZV100PaginaAtual = 0 ;
   this.OV100PaginaAtual = 0 ;
   this.AV42BemCodigo = 0 ;
   this.AV43BemSubgrupo = 0 ;
   this.AV48BemSituacao = "" ;
   this.AV96SnOrigemRecurso = "" ;
   this.AV44BemDescricaoResumida = "" ;
   this.AV45BemDtAquisicaoIni = gx.date.nullDate() ;
   this.AV55BemDtAquisicaoFim = gx.date.nullDate() ;
   this.AV53TipoBemId = 0 ;
   this.AV54TipoBemDescricao = "" ;
   this.AV97OrigemRecursoIni = 0 ;
   this.AV98OrigemRecursoFin = 0 ;
   this.AV51PessoaBemId = 0 ;
   this.AV52PessoaBemNome = "" ;
   this.AV46BemDepartamentoCodigo = "" ;
   this.AV47BemDepartamentoNome = "" ;
   this.AV61TotalBens = 0 ;
   this.AV85QtCaracter = 0 ;
   this.AV89qtd_paginas = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV92EmpresaPadraoPessoa = "" ;
   this.AV94EmpresaPadraoDepartamento = "" ;
   this.AV93EmpresaPadraoOrigemRecurso = "" ;
   this.AV78ChamaOnBlurMascara = "" ;
   this.AV91EmpresaPadraoTipoBem = "" ;
   this.AV100PaginaAtual = 0 ;
   this.A2253BemDepartamentoCodigo = "" ;
   this.A2331OrigemRecursoId = 0 ;
   this.A2337PessoaBemId = 0 ;
   this.A2034TipoBemId = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2035TipoBemDescricao = "" ;
   this.A2321BemDtAquisicao = gx.date.nullDate() ;
   this.A2320BemSituacao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2252BemDepartamentoEmpresaId = "" ;
   this.A2254BemDepartamentoNome = "" ;
   this.A2336PessoaBemEmpId = "" ;
   this.A2338PessoaBemNome = "" ;
   this.A2330OrigemRecursoEmpresaId = "" ;
   this.A2332OrigemRecursoDescricao = "" ;
   this.AV90EmpresaPadraoBem = "" ;
   this.AV99SnRecuperaFiltro = "" ;
   this.Events = {"e11di2_client": ["'GXM_FIRST'", true] ,"e12di2_client": ["'GXM_PREVIOUS'", true] ,"e13di2_client": ["'GXM_NEXT'", true] ,"e14di2_client": ["'GXM_LAST'", true] ,"e15di2_client": ["'PROCURAR'", true] ,"e16di2_client": ["'FECHAR'", true] ,"e17di2_client": ["'NOVO'", true] ,"e22di2_client": ["'ALTERAR'", true] ,"e23di2_client": ["'EXCLUIR'", true] ,"e24di2_client": ["'CONSULTAR'", true] ,"e25di2_client": ["'ATUALIZAPAGINA'", true] ,"e18di2_client": ["'IMPRIMIR'", true] ,"e26di2_client": ["ENTER", true] ,"e27di2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV97OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV98OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV90EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV89qtd_paginas',fld:'vQTD_PAGINAS'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV91EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV93EmpresaPadraoOrigemRecurso',fld:'vEMPRESAPADRAOORIGEMRECURSO'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'A2336PessoaBemEmpId',fld:'PESSOABEMEMPID'},{av:'AV92EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2338PessoaBemNome',fld:'PESSOABEMNOME'},{av:'A2252BemDepartamentoEmpresaId',fld:'BEMDEPARTAMENTOEMPRESAID'},{av:'AV94EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2253BemDepartamentoCodigo',fld:'BEMDEPARTAMENTOCODIGO'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'}],[]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV97OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV98OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV90EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV89qtd_paginas',fld:'vQTD_PAGINAS'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV91EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV93EmpresaPadraoOrigemRecurso',fld:'vEMPRESAPADRAOORIGEMRECURSO'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'A2336PessoaBemEmpId',fld:'PESSOABEMEMPID'},{av:'AV92EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2338PessoaBemNome',fld:'PESSOABEMNOME'},{av:'A2252BemDepartamentoEmpresaId',fld:'BEMDEPARTAMENTOEMPRESAID'},{av:'AV94EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2253BemDepartamentoCodigo',fld:'BEMDEPARTAMENTOCODIGO'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'},{av:'AV49OrigemRecursoId',fld:'vORIGEMRECURSOID'}],[{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV57filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV97OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV98OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV90EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV89qtd_paginas',fld:'vQTD_PAGINAS'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV91EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV93EmpresaPadraoOrigemRecurso',fld:'vEMPRESAPADRAOORIGEMRECURSO'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'A2336PessoaBemEmpId',fld:'PESSOABEMEMPID'},{av:'AV92EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2338PessoaBemNome',fld:'PESSOABEMNOME'},{av:'A2252BemDepartamentoEmpresaId',fld:'BEMDEPARTAMENTOEMPRESAID'},{av:'AV94EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2253BemDepartamentoCodigo',fld:'BEMDEPARTAMENTOCODIGO'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'},{av:'AV49OrigemRecursoId',fld:'vORIGEMRECURSOID'}],[{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV57filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV97OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV98OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV90EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV89qtd_paginas',fld:'vQTD_PAGINAS'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV91EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV93EmpresaPadraoOrigemRecurso',fld:'vEMPRESAPADRAOORIGEMRECURSO'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'A2336PessoaBemEmpId',fld:'PESSOABEMEMPID'},{av:'AV92EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2338PessoaBemNome',fld:'PESSOABEMNOME'},{av:'A2252BemDepartamentoEmpresaId',fld:'BEMDEPARTAMENTOEMPRESAID'},{av:'AV94EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2253BemDepartamentoCodigo',fld:'BEMDEPARTAMENTOCODIGO'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'},{av:'AV49OrigemRecursoId',fld:'vORIGEMRECURSOID'}],[{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV57filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV97OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV98OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV90EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV89qtd_paginas',fld:'vQTD_PAGINAS'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV91EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV93EmpresaPadraoOrigemRecurso',fld:'vEMPRESAPADRAOORIGEMRECURSO'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'A2336PessoaBemEmpId',fld:'PESSOABEMEMPID'},{av:'AV92EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2338PessoaBemNome',fld:'PESSOABEMNOME'},{av:'A2252BemDepartamentoEmpresaId',fld:'BEMDEPARTAMENTOEMPRESAID'},{av:'AV94EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2253BemDepartamentoCodigo',fld:'BEMDEPARTAMENTOCODIGO'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'},{av:'AV49OrigemRecursoId',fld:'vORIGEMRECURSOID'}],[{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV57filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV97OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV98OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV90EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV89qtd_paginas',fld:'vQTD_PAGINAS'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV91EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV93EmpresaPadraoOrigemRecurso',fld:'vEMPRESAPADRAOORIGEMRECURSO'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'A2336PessoaBemEmpId',fld:'PESSOABEMEMPID'},{av:'AV92EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2338PessoaBemNome',fld:'PESSOABEMNOME'},{av:'A2252BemDepartamentoEmpresaId',fld:'BEMDEPARTAMENTOEMPRESAID'},{av:'AV94EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2253BemDepartamentoCodigo',fld:'BEMDEPARTAMENTOCODIGO'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'}],[{ctrl:'BEMCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BEMCODIGO","Title")',ctrl:'BEMCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'BEMDESCRICAORESUMIDA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BEMDESCRICAORESUMIDA","Title")',ctrl:'BEMDESCRICAORESUMIDA',prop:'Title'},{ctrl:'TIPOBEMDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBEMDESCRICAO","Title")',ctrl:'TIPOBEMDESCRICAO',prop:'Title'},{ctrl:'BEMDTAQUISICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BEMDTAQUISICAO","Title")',ctrl:'BEMDTAQUISICAO',prop:'Title'},{ctrl:'BEMSITUACAO'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV57filtros',fld:'vFILTROS'},{av:'AV85QtCaracter',fld:'vQTCARACTER'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV49OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV54TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV50OrigemRecursoDescricao',fld:'vORIGEMRECURSODESCRICAO'},{av:'AV52PessoaBemNome',fld:'vPESSOABEMNOME'},{av:'AV47BemDepartamentoNome',fld:'vBEMDEPARTAMENTONOME'},{av:'AV95SnCarrega',fld:'vSNCARREGA'},{av:'AV61TotalBens',fld:'vTOTALBENS'},{av:'AV89qtd_paginas',fld:'vQTD_PAGINAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV97OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV98OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV90EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV89qtd_paginas',fld:'vQTD_PAGINAS'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV91EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV93EmpresaPadraoOrigemRecurso',fld:'vEMPRESAPADRAOORIGEMRECURSO'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'A2336PessoaBemEmpId',fld:'PESSOABEMEMPID'},{av:'AV92EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2338PessoaBemNome',fld:'PESSOABEMNOME'},{av:'A2252BemDepartamentoEmpresaId',fld:'BEMDEPARTAMENTOEMPRESAID'},{av:'AV94EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2253BemDepartamentoCodigo',fld:'BEMDEPARTAMENTOCODIGO'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'},{av:'AV84SnError',fld:'vSNERROR'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'AV49OrigemRecursoId',fld:'vORIGEMRECURSOID'}],[{av:'AV95SnCarrega',fld:'vSNCARREGA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV84SnError',fld:'vSNERROR'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV109GXLvl340',fld:'vGXLVL340'},{av:'AV110GXLvl358',fld:'vGXLVL358'},{av:'AV111GXLvl370',fld:'vGXLVL370'},{av:'AV57filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'NOVO'"] = [[{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV49OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'}],[{av:'AV57filtros',fld:'vFILTROS'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV97OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV98OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV96SnOrigemRecurso',fld:'vSNORIGEMRECURSO'}],[{av:'AV96SnOrigemRecurso',fld:'vSNORIGEMRECURSO'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV98OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV97OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV49OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'}],[{av:'AV57filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV49OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'}],[{av:'AV57filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV49OrigemRecursoId',fld:'vORIGEMRECURSOID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'}],[{av:'AV57filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV42BemCodigo',fld:'vBEMCODIGO'},{av:'AV43BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV48BemSituacao',fld:'vBEMSITUACAO'},{av:'AV44BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV45BemDtAquisicaoIni',fld:'vBEMDTAQUISICAOINI'},{av:'AV55BemDtAquisicaoFim',fld:'vBEMDTAQUISICAOFIM'},{av:'AV53TipoBemId',fld:'vTIPOBEMID'},{av:'AV97OrigemRecursoIni',fld:'vORIGEMRECURSOINI'},{av:'AV98OrigemRecursoFin',fld:'vORIGEMRECURSOFIN'},{av:'AV51PessoaBemId',fld:'vPESSOABEMID'},{av:'AV46BemDepartamentoCodigo',fld:'vBEMDEPARTAMENTOCODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV90EmpresaPadraoBem',fld:'vEMPRESAPADRAOBEM'},{av:'AV99SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV89qtd_paginas',fld:'vQTD_PAGINAS'},{av:'AV100PaginaAtual',fld:'vPAGINAATUAL'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV91EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2330OrigemRecursoEmpresaId',fld:'ORIGEMRECURSOEMPRESAID'},{av:'AV93EmpresaPadraoOrigemRecurso',fld:'vEMPRESAPADRAOORIGEMRECURSO'},{av:'A2331OrigemRecursoId',fld:'ORIGEMRECURSOID'},{av:'A2332OrigemRecursoDescricao',fld:'ORIGEMRECURSODESCRICAO'},{av:'A2336PessoaBemEmpId',fld:'PESSOABEMEMPID'},{av:'AV92EmpresaPadraoPessoa',fld:'vEMPRESAPADRAOPESSOA'},{av:'A2337PessoaBemId',fld:'PESSOABEMID'},{av:'A2338PessoaBemNome',fld:'PESSOABEMNOME'},{av:'A2252BemDepartamentoEmpresaId',fld:'BEMDEPARTAMENTOEMPRESAID'},{av:'AV94EmpresaPadraoDepartamento',fld:'vEMPRESAPADRAODEPARTAMENTO'},{av:'A2253BemDepartamentoCodigo',fld:'BEMDEPARTAMENTOCODIGO'},{av:'A2254BemDepartamentoNome',fld:'BEMDEPARTAMENTONOME'}],[]];
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [16,20]);
   this.setPrompt("PROMPT_TIPOBEMID", [51]);
   this.setPrompt("PROMPT_ORIGEMRECURSOINI", [59]);
   this.setPrompt("PROMPT_ORIGEMRECURSOFIN", [63]);
   this.setPrompt("PROMPT_PESSOABEMID", [68]);
   this.setPrompt("PROMPT_BEMDEPARTAMENTOCODIGO", [73]);
   this.setVCMap("AV90EmpresaPadraoBem", "vEMPRESAPADRAOBEM", 0, "char");
   this.setVCMap("AV99SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2072TipoBemEmpresaId", "TIPOBEMEMPRESAID", 0, "char");
   this.setVCMap("A2034TipoBemId", "TIPOBEMID", 0, "int");
   this.setVCMap("A2330OrigemRecursoEmpresaId", "ORIGEMRECURSOEMPRESAID", 0, "char");
   this.setVCMap("A2331OrigemRecursoId", "ORIGEMRECURSOID", 0, "int");
   this.setVCMap("A2332OrigemRecursoDescricao", "ORIGEMRECURSODESCRICAO", 0, "svchar");
   this.setVCMap("A2336PessoaBemEmpId", "PESSOABEMEMPID", 0, "char");
   this.setVCMap("A2337PessoaBemId", "PESSOABEMID", 0, "int");
   this.setVCMap("A2338PessoaBemNome", "PESSOABEMNOME", 0, "svchar");
   this.setVCMap("A2252BemDepartamentoEmpresaId", "BEMDEPARTAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A2253BemDepartamentoCodigo", "BEMDEPARTAMENTOCODIGO", 0, "svchar");
   this.setVCMap("A2254BemDepartamentoNome", "BEMDEPARTAMENTONOME", 0, "svchar");
   this.setVCMap("AV90EmpresaPadraoBem", "vEMPRESAPADRAOBEM", 0, "char");
   this.setVCMap("AV99SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2072TipoBemEmpresaId", "TIPOBEMEMPRESAID", 0, "char");
   this.setVCMap("A2034TipoBemId", "TIPOBEMID", 0, "int");
   this.setVCMap("A2330OrigemRecursoEmpresaId", "ORIGEMRECURSOEMPRESAID", 0, "char");
   this.setVCMap("A2331OrigemRecursoId", "ORIGEMRECURSOID", 0, "int");
   this.setVCMap("A2332OrigemRecursoDescricao", "ORIGEMRECURSODESCRICAO", 0, "svchar");
   this.setVCMap("A2336PessoaBemEmpId", "PESSOABEMEMPID", 0, "char");
   this.setVCMap("A2337PessoaBemId", "PESSOABEMID", 0, "int");
   this.setVCMap("A2338PessoaBemNome", "PESSOABEMNOME", 0, "svchar");
   this.setVCMap("A2252BemDepartamentoEmpresaId", "BEMDEPARTAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A2253BemDepartamentoCodigo", "BEMDEPARTAMENTOCODIGO", 0, "svchar");
   this.setVCMap("A2254BemDepartamentoNome", "BEMDEPARTAMENTONOME", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[129]);
   GridContainer.addRefreshingVar({rfrVar:"AV90EmpresaPadraoBem"});
   GridContainer.addRefreshingVar({rfrVar:"AV99SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[128]);
   GridContainer.addRefreshingVar(this.GXValidFnc[136]);
   GridContainer.addRefreshingVar({rfrVar:"A2072TipoBemEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[134]);
   GridContainer.addRefreshingVar({rfrVar:"A2034TipoBemId"});
   GridContainer.addRefreshingVar({rfrVar:"A2035TipoBemDescricao", rfrProp:"Value", gxAttId:"2035"});
   GridContainer.addRefreshingVar({rfrVar:"A2330OrigemRecursoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[132]);
   GridContainer.addRefreshingVar({rfrVar:"A2331OrigemRecursoId"});
   GridContainer.addRefreshingVar({rfrVar:"A2332OrigemRecursoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A2336PessoaBemEmpId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[130]);
   GridContainer.addRefreshingVar({rfrVar:"A2337PessoaBemId"});
   GridContainer.addRefreshingVar({rfrVar:"A2338PessoaBemNome"});
   GridContainer.addRefreshingVar({rfrVar:"A2252BemDepartamentoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[131]);
   GridContainer.addRefreshingVar({rfrVar:"A2253BemDepartamentoCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A2254BemDepartamentoNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbem());
