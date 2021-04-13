/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:9:2.89
*/
gx.evt.autoSkip = false;
gx.define('hconsultarautorizacaopendente', false, function () {
   this.ServerClass =  "hconsultarautorizacaopendente" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV79CalcNoPedidoAno=gx.fn.getControlValue("vCALCNOPEDIDOANO") ;
      this.AV8UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV31Sistema=gx.fn.getControlValue("vSISTEMA") ;
      this.AV13MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.AV52SdtAutorizacaoPendente=gx.fn.getControlValue("vSDTAUTORIZACAOPENDENTE") ;
      this.AV64SituacaoPedidoParm=gx.fn.getControlValue("vSITUACAOPEDIDOPARM") ;
      this.AV85TipoTela=gx.fn.getControlValue("vTIPOTELA") ;
   };
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
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pedidocompraempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOCOMPRAEMPRESAID");
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
   this.e11sk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e19sk2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e20sk2_client=function()
   {
      this.executeServerEvent("'CONTAS'", true, arguments[0], false, false);
   };
   this.e21sk2_client=function()
   {
      this.executeServerEvent("'ENTREGAS'", true, arguments[0], false, false);
   };
   this.e22sk2_client=function()
   {
      this.executeServerEvent("'ACOMPANHAMENTO'", true, arguments[0], false, false);
   };
   this.e16sk2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12sk2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e13sk2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e14sk2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e15sk2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e17sk2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e25sk2_client=function()
   {
      this.executeServerEvent("'NOVAOCORRENCIA'", true, arguments[0], false, false);
   };
   this.e26sk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,23,26,28,31,33,35,36,39,41,42,44,47,49,52,54,57,59,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,89,93,96,98,100,102,104,106,107,108,109,110,111,112,113,114,115,116,117,118,119,121,122,123];
   this.GXLastCtrlId =123;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",66,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultarautorizacaopendente",[],false,1,true,true,0,true,false,false,"CollSdtAutorizacaoPendente.SdtAutorizacaoPendenteItem",0,"px","Novo registro",true,false,false,null,null,false,"AV52SdtAutorizacaoPendente",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Anopedidogrid",67,"vANOPEDIDOGRID","Ano","","AnoPedidoGrid","int",0,"px",4,4,"left",null,[],"Anopedidogrid","AnoPedidoGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11W",68,"CTLANOPEDIDO","Ano","","AnoPedido","int",0,"px",4,4,"right",null,[],"GXV11W","GXV11W",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addSingleLineEdit("GXV11X",69,"CTLNUMEROPEDIDO","Número","","NumeroPedido","int",0,"px",7,7,"right",null,[],"GXV11X","GXV11X",true,0,false,false,"AttributeSemMargem",1,"");
   GridContainer.addSingleLineEdit("GXV11Y",70,"CTLDATAPEDIDO","Data","","DataPedido","date",0,"px",10,10,"left",null,[],"GXV11Y","GXV11Y",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Z",71,"CTLNOMEFORNECEDOR","Fornecedor","","NomeFornecedor","svchar",0,"px",60,60,"left",null,[],"GXV11Z","GXV11Z",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV120",72,"CTLDATAPREVISAO","","","DataPrevisao","date",0,"px",10,10,"left",null,[],"GXV120","GXV120",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV121",73,"CTLQTDEDIASATRASO","Dias Atraso","","QtdeDiasAtraso","int",0,"px",4,4,"right",null,[],"GXV121","GXV121",true,0,false,false,"AttributeSemMargem",1,"");
   GridContainer.addSingleLineEdit("GXV122",74,"CTLVALORPEDIDO","Valor Líquido","","ValorPedido","decimal",0,"px",22,22,"right",null,[],"GXV122","GXV122",true,2,false,false,"AttributeSemMargem",1,"");
   GridContainer.addSingleLineEdit("Valorpendente",75,"vVALORPENDENTE","Valor Pendente","","ValorPendente","decimal",0,"px",22,22,"right",null,[],"Valorpendente","ValorPendente",true,2,false,false,"AttributeSemMargem",1,"");
   GridContainer.addSingleLineEdit("GXV124",76,"CTLDATAENTREGA","Data Entrega","","DataEntrega","date",0,"px",10,10,"right",null,[],"GXV124","GXV124",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV125",77,"CTLCODIGOFORNECEDOR","Fornecedor","","CodigoFornecedor","int",0,"px",7,7,"right",null,[],"GXV125","GXV125",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV126",78,"CTLFILIAL","Código Filial","","Filial","int",0,"px",7,7,"right",null,[],"GXV126","GXV126",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",79,0,"px",17,"px","e19sk2_client","","Consulta","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcontas","vBMPCONTAS",80,0,"px",17,"px","e20sk2_client","","Contas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpentrega","vBMPENTREGA",81,0,"px",17,"px","e21sk2_client","","Cons Ent","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpocorrencia","vBMPOCORRENCIA",82,0,"px",17,"px","e22sk2_client","","Cons Oco","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpnovaocorrencia","vBMPNOVAOCORRENCIA",83,0,"px",17,"px","e25sk2_client","","Inc Oco","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TABLE11",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLE13",grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINICIO",gxz:"ZV33DtInicio",gxold:"OV33DtInicio",gxvar:"AV33DtInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33DtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV33DtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICIO",gx.O.AV33DtInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV33DtInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[21]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFINAL",gxz:"ZV34DtFinal",gxold:"OV34DtFinal",gxvar:"AV34DtFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34DtFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34DtFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINAL",gx.O.AV34DtFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34DtFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[28]={fld:"TABLE14",grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAANO",gxz:"ZV49PedidoCompraAno",gxold:"OV49PedidoCompraAno",gxvar:"AV49PedidoCompraAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49PedidoCompraAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANO",gx.O.AV49PedidoCompraAno,0)},c2v:function(){gx.O.AV49PedidoCompraAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TRACO", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANUMERO",gxz:"ZV37PedidoCompraNumero",gxold:"OV37PedidoCompraNumero",gxvar:"AV37PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37PedidoCompraNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERO",gx.O.AV37PedidoCompraNumero,0)},c2v:function(){gx.O.AV37PedidoCompraNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV35PessoaId",gxold:"OV35PessoaId",gxvar:"AV35PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV35PessoaId,0)},c2v:function(){gx.O.AV35PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV36PessoaFantasia",gxold:"OV36PessoaFantasia",gxvar:"AV36PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36PessoaFantasia=Value},v2z:function(Value){gx.O.ZV36PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV36PessoaFantasia,0)},c2v:function(){gx.O.AV36PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE12",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEDIASATRASO",gxz:"ZV55QtdeDiasAtraso",gxold:"OV55QtdeDiasAtraso",gxvar:"AV55QtdeDiasAtraso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55QtdeDiasAtraso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55QtdeDiasAtraso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEDIASATRASO",gx.O.AV55QtdeDiasAtraso,0)},c2v:function(){gx.O.AV55QtdeDiasAtraso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEDIASATRASO",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANOPEDIDOFORN",gxz:"ZV76PedidoCompraNoPedidoForn",gxold:"OV76PedidoCompraNoPedidoForn",gxvar:"AV76PedidoCompraNoPedidoForn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76PedidoCompraNoPedidoForn=Value},v2z:function(Value){gx.O.ZV76PedidoCompraNoPedidoForn=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANOPEDIDOFORN",gx.O.AV76PedidoCompraNoPedidoForn,0)},c2v:function(){gx.O.AV76PedidoCompraNoPedidoForn=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRANOPEDIDOFORN")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV39SolicitacaoNumero",gxold:"OV39SolicitacaoNumero",gxvar:"AV39SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV39SolicitacaoNumero,0)},c2v:function(){gx.O.AV39SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vANOPEDIDOGRID",gxz:"ZV86AnoPedidoGrid",gxold:"OV86AnoPedidoGrid",gxvar:"AV86AnoPedidoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV86AnoPedidoGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86AnoPedidoGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vANOPEDIDOGRID",row || gx.fn.currentGridRowImpl(66),gx.O.AV86AnoPedidoGrid,0)},c2v:function(){gx.O.AV86AnoPedidoGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vANOPEDIDOGRID",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLANOPEDIDO",gxz:"ZV116GXV11W",gxold:"OV116GXV11W",gxvar:"GXV11W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11W=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV116GXV11W=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLANOPEDIDO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11W,0)},c2v:function(){gx.O.GXV11W=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLANOPEDIDO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMEROPEDIDO",gxz:"ZV117GXV11X",gxold:"OV117GXV11X",gxvar:"GXV11X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11X=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV117GXV11X=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMEROPEDIDO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11X,0)},c2v:function(){gx.O.GXV11X=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMEROPEDIDO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAPEDIDO",gxz:"ZV118GXV11Y",gxold:"OV118GXV11Y",gxvar:"GXV11Y",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Y=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV118GXV11Y=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAPEDIDO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11Y,0)},c2v:function(){gx.O.GXV11Y=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAPEDIDO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOMEFORNECEDOR",gxz:"ZV119GXV11Z",gxold:"OV119GXV11Z",gxvar:"GXV11Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Z=Value},v2z:function(Value){gx.O.ZV119GXV11Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOMEFORNECEDOR",row || gx.fn.currentGridRowImpl(66),gx.O.GXV11Z,0)},c2v:function(){gx.O.GXV11Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOMEFORNECEDOR",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAPREVISAO",gxz:"ZV120GXV120",gxold:"OV120GXV120",gxvar:"GXV120",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV120=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV120GXV120=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAPREVISAO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV120,0)},c2v:function(){gx.O.GXV120=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAPREVISAO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDEDIASATRASO",gxz:"ZV121GXV121",gxold:"OV121GXV121",gxvar:"GXV121",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV121=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV121GXV121=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLQTDEDIASATRASO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV121,0)},c2v:function(){gx.O.GXV121=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLQTDEDIASATRASO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORPEDIDO",gxz:"ZV122GXV122",gxold:"OV122GXV122",gxvar:"GXV122",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV122=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV122GXV122=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORPEDIDO",row || gx.fn.currentGridRowImpl(66),gx.O.GXV122,2,',')},c2v:function(){gx.O.GXV122=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORPEDIDO",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORPENDENTE",gxz:"ZV92ValorPendente",gxold:"OV92ValorPendente",gxvar:"AV92ValorPendente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV92ValorPendente=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV92ValorPendente=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORPENDENTE",row || gx.fn.currentGridRowImpl(66),gx.O.AV92ValorPendente,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV92ValorPendente=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORPENDENTE",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDATAENTREGA",gxz:"ZV123GXV124",gxold:"OV123GXV124",gxvar:"GXV124",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV124=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV123GXV124=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDATAENTREGA",row || gx.fn.currentGridRowImpl(66),gx.O.GXV124,0)},c2v:function(){gx.O.GXV124=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDATAENTREGA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIGOFORNECEDOR",gxz:"ZV124GXV125",gxold:"OV124GXV125",gxvar:"GXV125",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV125=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV124GXV125=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCODIGOFORNECEDOR",row || gx.fn.currentGridRowImpl(66),gx.O.GXV125,0)},c2v:function(){gx.O.GXV125=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCODIGOFORNECEDOR",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFILIAL",gxz:"ZV125GXV126",gxold:"OV125GXV126",gxvar:"GXV126",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV126=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV125GXV126=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLFILIAL",row || gx.fn.currentGridRowImpl(66),gx.O.GXV126,0)},c2v:function(){gx.O.GXV126=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLFILIAL",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV15bmpCon",gxold:"OV15bmpCon",gxvar:"AV15bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpCon=Value},v2z:function(Value){gx.O.ZV15bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(66),gx.O.AV15bmpCon,gx.O.AV128Bmpcon_GXI)},c2v:function(){gx.O.AV128Bmpcon_GXI=this.val_GXI();gx.O.AV15bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV128Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONTAS",gxz:"ZV41bmpContas",gxold:"OV41bmpContas",gxvar:"AV41bmpContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV41bmpContas=Value},v2z:function(Value){gx.O.ZV41bmpContas=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONTAS",row || gx.fn.currentGridRowImpl(66),gx.O.AV41bmpContas,gx.O.AV130Bmpcontas_GXI)},c2v:function(){gx.O.AV130Bmpcontas_GXI=this.val_GXI();gx.O.AV41bmpContas=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONTAS",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONTAS_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV130Bmpcontas_GXI',nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPENTREGA",gxz:"ZV87BmpEntrega",gxold:"OV87BmpEntrega",gxvar:"AV87BmpEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV87BmpEntrega=Value},v2z:function(Value){gx.O.ZV87BmpEntrega=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPENTREGA",row || gx.fn.currentGridRowImpl(66),gx.O.AV87BmpEntrega,gx.O.AV129Bmpentrega_GXI)},c2v:function(){gx.O.AV129Bmpentrega_GXI=this.val_GXI();gx.O.AV87BmpEntrega=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPENTREGA",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPENTREGA_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV129Bmpentrega_GXI',nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOCORRENCIA",gxz:"ZV61BmpOcorrencia",gxold:"OV61BmpOcorrencia",gxvar:"AV61BmpOcorrencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV61BmpOcorrencia=Value},v2z:function(Value){gx.O.ZV61BmpOcorrencia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOCORRENCIA",row || gx.fn.currentGridRowImpl(66),gx.O.AV61BmpOcorrencia,gx.O.AV131Bmpocorrencia_GXI)},c2v:function(){gx.O.AV131Bmpocorrencia_GXI=this.val_GXI();gx.O.AV61BmpOcorrencia=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOCORRENCIA",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOCORRENCIA_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV131Bmpocorrencia_GXI',nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPNOVAOCORRENCIA",gxz:"ZV62BmpNovaOcorrencia",gxold:"OV62BmpNovaOcorrencia",gxvar:"AV62BmpNovaOcorrencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV62BmpNovaOcorrencia=Value},v2z:function(Value){gx.O.ZV62BmpNovaOcorrencia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPNOVAOCORRENCIA",row || gx.fn.currentGridRowImpl(66),gx.O.AV62BmpNovaOcorrencia,gx.O.AV141Bmpnovaocorrencia_GXI)},c2v:function(){gx.O.AV141Bmpnovaocorrencia_GXI=this.val_GXI();gx.O.AV62BmpNovaOcorrencia=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPNOVAOCORRENCIA",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPNOVAOCORRENCIA_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV141Bmpnovaocorrencia_GXI',nac:gx.falseFn};
   GXValidFnc[89]={fld:"TABLE4",grid:0};
   GXValidFnc[93]={fld:"TABLE8",grid:0};
   GXValidFnc[96]={fld:"IMGIMP",grid:0};
   GXValidFnc[98]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[100]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[102]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[104]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[106]={fld:"IMAGE5",grid:0};
   GXValidFnc[107]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompraempresaid,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAEMPRESAID",gxz:"ZV59PedidoCompraEmpresaId",gxold:"OV59PedidoCompraEmpresaId",gxvar:"AV59PedidoCompraEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59PedidoCompraEmpresaId=Value},v2z:function(Value){gx.O.ZV59PedidoCompraEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAEMPRESAID",gx.O.AV59PedidoCompraEmpresaId,0)},c2v:function(){gx.O.AV59PedidoCompraEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV83FilialId",gxold:"OV83FilialId",gxvar:"AV83FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV83FilialId,0)},c2v:function(){gx.O.AV83FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV26Ano",gxold:"OV26Ano",gxvar:"AV26Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV26Ano,0)},c2v:function(){gx.O.AV26Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vERRO",gxz:"ZV45Erro",gxold:"OV45Erro",gxvar:"AV45Erro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45Erro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45Erro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vERRO",gx.O.AV45Erro,0)},c2v:function(){gx.O.AV45Erro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vERRO",'.')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV16EmpresaPadrao",gxold:"OV16EmpresaPadrao",gxvar:"AV16EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV16EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV16EmpresaPadrao,0)},c2v:function(){gx.O.AV16EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG",gxz:"ZV105CtrlPag",gxold:"OV105CtrlPag",gxvar:"AV105CtrlPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105CtrlPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV105CtrlPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG",gx.O.AV105CtrlPag,0)},c2v:function(){gx.O.AV105CtrlPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG",'.')},nac:gx.falseFn};
   GXValidFnc[114]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV42PessoaEmpresaId",gxold:"OV42PessoaEmpresaId",gxvar:"AV42PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV42PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV42PessoaEmpresaId,0)},c2v:function(){gx.O.AV42PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOPEDIDO",gxz:"ZV63SituacaoPedido",gxold:"OV63SituacaoPedido",gxvar:"AV63SituacaoPedido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63SituacaoPedido=Value},v2z:function(Value){gx.O.ZV63SituacaoPedido=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOPEDIDO",gx.O.AV63SituacaoPedido,0)},c2v:function(){gx.O.AV63SituacaoPedido=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOPEDIDO")},nac:gx.falseFn};
   GXValidFnc[116]={fld:"JS", format:2,grid:0};
   GXValidFnc[117]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV27Sim",gxold:"OV27Sim",gxvar:"AV27Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Sim=Value},v2z:function(Value){gx.O.ZV27Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV27Sim,0)},c2v:function(){gx.O.AV27Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV28Nao",gxold:"OV28Nao",gxvar:"AV28Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Nao=Value},v2z:function(Value){gx.O.ZV28Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV28Nao,0)},c2v:function(){gx.O.AV28Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV109Qtde",gxold:"OV109Qtde",gxvar:"AV109Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV109Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV109Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV109Qtde,0)},c2v:function(){gx.O.AV109Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[121]={fld:"BTNHELP",grid:0};
   GXValidFnc[122]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[123]={fld:"PROMPT_SOLICITACAONUMERO",grid:0};
   this.AV33DtInicio = gx.date.nullDate() ;
   this.ZV33DtInicio = gx.date.nullDate() ;
   this.OV33DtInicio = gx.date.nullDate() ;
   this.AV34DtFinal = gx.date.nullDate() ;
   this.ZV34DtFinal = gx.date.nullDate() ;
   this.OV34DtFinal = gx.date.nullDate() ;
   this.AV49PedidoCompraAno = 0 ;
   this.ZV49PedidoCompraAno = 0 ;
   this.OV49PedidoCompraAno = 0 ;
   this.AV37PedidoCompraNumero = 0 ;
   this.ZV37PedidoCompraNumero = 0 ;
   this.OV37PedidoCompraNumero = 0 ;
   this.AV35PessoaId = 0 ;
   this.ZV35PessoaId = 0 ;
   this.OV35PessoaId = 0 ;
   this.AV36PessoaFantasia = "" ;
   this.ZV36PessoaFantasia = "" ;
   this.OV36PessoaFantasia = "" ;
   this.AV55QtdeDiasAtraso = 0 ;
   this.ZV55QtdeDiasAtraso = 0 ;
   this.OV55QtdeDiasAtraso = 0 ;
   this.AV76PedidoCompraNoPedidoForn = "" ;
   this.ZV76PedidoCompraNoPedidoForn = "" ;
   this.OV76PedidoCompraNoPedidoForn = "" ;
   this.AV39SolicitacaoNumero = 0 ;
   this.ZV39SolicitacaoNumero = 0 ;
   this.OV39SolicitacaoNumero = 0 ;
   this.ZV86AnoPedidoGrid = 0 ;
   this.OV86AnoPedidoGrid = 0 ;
   this.ZV116GXV11W = 0 ;
   this.OV116GXV11W = 0 ;
   this.ZV117GXV11X = 0 ;
   this.OV117GXV11X = 0 ;
   this.ZV118GXV11Y = gx.date.nullDate() ;
   this.OV118GXV11Y = gx.date.nullDate() ;
   this.ZV119GXV11Z = "" ;
   this.OV119GXV11Z = "" ;
   this.ZV120GXV120 = gx.date.nullDate() ;
   this.OV120GXV120 = gx.date.nullDate() ;
   this.ZV121GXV121 = 0 ;
   this.OV121GXV121 = 0 ;
   this.ZV122GXV122 = 0 ;
   this.OV122GXV122 = 0 ;
   this.ZV92ValorPendente = 0 ;
   this.OV92ValorPendente = 0 ;
   this.ZV123GXV124 = gx.date.nullDate() ;
   this.OV123GXV124 = gx.date.nullDate() ;
   this.ZV124GXV125 = 0 ;
   this.OV124GXV125 = 0 ;
   this.ZV125GXV126 = 0 ;
   this.OV125GXV126 = 0 ;
   this.ZV15bmpCon = "" ;
   this.OV15bmpCon = "" ;
   this.ZV41bmpContas = "" ;
   this.OV41bmpContas = "" ;
   this.ZV87BmpEntrega = "" ;
   this.OV87BmpEntrega = "" ;
   this.ZV61BmpOcorrencia = "" ;
   this.OV61BmpOcorrencia = "" ;
   this.ZV62BmpNovaOcorrencia = "" ;
   this.OV62BmpNovaOcorrencia = "" ;
   this.AV59PedidoCompraEmpresaId = "" ;
   this.ZV59PedidoCompraEmpresaId = "" ;
   this.OV59PedidoCompraEmpresaId = "" ;
   this.AV83FilialId = 0 ;
   this.ZV83FilialId = 0 ;
   this.OV83FilialId = 0 ;
   this.AV26Ano = 0 ;
   this.ZV26Ano = 0 ;
   this.OV26Ano = 0 ;
   this.AV45Erro = 0 ;
   this.ZV45Erro = 0 ;
   this.OV45Erro = 0 ;
   this.AV16EmpresaPadrao = "" ;
   this.ZV16EmpresaPadrao = "" ;
   this.OV16EmpresaPadrao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV105CtrlPag = 0 ;
   this.ZV105CtrlPag = 0 ;
   this.OV105CtrlPag = 0 ;
   this.AV42PessoaEmpresaId = "" ;
   this.ZV42PessoaEmpresaId = "" ;
   this.OV42PessoaEmpresaId = "" ;
   this.AV63SituacaoPedido = "" ;
   this.ZV63SituacaoPedido = "" ;
   this.OV63SituacaoPedido = "" ;
   this.AV27Sim = "" ;
   this.ZV27Sim = "" ;
   this.OV27Sim = "" ;
   this.AV28Nao = "" ;
   this.ZV28Nao = "" ;
   this.OV28Nao = "" ;
   this.AV109Qtde = 0 ;
   this.ZV109Qtde = 0 ;
   this.OV109Qtde = 0 ;
   this.AV33DtInicio = gx.date.nullDate() ;
   this.AV34DtFinal = gx.date.nullDate() ;
   this.AV49PedidoCompraAno = 0 ;
   this.AV37PedidoCompraNumero = 0 ;
   this.AV35PessoaId = 0 ;
   this.AV36PessoaFantasia = "" ;
   this.AV55QtdeDiasAtraso = 0 ;
   this.AV76PedidoCompraNoPedidoForn = "" ;
   this.AV39SolicitacaoNumero = 0 ;
   this.AV59PedidoCompraEmpresaId = "" ;
   this.AV83FilialId = 0 ;
   this.AV26Ano = 0 ;
   this.AV45Erro = 0 ;
   this.AV16EmpresaPadrao = "" ;
   this.AV5Pagina = 0 ;
   this.AV105CtrlPag = 0 ;
   this.AV42PessoaEmpresaId = "" ;
   this.AV63SituacaoPedido = "" ;
   this.AV27Sim = "" ;
   this.AV28Nao = "" ;
   this.AV109Qtde = 0 ;
   this.AV64SituacaoPedidoParm = "" ;
   this.AV85TipoTela = "" ;
   this.AV86AnoPedidoGrid = 0 ;
   this.GXV11W = 0 ;
   this.GXV11X = 0 ;
   this.GXV11Y = gx.date.nullDate() ;
   this.GXV11Z = "" ;
   this.GXV120 = gx.date.nullDate() ;
   this.GXV121 = 0 ;
   this.GXV122 = 0 ;
   this.AV92ValorPendente = 0 ;
   this.GXV124 = gx.date.nullDate() ;
   this.GXV125 = 0 ;
   this.GXV126 = 0 ;
   this.AV15bmpCon = "" ;
   this.AV41bmpContas = "" ;
   this.AV87BmpEntrega = "" ;
   this.AV61BmpOcorrencia = "" ;
   this.AV62BmpNovaOcorrencia = "" ;
   this.A4203PedidoCompraPagRecNumero = 0 ;
   this.A4202PedidoCompraPagRecAno = 0 ;
   this.A4201PedidoCompraPagRecEmpId = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A4291LOGEntregaDataEnt = gx.date.nullDate() ;
   this.A4290LOGEntregaData = gx.date.nullDate() ;
   this.A8430LOGEntregaDocumento = "" ;
   this.A4287LOGEntregaSeq = 0 ;
   this.A3338PedidoCompraItemSeq = 0 ;
   this.A3349PedidoCompraItemValor = 0 ;
   this.A3423AditivoItemQtde = 0 ;
   this.A3346PedidoCompraItemQtdePedida = 0 ;
   this.A3352PedidoCompraItemValorIPI = 0 ;
   this.A3353PedidoCompraItemValorICMSST = 0 ;
   this.A3351PedidoCompraItemValorICMS = 0 ;
   this.A3350PedidoCompraItemValorDesconto = 0 ;
   this.A3355PedidoCompraItemValorEncargo = 0 ;
   this.A3356PedidoCompraItemValorFrete = 0 ;
   this.A3354PedidoCompraItemValorSeguro = 0 ;
   this.A3348PedidoCompraItemQtdePendente = 0 ;
   this.A4286PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.A3799PedidoCompraLOGSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.AV79CalcNoPedidoAno = "" ;
   this.AV8UsrCod = "" ;
   this.AV31Sistema = "" ;
   this.AV13MsgErro = "" ;
   this.AV52SdtAutorizacaoPendente = [ ] ;
   this.Events = {"e11sk2_client": ["'FECHAR'", true] ,"e19sk2_client": ["'CONSULTAR'", true] ,"e20sk2_client": ["'CONTAS'", true] ,"e21sk2_client": ["'ENTREGAS'", true] ,"e22sk2_client": ["'ACOMPANHAMENTO'", true] ,"e16sk2_client": ["ENTER", true] ,"e12sk2_client": ["'GXM_FIRST'", true] ,"e13sk2_client": ["'GXM_PREVIOUS'", true] ,"e14sk2_client": ["'GXM_NEXT'", true] ,"e15sk2_client": ["'GXM_LAST'", true] ,"e17sk2_client": ["'IMPRIMIR'", true] ,"e25sk2_client": ["'NOVAOCORRENCIA'", true] ,"e26sk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV105CtrlPag',fld:'vCTRLPAG'}],[{av:'gx.fn.getCtrlProperty("vANOPEDIDOGRID","Visible")',ctrl:'vANOPEDIDOGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV85TipoTela',fld:'vTIPOTELA'}],[]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'}],[{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}]];
   this.EvtParms["'CONTAS'"] = [[{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}],[]];
   this.EvtParms["'ENTREGAS'"] = [[{av:'AV59PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}],[]];
   this.EvtParms["'ACOMPANHAMENTO'"] = [[{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}],[]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66},{av:'AV24TpErro',fld:'vTPERRO'},{av:'AV33DtInicio',fld:'vDTINICIO'},{av:'AV34DtFinal',fld:'vDTFINAL'},{av:'AV37PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV59PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'AV49PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'AV35PessoaId',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV42PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV39SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV43SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV63SituacaoPedido',fld:'vSITUACAOPEDIDO'},{av:'AV55QtdeDiasAtraso',fld:'vQTDEDIASATRASO'},{av:'AV76PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV67ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'}],[{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66},{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV45Erro',fld:'vERRO'},{av:'AV132GXLvl155',fld:'vGXLVL155'},{av:'AV133GXLvl171',fld:'vGXLVL171'},{av:'AV36PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV134GXLvl190',fld:'vGXLVL190'},{av:'AV82Arquivo',fld:'vARQUIVO'},{av:'AV80i',fld:'vI'},{av:'AV56Res',fld:'vRES'},{av:'AV57ResInt',fld:'vRESINT'},{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}],[{av:'AV62BmpNovaOcorrencia',fld:'vBMPNOVAOCORRENCIA'},{av:'AV13MsgErro',fld:'vMSGERRO'},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'gx.fn.getCtrlProperty("vBMPNOVAOCORRENCIA","Tooltiptext")',ctrl:'vBMPNOVAOCORRENCIA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPNOVAOCORRENCIA","Enabled")',ctrl:'vBMPNOVAOCORRENCIA',prop:'Enabled'},{av:'AV86AnoPedidoGrid',fld:'vANOPEDIDOGRID'},{av:'AV92ValorPendente',fld:'vVALORPENDENTE'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'AV59PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'AV63SituacaoPedido',fld:'vSITUACAOPEDIDO'},{av:'AV35PessoaId',fld:'vPESSOAID'},{av:'AV33DtInicio',fld:'vDTINICIO'},{av:'AV34DtFinal',fld:'vDTFINAL'},{av:'AV39SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV49PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV37PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV76PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV55QtdeDiasAtraso',fld:'vQTDEDIASATRASO'},{av:'AV67ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'}],[{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV59PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'AV63SituacaoPedido',fld:'vSITUACAOPEDIDO'},{av:'AV35PessoaId',fld:'vPESSOAID'},{av:'AV33DtInicio',fld:'vDTINICIO'},{av:'AV34DtFinal',fld:'vDTFINAL'},{av:'AV39SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV49PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV37PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV76PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV55QtdeDiasAtraso',fld:'vQTDEDIASATRASO'},{av:'AV67ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'}],[{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV59PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'AV63SituacaoPedido',fld:'vSITUACAOPEDIDO'},{av:'AV35PessoaId',fld:'vPESSOAID'},{av:'AV33DtInicio',fld:'vDTINICIO'},{av:'AV34DtFinal',fld:'vDTFINAL'},{av:'AV39SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV49PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV37PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV76PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV55QtdeDiasAtraso',fld:'vQTDEDIASATRASO'},{av:'AV67ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'}],[{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV59PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'AV63SituacaoPedido',fld:'vSITUACAOPEDIDO'},{av:'AV35PessoaId',fld:'vPESSOAID'},{av:'AV33DtInicio',fld:'vDTINICIO'},{av:'AV34DtFinal',fld:'vDTFINAL'},{av:'AV39SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV49PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV37PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV76PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV55QtdeDiasAtraso',fld:'vQTDEDIASATRASO'},{av:'AV67ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'}],[{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV45Erro',fld:'vERRO'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV126Pgmname',fld:'vPGMNAME'},{av:'AV63SituacaoPedido',fld:'vSITUACAOPEDIDO'},{av:'AV33DtInicio',fld:'vDTINICIO'},{av:'AV34DtFinal',fld:'vDTFINAL'},{av:'AV49PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV37PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV35PessoaId',fld:'vPESSOAID'},{av:'AV55QtdeDiasAtraso',fld:'vQTDEDIASATRASO'},{av:'AV76PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV39SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV59PedidoCompraEmpresaId',fld:'vPEDIDOCOMPRAEMPRESAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV42PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV43SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'}],[{av:'AV108OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV17NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV51QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV45Erro',fld:'vERRO'},{av:'AV132GXLvl155',fld:'vGXLVL155'},{av:'AV133GXLvl171',fld:'vGXLVL171'},{av:'AV36PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV134GXLvl190',fld:'vGXLVL190'}]];
   this.EvtParms["'NOVAOCORRENCIA'"] = [[{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}],[]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}],[{av:'gx.fn.getCtrlProperty("vANOPEDIDOGRID","Visible")',ctrl:'vANOPEDIDOGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}],[{av:'gx.fn.getCtrlProperty("vANOPEDIDOGRID","Visible")',ctrl:'vANOPEDIDOGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}],[{av:'gx.fn.getCtrlProperty("vANOPEDIDOGRID","Visible")',ctrl:'vANOPEDIDOGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORPENDENTE","Visible")',ctrl:'vVALORPENDENTE',prop:'Visible'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV87BmpEntrega',fld:'vBMPENTREGA'},{av:'gx.fn.getCtrlProperty("vBMPENTREGA","Tooltiptext")',ctrl:'vBMPENTREGA',prop:'Tooltiptext'},{av:'AV41bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV61BmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV8UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV31Sistema',fld:'vSISTEMA'},{av:'AV13MsgErro',fld:'vMSGERRO'},{av:'AV79CalcNoPedidoAno',fld:'vCALCNOPEDIDOANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV105CtrlPag',fld:'vCTRLPAG'},{av:'AV52SdtAutorizacaoPendente',fld:'vSDTAUTORIZACAOPENDENTE',grid:66}],[{av:'gx.fn.getCtrlProperty("vANOPEDIDOGRID","Visible")',ctrl:'vANOPEDIDOGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.setPrompt("IMGPROMPT", [35,31]);
   this.setPrompt("PROMPT_PESSOAID", [41]);
   this.setPrompt("PROMPT_SOLICITACAONUMERO", [59]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("A3336PedidoCompraAno", "PEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("A3337PedidoCompraNumero", "PEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("A3338PedidoCompraItemSeq", "PEDIDOCOMPRAITEMSEQ", 0, "int");
   this.setVCMap("A3348PedidoCompraItemQtdePendente", "PEDIDOCOMPRAITEMQTDEPENDENTE", 0, "decimal");
   this.setVCMap("AV79CalcNoPedidoAno", "vCALCNOPEDIDOANO", 0, "char");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV31Sistema", "vSISTEMA", 0, "char");
   this.setVCMap("AV13MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV52SdtAutorizacaoPendente", "vSDTAUTORIZACAOPENDENTE", 0, "CollSdtAutorizacaoPendente.SdtAutorizacaoPendenteItem");
   this.setVCMap("AV64SituacaoPedidoParm", "vSITUACAOPEDIDOPARM", 0, "char");
   this.setVCMap("AV85TipoTela", "vTIPOTELA", 0, "char");
   this.setVCMap("AV79CalcNoPedidoAno", "vCALCNOPEDIDOANO", 0, "char");
   this.setVCMap("AV8UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV31Sistema", "vSISTEMA", 0, "char");
   this.setVCMap("AV13MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV52SdtAutorizacaoPendente", "vSDTAUTORIZACAOPENDENTE", 0, "CollSdtAutorizacaoPendente.SdtAutorizacaoPendenteItem");
   GridContainer.addRefreshingVar({rfrVar:"AV92ValorPendente", rfrProp:"Visible", gxAttId:"Valorpendente"});
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV87BmpEntrega", rfrProp:"Value", gxAttId:"Bmpentrega"});
   GridContainer.addRefreshingVar({rfrVar:"AV87BmpEntrega", rfrProp:"Tooltiptext", gxAttId:"Bmpentrega"});
   GridContainer.addRefreshingVar({rfrVar:"AV41bmpContas", rfrProp:"Value", gxAttId:"Bmpcontas"});
   GridContainer.addRefreshingVar({rfrVar:"AV41bmpContas", rfrProp:"Tooltiptext", gxAttId:"Bmpcontas"});
   GridContainer.addRefreshingVar({rfrVar:"AV61BmpOcorrencia", rfrProp:"Value", gxAttId:"Bmpocorrencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV61BmpOcorrencia", rfrProp:"Tooltiptext", gxAttId:"Bmpocorrencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV79CalcNoPedidoAno"});
   GridContainer.addRefreshingVar(this.GXValidFnc[112]);
   GridContainer.addRefreshingVar(this.GXValidFnc[113]);
   GridContainer.addRefreshingVar({rfrVar:"AV8UsrCod"});
   GridContainer.addRefreshingVar({rfrVar:"AV31Sistema"});
   GridContainer.addRefreshingVar({rfrVar:"AV13MsgErro"});
   GridContainer.addRefreshingVar({rfrVar:"AV52SdtAutorizacaoPendente"});
   this.addGridBCProperty("Sdtautorizacaopendente", ["AnoPedido"], this.GXValidFnc[68], "AV52SdtAutorizacaoPendente");
   this.addGridBCProperty("Sdtautorizacaopendente", ["NumeroPedido"], this.GXValidFnc[69], "AV52SdtAutorizacaoPendente");
   this.addGridBCProperty("Sdtautorizacaopendente", ["DataPedido"], this.GXValidFnc[70], "AV52SdtAutorizacaoPendente");
   this.addGridBCProperty("Sdtautorizacaopendente", ["NomeFornecedor"], this.GXValidFnc[71], "AV52SdtAutorizacaoPendente");
   this.addGridBCProperty("Sdtautorizacaopendente", ["DataPrevisao"], this.GXValidFnc[72], "AV52SdtAutorizacaoPendente");
   this.addGridBCProperty("Sdtautorizacaopendente", ["QtdeDiasAtraso"], this.GXValidFnc[73], "AV52SdtAutorizacaoPendente");
   this.addGridBCProperty("Sdtautorizacaopendente", ["ValorPedido"], this.GXValidFnc[74], "AV52SdtAutorizacaoPendente");
   this.addGridBCProperty("Sdtautorizacaopendente", ["DataEntrega"], this.GXValidFnc[76], "AV52SdtAutorizacaoPendente");
   this.addGridBCProperty("Sdtautorizacaopendente", ["CodigoFornecedor"], this.GXValidFnc[77], "AV52SdtAutorizacaoPendente");
   this.addGridBCProperty("Sdtautorizacaopendente", ["Filial"], this.GXValidFnc[78], "AV52SdtAutorizacaoPendente");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarautorizacaopendente());
