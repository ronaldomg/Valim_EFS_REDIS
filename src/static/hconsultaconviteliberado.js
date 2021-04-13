/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:35:38.13
*/
gx.evt.autoSkip = false;
gx.define('hconsultaconviteliberado', false, function () {
   this.ServerClass =  "hconsultaconviteliberado" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("6", "'PRIMEIRO'");
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("9", "'ULTIMO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV89TitularPessoaIdParm=gx.fn.getIntegerValue("vTITULARPESSOAIDPARM",'.') ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV72EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.AV73EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID") ;
      this.A54ClassificacaoId=gx.fn.getControlValue("CLASSIFICACAOID") ;
      this.AV75ClassificacaoIdParm=gx.fn.getControlValue("vCLASSIFICACAOIDPARM") ;
      this.A834ClassificacaoNivelUsuarioId=gx.fn.getControlValue("CLASSIFICACAONIVELUSUARIOID") ;
      this.A56OpcaoClassificacaoId=gx.fn.getControlValue("OPCAOCLASSIFICACAOID") ;
      this.A2621CategoriaEmpresaId=gx.fn.getControlValue("CATEGORIAEMPRESAID") ;
      this.AV74CategoriaEmpresaId=gx.fn.getControlValue("vCATEGORIAEMPRESAID") ;
      this.A2622CategoriaId=gx.fn.getIntegerValue("CATEGORIAID",'.') ;
      this.A2598CategoriaLimiteConvite=gx.fn.getIntegerValue("CATEGORIALIMITECONVITE",'.') ;
      this.A2599CategoriaPrazoLimConvite=gx.fn.getIntegerValue("CATEGORIAPRAZOLIMCONVITE",'.') ;
      this.A2585ConviteEmpresaid=gx.fn.getControlValue("CONVITEEMPRESAID") ;
      this.A2636ConviteUsuarioAlt=gx.fn.getControlValue("CONVITEUSUARIOALT") ;
      this.A2633ConviteDataInicial=gx.fn.getDateValue("CONVITEDATAINICIAL") ;
      this.AV121SdtConvite=gx.fn.getControlValue("vSDTCONVITE") ;
      this.AV92SnCliente=gx.fn.getControlValue("vSNCLIENTE") ;
      this.AV93SnFornecedor=gx.fn.getControlValue("vSNFORNECEDOR") ;
      this.AV94SnFabricante=gx.fn.getControlValue("vSNFABRICANTE") ;
      this.AV95SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
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
   this.Validv_Convidadoidfiltro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVIDADOIDFILTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convidadoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVIDADOEMPRESAID");
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
      if ( this.AV121SdtConvite.length > 0 )
      {
         this.AV122Res =  this.AV121SdtConvite.length  ;
         this.AV122Res =  this.AV121SdtConvite.length / 10  ;
         this.AV123ResInt = gx.num.trunc( gx.num.intval( this.AV122Res) ,0) ;
         if ( this.AV122Res > this.AV123ResInt )
         {
            this.AV124TotalPag = gx.num.trunc( this.AV123ResInt + 1 ,0) ;
         }
         else
         {
            this.AV124TotalPag = gx.num.trunc( this.AV123ResInt ,0) ;
         }
      }
      else
      {
         this.AV124TotalPag = gx.num.trunc( 0 ,0) ;
      }
   };
   this.e16hk2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11hk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e20hk2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21hk2_client=function()
   {
      this.executeServerEvent("'CONVIDADOS'", true, arguments[0], false, false);
   };
   this.e12hk2_client=function()
   {
      this.executeServerEvent("'PRIMEIRO'", true, null, false, false);
   };
   this.e13hk2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e14hk2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e15hk2_client=function()
   {
      this.executeServerEvent("'ULTIMO'", true, null, false, false);
   };
   this.e22hk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,26,29,31,34,36,37,44,48,49,50,51,52,53,54,55,56,57,58,61,64,66,69,71,74,76,79,81,87,91,94,96,98,100,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,118,119,120];
   this.GXLastCtrlId =120;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",47,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaconviteliberado",[],false,1,true,true,0,true,false,false,"CollSdtConvite.SdtConviteItem",0,"px","Novo registro",true,false,false,null,null,false,"AV121SdtConvite",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11C",48,"CTLNUMCONVITE","Número Convite","","NumConvite","int",0,"px",6,6,"right",null,[],"GXV11C","GXV11C",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11D",49,"CTLDATAINICIAL","Data Inicial","","DataInicial","date",0,"px",10,10,"right",null,[],"GXV11D","GXV11D",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11E",50,"CTLDATAFINAL","Data Final","","DataFinal","date",0,"px",10,10,"right",null,[],"GXV11E","GXV11E",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11F",51,"CTLTITULARID","Titular","","TitularId","int",0,"px",7,7,"right",null,[],"GXV11F","GXV11F",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11G",52,"CTLTITULARNOME","Nome Titular","","TitularNome","svchar",0,"px",100,80,"left",null,[],"GXV11G","GXV11G",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11H",53,"CTLQTDEPESSOAS","Qtde Pessoas Convite","","QtdePessoas","int",0,"px",4,4,"right",null,[],"GXV11H","GXV11H",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11I",54,"CTLSNCONVIDADO","Sn Convidado","","SnConvidado","char",0,"px",1,1,"left",null,[],"GXV11I","GXV11I",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpconv","vBMPCONV",55,0,"px",17,"px","e21hk2_client","","Convidados","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",56,0,"px",17,"px","e20hk2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addComboBox("Convitetipogrid",57,"vCONVITETIPOGRID","Tipo Convite","ConviteTipoGrid","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit("Convitenumerogrid",58,"vCONVITENUMEROGRID","Número Convite","","ConviteNumeroGrid","int",0,"px",6,6,"right",null,[],"Convitenumerogrid","ConviteNumeroGrid",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titularpessoaid,isvalid:null,rgrid:[],fld:"vTITULARPESSOAID",gxz:"ZV67TitularPessoaId",gxold:"OV67TitularPessoaId",gxvar:"AV67TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV67TitularPessoaId,0)},c2v:function(){gx.O.AV67TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOANOME",gxz:"ZV71TitularPessoaNome",gxold:"OV71TitularPessoaNome",gxvar:"AV71TitularPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71TitularPessoaNome=Value},v2z:function(Value){gx.O.ZV71TitularPessoaNome=Value},v2c:function(){gx.fn.setControlValue("vTITULARPESSOANOME",gx.O.AV71TitularPessoaNome,0)},c2v:function(){gx.O.AV71TitularPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vTITULARPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={fld:"TABLE10",grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITEDATAINICIAL",gxz:"ZV69ConviteDataInicial",gxold:"OV69ConviteDataInicial",gxvar:"AV69ConviteDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69ConviteDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV69ConviteDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONVITEDATAINICIAL",gx.O.AV69ConviteDataInicial,0)},c2v:function(){gx.O.AV69ConviteDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONVITEDATAINICIAL")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITEDATAFINAL",gxz:"ZV70ConviteDataFinal",gxold:"OV70ConviteDataFinal",gxvar:"AV70ConviteDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70ConviteDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV70ConviteDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONVITEDATAFINAL",gx.O.AV70ConviteDataFinal,0)},c2v:function(){gx.O.AV70ConviteDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONVITEDATAFINAL")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITETIPO",gxz:"ZV68ConviteTipo",gxold:"OV68ConviteTipo",gxvar:"AV68ConviteTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV68ConviteTipo=Value},v2z:function(Value){gx.O.ZV68ConviteTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCONVITETIPO",gx.O.AV68ConviteTipo)},c2v:function(){gx.O.AV68ConviteTipo=this.val()},val:function(){return gx.fn.getControlValue("vCONVITETIPO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convidadoidfiltro,isvalid:null,rgrid:[],fld:"vCONVIDADOIDFILTRO",gxz:"ZV98ConvidadoIdFiltro",gxold:"OV98ConvidadoIdFiltro",gxvar:"AV98ConvidadoIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98ConvidadoIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98ConvidadoIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVIDADOIDFILTRO",gx.O.AV98ConvidadoIdFiltro,0)},c2v:function(){gx.O.AV98ConvidadoIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVIDADOIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVIDADONOME",gxz:"ZV107ConvidadoNome",gxold:"OV107ConvidadoNome",gxvar:"AV107ConvidadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107ConvidadoNome=Value},v2z:function(Value){gx.O.ZV107ConvidadoNome=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADONOME",gx.O.AV107ConvidadoNome,0)},c2v:function(){gx.O.AV107ConvidadoNome=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADONOME")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE11",grid:0};
   GXValidFnc[48]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMCONVITE",gxz:"ZV130GXV11C",gxold:"OV130GXV11C",gxvar:"GXV11C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11C=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV130GXV11C=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMCONVITE",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11C,0)},c2v:function(){gx.O.GXV11C=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMCONVITE",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAINICIAL",gxz:"ZV131GXV11D",gxold:"OV131GXV11D",gxvar:"GXV11D",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11D=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV131GXV11D=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAINICIAL",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11D,0)},c2v:function(){gx.O.GXV11D=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAINICIAL",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAFINAL",gxz:"ZV132GXV11E",gxold:"OV132GXV11E",gxvar:"GXV11E",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11E=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV132GXV11E=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAFINAL",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11E,0)},c2v:function(){gx.O.GXV11E=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAFINAL",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTITULARID",gxz:"ZV133GXV11F",gxold:"OV133GXV11F",gxvar:"GXV11F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11F=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV133GXV11F=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLTITULARID",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11F,0)},c2v:function(){gx.O.GXV11F=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLTITULARID",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTITULARNOME",gxz:"ZV134GXV11G",gxold:"OV134GXV11G",gxvar:"GXV11G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11G=Value},v2z:function(Value){gx.O.ZV134GXV11G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTITULARNOME",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11G,0)},c2v:function(){gx.O.GXV11G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTITULARNOME",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDEPESSOAS",gxz:"ZV135GXV11H",gxold:"OV135GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11H=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV135GXV11H=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLQTDEPESSOAS",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11H,0)},c2v:function(){gx.O.GXV11H=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLQTDEPESSOAS",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNCONVIDADO",gxz:"ZV136GXV11I",gxold:"OV136GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11I=Value},v2z:function(Value){gx.O.ZV136GXV11I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSNCONVIDADO",row || gx.fn.currentGridRowImpl(47),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNCONVIDADO",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONV",gxz:"ZV78bmpConv",gxold:"OV78bmpConv",gxvar:"AV78bmpConv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV78bmpConv=Value},v2z:function(Value){gx.O.ZV78bmpConv=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONV",row || gx.fn.currentGridRowImpl(47),gx.O.AV78bmpConv,gx.O.AV141Bmpconv_GXI)},c2v:function(){gx.O.AV141Bmpconv_GXI=this.val_GXI();gx.O.AV78bmpConv=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONV",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONV_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV141Bmpconv_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(47),gx.O.AV8bmpExc,gx.O.AV139Bmpexc_GXI)},c2v:function(){gx.O.AV139Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV139Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITETIPOGRID",gxz:"ZV104ConviteTipoGrid",gxold:"OV104ConviteTipoGrid",gxvar:"AV104ConviteTipoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV104ConviteTipoGrid=Value},v2z:function(Value){gx.O.ZV104ConviteTipoGrid=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vCONVITETIPOGRID",row || gx.fn.currentGridRowImpl(47),gx.O.AV104ConviteTipoGrid)},c2v:function(){gx.O.AV104ConviteTipoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONVITETIPOGRID",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITENUMEROGRID",gxz:"ZV99ConviteNumeroGrid",gxold:"OV99ConviteNumeroGrid",gxvar:"AV99ConviteNumeroGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV99ConviteNumeroGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV99ConviteNumeroGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONVITENUMEROGRID",row || gx.fn.currentGridRowImpl(47),gx.O.AV99ConviteNumeroGrid,0)},c2v:function(){gx.O.AV99ConviteNumeroGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONVITENUMEROGRID",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLET",grid:0};
   GXValidFnc[64]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCATEGORIALIMITECONVITE",gxz:"ZV80CategoriaLimiteConvite",gxold:"OV80CategoriaLimiteConvite",gxvar:"AV80CategoriaLimiteConvite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80CategoriaLimiteConvite=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80CategoriaLimiteConvite=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIALIMITECONVITE",gx.O.AV80CategoriaLimiteConvite,0)},c2v:function(){gx.O.AV80CategoriaLimiteConvite=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIALIMITECONVITE",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECONVITES",gxz:"ZV77QtdeConvites",gxold:"OV77QtdeConvites",gxvar:"AV77QtdeConvites",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77QtdeConvites=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77QtdeConvites=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECONVITES",gx.O.AV77QtdeConvites,0)},c2v:function(){gx.O.AV77QtdeConvites=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECONVITES",'.')},nac:gx.falseFn};
   GXValidFnc[74]={fld:"TXTCONVPER", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECONMES",gxz:"ZV84QtdeConMes",gxold:"OV84QtdeConMes",gxvar:"AV84QtdeConMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84QtdeConMes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV84QtdeConMes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECONMES",gx.O.AV84QtdeConMes,0)},c2v:function(){gx.O.AV84QtdeConMes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECONMES",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:true,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDOCONVITES",gxz:"ZV79SaldoConvites",gxold:"OV79SaldoConvites",gxvar:"AV79SaldoConvites",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79SaldoConvites=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV79SaldoConvites=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSALDOCONVITES",gx.O.AV79SaldoConvites,0)},c2v:function(){gx.O.AV79SaldoConvites=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSALDOCONVITES",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TABLE6",grid:0};
   GXValidFnc[91]={fld:"TABLE7",grid:0};
   GXValidFnc[94]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[96]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[98]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[100]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[102]={fld:"IMAGE5",grid:0};
   GXValidFnc[103]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXCLUSAO",gxz:"ZV97SnExclusao",gxold:"OV97SnExclusao",gxvar:"AV97SnExclusao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97SnExclusao=Value},v2z:function(Value){gx.O.ZV97SnExclusao=Value},v2c:function(){gx.fn.setControlValue("vSNEXCLUSAO",gx.O.AV97SnExclusao,0)},c2v:function(){gx.O.AV97SnExclusao=this.val()},val:function(){return gx.fn.getControlValue("vSNEXCLUSAO")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCONVIDADO",gxz:"ZV106SnConvidado",gxold:"OV106SnConvidado",gxvar:"AV106SnConvidado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106SnConvidado=Value},v2z:function(Value){gx.O.ZV106SnConvidado=Value},v2c:function(){gx.fn.setControlValue("vSNCONVIDADO",gx.O.AV106SnConvidado,0)},c2v:function(){gx.O.AV106SnConvidado=this.val()},val:function(){return gx.fn.getControlValue("vSNCONVIDADO")},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITEEMPRESAID",gxz:"ZV105ConviteEmpresaId",gxold:"OV105ConviteEmpresaId",gxvar:"AV105ConviteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105ConviteEmpresaId=Value},v2z:function(Value){gx.O.ZV105ConviteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVITEEMPRESAID",gx.O.AV105ConviteEmpresaId,0)},c2v:function(){gx.O.AV105ConviteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVITEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convidadoempresaid,isvalid:null,rgrid:[],fld:"vCONVIDADOEMPRESAID",gxz:"ZV87ConvidadoEmpresaId",gxold:"OV87ConvidadoEmpresaId",gxvar:"AV87ConvidadoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87ConvidadoEmpresaId=Value},v2z:function(Value){gx.O.ZV87ConvidadoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADOEMPRESAID",gx.O.AV87ConvidadoEmpresaId,0)},c2v:function(){gx.O.AV87ConvidadoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOMOD",gxz:"ZV114PessoaRazaoMod",gxold:"OV114PessoaRazaoMod",gxvar:"AV114PessoaRazaoMod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114PessoaRazaoMod=Value},v2z:function(Value){gx.O.ZV114PessoaRazaoMod=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOMOD",gx.O.AV114PessoaRazaoMod,0)},c2v:function(){gx.O.AV114PessoaRazaoMod=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOMOD")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDMOD",gxz:"ZV113PessoaIdMod",gxold:"OV113PessoaIdMod",gxvar:"AV113PessoaIdMod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113PessoaIdMod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV113PessoaIdMod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDMOD",gx.O.AV113PessoaIdMod,0)},c2v:function(){gx.O.AV113PessoaIdMod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDMOD",'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITEDATAFINMOD",gxz:"ZV112ConviteDataFinMod",gxold:"OV112ConviteDataFinMod",gxvar:"AV112ConviteDataFinMod",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112ConviteDataFinMod=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV112ConviteDataFinMod=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONVITEDATAFINMOD",gx.O.AV112ConviteDataFinMod,0)},c2v:function(){gx.O.AV112ConviteDataFinMod=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONVITEDATAFINMOD")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITEDATAINIMOD",gxz:"ZV111ConviteDataIniMod",gxold:"OV111ConviteDataIniMod",gxvar:"AV111ConviteDataIniMod",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111ConviteDataIniMod=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV111ConviteDataIniMod=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONVITEDATAINIMOD",gx.O.AV111ConviteDataIniMod,0)},c2v:function(){gx.O.AV111ConviteDataIniMod=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONVITEDATAINIMOD")},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVITENUMEROMOD",gxz:"ZV110ConviteNumeroMod",gxold:"OV110ConviteNumeroMod",gxvar:"AV110ConviteNumeroMod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110ConviteNumeroMod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV110ConviteNumeroMod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVITENUMEROMOD",gx.O.AV110ConviteNumeroMod,0)},c2v:function(){gx.O.AV110ConviteNumeroMod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVITENUMEROMOD",'.')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAATUAL",gxz:"ZV125PaginaAtual",gxold:"OV125PaginaAtual",gxvar:"AV125PaginaAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV125PaginaAtual=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV125PaginaAtual=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAATUAL",gx.O.AV125PaginaAtual,0)},c2v:function(){gx.O.AV125PaginaAtual=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAATUAL",'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALPAG",gxz:"ZV124TotalPag",gxold:"OV124TotalPag",gxvar:"AV124TotalPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124TotalPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV124TotalPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTOTALPAG",gx.O.AV124TotalPag,0)},c2v:function(){gx.O.AV124TotalPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTOTALPAG",'.')},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV126Qtde",gxold:"OV126Qtde",gxvar:"AV126Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV126Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV126Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV126Qtde,0)},c2v:function(){gx.O.AV126Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[116]={fld:"JS", format:2,grid:0};
   GXValidFnc[118]={fld:"BTNHELP",grid:0};
   GXValidFnc[119]={fld:"PROMPT_TITULARPESSOAID",grid:0};
   GXValidFnc[120]={fld:"PROMPT_CONVIDADOIDFILTRO",grid:0};
   this.AV67TitularPessoaId = 0 ;
   this.ZV67TitularPessoaId = 0 ;
   this.OV67TitularPessoaId = 0 ;
   this.AV71TitularPessoaNome = "" ;
   this.ZV71TitularPessoaNome = "" ;
   this.OV71TitularPessoaNome = "" ;
   this.AV69ConviteDataInicial = gx.date.nullDate() ;
   this.ZV69ConviteDataInicial = gx.date.nullDate() ;
   this.OV69ConviteDataInicial = gx.date.nullDate() ;
   this.AV70ConviteDataFinal = gx.date.nullDate() ;
   this.ZV70ConviteDataFinal = gx.date.nullDate() ;
   this.OV70ConviteDataFinal = gx.date.nullDate() ;
   this.AV68ConviteTipo = "" ;
   this.ZV68ConviteTipo = "" ;
   this.OV68ConviteTipo = "" ;
   this.AV98ConvidadoIdFiltro = 0 ;
   this.ZV98ConvidadoIdFiltro = 0 ;
   this.OV98ConvidadoIdFiltro = 0 ;
   this.AV107ConvidadoNome = "" ;
   this.ZV107ConvidadoNome = "" ;
   this.OV107ConvidadoNome = "" ;
   this.ZV130GXV11C = 0 ;
   this.OV130GXV11C = 0 ;
   this.ZV131GXV11D = gx.date.nullDate() ;
   this.OV131GXV11D = gx.date.nullDate() ;
   this.ZV132GXV11E = gx.date.nullDate() ;
   this.OV132GXV11E = gx.date.nullDate() ;
   this.ZV133GXV11F = 0 ;
   this.OV133GXV11F = 0 ;
   this.ZV134GXV11G = "" ;
   this.OV134GXV11G = "" ;
   this.ZV135GXV11H = 0 ;
   this.OV135GXV11H = 0 ;
   this.ZV136GXV11I = "" ;
   this.OV136GXV11I = "" ;
   this.ZV78bmpConv = "" ;
   this.OV78bmpConv = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV104ConviteTipoGrid = "" ;
   this.OV104ConviteTipoGrid = "" ;
   this.ZV99ConviteNumeroGrid = 0 ;
   this.OV99ConviteNumeroGrid = 0 ;
   this.AV80CategoriaLimiteConvite = 0 ;
   this.ZV80CategoriaLimiteConvite = 0 ;
   this.OV80CategoriaLimiteConvite = 0 ;
   this.AV77QtdeConvites = 0 ;
   this.ZV77QtdeConvites = 0 ;
   this.OV77QtdeConvites = 0 ;
   this.AV84QtdeConMes = 0 ;
   this.ZV84QtdeConMes = 0 ;
   this.OV84QtdeConMes = 0 ;
   this.AV79SaldoConvites = 0 ;
   this.ZV79SaldoConvites = 0 ;
   this.OV79SaldoConvites = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV97SnExclusao = "" ;
   this.ZV97SnExclusao = "" ;
   this.OV97SnExclusao = "" ;
   this.AV106SnConvidado = "" ;
   this.ZV106SnConvidado = "" ;
   this.OV106SnConvidado = "" ;
   this.AV105ConviteEmpresaId = "" ;
   this.ZV105ConviteEmpresaId = "" ;
   this.OV105ConviteEmpresaId = "" ;
   this.AV87ConvidadoEmpresaId = "" ;
   this.ZV87ConvidadoEmpresaId = "" ;
   this.OV87ConvidadoEmpresaId = "" ;
   this.AV114PessoaRazaoMod = "" ;
   this.ZV114PessoaRazaoMod = "" ;
   this.OV114PessoaRazaoMod = "" ;
   this.AV113PessoaIdMod = 0 ;
   this.ZV113PessoaIdMod = 0 ;
   this.OV113PessoaIdMod = 0 ;
   this.AV112ConviteDataFinMod = gx.date.nullDate() ;
   this.ZV112ConviteDataFinMod = gx.date.nullDate() ;
   this.OV112ConviteDataFinMod = gx.date.nullDate() ;
   this.AV111ConviteDataIniMod = gx.date.nullDate() ;
   this.ZV111ConviteDataIniMod = gx.date.nullDate() ;
   this.OV111ConviteDataIniMod = gx.date.nullDate() ;
   this.AV110ConviteNumeroMod = 0 ;
   this.ZV110ConviteNumeroMod = 0 ;
   this.OV110ConviteNumeroMod = 0 ;
   this.AV125PaginaAtual = 0 ;
   this.ZV125PaginaAtual = 0 ;
   this.OV125PaginaAtual = 0 ;
   this.AV124TotalPag = 0 ;
   this.ZV124TotalPag = 0 ;
   this.OV124TotalPag = 0 ;
   this.AV126Qtde = 0 ;
   this.ZV126Qtde = 0 ;
   this.OV126Qtde = 0 ;
   this.AV67TitularPessoaId = 0 ;
   this.AV71TitularPessoaNome = "" ;
   this.AV69ConviteDataInicial = gx.date.nullDate() ;
   this.AV70ConviteDataFinal = gx.date.nullDate() ;
   this.AV68ConviteTipo = "" ;
   this.AV98ConvidadoIdFiltro = 0 ;
   this.AV107ConvidadoNome = "" ;
   this.AV80CategoriaLimiteConvite = 0 ;
   this.AV77QtdeConvites = 0 ;
   this.AV84QtdeConMes = 0 ;
   this.AV79SaldoConvites = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV97SnExclusao = "" ;
   this.AV106SnConvidado = "" ;
   this.AV105ConviteEmpresaId = "" ;
   this.AV87ConvidadoEmpresaId = "" ;
   this.AV114PessoaRazaoMod = "" ;
   this.AV113PessoaIdMod = 0 ;
   this.AV112ConviteDataFinMod = gx.date.nullDate() ;
   this.AV111ConviteDataIniMod = gx.date.nullDate() ;
   this.AV110ConviteNumeroMod = 0 ;
   this.AV125PaginaAtual = 0 ;
   this.AV124TotalPag = 0 ;
   this.AV126Qtde = 0 ;
   this.AV89TitularPessoaIdParm = 0 ;
   this.AV92SnCliente = "" ;
   this.AV93SnFornecedor = "" ;
   this.AV94SnFabricante = "" ;
   this.AV95SnPrompt = "" ;
   this.GXV11C = 0 ;
   this.GXV11D = gx.date.nullDate() ;
   this.GXV11E = gx.date.nullDate() ;
   this.GXV11F = 0 ;
   this.GXV11G = "" ;
   this.GXV11H = 0 ;
   this.GXV11I = "" ;
   this.AV78bmpConv = "" ;
   this.AV8bmpExc = "" ;
   this.AV104ConviteTipoGrid = "" ;
   this.AV99ConviteNumeroGrid = 0 ;
   this.A2633ConviteDataInicial = gx.date.nullDate() ;
   this.A69PessoaId = 0 ;
   this.A2585ConviteEmpresaid = "" ;
   this.A2636ConviteUsuarioAlt = "" ;
   this.A2622CategoriaId = 0 ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2598CategoriaLimiteConvite = 0 ;
   this.A2599CategoriaPrazoLimConvite = 0 ;
   this.A54ClassificacaoId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A834ClassificacaoNivelUsuarioId = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A2632ConvidadoId = 0 ;
   this.A2631ConvidadoEmpresaid = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.AV72EmpresaPessoasEmpresaId = "" ;
   this.AV73EmpresaClassificacaoEmpresaId = "" ;
   this.AV75ClassificacaoIdParm = "" ;
   this.AV74CategoriaEmpresaId = "" ;
   this.AV121SdtConvite = [ ] ;
   this.AV123ResInt = 0 ;
   this.AV122Res = 0 ;
   this.Events = {"e16hk2_client": ["ENTER", true] ,"e11hk2_client": ["'FECHAR'", true] ,"e20hk2_client": ["'EXCLUIR'", true] ,"e21hk2_client": ["'CONVIDADOS'", true] ,"e12hk2_client": ["'PRIMEIRO'", true] ,"e13hk2_client": ["'ANTERIOR'", true] ,"e14hk2_client": ["'PROXIMO'", true] ,"e15hk2_client": ["'ULTIMO'", true] ,"e22hk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'}],[{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV71TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'gx.fn.getCtrlProperty("vCATEGORIALIMITECONVITE","Class")',ctrl:'vCATEGORIALIMITECONVITE',prop:'Class'},{av:'gx.fn.getCtrlProperty("TABLET","Visible")',ctrl:'TABLET',prop:'Visible'},{av:'AV80CategoriaLimiteConvite',fld:'vCATEGORIALIMITECONVITE'},{av:'AV77QtdeConvites',fld:'vQTDECONVITES'},{av:'AV83CategoriaPrazoLimConvite',fld:'vCATEGORIAPRAZOLIMCONVITE'},{av:'AV84QtdeConMes',fld:'vQTDECONMES'},{av:'AV79SaldoConvites',fld:'vSALDOCONVITES'},{av:'AV76CategoriaId',fld:'vCATEGORIAID'},{av:'AV81DataSistema',fld:'vDATASISTEMA'},{av:'AV82DataCalculada',fld:'vDATACALCULADA'},{av:'gx.fn.getCtrlProperty("TXTCONVPER","Caption")',ctrl:'TXTCONVPER',prop:'Caption'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47}],[{av:'AV99ConviteNumeroGrid',fld:'vCONVITENUMEROGRID'},{av:'gx.fn.getCtrlProperty("vBMPCONV","Enabled")',ctrl:'vBMPCONV',prop:'Enabled'},{av:'AV78bmpConv',fld:'vBMPCONV'},{av:'gx.fn.getCtrlProperty("vBMPCONV","Tooltiptext")',ctrl:'vBMPCONV',prop:'Tooltiptext'}]];
   this.EvtParms["ENTER"] = [[{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'AV69ConviteDataInicial',fld:'vCONVITEDATAINICIAL'},{av:'AV70ConviteDataFinal',fld:'vCONVITEDATAFINAL'},{av:'AV98ConvidadoIdFiltro',fld:'vCONVIDADOIDFILTRO'},{av:'A2631ConvidadoEmpresaid',fld:'CONVIDADOEMPRESAID'},{av:'AV87ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV105ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'}],[{av:'AV115ContLinhas',fld:'vCONTLINHAS'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV71TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV143GXLvl230',fld:'vGXLVL230'},{av:'AV70ConviteDataFinal',fld:'vCONVITEDATAFINAL'},{av:'AV144GXLvl256',fld:'vGXLVL256'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47},{av:'gx.fn.getCtrlProperty("TABLET","Visible")',ctrl:'TABLET',prop:'Visible'},{av:'AV80CategoriaLimiteConvite',fld:'vCATEGORIALIMITECONVITE'},{av:'AV77QtdeConvites',fld:'vQTDECONVITES'},{av:'AV83CategoriaPrazoLimConvite',fld:'vCATEGORIAPRAZOLIMCONVITE'},{av:'AV84QtdeConMes',fld:'vQTDECONMES'},{av:'AV79SaldoConvites',fld:'vSALDOCONVITES'},{av:'AV76CategoriaId',fld:'vCATEGORIAID'},{av:'AV81DataSistema',fld:'vDATASISTEMA'},{av:'AV82DataCalculada',fld:'vDATACALCULADA'},{av:'gx.fn.getCtrlProperty("TXTCONVPER","Caption")',ctrl:'TXTCONVPER',prop:'Caption'},{av:'AV122Res',fld:'vRES'},{av:'AV123ResInt',fld:'vRESINT'},{av:'AV124TotalPag',fld:'vTOTALPAG'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV95SnPrompt',fld:'vSNPROMPT'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'AV92SnCliente',fld:'vSNCLIENTE'},{av:'AV93SnFornecedor',fld:'vSNFORNECEDOR'},{av:'AV94SnFabricante',fld:'vSNFABRICANTE'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'}],[{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV94SnFabricante',fld:'vSNFABRICANTE'},{av:'AV93SnFornecedor',fld:'vSNFORNECEDOR'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV97SnExclusao',fld:'vSNEXCLUSAO'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV99ConviteNumeroGrid',fld:'vCONVITENUMEROGRID'},{av:'AV105ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV69ConviteDataInicial',fld:'vCONVITEDATAINICIAL'},{av:'AV70ConviteDataFinal',fld:'vCONVITEDATAFINAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV87ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'AV98ConvidadoIdFiltro',fld:'vCONVIDADOIDFILTRO'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV90MsgErroExc',fld:'vMSGERROEXC'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV122Res',fld:'vRES'},{av:'AV123ResInt',fld:'vRESINT'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'CONVIDADOS'"] = [[{av:'AV99ConviteNumeroGrid',fld:'vCONVITENUMEROGRID'},{av:'AV100ConviteDataInicialGrid',fld:'vCONVITEDATAINICIALGRID'},{av:'AV101ConviteDataFinalGrid',fld:'vCONVITEDATAFINALGRID'},{av:'AV102PessoaIdGrid',fld:'vPESSOAIDGRID'},{av:'AV103PessoaRazaoSocialGrid',fld:'vPESSOARAZAOSOCIALGRID'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'}],[{av:'AV110ConviteNumeroMod',fld:'vCONVITENUMEROMOD'},{av:'AV111ConviteDataIniMod',fld:'vCONVITEDATAINIMOD'},{av:'AV112ConviteDataFinMod',fld:'vCONVITEDATAFINMOD'},{av:'AV113PessoaIdMod',fld:'vPESSOAIDMOD'},{av:'AV114PessoaRazaoMod',fld:'vPESSOARAZAOMOD'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47}]];
   this.EvtParms["'PRIMEIRO'"] = [[{av:'AV105ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV69ConviteDataInicial',fld:'vCONVITEDATAINICIAL'},{av:'AV70ConviteDataFinal',fld:'vCONVITEDATAFINAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV87ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'AV98ConvidadoIdFiltro',fld:'vCONVIDADOIDFILTRO'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'}],[{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV105ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV69ConviteDataInicial',fld:'vCONVITEDATAINICIAL'},{av:'AV70ConviteDataFinal',fld:'vCONVITEDATAFINAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV87ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'AV98ConvidadoIdFiltro',fld:'vCONVIDADOIDFILTRO'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'AV124TotalPag',fld:'vTOTALPAG'}],[{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV105ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV69ConviteDataInicial',fld:'vCONVITEDATAINICIAL'},{av:'AV70ConviteDataFinal',fld:'vCONVITEDATAFINAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV87ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'AV98ConvidadoIdFiltro',fld:'vCONVIDADOIDFILTRO'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'}],[{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47}]];
   this.EvtParms["'ULTIMO'"] = [[{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV105ConviteEmpresaId',fld:'vCONVITEEMPRESAID'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV69ConviteDataInicial',fld:'vCONVITEDATAINICIAL'},{av:'AV70ConviteDataFinal',fld:'vCONVITEDATAFINAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV87ConvidadoEmpresaId',fld:'vCONVIDADOEMPRESAID'},{av:'AV98ConvidadoIdFiltro',fld:'vCONVIDADOIDFILTRO'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'}],[{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47}],[{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV71TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'gx.fn.getCtrlProperty("vCATEGORIALIMITECONVITE","Class")',ctrl:'vCATEGORIALIMITECONVITE',prop:'Class'},{av:'gx.fn.getCtrlProperty("TABLET","Visible")',ctrl:'TABLET',prop:'Visible'},{av:'AV80CategoriaLimiteConvite',fld:'vCATEGORIALIMITECONVITE'},{av:'AV77QtdeConvites',fld:'vQTDECONVITES'},{av:'AV83CategoriaPrazoLimConvite',fld:'vCATEGORIAPRAZOLIMCONVITE'},{av:'AV84QtdeConMes',fld:'vQTDECONMES'},{av:'AV79SaldoConvites',fld:'vSALDOCONVITES'},{av:'AV76CategoriaId',fld:'vCATEGORIAID'},{av:'AV81DataSistema',fld:'vDATASISTEMA'},{av:'AV82DataCalculada',fld:'vDATACALCULADA'},{av:'gx.fn.getCtrlProperty("TXTCONVPER","Caption")',ctrl:'TXTCONVPER',prop:'Caption'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47}],[{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV71TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'gx.fn.getCtrlProperty("vCATEGORIALIMITECONVITE","Class")',ctrl:'vCATEGORIALIMITECONVITE',prop:'Class'},{av:'gx.fn.getCtrlProperty("TABLET","Visible")',ctrl:'TABLET',prop:'Visible'},{av:'AV80CategoriaLimiteConvite',fld:'vCATEGORIALIMITECONVITE'},{av:'AV77QtdeConvites',fld:'vQTDECONVITES'},{av:'AV83CategoriaPrazoLimConvite',fld:'vCATEGORIAPRAZOLIMCONVITE'},{av:'AV84QtdeConMes',fld:'vQTDECONMES'},{av:'AV79SaldoConvites',fld:'vSALDOCONVITES'},{av:'AV76CategoriaId',fld:'vCATEGORIAID'},{av:'AV81DataSistema',fld:'vDATASISTEMA'},{av:'AV82DataCalculada',fld:'vDATACALCULADA'},{av:'gx.fn.getCtrlProperty("TXTCONVPER","Caption")',ctrl:'TXTCONVPER',prop:'Caption'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47}],[{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV71TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'gx.fn.getCtrlProperty("vCATEGORIALIMITECONVITE","Class")',ctrl:'vCATEGORIALIMITECONVITE',prop:'Class'},{av:'gx.fn.getCtrlProperty("TABLET","Visible")',ctrl:'TABLET',prop:'Visible'},{av:'AV80CategoriaLimiteConvite',fld:'vCATEGORIALIMITECONVITE'},{av:'AV77QtdeConvites',fld:'vQTDECONVITES'},{av:'AV83CategoriaPrazoLimConvite',fld:'vCATEGORIAPRAZOLIMCONVITE'},{av:'AV84QtdeConMes',fld:'vQTDECONMES'},{av:'AV79SaldoConvites',fld:'vSALDOCONVITES'},{av:'AV76CategoriaId',fld:'vCATEGORIAID'},{av:'AV81DataSistema',fld:'vDATASISTEMA'},{av:'AV82DataCalculada',fld:'vDATACALCULADA'},{av:'gx.fn.getCtrlProperty("TXTCONVPER","Caption")',ctrl:'TXTCONVPER',prop:'Caption'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV89TitularPessoaIdParm',fld:'vTITULARPESSOAIDPARM'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV72EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV126Qtde',fld:'vQTDE'},{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV73EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV75ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'A834ClassificacaoNivelUsuarioId',fld:'CLASSIFICACAONIVELUSUARIOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A2621CategoriaEmpresaId',fld:'CATEGORIAEMPRESAID'},{av:'AV74CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'A2598CategoriaLimiteConvite',fld:'CATEGORIALIMITECONVITE'},{av:'A2599CategoriaPrazoLimConvite',fld:'CATEGORIAPRAZOLIMCONVITE'},{av:'A2585ConviteEmpresaid',fld:'CONVITEEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2636ConviteUsuarioAlt',fld:'CONVITEUSUARIOALT'},{av:'A2633ConviteDataInicial',fld:'CONVITEDATAINICIAL'},{av:'AV68ConviteTipo',fld:'vCONVITETIPO'},{av:'AV124TotalPag',fld:'vTOTALPAG'},{av:'AV125PaginaAtual',fld:'vPAGINAATUAL'},{av:'AV121SdtConvite',fld:'vSDTCONVITE',grid:47}],[{av:'AV67TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV71TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'gx.fn.getCtrlProperty("vCATEGORIALIMITECONVITE","Class")',ctrl:'vCATEGORIALIMITECONVITE',prop:'Class'},{av:'gx.fn.getCtrlProperty("TABLET","Visible")',ctrl:'TABLET',prop:'Visible'},{av:'AV80CategoriaLimiteConvite',fld:'vCATEGORIALIMITECONVITE'},{av:'AV77QtdeConvites',fld:'vQTDECONVITES'},{av:'AV83CategoriaPrazoLimConvite',fld:'vCATEGORIAPRAZOLIMCONVITE'},{av:'AV84QtdeConMes',fld:'vQTDECONMES'},{av:'AV79SaldoConvites',fld:'vSALDOCONVITES'},{av:'AV76CategoriaId',fld:'vCATEGORIAID'},{av:'AV81DataSistema',fld:'vDATASISTEMA'},{av:'AV82DataCalculada',fld:'vDATACALCULADA'},{av:'gx.fn.getCtrlProperty("TXTCONVPER","Caption")',ctrl:'TXTCONVPER',prop:'Caption'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.setPrompt("PROMPT_TITULARPESSOAID", [13]);
   this.setPrompt("PROMPT_CONVIDADOIDFILTRO", [36]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV89TitularPessoaIdParm", "vTITULARPESSOAIDPARM", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV72EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV73EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("AV75ClassificacaoIdParm", "vCLASSIFICACAOIDPARM", 0, "char");
   this.setVCMap("A834ClassificacaoNivelUsuarioId", "CLASSIFICACAONIVELUSUARIOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("A2621CategoriaEmpresaId", "CATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV74CategoriaEmpresaId", "vCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("A2622CategoriaId", "CATEGORIAID", 0, "int");
   this.setVCMap("A2598CategoriaLimiteConvite", "CATEGORIALIMITECONVITE", 0, "int");
   this.setVCMap("A2599CategoriaPrazoLimConvite", "CATEGORIAPRAZOLIMCONVITE", 0, "int");
   this.setVCMap("A2585ConviteEmpresaid", "CONVITEEMPRESAID", 0, "char");
   this.setVCMap("A2636ConviteUsuarioAlt", "CONVITEUSUARIOALT", 0, "char");
   this.setVCMap("A2633ConviteDataInicial", "CONVITEDATAINICIAL", 0, "date");
   this.setVCMap("AV121SdtConvite", "vSDTCONVITE", 0, "CollSdtConvite.SdtConviteItem");
   this.setVCMap("AV92SnCliente", "vSNCLIENTE", 0, "char");
   this.setVCMap("AV93SnFornecedor", "vSNFORNECEDOR", 0, "char");
   this.setVCMap("AV94SnFabricante", "vSNFABRICANTE", 0, "char");
   this.setVCMap("AV95SnPrompt", "vSNPROMPT", 0, "char");
   this.setVCMap("AV89TitularPessoaIdParm", "vTITULARPESSOAIDPARM", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV72EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("AV73EmpresaClassificacaoEmpresaId", "vEMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("AV75ClassificacaoIdParm", "vCLASSIFICACAOIDPARM", 0, "char");
   this.setVCMap("A834ClassificacaoNivelUsuarioId", "CLASSIFICACAONIVELUSUARIOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("A2621CategoriaEmpresaId", "CATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV74CategoriaEmpresaId", "vCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("A2622CategoriaId", "CATEGORIAID", 0, "int");
   this.setVCMap("A2598CategoriaLimiteConvite", "CATEGORIALIMITECONVITE", 0, "int");
   this.setVCMap("A2599CategoriaPrazoLimConvite", "CATEGORIAPRAZOLIMCONVITE", 0, "int");
   this.setVCMap("A2585ConviteEmpresaid", "CONVITEEMPRESAID", 0, "char");
   this.setVCMap("A2636ConviteUsuarioAlt", "CONVITEUSUARIOALT", 0, "char");
   this.setVCMap("A2633ConviteDataInicial", "CONVITEDATAINICIAL", 0, "date");
   this.setVCMap("AV121SdtConvite", "vSDTCONVITE", 0, "CollSdtConvite.SdtConviteItem");
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV89TitularPessoaIdParm"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV72EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   GridContainer.addRefreshingVar(this.GXValidFnc[115]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV73EmpresaClassificacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV75ClassificacaoIdParm"});
   GridContainer.addRefreshingVar({rfrVar:"A834ClassificacaoNivelUsuarioId"});
   GridContainer.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   GridContainer.addRefreshingVar({rfrVar:"A2621CategoriaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV74CategoriaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A2622CategoriaId"});
   GridContainer.addRefreshingVar({rfrVar:"A2598CategoriaLimiteConvite"});
   GridContainer.addRefreshingVar({rfrVar:"A2599CategoriaPrazoLimConvite"});
   GridContainer.addRefreshingVar({rfrVar:"A2585ConviteEmpresaid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[103]);
   GridContainer.addRefreshingVar({rfrVar:"A2636ConviteUsuarioAlt"});
   GridContainer.addRefreshingVar({rfrVar:"A2633ConviteDataInicial"});
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridContainer.addRefreshingVar(this.GXValidFnc[113]);
   GridContainer.addRefreshingVar({rfrVar:"AV121SdtConvite"});
   this.addGridBCProperty("Sdtconvite", ["NumConvite"], this.GXValidFnc[48], "AV121SdtConvite");
   this.addGridBCProperty("Sdtconvite", ["DataInicial"], this.GXValidFnc[49], "AV121SdtConvite");
   this.addGridBCProperty("Sdtconvite", ["DataFinal"], this.GXValidFnc[50], "AV121SdtConvite");
   this.addGridBCProperty("Sdtconvite", ["TitularId"], this.GXValidFnc[51], "AV121SdtConvite");
   this.addGridBCProperty("Sdtconvite", ["TitularNome"], this.GXValidFnc[52], "AV121SdtConvite");
   this.addGridBCProperty("Sdtconvite", ["QtdePessoas"], this.GXValidFnc[53], "AV121SdtConvite");
   this.addGridBCProperty("Sdtconvite", ["SnConvidado"], this.GXValidFnc[54], "AV121SdtConvite");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaconviteliberado());
