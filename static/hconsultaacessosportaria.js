/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:36:7.47
*/
gx.evt.autoSkip = false;
gx.define('hconsultaacessosportaria', false, function () {
   this.ServerClass =  "hconsultaacessosportaria" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV38TitularPessoaIdParm=gx.fn.getIntegerValue("vTITULARPESSOAIDPARM",'.') ;
      this.AV61TitularPessoaNomeParm=gx.fn.getControlValue("vTITULARPESSOANOMEPARM") ;
      this.AV76SnCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV77SnFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV78SnFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV79SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
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
   this.Validv_Convidadoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVIDADOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Idsessao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vIDSESSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Usrcod=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSRCOD");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s162_client=function()
   {
      this.AV92Res =  this.AV91QtdeRegistros / 10  ;
      this.AV93ResInt = gx.num.trunc( gx.num.intval( this.AV92Res) ,0) ;
      if ( this.AV92Res > this.AV93ResInt )
      {
         this.AV94QtdePagina = gx.num.trunc( this.AV93ResInt + 1 ,0) ;
      }
      else
      {
         this.AV94QtdePagina = gx.num.trunc( this.AV93ResInt ,0) ;
      }
   };
   this.e11ht2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e12ht2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e15ht2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13ht2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e20ht2_client=function()
   {
      this.executeServerEvent("'EXCLUIRACESSO'", true, arguments[0], false, false);
   };
   this.e16ht2_client=function()
   {
      this.executeServerEvent("VDEPENDENTEID.ISVALID", true, null, false, true);
   };
   this.e17ht2_client=function()
   {
      this.executeServerEvent("VTITULARPESSOAID.ISVALID", true, null, false, true);
   };
   this.e18ht2_client=function()
   {
      this.executeServerEvent("VCONVIDADOID.ISVALID", true, null, false, true);
   };
   this.e14ht2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e23ht2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,18,20,21,23,25,26,27,30,32,35,37,39,41,49,50,51,52,53,54,55,61,65,68,70,72,74,75,76,77,78,79,80,81,83,84,85,86];
   this.GXLastCtrlId =86;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaacessosportaria",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(9873,49,"ACESSOSCLUBEDATAHORAENTRADA","Data/Hora Entrada","","AcessosClubeDataHoraEntrada","dtime",0,"px",16,16,"right",null,[],9873,"AcessosClubeDataHoraEntrada",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9877,50,"ACESSOSCLUBENOMEPESSOA","Nome","","AcessosClubeNomePessoa","svchar",0,"px",40,40,"left",null,[],9877,"AcessosClubeNomePessoa",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9878,51,"ACESSOSCLUBETIPOPESSOA","Tipo de Pessoa","","AcessosClubeTipoPessoa","svchar",0,"px",20,20,"left",null,[],9878,"AcessosClubeTipoPessoa",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9880,52,"ACESSOSCLUBEDESCRICAOBLOQUEIO","Descrição do Bloqueio","","AcessosClubeDescricaoBloqueio","svchar",0,"px",100,80,"left",null,[],9880,"AcessosClubeDescricaoBloqueio",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9869,53,"ACESSOSCLUBEACESSOID","Acessos Clube Acesso Id","","AcessosClubeAcessoId","int",0,"px",10,10,"right",null,[],9869,"AcessosClubeAcessoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9874,54,"ACESSOSCLUBEDATAHORASAIDA","Acessos Clube Data Hora Saida","","AcessosClubeDataHoraSaida","dtime",0,"px",16,16,"right",null,[],9874,"AcessosClubeDataHoraSaida",false,5,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e20ht2_client","","Exc","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titularpessoaid,isvalid:'e17ht2_client',rgrid:[],fld:"vTITULARPESSOAID",gxz:"ZV39TitularPessoaId",gxold:"OV39TitularPessoaId",gxvar:"AV39TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV39TitularPessoaId,0)},c2v:function(){gx.O.AV39TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOANOME",gxz:"ZV46TitularPessoaNome",gxold:"OV46TitularPessoaNome",gxvar:"AV46TitularPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46TitularPessoaNome=Value},v2z:function(Value){gx.O.ZV46TitularPessoaNome=Value},v2c:function(){gx.fn.setControlValue("vTITULARPESSOANOME",gx.O.AV46TitularPessoaNome,0)},c2v:function(){gx.O.AV46TitularPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vTITULARPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TABLE1",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:true,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Dependenteid,isvalid:'e16ht2_client',rgrid:[],fld:"vDEPENDENTEID",gxz:"ZV40DependenteId",gxold:"OV40DependenteId",gxvar:"AV40DependenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40DependenteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40DependenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDEPENDENTEID",gx.O.AV40DependenteId,0)},c2v:function(){gx.O.AV40DependenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEPENDENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPENDENTENOME",gxz:"ZV49DependenteNome",gxold:"OV49DependenteNome",gxvar:"AV49DependenteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49DependenteNome=Value},v2z:function(Value){gx.O.ZV49DependenteNome=Value},v2c:function(){gx.fn.setControlValue("vDEPENDENTENOME",gx.O.AV49DependenteNome,0)},c2v:function(){gx.O.AV49DependenteNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPENDENTENOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convidadoid,isvalid:'e18ht2_client',rgrid:[],fld:"vCONVIDADOID",gxz:"ZV41ConvidadoId",gxold:"OV41ConvidadoId",gxvar:"AV41ConvidadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ConvidadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41ConvidadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVIDADOID",gx.O.AV41ConvidadoId,0)},c2v:function(){gx.O.AV41ConvidadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVIDADOID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVIDADONOME",gxz:"ZV50ConvidadoNome",gxold:"OV50ConvidadoNome",gxvar:"AV50ConvidadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ConvidadoNome=Value},v2z:function(Value){gx.O.ZV50ConvidadoNome=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADONOME",gx.O.AV50ConvidadoNome,0)},c2v:function(){gx.O.AV50ConvidadoNome=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADONOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE3",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={fld:"TABLE12",grid:0};
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAACESSOINI",gxz:"ZV43DataAcessoIni",gxold:"OV43DataAcessoIni",gxvar:"AV43DataAcessoIni",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43DataAcessoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV43DataAcessoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAACESSOINI",gx.O.AV43DataAcessoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV43DataAcessoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAACESSOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[37]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAACESSOFIM",gxz:"ZV44DataAcessoFim",gxold:"OV44DataAcessoFim",gxvar:"AV44DataAcessoFim",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44DataAcessoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV44DataAcessoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAACESSOFIM",gx.O.AV44DataAcessoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV44DataAcessoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAACESSOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOTITULAR",gxz:"ZV42AcessoTitular",gxold:"OV42AcessoTitular",gxvar:"AV42AcessoTitular",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV42AcessoTitular=Value},v2z:function(Value){gx.O.ZV42AcessoTitular=Value},v2c:function(){gx.fn.setCheckBoxValue("vACESSOTITULAR",gx.O.AV42AcessoTitular,"S")},c2v:function(){gx.O.AV42AcessoTitular=this.val()},val:function(){return gx.fn.getControlValue("vACESSOTITULAR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[49]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEDATAHORAENTRADA",gxz:"Z9873AcessosClubeDataHoraEntrada",gxold:"O9873AcessosClubeDataHoraEntrada",gxvar:"A9873AcessosClubeDataHoraEntrada",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9873AcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9873AcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOSCLUBEDATAHORAENTRADA",row || gx.fn.currentGridRowImpl(48),gx.O.A9873AcessosClubeDataHoraEntrada,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9873AcessosClubeDataHoraEntrada=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACESSOSCLUBEDATAHORAENTRADA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBENOMEPESSOA",gxz:"Z9877AcessosClubeNomePessoa",gxold:"O9877AcessosClubeNomePessoa",gxvar:"A9877AcessosClubeNomePessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9877AcessosClubeNomePessoa=Value},v2z:function(Value){gx.O.Z9877AcessosClubeNomePessoa=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOSCLUBENOMEPESSOA",row || gx.fn.currentGridRowImpl(48),gx.O.A9877AcessosClubeNomePessoa,0)},c2v:function(){gx.O.A9877AcessosClubeNomePessoa=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOSCLUBENOMEPESSOA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBETIPOPESSOA",gxz:"Z9878AcessosClubeTipoPessoa",gxold:"O9878AcessosClubeTipoPessoa",gxvar:"A9878AcessosClubeTipoPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9878AcessosClubeTipoPessoa=Value},v2z:function(Value){gx.O.Z9878AcessosClubeTipoPessoa=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOSCLUBETIPOPESSOA",row || gx.fn.currentGridRowImpl(48),gx.O.A9878AcessosClubeTipoPessoa,0)},c2v:function(){gx.O.A9878AcessosClubeTipoPessoa=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOSCLUBETIPOPESSOA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEDESCRICAOBLOQUEIO",gxz:"Z9880AcessosClubeDescricaoBloqueio",gxold:"O9880AcessosClubeDescricaoBloqueio",gxvar:"A9880AcessosClubeDescricaoBloqueio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9880AcessosClubeDescricaoBloqueio=Value},v2z:function(Value){gx.O.Z9880AcessosClubeDescricaoBloqueio=Value},v2c:function(row){gx.fn.setGridControlValue("ACESSOSCLUBEDESCRICAOBLOQUEIO",row || gx.fn.currentGridRowImpl(48),gx.O.A9880AcessosClubeDescricaoBloqueio,0)},c2v:function(){gx.O.A9880AcessosClubeDescricaoBloqueio=this.val()},val:function(row){return gx.fn.getGridControlValue("ACESSOSCLUBEDESCRICAOBLOQUEIO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEACESSOID",gxz:"Z9869AcessosClubeAcessoId",gxold:"O9869AcessosClubeAcessoId",gxvar:"A9869AcessosClubeAcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9869AcessosClubeAcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9869AcessosClubeAcessoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOSCLUBEACESSOID",row || gx.fn.currentGridRowImpl(48),gx.O.A9869AcessosClubeAcessoId,0)},c2v:function(){gx.O.A9869AcessosClubeAcessoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ACESSOSCLUBEACESSOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOSCLUBEDATAHORASAIDA",gxz:"Z9874AcessosClubeDataHoraSaida",gxold:"O9874AcessosClubeDataHoraSaida",gxvar:"A9874AcessosClubeDataHoraSaida",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9874AcessosClubeDataHoraSaida=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9874AcessosClubeDataHoraSaida=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ACESSOSCLUBEDATAHORASAIDA",row || gx.fn.currentGridRowImpl(48),gx.O.A9874AcessosClubeDataHoraSaida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9874AcessosClubeDataHoraSaida=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ACESSOSCLUBEDATAHORASAIDA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV99Bmpexc_GXI)},c2v:function(){gx.O.AV99Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV99Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE8",grid:0};
   GXValidFnc[65]={fld:"TABLE9",grid:0};
   GXValidFnc[68]={fld:"IMAGE6",grid:0};
   GXValidFnc[70]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[72]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[74]={fld:"IMAGE5",grid:0};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAGINA",gxz:"ZV94QtdePagina",gxold:"OV94QtdePagina",gxvar:"AV94QtdePagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94QtdePagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94QtdePagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAGINA",gx.O.AV94QtdePagina,0)},c2v:function(){gx.O.AV94QtdePagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"JS", format:2,grid:0};
   GXValidFnc[78]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNMONTA",gxz:"ZV88SnMonta",gxold:"OV88SnMonta",gxvar:"AV88SnMonta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88SnMonta=Value},v2z:function(Value){gx.O.ZV88SnMonta=Value},v2c:function(){gx.fn.setControlValue("vSNMONTA",gx.O.AV88SnMonta,0)},c2v:function(){gx.O.AV88SnMonta=this.val()},val:function(){return gx.fn.getControlValue("vSNMONTA")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Idsessao,isvalid:null,rgrid:[this.GridContainer],fld:"vIDSESSAO",gxz:"ZV89IdSessao",gxold:"OV89IdSessao",gxvar:"AV89IdSessao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89IdSessao=Value},v2z:function(Value){gx.O.ZV89IdSessao=Value},v2c:function(){gx.fn.setControlValue("vIDSESSAO",gx.O.AV89IdSessao,0)},c2v:function(){gx.O.AV89IdSessao=this.val()},val:function(){return gx.fn.getControlValue("vIDSESSAO")},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usrcod,isvalid:null,rgrid:[this.GridContainer],fld:"vUSRCOD",gxz:"ZV9UsrCod",gxold:"OV9UsrCod",gxvar:"AV9UsrCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9UsrCod=Value},v2z:function(Value){gx.O.ZV9UsrCod=Value},v2c:function(){gx.fn.setControlValue("vUSRCOD",gx.O.AV9UsrCod,0)},c2v:function(){gx.O.AV9UsrCod=this.val()},val:function(){return gx.fn.getControlValue("vUSRCOD")},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEREGISTROS",gxz:"ZV91QtdeRegistros",gxold:"OV91QtdeRegistros",gxvar:"AV91QtdeRegistros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91QtdeRegistros=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91QtdeRegistros=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEREGISTROS",gx.O.AV91QtdeRegistros,0)},c2v:function(){gx.O.AV91QtdeRegistros=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEREGISTROS",'.')},nac:gx.falseFn};
   GXValidFnc[83]={fld:"BTNHELP",grid:0};
   GXValidFnc[84]={fld:"PROMPT_TITULARPESSOAID",grid:0};
   GXValidFnc[85]={fld:"PROMPT_DEPENDENTEID",grid:0};
   GXValidFnc[86]={fld:"PROMPT_CONVIDADOID",grid:0};
   this.AV39TitularPessoaId = 0 ;
   this.ZV39TitularPessoaId = 0 ;
   this.OV39TitularPessoaId = 0 ;
   this.AV46TitularPessoaNome = "" ;
   this.ZV46TitularPessoaNome = "" ;
   this.OV46TitularPessoaNome = "" ;
   this.AV40DependenteId = 0 ;
   this.ZV40DependenteId = 0 ;
   this.OV40DependenteId = 0 ;
   this.AV49DependenteNome = "" ;
   this.ZV49DependenteNome = "" ;
   this.OV49DependenteNome = "" ;
   this.AV41ConvidadoId = 0 ;
   this.ZV41ConvidadoId = 0 ;
   this.OV41ConvidadoId = 0 ;
   this.AV50ConvidadoNome = "" ;
   this.ZV50ConvidadoNome = "" ;
   this.OV50ConvidadoNome = "" ;
   this.AV43DataAcessoIni = gx.date.nullDate() ;
   this.ZV43DataAcessoIni = gx.date.nullDate() ;
   this.OV43DataAcessoIni = gx.date.nullDate() ;
   this.AV44DataAcessoFim = gx.date.nullDate() ;
   this.ZV44DataAcessoFim = gx.date.nullDate() ;
   this.OV44DataAcessoFim = gx.date.nullDate() ;
   this.AV42AcessoTitular = "" ;
   this.ZV42AcessoTitular = "" ;
   this.OV42AcessoTitular = "" ;
   this.Z9873AcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.O9873AcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.Z9877AcessosClubeNomePessoa = "" ;
   this.O9877AcessosClubeNomePessoa = "" ;
   this.Z9878AcessosClubeTipoPessoa = "" ;
   this.O9878AcessosClubeTipoPessoa = "" ;
   this.Z9880AcessosClubeDescricaoBloqueio = "" ;
   this.O9880AcessosClubeDescricaoBloqueio = "" ;
   this.Z9869AcessosClubeAcessoId = 0 ;
   this.O9869AcessosClubeAcessoId = 0 ;
   this.Z9874AcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.O9874AcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV94QtdePagina = 0 ;
   this.ZV94QtdePagina = 0 ;
   this.OV94QtdePagina = 0 ;
   this.AV88SnMonta = "" ;
   this.ZV88SnMonta = "" ;
   this.OV88SnMonta = "" ;
   this.AV89IdSessao = "" ;
   this.ZV89IdSessao = "" ;
   this.OV89IdSessao = "" ;
   this.AV9UsrCod = "" ;
   this.ZV9UsrCod = "" ;
   this.OV9UsrCod = "" ;
   this.AV91QtdeRegistros = 0 ;
   this.ZV91QtdeRegistros = 0 ;
   this.OV91QtdeRegistros = 0 ;
   this.AV39TitularPessoaId = 0 ;
   this.AV46TitularPessoaNome = "" ;
   this.AV40DependenteId = 0 ;
   this.AV49DependenteNome = "" ;
   this.AV41ConvidadoId = 0 ;
   this.AV50ConvidadoNome = "" ;
   this.AV43DataAcessoIni = gx.date.nullDate() ;
   this.AV44DataAcessoFim = gx.date.nullDate() ;
   this.AV42AcessoTitular = "" ;
   this.AV5Pagina = 0 ;
   this.AV94QtdePagina = 0 ;
   this.AV88SnMonta = "" ;
   this.AV89IdSessao = "" ;
   this.AV9UsrCod = "" ;
   this.AV91QtdeRegistros = 0 ;
   this.AV38TitularPessoaIdParm = 0 ;
   this.AV61TitularPessoaNomeParm = "" ;
   this.AV76SnCliente = "" ;
   this.AV77SnFornecedor = "" ;
   this.AV78SnFabricante = "" ;
   this.AV79SnPrompt = "" ;
   this.A9868AcessosClubeUsuariioId = "" ;
   this.A9867AcessosClubeIdSessao = "" ;
   this.A9873AcessosClubeDataHoraEntrada = gx.date.nullDate() ;
   this.A9877AcessosClubeNomePessoa = "" ;
   this.A9878AcessosClubeTipoPessoa = "" ;
   this.A9880AcessosClubeDescricaoBloqueio = "" ;
   this.A9869AcessosClubeAcessoId = 0 ;
   this.A9874AcessosClubeDataHoraSaida = gx.date.nullDate() ;
   this.AV8bmpExc = "" ;
   this.A2632ConvidadoId = 0 ;
   this.A2631ConvidadoEmpresaid = "" ;
   this.A2586ConviteNumero = 0 ;
   this.A2585ConviteEmpresaid = "" ;
   this.A2625ConvidadoNome = "" ;
   this.A2635ConviteTipo = "" ;
   this.A69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A2590AcessoPortariaDependenteId = 0 ;
   this.A2588AcessoPortariaPessoaId = 0 ;
   this.A2583AcessoPortariaDataHoraEntrada = gx.date.nullDate() ;
   this.A2593AcessoPortariaEmpresaid = "" ;
   this.A2584AcessoPortariaDataHoraSaida = gx.date.nullDate() ;
   this.A2589AcessoPortariaPessoaNome = "" ;
   this.A8041AcessoPortariaDescricaoBloquei = "" ;
   this.A2594AcessoPortariaId = 0 ;
   this.A2587AcessoPortariaPessoaEmpId = "" ;
   this.A2653DependenteId = 0 ;
   this.A2640DependenteNome = "" ;
   this.AV93ResInt = 0 ;
   this.AV92Res = 0 ;
   this.Events = {"e11ht2_client": ["'GXM_PREVIOUS'", true] ,"e12ht2_client": ["'GXM_NEXT'", true] ,"e15ht2_client": ["ENTER", true] ,"e13ht2_client": ["'FECHAR'", true] ,"e20ht2_client": ["'EXCLUIRACESSO'", true] ,"e16ht2_client": ["VDEPENDENTEID.ISVALID", true] ,"e17ht2_client": ["VTITULARPESSOAID.ISVALID", true] ,"e18ht2_client": ["VCONVIDADOID.ISVALID", true] ,"e14ht2_client": ["'IMPRIMIR'", true] ,"e23ht2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV88SnMonta',fld:'vSNMONTA'},{av:'AV89IdSessao',fld:'vIDSESSAO'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV88SnMonta',fld:'vSNMONTA'},{av:'AV89IdSessao',fld:'vIDSESSAO'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV88SnMonta',fld:'vSNMONTA'},{av:'AV89IdSessao',fld:'vIDSESSAO'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV88SnMonta',fld:'vSNMONTA'},{av:'AV89IdSessao',fld:'vIDSESSAO'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV39TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV40DependenteId',fld:'vDEPENDENTEID'},{av:'AV41ConvidadoId',fld:'vCONVIDADOID'},{av:'AV43DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV44DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'A2594AcessoPortariaId',fld:'ACESSOPORTARIAID'},{av:'A2593AcessoPortariaEmpresaid',fld:'ACESSOPORTARIAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2588AcessoPortariaPessoaId',fld:'ACESSOPORTARIAPESSOAID'},{av:'A2590AcessoPortariaDependenteId',fld:'ACESSOPORTARIADEPENDENTEID'},{av:'A2583AcessoPortariaDataHoraEntrada',fld:'ACESSOPORTARIADATAHORAENTRADA'},{av:'AV72DataAcessoIniAux',fld:'vDATAACESSOINIAUX'},{av:'AV71DataAcessoFimAux',fld:'vDATAACESSOFIMAUX'},{av:'AV42AcessoTitular',fld:'vACESSOTITULAR'},{av:'A2584AcessoPortariaDataHoraSaida',fld:'ACESSOPORTARIADATAHORASAIDA'},{av:'A2589AcessoPortariaPessoaNome',fld:'ACESSOPORTARIAPESSOANOME'},{av:'A2586ConviteNumero',fld:'CONVITENUMERO'},{av:'A8041AcessoPortariaDescricaoBloquei',fld:'ACESSOPORTARIADESCRICAOBLOQUEI'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV45EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'AV62TipoPessoa',fld:'vTIPOPESSOA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2631ConvidadoEmpresaid',fld:'CONVIDADOEMPRESAID'},{av:'AV51ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV55ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV60ConviteNumero',fld:'vCONVITENUMERO'},{av:'A2635ConviteTipo',fld:'CONVITETIPO'},{av:'AV57AcessoPortariaId',fld:'vACESSOPORTARIAID'},{av:'AV68AcessoPortariaPessoaId',fld:'vACESSOPORTARIAPESSOAID'},{av:'AV69AcessoPortariaDependenteId',fld:'vACESSOPORTARIADEPENDENTEID'},{av:'AV66AcessoPortariaDataHoraEntrada',fld:'vACESSOPORTARIADATAHORAENTRADA'},{av:'AV67AcessoPortariaDataHoraSaida',fld:'vACESSOPORTARIADATAHORASAIDA'},{av:'AV91QtdeRegistros',fld:'vQTDEREGISTROS'},{av:'AV85PessoaId',fld:'vPESSOAID'},{av:'AV86PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'}],[{av:'AV88SnMonta',fld:'vSNMONTA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV83SnFiltros',fld:'vSNFILTROS'},{av:'AV70DataAcessoAux',fld:'vDATAACESSOAUX'},{av:'AV72DataAcessoIniAux',fld:'vDATAACESSOINIAUX'},{av:'AV74HoraAux',fld:'vHORAAUX'},{av:'AV71DataAcessoFimAux',fld:'vDATAACESSOFIMAUX'},{av:'AV90Sql',fld:'vSQL'},{av:'AV91QtdeRegistros',fld:'vQTDEREGISTROS'},{av:'AV57AcessoPortariaId',fld:'vACESSOPORTARIAID'},{av:'AV66AcessoPortariaDataHoraEntrada',fld:'vACESSOPORTARIADATAHORAENTRADA'},{av:'AV67AcessoPortariaDataHoraSaida',fld:'vACESSOPORTARIADATAHORASAIDA'},{av:'AV68AcessoPortariaPessoaId',fld:'vACESSOPORTARIAPESSOAID'},{av:'AV84AcessoPortariaPessoaNome',fld:'vACESSOPORTARIAPESSOANOME'},{av:'AV69AcessoPortariaDependenteId',fld:'vACESSOPORTARIADEPENDENTEID'},{av:'AV60ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV54NomePessoa',fld:'vNOMEPESSOA'},{av:'AV87DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'AV62TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV64SdtConsultaAcessoPortaria',fld:'vSDTCONSULTAACESSOPORTARIA'},{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV46TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV49DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV50ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV100GXLvl121',fld:'vGXLVL121'},{av:'AV101GXLvl140',fld:'vGXLVL140'},{av:'AV102GXLvl162',fld:'vGXLVL162'},{av:'AV85PessoaId',fld:'vPESSOAID'},{av:'AV86PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV92Res',fld:'vRES'},{av:'AV93ResInt',fld:'vRESINT'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV79SnPrompt',fld:'vSNPROMPT'},{av:'AV38TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'AV76SnCliente',fld:'vSNCLIENTE'},{av:'AV77SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV78SnFabricante',fld:'vSNFABRICANTE'},{av:'AV39TitularPessoaId',fld:'vTITULARPESSOAID'}],[{av:'AV39TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV78SnFabricante',fld:'vSNFABRICANTE'},{av:'AV77SnFornecedor',fld:'vSNFORNECEDOR'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV39TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV46TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV40DependenteId',fld:'vDEPENDENTEID'},{av:'AV49DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV41ConvidadoId',fld:'vCONVIDADOID'},{av:'AV50ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV43DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV44DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV42AcessoTitular',fld:'vACESSOTITULAR'}],[{av:'AV42AcessoTitular',fld:'vACESSOTITULAR'},{av:'AV44DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'AV43DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV50ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV41ConvidadoId',fld:'vCONVIDADOID'},{av:'AV49DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV40DependenteId',fld:'vDEPENDENTEID'},{av:'AV46TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV39TitularPessoaId',fld:'vTITULARPESSOAID'}]];
   this.EvtParms["'EXCLUIRACESSO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV88SnMonta',fld:'vSNMONTA'},{av:'AV89IdSessao',fld:'vIDSESSAO'},{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A9869AcessosClubeAcessoId',fld:'ACESSOSCLUBEACESSOID'},{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV39TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV40DependenteId',fld:'vDEPENDENTEID'},{av:'AV41ConvidadoId',fld:'vCONVIDADOID'},{av:'AV43DataAcessoIni',fld:'vDATAACESSOINI'},{av:'AV44DataAcessoFim',fld:'vDATAACESSOFIM'},{av:'A2594AcessoPortariaId',fld:'ACESSOPORTARIAID'},{av:'A2593AcessoPortariaEmpresaid',fld:'ACESSOPORTARIAEMPRESAID'},{av:'A2588AcessoPortariaPessoaId',fld:'ACESSOPORTARIAPESSOAID'},{av:'A2590AcessoPortariaDependenteId',fld:'ACESSOPORTARIADEPENDENTEID'},{av:'A2583AcessoPortariaDataHoraEntrada',fld:'ACESSOPORTARIADATAHORAENTRADA'},{av:'AV72DataAcessoIniAux',fld:'vDATAACESSOINIAUX'},{av:'AV71DataAcessoFimAux',fld:'vDATAACESSOFIMAUX'},{av:'AV42AcessoTitular',fld:'vACESSOTITULAR'},{av:'A2584AcessoPortariaDataHoraSaida',fld:'ACESSOPORTARIADATAHORASAIDA'},{av:'A2589AcessoPortariaPessoaNome',fld:'ACESSOPORTARIAPESSOANOME'},{av:'A2586ConviteNumero',fld:'CONVITENUMERO'},{av:'A8041AcessoPortariaDescricaoBloquei',fld:'ACESSOPORTARIADESCRICAOBLOQUEI'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV45EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A2653DependenteId',fld:'DEPENDENTEID'},{av:'A2640DependenteNome',fld:'DEPENDENTENOME'},{av:'AV62TipoPessoa',fld:'vTIPOPESSOA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'A2631ConvidadoEmpresaid',fld:'CONVIDADOEMPRESAID'},{av:'AV51ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'A2625ConvidadoNome',fld:'CONVIDADONOME'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV55ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV60ConviteNumero',fld:'vCONVITENUMERO'},{av:'A2635ConviteTipo',fld:'CONVITETIPO'},{av:'AV57AcessoPortariaId',fld:'vACESSOPORTARIAID'},{av:'AV68AcessoPortariaPessoaId',fld:'vACESSOPORTARIAPESSOAID'},{av:'AV69AcessoPortariaDependenteId',fld:'vACESSOPORTARIADEPENDENTEID'},{av:'AV66AcessoPortariaDataHoraEntrada',fld:'vACESSOPORTARIADATAHORAENTRADA'},{av:'AV67AcessoPortariaDataHoraSaida',fld:'vACESSOPORTARIADATAHORASAIDA'},{av:'AV91QtdeRegistros',fld:'vQTDEREGISTROS'},{av:'AV85PessoaId',fld:'vPESSOAID'},{av:'AV86PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV83SnFiltros',fld:'vSNFILTROS'},{av:'AV70DataAcessoAux',fld:'vDATAACESSOAUX'},{av:'AV72DataAcessoIniAux',fld:'vDATAACESSOINIAUX'},{av:'AV74HoraAux',fld:'vHORAAUX'},{av:'AV71DataAcessoFimAux',fld:'vDATAACESSOFIMAUX'},{av:'AV90Sql',fld:'vSQL'},{av:'AV91QtdeRegistros',fld:'vQTDEREGISTROS'},{av:'AV57AcessoPortariaId',fld:'vACESSOPORTARIAID'},{av:'AV66AcessoPortariaDataHoraEntrada',fld:'vACESSOPORTARIADATAHORAENTRADA'},{av:'AV67AcessoPortariaDataHoraSaida',fld:'vACESSOPORTARIADATAHORASAIDA'},{av:'AV68AcessoPortariaPessoaId',fld:'vACESSOPORTARIAPESSOAID'},{av:'AV84AcessoPortariaPessoaNome',fld:'vACESSOPORTARIAPESSOANOME'},{av:'AV69AcessoPortariaDependenteId',fld:'vACESSOPORTARIADEPENDENTEID'},{av:'AV60ConviteNumero',fld:'vCONVITENUMERO'},{av:'AV54NomePessoa',fld:'vNOMEPESSOA'},{av:'AV87DescricaoBloqueio',fld:'vDESCRICAOBLOQUEIO'},{av:'AV62TipoPessoa',fld:'vTIPOPESSOA'},{av:'AV64SdtConsultaAcessoPortaria',fld:'vSDTCONSULTAACESSOPORTARIA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV26TpErro',fld:'vTPERRO'},{av:'AV46TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV49DependenteNome',fld:'vDEPENDENTENOME'},{av:'AV50ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV100GXLvl121',fld:'vGXLVL121'},{av:'AV101GXLvl140',fld:'vGXLVL140'},{av:'AV102GXLvl162',fld:'vGXLVL162'},{av:'AV85PessoaId',fld:'vPESSOAID'},{av:'AV86PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV92Res',fld:'vRES'},{av:'AV93ResInt',fld:'vRESINT'},{av:'AV94QtdePagina',fld:'vQTDEPAGINA'}]];
   this.EvtParms["VDEPENDENTEID.ISVALID"] = [[{av:'AV45EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV39TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV40DependenteId',fld:'vDEPENDENTEID'}],[{av:'AV49DependenteNome',fld:'vDEPENDENTENOME'}]];
   this.EvtParms["VTITULARPESSOAID.ISVALID"] = [[{av:'AV45EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV39TitularPessoaId',fld:'vTITULARPESSOAID'}],[{av:'AV46TitularPessoaNome',fld:'vTITULARPESSOANOME'}]];
   this.EvtParms["VCONVIDADOID.ISVALID"] = [[{av:'AV51ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'AV41ConvidadoId',fld:'vCONVIDADOID'}],[{av:'AV50ConvidadoNome',fld:'vCONVIDADONOME'}]];
   this.setPrompt("PROMPT_TITULARPESSOAID", [13]);
   this.setPrompt("PROMPT_DEPENDENTEID", [20]);
   this.setPrompt("PROMPT_CONVIDADOID", [25]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV38TitularPessoaIdParm", "vTITULARPESSOAIDPARM", 0, "int");
   this.setVCMap("AV61TitularPessoaNomeParm", "vTITULARPESSOANOMEPARM", 0, "svchar");
   this.setVCMap("AV76SnCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV77SnFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV78SnFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV79SnPrompt", "vSNPROMPT", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Visible", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaacessosportaria());
