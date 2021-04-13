/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:0:8.9
*/
gx.evt.autoSkip = false;
gx.define('hregistraraditivo', false, function () {
   this.ServerClass =  "hregistraraditivo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV37SolicitacaoNumero=gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.') ;
   };
   this.Validv_Pedidocompraano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOCOMPRAANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pedidocompranumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPEDIDOCOMPRANUMERO");
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
      this.AV93GXV4 = gx.num.trunc( 1 ,0) ;
      while ( this.AV93GXV4 <= this.AV47SdtPedidoCompraAux.length )
      {
         this.AV46SdtPedidoCompra =  this.AV47SdtPedidoCompraAux[this.AV93GXV4 - 1]  ;
         if ( this.AV46SdtPedidoCompra.PedidoCompraItemAditivo > this.AV46SdtPedidoCompra.PedidoCompraItemQtdeEntregue )
         {
            this.AV50SnErro =  "S"  ;
            break;
         }
         this.AV93GXV4 = gx.num.trunc( this.AV93GXV4 + 1 ,0) ;
      }
   };
   this.e11pv2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12pv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13pv2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e14pv2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e18pv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,14,15,16,19,22,24,27,29,31,34,36,39,41,43,48,50,51,54,56,61,64,66,69,71,72,73,76,78,81,83,92,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,124,125,129,133,134];
   this.GXLastCtrlId =134;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",93,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistraraditivo",[],false,1,true,true,0,true,false,false,"CollSdtPedidoCompraItem.PedidoCompraItemItem",0,"px","Novo registro",true,false,true,null,null,false,"AV47SdtPedidoCompraAux",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("GXV12M",94,"CTLSNMODIFICADO1","","","SnModificado","char","S","N",null,true,false,0,"px","");
   GridContainer.addSingleLineEdit("GXV12N",95,"CTLPEDIDOCOMPRAITEMSEQ","Item","","PedidoCompraItemSeq","int",0,"px",6,6,"right",null,[],"GXV12N","GXV12N",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12O",96,"CTLPEDIDOCOMPRAITEMPRODUTOEMPI1","Empresa Produto","","PedidoCompraItemProdutoEmpId","char",0,"px",10,10,"left",null,[],"GXV12O","GXV12O",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12P",97,"CTLPEDIDOCOMPRAITEMPRODUTOID","Produto","","PedidoCompraItemProdutoId","int",0,"px",10,10,"right",null,[],"GXV12P","GXV12P",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12Q",98,"CTLPEDIDOCOMPRAITEMPRODUTODESC","Descrição do Produto","","PedidoCompraItemProdutoDesc","svchar",0,"px",40,40,"left",null,[],"GXV12Q","GXV12Q",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV12R",99,"CTLPEDIDOCOMPRAITEMQTDEPEDIDA","Quantidade","","PedidoCompraItemQtdePedida","decimal",0,"px",18,18,"right",null,[],"GXV12R","GXV12R",true,3,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12S",100,"CTLPEDIDOCOMPRAITEMVALOR","Valor","","PedidoCompraItemValor","decimal",0,"px",21,21,"right",null,[],"GXV12S","GXV12S",true,4,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12T",101,"CTLPEDIDOCOMPRAITEMADITIVO","Aditivo","","PedidoCompraItemAditivo","decimal",110,"px",18,18,"right",null,[],"GXV12T","GXV12T",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12U",102,"CTLPEDIDOCOMPRAANO1","Ano","","PedidoCompraAno","int",0,"px",4,4,"right",null,[],"GXV12U","GXV12U",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12V",103,"CTLPEDIDOCOMPRANUMERO1","Número","","PedidoCompraNumero","int",0,"px",7,7,"right",null,[],"GXV12V","GXV12V",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12W",104,"CTLPEDIDOCOMPRAITEMCOMBINACAOL1","Combinação Lote","","PedidoCompraItemCombinacaoLote","char",0,"px",20,20,"left",null,[],"GXV12W","GXV12W",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12X",105,"CTLPEDIDOCOMPRAITEMQTDEENTREGU1","Qtde Entregue","","PedidoCompraItemQtdeEntregue","decimal",0,"px",18,18,"right",null,[],"GXV12X","GXV12X",false,3,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12Y",106,"CTLPEDIDOCOMPRAITEMVALORSEGURO1","Valor Seguro","","PedidoCompraItemValorSeguro","decimal",0,"px",22,22,"right",null,[],"GXV12Y","GXV12Y",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12Z",107,"CTLPEDIDOCOMPRAITEMVALORIPI1","Valor IPI","","PedidoCompraItemValorIPI","decimal",0,"px",22,22,"right",null,[],"GXV12Z","GXV12Z",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV130",108,"CTLPEDIDOCOMPRAITEMVALORICMSST1","Valor ICMS ST","","PedidoCompraItemValorICMSST","decimal",0,"px",22,22,"right",null,[],"GXV130","GXV130",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV131",109,"CTLPEDIDOCOMPRAITEMVALORICMS1","Valor ICMS","","PedidoCompraItemValorICMS","decimal",0,"px",22,22,"right",null,[],"GXV131","GXV131",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV132",110,"CTLPEDIDOCOMPRAITEMVALORFRETE1","Valor Frete","","PedidoCompraItemValorFrete","decimal",0,"px",22,22,"right",null,[],"GXV132","GXV132",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV133",111,"CTLPEDIDOCOMPRAITEMVALORENCARG1","Valor Encargo","","PedidoCompraItemValorEncargo","decimal",0,"px",22,22,"right",null,[],"GXV133","GXV133",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV134",112,"CTLPEDIDOCOMPRAITEMVALORDESCON1","Desconto","","PedidoCompraItemValorDesconto","decimal",0,"px",22,22,"right",null,[],"GXV134","GXV134",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV135",113,"CTLPEDIDOCOMPRAITEMUSUARIOALT1","Usuário Alteração","","PedidoCompraItemUsuarioAlt","char",0,"px",12,12,"left",null,[],"GXV135","GXV135",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV136",114,"CTLPEDIDOCOMPRAITEMDATAHORAALT1","Data/Hora Alteração","","PedidoCompraItemDataHoraAlt","dtime",0,"px",16,16,"right",null,[],"GXV136","GXV136",false,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV137",115,"CTLPEDIDOCOMPRAITEMVALORTOTAL1","Valor Total Item","","PedidoCompraItemValorTotal","decimal",0,"px",22,22,"right",null,[],"GXV137","GXV137",false,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV138",116,"CTLPEDIDOCOMPRAITEMQTDEPENDENT1","Qtde Pendente","","PedidoCompraItemQtdePendente","decimal",0,"px",18,18,"right",null,[],"GXV138","GXV138",false,3,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV139",117,"CTLPEDIDOCOMPRAITEMVALORLIQUID1","Valor Líquido","","PedidoCompraItemValorLiquido","decimal",0,"px",22,22,"right",null,[],"GXV139","GXV139",false,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABERRO",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"IMAGE1",grid:0};
   GXValidFnc[10]={fld:"MSGERRO", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE12",grid:0};
   GXValidFnc[15]={fld:"TABLE1",grid:0};
   GXValidFnc[16]={fld:"TABREGISTRAR",grid:0};
   GXValidFnc[19]={fld:"TABLE2",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAID",gxz:"ZV11PedidoCompraPessoaId",gxold:"OV11PedidoCompraPessoaId",gxvar:"AV11PedidoCompraPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11PedidoCompraPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11PedidoCompraPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAID",gx.O.AV11PedidoCompraPessoaId,0)},c2v:function(){gx.O.AV11PedidoCompraPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAPESSOAFANTASIA",gxz:"ZV12PedidoCompraPessoaFantasia",gxold:"OV12PedidoCompraPessoaFantasia",gxvar:"AV12PedidoCompraPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PedidoCompraPessoaFantasia=Value},v2z:function(Value){gx.O.ZV12PedidoCompraPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAPESSOAFANTASIA",gx.O.AV12PedidoCompraPessoaFantasia,0)},c2v:function(){gx.O.AV12PedidoCompraPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRAPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompraano,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRAANO",gxz:"ZV13PedidoCompraAno",gxold:"OV13PedidoCompraAno",gxvar:"AV13PedidoCompraAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13PedidoCompraAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRAANO",gx.O.AV13PedidoCompraAno,0)},c2v:function(){gx.O.AV13PedidoCompraAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidocompranumero,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANUMERO",gxz:"ZV14PedidoCompraNumero",gxold:"OV14PedidoCompraNumero",gxvar:"AV14PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PedidoCompraNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANUMERO",gx.O.AV14PedidoCompraNumero,0)},c2v:function(){gx.O.AV14PedidoCompraNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRADATA",gxz:"ZV27PedidoCompraData",gxold:"OV27PedidoCompraData",gxvar:"AV27PedidoCompraData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27PedidoCompraData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRADATA",gx.O.AV27PedidoCompraData,0)},c2v:function(){gx.O.AV27PedidoCompraData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRADATA")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONT",gxz:"ZV48cont",gxold:"OV48cont",gxvar:"AV48cont",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48cont=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48cont=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONT",gx.O.AV48cont,0)},c2v:function(){gx.O.AV48cont=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONT",'.')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV26ValorTotal",gxold:"OV26ValorTotal",gxvar:"AV26ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV26ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTAL",gx.O.AV26ValorTotal,2,',')},c2v:function(){gx.O.AV26ValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE11",grid:0};
   GXValidFnc[64]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vADITIVODATA",gxz:"ZV22AditivoData",gxold:"OV22AditivoData",gxvar:"AV22AditivoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22AditivoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22AditivoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vADITIVODATA",gx.O.AV22AditivoData,0)},c2v:function(){gx.O.AV22AditivoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vADITIVODATA")},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOCALENTREGAID",gxz:"ZV23LocalEntregaId",gxold:"OV23LocalEntregaId",gxvar:"AV23LocalEntregaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23LocalEntregaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23LocalEntregaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOCALENTREGAID",gx.O.AV23LocalEntregaId,0)},c2v:function(){gx.O.AV23LocalEntregaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOCALENTREGAID",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOCALENTREGADESCRICAO",gxz:"ZV49LocalEntregaDescricao",gxold:"OV49LocalEntregaDescricao",gxvar:"AV49LocalEntregaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49LocalEntregaDescricao=Value},v2z:function(Value){gx.O.ZV49LocalEntregaDescricao=Value},v2c:function(){gx.fn.setControlValue("vLOCALENTREGADESCRICAO",gx.O.AV49LocalEntregaDescricao,0)},c2v:function(){gx.O.AV49LocalEntregaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vLOCALENTREGADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOCALENTREGAEMPRESAID",gxz:"ZV53LocalEntregaEmpresaId",gxold:"OV53LocalEntregaEmpresaId",gxvar:"AV53LocalEntregaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53LocalEntregaEmpresaId=Value},v2z:function(Value){gx.O.ZV53LocalEntregaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vLOCALENTREGAEMPRESAID",gx.O.AV53LocalEntregaEmpresaId,0)},c2v:function(){gx.O.AV53LocalEntregaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vLOCALENTREGAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCOMPRANOFORNECEDOR",gxz:"ZV24PedidoCompraNoFornecedor",gxold:"OV24PedidoCompraNoFornecedor",gxvar:"AV24PedidoCompraNoFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PedidoCompraNoFornecedor=Value},v2z:function(Value){gx.O.ZV24PedidoCompraNoFornecedor=Value},v2c:function(){gx.fn.setControlValue("vPEDIDOCOMPRANOFORNECEDOR",gx.O.AV24PedidoCompraNoFornecedor,0)},c2v:function(){gx.O.AV24PedidoCompraNoFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCOMPRANOFORNECEDOR")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vADITIVOOBSERVACAO",gxz:"ZV25AditivoObservacao",gxold:"OV25AditivoObservacao",gxvar:"AV25AditivoObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25AditivoObservacao=Value},v2z:function(Value){gx.O.ZV25AditivoObservacao=Value},v2c:function(){gx.fn.setControlValue("vADITIVOOBSERVACAO",gx.O.AV25AditivoObservacao,0)},c2v:function(){gx.O.AV25AditivoObservacao=this.val()},val:function(){return gx.fn.getControlValue("vADITIVOOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[94]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNMODIFICADO1",gxz:"ZV60GXV12M",gxold:"OV60GXV12M",gxvar:"GXV12M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV12M=Value},v2z:function(Value){gx.O.ZV60GXV12M=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNMODIFICADO1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12M,"S")},c2v:function(){gx.O.GXV12M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNMODIFICADO1",row || gx.fn.currentGridRowImpl(93))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[95]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMSEQ",gxz:"ZV61GXV12N",gxold:"OV61GXV12N",gxvar:"GXV12N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12N=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61GXV12N=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAITEMSEQ",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12N,0)},c2v:function(){gx.O.GXV12N=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRAITEMSEQ",row || gx.fn.currentGridRowImpl(93),'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMPRODUTOEMPI1",gxz:"ZV62GXV12O",gxold:"OV62GXV12O",gxvar:"GXV12O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12O=Value},v2z:function(Value){gx.O.ZV62GXV12O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAITEMPRODUTOEMPI1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12O,0)},c2v:function(){gx.O.GXV12O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRAITEMPRODUTOEMPI1",row || gx.fn.currentGridRowImpl(93))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMPRODUTOID",gxz:"ZV63GXV12P",gxold:"OV63GXV12P",gxvar:"GXV12P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12P=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV63GXV12P=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAITEMPRODUTOID",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12P,0)},c2v:function(){gx.O.GXV12P=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRAITEMPRODUTOID",row || gx.fn.currentGridRowImpl(93),'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMPRODUTODESC",gxz:"ZV64GXV12Q",gxold:"OV64GXV12Q",gxvar:"GXV12Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12Q=Value},v2z:function(Value){gx.O.ZV64GXV12Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAITEMPRODUTODESC",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12Q,0)},c2v:function(){gx.O.GXV12Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRAITEMPRODUTODESC",row || gx.fn.currentGridRowImpl(93))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMQTDEPEDIDA",gxz:"ZV65GXV12R",gxold:"OV65GXV12R",gxvar:"GXV12R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12R=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV65GXV12R=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMQTDEPEDIDA",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12R,3,',')},c2v:function(){gx.O.GXV12R=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMQTDEPEDIDA",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMVALOR",gxz:"ZV66GXV12S",gxold:"OV66GXV12S",gxvar:"GXV12S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12S=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV66GXV12S=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMVALOR",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12S,4,',')},c2v:function(){gx.O.GXV12S=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMVALOR",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:2,type:"decimal",len:18,dec:5,sign:false,pic:"ZZZZZZZZZZZ9.99999",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMADITIVO",gxz:"ZV67GXV12T",gxold:"OV67GXV12T",gxvar:"GXV12T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12T=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV67GXV12T=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMADITIVO",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12T,5,',')},c2v:function(){gx.O.GXV12T=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMADITIVO",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAANO1",gxz:"ZV68GXV12U",gxold:"OV68GXV12U",gxvar:"GXV12U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12U=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68GXV12U=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAANO1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12U,0)},c2v:function(){gx.O.GXV12U=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRAANO1",row || gx.fn.currentGridRowImpl(93),'.')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRANUMERO1",gxz:"ZV69GXV12V",gxold:"OV69GXV12V",gxvar:"GXV12V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12V=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69GXV12V=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRANUMERO1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12V,0)},c2v:function(){gx.O.GXV12V=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRANUMERO1",row || gx.fn.currentGridRowImpl(93),'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMCOMBINACAOL1",gxz:"ZV70GXV12W",gxold:"OV70GXV12W",gxvar:"GXV12W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12W=Value},v2z:function(Value){gx.O.ZV70GXV12W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAITEMCOMBINACAOL1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12W,0)},c2v:function(){gx.O.GXV12W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRAITEMCOMBINACAOL1",row || gx.fn.currentGridRowImpl(93))},nac:gx.falseFn};
   GXValidFnc[105]={lvl:2,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMQTDEENTREGU1",gxz:"ZV71GXV12X",gxold:"OV71GXV12X",gxvar:"GXV12X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12X=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV71GXV12X=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMQTDEENTREGU1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12X,3,',')},c2v:function(){gx.O.GXV12X=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMQTDEENTREGU1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMVALORSEGURO1",gxz:"ZV72GXV12Y",gxold:"OV72GXV12Y",gxvar:"GXV12Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12Y=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV72GXV12Y=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORSEGURO1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12Y,2,',')},c2v:function(){gx.O.GXV12Y=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORSEGURO1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMVALORIPI1",gxz:"ZV73GXV12Z",gxold:"OV73GXV12Z",gxvar:"GXV12Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12Z=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV73GXV12Z=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORIPI1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV12Z,2,',')},c2v:function(){gx.O.GXV12Z=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORIPI1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[108]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMVALORICMSST1",gxz:"ZV74GXV130",gxold:"OV74GXV130",gxvar:"GXV130",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV130=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV74GXV130=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORICMSST1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV130,2,',')},c2v:function(){gx.O.GXV130=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORICMSST1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[109]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMVALORICMS1",gxz:"ZV75GXV131",gxold:"OV75GXV131",gxvar:"GXV131",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV131=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV75GXV131=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORICMS1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV131,2,',')},c2v:function(){gx.O.GXV131=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORICMS1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMVALORFRETE1",gxz:"ZV76GXV132",gxold:"OV76GXV132",gxvar:"GXV132",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV132=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV76GXV132=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORFRETE1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV132,2,',')},c2v:function(){gx.O.GXV132=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORFRETE1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[111]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMVALORENCARG1",gxz:"ZV77GXV133",gxold:"OV77GXV133",gxvar:"GXV133",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV133=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV77GXV133=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORENCARG1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV133,2,',')},c2v:function(){gx.O.GXV133=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORENCARG1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMVALORDESCON1",gxz:"ZV78GXV134",gxold:"OV78GXV134",gxvar:"GXV134",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV134=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV78GXV134=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORDESCON1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV134,2,',')},c2v:function(){gx.O.GXV134=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORDESCON1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMUSUARIOALT1",gxz:"ZV79GXV135",gxold:"OV79GXV135",gxvar:"GXV135",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV135=Value},v2z:function(Value){gx.O.ZV79GXV135=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAITEMUSUARIOALT1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV135,0)},c2v:function(){gx.O.GXV135=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRAITEMUSUARIOALT1",row || gx.fn.currentGridRowImpl(93))},nac:gx.falseFn};
   GXValidFnc[114]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMDATAHORAALT1",gxz:"ZV80GXV136",gxold:"OV80GXV136",gxvar:"GXV136",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV136=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV80GXV136=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAITEMDATAHORAALT1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV136,0)},c2v:function(){gx.O.GXV136=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPEDIDOCOMPRAITEMDATAHORAALT1",row || gx.fn.currentGridRowImpl(93))},nac:gx.falseFn};
   GXValidFnc[115]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMVALORTOTAL1",gxz:"ZV81GXV137",gxold:"OV81GXV137",gxvar:"GXV137",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV137=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV81GXV137=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORTOTAL1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV137,2,',')},c2v:function(){gx.O.GXV137=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORTOTAL1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:2,type:"decimal",len:18,dec:3,sign:false,pic:"ZZZZZZZZZZZZZ9.999",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMQTDEPENDENT1",gxz:"ZV82GXV138",gxold:"OV82GXV138",gxvar:"GXV138",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV138=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV82GXV138=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMQTDEPENDENT1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV138,3,',')},c2v:function(){gx.O.GXV138=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMQTDEPENDENT1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAITEMVALORLIQUID1",gxz:"ZV83GXV139",gxold:"OV83GXV139",gxvar:"GXV139",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV139=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV83GXV139=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORLIQUID1",row || gx.fn.currentGridRowImpl(93),gx.O.GXV139,2,',')},c2v:function(){gx.O.GXV139=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAITEMVALORLIQUID1",row || gx.fn.currentGridRowImpl(93),'.',',')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[124]={fld:"TABLE8",grid:0};
   GXValidFnc[125]={fld:"TABLE9",grid:0};
   GXValidFnc[129]={fld:"JS", format:2,grid:0};
   GXValidFnc[133]={fld:"BTNHELP",grid:0};
   GXValidFnc[134]={fld:"PROMPT_LOCALENTREGAID",grid:0};
   this.AV11PedidoCompraPessoaId = 0 ;
   this.ZV11PedidoCompraPessoaId = 0 ;
   this.OV11PedidoCompraPessoaId = 0 ;
   this.AV12PedidoCompraPessoaFantasia = "" ;
   this.ZV12PedidoCompraPessoaFantasia = "" ;
   this.OV12PedidoCompraPessoaFantasia = "" ;
   this.AV13PedidoCompraAno = 0 ;
   this.ZV13PedidoCompraAno = 0 ;
   this.OV13PedidoCompraAno = 0 ;
   this.AV14PedidoCompraNumero = 0 ;
   this.ZV14PedidoCompraNumero = 0 ;
   this.OV14PedidoCompraNumero = 0 ;
   this.AV27PedidoCompraData = gx.date.nullDate() ;
   this.ZV27PedidoCompraData = gx.date.nullDate() ;
   this.OV27PedidoCompraData = gx.date.nullDate() ;
   this.AV48cont = 0 ;
   this.ZV48cont = 0 ;
   this.OV48cont = 0 ;
   this.AV26ValorTotal = 0 ;
   this.ZV26ValorTotal = 0 ;
   this.OV26ValorTotal = 0 ;
   this.AV22AditivoData = gx.date.nullDate() ;
   this.ZV22AditivoData = gx.date.nullDate() ;
   this.OV22AditivoData = gx.date.nullDate() ;
   this.AV23LocalEntregaId = 0 ;
   this.ZV23LocalEntregaId = 0 ;
   this.OV23LocalEntregaId = 0 ;
   this.AV49LocalEntregaDescricao = "" ;
   this.ZV49LocalEntregaDescricao = "" ;
   this.OV49LocalEntregaDescricao = "" ;
   this.AV53LocalEntregaEmpresaId = "" ;
   this.ZV53LocalEntregaEmpresaId = "" ;
   this.OV53LocalEntregaEmpresaId = "" ;
   this.AV24PedidoCompraNoFornecedor = "" ;
   this.ZV24PedidoCompraNoFornecedor = "" ;
   this.OV24PedidoCompraNoFornecedor = "" ;
   this.AV25AditivoObservacao = "" ;
   this.ZV25AditivoObservacao = "" ;
   this.OV25AditivoObservacao = "" ;
   this.ZV60GXV12M = "" ;
   this.OV60GXV12M = "" ;
   this.ZV61GXV12N = 0 ;
   this.OV61GXV12N = 0 ;
   this.ZV62GXV12O = "" ;
   this.OV62GXV12O = "" ;
   this.ZV63GXV12P = 0 ;
   this.OV63GXV12P = 0 ;
   this.ZV64GXV12Q = "" ;
   this.OV64GXV12Q = "" ;
   this.ZV65GXV12R = 0 ;
   this.OV65GXV12R = 0 ;
   this.ZV66GXV12S = 0 ;
   this.OV66GXV12S = 0 ;
   this.ZV67GXV12T = 0 ;
   this.OV67GXV12T = 0 ;
   this.ZV68GXV12U = 0 ;
   this.OV68GXV12U = 0 ;
   this.ZV69GXV12V = 0 ;
   this.OV69GXV12V = 0 ;
   this.ZV70GXV12W = "" ;
   this.OV70GXV12W = "" ;
   this.ZV71GXV12X = 0 ;
   this.OV71GXV12X = 0 ;
   this.ZV72GXV12Y = 0 ;
   this.OV72GXV12Y = 0 ;
   this.ZV73GXV12Z = 0 ;
   this.OV73GXV12Z = 0 ;
   this.ZV74GXV130 = 0 ;
   this.OV74GXV130 = 0 ;
   this.ZV75GXV131 = 0 ;
   this.OV75GXV131 = 0 ;
   this.ZV76GXV132 = 0 ;
   this.OV76GXV132 = 0 ;
   this.ZV77GXV133 = 0 ;
   this.OV77GXV133 = 0 ;
   this.ZV78GXV134 = 0 ;
   this.OV78GXV134 = 0 ;
   this.ZV79GXV135 = "" ;
   this.OV79GXV135 = "" ;
   this.ZV80GXV136 = gx.date.nullDate() ;
   this.OV80GXV136 = gx.date.nullDate() ;
   this.ZV81GXV137 = 0 ;
   this.OV81GXV137 = 0 ;
   this.ZV82GXV138 = 0 ;
   this.OV82GXV138 = 0 ;
   this.ZV83GXV139 = 0 ;
   this.OV83GXV139 = 0 ;
   this.AV11PedidoCompraPessoaId = 0 ;
   this.AV12PedidoCompraPessoaFantasia = "" ;
   this.AV13PedidoCompraAno = 0 ;
   this.AV14PedidoCompraNumero = 0 ;
   this.AV27PedidoCompraData = gx.date.nullDate() ;
   this.AV48cont = 0 ;
   this.AV26ValorTotal = 0 ;
   this.AV22AditivoData = gx.date.nullDate() ;
   this.AV23LocalEntregaId = 0 ;
   this.AV49LocalEntregaDescricao = "" ;
   this.AV53LocalEntregaEmpresaId = "" ;
   this.AV24PedidoCompraNoFornecedor = "" ;
   this.AV25AditivoObservacao = "" ;
   this.AV37SolicitacaoNumero = 0 ;
   this.GXV12M = "" ;
   this.GXV12N = 0 ;
   this.GXV12O = "" ;
   this.GXV12P = 0 ;
   this.GXV12Q = "" ;
   this.GXV12R = 0 ;
   this.GXV12S = 0 ;
   this.GXV12T = 0 ;
   this.GXV12U = 0 ;
   this.GXV12V = 0 ;
   this.GXV12W = "" ;
   this.GXV12X = 0 ;
   this.GXV12Y = 0 ;
   this.GXV12Z = 0 ;
   this.GXV130 = 0 ;
   this.GXV131 = 0 ;
   this.GXV132 = 0 ;
   this.GXV133 = 0 ;
   this.GXV134 = 0 ;
   this.GXV135 = "" ;
   this.GXV136 = gx.date.nullDate() ;
   this.GXV137 = 0 ;
   this.GXV138 = 0 ;
   this.GXV139 = 0 ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3364LocalEntregaId = 0 ;
   this.A3633LocalEntregaDescricao = "" ;
   this.A3386PedidoCompraNoPedidoForn = "" ;
   this.A3363LocalEntregaEmpresaId = "" ;
   this.A3392SolicitacaoItemSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A4042SolicitacaoItemQtdePedida = 0 ;
   this.A3340PedidoCompraItemProdutoId = 0 ;
   this.A3341PedidoCompraItemProdutoDesc = "" ;
   this.A3346PedidoCompraItemQtdePedida = 0 ;
   this.A3349PedidoCompraItemValor = 0 ;
   this.A3338PedidoCompraItemSeq = 0 ;
   this.A3339PedidoCompraItemProdutoEmpId = "" ;
   this.AV50SnErro = "" ;
   this.AV46SdtPedidoCompra = {} ;
   this.AV47SdtPedidoCompraAux = [ ] ;
   this.AV93GXV4 = 0 ;
   this.Events = {"e11pv2_client": ["ENTER", true] ,"e12pv2_client": ["'FECHAR'", true] ,"e13pv2_client": ["'DESMARCARTODOS'", true] ,"e14pv2_client": ["'MARCARTODOS'", true] ,"e18pv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV47SdtPedidoCompraAux',fld:'vSDTPEDIDOCOMPRAAUX',grid:93},{av:'subGrid_Rows'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV50SnErro',fld:'vSNERRO'},{av:'AV47SdtPedidoCompraAux',fld:'vSDTPEDIDOCOMPRAAUX',grid:93},{av:'AV13PedidoCompraAno',fld:'vPEDIDOCOMPRAANO',hsh:true},{av:'AV14PedidoCompraNumero',fld:'vPEDIDOCOMPRANUMERO',hsh:true},{av:'AV23LocalEntregaId',fld:'vLOCALENTREGAID'},{av:'AV22AditivoData',fld:'vADITIVODATA'},{av:'AV25AditivoObservacao',fld:'vADITIVOOBSERVACAO'},{av:'AV24PedidoCompraNoFornecedor',fld:'vPEDIDOCOMPRANOFORNECEDOR'},{av:'AV52AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'AV46SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'}],[{av:'AV51Flag',fld:'vFLAG'},{av:'AV86GXV2',fld:'vGXV2'},{av:'AV46SdtPedidoCompra',fld:'vSDTPEDIDOCOMPRA'},{av:'AV52AditivoSequencia',fld:'vADITIVOSEQUENCIA'},{av:'AV87GXV3',fld:'vGXV3'},{av:'AV50SnErro',fld:'vSNERRO'},{av:'AV93GXV4',fld:'vGXV4'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV47SdtPedidoCompraAux',fld:'vSDTPEDIDOCOMPRAAUX',grid:93},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV47SdtPedidoCompraAux',fld:'vSDTPEDIDOCOMPRAAUX',grid:93}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV47SdtPedidoCompraAux',fld:'vSDTPEDIDOCOMPRAAUX',grid:93},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV47SdtPedidoCompraAux',fld:'vSDTPEDIDOCOMPRAAUX',grid:93}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV47SdtPedidoCompraAux',fld:'vSDTPEDIDOCOMPRAAUX',grid:93}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV47SdtPedidoCompraAux',fld:'vSDTPEDIDOCOMPRAAUX',grid:93}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV47SdtPedidoCompraAux',fld:'vSDTPEDIDOCOMPRAAUX',grid:93}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV47SdtPedidoCompraAux',fld:'vSDTPEDIDOCOMPRAAUX',grid:93}],[]];
   this.setPrompt("PROMPT_LOCALENTREGAID", [71]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV37SolicitacaoNumero", "vSOLICITACAONUMERO", 0, "int");
   this.addGridBCProperty("Sdtpedidocompraaux", ["SnModificado"], this.GXValidFnc[94], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemSeq"], this.GXValidFnc[95], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemProdutoEmpId"], this.GXValidFnc[96], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemProdutoId"], this.GXValidFnc[97], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemProdutoDesc"], this.GXValidFnc[98], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemQtdePedida"], this.GXValidFnc[99], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemValor"], this.GXValidFnc[100], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemAditivo"], this.GXValidFnc[101], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraAno"], this.GXValidFnc[102], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraNumero"], this.GXValidFnc[103], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemCombinacaoLote"], this.GXValidFnc[104], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemQtdeEntregue"], this.GXValidFnc[105], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemValorSeguro"], this.GXValidFnc[106], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemValorIPI"], this.GXValidFnc[107], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemValorICMSST"], this.GXValidFnc[108], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemValorICMS"], this.GXValidFnc[109], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemValorFrete"], this.GXValidFnc[110], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemValorEncargo"], this.GXValidFnc[111], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemValorDesconto"], this.GXValidFnc[112], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemUsuarioAlt"], this.GXValidFnc[113], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemDataHoraAlt"], this.GXValidFnc[114], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemValorTotal"], this.GXValidFnc[115], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemQtdePendente"], this.GXValidFnc[116], "AV47SdtPedidoCompraAux");
   this.addGridBCProperty("Sdtpedidocompraaux", ["PedidoCompraItemValorLiquido"], this.GXValidFnc[117], "AV47SdtPedidoCompraAux");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistraraditivo());
