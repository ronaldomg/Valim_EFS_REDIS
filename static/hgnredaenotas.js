/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:57:52.32
*/
gx.evt.autoSkip = false;
gx.define('hgnredaenotas', false, function () {
   this.ServerClass =  "hgnredaenotas" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A4701EntradaValorProdutos=gx.fn.getDecimalValue("ENTRADAVALORPRODUTOS",'.',',') ;
      this.A6542EntradaValorServico=gx.fn.getDecimalValue("ENTRADAVALORSERVICO",'.',',') ;
      this.A4703EntradaValorDesconto=gx.fn.getDecimalValue("ENTRADAVALORDESCONTO",'.',',') ;
      this.A4716EntradaValorICMSST=gx.fn.getDecimalValue("ENTRADAVALORICMSST",'.',',') ;
      this.A4706EntradaValorSeguro=gx.fn.getDecimalValue("ENTRADAVALORSEGURO",'.',',') ;
      this.A4707EntradaValorOutrasDespesas=gx.fn.getDecimalValue("ENTRADAVALOROUTRASDESPESAS",'.',',') ;
      this.A4717EntradaValorIPI=gx.fn.getDecimalValue("ENTRADAVALORIPI",'.',',') ;
      this.A4705EntradaValorFrete=gx.fn.getDecimalValue("ENTRADAVALORFRETE",'.',',') ;
      this.A4737EntradaFreteEntraTotal=gx.fn.getControlValue("ENTRADAFRETEENTRATOTAL") ;
      this.A10530EntradaValorICMSDesonerado=gx.fn.getDecimalValue("ENTRADAVALORICMSDESONERADO",'.',',') ;
      this.A11303EntradaICMSDesEntraTotal=gx.fn.getControlValue("ENTRADAICMSDESENTRATOTAL") ;
      this.A10599EntradaValorFCPST=gx.fn.getDecimalValue("ENTRADAVALORFCPST",'.',',') ;
      this.A10600EntradaValorFCPSTRet=gx.fn.getDecimalValue("ENTRADAVALORFCPSTRET",'.',',') ;
      this.A4709EntradaValorTotal=gx.fn.getDecimalValue("ENTRADAVALORTOTAL",'.',',') ;
      this.A4660EntradaFilialId=gx.fn.getIntegerValue("ENTRADAFILIALID",'.') ;
      this.A4643EntradaFornecedorId=gx.fn.getIntegerValue("ENTRADAFORNECEDORID",'.') ;
      this.A4647EntradaSerie=gx.fn.getControlValue("ENTRADASERIE") ;
      this.A4646EntradaNumeroDocumento=gx.fn.getIntegerValue("ENTRADANUMERODOCUMENTO",'.') ;
      this.A5401EntradaGNREDAEEmpresaId=gx.fn.getControlValue("ENTRADAGNREDAEEMPRESAID") ;
      this.A5402EntradaGNREDAEId=gx.fn.getIntegerValue("ENTRADAGNREDAEID",'.') ;
      this.A4638EntradaId=gx.fn.getIntegerValue("ENTRADAID",'.') ;
      this.A4659EntradaFilialEmpId=gx.fn.getControlValue("ENTRADAFILIALEMPID") ;
      this.A4642EntradaFornecedorEmpId=gx.fn.getControlValue("ENTRADAFORNECEDOREMPID") ;
      this.A4644EntradaFornecedorFantasia=gx.fn.getControlValue("ENTRADAFORNECEDORFANTASIA") ;
      this.A4655EntradaDataEmissao=gx.fn.getDateValue("ENTRADADATAEMISSAO") ;
      this.A4656EntradaDataEntrada=gx.fn.getDateValue("ENTRADADATAENTRADA") ;
      this.A4667EntradaSituacao=gx.fn.getControlValue("ENTRADASITUACAO") ;
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
   this.Validv_Gnredaeempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGNREDAEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Gnredaeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGNREDAEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11vf2_client=function()
   {
      this.executeServerEvent("'VINCULAR'", false, null, false, false);
   };
   this.e15vf2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e12vf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e16vf2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e17vf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,13,15,19,21,23,25,30,32,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,61,62,63,64];
   this.GXLastCtrlId =64;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgnredaenotas",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Entradafilialempid",41,"vENTRADAFILIALEMPID","Empresa da Filial","","EntradaFilialEmpId","char",0,"px",10,10,"left",null,[],"Entradafilialempid","EntradaFilialEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradaidgrid",42,"vENTRADAIDGRID","Código da Entrada","","EntradaIdGrid","int",0,"px",10,10,"right",null,[],"Entradaidgrid","EntradaIdGrid",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradafilialid",43,"vENTRADAFILIALID","Filial","","EntradaFilialId","int",0,"px",7,7,"right",null,[],"Entradafilialid","EntradaFilialId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradafornecedorempid",44,"vENTRADAFORNECEDOREMPID","Empresa do Fornecedor","","EntradaFornecedorEmpId","char",0,"px",10,10,"left",null,[],"Entradafornecedorempid","EntradaFornecedorEmpId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Entradafornecedorid",45,"vENTRADAFORNECEDORID","Fornecedor","","EntradaFornecedorId","int",0,"px",7,7,"right",null,[],"Entradafornecedorid","EntradaFornecedorId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Fornecedorfantasia",46,"vFORNECEDORFANTASIA","Nome Fantasia","","FornecedorFantasia","svchar",0,"px",30,30,"left",null,[],"Fornecedorfantasia","FornecedorFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradaserie",47,"vENTRADASERIE","Série","","EntradaSerie","char",0,"px",4,4,"left",null,[],"Entradaserie","EntradaSerie",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradanumerodocumento",48,"vENTRADANUMERODOCUMENTO","Documento","","EntradaNumeroDocumento","int",0,"px",9,9,"right",null,[],"Entradanumerodocumento","EntradaNumeroDocumento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradadataemissao",49,"vENTRADADATAEMISSAO","Emissão","","EntradaDataEmissao","date",0,"px",10,10,"right",null,[],"Entradadataemissao","EntradaDataEmissao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradadataentrada",50,"vENTRADADATAENTRADA","Entrada","","EntradaDataEntrada","date",0,"px",10,10,"right",null,[],"Entradadataentrada","EntradaDataEntrada",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Entradavalortotal",51,"vENTRADAVALORTOTAL","Valor Total","","EntradaValorTotal","decimal",0,"px",22,22,"right",null,[],"Entradavalortotal","EntradaValorTotal",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox("Entradasituacao",52,"vENTRADASITUACAO","Situação","EntradaSituacao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e15vf2_client","","Excluir","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TXTDOCARREC", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGNREDAENODOCARRECADACAO",gxz:"ZV13GNREDAENoDocArrecadacao",gxold:"OV13GNREDAENoDocArrecadacao",gxvar:"AV13GNREDAENoDocArrecadacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13GNREDAENoDocArrecadacao=Value},v2z:function(Value){gx.O.ZV13GNREDAENoDocArrecadacao=Value},v2c:function(){gx.fn.setControlValue("vGNREDAENODOCARRECADACAO",gx.O.AV13GNREDAENoDocArrecadacao,0)},c2v:function(){gx.O.AV13GNREDAENoDocArrecadacao=this.val()},val:function(){return gx.fn.getControlValue("vGNREDAENODOCARRECADACAO")},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TXTVLR", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGNREDAEVALOR",gxz:"ZV16GNREDAEValor",gxold:"OV16GNREDAEValor",gxvar:"AV16GNREDAEValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16GNREDAEValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV16GNREDAEValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vGNREDAEVALOR",gx.O.AV16GNREDAEValor,2,',')},c2v:function(){gx.O.AV16GNREDAEValor=this.val()},val:function(){return gx.fn.getDecimalValue("vGNREDAEVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTVENC", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGNREDAEVENCIMENTO",gxz:"ZV14GNREDAEVencimento",gxold:"OV14GNREDAEVencimento",gxvar:"AV14GNREDAEVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14GNREDAEVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14GNREDAEVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vGNREDAEVENCIMENTO",gx.O.AV14GNREDAEVencimento,0)},c2v:function(){gx.O.AV14GNREDAEVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vGNREDAEVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTNONOTA", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaid,isvalid:null,rgrid:[],fld:"vENTRADAID",gxz:"ZV17EntradaId",gxold:"OV17EntradaId",gxvar:"AV17EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17EntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAID",gx.O.AV17EntradaId,0)},c2v:function(){gx.O.AV17EntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TXTPGTO", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGNREDAEDATAPAGAMENTO",gxz:"ZV15GNREDAEDataPagamento",gxold:"OV15GNREDAEDataPagamento",gxvar:"AV15GNREDAEDataPagamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15GNREDAEDataPagamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV15GNREDAEDataPagamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vGNREDAEDATAPAGAMENTO",gx.O.AV15GNREDAEDataPagamento,0)},c2v:function(){gx.O.AV15GNREDAEDataPagamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vGNREDAEDATAPAGAMENTO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"DIVGRID1", format:2,grid:0};
   GXValidFnc[41]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFILIALEMPID",gxz:"ZV22EntradaFilialEmpId",gxold:"OV22EntradaFilialEmpId",gxvar:"AV22EntradaFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV22EntradaFilialEmpId=Value},v2z:function(Value){gx.O.ZV22EntradaFilialEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAFILIALEMPID",row || gx.fn.currentGridRowImpl(40),gx.O.AV22EntradaFilialEmpId,0)},c2v:function(){gx.O.AV22EntradaFilialEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAFILIALEMPID",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAIDGRID",gxz:"ZV35EntradaIdGrid",gxold:"OV35EntradaIdGrid",gxvar:"AV35EntradaIdGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35EntradaIdGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35EntradaIdGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAIDGRID",row || gx.fn.currentGridRowImpl(40),gx.O.AV35EntradaIdGrid,0)},c2v:function(){gx.O.AV35EntradaIdGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAIDGRID",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFILIALID",gxz:"ZV19EntradaFilialId",gxold:"OV19EntradaFilialId",gxvar:"AV19EntradaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19EntradaFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19EntradaFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAFILIALID",row || gx.fn.currentGridRowImpl(40),gx.O.AV19EntradaFilialId,0)},c2v:function(){gx.O.AV19EntradaFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAFILIALID",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDOREMPID",gxz:"ZV20EntradaFornecedorEmpId",gxold:"OV20EntradaFornecedorEmpId",gxvar:"AV20EntradaFornecedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20EntradaFornecedorEmpId=Value},v2z:function(Value){gx.O.ZV20EntradaFornecedorEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADAFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(40),gx.O.AV20EntradaFornecedorEmpId,0)},c2v:function(){gx.O.AV20EntradaFornecedorEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADAFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAFORNECEDORID",gxz:"ZV21EntradaFornecedorId",gxold:"OV21EntradaFornecedorId",gxvar:"AV21EntradaFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21EntradaFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21EntradaFornecedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADAFORNECEDORID",row || gx.fn.currentGridRowImpl(40),gx.O.AV21EntradaFornecedorId,0)},c2v:function(){gx.O.AV21EntradaFornecedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADAFORNECEDORID",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFORNECEDORFANTASIA",gxz:"ZV33FornecedorFantasia",gxold:"OV33FornecedorFantasia",gxvar:"AV33FornecedorFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33FornecedorFantasia=Value},v2z:function(Value){gx.O.ZV33FornecedorFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("vFORNECEDORFANTASIA",row || gx.fn.currentGridRowImpl(40),gx.O.AV33FornecedorFantasia,0)},c2v:function(){gx.O.AV33FornecedorFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("vFORNECEDORFANTASIA",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASERIE",gxz:"ZV28EntradaSerie",gxold:"OV28EntradaSerie",gxvar:"AV28EntradaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28EntradaSerie=Value},v2z:function(Value){gx.O.ZV28EntradaSerie=Value},v2c:function(row){gx.fn.setGridControlValue("vENTRADASERIE",row || gx.fn.currentGridRowImpl(40),gx.O.AV28EntradaSerie,0)},c2v:function(){gx.O.AV28EntradaSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADASERIE",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADANUMERODOCUMENTO",gxz:"ZV29EntradaNumeroDocumento",gxold:"OV29EntradaNumeroDocumento",gxvar:"AV29EntradaNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29EntradaNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29EntradaNumeroDocumento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADANUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(40),gx.O.AV29EntradaNumeroDocumento,0)},c2v:function(){gx.O.AV29EntradaNumeroDocumento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vENTRADANUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAEMISSAO",gxz:"ZV24EntradaDataEmissao",gxold:"OV24EntradaDataEmissao",gxvar:"AV24EntradaDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24EntradaDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24EntradaDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADADATAEMISSAO",row || gx.fn.currentGridRowImpl(40),gx.O.AV24EntradaDataEmissao,0)},c2v:function(){gx.O.AV24EntradaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vENTRADADATAEMISSAO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADADATAENTRADA",gxz:"ZV25EntradaDataEntrada",gxold:"OV25EntradaDataEntrada",gxvar:"AV25EntradaDataEntrada",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25EntradaDataEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25EntradaDataEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vENTRADADATAENTRADA",row || gx.fn.currentGridRowImpl(40),gx.O.AV25EntradaDataEntrada,0)},c2v:function(){gx.O.AV25EntradaDataEntrada=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vENTRADADATAENTRADA",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAVALORTOTAL",gxz:"ZV26EntradaValorTotal",gxold:"OV26EntradaValorTotal",gxvar:"AV26EntradaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26EntradaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV26EntradaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vENTRADAVALORTOTAL",row || gx.fn.currentGridRowImpl(40),gx.O.AV26EntradaValorTotal,2,',')},c2v:function(){gx.O.AV26EntradaValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vENTRADAVALORTOTAL",row || gx.fn.currentGridRowImpl(40),'.',',')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADASITUACAO",gxz:"ZV27EntradaSituacao",gxold:"OV27EntradaSituacao",gxvar:"AV27EntradaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV27EntradaSituacao=Value},v2z:function(Value){gx.O.ZV27EntradaSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vENTRADASITUACAO",row || gx.fn.currentGridRowImpl(40),gx.O.AV27EntradaSituacao)},c2v:function(){gx.O.AV27EntradaSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vENTRADASITUACAO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV34bmpExc",gxold:"OV34bmpExc",gxvar:"AV34bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpExc=Value},v2z:function(Value){gx.O.ZV34bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(40),gx.O.AV34bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV34bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={fld:"DIVGRID2", format:2,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gnredaeempresaid,isvalid:null,rgrid:[],fld:"vGNREDAEEMPRESAID",gxz:"ZV11GNREDAEEmpresaId",gxold:"OV11GNREDAEEmpresaId",gxvar:"AV11GNREDAEEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11GNREDAEEmpresaId=Value},v2z:function(Value){gx.O.ZV11GNREDAEEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vGNREDAEEMPRESAID",gx.O.AV11GNREDAEEmpresaId,0)},c2v:function(){gx.O.AV11GNREDAEEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vGNREDAEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gnredaeid,isvalid:null,rgrid:[],fld:"vGNREDAEID",gxz:"ZV12GNREDAEId",gxold:"OV12GNREDAEId",gxvar:"AV12GNREDAEId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12GNREDAEId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12GNREDAEId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGNREDAEID",gx.O.AV12GNREDAEId,0)},c2v:function(){gx.O.AV12GNREDAEId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGNREDAEID",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaempresaid,isvalid:null,rgrid:[],fld:"vENTRADAEMPRESAID",gxz:"ZV18EntradaEmpresaId",gxold:"OV18EntradaEmpresaId",gxvar:"AV18EntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18EntradaEmpresaId=Value},v2z:function(Value){gx.O.ZV18EntradaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vENTRADAEMPRESAID",gx.O.AV18EntradaEmpresaId,0)},c2v:function(){gx.O.AV18EntradaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV36Tipo",gxold:"OV36Tipo",gxvar:"AV36Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36Tipo=Value},v2z:function(Value){gx.O.ZV36Tipo=Value},v2c:function(){gx.fn.setControlValue("vTIPO",gx.O.AV36Tipo,0)},c2v:function(){gx.O.AV36Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   this.AV13GNREDAENoDocArrecadacao = "" ;
   this.ZV13GNREDAENoDocArrecadacao = "" ;
   this.OV13GNREDAENoDocArrecadacao = "" ;
   this.AV16GNREDAEValor = 0 ;
   this.ZV16GNREDAEValor = 0 ;
   this.OV16GNREDAEValor = 0 ;
   this.AV14GNREDAEVencimento = gx.date.nullDate() ;
   this.ZV14GNREDAEVencimento = gx.date.nullDate() ;
   this.OV14GNREDAEVencimento = gx.date.nullDate() ;
   this.AV17EntradaId = 0 ;
   this.ZV17EntradaId = 0 ;
   this.OV17EntradaId = 0 ;
   this.AV15GNREDAEDataPagamento = gx.date.nullDate() ;
   this.ZV15GNREDAEDataPagamento = gx.date.nullDate() ;
   this.OV15GNREDAEDataPagamento = gx.date.nullDate() ;
   this.ZV22EntradaFilialEmpId = "" ;
   this.OV22EntradaFilialEmpId = "" ;
   this.ZV35EntradaIdGrid = 0 ;
   this.OV35EntradaIdGrid = 0 ;
   this.ZV19EntradaFilialId = 0 ;
   this.OV19EntradaFilialId = 0 ;
   this.ZV20EntradaFornecedorEmpId = "" ;
   this.OV20EntradaFornecedorEmpId = "" ;
   this.ZV21EntradaFornecedorId = 0 ;
   this.OV21EntradaFornecedorId = 0 ;
   this.ZV33FornecedorFantasia = "" ;
   this.OV33FornecedorFantasia = "" ;
   this.ZV28EntradaSerie = "" ;
   this.OV28EntradaSerie = "" ;
   this.ZV29EntradaNumeroDocumento = 0 ;
   this.OV29EntradaNumeroDocumento = 0 ;
   this.ZV24EntradaDataEmissao = gx.date.nullDate() ;
   this.OV24EntradaDataEmissao = gx.date.nullDate() ;
   this.ZV25EntradaDataEntrada = gx.date.nullDate() ;
   this.OV25EntradaDataEntrada = gx.date.nullDate() ;
   this.ZV26EntradaValorTotal = 0 ;
   this.OV26EntradaValorTotal = 0 ;
   this.ZV27EntradaSituacao = "" ;
   this.OV27EntradaSituacao = "" ;
   this.ZV34bmpExc = "" ;
   this.OV34bmpExc = "" ;
   this.AV11GNREDAEEmpresaId = "" ;
   this.ZV11GNREDAEEmpresaId = "" ;
   this.OV11GNREDAEEmpresaId = "" ;
   this.AV12GNREDAEId = 0 ;
   this.ZV12GNREDAEId = 0 ;
   this.OV12GNREDAEId = 0 ;
   this.AV18EntradaEmpresaId = "" ;
   this.ZV18EntradaEmpresaId = "" ;
   this.OV18EntradaEmpresaId = "" ;
   this.AV36Tipo = "" ;
   this.ZV36Tipo = "" ;
   this.OV36Tipo = "" ;
   this.AV13GNREDAENoDocArrecadacao = "" ;
   this.AV16GNREDAEValor = 0 ;
   this.AV14GNREDAEVencimento = gx.date.nullDate() ;
   this.AV17EntradaId = 0 ;
   this.AV15GNREDAEDataPagamento = gx.date.nullDate() ;
   this.AV11GNREDAEEmpresaId = "" ;
   this.AV12GNREDAEId = 0 ;
   this.AV18EntradaEmpresaId = "" ;
   this.AV36Tipo = "" ;
   this.AV22EntradaFilialEmpId = "" ;
   this.AV35EntradaIdGrid = 0 ;
   this.AV19EntradaFilialId = 0 ;
   this.AV20EntradaFornecedorEmpId = "" ;
   this.AV21EntradaFornecedorId = 0 ;
   this.AV33FornecedorFantasia = "" ;
   this.AV28EntradaSerie = "" ;
   this.AV29EntradaNumeroDocumento = 0 ;
   this.AV24EntradaDataEmissao = gx.date.nullDate() ;
   this.AV25EntradaDataEntrada = gx.date.nullDate() ;
   this.AV26EntradaValorTotal = 0 ;
   this.AV27EntradaSituacao = "" ;
   this.AV34bmpExc = "" ;
   this.A4681GNREDAEid = 0 ;
   this.A5386GNREDAEEmpresaId = "" ;
   this.A5398GNREDAENoDocArrecadacao = "" ;
   this.A5393GNREDAEVencimento = gx.date.nullDate() ;
   this.A5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.A5392GNREDAEValor = 0 ;
   this.A4638EntradaId = 0 ;
   this.A4637EntradaEmpresaId = "" ;
   this.A5402EntradaGNREDAEId = 0 ;
   this.A5401EntradaGNREDAEEmpresaId = "" ;
   this.A4659EntradaFilialEmpId = "" ;
   this.A4642EntradaFornecedorEmpId = "" ;
   this.A4644EntradaFornecedorFantasia = "" ;
   this.A4655EntradaDataEmissao = gx.date.nullDate() ;
   this.A4656EntradaDataEntrada = gx.date.nullDate() ;
   this.A4667EntradaSituacao = "" ;
   this.A4646EntradaNumeroDocumento = 0 ;
   this.A4647EntradaSerie = "" ;
   this.A4643EntradaFornecedorId = 0 ;
   this.A4660EntradaFilialId = 0 ;
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
   this.Events = {"e11vf2_client": ["'VINCULAR'", true] ,"e15vf2_client": ["'EXCLUIR'", true] ,"e12vf2_client": ["'FECHAR'", true] ,"e16vf2_client": ["ENTER", true] ,"e17vf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV34bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'A5401EntradaGNREDAEEmpresaId',fld:'ENTRADAGNREDAEEMPRESAID'},{av:'AV11GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID',hsh:true},{av:'A5402EntradaGNREDAEId',fld:'ENTRADAGNREDAEID'},{av:'AV12GNREDAEId',fld:'vGNREDAEID',hsh:true},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'A4644EntradaFornecedorFantasia',fld:'ENTRADAFORNECEDORFANTASIA'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A4660EntradaFilialId',fld:'ENTRADAFILIALID'},{av:'A4643EntradaFornecedorId',fld:'ENTRADAFORNECEDORID'},{av:'A4647EntradaSerie',fld:'ENTRADASERIE'},{av:'A4646EntradaNumeroDocumento',fld:'ENTRADANUMERODOCUMENTO'},{av:'A5401EntradaGNREDAEEmpresaId',fld:'ENTRADAGNREDAEEMPRESAID'},{av:'AV11GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID',hsh:true},{av:'A5402EntradaGNREDAEId',fld:'ENTRADAGNREDAEID'},{av:'AV12GNREDAEId',fld:'vGNREDAEID',hsh:true},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4659EntradaFilialEmpId',fld:'ENTRADAFILIALEMPID'},{av:'A4642EntradaFornecedorEmpId',fld:'ENTRADAFORNECEDOREMPID'},{av:'A4644EntradaFornecedorFantasia',fld:'ENTRADAFORNECEDORFANTASIA'},{av:'A4655EntradaDataEmissao',fld:'ENTRADADATAEMISSAO'},{av:'A4656EntradaDataEntrada',fld:'ENTRADADATAENTRADA'},{av:'A4709EntradaValorTotal',fld:'ENTRADAVALORTOTAL'},{av:'A4667EntradaSituacao',fld:'ENTRADASITUACAO'}],[{av:'AV35EntradaIdGrid',fld:'vENTRADAIDGRID'},{av:'AV22EntradaFilialEmpId',fld:'vENTRADAFILIALEMPID'},{av:'AV19EntradaFilialId',fld:'vENTRADAFILIALID'},{av:'AV28EntradaSerie',fld:'vENTRADASERIE'},{av:'AV20EntradaFornecedorEmpId',fld:'vENTRADAFORNECEDOREMPID'},{av:'AV21EntradaFornecedorId',fld:'vENTRADAFORNECEDORID'},{av:'AV33FornecedorFantasia',fld:'vFORNECEDORFANTASIA'},{av:'AV29EntradaNumeroDocumento',fld:'vENTRADANUMERODOCUMENTO'},{av:'AV24EntradaDataEmissao',fld:'vENTRADADATAEMISSAO'},{av:'AV25EntradaDataEntrada',fld:'vENTRADADATAENTRADA'},{av:'AV26EntradaValorTotal',fld:'vENTRADAVALORTOTAL'},{av:'AV27EntradaSituacao',fld:'vENTRADASITUACAO'}]];
   this.EvtParms["'VINCULAR'"] = [[{av:'AV17EntradaId',fld:'vENTRADAID'},{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'AV18EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A5402EntradaGNREDAEId',fld:'ENTRADAGNREDAEID'},{av:'AV11GNREDAEEmpresaId',fld:'vGNREDAEEMPRESAID',hsh:true},{av:'AV12GNREDAEId',fld:'vGNREDAEID',hsh:true},{av:'AV5UsrCod',fld:'vUSRCOD'}],[{av:'AV32SnErro',fld:'vSNERRO'},{av:'AV44GXLvl62',fld:'vGXLVL62'},{av:'AV17EntradaId',fld:'vENTRADAID'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV18EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV35EntradaIdGrid',fld:'vENTRADAIDGRID'},{av:'AV5UsrCod',fld:'vUSRCOD'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
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
   this.setVCMap("A4660EntradaFilialId", "ENTRADAFILIALID", 0, "int");
   this.setVCMap("A4643EntradaFornecedorId", "ENTRADAFORNECEDORID", 0, "int");
   this.setVCMap("A4647EntradaSerie", "ENTRADASERIE", 0, "char");
   this.setVCMap("A4646EntradaNumeroDocumento", "ENTRADANUMERODOCUMENTO", 0, "int");
   this.setVCMap("A5401EntradaGNREDAEEmpresaId", "ENTRADAGNREDAEEMPRESAID", 0, "char");
   this.setVCMap("A5402EntradaGNREDAEId", "ENTRADAGNREDAEID", 0, "int");
   this.setVCMap("A4638EntradaId", "ENTRADAID", 0, "int");
   this.setVCMap("A4659EntradaFilialEmpId", "ENTRADAFILIALEMPID", 0, "char");
   this.setVCMap("A4642EntradaFornecedorEmpId", "ENTRADAFORNECEDOREMPID", 0, "char");
   this.setVCMap("A4644EntradaFornecedorFantasia", "ENTRADAFORNECEDORFANTASIA", 0, "svchar");
   this.setVCMap("A4655EntradaDataEmissao", "ENTRADADATAEMISSAO", 0, "date");
   this.setVCMap("A4656EntradaDataEntrada", "ENTRADADATAENTRADA", 0, "date");
   this.setVCMap("A4667EntradaSituacao", "ENTRADASITUACAO", 0, "char");
   this.setVCMap("A4660EntradaFilialId", "ENTRADAFILIALID", 0, "int");
   this.setVCMap("A4643EntradaFornecedorId", "ENTRADAFORNECEDORID", 0, "int");
   this.setVCMap("A4647EntradaSerie", "ENTRADASERIE", 0, "char");
   this.setVCMap("A4646EntradaNumeroDocumento", "ENTRADANUMERODOCUMENTO", 0, "int");
   this.setVCMap("A5401EntradaGNREDAEEmpresaId", "ENTRADAGNREDAEEMPRESAID", 0, "char");
   this.setVCMap("A5402EntradaGNREDAEId", "ENTRADAGNREDAEID", 0, "int");
   this.setVCMap("A4638EntradaId", "ENTRADAID", 0, "int");
   this.setVCMap("A4659EntradaFilialEmpId", "ENTRADAFILIALEMPID", 0, "char");
   this.setVCMap("A4642EntradaFornecedorEmpId", "ENTRADAFORNECEDOREMPID", 0, "char");
   this.setVCMap("A4644EntradaFornecedorFantasia", "ENTRADAFORNECEDORFANTASIA", 0, "svchar");
   this.setVCMap("A4655EntradaDataEmissao", "ENTRADADATAEMISSAO", 0, "date");
   this.setVCMap("A4656EntradaDataEntrada", "ENTRADADATAENTRADA", 0, "date");
   this.setVCMap("A4667EntradaSituacao", "ENTRADASITUACAO", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"A4660EntradaFilialId"});
   GridContainer.addRefreshingVar({rfrVar:"A4643EntradaFornecedorId"});
   GridContainer.addRefreshingVar({rfrVar:"A4647EntradaSerie"});
   GridContainer.addRefreshingVar({rfrVar:"A4646EntradaNumeroDocumento"});
   GridContainer.addRefreshingVar({rfrVar:"A5401EntradaGNREDAEEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"A5402EntradaGNREDAEId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"A4638EntradaId"});
   GridContainer.addRefreshingVar({rfrVar:"A4659EntradaFilialEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A4642EntradaFornecedorEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A4644EntradaFornecedorFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A4655EntradaDataEmissao"});
   GridContainer.addRefreshingVar({rfrVar:"A4656EntradaDataEntrada"});
   GridContainer.addRefreshingVar({rfrVar:"A4709EntradaValorTotal"});
   GridContainer.addRefreshingVar({rfrVar:"A4667EntradaSituacao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgnredaenotas());
