/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:37:7.46
*/
gx.evt.autoSkip = false;
gx.define('hpromptordemservico', false, function () {
   this.ServerClass =  "hpromptordemservico" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV22OrdemServicoIdOut=gx.fn.getIntegerValue("vORDEMSERVICOIDOUT",'.') ;
   };
   this.Valid_Ordemservicotipoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(63) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOID", gx.fn.currentGridRowImpl(63));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(63) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(63));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresapessoasempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(63) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESAPESSOASEMPRESAID", gx.fn.currentGridRowImpl(63));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotipoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(63) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOEMPRESAID", gx.fn.currentGridRowImpl(63));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotipoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(63) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOID", gx.fn.currentGridRowImpl(63));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ordemservicotipoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(63) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ORDEMSERVICOTIPOEMPRESAID", gx.fn.currentGridRowImpl(63));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e181ek2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111ek2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121ek2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131ek2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141ek2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151ek2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e161ek2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e201ek2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e221ek2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.e231ek1_client=function()
   {
      this.executeServerEvent("PROMPT_ORDEMSERVICOCLIENTEID.GXPROMPT", true, null, false, true);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,26,29,31,34,36,38,40,43,45,46,47,50,52,53,56,58,64,65,66,67,68,69,70,71,72,73,74,80,83,85,87,89,91,92,93,94,95,96];
   this.GXLastCtrlId =96;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",63,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hpromptordemservico",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8792,64,"ORDEMSERVICOID","","","OrdemServicoId","int",0,"px",9,9,"right",null,[],8792,"OrdemServicoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8717,65,"ORDEMSERVICOFILIALID","","","OrdemServicoFilialId","int",0,"px",7,7,"right",null,[],8717,"OrdemServicoFilialId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8682,66,"ORDEMSERVICOTIPOID","","","OrdemServicoTipoId","int",0,"px",2,2,"right",null,[],8682,"OrdemServicoTipoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8675,67,"ORDEMSERVICOTIPODESCRICAO","","","OrdemServicoTipoDescricao","svchar",0,"px",30,30,"left",null,[],8675,"OrdemServicoTipoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(69,68,"PESSOAID","","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(71,69,"PESSOAFANTASIA","","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8718,70,"ORDEMSERVICODATHORAEMISSAO","","","OrdemServicoDatHoraEmissao","dtime",0,"px",16,16,"right",null,[],8718,"OrdemServicoDatHoraEmissao",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8719,71,"ORDEMSERVICODATAHORAFECHAMENTO","","","OrdemServicoDataHoraFechamento","dtime",0,"px",16,16,"right",null,[],8719,"OrdemServicoDataHoraFechamento",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8791,72,"ORDEMSERVICOEMPRESAID","Empresa Da Ordem de Serviço","","OrdemServicoEmpresaId","char",0,"px",10,10,"left",null,[],8791,"OrdemServicoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(227,73,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8681,74,"ORDEMSERVICOTIPOEMPRESAID","Empresa do Tipo","","OrdemServicoTipoEmpresaid","char",0,"px",10,10,"left",null,[],8681,"OrdemServicoTipoEmpresaid",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE6",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSERVICOCODIGO",gxz:"ZV19ServicoCodigo",gxold:"OV19ServicoCodigo",gxvar:"AV19ServicoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ServicoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19ServicoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSERVICOCODIGO",gx.O.AV19ServicoCodigo,0)},c2v:function(){gx.O.AV19ServicoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSERVICOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDCARACTERES",gxz:"ZV35QtdCaracteres",gxold:"OV35QtdCaracteres",gxvar:"AV35QtdCaracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35QtdCaracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35QtdCaracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDCARACTERES",gx.O.AV35QtdCaracteres,0)},c2v:function(){gx.O.AV35QtdCaracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDCARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={fld:"TABLE11",grid:0};
   GXValidFnc[22]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICODATAEMISSAOINI",gxz:"ZV23OrdemServicoDataEmissaoIni",gxold:"OV23OrdemServicoDataEmissaoIni",gxvar:"AV23OrdemServicoDataEmissaoIni",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23OrdemServicoDataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23OrdemServicoDataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICODATAEMISSAOINI",gx.O.AV23OrdemServicoDataEmissaoIni,0)},c2v:function(){gx.O.AV23OrdemServicoDataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vORDEMSERVICODATAEMISSAOINI")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICODATAEMISSAOFIM",gxz:"ZV24OrdemServicoDataEmissaoFim",gxold:"OV24OrdemServicoDataEmissaoFim",gxvar:"AV24OrdemServicoDataEmissaoFim",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24OrdemServicoDataEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24OrdemServicoDataEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICODATAEMISSAOFIM",gx.O.AV24OrdemServicoDataEmissaoFim,0)},c2v:function(){gx.O.AV24OrdemServicoDataEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vORDEMSERVICODATAEMISSAOFIM")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={fld:"TABLE12",grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICODATAFECHAMENTOINI",gxz:"ZV25OrdemServicoDataFechamentoIni",gxold:"OV25OrdemServicoDataFechamentoIni",gxvar:"AV25OrdemServicoDataFechamentoIni",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25OrdemServicoDataFechamentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25OrdemServicoDataFechamentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICODATAFECHAMENTOINI",gx.O.AV25OrdemServicoDataFechamentoIni,0)},c2v:function(){gx.O.AV25OrdemServicoDataFechamentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vORDEMSERVICODATAFECHAMENTOINI")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICODATAFECHAMENTOFIM",gxz:"ZV26OrdemServicoDataFechamentoFim",gxold:"OV26OrdemServicoDataFechamentoFim",gxvar:"AV26OrdemServicoDataFechamentoFim",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26OrdemServicoDataFechamentoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26OrdemServicoDataFechamentoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICODATAFECHAMENTOFIM",gx.O.AV26OrdemServicoDataFechamentoFim,0)},c2v:function(){gx.O.AV26OrdemServicoDataFechamentoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vORDEMSERVICODATAFECHAMENTOFIM")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLE9",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOCLIENTEID",gxz:"ZV27OrdemServicoClienteId",gxold:"OV27OrdemServicoClienteId",gxvar:"AV27OrdemServicoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27OrdemServicoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27OrdemServicoClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOCLIENTEID",gx.O.AV27OrdemServicoClienteId,0)},c2v:function(){gx.O.AV27OrdemServicoClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOCLIENTENOME",gxz:"ZV28OrdemServicoClienteNome",gxold:"OV28OrdemServicoClienteNome",gxvar:"AV28OrdemServicoClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28OrdemServicoClienteNome=Value},v2z:function(Value){gx.O.ZV28OrdemServicoClienteNome=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOCLIENTENOME",gx.O.AV28OrdemServicoClienteNome,0)},c2v:function(){gx.O.AV28OrdemServicoClienteNome=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOCLIENTENOME")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOCLIENTEEMPRESAID",gxz:"ZV32OrdemServicoClienteEmpresaId",gxold:"OV32OrdemServicoClienteEmpresaId",gxvar:"AV32OrdemServicoClienteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32OrdemServicoClienteEmpresaId=Value},v2z:function(Value){gx.O.ZV32OrdemServicoClienteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOCLIENTEEMPRESAID",gx.O.AV32OrdemServicoClienteEmpresaId,0)},c2v:function(){gx.O.AV32OrdemServicoClienteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOCLIENTEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOTIPOID",gxz:"ZV29OrdemServicoTipoId",gxold:"OV29OrdemServicoTipoId",gxvar:"AV29OrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29OrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29OrdemServicoTipoId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOTIPOID",gx.O.AV29OrdemServicoTipoId)},c2v:function(){gx.O.AV29OrdemServicoTipoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOTIPOID",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEMSERVICOTIPOEMPRESAID",gxz:"ZV31OrdemServicoTipoEmpresaId",gxold:"OV31OrdemServicoTipoEmpresaId",gxvar:"AV31OrdemServicoTipoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31OrdemServicoTipoEmpresaId=Value},v2z:function(Value){gx.O.ZV31OrdemServicoTipoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOTIPOEMPRESAID",gx.O.AV31OrdemServicoTipoEmpresaId,0)},c2v:function(){gx.O.AV31OrdemServicoTipoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOTIPOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEMSERVICOSITUACAO",gxz:"ZV30OrdemServicoSituacao",gxold:"OV30OrdemServicoSituacao",gxvar:"AV30OrdemServicoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30OrdemServicoSituacao=Value},v2z:function(Value){gx.O.ZV30OrdemServicoSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDEMSERVICOSITUACAO",gx.O.AV30OrdemServicoSituacao)},c2v:function(){gx.O.AV30OrdemServicoSituacao=this.val()},val:function(){return gx.fn.getControlValue("vORDEMSERVICOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOID",gxz:"Z8792OrdemServicoId",gxold:"O8792OrdemServicoId",gxvar:"A8792OrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8792OrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8792OrdemServicoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOID",row || gx.fn.currentGridRowImpl(63),gx.O.A8792OrdemServicoId,0)},c2v:function(){gx.O.A8792OrdemServicoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOID",row || gx.fn.currentGridRowImpl(63),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFILIALID",gxz:"Z8717OrdemServicoFilialId",gxold:"O8717OrdemServicoFilialId",gxvar:"A8717OrdemServicoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8717OrdemServicoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8717OrdemServicoFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOFILIALID",row || gx.fn.currentGridRowImpl(63),gx.O.A8717OrdemServicoFilialId,0)},c2v:function(){gx.O.A8717OrdemServicoFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOFILIALID",row || gx.fn.currentGridRowImpl(63),'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:this.Valid_Ordemservicotipoid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOID",gxz:"Z8682OrdemServicoTipoId",gxold:"O8682OrdemServicoTipoId",gxvar:"A8682OrdemServicoTipoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8682OrdemServicoTipoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8682OrdemServicoTipoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOTIPOID",row || gx.fn.currentGridRowImpl(63),gx.O.A8682OrdemServicoTipoId,0)},c2v:function(){gx.O.A8682OrdemServicoTipoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ORDEMSERVICOTIPOID",row || gx.fn.currentGridRowImpl(63),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPODESCRICAO",gxz:"Z8675OrdemServicoTipoDescricao",gxold:"O8675OrdemServicoTipoDescricao",gxvar:"A8675OrdemServicoTipoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8675OrdemServicoTipoDescricao=Value},v2z:function(Value){gx.O.Z8675OrdemServicoTipoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOTIPODESCRICAO",row || gx.fn.currentGridRowImpl(63),gx.O.A8675OrdemServicoTipoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8675OrdemServicoTipoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOTIPODESCRICAO",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(63),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(63),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(63),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICODATHORAEMISSAO",gxz:"Z8718OrdemServicoDatHoraEmissao",gxold:"O8718OrdemServicoDatHoraEmissao",gxvar:"A8718OrdemServicoDatHoraEmissao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8718OrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8718OrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICODATHORAEMISSAO",row || gx.fn.currentGridRowImpl(63),gx.O.A8718OrdemServicoDatHoraEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8718OrdemServicoDatHoraEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ORDEMSERVICODATHORAEMISSAO",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICODATAHORAFECHAMENTO",gxz:"Z8719OrdemServicoDataHoraFechamento",gxold:"O8719OrdemServicoDataHoraFechamento",gxvar:"A8719OrdemServicoDataHoraFechamento",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8719OrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8719OrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICODATAHORAFECHAMENTO",row || gx.fn.currentGridRowImpl(63),gx.O.A8719OrdemServicoDataHoraFechamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8719OrdemServicoDataHoraFechamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ORDEMSERVICODATAHORAFECHAMENTO",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOEMPRESAID",gxz:"Z8791OrdemServicoEmpresaId",gxold:"O8791OrdemServicoEmpresaId",gxvar:"A8791OrdemServicoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8791OrdemServicoEmpresaId=Value},v2z:function(Value){gx.O.Z8791OrdemServicoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOEMPRESAID",row || gx.fn.currentGridRowImpl(63),gx.O.A8791OrdemServicoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8791OrdemServicoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOEMPRESAID",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:this.Valid_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(63),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:this.Valid_Ordemservicotipoempresaid,isvalid:null,rgrid:[],fld:"ORDEMSERVICOTIPOEMPRESAID",gxz:"Z8681OrdemServicoTipoEmpresaid",gxold:"O8681OrdemServicoTipoEmpresaid",gxvar:"A8681OrdemServicoTipoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8681OrdemServicoTipoEmpresaid=Value},v2z:function(Value){gx.O.Z8681OrdemServicoTipoEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("ORDEMSERVICOTIPOEMPRESAID",row || gx.fn.currentGridRowImpl(63),gx.O.A8681OrdemServicoTipoEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8681OrdemServicoTipoEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("ORDEMSERVICOTIPOEMPRESAID",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TABLE7",grid:0};
   GXValidFnc[83]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[85]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[87]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[89]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[91]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[92]={fld:"JS", format:2,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"PROMPT_ORDEMSERVICOCLIENTEID",grid:0};
   this.AV19ServicoCodigo = 0 ;
   this.ZV19ServicoCodigo = 0 ;
   this.OV19ServicoCodigo = 0 ;
   this.AV35QtdCaracteres = 0 ;
   this.ZV35QtdCaracteres = 0 ;
   this.OV35QtdCaracteres = 0 ;
   this.AV23OrdemServicoDataEmissaoIni = gx.date.nullDate() ;
   this.ZV23OrdemServicoDataEmissaoIni = gx.date.nullDate() ;
   this.OV23OrdemServicoDataEmissaoIni = gx.date.nullDate() ;
   this.AV24OrdemServicoDataEmissaoFim = gx.date.nullDate() ;
   this.ZV24OrdemServicoDataEmissaoFim = gx.date.nullDate() ;
   this.OV24OrdemServicoDataEmissaoFim = gx.date.nullDate() ;
   this.AV25OrdemServicoDataFechamentoIni = gx.date.nullDate() ;
   this.ZV25OrdemServicoDataFechamentoIni = gx.date.nullDate() ;
   this.OV25OrdemServicoDataFechamentoIni = gx.date.nullDate() ;
   this.AV26OrdemServicoDataFechamentoFim = gx.date.nullDate() ;
   this.ZV26OrdemServicoDataFechamentoFim = gx.date.nullDate() ;
   this.OV26OrdemServicoDataFechamentoFim = gx.date.nullDate() ;
   this.AV27OrdemServicoClienteId = 0 ;
   this.ZV27OrdemServicoClienteId = 0 ;
   this.OV27OrdemServicoClienteId = 0 ;
   this.AV28OrdemServicoClienteNome = "" ;
   this.ZV28OrdemServicoClienteNome = "" ;
   this.OV28OrdemServicoClienteNome = "" ;
   this.AV32OrdemServicoClienteEmpresaId = "" ;
   this.ZV32OrdemServicoClienteEmpresaId = "" ;
   this.OV32OrdemServicoClienteEmpresaId = "" ;
   this.AV29OrdemServicoTipoId = 0 ;
   this.ZV29OrdemServicoTipoId = 0 ;
   this.OV29OrdemServicoTipoId = 0 ;
   this.AV31OrdemServicoTipoEmpresaId = "" ;
   this.ZV31OrdemServicoTipoEmpresaId = "" ;
   this.OV31OrdemServicoTipoEmpresaId = "" ;
   this.AV30OrdemServicoSituacao = "" ;
   this.ZV30OrdemServicoSituacao = "" ;
   this.OV30OrdemServicoSituacao = "" ;
   this.Z8792OrdemServicoId = 0 ;
   this.O8792OrdemServicoId = 0 ;
   this.Z8717OrdemServicoFilialId = 0 ;
   this.O8717OrdemServicoFilialId = 0 ;
   this.Z8682OrdemServicoTipoId = 0 ;
   this.O8682OrdemServicoTipoId = 0 ;
   this.Z8675OrdemServicoTipoDescricao = "" ;
   this.O8675OrdemServicoTipoDescricao = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.Z8718OrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.O8718OrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.Z8719OrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.O8719OrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.Z8791OrdemServicoEmpresaId = "" ;
   this.O8791OrdemServicoEmpresaId = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.Z8681OrdemServicoTipoEmpresaid = "" ;
   this.O8681OrdemServicoTipoEmpresaid = "" ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV19ServicoCodigo = 0 ;
   this.AV35QtdCaracteres = 0 ;
   this.AV23OrdemServicoDataEmissaoIni = gx.date.nullDate() ;
   this.AV24OrdemServicoDataEmissaoFim = gx.date.nullDate() ;
   this.AV25OrdemServicoDataFechamentoIni = gx.date.nullDate() ;
   this.AV26OrdemServicoDataFechamentoFim = gx.date.nullDate() ;
   this.AV27OrdemServicoClienteId = 0 ;
   this.AV28OrdemServicoClienteNome = "" ;
   this.AV32OrdemServicoClienteEmpresaId = "" ;
   this.AV29OrdemServicoTipoId = 0 ;
   this.AV31OrdemServicoTipoEmpresaId = "" ;
   this.AV30OrdemServicoSituacao = "" ;
   this.AV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV22OrdemServicoIdOut = 0 ;
   this.A8919OrdemServicoSituacao = "" ;
   this.A8792OrdemServicoId = 0 ;
   this.A8717OrdemServicoFilialId = 0 ;
   this.A8682OrdemServicoTipoId = 0 ;
   this.A8675OrdemServicoTipoDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A8718OrdemServicoDatHoraEmissao = gx.date.nullDate() ;
   this.A8719OrdemServicoDataHoraFechamento = gx.date.nullDate() ;
   this.A8791OrdemServicoEmpresaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A8681OrdemServicoTipoEmpresaid = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e181ek2_client": ["ENTER", true] ,"e111ek2_client": ["'GXM_FIRST'", true] ,"e121ek2_client": ["'GXM_PREVIOUS'", true] ,"e131ek2_client": ["'GXM_NEXT'", true] ,"e141ek2_client": ["'GXM_LAST'", true] ,"e151ek2_client": ["'PROCURAR'", true] ,"e161ek2_client": ["'FECHAR'", true] ,"e201ek2_client": ["'ATUALIZAPAGINA'", true] ,"e221ek2_client": ["CANCEL", true] ,"e231ek1_client": ["PROMPT_ORDEMSERVICOCLIENTEID.GXPROMPT", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV23OrdemServicoDataEmissaoIni',fld:'vORDEMSERVICODATAEMISSAOINI'},{av:'AV24OrdemServicoDataEmissaoFim',fld:'vORDEMSERVICODATAEMISSAOFIM'},{av:'AV25OrdemServicoDataFechamentoIni',fld:'vORDEMSERVICODATAFECHAMENTOINI'},{av:'AV26OrdemServicoDataFechamentoFim',fld:'vORDEMSERVICODATAFECHAMENTOFIM'},{av:'AV27OrdemServicoClienteId',fld:'vORDEMSERVICOCLIENTEID'},{av:'AV29OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV30OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'ORDEMSERVICOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOID","Title")',ctrl:'ORDEMSERVICOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ORDEMSERVICOFILIALID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOFILIALID","Title")',ctrl:'ORDEMSERVICOFILIALID',prop:'Title'},{ctrl:'ORDEMSERVICOTIPOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOTIPOID","Title")',ctrl:'ORDEMSERVICOTIPOID',prop:'Title'},{ctrl:'PESSOAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAID","Title")',ctrl:'PESSOAID',prop:'Title'},{ctrl:'ORDEMSERVICODATHORAEMISSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICODATHORAEMISSAO","Title")',ctrl:'ORDEMSERVICODATHORAEMISSAO',prop:'Title'},{ctrl:'ORDEMSERVICODATAHORAFECHAMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICODATAHORAFECHAMENTO","Title")',ctrl:'ORDEMSERVICODATAHORAFECHAMENTO',prop:'Title'},{ctrl:'PESSOAFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAFANTASIA","Title")',ctrl:'PESSOAFANTASIA',prop:'Title'},{ctrl:'ORDEMSERVICOTIPODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOTIPODESCRICAO","Title")',ctrl:'ORDEMSERVICOTIPODESCRICAO',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8792OrdemServicoId',fld:'ORDEMSERVICOID'}],[{av:'AV22OrdemServicoIdOut',fld:'vORDEMSERVICOIDOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV23OrdemServicoDataEmissaoIni',fld:'vORDEMSERVICODATAEMISSAOINI'},{av:'AV24OrdemServicoDataEmissaoFim',fld:'vORDEMSERVICODATAEMISSAOFIM'},{av:'AV25OrdemServicoDataFechamentoIni',fld:'vORDEMSERVICODATAFECHAMENTOINI'},{av:'AV26OrdemServicoDataFechamentoFim',fld:'vORDEMSERVICODATAFECHAMENTOFIM'},{av:'AV27OrdemServicoClienteId',fld:'vORDEMSERVICOCLIENTEID'},{av:'AV29OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV30OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV23OrdemServicoDataEmissaoIni',fld:'vORDEMSERVICODATAEMISSAOINI'},{av:'AV24OrdemServicoDataEmissaoFim',fld:'vORDEMSERVICODATAEMISSAOFIM'},{av:'AV25OrdemServicoDataFechamentoIni',fld:'vORDEMSERVICODATAFECHAMENTOINI'},{av:'AV26OrdemServicoDataFechamentoFim',fld:'vORDEMSERVICODATAFECHAMENTOFIM'},{av:'AV27OrdemServicoClienteId',fld:'vORDEMSERVICOCLIENTEID'},{av:'AV29OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV30OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV23OrdemServicoDataEmissaoIni',fld:'vORDEMSERVICODATAEMISSAOINI'},{av:'AV24OrdemServicoDataEmissaoFim',fld:'vORDEMSERVICODATAEMISSAOFIM'},{av:'AV25OrdemServicoDataFechamentoIni',fld:'vORDEMSERVICODATAFECHAMENTOINI'},{av:'AV26OrdemServicoDataFechamentoFim',fld:'vORDEMSERVICODATAFECHAMENTOFIM'},{av:'AV27OrdemServicoClienteId',fld:'vORDEMSERVICOCLIENTEID'},{av:'AV29OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV30OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV23OrdemServicoDataEmissaoIni',fld:'vORDEMSERVICODATAEMISSAOINI'},{av:'AV24OrdemServicoDataEmissaoFim',fld:'vORDEMSERVICODATAEMISSAOFIM'},{av:'AV25OrdemServicoDataFechamentoIni',fld:'vORDEMSERVICODATAFECHAMENTOINI'},{av:'AV26OrdemServicoDataFechamentoFim',fld:'vORDEMSERVICODATAFECHAMENTOFIM'},{av:'AV27OrdemServicoClienteId',fld:'vORDEMSERVICOCLIENTEID'},{av:'AV29OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV30OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV23OrdemServicoDataEmissaoIni',fld:'vORDEMSERVICODATAEMISSAOINI'},{av:'AV24OrdemServicoDataEmissaoFim',fld:'vORDEMSERVICODATAEMISSAOFIM'},{av:'AV25OrdemServicoDataFechamentoIni',fld:'vORDEMSERVICODATAFECHAMENTOINI'},{av:'AV26OrdemServicoDataFechamentoFim',fld:'vORDEMSERVICODATAFECHAMENTOFIM'},{av:'AV27OrdemServicoClienteId',fld:'vORDEMSERVICOCLIENTEID'},{av:'AV29OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV30OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV38snPesquisar',fld:'vSNPESQUISAR'},{av:'AV23OrdemServicoDataEmissaoIni',fld:'vORDEMSERVICODATAEMISSAOINI'},{av:'AV24OrdemServicoDataEmissaoFim',fld:'vORDEMSERVICODATAEMISSAOFIM'},{av:'AV25OrdemServicoDataFechamentoIni',fld:'vORDEMSERVICODATAFECHAMENTOINI'},{av:'AV26OrdemServicoDataFechamentoFim',fld:'vORDEMSERVICODATAFECHAMENTOFIM'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV22OrdemServicoIdOut',fld:'vORDEMSERVICOIDOUT'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV23OrdemServicoDataEmissaoIni',fld:'vORDEMSERVICODATAEMISSAOINI'},{av:'AV24OrdemServicoDataEmissaoFim',fld:'vORDEMSERVICODATAEMISSAOFIM'},{av:'AV25OrdemServicoDataFechamentoIni',fld:'vORDEMSERVICODATAFECHAMENTOINI'},{av:'AV26OrdemServicoDataFechamentoFim',fld:'vORDEMSERVICODATAFECHAMENTOFIM'},{av:'AV27OrdemServicoClienteId',fld:'vORDEMSERVICOCLIENTEID'},{av:'AV29OrdemServicoTipoId',fld:'vORDEMSERVICOTIPOID'},{av:'AV30OrdemServicoSituacao',fld:'vORDEMSERVICOSITUACAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setPrompt("PROMPT_ORDEMSERVICOCLIENTEID", [45]);
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV22OrdemServicoIdOut", "vORDEMSERVICOIDOUT", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[38]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpromptordemservico());
