/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:35:30.12
*/
gx.evt.autoSkip = false;
gx.define('henvionotas', false, function () {
   this.ServerClass =  "henvionotas" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'CANCELAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV43EnvioDeNotas=gx.fn.getControlValue("vENVIODENOTAS") ;
      this.AV33TipoAceite=gx.fn.getControlValue("vTIPOACEITE") ;
   };
   this.Validv_Fornecedor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORNECEDOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Departamentocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPARTAMENTOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Departamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDEPARTAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Usuarioinc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSUARIOINC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vFORNECEDOR","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATAEMISSAOINICIAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATAEMISSAOFINAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATAVENCIMENTOINICIAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vDATAVENCIMENTOFINAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vNUMEROPROCESSO","Enabled", 1 );
      gx.fn.setCtrlProperty("vANOPROCESSO","Enabled", 1 );
      gx.fn.setCtrlProperty("vUSUARIOINC","Enabled", 1 );
      gx.fn.setCtrlProperty("vDEPARTAMENTOCODIGO","Enabled", 1 );
   };
   this.s142_client=function()
   {
      gx.fn.setCtrlProperty("vFORNECEDOR","Enabled", 0 );
      gx.fn.setCtrlProperty("vDATAEMISSAOINICIAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vDATAEMISSAOFINAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vDATAVENCIMENTOINICIAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vDATAVENCIMENTOFINAL","Enabled", 0 );
      gx.fn.setCtrlProperty("vNUMEROPROCESSO","Enabled", 0 );
      gx.fn.setCtrlProperty("vANOPROCESSO","Enabled", 0 );
      gx.fn.setCtrlProperty("vUSUARIOINC","Enabled", 0 );
      gx.fn.setCtrlProperty("vDEPARTAMENTOCODIGO","Enabled", 0 );
   };
   this.e11hi2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13hi2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14hi2_client=function()
   {
      this.executeServerEvent("'GRAVAACEITE'", false, null, false, false);
   };
   this.e12hi2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15hi2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e16hi2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e20hi2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,18,20,21,23,26,28,29,33,35,38,40,42,44,48,50,53,55,57,62,64,67,69,71,76,78,79,83,98,100,101,102,103,104,105,106,107,108,109,110,111,112,113,119,122,123,124,126,129,130,132,133,134,135];
   this.GXLastCtrlId =135;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",99,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"henvionotas",[],false,1,true,true,0,true,false,false,"CollEnvioDeNotas.EnvioDeNotasItem",0,"px","Novo registro",true,false,true,null,null,false,"AV43EnvioDeNotas",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV12S",100,"CTLCONTAPAGRECNUMERO","Conta     ","","ContaPagRecNumero","int",58,"px",8,8,"right",null,[],"GXV12S","GXV12S",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV12T",101,"CTLCONTAPAGRECCLIFORFANTASIA","Fornecedor              ","","ContaPagRecCliForFantasia","svchar",310,"px",60,60,"left",null,[],"GXV12T","GXV12T",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV12U",102,"CTLCONTAPAGRECDOCUMENTO","Documento","","ContaPagRecDocumento","svchar",110,"px",20,20,"left",null,[],"GXV12U","GXV12U",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV12V",103,"CTLCONTAPAGRECDTEMISSAO","Emissão","","ContaPagRecDtEmissao","date",64,"px",10,10,"right",null,[],"GXV12V","GXV12V",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV12W",104,"CTLCONTAPAGRECDTVENCIMENTO","Vencimento","","ContaPagRecDtVencimento","date",65,"px",10,10,"right",null,[],"GXV12W","GXV12W",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV12X",105,"CTLCONTAPAGRECPROCESSOANO","Nº Processo","","ContaPagRecProcessoAno","char",80,"px",14,14,"left",null,[],"GXV12X","GXV12X",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Valor",106,"vVALOR","Valor Atual","","Valor","decimal",0,"px",18,18,"right",null,[],"Valor","Valor",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addCheckBox("GXV12Z",107,"CTLCONTAPAGRECSNMARCADO","Enviar","","ContaPagRecSNMarcado","char","S","N",null,true,false,0,"px","GridColumnImage");
   GridContainer.addSingleLineEdit("GXV130",108,"CTLCONTAPAGRECSITUACAO","Conta Pag Rec Situacao","","ContaPagRecSituacao","char",0,"px",1,1,"left",null,[],"GXV130","GXV130",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV131",109,"CTLCONTAPAGRECNOPROCESSO","Conta Pag Rec No Processo","","ContaPagRecNoProcesso","int",0,"px",8,8,"right",null,[],"GXV131","GXV131",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV132",110,"CTLCONTAPAGRECANOPROCESSO","Conta Pag Rec Ano Processo","","ContaPagRecAnoProcesso","int",0,"px",4,4,"right",null,[],"GXV132","GXV132",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV133",111,"CTLCONTAPAGRECCLIFORID","","","ContaPagrecCliForId","int",0,"px",7,7,"right",null,[],"GXV133","GXV133",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV134",112,"CTLCONTAPAGRECVALOR","Valor","","ContaPagRecValor","decimal",142,"px",22,22,"right",null,[],"GXV134","GXV134",false,2,false,false,"ApenasLeitura",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE11",grid:0};
   GXValidFnc[5]={fld:"TABLE17",grid:0};
   GXValidFnc[8]={fld:"TABLE13",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fornecedor,isvalid:null,rgrid:[],fld:"vFORNECEDOR",gxz:"ZV58Fornecedor",gxold:"OV58Fornecedor",gxvar:"AV58Fornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58Fornecedor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58Fornecedor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORNECEDOR",gx.O.AV58Fornecedor,0)},c2v:function(){gx.O.AV58Fornecedor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORNECEDOR",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORNECEDORNOME",gxz:"ZV59FornecedorNome",gxold:"OV59FornecedorNome",gxvar:"AV59FornecedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59FornecedorNome=Value},v2z:function(Value){gx.O.ZV59FornecedorNome=Value},v2c:function(){gx.fn.setControlValue("vFORNECEDORNOME",gx.O.AV59FornecedorNome,0)},c2v:function(){gx.O.AV59FornecedorNome=this.val()},val:function(){return gx.fn.getControlValue("vFORNECEDORNOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE2",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Departamentocodigo,isvalid:null,rgrid:[],fld:"vDEPARTAMENTOCODIGO",gxz:"ZV77DepartamentoCodigo",gxold:"OV77DepartamentoCodigo",gxvar:"AV77DepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77DepartamentoCodigo=Value},v2z:function(Value){gx.O.ZV77DepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOCODIGO",gx.O.AV77DepartamentoCodigo,0)},c2v:function(){gx.O.AV77DepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPARTAMENTONOME",gxz:"ZV80DepartamentoNome",gxold:"OV80DepartamentoNome",gxvar:"AV80DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80DepartamentoNome=Value},v2z:function(Value){gx.O.ZV80DepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTONOME",gx.O.AV80DepartamentoNome,0)},c2v:function(){gx.O.AV80DepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLE16",grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOINICIAL",gxz:"ZV54DataEmissaoInicial",gxold:"OV54DataEmissaoInicial",gxvar:"AV54DataEmissaoInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54DataEmissaoInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV54DataEmissaoInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOINICIAL",gx.O.AV54DataEmissaoInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV54DataEmissaoInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOFINAL",gxz:"ZV55DataEmissaoFinal",gxold:"OV55DataEmissaoFinal",gxvar:"AV55DataEmissaoFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55DataEmissaoFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV55DataEmissaoFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOFINAL",gx.O.AV55DataEmissaoFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV55DataEmissaoFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Departamentoempresaid,isvalid:null,rgrid:[],fld:"vDEPARTAMENTOEMPRESAID",gxz:"ZV78DepartamentoEmpresaId",gxold:"OV78DepartamentoEmpresaId",gxvar:"AV78DepartamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78DepartamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV78DepartamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTOEMPRESAID",gx.O.AV78DepartamentoEmpresaId,0)},c2v:function(){gx.O.AV78DepartamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[50]={fld:"TABLE15",grid:0};
   GXValidFnc[53]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAVENCIMENTOINICIAL",gxz:"ZV56DataVencimentoInicial",gxold:"OV56DataVencimentoInicial",gxvar:"AV56DataVencimentoInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56DataVencimentoInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV56DataVencimentoInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAVENCIMENTOINICIAL",gx.O.AV56DataVencimentoInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV56DataVencimentoInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAVENCIMENTOINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[55]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAVENCIMENTOFINAL",gxz:"ZV57DataVencimentoFinal",gxold:"OV57DataVencimentoFinal",gxvar:"AV57DataVencimentoFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57DataVencimentoFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV57DataVencimentoFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAVENCIMENTOFINAL",gx.O.AV57DataVencimentoFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV57DataVencimentoFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAVENCIMENTOFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[62]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[64]={fld:"TABLE14",grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMEROPROCESSO",gxz:"ZV60NumeroProcesso",gxold:"OV60NumeroProcesso",gxvar:"AV60NumeroProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60NumeroProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV60NumeroProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMEROPROCESSO",gx.O.AV60NumeroProcesso,0)},c2v:function(){gx.O.AV60NumeroProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMEROPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOPROCESSO",gxz:"ZV61AnoProcesso",gxold:"OV61AnoProcesso",gxvar:"AV61AnoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61AnoProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61AnoProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOPROCESSO",gx.O.AV61AnoProcesso,0)},c2v:function(){gx.O.AV61AnoProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Usuarioinc,isvalid:null,rgrid:[],fld:"vUSUARIOINC",gxz:"ZV72UsuarioInc",gxold:"OV72UsuarioInc",gxvar:"AV72UsuarioInc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72UsuarioInc=Value},v2z:function(Value){gx.O.ZV72UsuarioInc=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOINC",gx.O.AV72UsuarioInc,0)},c2v:function(){gx.O.AV72UsuarioInc=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOINC")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIODESCINC",gxz:"ZV73UsuarioDescInc",gxold:"OV73UsuarioDescInc",gxvar:"AV73UsuarioDescInc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73UsuarioDescInc=Value},v2z:function(Value){gx.O.ZV73UsuarioDescInc=Value},v2c:function(){gx.fn.setControlValue("vUSUARIODESCINC",gx.O.AV73UsuarioDescInc,0)},c2v:function(){gx.O.AV73UsuarioDescInc=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIODESCINC")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TABLE1",grid:0};
   GXValidFnc[98]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[100]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECNUMERO",gxz:"ZV94GXV12S",gxold:"OV94GXV12S",gxvar:"GXV12S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12S=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94GXV12S=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(99),gx.O.GXV12S,0)},c2v:function(){gx.O.GXV12S=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(99),'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECCLIFORFANTASIA",gxz:"ZV95GXV12T",gxold:"OV95GXV12T",gxvar:"GXV12T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12T=Value},v2z:function(Value){gx.O.ZV95GXV12T=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(99),gx.O.GXV12T,0)},c2v:function(){gx.O.GXV12T=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPAGRECCLIFORFANTASIA",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn};
   GXValidFnc[102]={lvl:2,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECDOCUMENTO",gxz:"ZV96GXV12U",gxold:"OV96GXV12U",gxvar:"GXV12U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12U=Value},v2z:function(Value){gx.O.ZV96GXV12U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(99),gx.O.GXV12U,0)},c2v:function(){gx.O.GXV12U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn};
   GXValidFnc[103]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECDTEMISSAO",gxz:"ZV97GXV12V",gxold:"OV97GXV12V",gxvar:"GXV12V",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12V=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV97GXV12V=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(99),gx.O.GXV12V,0)},c2v:function(){gx.O.GXV12V=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLCONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn};
   GXValidFnc[104]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECDTVENCIMENTO",gxz:"ZV98GXV12W",gxold:"OV98GXV12W",gxvar:"GXV12W",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12W=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV98GXV12W=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(99),gx.O.GXV12W,0)},c2v:function(){gx.O.GXV12W=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLCONTAPAGRECDTVENCIMENTO",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn};
   GXValidFnc[105]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECPROCESSOANO",gxz:"ZV99GXV12X",gxold:"OV99GXV12X",gxvar:"GXV12X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12X=Value},v2z:function(Value){gx.O.ZV99GXV12X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECPROCESSOANO",row || gx.fn.currentGridRowImpl(99),gx.O.GXV12X,0)},c2v:function(){gx.O.GXV12X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPAGRECPROCESSOANO",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn};
   GXValidFnc[106]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALOR",gxz:"ZV53Valor",gxold:"OV53Valor",gxvar:"AV53Valor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV53Valor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV53Valor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALOR",row || gx.fn.currentGridRowImpl(99),gx.O.AV53Valor,2,',')},c2v:function(){gx.O.AV53Valor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALOR",row || gx.fn.currentGridRowImpl(99),'.',',')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECSNMARCADO",gxz:"ZV100GXV12Z",gxold:"OV100GXV12Z",gxvar:"GXV12Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV12Z=Value},v2z:function(Value){gx.O.ZV100GXV12Z=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLCONTAPAGRECSNMARCADO",row || gx.fn.currentGridRowImpl(99),gx.O.GXV12Z,"S")},c2v:function(){gx.O.GXV12Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPAGRECSNMARCADO",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[108]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECSITUACAO",gxz:"ZV101GXV130",gxold:"OV101GXV130",gxvar:"GXV130",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV130=Value},v2z:function(Value){gx.O.ZV101GXV130=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(99),gx.O.GXV130,0)},c2v:function(){gx.O.GXV130=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(99))},nac:gx.falseFn};
   GXValidFnc[109]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECNOPROCESSO",gxz:"ZV102GXV131",gxold:"OV102GXV131",gxvar:"GXV131",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV131=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV102GXV131=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECNOPROCESSO",row || gx.fn.currentGridRowImpl(99),gx.O.GXV131,0)},c2v:function(){gx.O.GXV131=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONTAPAGRECNOPROCESSO",row || gx.fn.currentGridRowImpl(99),'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECANOPROCESSO",gxz:"ZV103GXV132",gxold:"OV103GXV132",gxvar:"GXV132",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV132=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103GXV132=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECANOPROCESSO",row || gx.fn.currentGridRowImpl(99),gx.O.GXV132,0)},c2v:function(){gx.O.GXV132=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONTAPAGRECANOPROCESSO",row || gx.fn.currentGridRowImpl(99),'.')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECCLIFORID",gxz:"ZV104GXV133",gxold:"OV104GXV133",gxvar:"GXV133",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV133=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV104GXV133=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(99),gx.O.GXV133,0)},c2v:function(){gx.O.GXV133=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCONTAPAGRECCLIFORID",row || gx.fn.currentGridRowImpl(99),'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:99,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTAPAGRECVALOR",gxz:"ZV105GXV134",gxold:"OV105GXV134",gxvar:"GXV134",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV134=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV105GXV134=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLCONTAPAGRECVALOR",row || gx.fn.currentGridRowImpl(99),gx.O.GXV134,2,',')},c2v:function(){gx.O.GXV134=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLCONTAPAGRECVALOR",row || gx.fn.currentGridRowImpl(99),'.',',')},nac:gx.falseFn};
   GXValidFnc[113]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[119]={fld:"TABLE12",grid:0};
   GXValidFnc[122]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV86AcessoSistemaSequencia",gxold:"OV86AcessoSistemaSequencia",gxvar:"AV86AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV86AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV86AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"JS", format:2,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPTELA",gxz:"ZV71TpTela",gxold:"OV71TpTela",gxvar:"AV71TpTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71TpTela=Value},v2z:function(Value){gx.O.ZV71TpTela=Value},v2c:function(){gx.fn.setControlValue("vTPTELA",gx.O.AV71TpTela,0)},c2v:function(){gx.O.AV71TpTela=this.val()},val:function(){return gx.fn.getControlValue("vTPTELA")},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV64EmpresaPessoasEmpresaId",gxold:"OV64EmpresaPessoasEmpresaId",gxvar:"AV64EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV64EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV64EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV64EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV88QtdeCar",gxold:"OV88QtdeCar",gxvar:"AV88QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV88QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV88QtdeCar,0)},c2v:function(){gx.O.AV88QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARPES",gxz:"ZV89QtdeCarPes",gxold:"OV89QtdeCarPes",gxvar:"AV89QtdeCarPes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89QtdeCarPes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89QtdeCarPes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARPES",gx.O.AV89QtdeCarPes,0)},c2v:function(){gx.O.AV89QtdeCarPes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARPES",'.')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"BTNHELP",grid:0};
   GXValidFnc[133]={fld:"PROMPT_FORNECEDOR",grid:0};
   GXValidFnc[134]={fld:"PROMPT_DEPARTAMENTOCODIGO",grid:0};
   GXValidFnc[135]={fld:"PROMPT_USUARIOINC",grid:0};
   this.AV58Fornecedor = 0 ;
   this.ZV58Fornecedor = 0 ;
   this.OV58Fornecedor = 0 ;
   this.AV59FornecedorNome = "" ;
   this.ZV59FornecedorNome = "" ;
   this.OV59FornecedorNome = "" ;
   this.AV77DepartamentoCodigo = "" ;
   this.ZV77DepartamentoCodigo = "" ;
   this.OV77DepartamentoCodigo = "" ;
   this.AV80DepartamentoNome = "" ;
   this.ZV80DepartamentoNome = "" ;
   this.OV80DepartamentoNome = "" ;
   this.AV54DataEmissaoInicial = gx.date.nullDate() ;
   this.ZV54DataEmissaoInicial = gx.date.nullDate() ;
   this.OV54DataEmissaoInicial = gx.date.nullDate() ;
   this.AV55DataEmissaoFinal = gx.date.nullDate() ;
   this.ZV55DataEmissaoFinal = gx.date.nullDate() ;
   this.OV55DataEmissaoFinal = gx.date.nullDate() ;
   this.AV78DepartamentoEmpresaId = "" ;
   this.ZV78DepartamentoEmpresaId = "" ;
   this.OV78DepartamentoEmpresaId = "" ;
   this.AV56DataVencimentoInicial = gx.date.nullDate() ;
   this.ZV56DataVencimentoInicial = gx.date.nullDate() ;
   this.OV56DataVencimentoInicial = gx.date.nullDate() ;
   this.AV57DataVencimentoFinal = gx.date.nullDate() ;
   this.ZV57DataVencimentoFinal = gx.date.nullDate() ;
   this.OV57DataVencimentoFinal = gx.date.nullDate() ;
   this.AV60NumeroProcesso = 0 ;
   this.ZV60NumeroProcesso = 0 ;
   this.OV60NumeroProcesso = 0 ;
   this.AV61AnoProcesso = 0 ;
   this.ZV61AnoProcesso = 0 ;
   this.OV61AnoProcesso = 0 ;
   this.AV72UsuarioInc = "" ;
   this.ZV72UsuarioInc = "" ;
   this.OV72UsuarioInc = "" ;
   this.AV73UsuarioDescInc = "" ;
   this.ZV73UsuarioDescInc = "" ;
   this.OV73UsuarioDescInc = "" ;
   this.ZV94GXV12S = 0 ;
   this.OV94GXV12S = 0 ;
   this.ZV95GXV12T = "" ;
   this.OV95GXV12T = "" ;
   this.ZV96GXV12U = "" ;
   this.OV96GXV12U = "" ;
   this.ZV97GXV12V = gx.date.nullDate() ;
   this.OV97GXV12V = gx.date.nullDate() ;
   this.ZV98GXV12W = gx.date.nullDate() ;
   this.OV98GXV12W = gx.date.nullDate() ;
   this.ZV99GXV12X = "" ;
   this.OV99GXV12X = "" ;
   this.ZV53Valor = 0 ;
   this.OV53Valor = 0 ;
   this.ZV100GXV12Z = "" ;
   this.OV100GXV12Z = "" ;
   this.ZV101GXV130 = "" ;
   this.OV101GXV130 = "" ;
   this.ZV102GXV131 = 0 ;
   this.OV102GXV131 = 0 ;
   this.ZV103GXV132 = 0 ;
   this.OV103GXV132 = 0 ;
   this.ZV104GXV133 = 0 ;
   this.OV104GXV133 = 0 ;
   this.ZV105GXV134 = 0 ;
   this.OV105GXV134 = 0 ;
   this.AV86AcessoSistemaSequencia = 0 ;
   this.ZV86AcessoSistemaSequencia = 0 ;
   this.OV86AcessoSistemaSequencia = 0 ;
   this.AV71TpTela = "" ;
   this.ZV71TpTela = "" ;
   this.OV71TpTela = "" ;
   this.AV64EmpresaPessoasEmpresaId = "" ;
   this.ZV64EmpresaPessoasEmpresaId = "" ;
   this.OV64EmpresaPessoasEmpresaId = "" ;
   this.AV88QtdeCar = 0 ;
   this.ZV88QtdeCar = 0 ;
   this.OV88QtdeCar = 0 ;
   this.AV89QtdeCarPes = 0 ;
   this.ZV89QtdeCarPes = 0 ;
   this.OV89QtdeCarPes = 0 ;
   this.AV58Fornecedor = 0 ;
   this.AV59FornecedorNome = "" ;
   this.AV77DepartamentoCodigo = "" ;
   this.AV80DepartamentoNome = "" ;
   this.AV54DataEmissaoInicial = gx.date.nullDate() ;
   this.AV55DataEmissaoFinal = gx.date.nullDate() ;
   this.AV78DepartamentoEmpresaId = "" ;
   this.AV56DataVencimentoInicial = gx.date.nullDate() ;
   this.AV57DataVencimentoFinal = gx.date.nullDate() ;
   this.AV60NumeroProcesso = 0 ;
   this.AV61AnoProcesso = 0 ;
   this.AV72UsuarioInc = "" ;
   this.AV73UsuarioDescInc = "" ;
   this.AV86AcessoSistemaSequencia = 0 ;
   this.AV71TpTela = "" ;
   this.AV64EmpresaPessoasEmpresaId = "" ;
   this.AV88QtdeCar = 0 ;
   this.AV89QtdeCarPes = 0 ;
   this.AV33TipoAceite = "" ;
   this.GXV12S = 0 ;
   this.GXV12T = "" ;
   this.GXV12U = "" ;
   this.GXV12V = gx.date.nullDate() ;
   this.GXV12W = gx.date.nullDate() ;
   this.GXV12X = "" ;
   this.AV53Valor = 0 ;
   this.GXV12Z = "" ;
   this.GXV130 = "" ;
   this.GXV131 = 0 ;
   this.GXV132 = 0 ;
   this.GXV133 = 0 ;
   this.GXV134 = 0 ;
   this.A2458ContaPagRecUsuarioInc = "" ;
   this.A2005ContaPagRecAnoProcesso = 0 ;
   this.A1966ContaPagRecNoProcesso = 0 ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A2694ContaPagRecDataEnvio = gx.date.nullDate() ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A2100ContaPagRecConvenioDesc = "" ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1687ContaPagRecConvenioEmpId = "" ;
   this.A1688ContaPagRecConvenioId = 0 ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2249DepartamentoNome = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A446PessoaFornecedor = "" ;
   this.AV43EnvioDeNotas = [ ] ;
   this.Events = {"e11hi2_client": ["'FECHAR'", true] ,"e13hi2_client": ["ENTER", true] ,"e14hi2_client": ["'GRAVAACEITE'", true] ,"e12hi2_client": ["'CANCELAR'", true] ,"e15hi2_client": ["'DESMARCARTODOS'", true] ,"e16hi2_client": ["'MARCARTODOS'", true] ,"e20hi2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true},{av:'AV71TpTela',fld:'vTPTELA'}],[{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFORNECEDOR","Enabled")',ctrl:'vFORNECEDOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOINICIAL","Enabled")',ctrl:'vDATAEMISSAOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOFINAL","Enabled")',ctrl:'vDATAEMISSAOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOINICIAL","Enabled")',ctrl:'vDATAVENCIMENTOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOFINAL","Enabled")',ctrl:'vDATAVENCIMENTOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMEROPROCESSO","Enabled")',ctrl:'vNUMEROPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOPROCESSO","Enabled")',ctrl:'vANOPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSUARIOINC","Enabled")',ctrl:'vUSUARIOINC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDEPARTAMENTOCODIGO","Enabled")',ctrl:'vDEPARTAMENTOCODIGO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV86AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23TpErro',fld:'vTPERRO'},{av:'AV29Data',fld:'vDATA'},{av:'AV58Fornecedor',fld:'vFORNECEDOR'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV64EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'AV54DataEmissaoInicial',fld:'vDATAEMISSAOINICIAL'},{av:'AV55DataEmissaoFinal',fld:'vDATAEMISSAOFINAL'},{av:'AV56DataVencimentoInicial',fld:'vDATAVENCIMENTOINICIAL'},{av:'AV57DataVencimentoFinal',fld:'vDATAVENCIMENTOFINAL'},{av:'AV72UsuarioInc',fld:'vUSUARIOINC'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV77DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'A2247DepartamentoEmpresaId',fld:'DEPARTAMENTOEMPRESAID'},{av:'AV78DepartamentoEmpresaId',fld:'vDEPARTAMENTOEMPRESAID'},{av:'A2248DepartamentoCodigo',fld:'DEPARTAMENTOCODIGO'},{av:'A2249DepartamentoNome',fld:'DEPARTAMENTONOME'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true},{av:'A2694ContaPagRecDataEnvio',fld:'CONTAPAGRECDATAENVIO'},{av:'A1637ContaPagRecCliForId',fld:'CONTAPAGRECCLIFORID'},{av:'A1699ContaPagRecDtEmissao',fld:'CONTAPAGRECDTEMISSAO'},{av:'A1701ContaPagRecDtVencimento',fld:'CONTAPAGRECDTVENCIMENTO'},{av:'A1966ContaPagRecNoProcesso',fld:'CONTAPAGRECNOPROCESSO'},{av:'AV60NumeroProcesso',fld:'vNUMEROPROCESSO'},{av:'A2005ContaPagRecAnoProcesso',fld:'CONTAPAGRECANOPROCESSO'},{av:'AV61AnoProcesso',fld:'vANOPROCESSO'},{av:'A2458ContaPagRecUsuarioInc',fld:'CONTAPAGRECUSUARIOINC'},{av:'A1638ContaPagRecCliForFantasia',fld:'CONTAPAGRECCLIFORFANTASIA'},{av:'A1696ContaPagRecSeqDocume',fld:'CONTAPAGRECSEQDOCUME'},{av:'A1695ContaPagRecDocumento',fld:'CONTAPAGRECDOCUMENTO'},{av:'A2100ContaPagRecConvenioDesc',fld:'CONTAPAGRECCONVENIODESC'},{av:'A1692ContaPagRecSituacao',fld:'CONTAPAGRECSITUACAO'},{av:'A1715ContaPagRecVlrPagamento',fld:'CONTAPAGRECVLRPAGAMENTO'},{av:'A1713ContaPagRecVlrConta',fld:'CONTAPAGRECVLRCONTA'},{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV71TpTela',fld:'vTPTELA'}],[{av:'AV29Data',fld:'vDATA'},{av:'AV71TpTela',fld:'vTPTELA'},{av:'AV23TpErro',fld:'vTPERRO'},{av:'AV108GXLvl141',fld:'vGXLVL141'},{av:'AV59FornecedorNome',fld:'vFORNECEDORNOME'},{av:'AV73UsuarioDescInc',fld:'vUSUARIODESCINC'},{av:'AV109GXLvl179',fld:'vGXLVL179'},{av:'AV80DepartamentoNome',fld:'vDEPARTAMENTONOME'},{av:'AV110GXLvl194',fld:'vGXLVL194'},{av:'gx.fn.getCtrlProperty("vFORNECEDOR","Enabled")',ctrl:'vFORNECEDOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOINICIAL","Enabled")',ctrl:'vDATAEMISSAOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOFINAL","Enabled")',ctrl:'vDATAEMISSAOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOINICIAL","Enabled")',ctrl:'vDATAVENCIMENTOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOFINAL","Enabled")',ctrl:'vDATAVENCIMENTOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMEROPROCESSO","Enabled")',ctrl:'vNUMEROPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOPROCESSO","Enabled")',ctrl:'vANOPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSUARIOINC","Enabled")',ctrl:'vUSUARIOINC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDEPARTAMENTOCODIGO","Enabled")',ctrl:'vDEPARTAMENTOCODIGO',prop:'Enabled'},{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99},{av:'AV44EnvioDeNotasItem',fld:'vENVIODENOTASITEM'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true}],[{av:'AV42ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV53Valor',fld:'vVALOR'},{ctrl:'CTLCONTAPAGRECCLIFORID',prop:'Title'}]];
   this.EvtParms["'GRAVAACEITE'"] = [[{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV65DataEnvio',fld:'vDATAENVIO'},{av:'AV78DepartamentoEmpresaId',fld:'vDEPARTAMENTOEMPRESAID'},{av:'AV77DepartamentoCodigo',fld:'vDEPARTAMENTOCODIGO'},{av:'AV58Fornecedor',fld:'vFORNECEDOR'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV71TpTela',fld:'vTPTELA'},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true}],[{av:'AV112GXV2',fld:'vGXV2'},{av:'AV44EnvioDeNotasItem',fld:'vENVIODENOTASITEM'},{av:'AV42ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO'},{av:'AV76Assunto',fld:'vASSUNTO'},{av:'AV79Identificacao',fld:'vIDENTIFICACAO'},{av:'AV90CorrespondenciaRemetente',fld:'vCORRESPONDENCIAREMETENTE'},{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99},{av:'AV71TpTela',fld:'vTPTELA'},{av:'gx.fn.getCtrlProperty("vFORNECEDOR","Enabled")',ctrl:'vFORNECEDOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOINICIAL","Enabled")',ctrl:'vDATAEMISSAOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOFINAL","Enabled")',ctrl:'vDATAEMISSAOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOINICIAL","Enabled")',ctrl:'vDATAVENCIMENTOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOFINAL","Enabled")',ctrl:'vDATAVENCIMENTOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMEROPROCESSO","Enabled")',ctrl:'vNUMEROPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOPROCESSO","Enabled")',ctrl:'vANOPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSUARIOINC","Enabled")',ctrl:'vUSUARIOINC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDEPARTAMENTOCODIGO","Enabled")',ctrl:'vDEPARTAMENTOCODIGO',prop:'Enabled'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV58Fornecedor',fld:'vFORNECEDOR'},{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV71TpTela',fld:'vTPTELA'},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true}],[{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99},{av:'AV71TpTela',fld:'vTPTELA'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV71TpTela',fld:'vTPTELA'},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true}],[{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV71TpTela',fld:'vTPTELA'},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true}],[{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true},{av:'AV71TpTela',fld:'vTPTELA'},{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99}],[{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFORNECEDOR","Enabled")',ctrl:'vFORNECEDOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOINICIAL","Enabled")',ctrl:'vDATAEMISSAOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOFINAL","Enabled")',ctrl:'vDATAEMISSAOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOINICIAL","Enabled")',ctrl:'vDATAVENCIMENTOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOFINAL","Enabled")',ctrl:'vDATAVENCIMENTOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMEROPROCESSO","Enabled")',ctrl:'vNUMEROPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOPROCESSO","Enabled")',ctrl:'vANOPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSUARIOINC","Enabled")',ctrl:'vUSUARIOINC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDEPARTAMENTOCODIGO","Enabled")',ctrl:'vDEPARTAMENTOCODIGO',prop:'Enabled'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true},{av:'AV71TpTela',fld:'vTPTELA'},{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99}],[{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFORNECEDOR","Enabled")',ctrl:'vFORNECEDOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOINICIAL","Enabled")',ctrl:'vDATAEMISSAOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOFINAL","Enabled")',ctrl:'vDATAEMISSAOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOINICIAL","Enabled")',ctrl:'vDATAVENCIMENTOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOFINAL","Enabled")',ctrl:'vDATAVENCIMENTOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMEROPROCESSO","Enabled")',ctrl:'vNUMEROPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOPROCESSO","Enabled")',ctrl:'vANOPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSUARIOINC","Enabled")',ctrl:'vUSUARIOINC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDEPARTAMENTOCODIGO","Enabled")',ctrl:'vDEPARTAMENTOCODIGO',prop:'Enabled'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true},{av:'AV71TpTela',fld:'vTPTELA'},{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99}],[{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFORNECEDOR","Enabled")',ctrl:'vFORNECEDOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOINICIAL","Enabled")',ctrl:'vDATAEMISSAOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOFINAL","Enabled")',ctrl:'vDATAEMISSAOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOINICIAL","Enabled")',ctrl:'vDATAVENCIMENTOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOFINAL","Enabled")',ctrl:'vDATAVENCIMENTOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMEROPROCESSO","Enabled")',ctrl:'vNUMEROPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOPROCESSO","Enabled")',ctrl:'vANOPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSUARIOINC","Enabled")',ctrl:'vUSUARIOINC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDEPARTAMENTOCODIGO","Enabled")',ctrl:'vDEPARTAMENTOCODIGO',prop:'Enabled'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV33TipoAceite',fld:'vTIPOACEITE',hsh:true},{av:'AV71TpTela',fld:'vTPTELA'},{av:'AV43EnvioDeNotas',fld:'vENVIODENOTAS',grid:99}],[{ctrl:'BTNFECHAR',prop:'Visible'},{ctrl:'BTNCONFIRMAR',prop:'Visible'},{ctrl:'BTNCANCELAR',prop:'Visible'},{ctrl:'BTNAVANCAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFORNECEDOR","Enabled")',ctrl:'vFORNECEDOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOINICIAL","Enabled")',ctrl:'vDATAEMISSAOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAEMISSAOFINAL","Enabled")',ctrl:'vDATAEMISSAOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOINICIAL","Enabled")',ctrl:'vDATAVENCIMENTOINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATAVENCIMENTOFINAL","Enabled")',ctrl:'vDATAVENCIMENTOFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNUMEROPROCESSO","Enabled")',ctrl:'vNUMEROPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOPROCESSO","Enabled")',ctrl:'vANOPROCESSO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSUARIOINC","Enabled")',ctrl:'vUSUARIOINC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDEPARTAMENTOCODIGO","Enabled")',ctrl:'vDEPARTAMENTOCODIGO',prop:'Enabled'}]];
   this.setPrompt("PROMPT_FORNECEDOR", [20]);
   this.setPrompt("PROMPT_DEPARTAMENTOCODIGO", [28]);
   this.setPrompt("PROMPT_USUARIOINC", [78]);
   this.EnterCtrl = ["BTNAVANCAR"];
   this.setVCMap("AV43EnvioDeNotas", "vENVIODENOTAS", 0, "CollEnvioDeNotas.EnvioDeNotasItem");
   this.setVCMap("AV33TipoAceite", "vTIPOACEITE", 0, "char");
   this.setVCMap("AV43EnvioDeNotas", "vENVIODENOTAS", 0, "CollEnvioDeNotas.EnvioDeNotasItem");
   this.setVCMap("AV33TipoAceite", "vTIPOACEITE", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[124]);
   GridContainer.addRefreshingVar({rfrVar:"AV43EnvioDeNotas"});
   GridContainer.addRefreshingVar({rfrVar:"AV33TipoAceite"});
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecNumero"], this.GXValidFnc[100], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecCliForFantasia"], this.GXValidFnc[101], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecDocumento"], this.GXValidFnc[102], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecDtEmissao"], this.GXValidFnc[103], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecDtVencimento"], this.GXValidFnc[104], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecProcessoAno"], this.GXValidFnc[105], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecSNMarcado"], this.GXValidFnc[107], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecSituacao"], this.GXValidFnc[108], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecNoProcesso"], this.GXValidFnc[109], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecAnoProcesso"], this.GXValidFnc[110], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagrecCliForId"], this.GXValidFnc[111], "AV43EnvioDeNotas");
   this.addGridBCProperty("Enviodenotas", ["ContaPagRecValor"], this.GXValidFnc[112], "AV43EnvioDeNotas");
   this.InitStandaloneVars( );
});
gx.setParentObj(new henvionotas());
