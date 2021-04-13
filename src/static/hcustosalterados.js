/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:32:11.57
*/
gx.evt.autoSkip = false;
gx.define('hcustosalterados', false, function () {
   this.ServerClass =  "hcustosalterados" ;
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
      this.AV23SdtCustosAlterados=gx.fn.getControlValue("vSDTCUSTOSALTERADOS") ;
      this.AV11EntradaEmpresaId=gx.fn.getControlValue("vENTRADAEMPRESAID") ;
      this.A709PrecoEmpresaId=gx.fn.getControlValue("PRECOEMPRESAID") ;
      this.A710PrecoId=gx.fn.getIntegerValue("PRECOID",'.') ;
      this.A711PrecoDescricao=gx.fn.getControlValue("PRECODESCRICAO") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",'.') ;
      this.A2961ProdutoDescricaoResumida=gx.fn.getControlValue("PRODUTODESCRICAORESUMIDA") ;
   };
   this.Validv_Entradaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e13ye2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e14ye2_client=function()
   {
      this.executeServerEvent("'PRECOPRODUTO'", true, arguments[0], false, false);
   };
   this.e11ye2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ye2_client=function()
   {
      this.executeServerEvent("'ULTIMASENTRADAS'", true, arguments[0], false, false);
   };
   this.e16ye2_client=function()
   {
      this.executeServerEvent("'EFETIVARPRECO'", true, arguments[0], false, false);
   };
   this.e19ye2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,19,20,23,25,27,29,32,34,41,43,44,45,46,47,48,49,50,51,52,53,54,55];
   this.GXLastCtrlId =55;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",42,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hcustosalterados",[],false,1,true,true,0,false,false,false,"CollSDTCustosAlterados.SDTCustosAlteradosItem",0,"px","Novo registro",false,false,false,null,null,false,"AV23SdtCustosAlterados",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV117",43,"CTLPRODUTOEMPRESAID","Empresa do Produto","","ProdutoEmpresaId","char",0,"px",10,10,"left",null,[],"GXV117","GXV117",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV118",44,"CTLPRODUTOID","Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],"GXV118","GXV118",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV119",45,"CTLPRODUTODESCRICAORESUMIDA","Descrição do Produto","","ProdutoDescricaoResumida","svchar",0,"px",40,40,"left",null,[],"GXV119","GXV119",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV11A",46,"CTLPRECOEMPRESAID","Empresa Preço","","PrecoempresaId","char",0,"px",10,10,"left",null,[],"GXV11A","GXV11A",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11B",47,"CTLPRECOID","Preço","","Precoid","int",0,"px",2,2,"right",null,[],"GXV11B","GXV11B",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11C",48,"CTLPRECODESCRICAO","Preço","","PrecoDescricao","svchar",135,"px",30,30,"left",null,[],"GXV11C","GXV11C",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("GXV11D",49,"CTLVALORANTERIOR","Valor Antigo","","ValorAnterior","decimal",0,"px",21,21,"right",null,[],"GXV11D","GXV11D",true,6,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11E",50,"CTLVALORATUAL","Valor Novo","","ValorAtual","decimal",0,"px",21,21,"right",null,[],"GXV11E","GXV11E",true,6,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11F",51,"CTLSNALTERACAO","Sn Alteracao","","SnAlteracao","char",0,"px",1,1,"left",null,[],"GXV11F","GXV11F",false,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmppre","vBMPPRE",52,0,"px",17,"px","e14ye2_client","","Pre","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpult","vBMPULT",53,0,"px",17,"px","e15ye2_client","","Ent","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpefe","vBMPEFE",54,0,"px",17,"px","e16ye2_client","","Efe","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK94", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entradaid,isvalid:null,rgrid:[],fld:"vENTRADAID",gxz:"ZV12EntradaId",gxold:"OV12EntradaId",gxvar:"AV12EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12EntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAID",gx.O.AV12EntradaId,0)},c2v:function(){gx.O.AV12EntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TEXTBLOCK95", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADANUMERODOCUMENTO",gxz:"ZV14EntradaNumeroDocumento",gxold:"OV14EntradaNumeroDocumento",gxvar:"AV14EntradaNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EntradaNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14EntradaNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADANUMERODOCUMENTO",gx.O.AV14EntradaNumeroDocumento,0)},c2v:function(){gx.O.AV14EntradaNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADANUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK96", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDORID",gxz:"ZV17EntradaFornecedorId",gxold:"OV17EntradaFornecedorId",gxvar:"AV17EntradaFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EntradaFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17EntradaFornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAFORNECEDORID",gx.O.AV17EntradaFornecedorId,0)},c2v:function(){gx.O.AV17EntradaFornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDORRAZAO",gxz:"ZV16EntradaFornecedorRazao",gxold:"OV16EntradaFornecedorRazao",gxvar:"AV16EntradaFornecedorRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EntradaFornecedorRazao=Value},v2z:function(Value){gx.O.ZV16EntradaFornecedorRazao=Value},v2c:function(){gx.fn.setControlValue("vENTRADAFORNECEDORRAZAO",gx.O.AV16EntradaFornecedorRazao,0)},c2v:function(){gx.O.AV16EntradaFornecedorRazao=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAFORNECEDORRAZAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK97", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAEMISSAO",gxz:"ZV18EntradaDataEmissao",gxold:"OV18EntradaDataEmissao",gxvar:"AV18EntradaDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18EntradaDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV18EntradaDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADATAEMISSAO",gx.O.AV18EntradaDataEmissao,0)},c2v:function(){gx.O.AV18EntradaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADADATAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK98", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAENTRADA",gxz:"ZV19EntradaDataEntrada",gxold:"OV19EntradaDataEntrada",gxvar:"AV19EntradaDataEntrada",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19EntradaDataEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV19EntradaDataEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADADATAENTRADA",gx.O.AV19EntradaDataEntrada,0)},c2v:function(){gx.O.AV19EntradaDataEntrada=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADADATAENTRADA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK99", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAVALORTOTAL",gxz:"ZV20EntradaValorTotal",gxold:"OV20EntradaValorTotal",gxvar:"AV20EntradaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20EntradaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV20EntradaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAVALORTOTAL",gx.O.AV20EntradaValorTotal,2,',')},c2v:function(){gx.O.AV20EntradaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAVALORTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOEMPRESAID",gxz:"ZV37GXV117",gxold:"OV37GXV117",gxvar:"GXV117",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV117=Value},v2z:function(Value){gx.O.ZV37GXV117=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(42),gx.O.GXV117,0)},c2v:function(){gx.O.GXV117=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOID",gxz:"ZV38GXV118",gxold:"OV38GXV118",gxvar:"GXV118",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV118=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38GXV118=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(42),gx.O.GXV118,0)},c2v:function(){gx.O.GXV118=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTODESCRICAORESUMIDA",gxz:"ZV39GXV119",gxold:"OV39GXV119",gxvar:"GXV119",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV119=Value},v2z:function(Value){gx.O.ZV39GXV119=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(42),gx.O.GXV119,0)},c2v:function(){gx.O.GXV119=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRECOEMPRESAID",gxz:"ZV40GXV11A",gxold:"OV40GXV11A",gxvar:"GXV11A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11A=Value},v2z:function(Value){gx.O.ZV40GXV11A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRECOEMPRESAID",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11A,0)},c2v:function(){gx.O.GXV11A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRECOEMPRESAID",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRECOID",gxz:"ZV41GXV11B",gxold:"OV41GXV11B",gxvar:"GXV11B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41GXV11B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRECOID",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11B,0)},c2v:function(){gx.O.GXV11B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRECOID",row || gx.fn.currentGridRowImpl(42),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRECODESCRICAO",gxz:"ZV42GXV11C",gxold:"OV42GXV11C",gxvar:"GXV11C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11C=Value},v2z:function(Value){gx.O.ZV42GXV11C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRECODESCRICAO",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11C,0)},c2v:function(){gx.O.GXV11C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRECODESCRICAO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORANTERIOR",gxz:"ZV43GXV11D",gxold:"OV43GXV11D",gxvar:"GXV11D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11D=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV43GXV11D=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORANTERIOR",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11D,6,',')},c2v:function(){gx.O.GXV11D=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORANTERIOR",row || gx.fn.currentGridRowImpl(42),'.',',')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:0,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORATUAL",gxz:"ZV44GXV11E",gxold:"OV44GXV11E",gxvar:"GXV11E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11E=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV44GXV11E=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORATUAL",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11E,6,',')},c2v:function(){gx.O.GXV11E=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORATUAL",row || gx.fn.currentGridRowImpl(42),'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNALTERACAO",gxz:"ZV45GXV11F",gxold:"OV45GXV11F",gxvar:"GXV11F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11F=Value},v2z:function(Value){gx.O.ZV45GXV11F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSNALTERACAO",row || gx.fn.currentGridRowImpl(42),gx.O.GXV11F,0)},c2v:function(){gx.O.GXV11F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNALTERACAO",row || gx.fn.currentGridRowImpl(42))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRE",gxz:"ZV25BmpPre",gxold:"OV25BmpPre",gxvar:"AV25BmpPre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25BmpPre=Value},v2z:function(Value){gx.O.ZV25BmpPre=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRE",row || gx.fn.currentGridRowImpl(42),gx.O.AV25BmpPre,gx.O.AV50Bmppre_GXI)},c2v:function(){gx.O.AV50Bmppre_GXI=this.val_GXI();gx.O.AV25BmpPre=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRE",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRE_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV50Bmppre_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPULT",gxz:"ZV26BmpUlt",gxold:"OV26BmpUlt",gxvar:"AV26BmpUlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26BmpUlt=Value},v2z:function(Value){gx.O.ZV26BmpUlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPULT",row || gx.fn.currentGridRowImpl(42),gx.O.AV26BmpUlt,gx.O.AV51Bmpult_GXI)},c2v:function(){gx.O.AV51Bmpult_GXI=this.val_GXI();gx.O.AV26BmpUlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPULT",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPULT_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV51Bmpult_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:42,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEFE",gxz:"ZV24BmpEfe",gxold:"OV24BmpEfe",gxvar:"AV24BmpEfe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24BmpEfe=Value},v2z:function(Value){gx.O.ZV24BmpEfe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEFE",row || gx.fn.currentGridRowImpl(42),gx.O.AV24BmpEfe,gx.O.AV49Bmpefe_GXI)},c2v:function(){gx.O.AV49Bmpefe_GXI=this.val_GXI();gx.O.AV24BmpEfe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEFE",row || gx.fn.currentGridRowImpl(42))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEFE_GXI",row || gx.fn.currentGridRowImpl(42))}, gxvar_GXI:'AV49Bmpefe_GXI',nac:gx.falseFn};
   GXValidFnc[55]={fld:"DIV2", format:2,grid:0};
   this.AV12EntradaId = 0 ;
   this.ZV12EntradaId = 0 ;
   this.OV12EntradaId = 0 ;
   this.AV14EntradaNumeroDocumento = 0 ;
   this.ZV14EntradaNumeroDocumento = 0 ;
   this.OV14EntradaNumeroDocumento = 0 ;
   this.AV17EntradaFornecedorId = 0 ;
   this.ZV17EntradaFornecedorId = 0 ;
   this.OV17EntradaFornecedorId = 0 ;
   this.AV16EntradaFornecedorRazao = "" ;
   this.ZV16EntradaFornecedorRazao = "" ;
   this.OV16EntradaFornecedorRazao = "" ;
   this.AV18EntradaDataEmissao = gx.date.nullDate() ;
   this.ZV18EntradaDataEmissao = gx.date.nullDate() ;
   this.OV18EntradaDataEmissao = gx.date.nullDate() ;
   this.AV19EntradaDataEntrada = gx.date.nullDate() ;
   this.ZV19EntradaDataEntrada = gx.date.nullDate() ;
   this.OV19EntradaDataEntrada = gx.date.nullDate() ;
   this.AV20EntradaValorTotal = 0 ;
   this.ZV20EntradaValorTotal = 0 ;
   this.OV20EntradaValorTotal = 0 ;
   this.ZV37GXV117 = "" ;
   this.OV37GXV117 = "" ;
   this.ZV38GXV118 = 0 ;
   this.OV38GXV118 = 0 ;
   this.ZV39GXV119 = "" ;
   this.OV39GXV119 = "" ;
   this.ZV40GXV11A = "" ;
   this.OV40GXV11A = "" ;
   this.ZV41GXV11B = 0 ;
   this.OV41GXV11B = 0 ;
   this.ZV42GXV11C = "" ;
   this.OV42GXV11C = "" ;
   this.ZV43GXV11D = 0 ;
   this.OV43GXV11D = 0 ;
   this.ZV44GXV11E = 0 ;
   this.OV44GXV11E = 0 ;
   this.ZV45GXV11F = "" ;
   this.OV45GXV11F = "" ;
   this.ZV25BmpPre = "" ;
   this.OV25BmpPre = "" ;
   this.ZV26BmpUlt = "" ;
   this.OV26BmpUlt = "" ;
   this.ZV24BmpEfe = "" ;
   this.OV24BmpEfe = "" ;
   this.AV12EntradaId = 0 ;
   this.AV14EntradaNumeroDocumento = 0 ;
   this.AV17EntradaFornecedorId = 0 ;
   this.AV16EntradaFornecedorRazao = "" ;
   this.AV18EntradaDataEmissao = gx.date.nullDate() ;
   this.AV19EntradaDataEntrada = gx.date.nullDate() ;
   this.AV20EntradaValorTotal = 0 ;
   this.AV11EntradaEmpresaId = "" ;
   this.GXV117 = "" ;
   this.GXV118 = 0 ;
   this.GXV119 = "" ;
   this.GXV11A = "" ;
   this.GXV11B = 0 ;
   this.GXV11C = "" ;
   this.GXV11D = 0 ;
   this.GXV11E = 0 ;
   this.GXV11F = "" ;
   this.AV25BmpPre = "" ;
   this.AV26BmpUlt = "" ;
   this.AV24BmpEfe = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A711PrecoDescricao = "" ;
   this.A4343PrecoSnCalcularSistema = "" ;
   this.A722PrecoTipo = "" ;
   this.A736PrecoVinculadoId = 0 ;
   this.A738PrecoVinculadoEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4646EntradaNumeroDocumento = 0 ;
   this.A4642EntradaFornecedorEmpId = "" ;
   this.A4643EntradaFornecedorId = 0 ;
   this.A4645EntradaFornecedorRazao = "" ;
   this.A4655EntradaDataEmissao = gx.date.nullDate() ;
   this.A4656EntradaDataEntrada = gx.date.nullDate() ;
   this.A10600EntradaValorFCPSTRet = 0 ;
   this.A10599EntradaValorFCPST = 0 ;
   this.A11303EntradaICMSDesEntraTotal = "" ;
   this.A10530EntradaValorICMSDesonerado = 0 ;
   this.A4737EntradaFreteEntraTotal = "" ;
   this.A4705EntradaValorFrete = 0 ;
   this.A4717EntradaValorIPI = 0 ;
   this.A4707EntradaValorOutrasDespesas = 0 ;
   this.A4706EntradaValorSeguro = 0 ;
   this.A4716EntradaValorICMSST = 0 ;
   this.A4703EntradaValorDesconto = 0 ;
   this.A6542EntradaValorServico = 0 ;
   this.A4701EntradaValorProdutos = 0 ;
   this.A4709EntradaValorTotal = 0 ;
   this.AV23SdtCustosAlterados = [ ] ;
   this.Events = {"e13ye2_client": ["ENTER", true] ,"e14ye2_client": ["'PRECOPRODUTO'", true] ,"e11ye2_client": ["'FECHAR'", true] ,"e15ye2_client": ["'ULTIMASENTRADAS'", true] ,"e16ye2_client": ["'EFETIVARPRECO'", true] ,"e19ye2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV24BmpEfe',fld:'vBMPEFE'},{av:'gx.fn.getCtrlProperty("vBMPEFE","Tooltiptext")',ctrl:'vBMPEFE',prop:'Tooltiptext'},{av:'AV25BmpPre',fld:'vBMPPRE'},{av:'gx.fn.getCtrlProperty("vBMPPRE","Tooltiptext")',ctrl:'vBMPPRE',prop:'Tooltiptext'},{av:'AV26BmpUlt',fld:'vBMPULT'},{av:'gx.fn.getCtrlProperty("vBMPULT","Tooltiptext")',ctrl:'vBMPULT',prop:'Tooltiptext'},{av:'AV23SdtCustosAlterados',fld:'vSDTCUSTOSALTERADOS',grid:42},{av:'AV11EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'AV12EntradaId',fld:'vENTRADAID',hsh:true},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'}],[{av:'AV23SdtCustosAlterados',fld:'vSDTCUSTOSALTERADOS',grid:42},{av:'AV28TxtAux',fld:'vTXTAUX'},{av:'AV21SdtAux',fld:'vSDTAUX'},{av:'AV54GXV2',fld:'vGXV2'},{av:'AV22SdtItem',fld:'vSDTITEM'},{av:'AV55GXLvl112',fld:'vGXLVL112'},{av:'AV56GXLvl121',fld:'vGXLVL121'}]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["'PRECOPRODUTO'"] = [[{av:'AV23SdtCustosAlterados',fld:'vSDTCUSTOSALTERADOS',grid:42}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ULTIMASENTRADAS'"] = [[{av:'AV23SdtCustosAlterados',fld:'vSDTCUSTOSALTERADOS',grid:42},{av:'Gx_date',fld:'vTODAY'}],[{av:'AV27SnRefreshModal',fld:'vSNREFRESHMODAL'}]];
   this.EvtParms["'EFETIVARPRECO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV24BmpEfe',fld:'vBMPEFE'},{av:'gx.fn.getCtrlProperty("vBMPEFE","Tooltiptext")',ctrl:'vBMPEFE',prop:'Tooltiptext'},{av:'AV25BmpPre',fld:'vBMPPRE'},{av:'gx.fn.getCtrlProperty("vBMPPRE","Tooltiptext")',ctrl:'vBMPPRE',prop:'Tooltiptext'},{av:'AV26BmpUlt',fld:'vBMPULT'},{av:'gx.fn.getCtrlProperty("vBMPULT","Tooltiptext")',ctrl:'vBMPULT',prop:'Tooltiptext'},{av:'AV23SdtCustosAlterados',fld:'vSDTCUSTOSALTERADOS',grid:42},{av:'AV11EntradaEmpresaId',fld:'vENTRADAEMPRESAID',hsh:true},{av:'AV12EntradaId',fld:'vENTRADAID',hsh:true},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A738PrecoVinculadoEmpresaId',fld:'PRECOVINCULADOEMPRESAID'},{av:'A736PrecoVinculadoId',fld:'PRECOVINCULADOID'},{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'A4343PrecoSnCalcularSistema',fld:'PRECOSNCALCULARSISTEMA'}],[{av:'AV33SnVinculado',fld:'vSNVINCULADO'},{av:'AV28TxtAux',fld:'vTXTAUX'}]];
   this.setVCMap("A4701EntradaValorProdutos", "ENTRADAVALORPRODUTOS", 0, "decimal");
   this.setVCMap("A6542EntradaValorServico", "ENTRADAVALORSERVICO", 0, "decimal");
   this.setVCMap("A4703EntradaValorDesconto", "ENTRADAVALORDESCONTO", 0, "decimal");
   this.setVCMap("A4716EntradaValorICMSST", "ENTRADAVALORICMSST", 0, "decimal");
   this.setVCMap("A4706EntradaValorSeguro", "ENTRADAVALORSEGURO", 0, "decimal");
   this.setVCMap("A4707EntradaValorOutrasDespesas", "ENTRADAVALOROUTRASDESPESAS", 0, "decimal");
   this.setVCMap("A4717EntradaValorIPI", "ENTRADAVALORIPI", 0, "decimal");
   this.setVCMap("A4705EntradaValorFrete", "ENTRADAVALORFRETE", 0, "decimal");
   this.setVCMap("A4737EntradaFreteEntraTotal", "ENTRADAFRETEENTRATOTAL", 0, "char");
   this.setVCMap("A10530EntradaValorICMSDesonerado", "ENTRADAVALORICMSDESONERADO", 0, "decimal");
   this.setVCMap("A11303EntradaICMSDesEntraTotal", "ENTRADAICMSDESENTRATOTAL", 0, "char");
   this.setVCMap("A10599EntradaValorFCPST", "ENTRADAVALORFCPST", 0, "decimal");
   this.setVCMap("A10600EntradaValorFCPSTRet", "ENTRADAVALORFCPSTRET", 0, "decimal");
   this.setVCMap("A4709EntradaValorTotal", "ENTRADAVALORTOTAL", 0, "decimal");
   this.setVCMap("AV23SdtCustosAlterados", "vSDTCUSTOSALTERADOS", 0, "CollSDTCustosAlterados.SDTCustosAlteradosItem");
   this.setVCMap("AV11EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("A709PrecoEmpresaId", "PRECOEMPRESAID", 0, "char");
   this.setVCMap("A710PrecoId", "PRECOID", 0, "int");
   this.setVCMap("A711PrecoDescricao", "PRECODESCRICAO", 0, "svchar");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("A2961ProdutoDescricaoResumida", "PRODUTODESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("AV23SdtCustosAlterados", "vSDTCUSTOSALTERADOS", 0, "CollSDTCustosAlterados.SDTCustosAlteradosItem");
   this.setVCMap("AV11EntradaEmpresaId", "vENTRADAEMPRESAID", 0, "char");
   this.setVCMap("A709PrecoEmpresaId", "PRECOEMPRESAID", 0, "char");
   this.setVCMap("A710PrecoId", "PRECOID", 0, "int");
   this.setVCMap("A711PrecoDescricao", "PRECODESCRICAO", 0, "svchar");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("A2961ProdutoDescricaoResumida", "PRODUTODESCRICAORESUMIDA", 0, "svchar");
   Grid1Container.addRefreshingVar({rfrVar:"AV24BmpEfe", rfrProp:"Value", gxAttId:"Bmpefe"});
   Grid1Container.addRefreshingVar({rfrVar:"AV24BmpEfe", rfrProp:"Tooltiptext", gxAttId:"Bmpefe"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25BmpPre", rfrProp:"Value", gxAttId:"Bmppre"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25BmpPre", rfrProp:"Tooltiptext", gxAttId:"Bmppre"});
   Grid1Container.addRefreshingVar({rfrVar:"AV26BmpUlt", rfrProp:"Value", gxAttId:"Bmpult"});
   Grid1Container.addRefreshingVar({rfrVar:"AV26BmpUlt", rfrProp:"Tooltiptext", gxAttId:"Bmpult"});
   Grid1Container.addRefreshingVar({rfrVar:"AV23SdtCustosAlterados"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11EntradaEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[10]);
   Grid1Container.addRefreshingVar({rfrVar:"A709PrecoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A710PrecoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A711PrecoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2961ProdutoDescricaoResumida"});
   this.addGridBCProperty("Sdtcustosalterados", ["ProdutoEmpresaId"], this.GXValidFnc[43], "AV23SdtCustosAlterados");
   this.addGridBCProperty("Sdtcustosalterados", ["ProdutoId"], this.GXValidFnc[44], "AV23SdtCustosAlterados");
   this.addGridBCProperty("Sdtcustosalterados", ["ProdutoDescricaoResumida"], this.GXValidFnc[45], "AV23SdtCustosAlterados");
   this.addGridBCProperty("Sdtcustosalterados", ["PrecoempresaId"], this.GXValidFnc[46], "AV23SdtCustosAlterados");
   this.addGridBCProperty("Sdtcustosalterados", ["Precoid"], this.GXValidFnc[47], "AV23SdtCustosAlterados");
   this.addGridBCProperty("Sdtcustosalterados", ["PrecoDescricao"], this.GXValidFnc[48], "AV23SdtCustosAlterados");
   this.addGridBCProperty("Sdtcustosalterados", ["ValorAnterior"], this.GXValidFnc[49], "AV23SdtCustosAlterados");
   this.addGridBCProperty("Sdtcustosalterados", ["ValorAtual"], this.GXValidFnc[50], "AV23SdtCustosAlterados");
   this.addGridBCProperty("Sdtcustosalterados", ["SnAlteracao"], this.GXValidFnc[51], "AV23SdtCustosAlterados");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcustosalterados());
