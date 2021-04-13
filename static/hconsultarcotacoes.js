/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:30.81
*/
gx.evt.autoSkip = false;
gx.define('hconsultarcotacoes', false, function () {
   this.ServerClass =  "hconsultarcotacoes" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PESQUISAR'");
   this.addKeyListener("6", "'PRIMEIRO'");
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("9", "'ULTIMO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV81SdtCotacao=gx.fn.getControlValue("vSDTCOTACAO") ;
   };
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
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Produtoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOEMPRESAID");
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
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("vFILIALID","Visible", 0 );
      gx.fn.setCtrlProperty("vTODAY","Visible", 0 );
      gx.fn.setCtrlProperty("vPRECONULO","Visible", 0 );
      this.AV75PrecoNulo = gx.num.trunc( 0 ,0) ;
      gx.fn.setCtrlProperty("vGRUPOPRODUTOID","Visible", 0 );
      gx.fn.setCtrlProperty("vSUBGRUPOPRODUTOID","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOCODIGOID","Visible", 0 );
      gx.fn.setCtrlProperty("vLOTECOMBINACAO","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOCATEGORIA","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vPESSOAEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vQTDECARACTERES","Visible", 0 );
      gx.fn.setCtrlProperty("vSIM","Visible", 0 );
      gx.fn.setCtrlProperty("vNAO","Visible", 0 );
      gx.fn.setCtrlProperty("vPESSOAID2","Visible", 0 );
      gx.fn.setCtrlProperty("vINTAUXIN","Visible", 0 );
      gx.fn.setCtrlProperty("vPRODUTOREFERENCIA","Visible", 0 );
      gx.fn.setCtrlProperty("vCODIGOBARRASPRODUTOBARRA","Visible", 0 );
      this.AV102SNVenda =  "N"  ;
      gx.fn.setCtrlProperty("vSNVENDA","Visible", 0 );
   };
   this.s122_client=function()
   {
      if ( (0==this.AV95PessoaId) )
      {
         this.AV67PessoaFantasia =  ""  ;
      }
      if ( (0==this.AV70ProdutoId) )
      {
         this.AV71ProdutoDescricao =  ""  ;
      }
   };
   this.s172_client=function()
   {
      if ( this.AV81SdtCotacao.length > 0 )
      {
         this.AV103QtdePag = gx.num.trunc( this.AV81SdtCotacao.length / 10 ,0) ;
         if ( gx.num.mod(this.AV81SdtCotacao.length, 10) != 0 )
         {
            this.AV103QtdePag = gx.num.trunc( this.AV103QtdePag + 1 ,0) ;
         }
         if ( this.AV103QtdePag == 0 )
         {
            this.AV103QtdePag = gx.num.trunc( 1 ,0) ;
         }
      }
      else
      {
         this.AV103QtdePag = gx.num.trunc( 1 ,0) ;
      }
   };
   this.e11nm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e20nm2_client=function()
   {
      this.executeServerEvent("'ITENS'", true, arguments[0], false, false);
   };
   this.e12nm2_client=function()
   {
      this.executeServerEvent("'PESQUISAR'", false, null, false, false);
   };
   this.e13nm2_client=function()
   {
      this.executeServerEvent("'PRIMEIRO'", true, null, false, false);
   };
   this.e14nm2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e15nm2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16nm2_client=function()
   {
      this.executeServerEvent("'ULTIMO'", true, null, false, false);
   };
   this.e21nm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e22nm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,16,19,21,22,25,27,28,29,31,34,36,39,42,45,47,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,77,81,84,86,88,90,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,115,116,117];
   this.GXLastCtrlId =117;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultarcotacoes",[],false,1,true,true,0,false,false,false,"CollSdtCotacao.SdtCotacaoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV81SdtCotacao",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11J",55,"CTLNUMSOLICITACAO","","","NumSolicitacao","int",0,"px",7,7,"right",null,[],"GXV11J","GXV11J",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11K",56,"CTLENTREGA","Data","","Entrega","svchar",0,"px",40,40,"left",null,[],"GXV11K","GXV11K",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11L",57,"CTLFORNECEDORID","Fornecedor","","FornecedorId","int",0,"px",7,7,"right",null,[],"GXV11L","GXV11L",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11M",58,"CTLFANTASIA","Razão","","Fantasia","svchar",0,"px",40,40,"left",null,[],"GXV11M","GXV11M",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11N",59,"CTLRAZAO","Razao","","Razao","char",0,"px",80,80,"left",null,[],"GXV11N","GXV11N",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11O",60,"CTLTELEFONE","Telefone","","Telefone","svchar",0,"px",15,15,"left",null,[],"GXV11O","GXV11O",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11P",61,"CTLCNPJ","CNPJ","","CNPJ","char",0,"px",18,18,"left",null,[],"GXV11P","GXV11P",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11Q",62,"CTLCPF","CPF Cliente/Fornecedor","","CPF","char",0,"px",14,14,"left",null,[],"GXV11Q","GXV11Q",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11R",63,"CTLORCAMENTO","Orcamento","","Orcamento","svchar",0,"px",15,15,"left",null,[],"GXV11R","GXV11R",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11S",64,"CTLPAGAMENTO","Pagamento","","Pagamento","svchar",0,"px",40,40,"left",null,[],"GXV11S","GXV11S",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11T",65,"CTLITEMSOLICITACAO","Sequência","","ItemSolicitacao","int",0,"px",6,6,"right",null,[],"GXV11T","GXV11T",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11U",66,"CTLVALOR","Valor à Vista","","Valor","decimal",0,"px",21,21,"right",null,[],"GXV11U","GXV11U",false,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11V",67,"CTLVALORTOTAL","Valor à Vista","","ValorTotal","decimal",0,"px",21,21,"right",null,[],"GXV11V","GXV11V",false,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11W",68,"CTLCHECK","Check","","Check","char",0,"px",1,1,"left",null,[],"GXV11W","GXV11W",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",69,0,"px",17,"px","e20nm2_client","","Cons","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("Fornecedorgrid",70,"vFORNECEDORGRID","Fornecedor Grid","","FornecedorGrid","int",0,"px",7,7,"right",null,[],"Fornecedorgrid","FornecedorGrid",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Numsolicitacaogrid",71,"vNUMSOLICITACAOGRID","Num Solicitacao Grid","","NumSolicitacaoGrid","int",0,"px",7,7,"right",null,[],"Numsolicitacaogrid","NumSolicitacaoGrid",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TABLE10",grid:0};
   GXValidFnc[14]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV73SolicitacaoNumero",gxold:"OV73SolicitacaoNumero",gxvar:"AV73SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV73SolicitacaoNumero,0)},c2v:function(){gx.O.AV73SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV95PessoaId",gxold:"OV95PessoaId",gxvar:"AV95PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV95PessoaId,0)},c2v:function(){gx.O.AV95PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV67PessoaFantasia",gxold:"OV67PessoaFantasia",gxvar:"AV67PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67PessoaFantasia=Value},v2z:function(Value){gx.O.ZV67PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV67PessoaFantasia,0)},c2v:function(){gx.O.AV67PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV70ProdutoId",gxold:"OV70ProdutoId",gxvar:"AV70ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV70ProdutoId,0)},c2v:function(){gx.O.AV70ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"PROMPTPRODUTO",grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV71ProdutoDescricao",gxold:"OV71ProdutoDescricao",gxvar:"AV71ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV71ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV71ProdutoDescricao,0)},c2v:function(){gx.O.AV71ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE11",grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[36]={fld:"TABLE12",grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINI",gxz:"ZV68DtIni",gxold:"OV68DtIni",gxvar:"AV68DtIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68DtIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV68DtIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINI",gx.O.AV68DtIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV68DtIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFIM",gxz:"ZV69DtFim",gxold:"OV69DtFim",gxvar:"AV69DtFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69DtFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV69DtFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFIM",gx.O.AV69DtFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV69DtFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOTACAONUMEROFORNECEDOR",gxz:"ZV72CotacaoNumeroFornecedor",gxold:"OV72CotacaoNumeroFornecedor",gxvar:"AV72CotacaoNumeroFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72CotacaoNumeroFornecedor=Value},v2z:function(Value){gx.O.ZV72CotacaoNumeroFornecedor=Value},v2c:function(){gx.fn.setControlValue("vCOTACAONUMEROFORNECEDOR",gx.O.AV72CotacaoNumeroFornecedor,0)},c2v:function(){gx.O.AV72CotacaoNumeroFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vCOTACAONUMEROFORNECEDOR")},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMSOLICITACAO",gxz:"ZV113GXV11J",gxold:"OV113GXV11J",gxvar:"GXV11J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11J=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV113GXV11J=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMSOLICITACAO",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11J,0)},c2v:function(){gx.O.GXV11J=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMSOLICITACAO",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLENTREGA",gxz:"ZV114GXV11K",gxold:"OV114GXV11K",gxvar:"GXV11K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11K=Value},v2z:function(Value){gx.O.ZV114GXV11K=Value},v2c:function(row){gx.fn.setGridControlValue("CTLENTREGA",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11K,0)},c2v:function(){gx.O.GXV11K=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLENTREGA",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFORNECEDORID",gxz:"ZV115GXV11L",gxold:"OV115GXV11L",gxvar:"GXV11L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11L=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV115GXV11L=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLFORNECEDORID",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11L,0)},c2v:function(){gx.O.GXV11L=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLFORNECEDORID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLFANTASIA",gxz:"ZV116GXV11M",gxold:"OV116GXV11M",gxvar:"GXV11M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11M=Value},v2z:function(Value){gx.O.ZV116GXV11M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFANTASIA",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11M,0)},c2v:function(){gx.O.GXV11M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFANTASIA",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:80,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLRAZAO",gxz:"ZV117GXV11N",gxold:"OV117GXV11N",gxvar:"GXV11N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11N=Value},v2z:function(Value){gx.O.ZV117GXV11N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLRAZAO",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11N,0)},c2v:function(){gx.O.GXV11N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLRAZAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTELEFONE",gxz:"ZV118GXV11O",gxold:"OV118GXV11O",gxvar:"GXV11O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11O=Value},v2z:function(Value){gx.O.ZV118GXV11O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTELEFONE",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11O,0)},c2v:function(){gx.O.GXV11O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTELEFONE",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCNPJ",gxz:"ZV119GXV11P",gxold:"OV119GXV11P",gxvar:"GXV11P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11P=Value},v2z:function(Value){gx.O.ZV119GXV11P=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCNPJ",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11P,0)},c2v:function(){gx.O.GXV11P=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCNPJ",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCPF",gxz:"ZV120GXV11Q",gxold:"OV120GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Q=Value},v2z:function(Value){gx.O.ZV120GXV11Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCPF",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11Q,0)},c2v:function(){gx.O.GXV11Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCPF",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLORCAMENTO",gxz:"ZV121GXV11R",gxold:"OV121GXV11R",gxvar:"GXV11R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11R=Value},v2z:function(Value){gx.O.ZV121GXV11R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLORCAMENTO",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11R,0)},c2v:function(){gx.O.GXV11R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLORCAMENTO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPAGAMENTO",gxz:"ZV122GXV11S",gxold:"OV122GXV11S",gxvar:"GXV11S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11S=Value},v2z:function(Value){gx.O.ZV122GXV11S=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPAGAMENTO",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11S,0)},c2v:function(){gx.O.GXV11S=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPAGAMENTO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLITEMSOLICITACAO",gxz:"ZV123GXV11T",gxold:"OV123GXV11T",gxvar:"GXV11T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11T=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV123GXV11T=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLITEMSOLICITACAO",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11T,0)},c2v:function(){gx.O.GXV11T=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLITEMSOLICITACAO",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALOR",gxz:"ZV124GXV11U",gxold:"OV124GXV11U",gxvar:"GXV11U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11U=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV124GXV11U=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11U,4,',')},c2v:function(){gx.O.GXV11U=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALOR",row || gx.fn.currentGridRowImpl(54),'.',',')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORTOTAL",gxz:"ZV125GXV11V",gxold:"OV125GXV11V",gxvar:"GXV11V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11V=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV125GXV11V=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORTOTAL",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11V,4,',')},c2v:function(){gx.O.GXV11V=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORTOTAL",row || gx.fn.currentGridRowImpl(54),'.',',')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCHECK",gxz:"ZV126GXV11W",gxold:"OV126GXV11W",gxvar:"GXV11W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11W=Value},v2z:function(Value){gx.O.ZV126GXV11W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLCHECK",row || gx.fn.currentGridRowImpl(54),gx.O.GXV11W,0)},c2v:function(){gx.O.GXV11W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLCHECK",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV15bmpCon",gxold:"OV15bmpCon",gxvar:"AV15bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpCon=Value},v2z:function(Value){gx.O.ZV15bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(54),gx.O.AV15bmpCon,gx.O.AV129Bmpcon_GXI)},c2v:function(){gx.O.AV129Bmpcon_GXI=this.val_GXI();gx.O.AV15bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV129Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFORNECEDORGRID",gxz:"ZV104FornecedorGrid",gxold:"OV104FornecedorGrid",gxvar:"AV104FornecedorGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV104FornecedorGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV104FornecedorGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vFORNECEDORGRID",row || gx.fn.currentGridRowImpl(54),gx.O.AV104FornecedorGrid,0)},c2v:function(){gx.O.AV104FornecedorGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vFORNECEDORGRID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNUMSOLICITACAOGRID",gxz:"ZV105NumSolicitacaoGrid",gxold:"OV105NumSolicitacaoGrid",gxvar:"AV105NumSolicitacaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV105NumSolicitacaoGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV105NumSolicitacaoGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNUMSOLICITACAOGRID",row || gx.fn.currentGridRowImpl(54),gx.O.AV105NumSolicitacaoGrid,0)},c2v:function(){gx.O.AV105NumSolicitacaoGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNUMSOLICITACAOGRID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TABLE6",grid:0};
   GXValidFnc[81]={fld:"TABLE7",grid:0};
   GXValidFnc[84]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[86]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[88]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[90]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[92]={fld:"IMAGE5",grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV76GrupoProdutoId",gxold:"OV76GrupoProdutoId",gxvar:"AV76GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV76GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV76GrupoProdutoId,0)},c2v:function(){gx.O.AV76GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAG",gxz:"ZV103QtdePag",gxold:"OV103QtdePag",gxvar:"AV103QtdePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103QtdePag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103QtdePag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAG",gx.O.AV103QtdePag,0)},c2v:function(){gx.O.AV103QtdePag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAG",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV102SNVenda",gxold:"OV102SNVenda",gxvar:"AV102SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102SNVenda=Value},v2z:function(Value){gx.O.ZV102SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV102SNVenda,0)},c2v:function(){gx.O.AV102SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTECOMBINACAO",gxz:"ZV80LoteCombinacao",gxold:"OV80LoteCombinacao",gxvar:"AV80LoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80LoteCombinacao=Value},v2z:function(Value){gx.O.ZV80LoteCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTECOMBINACAO",gx.O.AV80LoteCombinacao,0)},c2v:function(){gx.O.AV80LoteCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV79ProdutoCategoria",gxold:"OV79ProdutoCategoria",gxvar:"AV79ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV79ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV79ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV79ProdutoCategoria)},c2v:function(){gx.O.AV79ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV75PrecoNulo",gxold:"OV75PrecoNulo",gxvar:"AV75PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV75PrecoNulo,0)},c2v:function(){gx.O.AV75PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV99CodigoBarrasProdutoBarra",gxold:"OV99CodigoBarrasProdutoBarra",gxvar:"AV99CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV99CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV99CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV99CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV100ProdutoReferencia",gxold:"OV100ProdutoReferencia",gxvar:"AV100ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV100ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV100ProdutoReferencia,0)},c2v:function(){gx.O.AV100ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID2",gxz:"ZV66PessoaId2",gxold:"OV66PessoaId2",gxvar:"AV66PessoaId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66PessoaId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66PessoaId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID2",gx.O.AV66PessoaId2,0)},c2v:function(){gx.O.AV66PessoaId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID2",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV101IntAuxIn",gxold:"OV101IntAuxIn",gxvar:"AV101IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV101IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV101IntAuxIn,0)},c2v:function(){gx.O.AV101IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTERES",gxz:"ZV83QtdeCaracteres",gxold:"OV83QtdeCaracteres",gxvar:"AV83QtdeCaracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83QtdeCaracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83QtdeCaracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTERES",gx.O.AV83QtdeCaracteres,0)},c2v:function(){gx.O.AV83QtdeCaracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV78ProdutoCodigoId",gxold:"OV78ProdutoCodigoId",gxvar:"AV78ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV78ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV78ProdutoCodigoId,0)},c2v:function(){gx.O.AV78ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV77SubGrupoProdutoId",gxold:"OV77SubGrupoProdutoId",gxvar:"AV77SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV77SubGrupoProdutoId,0)},c2v:function(){gx.O.AV77SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV84ProdutoEmpresaId",gxold:"OV84ProdutoEmpresaId",gxvar:"AV84ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV84ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV84ProdutoEmpresaId,0)},c2v:function(){gx.O.AV84ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV85PessoaEmpresaId",gxold:"OV85PessoaEmpresaId",gxvar:"AV85PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV85PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV85PessoaEmpresaId,0)},c2v:function(){gx.O.AV85PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV52Nao",gxold:"OV52Nao",gxvar:"AV52Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52Nao=Value},v2z:function(Value){gx.O.ZV52Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV52Nao,0)},c2v:function(){gx.O.AV52Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[111]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV74FilialId",gxold:"OV74FilialId",gxvar:"AV74FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV74FilialId,0)},c2v:function(){gx.O.AV74FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV51Sim",gxold:"OV51Sim",gxvar:"AV51Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51Sim=Value},v2z:function(Value){gx.O.ZV51Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV51Sim,0)},c2v:function(){gx.O.AV51Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[113]={fld:"JS", format:2,grid:0};
   GXValidFnc[115]={fld:"BTNHELP",grid:0};
   GXValidFnc[116]={fld:"PROMPT_SOLICITACAONUMERO",grid:0};
   GXValidFnc[117]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV73SolicitacaoNumero = 0 ;
   this.ZV73SolicitacaoNumero = 0 ;
   this.OV73SolicitacaoNumero = 0 ;
   this.AV95PessoaId = 0 ;
   this.ZV95PessoaId = 0 ;
   this.OV95PessoaId = 0 ;
   this.AV67PessoaFantasia = "" ;
   this.ZV67PessoaFantasia = "" ;
   this.OV67PessoaFantasia = "" ;
   this.AV70ProdutoId = 0 ;
   this.ZV70ProdutoId = 0 ;
   this.OV70ProdutoId = 0 ;
   this.AV71ProdutoDescricao = "" ;
   this.ZV71ProdutoDescricao = "" ;
   this.OV71ProdutoDescricao = "" ;
   this.AV68DtIni = gx.date.nullDate() ;
   this.ZV68DtIni = gx.date.nullDate() ;
   this.OV68DtIni = gx.date.nullDate() ;
   this.AV69DtFim = gx.date.nullDate() ;
   this.ZV69DtFim = gx.date.nullDate() ;
   this.OV69DtFim = gx.date.nullDate() ;
   this.AV72CotacaoNumeroFornecedor = "" ;
   this.ZV72CotacaoNumeroFornecedor = "" ;
   this.OV72CotacaoNumeroFornecedor = "" ;
   this.ZV113GXV11J = 0 ;
   this.OV113GXV11J = 0 ;
   this.ZV114GXV11K = "" ;
   this.OV114GXV11K = "" ;
   this.ZV115GXV11L = 0 ;
   this.OV115GXV11L = 0 ;
   this.ZV116GXV11M = "" ;
   this.OV116GXV11M = "" ;
   this.ZV117GXV11N = "" ;
   this.OV117GXV11N = "" ;
   this.ZV118GXV11O = "" ;
   this.OV118GXV11O = "" ;
   this.ZV119GXV11P = "" ;
   this.OV119GXV11P = "" ;
   this.ZV120GXV11Q = "" ;
   this.OV120GXV11Q = "" ;
   this.ZV121GXV11R = "" ;
   this.OV121GXV11R = "" ;
   this.ZV122GXV11S = "" ;
   this.OV122GXV11S = "" ;
   this.ZV123GXV11T = 0 ;
   this.OV123GXV11T = 0 ;
   this.ZV124GXV11U = 0 ;
   this.OV124GXV11U = 0 ;
   this.ZV125GXV11V = 0 ;
   this.OV125GXV11V = 0 ;
   this.ZV126GXV11W = "" ;
   this.OV126GXV11W = "" ;
   this.ZV15bmpCon = "" ;
   this.OV15bmpCon = "" ;
   this.ZV104FornecedorGrid = 0 ;
   this.OV104FornecedorGrid = 0 ;
   this.ZV105NumSolicitacaoGrid = 0 ;
   this.OV105NumSolicitacaoGrid = 0 ;
   this.AV76GrupoProdutoId = 0 ;
   this.ZV76GrupoProdutoId = 0 ;
   this.OV76GrupoProdutoId = 0 ;
   this.AV103QtdePag = 0 ;
   this.ZV103QtdePag = 0 ;
   this.OV103QtdePag = 0 ;
   this.AV102SNVenda = "" ;
   this.ZV102SNVenda = "" ;
   this.OV102SNVenda = "" ;
   this.AV80LoteCombinacao = "" ;
   this.ZV80LoteCombinacao = "" ;
   this.OV80LoteCombinacao = "" ;
   this.AV79ProdutoCategoria = "" ;
   this.ZV79ProdutoCategoria = "" ;
   this.OV79ProdutoCategoria = "" ;
   this.AV75PrecoNulo = 0 ;
   this.ZV75PrecoNulo = 0 ;
   this.OV75PrecoNulo = 0 ;
   this.AV99CodigoBarrasProdutoBarra = 0 ;
   this.ZV99CodigoBarrasProdutoBarra = 0 ;
   this.OV99CodigoBarrasProdutoBarra = 0 ;
   this.AV100ProdutoReferencia = "" ;
   this.ZV100ProdutoReferencia = "" ;
   this.OV100ProdutoReferencia = "" ;
   this.AV66PessoaId2 = 0 ;
   this.ZV66PessoaId2 = 0 ;
   this.OV66PessoaId2 = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV101IntAuxIn = 0 ;
   this.ZV101IntAuxIn = 0 ;
   this.OV101IntAuxIn = 0 ;
   this.AV83QtdeCaracteres = 0 ;
   this.ZV83QtdeCaracteres = 0 ;
   this.OV83QtdeCaracteres = 0 ;
   this.AV78ProdutoCodigoId = 0 ;
   this.ZV78ProdutoCodigoId = 0 ;
   this.OV78ProdutoCodigoId = 0 ;
   this.AV77SubGrupoProdutoId = 0 ;
   this.ZV77SubGrupoProdutoId = 0 ;
   this.OV77SubGrupoProdutoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV84ProdutoEmpresaId = "" ;
   this.ZV84ProdutoEmpresaId = "" ;
   this.OV84ProdutoEmpresaId = "" ;
   this.AV85PessoaEmpresaId = "" ;
   this.ZV85PessoaEmpresaId = "" ;
   this.OV85PessoaEmpresaId = "" ;
   this.AV52Nao = "" ;
   this.ZV52Nao = "" ;
   this.OV52Nao = "" ;
   this.AV74FilialId = 0 ;
   this.ZV74FilialId = 0 ;
   this.OV74FilialId = 0 ;
   this.AV51Sim = "" ;
   this.ZV51Sim = "" ;
   this.OV51Sim = "" ;
   this.AV73SolicitacaoNumero = 0 ;
   this.AV95PessoaId = 0 ;
   this.AV67PessoaFantasia = "" ;
   this.AV70ProdutoId = 0 ;
   this.AV71ProdutoDescricao = "" ;
   this.AV68DtIni = gx.date.nullDate() ;
   this.AV69DtFim = gx.date.nullDate() ;
   this.AV72CotacaoNumeroFornecedor = "" ;
   this.AV76GrupoProdutoId = 0 ;
   this.AV103QtdePag = 0 ;
   this.AV102SNVenda = "" ;
   this.AV80LoteCombinacao = "" ;
   this.AV79ProdutoCategoria = "" ;
   this.AV75PrecoNulo = 0 ;
   this.AV99CodigoBarrasProdutoBarra = 0 ;
   this.AV100ProdutoReferencia = "" ;
   this.AV66PessoaId2 = 0 ;
   this.AV5Pagina = 0 ;
   this.AV101IntAuxIn = 0 ;
   this.AV83QtdeCaracteres = 0 ;
   this.AV78ProdutoCodigoId = 0 ;
   this.AV77SubGrupoProdutoId = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV84ProdutoEmpresaId = "" ;
   this.AV85PessoaEmpresaId = "" ;
   this.AV52Nao = "" ;
   this.AV74FilialId = 0 ;
   this.AV51Sim = "" ;
   this.GXV11J = 0 ;
   this.GXV11K = "" ;
   this.GXV11L = 0 ;
   this.GXV11M = "" ;
   this.GXV11N = "" ;
   this.GXV11O = "" ;
   this.GXV11P = "" ;
   this.GXV11Q = "" ;
   this.GXV11R = "" ;
   this.GXV11S = "" ;
   this.GXV11T = 0 ;
   this.GXV11U = 0 ;
   this.GXV11V = 0 ;
   this.GXV11W = "" ;
   this.AV15bmpCon = "" ;
   this.AV104FornecedorGrid = 0 ;
   this.AV105NumSolicitacaoGrid = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A473PessoaCPF = "" ;
   this.A72PessoaTelefone = "" ;
   this.A4022SolicitacaoDataInicio = gx.date.nullDate() ;
   this.A3453CotacaoNumeroFornecedor = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A4021SolicitacaoSituacao = "" ;
   this.AV81SdtCotacao = [ ] ;
   this.Events = {"e11nm2_client": ["'FECHAR'", true] ,"e20nm2_client": ["'ITENS'", true] ,"e12nm2_client": ["'PESQUISAR'", true] ,"e13nm2_client": ["'PRIMEIRO'", true] ,"e14nm2_client": ["'ANTERIOR'", true] ,"e15nm2_client": ["'PROXIMO'", true] ,"e16nm2_client": ["'ULTIMO'", true] ,"e21nm2_client": ["ENTER", true] ,"e22nm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV103QtdePag',fld:'vQTDEPAG'},{av:'AV81SdtCotacao',fld:'vSDTCOTACAO',grid:54}],[{av:'AV66PessoaId2',fld:'vPESSOAID2'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV103QtdePag',fld:'vQTDEPAG'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV81SdtCotacao',fld:'vSDTCOTACAO',grid:54}],[{av:'AV104FornecedorGrid',fld:'vFORNECEDORGRID'},{av:'AV105NumSolicitacaoGrid',fld:'vNUMSOLICITACAOGRID'}]];
   this.EvtParms["'ITENS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV103QtdePag',fld:'vQTDEPAG'},{av:'AV81SdtCotacao',fld:'vSDTCOTACAO',grid:54},{av:'AV104FornecedorGrid',fld:'vFORNECEDORGRID'},{av:'AV105NumSolicitacaoGrid',fld:'vNUMSOLICITACAOGRID'},{av:'AV70ProdutoId',fld:'vPRODUTOID'}],[]];
   this.EvtParms["'PESQUISAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV103QtdePag',fld:'vQTDEPAG'},{av:'AV81SdtCotacao',fld:'vSDTCOTACAO',grid:54},{av:'AV73SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV86SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV69DtFim',fld:'vDTFIM'},{av:'AV68DtIni',fld:'vDTINI'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV85PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV70ProdutoId',fld:'vPRODUTOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV84ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV72CotacaoNumeroFornecedor',fld:'vCOTACAONUMEROFORNECEDOR'},{av:'A4021SolicitacaoSituacao',fld:'SOLICITACAOSITUACAO'},{av:'A3453CotacaoNumeroFornecedor',fld:'COTACAONUMEROFORNECEDOR'},{av:'A4022SolicitacaoDataInicio',fld:'SOLICITACAODATAINICIO'},{av:'AV98SolicitacaoNumeroAux',fld:'vSOLICITACAONUMEROAUX'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV92PessoaIdAux',fld:'vPESSOAIDAUX'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV87SdtCotacaoItem',fld:'vSDTCOTACAOITEM'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'}],[{av:'AV89Erro',fld:'vERRO'},{av:'AV133GXLvl208',fld:'vGXLVL208'},{av:'AV134GXLvl229',fld:'vGXLVL229'},{av:'AV66PessoaId2',fld:'vPESSOAID2'},{av:'AV135GXLvl246',fld:'vGXLVL246'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV92PessoaIdAux',fld:'vPESSOAIDAUX'},{av:'AV81SdtCotacao',fld:'vSDTCOTACAO',grid:54},{av:'AV93SdtInNum',fld:'vSDTINNUM'},{av:'AV87SdtCotacaoItem',fld:'vSDTCOTACAOITEM'},{av:'AV98SolicitacaoNumeroAux',fld:'vSOLICITACAONUMEROAUX'}]];
   this.EvtParms["'PRIMEIRO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV103QtdePag',fld:'vQTDEPAG'},{av:'AV81SdtCotacao',fld:'vSDTCOTACAO',grid:54}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV103QtdePag',fld:'vQTDEPAG'},{av:'AV81SdtCotacao',fld:'vSDTCOTACAO',grid:54}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV103QtdePag',fld:'vQTDEPAG'},{av:'AV81SdtCotacao',fld:'vSDTCOTACAO',grid:54}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV103QtdePag',fld:'vQTDEPAG'}]];
   this.EvtParms["'ULTIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV95PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV103QtdePag',fld:'vQTDEPAG'},{av:'AV81SdtCotacao',fld:'vSDTCOTACAO',grid:54}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.setPrompt("PROMPT_SOLICITACAONUMERO", [16]);
   this.setPrompt("PROMPT_PESSOAID", [21]);
   this.setPrompt("PROMPTPRODUTO", [27,93,106,105,96,100,99]);
   this.setVCMap("AV81SdtCotacao", "vSDTCOTACAO", 0, "CollSdtCotacao.SdtCotacaoItem");
   this.setVCMap("AV81SdtCotacao", "vSDTCOTACAO", 0, "CollSdtCotacao.SdtCotacaoItem");
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[102]);
   GridContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridContainer.addRefreshingVar({rfrVar:"AV81SdtCotacao"});
   this.addGridBCProperty("Sdtcotacao", ["NumSolicitacao"], this.GXValidFnc[55], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["Entrega"], this.GXValidFnc[56], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["FornecedorId"], this.GXValidFnc[57], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["Fantasia"], this.GXValidFnc[58], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["Razao"], this.GXValidFnc[59], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["Telefone"], this.GXValidFnc[60], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["CNPJ"], this.GXValidFnc[61], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["CPF"], this.GXValidFnc[62], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["Orcamento"], this.GXValidFnc[63], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["Pagamento"], this.GXValidFnc[64], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["ItemSolicitacao"], this.GXValidFnc[65], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["Valor"], this.GXValidFnc[66], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["ValorTotal"], this.GXValidFnc[67], "AV81SdtCotacao");
   this.addGridBCProperty("Sdtcotacao", ["Check"], this.GXValidFnc[68], "AV81SdtCotacao");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarcotacoes());
