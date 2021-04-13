/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:23.49
*/
gx.evt.autoSkip = false;
gx.define('hregistrarautorizacao', false, function () {
   this.ServerClass =  "hregistrarautorizacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV93snRetorno=gx.fn.getControlValue("vSNRETORNO") ;
      this.AV82SdtRegAutorizacao=gx.fn.getControlValue("vSDTREGAUTORIZACAO") ;
      this.A3336PedidoCompraAno=gx.fn.getIntegerValue("PEDIDOCOMPRAANO",'.') ;
      this.A3337PedidoCompraNumero=gx.fn.getIntegerValue("PEDIDOCOMPRANUMERO",'.') ;
      this.A3360PedidoCompraData=gx.fn.getDateValue("PEDIDOCOMPRADATA") ;
      this.A3426PedidoCompraEmpresaId=gx.fn.getControlValue("PEDIDOCOMPRAEMPRESAID") ;
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A3380PedidoCompraSituacao=gx.fn.getControlValue("PEDIDOCOMPRASITUACAO") ;
      this.A3387PedidoCompraFilialEmpId=gx.fn.getControlValue("PEDIDOCOMPRAFILIALEMPID") ;
      this.A3388PedidoCompraFilialId=gx.fn.getIntegerValue("PEDIDOCOMPRAFILIALID",'.') ;
      this.A3389PedidoCompraDataEntrega=gx.fn.getDateValue("PEDIDOCOMPRADATAENTREGA") ;
      this.A3361PedidoCompraPessoaEmpId=gx.fn.getControlValue("PEDIDOCOMPRAPESSOAEMPID") ;
      this.A3362PedidoCompraPessoaId=gx.fn.getIntegerValue("PEDIDOCOMPRAPESSOAID",'.') ;
      this.A1229VendedorEmpresaId=gx.fn.getControlValue("VENDEDOREMPRESAID") ;
      this.A1237VendedorId=gx.fn.getIntegerValue("VENDEDORID",'.') ;
      this.A3386PedidoCompraNoPedidoForn=gx.fn.getControlValue("PEDIDOCOMPRANOPEDIDOFORN") ;
      this.A4246PedidoCompraUsuarioAut=gx.fn.getControlValue("PEDIDOCOMPRAUSUARIOAUT") ;
      this.A4247PedidoCompraDataHoraAut=gx.fn.getDateTimeValue("PEDIDOCOMPRADATAHORAAUT") ;
      this.A3778PedidoCompraPessoaFantasia=gx.fn.getControlValue("PEDIDOCOMPRAPESSOAFANTASIA") ;
      this.A1148VendedorNome=gx.fn.getControlValue("VENDEDORNOME") ;
      this.AV102Chamada=gx.fn.getControlValue("vCHAMADA") ;
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
   this.Validv_Vendedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORID");
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
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12t82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13t82_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e14t82_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e11t82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e18t82_client=function()
   {
      this.executeServerEvent("'CONSULTARPEDIDO'", true, arguments[0], false, false);
   };
   this.e19t82_client=function()
   {
      this.executeServerEvent("'VISUALIZARCONTAS'", true, arguments[0], false, false);
   };
   this.e20t82_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, arguments[0], false, false);
   };
   this.e21t82_client=function()
   {
      this.executeServerEvent("'ENTREGAR'", true, arguments[0], false, false);
   };
   this.e22t82_client=function()
   {
      this.executeServerEvent("'CONSULTARENTREGAS'", true, arguments[0], false, false);
   };
   this.e23t82_client=function()
   {
      this.executeServerEvent("'OCORRENCIAS'", true, arguments[0], false, false);
   };
   this.e15t82_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e25t82_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,17,20,22,24,26,28,30,31,34,36,38,40,42,44,47,49,50,52,63,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,90,93,95,101,102,103,104,105,106,107,109,110,111,112];
   this.GXLastCtrlId =112;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",64,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistrarautorizacao",[],false,1,true,true,0,true,false,false,"CollSdtRegAutorizacao.SdtRegAutorizacaoItem",0,"px","Novo registro",true,false,true,null,null,false,"AV82SdtRegAutorizacao",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11T",65,"CTLPEDIDOCOMPRAANO","Ano","","PedidoCompraAno","int",0,"px",4,4,"left",null,[],"GXV11T","GXV11T",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11U",66,"CTLPEDIDOCOMPRANUMERO","Número","","PedidoCompraNumero","int",0,"px",7,7,"right",null,[],"GXV11U","GXV11U",true,0,false,false,"AttributeSemMargem",1,"");
   GridContainer.addSingleLineEdit("GXV11V",67,"CTLPEDIDOCOMPRAFORNECEDOR","Fornecedor","","PedidoCompraFornecedor","svchar",0,"px",70,70,"left",null,[],"GXV11V","GXV11V",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11W",68,"CTLPEDIDOCOMPRADATA","Dt Pedido","","PedidoCompraData","date",0,"px",10,10,"left",null,[],"GXV11W","GXV11W",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11X",69,"CTLPEDIDOCOMPRAVALORLIQUIDO","Valor Líquido","","PedidoCompraValorLiquido","decimal",0,"px",22,22,"right",null,[],"GXV11X","GXV11X",true,2,false,false,"AttributeSemMargem",1,"");
   GridContainer.addSingleLineEdit("GXV11Y",70,"CTLPEDIDOCOMPRAUSUARIOAUT","Usuário Aut","","PedidoCompraUsuarioAut","char",0,"px",12,12,"left",null,[],"GXV11Y","GXV11Y",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11Z",71,"CTLPEDIDOCOMPRADATAHORAAUT","Data/Hora Aut","","PedidoCompraDataHoraAut","dtime",0,"px",16,16,"left",null,[],"GXV11Z","GXV11Z",true,5,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",72,0,"px",17,"px","e18t82_client","","Cons","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcontas","vBMPCONTAS",73,0,"px",17,"px","e19t82_client","","Cont","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimp","vBMPIMP",74,0,"px",17,"px","e20t82_client","","Imp","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpent","vBMPENT",75,0,"px",17,"px","e21t82_client","","Ent","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpconent","vBMPCONENT",76,0,"px",17,"px","e22t82_client","","Con","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpoco","vBMPOCO",77,0,"px",17,"px","e23t82_client","","Oco","Image","GridColumnImage");
   GridContainer.addCheckBox("GXV126",78,"CTLSNREGAUTORIZACAO","Reg","","SNRegAutorizacao","char","S","N",null,true,false,0,"px","");
   GridContainer.addSingleLineEdit("GXV127",79,"CTLPEDIDOCOMPRACOMPRADOR","Pedido Compra Comprador","","PedidoCompraComprador","svchar",0,"px",50,50,"left",null,[],"GXV127","GXV127",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV128",80,"CTLPEDIDOCOMPRAPESSOAID","Fornecedor","","PedidoCompraPessoaId","int",0,"px",7,7,"right",null,[],"GXV128","GXV128",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV129",81,"CTLPEDIDOCOMPRAPESSOAFANTASIA","Fantasia Fornecedor","","PedidoCompraPessoaFantasia","svchar",0,"px",60,60,"left",null,[],"GXV129","GXV129",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12A",82,"CTLVENDEDORID","Código do Comprador","","VendedorId","int",0,"px",7,7,"right",null,[],"GXV12A","GXV12A",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12B",83,"CTLQTDECARACTER","Qtde Caracter","","QtdeCaracter","int",0,"px",10,10,"right",null,[],"GXV12B","GXV12B",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE5",grid:0};
   GXValidFnc[11]={fld:"TABLE6",grid:0};
   GXValidFnc[14]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV67FilialId",gxold:"OV67FilialId",gxvar:"AV67FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV67FilialId,0)},c2v:function(){gx.O.AV67FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV68FilialNome",gxold:"OV68FilialNome",gxvar:"AV68FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68FilialNome=Value},v2z:function(Value){gx.O.ZV68FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV68FilialNome,0)},c2v:function(){gx.O.AV68FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL9", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRADATAINI",gxz:"ZV70PedidoCompraDataIni",gxold:"OV70PedidoCompraDataIni",gxvar:"AV70PedidoCompraDataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70PedidoCompraDataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV70PedidoCompraDataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATAINI",gx.O.AV70PedidoCompraDataIni,0)},c2v:function(){gx.O.AV70PedidoCompraDataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATAINI")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTTITAPL11", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRADATAFIM",gxz:"ZV71PedidoCompraDataFim",gxold:"OV71PedidoCompraDataFim",gxvar:"AV71PedidoCompraDataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71PedidoCompraDataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV71PedidoCompraDataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATAFIM",gx.O.AV71PedidoCompraDataFim,0)},c2v:function(){gx.O.AV71PedidoCompraDataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATAFIM")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL14", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorid,isvalid:null,rgrid:[],fld:"vVENDEDORID",gxz:"ZV72VendedorId",gxold:"OV72VendedorId",gxvar:"AV72VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72VendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV72VendedorId,0)},c2v:function(){gx.O.AV72VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV73VendedorNome",gxold:"OV73VendedorNome",gxvar:"AV73VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73VendedorNome=Value},v2z:function(Value){gx.O.ZV73VendedorNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV73VendedorNome,0)},c2v:function(){gx.O.AV73VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TXTTITAPL12", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRADATAENTREGAINI",gxz:"ZV75PedidoCompraDataEntregaIni",gxold:"OV75PedidoCompraDataEntregaIni",gxvar:"AV75PedidoCompraDataEntregaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75PedidoCompraDataEntregaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV75PedidoCompraDataEntregaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATAENTREGAINI",gx.O.AV75PedidoCompraDataEntregaIni,0)},c2v:function(){gx.O.AV75PedidoCompraDataEntregaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATAENTREGAINI")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TXTTITAPL13", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRADATAENTREGAFIM",gxz:"ZV76PedidoCompraDataEntregaFim",gxold:"OV76PedidoCompraDataEntregaFim",gxvar:"AV76PedidoCompraDataEntregaFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76PedidoCompraDataEntregaFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV76PedidoCompraDataEntregaFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATAENTREGAFIM",gx.O.AV76PedidoCompraDataEntregaFim,0)},c2v:function(){gx.O.AV76PedidoCompraDataEntregaFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATAENTREGAFIM")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TXTTITAPL10", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANOPEDIDOFORN",gxz:"ZV77PedidoCompraNoPedidoForn",gxold:"OV77PedidoCompraNoPedidoForn",gxvar:"AV77PedidoCompraNoPedidoForn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77PedidoCompraNoPedidoForn=Value},v2z:function(Value){gx.O.ZV77PedidoCompraNoPedidoForn=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANOPEDIDOFORN",gx.O.AV77PedidoCompraNoPedidoForn,0)},c2v:function(){gx.O.AV77PedidoCompraNoPedidoForn=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRANOPEDIDOFORN")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TXTTITAPL8", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV78PessoaId",gxold:"OV78PessoaId",gxvar:"AV78PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV78PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV78PessoaId,0)},c2v:function(){gx.O.AV78PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV79PessoaFantasia",gxold:"OV79PessoaFantasia",gxvar:"AV79PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79PessoaFantasia=Value},v2z:function(Value){gx.O.ZV79PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV79PessoaFantasia,0)},c2v:function(){gx.O.AV79PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAPENASNAOAUTORIZADOS",gxz:"ZV81SNApenasNaoAutorizados",gxold:"OV81SNApenasNaoAutorizados",gxvar:"AV81SNApenasNaoAutorizados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV81SNApenasNaoAutorizados=Value},v2z:function(Value){gx.O.ZV81SNApenasNaoAutorizados=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNAPENASNAOAUTORIZADOS",gx.O.AV81SNApenasNaoAutorizados,"S")},c2v:function(){gx.O.AV81SNApenasNaoAutorizados=this.val()},val:function(){return gx.fn.getControlValue("vSNAPENASNAOAUTORIZADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[63]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[65]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAANO",gxz:"ZV107GXV11T",gxold:"OV107GXV11T",gxvar:"GXV11T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11T=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV107GXV11T=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(64),gx.O.GXV11T,0)},c2v:function(){gx.O.GXV11T=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRANUMERO",gxz:"ZV108GXV11U",gxold:"OV108GXV11U",gxvar:"GXV11U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11U=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV108GXV11U=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(64),gx.O.GXV11U,0)},c2v:function(){gx.O.GXV11U=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAFORNECEDOR",gxz:"ZV109GXV11V",gxold:"OV109GXV11V",gxvar:"GXV11V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11V=Value},v2z:function(Value){gx.O.ZV109GXV11V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAFORNECEDOR",row || gx.fn.currentGridRowImpl(64),gx.O.GXV11V,0)},c2v:function(){gx.O.GXV11V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRAFORNECEDOR",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRADATA",gxz:"ZV110GXV11W",gxold:"OV110GXV11W",gxvar:"GXV11W",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11W=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV110GXV11W=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(64),gx.O.GXV11W,0)},c2v:function(){gx.O.GXV11W=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAVALORLIQUIDO",gxz:"ZV111GXV11X",gxold:"OV111GXV11X",gxvar:"GXV11X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11X=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV111GXV11X=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(64),gx.O.GXV11X,2,',')},c2v:function(){gx.O.GXV11X=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(64),'.',',')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAUSUARIOAUT",gxz:"ZV112GXV11Y",gxold:"OV112GXV11Y",gxvar:"GXV11Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Y=Value},v2z:function(Value){gx.O.ZV112GXV11Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAUSUARIOAUT",row || gx.fn.currentGridRowImpl(64),gx.O.GXV11Y,0)},c2v:function(){gx.O.GXV11Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRAUSUARIOAUT",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRADATAHORAAUT",gxz:"ZV113GXV11Z",gxold:"OV113GXV11Z",gxvar:"GXV11Z",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Z=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV113GXV11Z=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRADATAHORAAUT",row || gx.fn.currentGridRowImpl(64),gx.O.GXV11Z,0)},c2v:function(){gx.O.GXV11Z=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPEDIDOCOMPRADATAHORAAUT",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(64),gx.O.AV16bmpCon,gx.O.AV123Bmpcon_GXI)},c2v:function(){gx.O.AV123Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV123Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONTAS",gxz:"ZV83bmpContas",gxold:"OV83bmpContas",gxvar:"AV83bmpContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV83bmpContas=Value},v2z:function(Value){gx.O.ZV83bmpContas=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONTAS",row || gx.fn.currentGridRowImpl(64),gx.O.AV83bmpContas,gx.O.AV124Bmpcontas_GXI)},c2v:function(){gx.O.AV124Bmpcontas_GXI=this.val_GXI();gx.O.AV83bmpContas=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONTAS",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONTAS_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV124Bmpcontas_GXI',nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMP",gxz:"ZV84bmpImp",gxold:"OV84bmpImp",gxvar:"AV84bmpImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV84bmpImp=Value},v2z:function(Value){gx.O.ZV84bmpImp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMP",row || gx.fn.currentGridRowImpl(64),gx.O.AV84bmpImp,gx.O.AV125Bmpimp_GXI)},c2v:function(){gx.O.AV125Bmpimp_GXI=this.val_GXI();gx.O.AV84bmpImp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMP",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMP_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV125Bmpimp_GXI',nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPENT",gxz:"ZV85bmpEnt",gxold:"OV85bmpEnt",gxvar:"AV85bmpEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV85bmpEnt=Value},v2z:function(Value){gx.O.ZV85bmpEnt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPENT",row || gx.fn.currentGridRowImpl(64),gx.O.AV85bmpEnt,gx.O.AV126Bmpent_GXI)},c2v:function(){gx.O.AV126Bmpent_GXI=this.val_GXI();gx.O.AV85bmpEnt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPENT",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPENT_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV126Bmpent_GXI',nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONENT",gxz:"ZV86bmpConEnt",gxold:"OV86bmpConEnt",gxvar:"AV86bmpConEnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV86bmpConEnt=Value},v2z:function(Value){gx.O.ZV86bmpConEnt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONENT",row || gx.fn.currentGridRowImpl(64),gx.O.AV86bmpConEnt,gx.O.AV127Bmpconent_GXI)},c2v:function(){gx.O.AV127Bmpconent_GXI=this.val_GXI();gx.O.AV86bmpConEnt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONENT",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONENT_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV127Bmpconent_GXI',nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOCO",gxz:"ZV87bmpOco",gxold:"OV87bmpOco",gxvar:"AV87bmpOco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV87bmpOco=Value},v2z:function(Value){gx.O.ZV87bmpOco=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOCO",row || gx.fn.currentGridRowImpl(64),gx.O.AV87bmpOco,gx.O.AV128Bmpoco_GXI)},c2v:function(){gx.O.AV128Bmpoco_GXI=this.val_GXI();gx.O.AV87bmpOco=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOCO",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOCO_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV128Bmpoco_GXI',nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNREGAUTORIZACAO",gxz:"ZV114GXV126",gxold:"OV114GXV126",gxvar:"GXV126",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV126=Value},v2z:function(Value){gx.O.ZV114GXV126=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNREGAUTORIZACAO",row || gx.fn.currentGridRowImpl(64),gx.O.GXV126,"S")},c2v:function(){gx.O.GXV126=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNREGAUTORIZACAO",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[79]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRACOMPRADOR",gxz:"ZV115GXV127",gxold:"OV115GXV127",gxvar:"GXV127",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV127=Value},v2z:function(Value){gx.O.ZV115GXV127=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRACOMPRADOR",row || gx.fn.currentGridRowImpl(64),gx.O.GXV127,0)},c2v:function(){gx.O.GXV127=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRACOMPRADOR",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAPESSOAID",gxz:"ZV116GXV128",gxold:"OV116GXV128",gxvar:"GXV128",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV128=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV116GXV128=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(64),gx.O.GXV128,0)},c2v:function(){gx.O.GXV128=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAPESSOAFANTASIA",gxz:"ZV117GXV129",gxold:"OV117GXV129",gxvar:"GXV129",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV129=Value},v2z:function(Value){gx.O.ZV117GXV129=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(64),gx.O.GXV129,0)},c2v:function(){gx.O.GXV129=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVENDEDORID",gxz:"ZV118GXV12A",gxold:"OV118GXV12A",gxvar:"GXV12A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12A=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV118GXV12A=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLVENDEDORID",row || gx.fn.currentGridRowImpl(64),gx.O.GXV12A,0)},c2v:function(){gx.O.GXV12A=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLVENDEDORID",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDECARACTER",gxz:"ZV119GXV12B",gxold:"OV119GXV12B",gxvar:"GXV12B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV119GXV12B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLQTDECARACTER",row || gx.fn.currentGridRowImpl(64),gx.O.GXV12B,0)},c2v:function(){gx.O.GXV12B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLQTDECARACTER",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[90]={fld:"TABLE2",grid:0};
   GXValidFnc[93]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTALLIQUIDO",gxz:"ZV88ValorTotalLiquido",gxold:"OV88ValorTotalLiquido",gxvar:"AV88ValorTotalLiquido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88ValorTotalLiquido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV88ValorTotalLiquido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTALLIQUIDO",gx.O.AV88ValorTotalLiquido,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV88ValorTotalLiquido=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTALLIQUIDO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[101]={fld:"JS", format:2,grid:0};
   GXValidFnc[102]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV80PessoaEmpresaId",gxold:"OV80PessoaEmpresaId",gxvar:"AV80PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV80PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV80PessoaEmpresaId,0)},c2v:function(){gx.O.AV80PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorempresaid,isvalid:null,rgrid:[],fld:"vVENDEDOREMPRESAID",gxz:"ZV74VendedorEmpresaId",gxold:"OV74VendedorEmpresaId",gxvar:"AV74VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74VendedorEmpresaId=Value},v2z:function(Value){gx.O.ZV74VendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV74VendedorEmpresaId,0)},c2v:function(){gx.O.AV74VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV69FilialEmpresaId",gxold:"OV69FilialEmpresaId",gxvar:"AV69FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV69FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV69FilialEmpresaId,0)},c2v:function(){gx.O.AV69FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV52Sim",gxold:"OV52Sim",gxvar:"AV52Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52Sim=Value},v2z:function(Value){gx.O.ZV52Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV52Sim,0)},c2v:function(){gx.O.AV52Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV53Nao",gxold:"OV53Nao",gxvar:"AV53Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53Nao=Value},v2z:function(Value){gx.O.ZV53Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV53Nao,0)},c2v:function(){gx.O.AV53Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"BTNHELP",grid:0};
   GXValidFnc[110]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[111]={fld:"PROMPT_VENDEDORID",grid:0};
   GXValidFnc[112]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV67FilialId = 0 ;
   this.ZV67FilialId = 0 ;
   this.OV67FilialId = 0 ;
   this.AV68FilialNome = "" ;
   this.ZV68FilialNome = "" ;
   this.OV68FilialNome = "" ;
   this.AV70PedidoCompraDataIni = gx.date.nullDate() ;
   this.ZV70PedidoCompraDataIni = gx.date.nullDate() ;
   this.OV70PedidoCompraDataIni = gx.date.nullDate() ;
   this.AV71PedidoCompraDataFim = gx.date.nullDate() ;
   this.ZV71PedidoCompraDataFim = gx.date.nullDate() ;
   this.OV71PedidoCompraDataFim = gx.date.nullDate() ;
   this.AV72VendedorId = 0 ;
   this.ZV72VendedorId = 0 ;
   this.OV72VendedorId = 0 ;
   this.AV73VendedorNome = "" ;
   this.ZV73VendedorNome = "" ;
   this.OV73VendedorNome = "" ;
   this.AV75PedidoCompraDataEntregaIni = gx.date.nullDate() ;
   this.ZV75PedidoCompraDataEntregaIni = gx.date.nullDate() ;
   this.OV75PedidoCompraDataEntregaIni = gx.date.nullDate() ;
   this.AV76PedidoCompraDataEntregaFim = gx.date.nullDate() ;
   this.ZV76PedidoCompraDataEntregaFim = gx.date.nullDate() ;
   this.OV76PedidoCompraDataEntregaFim = gx.date.nullDate() ;
   this.AV77PedidoCompraNoPedidoForn = "" ;
   this.ZV77PedidoCompraNoPedidoForn = "" ;
   this.OV77PedidoCompraNoPedidoForn = "" ;
   this.AV78PessoaId = 0 ;
   this.ZV78PessoaId = 0 ;
   this.OV78PessoaId = 0 ;
   this.AV79PessoaFantasia = "" ;
   this.ZV79PessoaFantasia = "" ;
   this.OV79PessoaFantasia = "" ;
   this.AV81SNApenasNaoAutorizados = "" ;
   this.ZV81SNApenasNaoAutorizados = "" ;
   this.OV81SNApenasNaoAutorizados = "" ;
   this.ZV107GXV11T = 0 ;
   this.OV107GXV11T = 0 ;
   this.ZV108GXV11U = 0 ;
   this.OV108GXV11U = 0 ;
   this.ZV109GXV11V = "" ;
   this.OV109GXV11V = "" ;
   this.ZV110GXV11W = gx.date.nullDate() ;
   this.OV110GXV11W = gx.date.nullDate() ;
   this.ZV111GXV11X = 0 ;
   this.OV111GXV11X = 0 ;
   this.ZV112GXV11Y = "" ;
   this.OV112GXV11Y = "" ;
   this.ZV113GXV11Z = gx.date.nullDate() ;
   this.OV113GXV11Z = gx.date.nullDate() ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV83bmpContas = "" ;
   this.OV83bmpContas = "" ;
   this.ZV84bmpImp = "" ;
   this.OV84bmpImp = "" ;
   this.ZV85bmpEnt = "" ;
   this.OV85bmpEnt = "" ;
   this.ZV86bmpConEnt = "" ;
   this.OV86bmpConEnt = "" ;
   this.ZV87bmpOco = "" ;
   this.OV87bmpOco = "" ;
   this.ZV114GXV126 = "" ;
   this.OV114GXV126 = "" ;
   this.ZV115GXV127 = "" ;
   this.OV115GXV127 = "" ;
   this.ZV116GXV128 = 0 ;
   this.OV116GXV128 = 0 ;
   this.ZV117GXV129 = "" ;
   this.OV117GXV129 = "" ;
   this.ZV118GXV12A = 0 ;
   this.OV118GXV12A = 0 ;
   this.ZV119GXV12B = 0 ;
   this.OV119GXV12B = 0 ;
   this.AV88ValorTotalLiquido = 0 ;
   this.ZV88ValorTotalLiquido = 0 ;
   this.OV88ValorTotalLiquido = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV80PessoaEmpresaId = "" ;
   this.ZV80PessoaEmpresaId = "" ;
   this.OV80PessoaEmpresaId = "" ;
   this.AV74VendedorEmpresaId = "" ;
   this.ZV74VendedorEmpresaId = "" ;
   this.OV74VendedorEmpresaId = "" ;
   this.AV69FilialEmpresaId = "" ;
   this.ZV69FilialEmpresaId = "" ;
   this.OV69FilialEmpresaId = "" ;
   this.AV52Sim = "" ;
   this.ZV52Sim = "" ;
   this.OV52Sim = "" ;
   this.AV53Nao = "" ;
   this.ZV53Nao = "" ;
   this.OV53Nao = "" ;
   this.AV67FilialId = 0 ;
   this.AV68FilialNome = "" ;
   this.AV70PedidoCompraDataIni = gx.date.nullDate() ;
   this.AV71PedidoCompraDataFim = gx.date.nullDate() ;
   this.AV72VendedorId = 0 ;
   this.AV73VendedorNome = "" ;
   this.AV75PedidoCompraDataEntregaIni = gx.date.nullDate() ;
   this.AV76PedidoCompraDataEntregaFim = gx.date.nullDate() ;
   this.AV77PedidoCompraNoPedidoForn = "" ;
   this.AV78PessoaId = 0 ;
   this.AV79PessoaFantasia = "" ;
   this.AV81SNApenasNaoAutorizados = "" ;
   this.AV88ValorTotalLiquido = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV80PessoaEmpresaId = "" ;
   this.AV74VendedorEmpresaId = "" ;
   this.AV69FilialEmpresaId = "" ;
   this.AV52Sim = "" ;
   this.AV53Nao = "" ;
   this.AV102Chamada = "" ;
   this.GXV11T = 0 ;
   this.GXV11U = 0 ;
   this.GXV11V = "" ;
   this.GXV11W = gx.date.nullDate() ;
   this.GXV11X = 0 ;
   this.GXV11Y = "" ;
   this.GXV11Z = gx.date.nullDate() ;
   this.AV16bmpCon = "" ;
   this.AV83bmpContas = "" ;
   this.AV84bmpImp = "" ;
   this.AV85bmpEnt = "" ;
   this.AV86bmpConEnt = "" ;
   this.AV87bmpOco = "" ;
   this.GXV126 = "" ;
   this.GXV127 = "" ;
   this.GXV128 = 0 ;
   this.GXV129 = "" ;
   this.GXV12A = 0 ;
   this.GXV12B = 0 ;
   this.A4247PedidoCompraDataHoraAut = gx.date.nullDate() ;
   this.A4246PedidoCompraUsuarioAut = "" ;
   this.A3386PedidoCompraNoPedidoForn = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A3361PedidoCompraPessoaEmpId = "" ;
   this.A3389PedidoCompraDataEntrega = gx.date.nullDate() ;
   this.A3360PedidoCompraData = gx.date.nullDate() ;
   this.A3388PedidoCompraFilialId = 0 ;
   this.A3387PedidoCompraFilialEmpId = "" ;
   this.A3380PedidoCompraSituacao = "" ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3778PedidoCompraPessoaFantasia = "" ;
   this.A1148VendedorNome = "" ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3787PedidoCompraValorICMSST = 0 ;
   this.A3786PedidoCompraValorICMS = 0 ;
   this.A3785PedidoCompraValorIPI = 0 ;
   this.A3384PedidoCompraValorEncargo = 0 ;
   this.A3385PedidoCompraValorSeguro = 0 ;
   this.A3383PedidoCompraValorFrete = 0 ;
   this.A3382PedidoCompraValorDesconto = 0 ;
   this.A3391PedidoCompraValorTotal = 0 ;
   this.A3788PedidoCompraValorLiquido = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.AV93snRetorno = "" ;
   this.AV82SdtRegAutorizacao = [ ] ;
   this.AV17EmpresaPadrao = "" ;
   this.Events = {"e12t82_client": ["ENTER", true] ,"e13t82_client": ["'MARCARTODOS'", true] ,"e14t82_client": ["'DESMARCARTODOS'", true] ,"e11t82_client": ["'FECHAR'", true] ,"e18t82_client": ["'CONSULTARPEDIDO'", true] ,"e19t82_client": ["'VISUALIZARCONTAS'", true] ,"e20t82_client": ["'IMPRIMIR'", true] ,"e21t82_client": ["'ENTREGAR'", true] ,"e22t82_client": ["'CONSULTARENTREGAS'", true] ,"e23t82_client": ["'OCORRENCIAS'", true] ,"e15t82_client": ["'CONFIRMAR'", true] ,"e25t82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV83bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV84bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV85bmpEnt',fld:'vBMPENT'},{av:'gx.fn.getCtrlProperty("vBMPENT","Tooltiptext")',ctrl:'vBMPENT',prop:'Tooltiptext'},{av:'AV86bmpConEnt',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'AV87bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV93snRetorno',fld:'vSNRETORNO'},{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'A3387PedidoCompraFilialEmpId',fld:'PEDIDOCOMPRAFILIALEMPID'},{av:'AV69FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'AV67FilialId',fld:'vFILIALID'},{av:'AV70PedidoCompraDataIni',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV71PedidoCompraDataFim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'A3389PedidoCompraDataEntrega',fld:'PEDIDOCOMPRADATAENTREGA'},{av:'AV75PedidoCompraDataEntregaIni',fld:'vPEDIDOCOMPRADATAENTREGAINI'},{av:'AV76PedidoCompraDataEntregaFim',fld:'vPEDIDOCOMPRADATAENTREGAFIM'},{av:'AV78PessoaId',fld:'vPESSOAID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV72VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV74VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV81SNApenasNaoAutorizados',fld:'vSNAPENASNAOAUTORIZADOS'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'}],[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'AV89SdtRegAutorizacaoItem',fld:'vSDTREGAUTORIZACAOITEM'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV83bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV84bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV85bmpEnt',fld:'vBMPENT'},{av:'gx.fn.getCtrlProperty("vBMPENT","Tooltiptext")',ctrl:'vBMPENT',prop:'Tooltiptext'},{av:'AV86bmpConEnt',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'AV87bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV93snRetorno',fld:'vSNRETORNO'},{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'A3387PedidoCompraFilialEmpId',fld:'PEDIDOCOMPRAFILIALEMPID'},{av:'AV69FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'AV67FilialId',fld:'vFILIALID'},{av:'AV70PedidoCompraDataIni',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV71PedidoCompraDataFim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'A3389PedidoCompraDataEntrega',fld:'PEDIDOCOMPRADATAENTREGA'},{av:'AV75PedidoCompraDataEntregaIni',fld:'vPEDIDOCOMPRADATAENTREGAINI'},{av:'AV76PedidoCompraDataEntregaFim',fld:'vPEDIDOCOMPRADATAENTREGAFIM'},{av:'AV78PessoaId',fld:'vPESSOAID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV72VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV74VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV81SNApenasNaoAutorizados',fld:'vSNAPENASNAOAUTORIZADOS'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV94snErro',fld:'vSNERRO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV94snErro',fld:'vSNERRO'},{av:'AV131GXLvl192',fld:'vGXLVL192'},{av:'AV132GXLvl217',fld:'vGXLVL217'},{av:'AV133GXLvl229',fld:'vGXLVL229'},{av:'AV89SdtRegAutorizacaoItem',fld:'vSDTREGAUTORIZACAOITEM'}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON',grid:64},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV83bmpContas',fld:'vBMPCONTAS',grid:64},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV84bmpImp',fld:'vBMPIMP',grid:64},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV85bmpEnt',fld:'vBMPENT',grid:64},{av:'gx.fn.getCtrlProperty("vBMPENT","Tooltiptext")',ctrl:'vBMPENT',prop:'Tooltiptext'},{av:'AV86bmpConEnt',fld:'vBMPCONENT',grid:64},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'AV87bmpOco',fld:'vBMPOCO',grid:64},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV93snRetorno',fld:'vSNRETORNO'},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'A3387PedidoCompraFilialEmpId',fld:'PEDIDOCOMPRAFILIALEMPID'},{av:'AV69FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'AV67FilialId',fld:'vFILIALID'},{av:'AV70PedidoCompraDataIni',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV71PedidoCompraDataFim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'A3389PedidoCompraDataEntrega',fld:'PEDIDOCOMPRADATAENTREGA'},{av:'AV75PedidoCompraDataEntregaIni',fld:'vPEDIDOCOMPRADATAENTREGAINI'},{av:'AV76PedidoCompraDataEntregaFim',fld:'vPEDIDOCOMPRADATAENTREGAFIM'},{av:'AV78PessoaId',fld:'vPESSOAID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV72VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV74VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV81SNApenasNaoAutorizados',fld:'vSNAPENASNAOAUTORIZADOS'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'}],[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON',grid:64},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV83bmpContas',fld:'vBMPCONTAS',grid:64},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV84bmpImp',fld:'vBMPIMP',grid:64},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV85bmpEnt',fld:'vBMPENT',grid:64},{av:'gx.fn.getCtrlProperty("vBMPENT","Tooltiptext")',ctrl:'vBMPENT',prop:'Tooltiptext'},{av:'AV86bmpConEnt',fld:'vBMPCONENT',grid:64},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'AV87bmpOco',fld:'vBMPOCO',grid:64},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV93snRetorno',fld:'vSNRETORNO'},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'A3387PedidoCompraFilialEmpId',fld:'PEDIDOCOMPRAFILIALEMPID'},{av:'AV69FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'AV67FilialId',fld:'vFILIALID'},{av:'AV70PedidoCompraDataIni',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV71PedidoCompraDataFim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'A3389PedidoCompraDataEntrega',fld:'PEDIDOCOMPRADATAENTREGA'},{av:'AV75PedidoCompraDataEntregaIni',fld:'vPEDIDOCOMPRADATAENTREGAINI'},{av:'AV76PedidoCompraDataEntregaFim',fld:'vPEDIDOCOMPRADATAENTREGAFIM'},{av:'AV78PessoaId',fld:'vPESSOAID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV72VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV74VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV81SNApenasNaoAutorizados',fld:'vSNAPENASNAOAUTORIZADOS'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'}],[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV102Chamada',fld:'vCHAMADA'}],[]];
   this.EvtParms["'CONSULTARPEDIDO'"] = [[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV67FilialId',fld:'vFILIALID'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV83bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV84bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV85bmpEnt',fld:'vBMPENT'},{av:'gx.fn.getCtrlProperty("vBMPENT","Tooltiptext")',ctrl:'vBMPENT',prop:'Tooltiptext'},{av:'AV86bmpConEnt',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'AV87bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV93snRetorno',fld:'vSNRETORNO'},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'A3387PedidoCompraFilialEmpId',fld:'PEDIDOCOMPRAFILIALEMPID'},{av:'AV69FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'AV70PedidoCompraDataIni',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV71PedidoCompraDataFim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'A3389PedidoCompraDataEntrega',fld:'PEDIDOCOMPRADATAENTREGA'},{av:'AV75PedidoCompraDataEntregaIni',fld:'vPEDIDOCOMPRADATAENTREGAINI'},{av:'AV76PedidoCompraDataEntregaFim',fld:'vPEDIDOCOMPRADATAENTREGAFIM'},{av:'AV78PessoaId',fld:'vPESSOAID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV72VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV74VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV81SNApenasNaoAutorizados',fld:'vSNAPENASNAOAUTORIZADOS'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'}],[{av:'AV67FilialId',fld:'vFILIALID'},{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64}]];
   this.EvtParms["'VISUALIZARCONTAS'"] = [[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV103SnCSV',fld:'vSNCSV'},{av:'AV97SNPossuiSistema',fld:'vSNPOSSUISISTEMA'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV98ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV99SdtPedido',fld:'vSDTPEDIDO'},{av:'AV100SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'},{av:'AV96QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV101Orientacao',fld:'vORIENTACAO'}]];
   this.EvtParms["'ENTREGAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV83bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV84bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV85bmpEnt',fld:'vBMPENT'},{av:'gx.fn.getCtrlProperty("vBMPENT","Tooltiptext")',ctrl:'vBMPENT',prop:'Tooltiptext'},{av:'AV86bmpConEnt',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'AV87bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV93snRetorno',fld:'vSNRETORNO'},{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'A3387PedidoCompraFilialEmpId',fld:'PEDIDOCOMPRAFILIALEMPID'},{av:'AV69FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'AV67FilialId',fld:'vFILIALID'},{av:'AV70PedidoCompraDataIni',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV71PedidoCompraDataFim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'A3389PedidoCompraDataEntrega',fld:'PEDIDOCOMPRADATAENTREGA'},{av:'AV75PedidoCompraDataEntregaIni',fld:'vPEDIDOCOMPRADATAENTREGAINI'},{av:'AV76PedidoCompraDataEntregaFim',fld:'vPEDIDOCOMPRADATAENTREGAFIM'},{av:'AV78PessoaId',fld:'vPESSOAID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV72VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV74VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV81SNApenasNaoAutorizados',fld:'vSNAPENASNAOAUTORIZADOS'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'}],[]];
   this.EvtParms["'CONSULTARENTREGAS'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64}],[]];
   this.EvtParms["'OCORRENCIAS'"] = [[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64}],[]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV91SNApresentaAnoPedido',fld:'vSNAPRESENTAANOPEDIDO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV9UsrCod',fld:'vUSRCOD'}],[{av:'AV95snConfirmar',fld:'vSNCONFIRMAR'},{av:'AV135GXV2',fld:'vGXV2'},{av:'AV89SdtRegAutorizacaoItem',fld:'vSDTREGAUTORIZACAOITEM'},{av:'AV136GXV3',fld:'vGXV3'},{av:'AV93snRetorno',fld:'vSNRETORNO'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV83bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV84bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV85bmpEnt',fld:'vBMPENT'},{av:'gx.fn.getCtrlProperty("vBMPENT","Tooltiptext")',ctrl:'vBMPENT',prop:'Tooltiptext'},{av:'AV86bmpConEnt',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'AV87bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV93snRetorno',fld:'vSNRETORNO'},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'A3387PedidoCompraFilialEmpId',fld:'PEDIDOCOMPRAFILIALEMPID'},{av:'AV69FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'AV67FilialId',fld:'vFILIALID'},{av:'AV70PedidoCompraDataIni',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV71PedidoCompraDataFim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'A3389PedidoCompraDataEntrega',fld:'PEDIDOCOMPRADATAENTREGA'},{av:'AV75PedidoCompraDataEntregaIni',fld:'vPEDIDOCOMPRADATAENTREGAINI'},{av:'AV76PedidoCompraDataEntregaFim',fld:'vPEDIDOCOMPRADATAENTREGAFIM'},{av:'AV78PessoaId',fld:'vPESSOAID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV72VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV74VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV81SNApenasNaoAutorizados',fld:'vSNAPENASNAOAUTORIZADOS'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64}],[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'AV89SdtRegAutorizacaoItem',fld:'vSDTREGAUTORIZACAOITEM'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV83bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV84bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV85bmpEnt',fld:'vBMPENT'},{av:'gx.fn.getCtrlProperty("vBMPENT","Tooltiptext")',ctrl:'vBMPENT',prop:'Tooltiptext'},{av:'AV86bmpConEnt',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'AV87bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV93snRetorno',fld:'vSNRETORNO'},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'A3387PedidoCompraFilialEmpId',fld:'PEDIDOCOMPRAFILIALEMPID'},{av:'AV69FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'AV67FilialId',fld:'vFILIALID'},{av:'AV70PedidoCompraDataIni',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV71PedidoCompraDataFim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'A3389PedidoCompraDataEntrega',fld:'PEDIDOCOMPRADATAENTREGA'},{av:'AV75PedidoCompraDataEntregaIni',fld:'vPEDIDOCOMPRADATAENTREGAINI'},{av:'AV76PedidoCompraDataEntregaFim',fld:'vPEDIDOCOMPRADATAENTREGAFIM'},{av:'AV78PessoaId',fld:'vPESSOAID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV72VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV74VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV81SNApenasNaoAutorizados',fld:'vSNAPENASNAOAUTORIZADOS'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64}],[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'AV89SdtRegAutorizacaoItem',fld:'vSDTREGAUTORIZACAOITEM'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV83bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV84bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV85bmpEnt',fld:'vBMPENT'},{av:'gx.fn.getCtrlProperty("vBMPENT","Tooltiptext")',ctrl:'vBMPENT',prop:'Tooltiptext'},{av:'AV86bmpConEnt',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'AV87bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV93snRetorno',fld:'vSNRETORNO'},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'A3387PedidoCompraFilialEmpId',fld:'PEDIDOCOMPRAFILIALEMPID'},{av:'AV69FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'AV67FilialId',fld:'vFILIALID'},{av:'AV70PedidoCompraDataIni',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV71PedidoCompraDataFim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'A3389PedidoCompraDataEntrega',fld:'PEDIDOCOMPRADATAENTREGA'},{av:'AV75PedidoCompraDataEntregaIni',fld:'vPEDIDOCOMPRADATAENTREGAINI'},{av:'AV76PedidoCompraDataEntregaFim',fld:'vPEDIDOCOMPRADATAENTREGAFIM'},{av:'AV78PessoaId',fld:'vPESSOAID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV72VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV74VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV81SNApenasNaoAutorizados',fld:'vSNAPENASNAOAUTORIZADOS'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64}],[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'AV89SdtRegAutorizacaoItem',fld:'vSDTREGAUTORIZACAOITEM'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV83bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV84bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV85bmpEnt',fld:'vBMPENT'},{av:'gx.fn.getCtrlProperty("vBMPENT","Tooltiptext")',ctrl:'vBMPENT',prop:'Tooltiptext'},{av:'AV86bmpConEnt',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'AV87bmpOco',fld:'vBMPOCO'},{av:'gx.fn.getCtrlProperty("vBMPOCO","Tooltiptext")',ctrl:'vBMPOCO',prop:'Tooltiptext'},{av:'AV93snRetorno',fld:'vSNRETORNO'},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'A3387PedidoCompraFilialEmpId',fld:'PEDIDOCOMPRAFILIALEMPID'},{av:'AV69FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'AV67FilialId',fld:'vFILIALID'},{av:'AV70PedidoCompraDataIni',fld:'vPEDIDOCOMPRADATAINI'},{av:'AV71PedidoCompraDataFim',fld:'vPEDIDOCOMPRADATAFIM'},{av:'A3389PedidoCompraDataEntrega',fld:'PEDIDOCOMPRADATAENTREGA'},{av:'AV75PedidoCompraDataEntregaIni',fld:'vPEDIDOCOMPRADATAENTREGAINI'},{av:'AV76PedidoCompraDataEntregaFim',fld:'vPEDIDOCOMPRADATAENTREGAFIM'},{av:'AV78PessoaId',fld:'vPESSOAID'},{av:'A3361PedidoCompraPessoaEmpId',fld:'PEDIDOCOMPRAPESSOAEMPID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'AV72VendedorId',fld:'vVENDEDORID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV74VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3386PedidoCompraNoPedidoForn',fld:'PEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV81SNApenasNaoAutorizados',fld:'vSNAPENASNAOAUTORIZADOS'},{av:'A4246PedidoCompraUsuarioAut',fld:'PEDIDOCOMPRAUSUARIOAUT'},{av:'A4247PedidoCompraDataHoraAut',fld:'PEDIDOCOMPRADATAHORAAUT'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64}],[{av:'AV82SdtRegAutorizacao',fld:'vSDTREGAUTORIZACAO',grid:64},{av:'AV88ValorTotalLiquido',fld:'vVALORTOTALLIQUIDO'},{av:'AV89SdtRegAutorizacaoItem',fld:'vSDTREGAUTORIZACAOITEM'}]];
   this.setPrompt("PROMPT_FILIALID", [16]);
   this.setPrompt("PROMPT_VENDEDORID", [30]);
   this.setPrompt("PROMPT_PESSOAID", [49]);
   this.EnterCtrl = ["PESQUISAR"];
   this.setVCMap("A3391PedidoCompraValorTotal", "PEDIDOCOMPRAVALORTOTAL", 0, "decimal");
   this.setVCMap("A3382PedidoCompraValorDesconto", "PEDIDOCOMPRAVALORDESCONTO", 0, "decimal");
   this.setVCMap("A3383PedidoCompraValorFrete", "PEDIDOCOMPRAVALORFRETE", 0, "decimal");
   this.setVCMap("A3385PedidoCompraValorSeguro", "PEDIDOCOMPRAVALORSEGURO", 0, "decimal");
   this.setVCMap("A3384PedidoCompraValorEncargo", "PEDIDOCOMPRAVALORENCARGO", 0, "decimal");
   this.setVCMap("A3785PedidoCompraValorIPI", "PEDIDOCOMPRAVALORIPI", 0, "decimal");
   this.setVCMap("A3786PedidoCompraValorICMS", "PEDIDOCOMPRAVALORICMS", 0, "decimal");
   this.setVCMap("A3787PedidoCompraValorICMSST", "PEDIDOCOMPRAVALORICMSST", 0, "decimal");
   this.setVCMap("A3788PedidoCompraValorLiquido", "PEDIDOCOMPRAVALORLIQUIDO", 0, "decimal");
   this.setVCMap("AV93snRetorno", "vSNRETORNO", 0, "char");
   this.setVCMap("AV82SdtRegAutorizacao", "vSDTREGAUTORIZACAO", 0, "CollSdtRegAutorizacao.SdtRegAutorizacaoItem");
   this.setVCMap("A3336PedidoCompraAno", "PEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("A3337PedidoCompraNumero", "PEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("A3360PedidoCompraData", "PEDIDOCOMPRADATA", 0, "date");
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3380PedidoCompraSituacao", "PEDIDOCOMPRASITUACAO", 0, "char");
   this.setVCMap("A3387PedidoCompraFilialEmpId", "PEDIDOCOMPRAFILIALEMPID", 0, "char");
   this.setVCMap("A3388PedidoCompraFilialId", "PEDIDOCOMPRAFILIALID", 0, "int");
   this.setVCMap("A3389PedidoCompraDataEntrega", "PEDIDOCOMPRADATAENTREGA", 0, "date");
   this.setVCMap("A3361PedidoCompraPessoaEmpId", "PEDIDOCOMPRAPESSOAEMPID", 0, "char");
   this.setVCMap("A3362PedidoCompraPessoaId", "PEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("A1229VendedorEmpresaId", "VENDEDOREMPRESAID", 0, "char");
   this.setVCMap("A1237VendedorId", "VENDEDORID", 0, "int");
   this.setVCMap("A3386PedidoCompraNoPedidoForn", "PEDIDOCOMPRANOPEDIDOFORN", 0, "svchar");
   this.setVCMap("A4246PedidoCompraUsuarioAut", "PEDIDOCOMPRAUSUARIOAUT", 0, "char");
   this.setVCMap("A4247PedidoCompraDataHoraAut", "PEDIDOCOMPRADATAHORAAUT", 0, "dtime");
   this.setVCMap("A3778PedidoCompraPessoaFantasia", "PEDIDOCOMPRAPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A1148VendedorNome", "VENDEDORNOME", 0, "svchar");
   this.setVCMap("A3788PedidoCompraValorLiquido", "PEDIDOCOMPRAVALORLIQUIDO", 0, "decimal");
   this.setVCMap("AV102Chamada", "vCHAMADA", 0, "char");
   this.setVCMap("AV93snRetorno", "vSNRETORNO", 0, "char");
   this.setVCMap("AV82SdtRegAutorizacao", "vSDTREGAUTORIZACAO", 0, "CollSdtRegAutorizacao.SdtRegAutorizacaoItem");
   this.setVCMap("A3336PedidoCompraAno", "PEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("A3337PedidoCompraNumero", "PEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("A3360PedidoCompraData", "PEDIDOCOMPRADATA", 0, "date");
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3380PedidoCompraSituacao", "PEDIDOCOMPRASITUACAO", 0, "char");
   this.setVCMap("A3387PedidoCompraFilialEmpId", "PEDIDOCOMPRAFILIALEMPID", 0, "char");
   this.setVCMap("A3388PedidoCompraFilialId", "PEDIDOCOMPRAFILIALID", 0, "int");
   this.setVCMap("A3389PedidoCompraDataEntrega", "PEDIDOCOMPRADATAENTREGA", 0, "date");
   this.setVCMap("A3361PedidoCompraPessoaEmpId", "PEDIDOCOMPRAPESSOAEMPID", 0, "char");
   this.setVCMap("A3362PedidoCompraPessoaId", "PEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("A1229VendedorEmpresaId", "VENDEDOREMPRESAID", 0, "char");
   this.setVCMap("A1237VendedorId", "VENDEDORID", 0, "int");
   this.setVCMap("A3386PedidoCompraNoPedidoForn", "PEDIDOCOMPRANOPEDIDOFORN", 0, "svchar");
   this.setVCMap("A4246PedidoCompraUsuarioAut", "PEDIDOCOMPRAUSUARIOAUT", 0, "char");
   this.setVCMap("A4247PedidoCompraDataHoraAut", "PEDIDOCOMPRADATAHORAAUT", 0, "dtime");
   this.setVCMap("A3778PedidoCompraPessoaFantasia", "PEDIDOCOMPRAPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A1148VendedorNome", "VENDEDORNOME", 0, "svchar");
   this.setVCMap("A3788PedidoCompraValorLiquido", "PEDIDOCOMPRAVALORLIQUIDO", 0, "decimal");
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV83bmpContas", rfrProp:"Value", gxAttId:"Bmpcontas"});
   GridContainer.addRefreshingVar({rfrVar:"AV83bmpContas", rfrProp:"Tooltiptext", gxAttId:"Bmpcontas"});
   GridContainer.addRefreshingVar({rfrVar:"AV84bmpImp", rfrProp:"Value", gxAttId:"Bmpimp"});
   GridContainer.addRefreshingVar({rfrVar:"AV84bmpImp", rfrProp:"Tooltiptext", gxAttId:"Bmpimp"});
   GridContainer.addRefreshingVar({rfrVar:"AV85bmpEnt", rfrProp:"Value", gxAttId:"Bmpent"});
   GridContainer.addRefreshingVar({rfrVar:"AV85bmpEnt", rfrProp:"Tooltiptext", gxAttId:"Bmpent"});
   GridContainer.addRefreshingVar({rfrVar:"AV86bmpConEnt", rfrProp:"Value", gxAttId:"Bmpconent"});
   GridContainer.addRefreshingVar({rfrVar:"AV86bmpConEnt", rfrProp:"Tooltiptext", gxAttId:"Bmpconent"});
   GridContainer.addRefreshingVar({rfrVar:"AV87bmpOco", rfrProp:"Value", gxAttId:"Bmpoco"});
   GridContainer.addRefreshingVar({rfrVar:"AV87bmpOco", rfrProp:"Tooltiptext", gxAttId:"Bmpoco"});
   GridContainer.addRefreshingVar({rfrVar:"AV93snRetorno"});
   GridContainer.addRefreshingVar({rfrVar:"AV82SdtRegAutorizacao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar({rfrVar:"A3336PedidoCompraAno"});
   GridContainer.addRefreshingVar({rfrVar:"A3337PedidoCompraNumero"});
   GridContainer.addRefreshingVar({rfrVar:"A3360PedidoCompraData"});
   GridContainer.addRefreshingVar(this.GXValidFnc[102]);
   GridContainer.addRefreshingVar({rfrVar:"A3426PedidoCompraEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A3380PedidoCompraSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"A3387PedidoCompraFilialEmpId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridContainer.addRefreshingVar({rfrVar:"A3388PedidoCompraFilialId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar({rfrVar:"A3389PedidoCompraDataEntrega"});
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"A3361PedidoCompraPessoaEmpId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[103]);
   GridContainer.addRefreshingVar({rfrVar:"A3362PedidoCompraPessoaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar({rfrVar:"A1229VendedorEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridContainer.addRefreshingVar({rfrVar:"A1237VendedorId"});
   GridContainer.addRefreshingVar({rfrVar:"A3386PedidoCompraNoPedidoForn"});
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridContainer.addRefreshingVar({rfrVar:"A4246PedidoCompraUsuarioAut"});
   GridContainer.addRefreshingVar({rfrVar:"A4247PedidoCompraDataHoraAut"});
   GridContainer.addRefreshingVar({rfrVar:"A3778PedidoCompraPessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A1148VendedorNome"});
   GridContainer.addRefreshingVar({rfrVar:"A3788PedidoCompraValorLiquido"});
   this.addGridBCProperty("Sdtregautorizacao", ["PedidoCompraAno"], this.GXValidFnc[65], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["PedidoCompraNumero"], this.GXValidFnc[66], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["PedidoCompraFornecedor"], this.GXValidFnc[67], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["PedidoCompraData"], this.GXValidFnc[68], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["PedidoCompraValorLiquido"], this.GXValidFnc[69], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["PedidoCompraUsuarioAut"], this.GXValidFnc[70], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["PedidoCompraDataHoraAut"], this.GXValidFnc[71], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["SNRegAutorizacao"], this.GXValidFnc[78], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["PedidoCompraComprador"], this.GXValidFnc[79], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["PedidoCompraPessoaId"], this.GXValidFnc[80], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["PedidoCompraPessoaFantasia"], this.GXValidFnc[81], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["VendedorId"], this.GXValidFnc[82], "AV82SdtRegAutorizacao");
   this.addGridBCProperty("Sdtregautorizacao", ["QtdeCaracter"], this.GXValidFnc[83], "AV82SdtRegAutorizacao");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarautorizacao());
