/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:21.33
*/
gx.evt.autoSkip = false;
gx.define('hconsultarautorizacao', false, function () {
   this.ServerClass =  "hconsultarautorizacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PESQUISAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A3391PedidoCompraValorTotal=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORTOTAL",'.',',') ;
      this.A3382PedidoCompraValorDesconto=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORDESCONTO",'.',',') ;
      this.A3383PedidoCompraValorFrete=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORFRETE",'.',',') ;
      this.A3385PedidoCompraValorSeguro=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORSEGURO",'.',',') ;
      this.A3384PedidoCompraValorEncargo=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORENCARGO",'.',',') ;
      this.A3785PedidoCompraValorIPI=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORIPI",'.',',') ;
      this.A3786PedidoCompraValorICMS=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORICMS",'.',',') ;
      this.A3787PedidoCompraValorICMSST=gx.fn.getDecimalValue("PEDIDOCOMPRAVALORICMSST",'.',',') ;
      this.A3426PedidoCompraEmpresaId=gx.fn.getControlValue("PEDIDOCOMPRAEMPRESAID") ;
      this.AV103PedidoCompraAnoGrid=gx.fn.getIntegerValue("vPEDIDOCOMPRAANOGRID",'.') ;
      this.AV104PedidoCompraNumeroGrid=gx.fn.getIntegerValue("vPEDIDOCOMPRANUMEROGRID",'.') ;
      this.A3359PedidoCompraItemDataHoraAlt=gx.fn.getDateTimeValue("PEDIDOCOMPRAITEMDATAHORAALT") ;
      this.A3338PedidoCompraItemSeq=gx.fn.getIntegerValue("PEDIDOCOMPRAITEMSEQ",'.') ;
      this.A3349PedidoCompraItemValor=gx.fn.getDecimalValue("PEDIDOCOMPRAITEMVALOR",'.',',') ;
      this.AV105AditivoItemSeq=gx.fn.getIntegerValue("vADITIVOITEMSEQ",'.') ;
      this.AV106PedidoCompraItemValor=gx.fn.getDecimalValue("vPEDIDOCOMPRAITEMVALOR",'.',',') ;
      this.A3423AditivoItemQtde=gx.fn.getDecimalValue("ADITIVOITEMQTDE",'.',',') ;
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
   this.Valid_Pedidocompraano=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAANO", gx.fn.currentGridRowImpl(66));
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
   this.Valid_Pedidocompranumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRANUMERO", gx.fn.currentGridRowImpl(66));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocomprapessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAPESSOAID", gx.fn.currentGridRowImpl(66));
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
   this.Valid_Pedidocompraano=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAANO", gx.fn.currentGridRowImpl(66));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompranumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRANUMERO", gx.fn.currentGridRowImpl(66));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompraano=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAANO", gx.fn.currentGridRowImpl(66));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompranumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRANUMERO", gx.fn.currentGridRowImpl(66));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompraano=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRAANO", gx.fn.currentGridRowImpl(66));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocompranumero=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(66) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PEDIDOCOMPRANUMERO", gx.fn.currentGridRowImpl(66));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e26nk2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalconsultarnotas",[this.A3336PedidoCompraAno, this.A3337PedidoCompraNumero, this.A3362PedidoCompraPessoaId, this.A3778PedidoCompraPessoaFantasia, this.A3360PedidoCompraData]), []);
      this.refreshOutputs([]);
   };
   this.s142_client=function()
   {
      this.AV111NomeClasse =  "AttributeCorPreto"  ;
      if ( this.AV75Cor == "0" || (""==this.AV75Cor) )
      {
         this.AV111NomeClasse =  "AttributeCorPreto"  ;
      }
      else if ( this.AV75Cor == "1" )
      {
         this.AV111NomeClasse =  "AttributeCorVerde"  ;
      }
      else if ( this.AV75Cor == "2" )
      {
         this.AV111NomeClasse =  "AttributeCorVermelho"  ;
      }
      else if ( this.AV75Cor == "3" )
      {
         this.AV111NomeClasse =  "AttributeCorAzul"  ;
      }
      else if ( this.AV75Cor == "4" )
      {
         this.AV111NomeClasse =  "AttributeCorRosa"  ;
      }
      else if ( this.AV75Cor == "5" )
      {
         this.AV111NomeClasse =  "AttributeCorVinho"  ;
      }
      else if ( this.AV75Cor == "6" )
      {
         this.AV111NomeClasse =  "AttributeCorAmarelo"  ;
      }
      gx.fn.setCtrlProperty("PEDIDOCOMPRAANO","Class", this.AV111NomeClasse );
      gx.fn.setCtrlProperty("PEDIDOCOMPRANUMERO","Class", this.AV111NomeClasse );
      gx.fn.setCtrlProperty("PEDIDOCOMPRADATA","Class", this.AV111NomeClasse );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAPESSOAFANTASIA","Class", this.AV111NomeClasse );
      gx.fn.setCtrlProperty("PEDIDOCOMPRAENTREGA","Class", this.AV111NomeClasse );
      gx.fn.setCtrlProperty("PEDIDOCOMPRAVALORLIQUIDO","Class", this.AV111NomeClasse );
      gx.fn.setCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Class", this.AV111NomeClasse );
   };
   this.e28nk2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hacompanhamentopedido",[this.A3336PedidoCompraAno, this.A3337PedidoCompraNumero]), []);
      this.refreshOutputs([]);
   };
   this.e27nk2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultarpedidoentregue",[this.AV17EmpresaPadrao, this.A3336PedidoCompraAno, this.A3337PedidoCompraNumero]), []);
      this.refreshOutputs([]);
   };
   this.e25nk1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmautorizfornec",[]), []);
      this.refreshOutputs([]);
   };
   this.e11nk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e19nk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e12nk2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e13nk2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e14nk2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e15nk2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e16nk2_client=function()
   {
      this.executeServerEvent("'PESQUISAR'", false, null, false, false);
   };
   this.e21nk2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, arguments[0], false, false);
   };
   this.e22nk2_client=function()
   {
      this.executeServerEvent("'ENTREGA'", true, arguments[0], false, false);
   };
   this.e23nk2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24nk2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e29nk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,23,26,28,31,33,35,36,39,41,42,44,47,49,52,54,57,59,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,87,90,92,95,97,100,102,108,112,115,117,119,121,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,140,141,142,143];
   this.GXLastCtrlId =143;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",66,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultarautorizacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3336,67,"PEDIDOCOMPRAANO","","","PedidoCompraAno","int",0,"px",4,4,"right",null,[],3336,"PedidoCompraAno",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(3337,68,"PEDIDOCOMPRANUMERO","","","PedidoCompraNumero","int",0,"px",7,7,"right",null,[],3337,"PedidoCompraNumero",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(3360,69,"PEDIDOCOMPRADATA","","","PedidoCompraData","date",0,"px",10,10,"right",null,[],3360,"PedidoCompraData",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Pedidocomprapessoafantasia",70,"vPEDIDOCOMPRAPESSOAFANTASIA","","","PedidoCompraPessoaFantasia","svchar",0,"px",60,60,"left",null,[],"Pedidocomprapessoafantasia","PedidoCompraPessoaFantasia",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(3368,71,"PEDIDOCOMPRAENTREGA","","","PedidoCompraEntrega","svchar",0,"px",30,30,"left",null,[],3368,"PedidoCompraEntrega",true,0,false,false,"",1,"");
   GridContainer.addSingleLineEdit(3788,72,"PEDIDOCOMPRAVALORLIQUIDO","Valor Líquido","","PedidoCompraValorLiquido","decimal",0,"px",22,22,"right",null,[],3788,"PedidoCompraValorLiquido",false,2,false,false,"",1,"");
   GridContainer.addSingleLineEdit("Pedidocompravalorliquido",73,"vPEDIDOCOMPRAVALORLIQUIDO","Valor Líquido","","PedidoCompraValorLiquido","decimal",0,"px",22,22,"right",null,[],"Pedidocompravalorliquido","PedidoCompraValorLiquido",true,2,false,false,"",1,"");
   GridContainer.addSingleLineEdit(3380,74,"PEDIDOCOMPRASITUACAO","Situação","","PedidoCompraSituacao","char",0,"px",1,1,"left",null,[],3380,"PedidoCompraSituacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",75,0,"px",17,"px","e24nk2_client","","Consulta","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcontas","vBMPCONTAS",76,0,"px",17,"px","e26nk2_client","","Contas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimprime","vBMPIMPRIME",77,0,"px",17,"px","e21nk2_client","","Imp","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3373,78,"PROCESSOCONVANO","Ano Processo","","ProcessoConvAno","int",0,"px",4,4,"right",null,[],3373,"ProcessoConvAno",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3374,79,"PROCESSOCONVNUMERO","Número Processo","","ProcessoConvNumero","int",0,"px",8,8,"right",null,[],3374,"ProcessoConvNumero",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3362,80,"PEDIDOCOMPRAPESSOAID","Fornecedor","","PedidoCompraPessoaId","int",0,"px",7,7,"right",null,[],3362,"PedidoCompraPessoaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3778,81,"PEDIDOCOMPRAPESSOAFANTASIA","Fantasia Fornecedor","","PedidoCompraPessoaFantasia","svchar",0,"px",60,60,"left",null,[],3778,"PedidoCompraPessoaFantasia",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpregprod","vBMPREGPROD",82,0,"px",17,"px","e22nk2_client","","Ent","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpconent","vBMPCONENT",83,0,"px",17,"px","e27nk2_client","","Con","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpocorrencia","vBMPOCORRENCIA",84,0,"px",17,"px","e28nk2_client","","Oco","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TABLE12",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[16]={fld:"TABLE14",grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDTINI",gxz:"ZV67DtIni",gxold:"OV67DtIni",gxvar:"AV67DtIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67DtIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV67DtIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINI",gx.O.AV67DtIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV67DtIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[21]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDTFIM",gxz:"ZV68DtFim",gxold:"OV68DtFim",gxvar:"AV68DtFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68DtFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV68DtFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFIM",gx.O.AV68DtFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV68DtFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[28]={fld:"TABLE15",grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRAANO",gxz:"ZV91PedidoCompraAno",gxold:"OV91PedidoCompraAno",gxvar:"AV91PedidoCompraAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91PedidoCompraAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANO",gx.O.AV91PedidoCompraAno,0)},c2v:function(){gx.O.AV91PedidoCompraAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRANUMERO",gxz:"ZV71PedidoCompraNumero",gxold:"OV71PedidoCompraNumero",gxvar:"AV71PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71PedidoCompraNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERO",gx.O.AV71PedidoCompraNumero,0)},c2v:function(){gx.O.AV71PedidoCompraNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAID",gxz:"ZV69PessoaId",gxold:"OV69PessoaId",gxvar:"AV69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV69PessoaId,0)},c2v:function(){gx.O.AV69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV70PessoaFantasia",gxold:"OV70PessoaFantasia",gxvar:"AV70PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70PessoaFantasia=Value},v2z:function(Value){gx.O.ZV70PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV70PessoaFantasia,0)},c2v:function(){gx.O.AV70PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE13",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRASITUACAO",gxz:"ZV76PedidoCompraSituacao",gxold:"OV76PedidoCompraSituacao",gxvar:"AV76PedidoCompraSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV76PedidoCompraSituacao=Value},v2z:function(Value){gx.O.ZV76PedidoCompraSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vPEDIDOCOMPRASITUACAO",gx.O.AV76PedidoCompraSituacao)},c2v:function(){gx.O.AV76PedidoCompraSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRASITUACAO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPEDIDOCOMPRANOPEDIDOFORN",gxz:"ZV92PedidoCompraNoPedidoForn",gxold:"OV92PedidoCompraNoPedidoForn",gxvar:"AV92PedidoCompraNoPedidoForn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92PedidoCompraNoPedidoForn=Value},v2z:function(Value){gx.O.ZV92PedidoCompraNoPedidoForn=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANOPEDIDOFORN",gx.O.AV92PedidoCompraNoPedidoForn,0)},c2v:function(){gx.O.AV92PedidoCompraNoPedidoForn=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRANOPEDIDOFORN")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITACAONUMERO",gxz:"ZV77SolicitacaoNumero",gxold:"OV77SolicitacaoNumero",gxvar:"AV77SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV77SolicitacaoNumero,0)},c2v:function(){gx.O.AV77SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocompraano,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAANO",gxz:"Z3336PedidoCompraAno",gxold:"O3336PedidoCompraAno",gxvar:"A3336PedidoCompraAno",ucs:[],op:[72,81],ip:[72,81,68,67,80],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3336PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3336PedidoCompraAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(66),gx.O.A3336PedidoCompraAno,0)},c2v:function(){gx.O.A3336PedidoCompraAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocompranumero,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRANUMERO",gxz:"Z3337PedidoCompraNumero",gxold:"O3337PedidoCompraNumero",gxvar:"A3337PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3337PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3337PedidoCompraNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(66),gx.O.A3337PedidoCompraNumero,0)},c2v:function(){gx.O.A3337PedidoCompraNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRADATA",gxz:"Z3360PedidoCompraData",gxold:"O3360PedidoCompraData",gxvar:"A3360PedidoCompraData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3360PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3360PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(66),gx.O.A3360PedidoCompraData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3360PedidoCompraData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAFANTASIA",gxz:"ZV90PedidoCompraPessoaFantasia",gxold:"OV90PedidoCompraPessoaFantasia",gxvar:"AV90PedidoCompraPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV90PedidoCompraPessoaFantasia=Value},v2z:function(Value){gx.O.ZV90PedidoCompraPessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("vPEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(66),gx.O.AV90PedidoCompraPessoaFantasia,0)},c2v:function(){gx.O.AV90PedidoCompraPessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("vPEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAENTREGA",gxz:"Z3368PedidoCompraEntrega",gxold:"O3368PedidoCompraEntrega",gxvar:"A3368PedidoCompraEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3368PedidoCompraEntrega=Value},v2z:function(Value){gx.O.Z3368PedidoCompraEntrega=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAENTREGA",row || gx.fn.currentGridRowImpl(66),gx.O.A3368PedidoCompraEntrega,0)},c2v:function(){gx.O.A3368PedidoCompraEntrega=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRAENTREGA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAVALORLIQUIDO",gxz:"Z3788PedidoCompraValorLiquido",gxold:"O3788PedidoCompraValorLiquido",gxvar:"A3788PedidoCompraValorLiquido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3788PedidoCompraValorLiquido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3788PedidoCompraValorLiquido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(66),gx.O.A3788PedidoCompraValorLiquido,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3788PedidoCompraValorLiquido=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAVALORLIQUIDO",gxz:"ZV102PedidoCompraValorLiquido",gxold:"OV102PedidoCompraValorLiquido",gxvar:"AV102PedidoCompraValorLiquido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV102PedidoCompraValorLiquido=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV102PedidoCompraValorLiquido=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vPEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(66),gx.O.AV102PedidoCompraValorLiquido,2,',')},c2v:function(){gx.O.AV102PedidoCompraValorLiquido=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vPEDIDOCOMPRAVALORLIQUIDO",row || gx.fn.currentGridRowImpl(66),'.',',')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRASITUACAO",gxz:"Z3380PedidoCompraSituacao",gxold:"O3380PedidoCompraSituacao",gxvar:"A3380PedidoCompraSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3380PedidoCompraSituacao=Value},v2z:function(Value){gx.O.Z3380PedidoCompraSituacao=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRASITUACAO",row || gx.fn.currentGridRowImpl(66),gx.O.A3380PedidoCompraSituacao,0)},c2v:function(){gx.O.A3380PedidoCompraSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRASITUACAO",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(66),gx.O.AV16bmpCon,gx.O.AV118Bmpcon_GXI)},c2v:function(){gx.O.AV118Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV118Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONTAS",gxz:"ZV79bmpContas",gxold:"OV79bmpContas",gxvar:"AV79bmpContas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV79bmpContas=Value},v2z:function(Value){gx.O.ZV79bmpContas=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONTAS",row || gx.fn.currentGridRowImpl(66),gx.O.AV79bmpContas,gx.O.AV119Bmpcontas_GXI)},c2v:function(){gx.O.AV119Bmpcontas_GXI=this.val_GXI();gx.O.AV79bmpContas=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONTAS",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONTAS_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV119Bmpcontas_GXI',nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMPRIME",gxz:"ZV97bmpImprime",gxold:"OV97bmpImprime",gxvar:"AV97bmpImprime",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV97bmpImprime=Value},v2z:function(Value){gx.O.ZV97bmpImprime=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMPRIME",row || gx.fn.currentGridRowImpl(66),gx.O.AV97bmpImprime,gx.O.AV120Bmpimprime_GXI)},c2v:function(){gx.O.AV120Bmpimprime_GXI=this.val_GXI();gx.O.AV97bmpImprime=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMPRIME",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMPRIME_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV120Bmpimprime_GXI',nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVANO",gxz:"Z3373ProcessoConvAno",gxold:"O3373ProcessoConvAno",gxvar:"A3373ProcessoConvAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3373ProcessoConvAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3373ProcessoConvAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVANO",row || gx.fn.currentGridRowImpl(66),gx.O.A3373ProcessoConvAno,0)},c2v:function(){gx.O.A3373ProcessoConvAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVANO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVNUMERO",gxz:"Z3374ProcessoConvNumero",gxold:"O3374ProcessoConvNumero",gxvar:"A3374ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3374ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3374ProcessoConvNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(66),gx.O.A3374ProcessoConvNumero,0)},c2v:function(){gx.O.A3374ProcessoConvNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOCONVNUMERO",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:this.Valid_Pedidocomprapessoaid,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAPESSOAID",gxz:"Z3362PedidoCompraPessoaId",gxold:"O3362PedidoCompraPessoaId",gxvar:"A3362PedidoCompraPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3362PedidoCompraPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3362PedidoCompraPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(66),gx.O.A3362PedidoCompraPessoaId,0)},c2v:function(){gx.O.A3362PedidoCompraPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(66),'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAPESSOAFANTASIA",gxz:"Z3778PedidoCompraPessoaFantasia",gxold:"O3778PedidoCompraPessoaFantasia",gxvar:"A3778PedidoCompraPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3778PedidoCompraPessoaFantasia=Value},v2z:function(Value){gx.O.Z3778PedidoCompraPessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(66),gx.O.A3778PedidoCompraPessoaFantasia,0)},c2v:function(){gx.O.A3778PedidoCompraPessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(66))},nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPREGPROD",gxz:"ZV100bmpRegProd",gxold:"OV100bmpRegProd",gxvar:"AV100bmpRegProd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV100bmpRegProd=Value},v2z:function(Value){gx.O.ZV100bmpRegProd=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPREGPROD",row || gx.fn.currentGridRowImpl(66),gx.O.AV100bmpRegProd,gx.O.AV122Bmpregprod_GXI)},c2v:function(){gx.O.AV122Bmpregprod_GXI=this.val_GXI();gx.O.AV100bmpRegProd=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPREGPROD",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPREGPROD_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV122Bmpregprod_GXI',nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONENT",gxz:"ZV101bmpconent",gxold:"OV101bmpconent",gxvar:"AV101bmpconent",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV101bmpconent=Value},v2z:function(Value){gx.O.ZV101bmpconent=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONENT",row || gx.fn.currentGridRowImpl(66),gx.O.AV101bmpconent,gx.O.AV123Bmpconent_GXI)},c2v:function(){gx.O.AV123Bmpconent_GXI=this.val_GXI();gx.O.AV101bmpconent=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONENT",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONENT_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV123Bmpconent_GXI',nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:66,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOCORRENCIA",gxz:"ZV99bmpOcorrencia",gxold:"OV99bmpOcorrencia",gxvar:"AV99bmpOcorrencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV99bmpOcorrencia=Value},v2z:function(Value){gx.O.ZV99bmpOcorrencia=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOCORRENCIA",row || gx.fn.currentGridRowImpl(66),gx.O.AV99bmpOcorrencia,gx.O.AV121Bmpocorrencia_GXI)},c2v:function(){gx.O.AV121Bmpocorrencia_GXI=this.val_GXI();gx.O.AV99bmpOcorrencia=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOCORRENCIA",row || gx.fn.currentGridRowImpl(66))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOCORRENCIA_GXI",row || gx.fn.currentGridRowImpl(66))}, gxvar_GXI:'AV121Bmpocorrencia_GXI',nac:gx.falseFn};
   GXValidFnc[87]={fld:"TABLE30",grid:0};
   GXValidFnc[90]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITABERTO",gxz:"ZV84SitAberto",gxold:"OV84SitAberto",gxvar:"AV84SitAberto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84SitAberto=Value},v2z:function(Value){gx.O.ZV84SitAberto=Value},v2c:function(){gx.fn.setMultimediaValue("vSITABERTO",gx.O.AV84SitAberto,gx.O.AV126Sitaberto_GXI)},c2v:function(){gx.O.AV126Sitaberto_GXI=this.val_GXI();gx.O.AV84SitAberto=this.val()},val:function(){return gx.fn.getBlobValue("vSITABERTO")},val_GXI:function(){return gx.fn.getControlValue("vSITABERTO_GXI")}, gxvar_GXI:'AV126Sitaberto_GXI',nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITFECHADO",gxz:"ZV86SitFechado",gxold:"OV86SitFechado",gxvar:"AV86SitFechado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86SitFechado=Value},v2z:function(Value){gx.O.ZV86SitFechado=Value},v2c:function(){gx.fn.setMultimediaValue("vSITFECHADO",gx.O.AV86SitFechado,gx.O.AV124Sitfechado_GXI)},c2v:function(){gx.O.AV124Sitfechado_GXI=this.val_GXI();gx.O.AV86SitFechado=this.val()},val:function(){return gx.fn.getBlobValue("vSITFECHADO")},val_GXI:function(){return gx.fn.getControlValue("vSITFECHADO_GXI")}, gxvar_GXI:'AV124Sitfechado_GXI',nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITCANCELADO",gxz:"ZV85SitCancelado",gxold:"OV85SitCancelado",gxvar:"AV85SitCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85SitCancelado=Value},v2z:function(Value){gx.O.ZV85SitCancelado=Value},v2c:function(){gx.fn.setMultimediaValue("vSITCANCELADO",gx.O.AV85SitCancelado,gx.O.AV125Sitcancelado_GXI)},c2v:function(){gx.O.AV125Sitcancelado_GXI=this.val_GXI();gx.O.AV85SitCancelado=this.val()},val:function(){return gx.fn.getBlobValue("vSITCANCELADO")},val_GXI:function(){return gx.fn.getControlValue("vSITCANCELADO_GXI")}, gxvar_GXI:'AV125Sitcancelado_GXI',nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[108]={fld:"TABLE8",grid:0};
   GXValidFnc[112]={fld:"TABLE9",grid:0};
   GXValidFnc[115]={fld:"IMAGE1",grid:0};
   GXValidFnc[117]={fld:"IMAGE2",grid:0};
   GXValidFnc[119]={fld:"IMAGE3",grid:0};
   GXValidFnc[121]={fld:"IMAGE4",grid:0};
   GXValidFnc[123]={fld:"IMAGE5",grid:0};
   GXValidFnc[124]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[125]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV80PessoaEmpresaId",gxold:"OV80PessoaEmpresaId",gxvar:"AV80PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV80PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV80PessoaEmpresaId,0)},c2v:function(){gx.O.AV80PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[126]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOR",gxz:"ZV75Cor",gxold:"OV75Cor",gxvar:"AV75Cor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75Cor=Value},v2z:function(Value){gx.O.ZV75Cor=Value},v2c:function(){gx.fn.setControlValue("vCOR",gx.O.AV75Cor,0)},c2v:function(){gx.O.AV75Cor=this.val()},val:function(){return gx.fn.getControlValue("vCOR")},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORABERTA",gxz:"ZV74CorAberta",gxold:"OV74CorAberta",gxvar:"AV74CorAberta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74CorAberta=Value},v2z:function(Value){gx.O.ZV74CorAberta=Value},v2c:function(){gx.fn.setControlValue("vCORABERTA",gx.O.AV74CorAberta,0)},c2v:function(){gx.O.AV74CorAberta=this.val()},val:function(){return gx.fn.getControlValue("vCORABERTA")},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORCANCEL",gxz:"ZV73CorCancel",gxold:"OV73CorCancel",gxvar:"AV73CorCancel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73CorCancel=Value},v2z:function(Value){gx.O.ZV73CorCancel=Value},v2c:function(){gx.fn.setControlValue("vCORCANCEL",gx.O.AV73CorCancel,0)},c2v:function(){gx.O.AV73CorCancel=this.val()},val:function(){return gx.fn.getControlValue("vCORCANCEL")},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORFECHADA",gxz:"ZV72CorFechada",gxold:"OV72CorFechada",gxvar:"AV72CorFechada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72CorFechada=Value},v2z:function(Value){gx.O.ZV72CorFechada=Value},v2c:function(){gx.fn.setControlValue("vCORFECHADA",gx.O.AV72CorFechada,0)},c2v:function(){gx.O.AV72CorFechada=this.val()},val:function(){return gx.fn.getControlValue("vCORFECHADA")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[132]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV93FilialId",gxold:"OV93FilialId",gxvar:"AV93FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV93FilialId,0)},c2v:function(){gx.O.AV93FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[133]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vERRO",gxz:"ZV83Erro",gxold:"OV83Erro",gxvar:"AV83Erro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83Erro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83Erro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vERRO",gx.O.AV83Erro,0)},c2v:function(){gx.O.AV83Erro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vERRO",'.')},nac:gx.falseFn};
   GXValidFnc[134]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANO",gxz:"ZV37Ano",gxold:"OV37Ano",gxvar:"AV37Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37Ano=Value},v2z:function(Value){gx.O.ZV37Ano=Value},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV37Ano,0)},c2v:function(){gx.O.AV37Ano=this.val()},val:function(){return gx.fn.getControlValue("vANO")},nac:gx.falseFn};
   GXValidFnc[135]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[136]={fld:"JS", format:2,grid:0};
   GXValidFnc[137]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV52Sim",gxold:"OV52Sim",gxvar:"AV52Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52Sim=Value},v2z:function(Value){gx.O.ZV52Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV52Sim,0)},c2v:function(){gx.O.AV52Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV53Nao",gxold:"OV53Nao",gxvar:"AV53Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53Nao=Value},v2z:function(Value){gx.O.ZV53Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV53Nao,0)},c2v:function(){gx.O.AV53Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[140]={fld:"BTNPARM",grid:0};
   GXValidFnc[141]={fld:"BTNHELP",grid:0};
   GXValidFnc[142]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[143]={fld:"PROMPT_SOLICITACAONUMERO",grid:0};
   this.AV67DtIni = gx.date.nullDate() ;
   this.ZV67DtIni = gx.date.nullDate() ;
   this.OV67DtIni = gx.date.nullDate() ;
   this.AV68DtFim = gx.date.nullDate() ;
   this.ZV68DtFim = gx.date.nullDate() ;
   this.OV68DtFim = gx.date.nullDate() ;
   this.AV91PedidoCompraAno = 0 ;
   this.ZV91PedidoCompraAno = 0 ;
   this.OV91PedidoCompraAno = 0 ;
   this.AV71PedidoCompraNumero = 0 ;
   this.ZV71PedidoCompraNumero = 0 ;
   this.OV71PedidoCompraNumero = 0 ;
   this.AV69PessoaId = 0 ;
   this.ZV69PessoaId = 0 ;
   this.OV69PessoaId = 0 ;
   this.AV70PessoaFantasia = "" ;
   this.ZV70PessoaFantasia = "" ;
   this.OV70PessoaFantasia = "" ;
   this.AV76PedidoCompraSituacao = "" ;
   this.ZV76PedidoCompraSituacao = "" ;
   this.OV76PedidoCompraSituacao = "" ;
   this.AV92PedidoCompraNoPedidoForn = "" ;
   this.ZV92PedidoCompraNoPedidoForn = "" ;
   this.OV92PedidoCompraNoPedidoForn = "" ;
   this.AV77SolicitacaoNumero = 0 ;
   this.ZV77SolicitacaoNumero = 0 ;
   this.OV77SolicitacaoNumero = 0 ;
   this.Z3336PedidoCompraAno = 0 ;
   this.O3336PedidoCompraAno = 0 ;
   this.Z3337PedidoCompraNumero = 0 ;
   this.O3337PedidoCompraNumero = 0 ;
   this.Z3360PedidoCompraData = gx.date.nullDate() ;
   this.O3360PedidoCompraData = gx.date.nullDate() ;
   this.ZV90PedidoCompraPessoaFantasia = "" ;
   this.OV90PedidoCompraPessoaFantasia = "" ;
   this.Z3368PedidoCompraEntrega = "" ;
   this.O3368PedidoCompraEntrega = "" ;
   this.Z3788PedidoCompraValorLiquido = 0 ;
   this.O3788PedidoCompraValorLiquido = 0 ;
   this.ZV102PedidoCompraValorLiquido = 0 ;
   this.OV102PedidoCompraValorLiquido = 0 ;
   this.Z3380PedidoCompraSituacao = "" ;
   this.O3380PedidoCompraSituacao = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV79bmpContas = "" ;
   this.OV79bmpContas = "" ;
   this.ZV97bmpImprime = "" ;
   this.OV97bmpImprime = "" ;
   this.Z3373ProcessoConvAno = 0 ;
   this.O3373ProcessoConvAno = 0 ;
   this.Z3374ProcessoConvNumero = 0 ;
   this.O3374ProcessoConvNumero = 0 ;
   this.Z3362PedidoCompraPessoaId = 0 ;
   this.O3362PedidoCompraPessoaId = 0 ;
   this.Z3778PedidoCompraPessoaFantasia = "" ;
   this.O3778PedidoCompraPessoaFantasia = "" ;
   this.ZV100bmpRegProd = "" ;
   this.OV100bmpRegProd = "" ;
   this.ZV101bmpconent = "" ;
   this.OV101bmpconent = "" ;
   this.ZV99bmpOcorrencia = "" ;
   this.OV99bmpOcorrencia = "" ;
   this.AV126Sitaberto_GXI = "" ;
   this.AV84SitAberto = "" ;
   this.ZV84SitAberto = "" ;
   this.OV84SitAberto = "" ;
   this.AV124Sitfechado_GXI = "" ;
   this.AV86SitFechado = "" ;
   this.ZV86SitFechado = "" ;
   this.OV86SitFechado = "" ;
   this.AV125Sitcancelado_GXI = "" ;
   this.AV85SitCancelado = "" ;
   this.ZV85SitCancelado = "" ;
   this.OV85SitCancelado = "" ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV80PessoaEmpresaId = "" ;
   this.ZV80PessoaEmpresaId = "" ;
   this.OV80PessoaEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV75Cor = "" ;
   this.ZV75Cor = "" ;
   this.OV75Cor = "" ;
   this.AV74CorAberta = "" ;
   this.ZV74CorAberta = "" ;
   this.OV74CorAberta = "" ;
   this.AV73CorCancel = "" ;
   this.ZV73CorCancel = "" ;
   this.OV73CorCancel = "" ;
   this.AV72CorFechada = "" ;
   this.ZV72CorFechada = "" ;
   this.OV72CorFechada = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV93FilialId = 0 ;
   this.ZV93FilialId = 0 ;
   this.OV93FilialId = 0 ;
   this.AV83Erro = 0 ;
   this.ZV83Erro = 0 ;
   this.OV83Erro = 0 ;
   this.AV37Ano = "" ;
   this.ZV37Ano = "" ;
   this.OV37Ano = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV52Sim = "" ;
   this.ZV52Sim = "" ;
   this.OV52Sim = "" ;
   this.AV53Nao = "" ;
   this.ZV53Nao = "" ;
   this.OV53Nao = "" ;
   this.AV67DtIni = gx.date.nullDate() ;
   this.AV68DtFim = gx.date.nullDate() ;
   this.AV91PedidoCompraAno = 0 ;
   this.AV71PedidoCompraNumero = 0 ;
   this.AV69PessoaId = 0 ;
   this.AV70PessoaFantasia = "" ;
   this.AV76PedidoCompraSituacao = "" ;
   this.AV92PedidoCompraNoPedidoForn = "" ;
   this.AV77SolicitacaoNumero = 0 ;
   this.AV84SitAberto = "" ;
   this.AV86SitFechado = "" ;
   this.AV85SitCancelado = "" ;
   this.AV6PaginaAux = 0 ;
   this.AV80PessoaEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV75Cor = "" ;
   this.AV74CorAberta = "" ;
   this.AV73CorCancel = "" ;
   this.AV72CorFechada = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV93FilialId = 0 ;
   this.AV83Erro = 0 ;
   this.AV37Ano = "" ;
   this.AV5Pagina = 0 ;
   this.AV52Sim = "" ;
   this.AV53Nao = "" ;
   this.A3388PedidoCompraFilialId = 0 ;
   this.A3386PedidoCompraNoPedidoForn = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3787PedidoCompraValorICMSST = 0 ;
   this.A3786PedidoCompraValorICMS = 0 ;
   this.A3785PedidoCompraValorIPI = 0 ;
   this.A3384PedidoCompraValorEncargo = 0 ;
   this.A3385PedidoCompraValorSeguro = 0 ;
   this.A3383PedidoCompraValorFrete = 0 ;
   this.A3382PedidoCompraValorDesconto = 0 ;
   this.A3391PedidoCompraValorTotal = 0 ;
   this.A3361PedidoCompraPessoaEmpId = "" ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3360PedidoCompraData = gx.date.nullDate() ;
   this.AV90PedidoCompraPessoaFantasia = "" ;
   this.A3368PedidoCompraEntrega = "" ;
   this.A3788PedidoCompraValorLiquido = 0 ;
   this.AV102PedidoCompraValorLiquido = 0 ;
   this.A3380PedidoCompraSituacao = "" ;
   this.AV16bmpCon = "" ;
   this.AV79bmpContas = "" ;
   this.AV97bmpImprime = "" ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A3778PedidoCompraPessoaFantasia = "" ;
   this.AV100bmpRegProd = "" ;
   this.AV101bmpconent = "" ;
   this.AV99bmpOcorrencia = "" ;
   this.A3338PedidoCompraItemSeq = 0 ;
   this.A3423AditivoItemQtde = 0 ;
   this.A3359PedidoCompraItemDataHoraAlt = gx.date.nullDate() ;
   this.A3349PedidoCompraItemValor = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.AV103PedidoCompraAnoGrid = 0 ;
   this.AV104PedidoCompraNumeroGrid = 0 ;
   this.AV105AditivoItemSeq = 0 ;
   this.AV106PedidoCompraItemValor = 0 ;
   this.AV111NomeClasse = "" ;
   this.Events = {"e11nk2_client": ["'FECHAR'", true] ,"e19nk2_client": ["ENTER", true] ,"e12nk2_client": ["'GXM_FIRST'", true] ,"e13nk2_client": ["'GXM_PREVIOUS'", true] ,"e14nk2_client": ["'GXM_NEXT'", true] ,"e15nk2_client": ["'GXM_LAST'", true] ,"e16nk2_client": ["'PESQUISAR'", true] ,"e21nk2_client": ["'IMPRIMIR'", true] ,"e22nk2_client": ["'ENTREGA'", true] ,"e23nk2_client": ["'ATUALIZAPAGINA'", true] ,"e24nk2_client": ["'CONSULTAR'", true] ,"e29nk2_client": ["CANCEL", true] ,"e26nk2_client": ["'CONTAS'", false] ,"e28nk2_client": ["'ACOMPANHAMENTO'", false] ,"e27nk2_client": ["'CONSULTA'", false] ,"e25nk1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67DtIni',fld:'vDTINI'},{av:'AV68DtFim',fld:'vDTFIM'},{av:'AV91PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV71PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV69PessoaId',fld:'vPESSOAID'},{av:'AV76PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV92PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV79bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV97bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV99bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV100bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV101bmpconent',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV74CorAberta',fld:'vCORABERTA'},{av:'AV72CorFechada',fld:'vCORFECHADA'},{av:'AV73CorCancel',fld:'vCORCANCEL'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV75Cor',fld:'vCOR'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{ctrl:'PEDIDOCOMPRAANO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Title")',ctrl:'PEDIDOCOMPRAANO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PEDIDOCOMPRANUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRANUMERO","Title")',ctrl:'PEDIDOCOMPRANUMERO',prop:'Title'},{ctrl:'vPEDIDOCOMPRAPESSOAFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vPEDIDOCOMPRAPESSOAFANTASIA","Title")',ctrl:'vPEDIDOCOMPRAPESSOAFANTASIA',prop:'Title'},{ctrl:'PEDIDOCOMPRADATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRADATA","Title")',ctrl:'PEDIDOCOMPRADATA',prop:'Title'},{ctrl:'PEDIDOCOMPRAENTREGA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAENTREGA","Title")',ctrl:'PEDIDOCOMPRAENTREGA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE1","Enabled")',ctrl:'IMAGE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:'IMAGE4',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'}],[{av:'A3388PedidoCompraFilialId',fld:'PEDIDOCOMPRAFILIALID'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'}]];
   this.EvtParms["'CONTAS'"] = [[{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3360PedidoCompraData',fld:'PEDIDOCOMPRADATA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67DtIni',fld:'vDTINI'},{av:'AV68DtFim',fld:'vDTFIM'},{av:'AV91PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV71PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV69PessoaId',fld:'vPESSOAID'},{av:'AV76PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV92PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV79bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV97bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV99bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV100bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV101bmpconent',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV74CorAberta',fld:'vCORABERTA'},{av:'AV72CorFechada',fld:'vCORFECHADA'},{av:'AV73CorCancel',fld:'vCORCANCEL'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV75Cor',fld:'vCOR'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV22Tabela',fld:'vTABELA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV81SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'}],[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV83Erro',fld:'vERRO'},{av:'AV127GXLvl317',fld:'vGXLVL317'},{av:'AV128GXLvl334',fld:'vGXLVL334'},{av:'AV129GXLvl351',fld:'vGXLVL351'}]];
   this.EvtParms["LOAD"] = [[{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV74CorAberta',fld:'vCORABERTA'},{av:'AV72CorFechada',fld:'vCORFECHADA'},{av:'AV73CorCancel',fld:'vCORCANCEL'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV75Cor',fld:'vCOR'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'}],[{av:'AV75Cor',fld:'vCOR'},{av:'AV90PedidoCompraPessoaFantasia',fld:'vPEDIDOCOMPRAPESSOAFANTASIA'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV111NomeClasse',fld:'vNOMECLASSE'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Class")',ctrl:'PEDIDOCOMPRAANO',prop:'Class'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRANUMERO","Class")',ctrl:'PEDIDOCOMPRANUMERO',prop:'Class'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRADATA","Class")',ctrl:'PEDIDOCOMPRADATA',prop:'Class'},{av:'gx.fn.getCtrlProperty("vPEDIDOCOMPRAPESSOAFANTASIA","Class")',ctrl:'vPEDIDOCOMPRAPESSOAFANTASIA',prop:'Class'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAENTREGA","Class")',ctrl:'PEDIDOCOMPRAENTREGA',prop:'Class'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAVALORLIQUIDO","Class")',ctrl:'PEDIDOCOMPRAVALORLIQUIDO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vPEDIDOCOMPRAVALORLIQUIDO","Class")',ctrl:'vPEDIDOCOMPRAVALORLIQUIDO',prop:'Class'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67DtIni',fld:'vDTINI'},{av:'AV68DtFim',fld:'vDTFIM'},{av:'AV91PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV71PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV69PessoaId',fld:'vPESSOAID'},{av:'AV76PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV92PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV79bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV97bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV99bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV100bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV101bmpconent',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV74CorAberta',fld:'vCORABERTA'},{av:'AV72CorFechada',fld:'vCORFECHADA'},{av:'AV73CorCancel',fld:'vCORCANCEL'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV75Cor',fld:'vCOR'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67DtIni',fld:'vDTINI'},{av:'AV68DtFim',fld:'vDTFIM'},{av:'AV91PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV71PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV69PessoaId',fld:'vPESSOAID'},{av:'AV76PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV92PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV79bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV97bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV99bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV100bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV101bmpconent',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV74CorAberta',fld:'vCORABERTA'},{av:'AV72CorFechada',fld:'vCORFECHADA'},{av:'AV73CorCancel',fld:'vCORCANCEL'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV75Cor',fld:'vCOR'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67DtIni',fld:'vDTINI'},{av:'AV68DtFim',fld:'vDTFIM'},{av:'AV91PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV71PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV69PessoaId',fld:'vPESSOAID'},{av:'AV76PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV92PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV79bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV97bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV99bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV100bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV101bmpconent',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV74CorAberta',fld:'vCORABERTA'},{av:'AV72CorFechada',fld:'vCORFECHADA'},{av:'AV73CorCancel',fld:'vCORCANCEL'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV75Cor',fld:'vCOR'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67DtIni',fld:'vDTINI'},{av:'AV68DtFim',fld:'vDTFIM'},{av:'AV91PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV71PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV69PessoaId',fld:'vPESSOAID'},{av:'AV76PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV92PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV79bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV97bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV99bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV100bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV101bmpconent',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV74CorAberta',fld:'vCORABERTA'},{av:'AV72CorFechada',fld:'vCORFECHADA'},{av:'AV73CorCancel',fld:'vCORCANCEL'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV75Cor',fld:'vCOR'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PESQUISAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67DtIni',fld:'vDTINI'},{av:'AV68DtFim',fld:'vDTFIM'},{av:'AV91PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV71PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV69PessoaId',fld:'vPESSOAID'},{av:'AV76PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV92PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV79bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV97bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV99bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV100bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV101bmpconent',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV74CorAberta',fld:'vCORABERTA'},{av:'AV72CorFechada',fld:'vCORFECHADA'},{av:'AV73CorCancel',fld:'vCORCANCEL'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV75Cor',fld:'vCOR'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'},{av:'AV22Tabela',fld:'vTABELA'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV80PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV81SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'}],[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV83Erro',fld:'vERRO'},{av:'AV127GXLvl317',fld:'vGXLVL317'},{av:'AV128GXLvl334',fld:'vGXLVL334'},{av:'AV129GXLvl351',fld:'vGXLVL351'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV113SnCSV',fld:'vSNCSV'},{av:'AV108SNPossuiSistema',fld:'vSNPOSSUISISTEMA'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV110ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV109SdtPedido',fld:'vSDTPEDIDO'},{av:'AV87SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'},{av:'AV98QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'ACOMPANHAMENTO'"] = [[{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'}],[]];
   this.EvtParms["'ENTREGA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67DtIni',fld:'vDTINI'},{av:'AV68DtFim',fld:'vDTFIM'},{av:'AV91PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV71PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV69PessoaId',fld:'vPESSOAID'},{av:'AV76PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV92PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV79bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV97bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV99bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV100bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV101bmpconent',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV74CorAberta',fld:'vCORABERTA'},{av:'AV72CorFechada',fld:'vCORFECHADA'},{av:'AV73CorCancel',fld:'vCORCANCEL'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV75Cor',fld:'vCOR'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'}],[{av:'AV112SnExiste',fld:'vSNEXISTE'}]];
   this.EvtParms["'CONSULTA'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'}],[]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67DtIni',fld:'vDTINI'},{av:'AV68DtFim',fld:'vDTFIM'},{av:'AV91PedidoCompraAno',fld:'vPEDIDOCOMPRAANO'},{av:'AV71PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO'},{av:'AV69PessoaId',fld:'vPESSOAID'},{av:'AV76PedidoCompraSituacao',fld:'vPEDIDOCOMPRASITUACAO'},{av:'AV92PedidoCompraNoPedidoForn',fld:'vPEDIDOCOMPRANOPEDIDOFORN'},{av:'AV77SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("PEDIDOCOMPRAANO","Visible")',ctrl:'PEDIDOCOMPRAANO',prop:'Visible'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV79bmpContas',fld:'vBMPCONTAS'},{av:'gx.fn.getCtrlProperty("vBMPCONTAS","Tooltiptext")',ctrl:'vBMPCONTAS',prop:'Tooltiptext'},{av:'AV97bmpImprime',fld:'vBMPIMPRIME'},{av:'gx.fn.getCtrlProperty("vBMPIMPRIME","Tooltiptext")',ctrl:'vBMPIMPRIME',prop:'Tooltiptext'},{av:'AV99bmpOcorrencia',fld:'vBMPOCORRENCIA'},{av:'gx.fn.getCtrlProperty("vBMPOCORRENCIA","Tooltiptext")',ctrl:'vBMPOCORRENCIA',prop:'Tooltiptext'},{av:'AV100bmpRegProd',fld:'vBMPREGPROD'},{av:'gx.fn.getCtrlProperty("vBMPREGPROD","Tooltiptext")',ctrl:'vBMPREGPROD',prop:'Tooltiptext'},{av:'AV101bmpconent',fld:'vBMPCONENT'},{av:'gx.fn.getCtrlProperty("vBMPCONENT","Tooltiptext")',ctrl:'vBMPCONENT',prop:'Tooltiptext'},{av:'A3380PedidoCompraSituacao',fld:'PEDIDOCOMPRASITUACAO'},{av:'AV74CorAberta',fld:'vCORABERTA'},{av:'AV72CorFechada',fld:'vCORFECHADA'},{av:'AV73CorCancel',fld:'vCORCANCEL'},{av:'A3362PedidoCompraPessoaId',fld:'PEDIDOCOMPRAPESSOAID'},{av:'A3778PedidoCompraPessoaFantasia',fld:'PEDIDOCOMPRAPESSOAFANTASIA'},{av:'A3336PedidoCompraAno',fld:'PEDIDOCOMPRAANO'},{av:'A3337PedidoCompraNumero',fld:'PEDIDOCOMPRANUMERO'},{av:'A3788PedidoCompraValorLiquido',fld:'PEDIDOCOMPRAVALORLIQUIDO'},{av:'AV75Cor',fld:'vCOR'},{av:'A3426PedidoCompraEmpresaId',fld:'PEDIDOCOMPRAEMPRESAID'},{av:'AV103PedidoCompraAnoGrid',fld:'vPEDIDOCOMPRAANOGRID',hsh:true},{av:'AV104PedidoCompraNumeroGrid',fld:'vPEDIDOCOMPRANUMEROGRID',hsh:true},{av:'A3359PedidoCompraItemDataHoraAlt',fld:'PEDIDOCOMPRAITEMDATAHORAALT'},{av:'A3338PedidoCompraItemSeq',fld:'PEDIDOCOMPRAITEMSEQ'},{av:'A3349PedidoCompraItemValor',fld:'PEDIDOCOMPRAITEMVALOR'},{av:'AV105AditivoItemSeq',fld:'vADITIVOITEMSEQ'},{av:'AV102PedidoCompraValorLiquido',fld:'vPEDIDOCOMPRAVALORLIQUIDO'},{av:'AV106PedidoCompraItemValor',fld:'vPEDIDOCOMPRAITEMVALOR'},{av:'A3423AditivoItemQtde',fld:'ADITIVOITEMQTDE'}],[]];
   this.setPrompt("IMGPROMPT", [35,31]);
   this.setPrompt("PROMPT_PESSOAID", [41]);
   this.setPrompt("PROMPT_SOLICITACAONUMERO", [59]);
   this.setVCMap("A3391PedidoCompraValorTotal", "PEDIDOCOMPRAVALORTOTAL", 0, "decimal");
   this.setVCMap("A3382PedidoCompraValorDesconto", "PEDIDOCOMPRAVALORDESCONTO", 0, "decimal");
   this.setVCMap("A3383PedidoCompraValorFrete", "PEDIDOCOMPRAVALORFRETE", 0, "decimal");
   this.setVCMap("A3385PedidoCompraValorSeguro", "PEDIDOCOMPRAVALORSEGURO", 0, "decimal");
   this.setVCMap("A3384PedidoCompraValorEncargo", "PEDIDOCOMPRAVALORENCARGO", 0, "decimal");
   this.setVCMap("A3785PedidoCompraValorIPI", "PEDIDOCOMPRAVALORIPI", 0, "decimal");
   this.setVCMap("A3786PedidoCompraValorICMS", "PEDIDOCOMPRAVALORICMS", 0, "decimal");
   this.setVCMap("A3787PedidoCompraValorICMSST", "PEDIDOCOMPRAVALORICMSST", 0, "decimal");
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV103PedidoCompraAnoGrid", "vPEDIDOCOMPRAANOGRID", 0, "int");
   this.setVCMap("AV104PedidoCompraNumeroGrid", "vPEDIDOCOMPRANUMEROGRID", 0, "int");
   this.setVCMap("A3359PedidoCompraItemDataHoraAlt", "PEDIDOCOMPRAITEMDATAHORAALT", 0, "dtime");
   this.setVCMap("A3338PedidoCompraItemSeq", "PEDIDOCOMPRAITEMSEQ", 0, "int");
   this.setVCMap("A3349PedidoCompraItemValor", "PEDIDOCOMPRAITEMVALOR", 0, "decimal");
   this.setVCMap("AV105AditivoItemSeq", "vADITIVOITEMSEQ", 0, "int");
   this.setVCMap("AV106PedidoCompraItemValor", "vPEDIDOCOMPRAITEMVALOR", 0, "decimal");
   this.setVCMap("A3423AditivoItemQtde", "ADITIVOITEMQTDE", 0, "decimal");
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV103PedidoCompraAnoGrid", "vPEDIDOCOMPRAANOGRID", 0, "int");
   this.setVCMap("AV104PedidoCompraNumeroGrid", "vPEDIDOCOMPRANUMEROGRID", 0, "int");
   this.setVCMap("A3359PedidoCompraItemDataHoraAlt", "PEDIDOCOMPRAITEMDATAHORAALT", 0, "dtime");
   this.setVCMap("A3338PedidoCompraItemSeq", "PEDIDOCOMPRAITEMSEQ", 0, "int");
   this.setVCMap("A3349PedidoCompraItemValor", "PEDIDOCOMPRAITEMVALOR", 0, "decimal");
   this.setVCMap("AV105AditivoItemSeq", "vADITIVOITEMSEQ", 0, "int");
   this.setVCMap("AV106PedidoCompraItemValor", "vPEDIDOCOMPRAITEMVALOR", 0, "decimal");
   this.setVCMap("A3423AditivoItemQtde", "ADITIVOITEMQTDE", 0, "decimal");
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[41]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar(this.GXValidFnc[126]);
   GridContainer.addRefreshingVar(this.GXValidFnc[131]);
   GridContainer.addRefreshingVar({rfrVar:"A3336PedidoCompraAno", rfrProp:"Visible", gxAttId:"3336"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV79bmpContas", rfrProp:"Value", gxAttId:"Bmpcontas"});
   GridContainer.addRefreshingVar({rfrVar:"AV79bmpContas", rfrProp:"Tooltiptext", gxAttId:"Bmpcontas"});
   GridContainer.addRefreshingVar({rfrVar:"AV97bmpImprime", rfrProp:"Value", gxAttId:"Bmpimprime"});
   GridContainer.addRefreshingVar({rfrVar:"AV97bmpImprime", rfrProp:"Tooltiptext", gxAttId:"Bmpimprime"});
   GridContainer.addRefreshingVar({rfrVar:"AV99bmpOcorrencia", rfrProp:"Value", gxAttId:"Bmpocorrencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV99bmpOcorrencia", rfrProp:"Tooltiptext", gxAttId:"Bmpocorrencia"});
   GridContainer.addRefreshingVar({rfrVar:"AV100bmpRegProd", rfrProp:"Value", gxAttId:"Bmpregprod"});
   GridContainer.addRefreshingVar({rfrVar:"AV100bmpRegProd", rfrProp:"Tooltiptext", gxAttId:"Bmpregprod"});
   GridContainer.addRefreshingVar({rfrVar:"AV101bmpconent", rfrProp:"Value", gxAttId:"Bmpconent"});
   GridContainer.addRefreshingVar({rfrVar:"AV101bmpconent", rfrProp:"Tooltiptext", gxAttId:"Bmpconent"});
   GridContainer.addRefreshingVar({rfrVar:"A3380PedidoCompraSituacao", rfrProp:"Value", gxAttId:"3380"});
   GridContainer.addRefreshingVar(this.GXValidFnc[128]);
   GridContainer.addRefreshingVar(this.GXValidFnc[130]);
   GridContainer.addRefreshingVar(this.GXValidFnc[129]);
   GridContainer.addRefreshingVar({rfrVar:"A3362PedidoCompraPessoaId", rfrProp:"Value", gxAttId:"3362"});
   GridContainer.addRefreshingVar({rfrVar:"A3778PedidoCompraPessoaFantasia", rfrProp:"Value", gxAttId:"3778"});
   GridContainer.addRefreshingVar({rfrVar:"A3336PedidoCompraAno", rfrProp:"Value", gxAttId:"3336"});
   GridContainer.addRefreshingVar({rfrVar:"A3337PedidoCompraNumero", rfrProp:"Value", gxAttId:"3337"});
   GridContainer.addRefreshingVar({rfrVar:"A3788PedidoCompraValorLiquido", rfrProp:"Value", gxAttId:"3788"});
   GridContainer.addRefreshingVar(this.GXValidFnc[127]);
   GridContainer.addRefreshingVar({rfrVar:"A3426PedidoCompraEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV103PedidoCompraAnoGrid"});
   GridContainer.addRefreshingVar({rfrVar:"AV104PedidoCompraNumeroGrid"});
   GridContainer.addRefreshingVar({rfrVar:"A3359PedidoCompraItemDataHoraAlt"});
   GridContainer.addRefreshingVar({rfrVar:"A3338PedidoCompraItemSeq"});
   GridContainer.addRefreshingVar({rfrVar:"A3349PedidoCompraItemValor"});
   GridContainer.addRefreshingVar({rfrVar:"AV105AditivoItemSeq"});
   GridContainer.addRefreshingVar({rfrVar:"AV102PedidoCompraValorLiquido", rfrProp:"Value", gxAttId:"Pedidocompravalorliquido"});
   GridContainer.addRefreshingVar({rfrVar:"AV106PedidoCompraItemValor"});
   GridContainer.addRefreshingVar({rfrVar:"A3423AditivoItemQtde"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarautorizacao());
