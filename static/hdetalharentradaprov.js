/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:5:9.0
*/
gx.evt.autoSkip = false;
gx.define('hdetalharentradaprov', false, function () {
   this.ServerClass =  "hdetalharentradaprov" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV50EntradaProvEmpresaId=gx.fn.getControlValue("vENTRADAPROVEMPRESAID") ;
      this.AV101PessoaProvCPFCNPJ=gx.fn.getControlValue("vPESSOAPROVCPFCNPJ") ;
   };
   this.Validv_Entradaprovsnefetivada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVSNEFETIVADA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovsitdocfiscal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVSITDOCFISCAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovcfopcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVCFOPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transportadorcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSPORTADORCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Entradaprovcidadeentretirada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vENTRADAPROVCIDADEENTRETIRADA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111ce2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131ce2_client=function()
   {
      this.executeServerEvent("'DETALHARITEM'", true, arguments[0], false, false);
   };
   this.e161ce2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e171ce2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,15,17,20,22,25,27,29,32,34,37,39,42,44,46,49,51,54,56,59,61,64,66,67,70,72,73,76,79,81,84,85,86,91,94,97,100,102,105,107,110,112,113,115,118,120,123,125,128,130,131,134,137,140,142,144,146,149,151,153,155,157,160,162,165,167,169,174,177,179,180,184,187,190,192,195,197,200,202,205,207,210,212,215,217,220,222,225,227,229,232,234,237,239,242,244,247,249,255,257,260,262,265,267,269,272,274,277,279,282,284,287,289,292,294,300,302,305,307,313,315,318,320,323,325,330,333,335,336,339,342,344,346,348,351,353,355,357,359,362,364,367,369,371,376,378,379,380,381,382,383,384,385,386,387,388,389,390,391,394,397,399,401,403,406,408,410,412,414,417,419,422,424,426,431,434,437,440,443,444,447,450,452,454,456,459,461,463,465,467,470,472,475,477,479,484,487,490,493,496,498,501,503,506,509,514,517,520,522,525,527,530,532,535,537,540,542,545,547,548,549,552,555,557,559,561,564,566,568,570,572,575,577,580,582,584,589,592,596,598,603,606,610,612,615,617];
   this.GXLastCtrlId =617;
   this.GrdprodContainer = new gx.grid.grid(this, 2,"WbpLvl2",377,"Grdprod","Grdprod","GrdprodContainer",this.CmpContext,this.IsMasterPage,"hdetalharentradaprov",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GrdprodContainer = this.GrdprodContainer;
   GrdprodContainer.addSingleLineEdit(5091,378,"ENTRADAPROVSEQUENCIA","Sequência","","EntradaProvSequencia","int",0,"px",6,6,"right",null,[],5091,"EntradaProvSequencia",false,0,false,false,"Attribute",1,"");
   GrdprodContainer.addSingleLineEdit(5095,379,"ENTRADAPROVITEMLOTEPRODID","Código","","EntradaProvItemLoteProdId","int",60,"px",10,10,"right",null,[],5095,"EntradaProvItemLoteProdId",true,0,false,false,"Attribute",1,"");
   GrdprodContainer.addSingleLineEdit("Produtodescricao",380,"vPRODUTODESCRICAO","Descrição Produto","","ProdutoDescricao","svchar",0,"px",120,80,"left",null,[],"Produtodescricao","ProdutoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GrdprodContainer.addSingleLineEdit(5096,381,"ENTRADAPROVITEMLOTECOMBINACAO"," Lote","","EntradaProvItemLoteCombinacao","char",0,"px",20,20,"left",null,[],5096,"EntradaProvItemLoteCombinacao",true,0,false,false,"Attribute",1,"");
   GrdprodContainer.addSingleLineEdit(8233,382,"ENTRADAPROVITEMLOTEPRODDESC","Descrição do Produto","","EntradaProvItemLoteProdDesc","svchar",375,"px",120,80,"left",null,[],8233,"EntradaProvItemLoteProdDesc",false,0,false,false,"SemQuebraGrid",1,"");
   GrdprodContainer.addSingleLineEdit(5098,383,"ENTRADAPROVITEMQUANTIDADE","Quantidade","","EntradaProvItemQuantidade","decimal",100,"px",21,21,"right",null,[],5098,"EntradaProvItemQuantidade",true,4,false,false,"SemQuebraGrid",1,"");
   GrdprodContainer.addSingleLineEdit(5103,384,"ENTRADAPROVITEMVALOR","Valor Unitário","","EntradaProvItemValor","decimal",100,"px",21,21,"right",null,[],5103,"EntradaProvItemValor",true,6,false,false,"SemQuebraGrid",1,"");
   GrdprodContainer.addSingleLineEdit(5104,385,"ENTRADAPROVITEMVALORDESCONTO","Desconto","","EntradaProvItemValorDesconto","decimal",100,"px",22,22,"right",null,[],5104,"EntradaProvItemValorDesconto",true,2,false,false,"SemQuebraGrid",1,"");
   GrdprodContainer.addSingleLineEdit("Vlrtotal",386,"vVLRTOTAL","Valor Total","","VlrTotal","decimal",100,"px",22,22,"right",null,[],"Vlrtotal","VlrTotal",true,2,false,false,"SemQuebraGrid",1,"");
   GrdprodContainer.addSingleLineEdit(5118,387,"ENTRADAPROVITEMALIQUOTAICMS","(%)ICMS","","EntradaProvItemAliquotaICMS","decimal",50,"px",6,6,"right",null,[],5118,"EntradaProvItemAliquotaICMS",true,2,false,false,"SemQuebraGrid",1,"");
   GrdprodContainer.addSingleLineEdit(5119,388,"ENTRADAPROVITEMVALORICMS","Valor ICMS","","EntradaProvItemValorICMS","decimal",100,"px",22,22,"right",null,[],5119,"EntradaProvItemValorICMS",false,2,false,false,"SemQuebraGrid",1,"");
   GrdprodContainer.addBitmap("&Bmpcon","vBMPCON",389,0,"px",17,"px","e131ce2_client","","","Image","");
   this.setGrid(GrdprodContainer);
   this.TABCSSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV108Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV108Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV108Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hdetalharentradaprov_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE16",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TABLE22",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCHAVENFE",gxz:"ZV28EntradaProvChaveNFE",gxold:"OV28EntradaProvChaveNFE",gxvar:"AV28EntradaProvChaveNFE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EntradaProvChaveNFE=Value},v2z:function(Value){gx.O.ZV28EntradaProvChaveNFE=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCHAVENFE",gx.O.AV28EntradaProvChaveNFE,0)},c2v:function(){gx.O.AV28EntradaProvChaveNFE=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCHAVENFE")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[22]={fld:"TABLE73",grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSERIE",gxz:"ZV29EntradaProvSerie",gxold:"OV29EntradaProvSerie",gxvar:"AV29EntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EntradaProvSerie=Value},v2z:function(Value){gx.O.ZV29EntradaProvSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSERIE",gx.O.AV29EntradaProvSerie,0)},c2v:function(){gx.O.AV29EntradaProvSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSERIE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK140", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSUBSERIE",gxz:"ZV30EntradaProvSubSerie",gxold:"OV30EntradaProvSubSerie",gxvar:"AV30EntradaProvSubSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EntradaProvSubSerie=Value},v2z:function(Value){gx.O.ZV30EntradaProvSubSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSUBSERIE",gx.O.AV30EntradaProvSubSerie,0)},c2v:function(){gx.O.AV30EntradaProvSubSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSUBSERIE")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK36", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMERODOCUMENTO",gxz:"ZV31EntradaProvNumeroDocumento",gxold:"OV31EntradaProvNumeroDocumento",gxvar:"AV31EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVNUMERODOCUMENTO",gx.O.AV31EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVNUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovsnefetivada,isvalid:null,rgrid:[],fld:"vENTRADAPROVSNEFETIVADA",gxz:"ZV32EntradaProvSNEfetivada",gxold:"OV32EntradaProvSNEfetivada",gxvar:"AV32EntradaProvSNEfetivada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32EntradaProvSNEfetivada=Value},v2z:function(Value){gx.O.ZV32EntradaProvSNEfetivada=Value},v2c:function(){gx.fn.setComboBoxValue("vENTRADAPROVSNEFETIVADA",gx.O.AV32EntradaProvSNEfetivada)},c2v:function(){gx.O.AV32EntradaProvSNEfetivada=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSNEFETIVADA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK49", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCODIGOANTECIPACAO",gxz:"ZV33EntradaProvCodigoAntecipacao",gxold:"OV33EntradaProvCodigoAntecipacao",gxvar:"AV33EntradaProvCodigoAntecipacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33EntradaProvCodigoAntecipacao=Value},v2z:function(Value){gx.O.ZV33EntradaProvCodigoAntecipacao=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCODIGOANTECIPACAO",gx.O.AV33EntradaProvCodigoAntecipacao,0)},c2v:function(){gx.O.AV33EntradaProvCodigoAntecipacao=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCODIGOANTECIPACAO")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLE4",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovtipo,isvalid:null,rgrid:[],fld:"vENTRADAPROVTIPO",gxz:"ZV34EntradaProvTipo",gxold:"OV34EntradaProvTipo",gxvar:"AV34EntradaProvTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV34EntradaProvTipo=Value},v2z:function(Value){gx.O.ZV34EntradaProvTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vENTRADAPROVTIPO",gx.O.AV34EntradaProvTipo)},c2v:function(){gx.O.AV34EntradaProvTipo=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVTIPO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAEMISSAO",gxz:"ZV35EntradaProvDataEmissao",gxold:"OV35EntradaProvDataEmissao",gxvar:"AV35EntradaProvDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV35EntradaProvDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVDATAEMISSAO",gx.O.AV35EntradaProvDataEmissao,0)},c2v:function(){gx.O.AV35EntradaProvDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADAPROVDATAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDATAENTRADA",gxz:"ZV36EntradaProvDataEntrada",gxold:"OV36EntradaProvDataEntrada",gxvar:"AV36EntradaProvDataEntrada",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36EntradaProvDataEntrada=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV36EntradaProvDataEntrada=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVDATAENTRADA",gx.O.AV36EntradaProvDataEntrada,0)},c2v:function(){gx.O.AV36EntradaProvDataEntrada=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vENTRADAPROVDATAENTRADA")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK38", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVMODELODOCFISCALCODIGO",gxz:"ZV37EntradaProvModeloDocFiscalCodigo",gxold:"OV37EntradaProvModeloDocFiscalCodigo",gxvar:"AV37EntradaProvModeloDocFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37EntradaProvModeloDocFiscalCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37EntradaProvModeloDocFiscalCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVMODELODOCFISCALCODIGO",gx.O.AV37EntradaProvModeloDocFiscalCodigo,0)},c2v:function(){gx.O.AV37EntradaProvModeloDocFiscalCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVMODELODOCFISCALCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVMODELODOCFISCALDESC",gxz:"ZV38EntradaProvModeloDocFiscalDesc",gxold:"OV38EntradaProvModeloDocFiscalDesc",gxvar:"AV38EntradaProvModeloDocFiscalDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38EntradaProvModeloDocFiscalDesc=Value},v2z:function(Value){gx.O.ZV38EntradaProvModeloDocFiscalDesc=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVMODELODOCFISCALDESC",gx.O.AV38EntradaProvModeloDocFiscalDesc,0)},c2v:function(){gx.O.AV38EntradaProvModeloDocFiscalDesc=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVMODELODOCFISCALDESC")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovsitdocfiscal,isvalid:null,rgrid:[],fld:"vENTRADAPROVSITDOCFISCAL",gxz:"ZV39EntradaProvSitDocFiscal",gxold:"OV39EntradaProvSitDocFiscal",gxvar:"AV39EntradaProvSitDocFiscal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39EntradaProvSitDocFiscal=Value},v2z:function(Value){gx.O.ZV39EntradaProvSitDocFiscal=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSITDOCFISCAL",gx.O.AV39EntradaProvSitDocFiscal,0)},c2v:function(){gx.O.AV39EntradaProvSitDocFiscal=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSITDOCFISCAL")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSITDOCFISCALDESC",gxz:"ZV40EntradaProvSitDocFiscalDesc",gxold:"OV40EntradaProvSitDocFiscalDesc",gxvar:"AV40EntradaProvSitDocFiscalDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40EntradaProvSitDocFiscalDesc=Value},v2z:function(Value){gx.O.ZV40EntradaProvSitDocFiscalDesc=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSITDOCFISCALDESC",gx.O.AV40EntradaProvSitDocFiscalDesc,0)},c2v:function(){gx.O.AV40EntradaProvSitDocFiscalDesc=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSITDOCFISCALDESC")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TABLE25",grid:0};
   GXValidFnc[79]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[81]={fld:"TABLE85",grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovcfopcodigo,isvalid:null,rgrid:[],fld:"vENTRADAPROVCFOPCODIGO",gxz:"ZV41EntradaProvCFOPCodigo",gxold:"OV41EntradaProvCFOPCodigo",gxvar:"AV41EntradaProvCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41EntradaProvCFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41EntradaProvCFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCFOPCODIGO",gx.O.AV41EntradaProvCFOPCodigo,0)},c2v:function(){gx.O.AV41EntradaProvCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVCFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"svchar",len:340,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCFOPDESCRICAO",gxz:"ZV42EntradaProvCFOPDescricao",gxold:"OV42EntradaProvCFOPDescricao",gxvar:"AV42EntradaProvCFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42EntradaProvCFOPDescricao=Value},v2z:function(Value){gx.O.ZV42EntradaProvCFOPDescricao=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCFOPDESCRICAO",gx.O.AV42EntradaProvCFOPDescricao,0)},c2v:function(){gx.O.AV42EntradaProvCFOPDescricao=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCFOPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TABLE83",grid:0};
   GXValidFnc[91]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[94]={fld:"TABLE5",grid:0};
   GXValidFnc[97]={fld:"TABLE6",grid:0};
   GXValidFnc[100]={fld:"TEXTBLOCK186", format:0,grid:0};
   GXValidFnc[102]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVTIPOTRANSPORTE",gxz:"ZV43EntradaProvTipoTransporte",gxold:"OV43EntradaProvTipoTransporte",gxvar:"AV43EntradaProvTipoTransporte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV43EntradaProvTipoTransporte=Value},v2z:function(Value){gx.O.ZV43EntradaProvTipoTransporte=Value},v2c:function(){gx.fn.setComboBoxValue("vENTRADAPROVTIPOTRANSPORTE",gx.O.AV43EntradaProvTipoTransporte)},c2v:function(){gx.O.AV43EntradaProvTipoTransporte=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVTIPOTRANSPORTE")},nac:gx.falseFn};
   GXValidFnc[105]={fld:"TEXTBLOCK131", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVMODALIDADEFRETE",gxz:"ZV44EntradaProvModalidadeFrete",gxold:"OV44EntradaProvModalidadeFrete",gxvar:"AV44EntradaProvModalidadeFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV44EntradaProvModalidadeFrete=Value},v2z:function(Value){gx.O.ZV44EntradaProvModalidadeFrete=Value},v2c:function(){gx.fn.setComboBoxValue("vENTRADAPROVMODALIDADEFRETE",gx.O.AV44EntradaProvModalidadeFrete)},c2v:function(){gx.O.AV44EntradaProvModalidadeFrete=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVMODALIDADEFRETE")},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK187", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transportadorcodigo,isvalid:null,rgrid:[],fld:"vTRANSPORTADORCODIGO",gxz:"ZV45TransportadorCodigo",gxold:"OV45TransportadorCodigo",gxvar:"AV45TransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45TransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45TransportadorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORCODIGO",gx.O.AV45TransportadorCodigo,0)},c2v:function(){gx.O.AV45TransportadorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSPORTADORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[113]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSPORTADORNOME",gxz:"ZV46TransportadorNome",gxold:"OV46TransportadorNome",gxvar:"AV46TransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46TransportadorNome=Value},v2z:function(Value){gx.O.ZV46TransportadorNome=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORNOME",gx.O.AV46TransportadorNome,0)},c2v:function(){gx.O.AV46TransportadorNome=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADORNOME")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TABLE7",grid:0};
   GXValidFnc[118]={fld:"TEXTBLOCK189", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVMARCA",gxz:"ZV47EntradaProvMarca",gxold:"OV47EntradaProvMarca",gxvar:"AV47EntradaProvMarca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47EntradaProvMarca=Value},v2z:function(Value){gx.O.ZV47EntradaProvMarca=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVMARCA",gx.O.AV47EntradaProvMarca,0)},c2v:function(){gx.O.AV47EntradaProvMarca=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVMARCA")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK188", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVESPECIE",gxz:"ZV48EntradaProvEspecie",gxold:"OV48EntradaProvEspecie",gxvar:"AV48EntradaProvEspecie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48EntradaProvEspecie=Value},v2z:function(Value){gx.O.ZV48EntradaProvEspecie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVESPECIE",gx.O.AV48EntradaProvEspecie,0)},c2v:function(){gx.O.AV48EntradaProvEspecie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVESPECIE")},nac:gx.falseFn};
   GXValidFnc[128]={fld:"TEXTBLOCK190", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMERACAO",gxz:"ZV49EntradaProvNumeracao",gxold:"OV49EntradaProvNumeracao",gxvar:"AV49EntradaProvNumeracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49EntradaProvNumeracao=Value},v2z:function(Value){gx.O.ZV49EntradaProvNumeracao=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVNUMERACAO",gx.O.AV49EntradaProvNumeracao,0)},c2v:function(){gx.O.AV49EntradaProvNumeracao=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVNUMERACAO")},nac:gx.falseFn};
   GXValidFnc[131]={fld:"TAB2",grid:0};
   GXValidFnc[134]={fld:"TABLE13",grid:0};
   GXValidFnc[137]={fld:"TABLE41",grid:0};
   GXValidFnc[140]={fld:"TEXTBLOCK180", format:0,grid:0};
   GXValidFnc[142]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMERODOCUMENTO",gxz:"ZV31EntradaProvNumeroDocumento",gxold:"OV31EntradaProvNumeroDocumento",gxvar:"AV31EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVNUMERODOCUMENTO",gx.O.AV31EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVNUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[144]={fld:"TEXTBLOCK181", format:0,grid:0};
   GXValidFnc[146]={fld:"TABLE94",grid:0};
   GXValidFnc[149]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSERIE",gxz:"ZV29EntradaProvSerie",gxold:"OV29EntradaProvSerie",gxvar:"AV29EntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EntradaProvSerie=Value},v2z:function(Value){gx.O.ZV29EntradaProvSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSERIE",gx.O.AV29EntradaProvSerie,0)},c2v:function(){gx.O.AV29EntradaProvSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSERIE")},nac:gx.falseFn};
   GXValidFnc[151]={fld:"TEXTBLOCK148", format:0,grid:0};
   GXValidFnc[153]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSUBSERIE",gxz:"ZV30EntradaProvSubSerie",gxold:"OV30EntradaProvSubSerie",gxvar:"AV30EntradaProvSubSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EntradaProvSubSerie=Value},v2z:function(Value){gx.O.ZV30EntradaProvSubSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSUBSERIE",gx.O.AV30EntradaProvSubSerie,0)},c2v:function(){gx.O.AV30EntradaProvSubSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSUBSERIE")},nac:gx.falseFn};
   GXValidFnc[155]={fld:"TEXTBLOCK200", format:0,grid:0};
   GXValidFnc[157]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovid,isvalid:null,rgrid:[this.GrdprodContainer],fld:"vENTRADAPROVID",gxz:"ZV51EntradaProvId",gxold:"OV51EntradaProvId",gxvar:"AV51EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVID",gx.O.AV51EntradaProvId,0)},c2v:function(){gx.O.AV51EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[160]={fld:"TEXTBLOCK149", format:0,grid:0};
   GXValidFnc[162]={fld:"TABLE49",grid:0};
   GXValidFnc[165]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV81PessoaId",gxold:"OV81PessoaId",gxvar:"AV81PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV81PessoaId,0)},c2v:function(){gx.O.AV81PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCK150", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV82PessoaFantasia",gxold:"OV82PessoaFantasia",gxvar:"AV82PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82PessoaFantasia=Value},v2z:function(Value){gx.O.ZV82PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV82PessoaFantasia,0)},c2v:function(){gx.O.AV82PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[174]={fld:"TABLE28",grid:0};
   GXValidFnc[177]={fld:"TEXTBLOCK136", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOTRIBUTARIATIPO",gxz:"ZV54SituacaoTributariaTipo",gxold:"OV54SituacaoTributariaTipo",gxvar:"AV54SituacaoTributariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV54SituacaoTributariaTipo=Value},v2z:function(Value){gx.O.ZV54SituacaoTributariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOTRIBUTARIATIPO",gx.O.AV54SituacaoTributariaTipo)},c2v:function(){gx.O.AV54SituacaoTributariaTipo=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPO")},nac:gx.falseFn};
   GXValidFnc[180]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOTRIBUTARIACODIGO",gxz:"ZV55SituacaoTributariaCodigo",gxold:"OV55SituacaoTributariaCodigo",gxvar:"AV55SituacaoTributariaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55SituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.ZV55SituacaoTributariaCodigo=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIACODIGO",gx.O.AV55SituacaoTributariaCodigo,0)},c2v:function(){gx.O.AV55SituacaoTributariaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIACODIGO")},nac:gx.falseFn};
   GXValidFnc[184]={fld:"TABLE15",grid:0};
   GXValidFnc[187]={fld:"TABLE9",grid:0};
   GXValidFnc[190]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORPRODUTOS",gxz:"ZV57EntradaProvValorProdutos",gxold:"OV57EntradaProvValorProdutos",gxvar:"AV57EntradaProvValorProdutos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57EntradaProvValorProdutos=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV57EntradaProvValorProdutos=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORPRODUTOS",gx.O.AV57EntradaProvValorProdutos,2,',')},c2v:function(){gx.O.AV57EntradaProvValorProdutos=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORPRODUTOS",'.',',')},nac:gx.falseFn};
   GXValidFnc[195]={fld:"TEXTBLOCK57", format:0,grid:0};
   GXValidFnc[197]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORDESCONTO",gxz:"ZV58EntradaProvValorDesconto",gxold:"OV58EntradaProvValorDesconto",gxvar:"AV58EntradaProvValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58EntradaProvValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV58EntradaProvValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORDESCONTO",gx.O.AV58EntradaProvValorDesconto,2,',')},c2v:function(){gx.O.AV58EntradaProvValorDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORDESCONTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[200]={fld:"TEXTBLOCK77", format:0,grid:0};
   GXValidFnc[202]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVDESCONTOFINANCEIRO",gxz:"ZV102EntradaProvDescontoFinanceiro",gxold:"OV102EntradaProvDescontoFinanceiro",gxvar:"AV102EntradaProvDescontoFinanceiro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102EntradaProvDescontoFinanceiro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV102EntradaProvDescontoFinanceiro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVDESCONTOFINANCEIRO",gx.O.AV102EntradaProvDescontoFinanceiro,2,',')},c2v:function(){gx.O.AV102EntradaProvDescontoFinanceiro=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVDESCONTOFINANCEIRO",'.',',')},nac:gx.falseFn};
   GXValidFnc[205]={fld:"TEXTBLOCK59", format:0,grid:0};
   GXValidFnc[207]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORFRETE",gxz:"ZV59EntradaProvValorFrete",gxold:"OV59EntradaProvValorFrete",gxvar:"AV59EntradaProvValorFrete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59EntradaProvValorFrete=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV59EntradaProvValorFrete=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORFRETE",gx.O.AV59EntradaProvValorFrete,2,',')},c2v:function(){gx.O.AV59EntradaProvValorFrete=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORFRETE",'.',',')},nac:gx.falseFn};
   GXValidFnc[210]={fld:"TEXTBLOCK60", format:0,grid:0};
   GXValidFnc[212]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORSEGURO",gxz:"ZV60EntradaProvValorSeguro",gxold:"OV60EntradaProvValorSeguro",gxvar:"AV60EntradaProvValorSeguro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60EntradaProvValorSeguro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV60EntradaProvValorSeguro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORSEGURO",gx.O.AV60EntradaProvValorSeguro,2,',')},c2v:function(){gx.O.AV60EntradaProvValorSeguro=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORSEGURO",'.',',')},nac:gx.falseFn};
   GXValidFnc[215]={fld:"TEXTBLOCK61", format:0,grid:0};
   GXValidFnc[217]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALOROUTDESPESAS",gxz:"ZV61EntradaProvValorOutDespesas",gxold:"OV61EntradaProvValorOutDespesas",gxvar:"AV61EntradaProvValorOutDespesas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61EntradaProvValorOutDespesas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV61EntradaProvValorOutDespesas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALOROUTDESPESAS",gx.O.AV61EntradaProvValorOutDespesas,2,',')},c2v:function(){gx.O.AV61EntradaProvValorOutDespesas=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALOROUTDESPESAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[220]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[222]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORACRESCIMO",gxz:"ZV62EntradaProvValorAcrescimo",gxold:"OV62EntradaProvValorAcrescimo",gxvar:"AV62EntradaProvValorAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62EntradaProvValorAcrescimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV62EntradaProvValorAcrescimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORACRESCIMO",gx.O.AV62EntradaProvValorAcrescimo,2,',')},c2v:function(){gx.O.AV62EntradaProvValorAcrescimo=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORACRESCIMO",'.',',')},nac:gx.falseFn};
   GXValidFnc[225]={fld:"TEXTBLOCK62", format:0,grid:0};
   GXValidFnc[227]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORMANUSEIO",gxz:"ZV63EntradaProvValorManuseio",gxold:"OV63EntradaProvValorManuseio",gxvar:"AV63EntradaProvValorManuseio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63EntradaProvValorManuseio=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV63EntradaProvValorManuseio=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORMANUSEIO",gx.O.AV63EntradaProvValorManuseio,2,',')},c2v:function(){gx.O.AV63EntradaProvValorManuseio=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORMANUSEIO",'.',',')},nac:gx.falseFn};
   GXValidFnc[229]={fld:"TABLE37",grid:0};
   GXValidFnc[232]={fld:"TEXTBLOCK64", format:0,grid:0};
   GXValidFnc[234]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVBCICMS",gxz:"ZV64EntradaProvBCICMS",gxold:"OV64EntradaProvBCICMS",gxvar:"AV64EntradaProvBCICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64EntradaProvBCICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV64EntradaProvBCICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVBCICMS",gx.O.AV64EntradaProvBCICMS,2,',')},c2v:function(){gx.O.AV64EntradaProvBCICMS=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVBCICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[237]={fld:"TEXTBLOCK65", format:0,grid:0};
   GXValidFnc[239]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVREDUCAOBASEICMS",gxz:"ZV65EntradaProvReducaoBaseICMS",gxold:"OV65EntradaProvReducaoBaseICMS",gxvar:"AV65EntradaProvReducaoBaseICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65EntradaProvReducaoBaseICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV65EntradaProvReducaoBaseICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVREDUCAOBASEICMS",gx.O.AV65EntradaProvReducaoBaseICMS,2,',')},c2v:function(){gx.O.AV65EntradaProvReducaoBaseICMS=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVREDUCAOBASEICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[242]={fld:"TEXTBLOCK66", format:0,grid:0};
   GXValidFnc[244]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVALIQUOTAICMS",gxz:"ZV66EntradaProvAliquotaICMS",gxold:"OV66EntradaProvAliquotaICMS",gxvar:"AV66EntradaProvAliquotaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66EntradaProvAliquotaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV66EntradaProvAliquotaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVALIQUOTAICMS",gx.O.AV66EntradaProvAliquotaICMS,2,',')},c2v:function(){gx.O.AV66EntradaProvAliquotaICMS=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVALIQUOTAICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[247]={fld:"TEXTBLOCK68", format:0,grid:0};
   GXValidFnc[249]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORICMS",gxz:"ZV67EntradaProvValorICMS",gxold:"OV67EntradaProvValorICMS",gxvar:"AV67EntradaProvValorICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67EntradaProvValorICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV67EntradaProvValorICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORICMS",gx.O.AV67EntradaProvValorICMS,2,',')},c2v:function(){gx.O.AV67EntradaProvValorICMS=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[255]={fld:"TEXTBLOCK71", format:0,grid:0};
   GXValidFnc[257]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORIPI",gxz:"ZV68EntradaProvValorIPI",gxold:"OV68EntradaProvValorIPI",gxvar:"AV68EntradaProvValorIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68EntradaProvValorIPI=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV68EntradaProvValorIPI=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORIPI",gx.O.AV68EntradaProvValorIPI,2,',')},c2v:function(){gx.O.AV68EntradaProvValorIPI=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORIPI",'.',',')},nac:gx.falseFn};
   GXValidFnc[260]={fld:"TEXTBLOCK72", format:0,grid:0};
   GXValidFnc[262]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORPIS",gxz:"ZV69EntradaProvValorPIS",gxold:"OV69EntradaProvValorPIS",gxvar:"AV69EntradaProvValorPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69EntradaProvValorPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV69EntradaProvValorPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORPIS",gx.O.AV69EntradaProvValorPIS,2,',')},c2v:function(){gx.O.AV69EntradaProvValorPIS=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORPIS",'.',',')},nac:gx.falseFn};
   GXValidFnc[265]={fld:"TEXTBLOCK74", format:0,grid:0};
   GXValidFnc[267]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORCOFINS",gxz:"ZV70EntradaProvValorCOFINS",gxold:"OV70EntradaProvValorCOFINS",gxvar:"AV70EntradaProvValorCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70EntradaProvValorCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV70EntradaProvValorCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORCOFINS",gx.O.AV70EntradaProvValorCOFINS,2,',')},c2v:function(){gx.O.AV70EntradaProvValorCOFINS=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORCOFINS",'.',',')},nac:gx.falseFn};
   GXValidFnc[269]={fld:"TABLE63",grid:0};
   GXValidFnc[272]={fld:"TEXTBLOCK67", format:0,grid:0};
   GXValidFnc[274]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORDIFERENCAICMS",gxz:"ZV71EntradaProvValorDiferencaICMS",gxold:"OV71EntradaProvValorDiferencaICMS",gxvar:"AV71EntradaProvValorDiferencaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71EntradaProvValorDiferencaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV71EntradaProvValorDiferencaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORDIFERENCAICMS",gx.O.AV71EntradaProvValorDiferencaICMS,2,',')},c2v:function(){gx.O.AV71EntradaProvValorDiferencaICMS=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORDIFERENCAICMS",'.',',')},nac:gx.falseFn};
   GXValidFnc[277]={fld:"TEXTBLOCK69", format:0,grid:0};
   GXValidFnc[279]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORBCICMSST",gxz:"ZV72EntradaProvValorBCICMSST",gxold:"OV72EntradaProvValorBCICMSST",gxvar:"AV72EntradaProvValorBCICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72EntradaProvValorBCICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV72EntradaProvValorBCICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORBCICMSST",gx.O.AV72EntradaProvValorBCICMSST,2,',')},c2v:function(){gx.O.AV72EntradaProvValorBCICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORBCICMSST",'.',',')},nac:gx.falseFn};
   GXValidFnc[282]={fld:"TEXTBLOCK70", format:0,grid:0};
   GXValidFnc[284]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORICMSST",gxz:"ZV73EntradaProvValorICMSST",gxold:"OV73EntradaProvValorICMSST",gxvar:"AV73EntradaProvValorICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73EntradaProvValorICMSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV73EntradaProvValorICMSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORICMSST",gx.O.AV73EntradaProvValorICMSST,2,',')},c2v:function(){gx.O.AV73EntradaProvValorICMSST=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORICMSST",'.',',')},nac:gx.falseFn};
   GXValidFnc[287]={fld:"TEXTBLOCK134", format:0,grid:0};
   GXValidFnc[289]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORBCIMSSTNAODEST",gxz:"ZV74EntradaProvValorBCIMSSTNaoDest",gxold:"OV74EntradaProvValorBCIMSSTNaoDest",gxvar:"AV74EntradaProvValorBCIMSSTNaoDest",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74EntradaProvValorBCIMSSTNaoDest=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV74EntradaProvValorBCIMSSTNaoDest=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORBCIMSSTNAODEST",gx.O.AV74EntradaProvValorBCIMSSTNaoDest,2,',')},c2v:function(){gx.O.AV74EntradaProvValorBCIMSSTNaoDest=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORBCIMSSTNAODEST",'.',',')},nac:gx.falseFn};
   GXValidFnc[292]={fld:"TEXTBLOCK76", format:0,grid:0};
   GXValidFnc[294]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORICMSNAODESTAC",gxz:"ZV75EntradaProvValorICMSNaoDestac",gxold:"OV75EntradaProvValorICMSNaoDestac",gxvar:"AV75EntradaProvValorICMSNaoDestac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75EntradaProvValorICMSNaoDestac=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV75EntradaProvValorICMSNaoDestac=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORICMSNAODESTAC",gx.O.AV75EntradaProvValorICMSNaoDestac,2,',')},c2v:function(){gx.O.AV75EntradaProvValorICMSNaoDestac=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORICMSNAODESTAC",'.',',')},nac:gx.falseFn};
   GXValidFnc[300]={fld:"TEXTBLOCK73", format:0,grid:0};
   GXValidFnc[302]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORPISST",gxz:"ZV76EntradaProvValorPISST",gxold:"OV76EntradaProvValorPISST",gxvar:"AV76EntradaProvValorPISST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76EntradaProvValorPISST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV76EntradaProvValorPISST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORPISST",gx.O.AV76EntradaProvValorPISST,2,',')},c2v:function(){gx.O.AV76EntradaProvValorPISST=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORPISST",'.',',')},nac:gx.falseFn};
   GXValidFnc[305]={fld:"TEXTBLOCK75", format:0,grid:0};
   GXValidFnc[307]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORCOFINSST",gxz:"ZV77EntradaProvValorCOFINSST",gxold:"OV77EntradaProvValorCOFINSST",gxvar:"AV77EntradaProvValorCOFINSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77EntradaProvValorCOFINSST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV77EntradaProvValorCOFINSST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORCOFINSST",gx.O.AV77EntradaProvValorCOFINSST,2,',')},c2v:function(){gx.O.AV77EntradaProvValorCOFINSST=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORCOFINSST",'.',',')},nac:gx.falseFn};
   GXValidFnc[313]={fld:"TEXTBLOCK81", format:0,grid:0};
   GXValidFnc[315]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORFCP",gxz:"ZV111EntradaProvValorFCP",gxold:"OV111EntradaProvValorFCP",gxvar:"AV111EntradaProvValorFCP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111EntradaProvValorFCP=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV111EntradaProvValorFCP=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORFCP",gx.O.AV111EntradaProvValorFCP,2,',')},c2v:function(){gx.O.AV111EntradaProvValorFCP=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORFCP",'.',',')},nac:gx.falseFn};
   GXValidFnc[318]={fld:"TEXTBLOCK84", format:0,grid:0};
   GXValidFnc[320]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORFCPST",gxz:"ZV112EntradaProvValorFCPST",gxold:"OV112EntradaProvValorFCPST",gxvar:"AV112EntradaProvValorFCPST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112EntradaProvValorFCPST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV112EntradaProvValorFCPST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORFCPST",gx.O.AV112EntradaProvValorFCPST,2,',')},c2v:function(){gx.O.AV112EntradaProvValorFCPST=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORFCPST",'.',',')},nac:gx.falseFn};
   GXValidFnc[323]={fld:"TEXTBLOCK85", format:0,grid:0};
   GXValidFnc[325]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVVALORFCPSTRET",gxz:"ZV113EntradaProvValorFCPSTRet",gxold:"OV113EntradaProvValorFCPSTRet",gxvar:"AV113EntradaProvValorFCPSTRet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113EntradaProvValorFCPSTRet=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV113EntradaProvValorFCPSTRet=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vENTRADAPROVVALORFCPSTRET",gx.O.AV113EntradaProvValorFCPSTRet,2,',')},c2v:function(){gx.O.AV113EntradaProvValorFCPSTRet=this.val()},val:function(){return gx.fn.getDecimalValue("vENTRADAPROVVALORFCPSTRET",'.',',')},nac:gx.falseFn};
   GXValidFnc[330]={fld:"TABLE11",grid:0};
   GXValidFnc[333]={fld:"TEXTBLOCK143", format:0,grid:0};
   GXValidFnc[335]={fld:"VLRTOTNOTA", format:0,grid:0};
   GXValidFnc[336]={fld:"TAB3",grid:0};
   GXValidFnc[339]={fld:"TABLE42",grid:0};
   GXValidFnc[342]={fld:"TEXTBLOCK182", format:0,grid:0};
   GXValidFnc[344]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMERODOCUMENTO",gxz:"ZV31EntradaProvNumeroDocumento",gxold:"OV31EntradaProvNumeroDocumento",gxvar:"AV31EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVNUMERODOCUMENTO",gx.O.AV31EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVNUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[346]={fld:"TEXTBLOCK184", format:0,grid:0};
   GXValidFnc[348]={fld:"TABLE95",grid:0};
   GXValidFnc[351]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSERIE",gxz:"ZV29EntradaProvSerie",gxold:"OV29EntradaProvSerie",gxvar:"AV29EntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EntradaProvSerie=Value},v2z:function(Value){gx.O.ZV29EntradaProvSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSERIE",gx.O.AV29EntradaProvSerie,0)},c2v:function(){gx.O.AV29EntradaProvSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSERIE")},nac:gx.falseFn};
   GXValidFnc[353]={fld:"TEXTBLOCK151", format:0,grid:0};
   GXValidFnc[355]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSUBSERIE",gxz:"ZV30EntradaProvSubSerie",gxold:"OV30EntradaProvSubSerie",gxvar:"AV30EntradaProvSubSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EntradaProvSubSerie=Value},v2z:function(Value){gx.O.ZV30EntradaProvSubSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSUBSERIE",gx.O.AV30EntradaProvSubSerie,0)},c2v:function(){gx.O.AV30EntradaProvSubSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSUBSERIE")},nac:gx.falseFn};
   GXValidFnc[357]={fld:"TEXTBLOCK201", format:0,grid:0};
   GXValidFnc[359]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovid,isvalid:null,rgrid:[this.GrdprodContainer],fld:"vENTRADAPROVID",gxz:"ZV51EntradaProvId",gxold:"OV51EntradaProvId",gxvar:"AV51EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVID",gx.O.AV51EntradaProvId,0)},c2v:function(){gx.O.AV51EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[362]={fld:"TEXTBLOCK152", format:0,grid:0};
   GXValidFnc[364]={fld:"TABLE50",grid:0};
   GXValidFnc[367]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV81PessoaId",gxold:"OV81PessoaId",gxvar:"AV81PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV81PessoaId,0)},c2v:function(){gx.O.AV81PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[369]={fld:"TEXTBLOCK153", format:0,grid:0};
   GXValidFnc[371]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV82PessoaFantasia",gxold:"OV82PessoaFantasia",gxvar:"AV82PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82PessoaFantasia=Value},v2z:function(Value){gx.O.ZV82PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV82PessoaFantasia,0)},c2v:function(){gx.O.AV82PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[376]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[378]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVSEQUENCIA",gxz:"Z5091EntradaProvSequencia",gxold:"O5091EntradaProvSequencia",gxvar:"A5091EntradaProvSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5091EntradaProvSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5091EntradaProvSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVSEQUENCIA",row || gx.fn.currentGridRowImpl(377),gx.O.A5091EntradaProvSequencia,0)},c2v:function(){gx.O.A5091EntradaProvSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVSEQUENCIA",row || gx.fn.currentGridRowImpl(377),'.')},nac:gx.falseFn};
   GXValidFnc[379]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMLOTEPRODID",gxz:"Z5095EntradaProvItemLoteProdId",gxold:"O5095EntradaProvItemLoteProdId",gxvar:"A5095EntradaProvItemLoteProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5095EntradaProvItemLoteProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5095EntradaProvItemLoteProdId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMLOTEPRODID",row || gx.fn.currentGridRowImpl(377),gx.O.A5095EntradaProvItemLoteProdId,0)},c2v:function(){gx.O.A5095EntradaProvItemLoteProdId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVITEMLOTEPRODID",row || gx.fn.currentGridRowImpl(377),'.')},nac:gx.falseFn};
   GXValidFnc[380]={lvl:2,type:"svchar",len:120,dec:0,sign:false,ro:0,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV110ProdutoDescricao",gxold:"OV110ProdutoDescricao",gxvar:"AV110ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV110ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV110ProdutoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(377),gx.O.AV110ProdutoDescricao,0)},c2v:function(){gx.O.AV110ProdutoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(377))},nac:gx.falseFn};
   GXValidFnc[381]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMLOTECOMBINACAO",gxz:"Z5096EntradaProvItemLoteCombinacao",gxold:"O5096EntradaProvItemLoteCombinacao",gxvar:"A5096EntradaProvItemLoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5096EntradaProvItemLoteCombinacao=Value},v2z:function(Value){gx.O.Z5096EntradaProvItemLoteCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMLOTECOMBINACAO",row || gx.fn.currentGridRowImpl(377),gx.O.A5096EntradaProvItemLoteCombinacao,0)},c2v:function(){gx.O.A5096EntradaProvItemLoteCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMLOTECOMBINACAO",row || gx.fn.currentGridRowImpl(377))},nac:gx.falseFn};
   GXValidFnc[382]={lvl:2,type:"svchar",len:120,dec:0,sign:false,ro:1,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMLOTEPRODDESC",gxz:"Z8233EntradaProvItemLoteProdDesc",gxold:"O8233EntradaProvItemLoteProdDesc",gxvar:"A8233EntradaProvItemLoteProdDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8233EntradaProvItemLoteProdDesc=Value},v2z:function(Value){gx.O.Z8233EntradaProvItemLoteProdDesc=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMLOTEPRODDESC",row || gx.fn.currentGridRowImpl(377),gx.O.A8233EntradaProvItemLoteProdDesc,0)},c2v:function(){gx.O.A8233EntradaProvItemLoteProdDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVITEMLOTEPRODDESC",row || gx.fn.currentGridRowImpl(377))},nac:gx.falseFn};
   GXValidFnc[383]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMQUANTIDADE",gxz:"Z5098EntradaProvItemQuantidade",gxold:"O5098EntradaProvItemQuantidade",gxvar:"A5098EntradaProvItemQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5098EntradaProvItemQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5098EntradaProvItemQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMQUANTIDADE",row || gx.fn.currentGridRowImpl(377),gx.O.A5098EntradaProvItemQuantidade,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5098EntradaProvItemQuantidade=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMQUANTIDADE",row || gx.fn.currentGridRowImpl(377),'.',',')},nac:gx.falseFn};
   GXValidFnc[384]={lvl:2,type:"decimal",len:18,dec:6,sign:false,pic:"ZZ,ZZZ,ZZZ,ZZ9.999999",ro:1,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALOR",gxz:"Z5103EntradaProvItemValor",gxold:"O5103EntradaProvItemValor",gxvar:"A5103EntradaProvItemValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5103EntradaProvItemValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5103EntradaProvItemValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALOR",row || gx.fn.currentGridRowImpl(377),gx.O.A5103EntradaProvItemValor,6,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5103EntradaProvItemValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALOR",row || gx.fn.currentGridRowImpl(377),'.',',')},nac:gx.falseFn};
   GXValidFnc[385]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORDESCONTO",gxz:"Z5104EntradaProvItemValorDesconto",gxold:"O5104EntradaProvItemValorDesconto",gxvar:"A5104EntradaProvItemValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5104EntradaProvItemValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5104EntradaProvItemValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORDESCONTO",row || gx.fn.currentGridRowImpl(377),gx.O.A5104EntradaProvItemValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5104EntradaProvItemValorDesconto=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORDESCONTO",row || gx.fn.currentGridRowImpl(377),'.',',')},nac:gx.falseFn};
   GXValidFnc[386]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVLRTOTAL",gxz:"ZV105VlrTotal",gxold:"OV105VlrTotal",gxvar:"AV105VlrTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV105VlrTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV105VlrTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVLRTOTAL",row || gx.fn.currentGridRowImpl(377),gx.O.AV105VlrTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV105VlrTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVLRTOTAL",row || gx.fn.currentGridRowImpl(377),'.',',')},nac:gx.falseFn};
   GXValidFnc[387]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMALIQUOTAICMS",gxz:"Z5118EntradaProvItemAliquotaICMS",gxold:"O5118EntradaProvItemAliquotaICMS",gxvar:"A5118EntradaProvItemAliquotaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5118EntradaProvItemAliquotaICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5118EntradaProvItemAliquotaICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMALIQUOTAICMS",row || gx.fn.currentGridRowImpl(377),gx.O.A5118EntradaProvItemAliquotaICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5118EntradaProvItemAliquotaICMS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMALIQUOTAICMS",row || gx.fn.currentGridRowImpl(377),'.',',')},nac:gx.falseFn};
   GXValidFnc[388]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMVALORICMS",gxz:"Z5119EntradaProvItemValorICMS",gxold:"O5119EntradaProvItemValorICMS",gxvar:"A5119EntradaProvItemValorICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5119EntradaProvItemValorICMS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5119EntradaProvItemValorICMS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("ENTRADAPROVITEMVALORICMS",row || gx.fn.currentGridRowImpl(377),gx.O.A5119EntradaProvItemValorICMS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5119EntradaProvItemValorICMS=this.val()},val:function(row){return gx.fn.getGridDecimalValue("ENTRADAPROVITEMVALORICMS",row || gx.fn.currentGridRowImpl(377),'.',',')},nac:gx.falseFn};
   GXValidFnc[389]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:377,gxgrid:this.GrdprodContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(377),gx.O.AV16bmpCon,gx.O.AV124Bmpcon_GXI)},c2v:function(){gx.O.AV124Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(377))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(377))}, gxvar_GXI:'AV124Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[390]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[391]={fld:"TAB4",grid:0};
   GXValidFnc[394]={fld:"TABLE43",grid:0};
   GXValidFnc[397]={fld:"TEXTBLOCK185", format:0,grid:0};
   GXValidFnc[399]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMERODOCUMENTO",gxz:"ZV31EntradaProvNumeroDocumento",gxold:"OV31EntradaProvNumeroDocumento",gxvar:"AV31EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVNUMERODOCUMENTO",gx.O.AV31EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVNUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[401]={fld:"TEXTBLOCK191", format:0,grid:0};
   GXValidFnc[403]={fld:"TABLE96",grid:0};
   GXValidFnc[406]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSERIE",gxz:"ZV29EntradaProvSerie",gxold:"OV29EntradaProvSerie",gxvar:"AV29EntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EntradaProvSerie=Value},v2z:function(Value){gx.O.ZV29EntradaProvSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSERIE",gx.O.AV29EntradaProvSerie,0)},c2v:function(){gx.O.AV29EntradaProvSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSERIE")},nac:gx.falseFn};
   GXValidFnc[408]={fld:"TEXTBLOCK154", format:0,grid:0};
   GXValidFnc[410]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSUBSERIE",gxz:"ZV30EntradaProvSubSerie",gxold:"OV30EntradaProvSubSerie",gxvar:"AV30EntradaProvSubSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EntradaProvSubSerie=Value},v2z:function(Value){gx.O.ZV30EntradaProvSubSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSUBSERIE",gx.O.AV30EntradaProvSubSerie,0)},c2v:function(){gx.O.AV30EntradaProvSubSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSUBSERIE")},nac:gx.falseFn};
   GXValidFnc[412]={fld:"TEXTBLOCK202", format:0,grid:0};
   GXValidFnc[414]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovid,isvalid:null,rgrid:[this.GrdprodContainer],fld:"vENTRADAPROVID",gxz:"ZV51EntradaProvId",gxold:"OV51EntradaProvId",gxvar:"AV51EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVID",gx.O.AV51EntradaProvId,0)},c2v:function(){gx.O.AV51EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[417]={fld:"TEXTBLOCK155", format:0,grid:0};
   GXValidFnc[419]={fld:"TABLE51",grid:0};
   GXValidFnc[422]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV81PessoaId",gxold:"OV81PessoaId",gxvar:"AV81PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV81PessoaId,0)},c2v:function(){gx.O.AV81PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[424]={fld:"TEXTBLOCK156", format:0,grid:0};
   GXValidFnc[426]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV82PessoaFantasia",gxold:"OV82PessoaFantasia",gxvar:"AV82PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82PessoaFantasia=Value},v2z:function(Value){gx.O.ZV82PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV82PessoaFantasia,0)},c2v:function(){gx.O.AV82PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[431]={fld:"TABLE14",grid:0};
   GXValidFnc[434]={fld:"TABLE59",grid:0};
   GXValidFnc[437]={fld:"TEXTBLOCK63", format:0,grid:0};
   GXValidFnc[440]={fld:"TABLE10",grid:0};
   GXValidFnc[443]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV86Observacao",gxold:"OV86Observacao",gxvar:"AV86Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86Observacao=Value},v2z:function(Value){gx.O.ZV86Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV86Observacao,0)},c2v:function(){gx.O.AV86Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[444]={fld:"TAB5",grid:0};
   GXValidFnc[447]={fld:"TABLE44",grid:0};
   GXValidFnc[450]={fld:"TEXTBLOCK192", format:0,grid:0};
   GXValidFnc[452]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMERODOCUMENTO",gxz:"ZV31EntradaProvNumeroDocumento",gxold:"OV31EntradaProvNumeroDocumento",gxvar:"AV31EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVNUMERODOCUMENTO",gx.O.AV31EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVNUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[454]={fld:"TEXTBLOCK193", format:0,grid:0};
   GXValidFnc[456]={fld:"TABLE97",grid:0};
   GXValidFnc[459]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSERIE",gxz:"ZV29EntradaProvSerie",gxold:"OV29EntradaProvSerie",gxvar:"AV29EntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EntradaProvSerie=Value},v2z:function(Value){gx.O.ZV29EntradaProvSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSERIE",gx.O.AV29EntradaProvSerie,0)},c2v:function(){gx.O.AV29EntradaProvSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSERIE")},nac:gx.falseFn};
   GXValidFnc[461]={fld:"TEXTBLOCK157", format:0,grid:0};
   GXValidFnc[463]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSUBSERIE",gxz:"ZV30EntradaProvSubSerie",gxold:"OV30EntradaProvSubSerie",gxvar:"AV30EntradaProvSubSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EntradaProvSubSerie=Value},v2z:function(Value){gx.O.ZV30EntradaProvSubSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSUBSERIE",gx.O.AV30EntradaProvSubSerie,0)},c2v:function(){gx.O.AV30EntradaProvSubSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSUBSERIE")},nac:gx.falseFn};
   GXValidFnc[465]={fld:"TEXTBLOCK203", format:0,grid:0};
   GXValidFnc[467]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovid,isvalid:null,rgrid:[this.GrdprodContainer],fld:"vENTRADAPROVID",gxz:"ZV51EntradaProvId",gxold:"OV51EntradaProvId",gxvar:"AV51EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVID",gx.O.AV51EntradaProvId,0)},c2v:function(){gx.O.AV51EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[470]={fld:"TEXTBLOCK158", format:0,grid:0};
   GXValidFnc[472]={fld:"TABLE52",grid:0};
   GXValidFnc[475]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV81PessoaId",gxold:"OV81PessoaId",gxvar:"AV81PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV81PessoaId,0)},c2v:function(){gx.O.AV81PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[477]={fld:"TEXTBLOCK159", format:0,grid:0};
   GXValidFnc[479]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV82PessoaFantasia",gxold:"OV82PessoaFantasia",gxvar:"AV82PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82PessoaFantasia=Value},v2z:function(Value){gx.O.ZV82PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV82PessoaFantasia,0)},c2v:function(){gx.O.AV82PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[484]={fld:"TABLE21",grid:0};
   GXValidFnc[487]={fld:"TABLE61",grid:0};
   GXValidFnc[490]={fld:"TEXTBLOCK102", format:0,grid:0};
   GXValidFnc[493]={fld:"TABLE84",grid:0};
   GXValidFnc[496]={fld:"TEXTBLOCK82", format:0,grid:0};
   GXValidFnc[498]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCPFENTREGA",gxz:"ZV87EntradaProvCPFEntrega",gxold:"OV87EntradaProvCPFEntrega",gxvar:"AV87EntradaProvCPFEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87EntradaProvCPFEntrega=Value},v2z:function(Value){gx.O.ZV87EntradaProvCPFEntrega=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCPFENTREGA",gx.O.AV87EntradaProvCPFEntrega,0)},c2v:function(){gx.O.AV87EntradaProvCPFEntrega=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCPFENTREGA")},nac:gx.falseFn};
   GXValidFnc[501]={fld:"TEXTBLOCK83", format:0,grid:0};
   GXValidFnc[503]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCNPJENTREGA",gxz:"ZV88EntradaProvCNPJEntrega",gxold:"OV88EntradaProvCNPJEntrega",gxvar:"AV88EntradaProvCNPJEntrega",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88EntradaProvCNPJEntrega=Value},v2z:function(Value){gx.O.ZV88EntradaProvCNPJEntrega=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCNPJENTREGA",gx.O.AV88EntradaProvCNPJEntrega,0)},c2v:function(){gx.O.AV88EntradaProvCNPJEntrega=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCNPJENTREGA")},nac:gx.falseFn};
   GXValidFnc[506]={fld:"TABLE103",grid:0};
   GXValidFnc[509]={fld:"TABLE117",grid:0};
   GXValidFnc[514]={fld:"TEXTBLOCK183", format:0,grid:0};
   GXValidFnc[517]={fld:"TABLE118",grid:0};
   GXValidFnc[520]={fld:"TEXTBLOCK199", format:0,grid:0};
   GXValidFnc[522]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCEPENDRETIRADA",gxz:"ZV89EntradaProvCEPEndRetirada",gxold:"OV89EntradaProvCEPEndRetirada",gxvar:"AV89EntradaProvCEPEndRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89EntradaProvCEPEndRetirada=Value},v2z:function(Value){gx.O.ZV89EntradaProvCEPEndRetirada=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCEPENDRETIRADA",gx.O.AV89EntradaProvCEPEndRetirada,0)},c2v:function(){gx.O.AV89EntradaProvCEPEndRetirada=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCEPENDRETIRADA")},nac:gx.falseFn};
   GXValidFnc[525]={fld:"TEXTBLOCK217", format:0,grid:0};
   GXValidFnc[527]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVENDERECORETIRADA",gxz:"ZV90EntradaProvEnderecoRetirada",gxold:"OV90EntradaProvEnderecoRetirada",gxvar:"AV90EntradaProvEnderecoRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90EntradaProvEnderecoRetirada=Value},v2z:function(Value){gx.O.ZV90EntradaProvEnderecoRetirada=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVENDERECORETIRADA",gx.O.AV90EntradaProvEnderecoRetirada,0)},c2v:function(){gx.O.AV90EntradaProvEnderecoRetirada=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVENDERECORETIRADA")},nac:gx.falseFn};
   GXValidFnc[530]={fld:"TEXTBLOCK218", format:0,grid:0};
   GXValidFnc[532]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMEROENDRETIRADA",gxz:"ZV91EntradaProvNumeroEndRetirada",gxold:"OV91EntradaProvNumeroEndRetirada",gxvar:"AV91EntradaProvNumeroEndRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91EntradaProvNumeroEndRetirada=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91EntradaProvNumeroEndRetirada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVNUMEROENDRETIRADA",gx.O.AV91EntradaProvNumeroEndRetirada,0)},c2v:function(){gx.O.AV91EntradaProvNumeroEndRetirada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVNUMEROENDRETIRADA",'.')},nac:gx.falseFn};
   GXValidFnc[535]={fld:"TEXTBLOCK219", format:0,grid:0};
   GXValidFnc[537]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCOMPLENDRETIRADA",gxz:"ZV92EntradaProvComplEndRetirada",gxold:"OV92EntradaProvComplEndRetirada",gxvar:"AV92EntradaProvComplEndRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92EntradaProvComplEndRetirada=Value},v2z:function(Value){gx.O.ZV92EntradaProvComplEndRetirada=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCOMPLENDRETIRADA",gx.O.AV92EntradaProvComplEndRetirada,0)},c2v:function(){gx.O.AV92EntradaProvComplEndRetirada=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCOMPLENDRETIRADA")},nac:gx.falseFn};
   GXValidFnc[540]={fld:"TEXTBLOCK220", format:0,grid:0};
   GXValidFnc[542]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVBAIRROENDRETIRADA",gxz:"ZV93EntradaProvBairroEndRetirada",gxold:"OV93EntradaProvBairroEndRetirada",gxvar:"AV93EntradaProvBairroEndRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93EntradaProvBairroEndRetirada=Value},v2z:function(Value){gx.O.ZV93EntradaProvBairroEndRetirada=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVBAIRROENDRETIRADA",gx.O.AV93EntradaProvBairroEndRetirada,0)},c2v:function(){gx.O.AV93EntradaProvBairroEndRetirada=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVBAIRROENDRETIRADA")},nac:gx.falseFn};
   GXValidFnc[545]={fld:"TEXTBLOCK221", format:0,grid:0};
   GXValidFnc[547]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovcidadeentretirada,isvalid:null,rgrid:[],fld:"vENTRADAPROVCIDADEENTRETIRADA",gxz:"ZV94EntradaProvCidadeEntRetirada",gxold:"OV94EntradaProvCidadeEntRetirada",gxvar:"AV94EntradaProvCidadeEntRetirada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94EntradaProvCidadeEntRetirada=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94EntradaProvCidadeEntRetirada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCIDADEENTRETIRADA",gx.O.AV94EntradaProvCidadeEntRetirada,0)},c2v:function(){gx.O.AV94EntradaProvCidadeEntRetirada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVCIDADEENTRETIRADA",'.')},nac:gx.falseFn};
   GXValidFnc[548]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCIDADEENDRETIRADANOME",gxz:"ZV95EntradaProvCidadeEndRetiradaNome",gxold:"OV95EntradaProvCidadeEndRetiradaNome",gxvar:"AV95EntradaProvCidadeEndRetiradaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95EntradaProvCidadeEndRetiradaNome=Value},v2z:function(Value){gx.O.ZV95EntradaProvCidadeEndRetiradaNome=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCIDADEENDRETIRADANOME",gx.O.AV95EntradaProvCidadeEndRetiradaNome,0)},c2v:function(){gx.O.AV95EntradaProvCidadeEndRetiradaNome=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCIDADEENDRETIRADANOME")},nac:gx.falseFn};
   GXValidFnc[549]={fld:"TAB6",grid:0};
   GXValidFnc[552]={fld:"TABLE45",grid:0};
   GXValidFnc[555]={fld:"TEXTBLOCK194", format:0,grid:0};
   GXValidFnc[557]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVNUMERODOCUMENTO",gxz:"ZV31EntradaProvNumeroDocumento",gxold:"OV31EntradaProvNumeroDocumento",gxvar:"AV31EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVNUMERODOCUMENTO",gx.O.AV31EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.AV31EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVNUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[559]={fld:"TEXTBLOCK195", format:0,grid:0};
   GXValidFnc[561]={fld:"TABLE98",grid:0};
   GXValidFnc[564]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSERIE",gxz:"ZV29EntradaProvSerie",gxold:"OV29EntradaProvSerie",gxvar:"AV29EntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EntradaProvSerie=Value},v2z:function(Value){gx.O.ZV29EntradaProvSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSERIE",gx.O.AV29EntradaProvSerie,0)},c2v:function(){gx.O.AV29EntradaProvSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSERIE")},nac:gx.falseFn};
   GXValidFnc[566]={fld:"TEXTBLOCK160", format:0,grid:0};
   GXValidFnc[568]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVSUBSERIE",gxz:"ZV30EntradaProvSubSerie",gxold:"OV30EntradaProvSubSerie",gxvar:"AV30EntradaProvSubSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EntradaProvSubSerie=Value},v2z:function(Value){gx.O.ZV30EntradaProvSubSerie=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVSUBSERIE",gx.O.AV30EntradaProvSubSerie,0)},c2v:function(){gx.O.AV30EntradaProvSubSerie=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVSUBSERIE")},nac:gx.falseFn};
   GXValidFnc[570]={fld:"TEXTBLOCK204", format:0,grid:0};
   GXValidFnc[572]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Entradaprovid,isvalid:null,rgrid:[this.GrdprodContainer],fld:"vENTRADAPROVID",gxz:"ZV51EntradaProvId",gxold:"OV51EntradaProvId",gxvar:"AV51EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVID",gx.O.AV51EntradaProvId,0)},c2v:function(){gx.O.AV51EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[575]={fld:"TEXTBLOCK161", format:0,grid:0};
   GXValidFnc[577]={fld:"TABLE53",grid:0};
   GXValidFnc[580]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV81PessoaId",gxold:"OV81PessoaId",gxvar:"AV81PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV81PessoaId,0)},c2v:function(){gx.O.AV81PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[582]={fld:"TEXTBLOCK162", format:0,grid:0};
   GXValidFnc[584]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV82PessoaFantasia",gxold:"OV82PessoaFantasia",gxvar:"AV82PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82PessoaFantasia=Value},v2z:function(Value){gx.O.ZV82PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV82PessoaFantasia,0)},c2v:function(){gx.O.AV82PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[589]={fld:"TABLE1",grid:0};
   GXValidFnc[592]={fld:"TEXTBLOCK210", format:0,grid:0};
   GXValidFnc[596]={fld:"TEXTBLOCK212", format:0,grid:0};
   GXValidFnc[598]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCLASSEENERGIAELETR",gxz:"ZV98EntradaProvClasseEnergiaEletr",gxold:"OV98EntradaProvClasseEnergiaEletr",gxvar:"AV98EntradaProvClasseEnergiaEletr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98EntradaProvClasseEnergiaEletr=Value},v2z:function(Value){gx.O.ZV98EntradaProvClasseEnergiaEletr=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCLASSEENERGIAELETR",gx.O.AV98EntradaProvClasseEnergiaEletr,0)},c2v:function(){gx.O.AV98EntradaProvClasseEnergiaEletr=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCLASSEENERGIAELETR")},nac:gx.falseFn};
   GXValidFnc[603]={fld:"TABLE2",grid:0};
   GXValidFnc[606]={fld:"TEXTBLOCK211", format:0,grid:0};
   GXValidFnc[610]={fld:"TEXTBLOCK215", format:0,grid:0};
   GXValidFnc[612]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVTIPOCTE",gxz:"ZV96EntradaProvTipoCTE",gxold:"OV96EntradaProvTipoCTE",gxvar:"AV96EntradaProvTipoCTE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV96EntradaProvTipoCTE=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV96EntradaProvTipoCTE=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENTRADAPROVTIPOCTE",gx.O.AV96EntradaProvTipoCTE,0)},c2v:function(){gx.O.AV96EntradaProvTipoCTE=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENTRADAPROVTIPOCTE",'.')},nac:gx.falseFn};
   GXValidFnc[615]={fld:"TEXTBLOCK216", format:0,grid:0};
   GXValidFnc[617]={lvl:0,type:"svchar",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vENTRADAPROVCHAVECTEREF",gxz:"ZV97EntradaProvChaveCTEREF",gxold:"OV97EntradaProvChaveCTEREF",gxvar:"AV97EntradaProvChaveCTEREF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV97EntradaProvChaveCTEREF=Value},v2z:function(Value){gx.O.ZV97EntradaProvChaveCTEREF=Value},v2c:function(){gx.fn.setControlValue("vENTRADAPROVCHAVECTEREF",gx.O.AV97EntradaProvChaveCTEREF,0)},c2v:function(){gx.O.AV97EntradaProvChaveCTEREF=this.val()},val:function(){return gx.fn.getControlValue("vENTRADAPROVCHAVECTEREF")},nac:gx.falseFn};
   this.AV28EntradaProvChaveNFE = "" ;
   this.ZV28EntradaProvChaveNFE = "" ;
   this.OV28EntradaProvChaveNFE = "" ;
   this.AV29EntradaProvSerie = "" ;
   this.ZV29EntradaProvSerie = "" ;
   this.OV29EntradaProvSerie = "" ;
   this.AV30EntradaProvSubSerie = "" ;
   this.ZV30EntradaProvSubSerie = "" ;
   this.OV30EntradaProvSubSerie = "" ;
   this.AV31EntradaProvNumeroDocumento = 0 ;
   this.ZV31EntradaProvNumeroDocumento = 0 ;
   this.OV31EntradaProvNumeroDocumento = 0 ;
   this.AV32EntradaProvSNEfetivada = "" ;
   this.ZV32EntradaProvSNEfetivada = "" ;
   this.OV32EntradaProvSNEfetivada = "" ;
   this.AV33EntradaProvCodigoAntecipacao = "" ;
   this.ZV33EntradaProvCodigoAntecipacao = "" ;
   this.OV33EntradaProvCodigoAntecipacao = "" ;
   this.AV34EntradaProvTipo = "" ;
   this.ZV34EntradaProvTipo = "" ;
   this.OV34EntradaProvTipo = "" ;
   this.AV35EntradaProvDataEmissao = gx.date.nullDate() ;
   this.ZV35EntradaProvDataEmissao = gx.date.nullDate() ;
   this.OV35EntradaProvDataEmissao = gx.date.nullDate() ;
   this.AV36EntradaProvDataEntrada = gx.date.nullDate() ;
   this.ZV36EntradaProvDataEntrada = gx.date.nullDate() ;
   this.OV36EntradaProvDataEntrada = gx.date.nullDate() ;
   this.AV37EntradaProvModeloDocFiscalCodigo = 0 ;
   this.ZV37EntradaProvModeloDocFiscalCodigo = 0 ;
   this.OV37EntradaProvModeloDocFiscalCodigo = 0 ;
   this.AV38EntradaProvModeloDocFiscalDesc = "" ;
   this.ZV38EntradaProvModeloDocFiscalDesc = "" ;
   this.OV38EntradaProvModeloDocFiscalDesc = "" ;
   this.AV39EntradaProvSitDocFiscal = "" ;
   this.ZV39EntradaProvSitDocFiscal = "" ;
   this.OV39EntradaProvSitDocFiscal = "" ;
   this.AV40EntradaProvSitDocFiscalDesc = "" ;
   this.ZV40EntradaProvSitDocFiscalDesc = "" ;
   this.OV40EntradaProvSitDocFiscalDesc = "" ;
   this.AV41EntradaProvCFOPCodigo = 0 ;
   this.ZV41EntradaProvCFOPCodigo = 0 ;
   this.OV41EntradaProvCFOPCodigo = 0 ;
   this.AV42EntradaProvCFOPDescricao = "" ;
   this.ZV42EntradaProvCFOPDescricao = "" ;
   this.OV42EntradaProvCFOPDescricao = "" ;
   this.AV43EntradaProvTipoTransporte = "" ;
   this.ZV43EntradaProvTipoTransporte = "" ;
   this.OV43EntradaProvTipoTransporte = "" ;
   this.AV44EntradaProvModalidadeFrete = "" ;
   this.ZV44EntradaProvModalidadeFrete = "" ;
   this.OV44EntradaProvModalidadeFrete = "" ;
   this.AV45TransportadorCodigo = 0 ;
   this.ZV45TransportadorCodigo = 0 ;
   this.OV45TransportadorCodigo = 0 ;
   this.AV46TransportadorNome = "" ;
   this.ZV46TransportadorNome = "" ;
   this.OV46TransportadorNome = "" ;
   this.AV47EntradaProvMarca = "" ;
   this.ZV47EntradaProvMarca = "" ;
   this.OV47EntradaProvMarca = "" ;
   this.AV48EntradaProvEspecie = "" ;
   this.ZV48EntradaProvEspecie = "" ;
   this.OV48EntradaProvEspecie = "" ;
   this.AV49EntradaProvNumeracao = "" ;
   this.ZV49EntradaProvNumeracao = "" ;
   this.OV49EntradaProvNumeracao = "" ;
   this.AV51EntradaProvId = 0 ;
   this.ZV51EntradaProvId = 0 ;
   this.OV51EntradaProvId = 0 ;
   this.AV81PessoaId = 0 ;
   this.ZV81PessoaId = 0 ;
   this.OV81PessoaId = 0 ;
   this.AV82PessoaFantasia = "" ;
   this.ZV82PessoaFantasia = "" ;
   this.OV82PessoaFantasia = "" ;
   this.AV54SituacaoTributariaTipo = "" ;
   this.ZV54SituacaoTributariaTipo = "" ;
   this.OV54SituacaoTributariaTipo = "" ;
   this.AV55SituacaoTributariaCodigo = "" ;
   this.ZV55SituacaoTributariaCodigo = "" ;
   this.OV55SituacaoTributariaCodigo = "" ;
   this.AV57EntradaProvValorProdutos = 0 ;
   this.ZV57EntradaProvValorProdutos = 0 ;
   this.OV57EntradaProvValorProdutos = 0 ;
   this.AV58EntradaProvValorDesconto = 0 ;
   this.ZV58EntradaProvValorDesconto = 0 ;
   this.OV58EntradaProvValorDesconto = 0 ;
   this.AV102EntradaProvDescontoFinanceiro = 0 ;
   this.ZV102EntradaProvDescontoFinanceiro = 0 ;
   this.OV102EntradaProvDescontoFinanceiro = 0 ;
   this.AV59EntradaProvValorFrete = 0 ;
   this.ZV59EntradaProvValorFrete = 0 ;
   this.OV59EntradaProvValorFrete = 0 ;
   this.AV60EntradaProvValorSeguro = 0 ;
   this.ZV60EntradaProvValorSeguro = 0 ;
   this.OV60EntradaProvValorSeguro = 0 ;
   this.AV61EntradaProvValorOutDespesas = 0 ;
   this.ZV61EntradaProvValorOutDespesas = 0 ;
   this.OV61EntradaProvValorOutDespesas = 0 ;
   this.AV62EntradaProvValorAcrescimo = 0 ;
   this.ZV62EntradaProvValorAcrescimo = 0 ;
   this.OV62EntradaProvValorAcrescimo = 0 ;
   this.AV63EntradaProvValorManuseio = 0 ;
   this.ZV63EntradaProvValorManuseio = 0 ;
   this.OV63EntradaProvValorManuseio = 0 ;
   this.AV64EntradaProvBCICMS = 0 ;
   this.ZV64EntradaProvBCICMS = 0 ;
   this.OV64EntradaProvBCICMS = 0 ;
   this.AV65EntradaProvReducaoBaseICMS = 0 ;
   this.ZV65EntradaProvReducaoBaseICMS = 0 ;
   this.OV65EntradaProvReducaoBaseICMS = 0 ;
   this.AV66EntradaProvAliquotaICMS = 0 ;
   this.ZV66EntradaProvAliquotaICMS = 0 ;
   this.OV66EntradaProvAliquotaICMS = 0 ;
   this.AV67EntradaProvValorICMS = 0 ;
   this.ZV67EntradaProvValorICMS = 0 ;
   this.OV67EntradaProvValorICMS = 0 ;
   this.AV68EntradaProvValorIPI = 0 ;
   this.ZV68EntradaProvValorIPI = 0 ;
   this.OV68EntradaProvValorIPI = 0 ;
   this.AV69EntradaProvValorPIS = 0 ;
   this.ZV69EntradaProvValorPIS = 0 ;
   this.OV69EntradaProvValorPIS = 0 ;
   this.AV70EntradaProvValorCOFINS = 0 ;
   this.ZV70EntradaProvValorCOFINS = 0 ;
   this.OV70EntradaProvValorCOFINS = 0 ;
   this.AV71EntradaProvValorDiferencaICMS = 0 ;
   this.ZV71EntradaProvValorDiferencaICMS = 0 ;
   this.OV71EntradaProvValorDiferencaICMS = 0 ;
   this.AV72EntradaProvValorBCICMSST = 0 ;
   this.ZV72EntradaProvValorBCICMSST = 0 ;
   this.OV72EntradaProvValorBCICMSST = 0 ;
   this.AV73EntradaProvValorICMSST = 0 ;
   this.ZV73EntradaProvValorICMSST = 0 ;
   this.OV73EntradaProvValorICMSST = 0 ;
   this.AV74EntradaProvValorBCIMSSTNaoDest = 0 ;
   this.ZV74EntradaProvValorBCIMSSTNaoDest = 0 ;
   this.OV74EntradaProvValorBCIMSSTNaoDest = 0 ;
   this.AV75EntradaProvValorICMSNaoDestac = 0 ;
   this.ZV75EntradaProvValorICMSNaoDestac = 0 ;
   this.OV75EntradaProvValorICMSNaoDestac = 0 ;
   this.AV76EntradaProvValorPISST = 0 ;
   this.ZV76EntradaProvValorPISST = 0 ;
   this.OV76EntradaProvValorPISST = 0 ;
   this.AV77EntradaProvValorCOFINSST = 0 ;
   this.ZV77EntradaProvValorCOFINSST = 0 ;
   this.OV77EntradaProvValorCOFINSST = 0 ;
   this.AV111EntradaProvValorFCP = 0 ;
   this.ZV111EntradaProvValorFCP = 0 ;
   this.OV111EntradaProvValorFCP = 0 ;
   this.AV112EntradaProvValorFCPST = 0 ;
   this.ZV112EntradaProvValorFCPST = 0 ;
   this.OV112EntradaProvValorFCPST = 0 ;
   this.AV113EntradaProvValorFCPSTRet = 0 ;
   this.ZV113EntradaProvValorFCPSTRet = 0 ;
   this.OV113EntradaProvValorFCPSTRet = 0 ;
   this.Z5091EntradaProvSequencia = 0 ;
   this.O5091EntradaProvSequencia = 0 ;
   this.Z5095EntradaProvItemLoteProdId = 0 ;
   this.O5095EntradaProvItemLoteProdId = 0 ;
   this.ZV110ProdutoDescricao = "" ;
   this.OV110ProdutoDescricao = "" ;
   this.Z5096EntradaProvItemLoteCombinacao = "" ;
   this.O5096EntradaProvItemLoteCombinacao = "" ;
   this.Z8233EntradaProvItemLoteProdDesc = "" ;
   this.O8233EntradaProvItemLoteProdDesc = "" ;
   this.Z5098EntradaProvItemQuantidade = 0 ;
   this.O5098EntradaProvItemQuantidade = 0 ;
   this.Z5103EntradaProvItemValor = 0 ;
   this.O5103EntradaProvItemValor = 0 ;
   this.Z5104EntradaProvItemValorDesconto = 0 ;
   this.O5104EntradaProvItemValorDesconto = 0 ;
   this.ZV105VlrTotal = 0 ;
   this.OV105VlrTotal = 0 ;
   this.Z5118EntradaProvItemAliquotaICMS = 0 ;
   this.O5118EntradaProvItemAliquotaICMS = 0 ;
   this.Z5119EntradaProvItemValorICMS = 0 ;
   this.O5119EntradaProvItemValorICMS = 0 ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV86Observacao = "" ;
   this.ZV86Observacao = "" ;
   this.OV86Observacao = "" ;
   this.AV87EntradaProvCPFEntrega = "" ;
   this.ZV87EntradaProvCPFEntrega = "" ;
   this.OV87EntradaProvCPFEntrega = "" ;
   this.AV88EntradaProvCNPJEntrega = "" ;
   this.ZV88EntradaProvCNPJEntrega = "" ;
   this.OV88EntradaProvCNPJEntrega = "" ;
   this.AV89EntradaProvCEPEndRetirada = "" ;
   this.ZV89EntradaProvCEPEndRetirada = "" ;
   this.OV89EntradaProvCEPEndRetirada = "" ;
   this.AV90EntradaProvEnderecoRetirada = "" ;
   this.ZV90EntradaProvEnderecoRetirada = "" ;
   this.OV90EntradaProvEnderecoRetirada = "" ;
   this.AV91EntradaProvNumeroEndRetirada = 0 ;
   this.ZV91EntradaProvNumeroEndRetirada = 0 ;
   this.OV91EntradaProvNumeroEndRetirada = 0 ;
   this.AV92EntradaProvComplEndRetirada = "" ;
   this.ZV92EntradaProvComplEndRetirada = "" ;
   this.OV92EntradaProvComplEndRetirada = "" ;
   this.AV93EntradaProvBairroEndRetirada = "" ;
   this.ZV93EntradaProvBairroEndRetirada = "" ;
   this.OV93EntradaProvBairroEndRetirada = "" ;
   this.AV94EntradaProvCidadeEntRetirada = 0 ;
   this.ZV94EntradaProvCidadeEntRetirada = 0 ;
   this.OV94EntradaProvCidadeEntRetirada = 0 ;
   this.AV95EntradaProvCidadeEndRetiradaNome = "" ;
   this.ZV95EntradaProvCidadeEndRetiradaNome = "" ;
   this.OV95EntradaProvCidadeEndRetiradaNome = "" ;
   this.AV98EntradaProvClasseEnergiaEletr = "" ;
   this.ZV98EntradaProvClasseEnergiaEletr = "" ;
   this.OV98EntradaProvClasseEnergiaEletr = "" ;
   this.AV96EntradaProvTipoCTE = 0 ;
   this.ZV96EntradaProvTipoCTE = 0 ;
   this.OV96EntradaProvTipoCTE = 0 ;
   this.AV97EntradaProvChaveCTEREF = "" ;
   this.ZV97EntradaProvChaveCTEREF = "" ;
   this.OV97EntradaProvChaveCTEREF = "" ;
   this.AV108Tab = [ ] ;
   this.AV28EntradaProvChaveNFE = "" ;
   this.AV29EntradaProvSerie = "" ;
   this.AV30EntradaProvSubSerie = "" ;
   this.AV31EntradaProvNumeroDocumento = 0 ;
   this.AV32EntradaProvSNEfetivada = "" ;
   this.AV33EntradaProvCodigoAntecipacao = "" ;
   this.AV34EntradaProvTipo = "" ;
   this.AV35EntradaProvDataEmissao = gx.date.nullDate() ;
   this.AV36EntradaProvDataEntrada = gx.date.nullDate() ;
   this.AV37EntradaProvModeloDocFiscalCodigo = 0 ;
   this.AV38EntradaProvModeloDocFiscalDesc = "" ;
   this.AV39EntradaProvSitDocFiscal = "" ;
   this.AV40EntradaProvSitDocFiscalDesc = "" ;
   this.AV41EntradaProvCFOPCodigo = 0 ;
   this.AV42EntradaProvCFOPDescricao = "" ;
   this.AV43EntradaProvTipoTransporte = "" ;
   this.AV44EntradaProvModalidadeFrete = "" ;
   this.AV45TransportadorCodigo = 0 ;
   this.AV46TransportadorNome = "" ;
   this.AV47EntradaProvMarca = "" ;
   this.AV48EntradaProvEspecie = "" ;
   this.AV49EntradaProvNumeracao = "" ;
   this.AV51EntradaProvId = 0 ;
   this.AV81PessoaId = 0 ;
   this.AV82PessoaFantasia = "" ;
   this.AV54SituacaoTributariaTipo = "" ;
   this.AV55SituacaoTributariaCodigo = "" ;
   this.AV57EntradaProvValorProdutos = 0 ;
   this.AV58EntradaProvValorDesconto = 0 ;
   this.AV102EntradaProvDescontoFinanceiro = 0 ;
   this.AV59EntradaProvValorFrete = 0 ;
   this.AV60EntradaProvValorSeguro = 0 ;
   this.AV61EntradaProvValorOutDespesas = 0 ;
   this.AV62EntradaProvValorAcrescimo = 0 ;
   this.AV63EntradaProvValorManuseio = 0 ;
   this.AV64EntradaProvBCICMS = 0 ;
   this.AV65EntradaProvReducaoBaseICMS = 0 ;
   this.AV66EntradaProvAliquotaICMS = 0 ;
   this.AV67EntradaProvValorICMS = 0 ;
   this.AV68EntradaProvValorIPI = 0 ;
   this.AV69EntradaProvValorPIS = 0 ;
   this.AV70EntradaProvValorCOFINS = 0 ;
   this.AV71EntradaProvValorDiferencaICMS = 0 ;
   this.AV72EntradaProvValorBCICMSST = 0 ;
   this.AV73EntradaProvValorICMSST = 0 ;
   this.AV74EntradaProvValorBCIMSSTNaoDest = 0 ;
   this.AV75EntradaProvValorICMSNaoDestac = 0 ;
   this.AV76EntradaProvValorPISST = 0 ;
   this.AV77EntradaProvValorCOFINSST = 0 ;
   this.AV111EntradaProvValorFCP = 0 ;
   this.AV112EntradaProvValorFCPST = 0 ;
   this.AV113EntradaProvValorFCPSTRet = 0 ;
   this.AV86Observacao = "" ;
   this.AV87EntradaProvCPFEntrega = "" ;
   this.AV88EntradaProvCNPJEntrega = "" ;
   this.AV89EntradaProvCEPEndRetirada = "" ;
   this.AV90EntradaProvEnderecoRetirada = "" ;
   this.AV91EntradaProvNumeroEndRetirada = 0 ;
   this.AV92EntradaProvComplEndRetirada = "" ;
   this.AV93EntradaProvBairroEndRetirada = "" ;
   this.AV94EntradaProvCidadeEntRetirada = 0 ;
   this.AV95EntradaProvCidadeEndRetiradaNome = "" ;
   this.AV98EntradaProvClasseEnergiaEletr = "" ;
   this.AV96EntradaProvTipoCTE = 0 ;
   this.AV97EntradaProvChaveCTEREF = "" ;
   this.AV50EntradaProvEmpresaId = "" ;
   this.AV101PessoaProvCPFCNPJ = "" ;
   this.A5014EntradaProvId = 0 ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A5091EntradaProvSequencia = 0 ;
   this.A5095EntradaProvItemLoteProdId = 0 ;
   this.AV110ProdutoDescricao = "" ;
   this.A5096EntradaProvItemLoteCombinacao = "" ;
   this.A8233EntradaProvItemLoteProdDesc = "" ;
   this.A5098EntradaProvItemQuantidade = 0 ;
   this.A5103EntradaProvItemValor = 0 ;
   this.A5104EntradaProvItemValorDesconto = 0 ;
   this.AV105VlrTotal = 0 ;
   this.A5118EntradaProvItemAliquotaICMS = 0 ;
   this.A5119EntradaProvItemValorICMS = 0 ;
   this.AV16bmpCon = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.A3379TransportadorCodigo = 0 ;
   this.A3378TransportadorEmpresaId = "" ;
   this.A3798TransportadorNome = "" ;
   this.A3430CFOPCodigo = 0 ;
   this.A3436CFOPDescricao = "" ;
   this.A4666SituacaoDocFiscalCodigo = "" ;
   this.A5164SituacaoDocFiscalDescricao = "" ;
   this.A4665ModeloDocFiscalCodigo = "" ;
   this.A5160ModeloDocFiscalDescricao = "" ;
   this.A5024EntradaProvCFOPCodigo = 0 ;
   this.A5021EntradaProvChaveNFE = "" ;
   this.A5040EntradaProvCodigoAntecipacao = "" ;
   this.A5022EntradaProvDataEmissao = gx.date.nullDate() ;
   this.A5023EntradaProvDataEntrada = gx.date.nullDate() ;
   this.A5032EntradaProvEspecie = "" ;
   this.A5033EntradaProvMarca = "" ;
   this.A5036EntradaProvModalidadeFrete = "" ;
   this.A5030EntradaProvModDocFiscal = 0 ;
   this.A5034EntradaProvNumeracao = "" ;
   this.A5016EntradaProvNumeroDocumento = 0 ;
   this.A5019EntradaProvSerie = "" ;
   this.A5031EntradaProvSitDocFiscal = "" ;
   this.A5090EntradaProvSNEfetivada = "" ;
   this.A5020EntradaProvSubSerie = "" ;
   this.A5015EntradaProvTipo = "" ;
   this.A5037EntradaProvTipoTransporte = "" ;
   this.A5039EntradaProvTransportadorId = 0 ;
   this.A5061EntradaProvValorAcrescimo = 0 ;
   this.A5074EntradaProvValorBCICMSST = 0 ;
   this.A5250EntradaProvValorBCIMCSTNaoDest = 0 ;
   this.A5079EntradaProvValorCOFINS = 0 ;
   this.A5080EntradaProvValorCOFINSST = 0 ;
   this.A5062EntradaProvValorDesconto = 0 ;
   this.A5072EntradaProvValorDiferencaICMS = 0 ;
   this.A5064EntradaProvValorFrete = 0 ;
   this.A5073EntradaProvValorICMS = 0 ;
   this.A5081EntradaProvValorICMSNaoDestac = 0 ;
   this.A5159EntradaProvValorICMSST = 0 ;
   this.A5076EntradaProvValorIPI = 0 ;
   this.A5067EntradaProvValorManuseio = 0 ;
   this.A5066EntradaProvValorOutDespesas = 0 ;
   this.A5077EntradaProvValorPIS = 0 ;
   this.A5078EntradaProvValorPISST = 0 ;
   this.A5060EntradaProvValorProdutos = 0 ;
   this.A5065EntradaProvValorSeguro = 0 ;
   this.A5071EntradaProvAliquotaICMS = 0 ;
   this.A5069EntradaProvBCICMS = 0 ;
   this.A5070EntradaProvReducaoBaseICMS = 0 ;
   this.A10595EntradaProvValorFCP = 0 ;
   this.A10596EntradaProvValorFCPST = 0 ;
   this.A10597EntradaProvValorFCPSTRet = 0 ;
   this.A5035EntradaProvObservacao = "" ;
   this.A5050EntradaProvCPFEntrega = "" ;
   this.A5051EntradaProvCNPJEntrega = "" ;
   this.A5056EntradaProvCEPEndRetirada = "" ;
   this.A5052EntradaProvEnderecoRetirada = "" ;
   this.A5053EntradaProvNumeroEndRetirada = 0 ;
   this.A5054EntradaProvComplEndRetirada = "" ;
   this.A5055EntradaProvBairroEndRetirada = "" ;
   this.A5057EntradaProvCidadeEntRetirada = 0 ;
   this.A5049EntradaProvClasseEnergiaEletr = "" ;
   this.A5058EntradaProvTipoCTE = 0 ;
   this.A5059EntradaProvChaveCTEREF = "" ;
   this.A5063EntradaProvDescontoFinanceiro = 0 ;
   this.A5068EntradaProvValorTotal = 0 ;
   this.A5025EntradaProvCSTTipo = "" ;
   this.A5027EntradaProvCSTCodigo = "" ;
   this.Events = {"e111ce2_client": ["'FECHAR'", true] ,"e131ce2_client": ["'DETALHARITEM'", true] ,"e161ce2_client": ["ENTER", true] ,"e171ce2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRDPROD_nFirstRecordOnPage'},{av:'GRDPROD_nEOF'},{av:'subGrdprod_Rows'},{av:'AV50EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV51EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A5103EntradaProvItemValor',fld:'ENTRADAPROVITEMVALOR'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'}],[{ctrl:'vSITUACAOTRIBUTARIATIPO'},{av:'gx.fn.getCtrlProperty("ENTRADAPROVITEMLOTECOMBINACAO","Visible")',ctrl:'ENTRADAPROVITEMLOTECOMBINACAO',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV50EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV51EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV31EntradaProvNumeroDocumento',fld:'vENTRADAPROVNUMERODOCUMENTO'}],[{av:'AV106FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV107FilialId',fld:'vFILIALID'}]];
   this.EvtParms["'DETALHARITEM'"] = [[{av:'GRDPROD_nFirstRecordOnPage'},{av:'GRDPROD_nEOF'},{av:'subGrdprod_Rows'},{av:'AV50EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV51EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A5103EntradaProvItemValor',fld:'ENTRADAPROVITEMVALOR'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'},{av:'A5091EntradaProvSequencia',fld:'ENTRADAPROVSEQUENCIA'},{av:'AV81PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV101PessoaProvCPFCNPJ',fld:'vPESSOAPROVCPFCNPJ',hsh:true},{av:'AV82PessoaFantasia',fld:'vPESSOAFANTASIA',hsh:true}],[]];
   this.EvtParms["GRDPROD.LOAD"] = [[{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A5103EntradaProvItemValor',fld:'ENTRADAPROVITEMVALOR'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'}],[{av:'AV105VlrTotal',fld:'vVLRTOTAL'},{av:'AV110ProdutoDescricao',fld:'vPRODUTODESCRICAO'}]];
   this.EvtParms["GRDPROD_FIRSTPAGE"] = [[{av:'GRDPROD_nFirstRecordOnPage'},{av:'GRDPROD_nEOF'},{av:'subGrdprod_Rows'},{av:'AV50EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV51EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A5103EntradaProvItemValor',fld:'ENTRADAPROVITEMVALOR'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'}],[{ctrl:'vSITUACAOTRIBUTARIATIPO'},{av:'gx.fn.getCtrlProperty("ENTRADAPROVITEMLOTECOMBINACAO","Visible")',ctrl:'ENTRADAPROVITEMLOTECOMBINACAO',prop:'Visible'}]];
   this.EvtParms["GRDPROD_PREVPAGE"] = [[{av:'GRDPROD_nFirstRecordOnPage'},{av:'GRDPROD_nEOF'},{av:'subGrdprod_Rows'},{av:'AV50EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV51EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A5103EntradaProvItemValor',fld:'ENTRADAPROVITEMVALOR'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'}],[{ctrl:'vSITUACAOTRIBUTARIATIPO'},{av:'gx.fn.getCtrlProperty("ENTRADAPROVITEMLOTECOMBINACAO","Visible")',ctrl:'ENTRADAPROVITEMLOTECOMBINACAO',prop:'Visible'}]];
   this.EvtParms["GRDPROD_NEXTPAGE"] = [[{av:'GRDPROD_nFirstRecordOnPage'},{av:'GRDPROD_nEOF'},{av:'subGrdprod_Rows'},{av:'AV50EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV51EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A5103EntradaProvItemValor',fld:'ENTRADAPROVITEMVALOR'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'}],[{ctrl:'vSITUACAOTRIBUTARIATIPO'},{av:'gx.fn.getCtrlProperty("ENTRADAPROVITEMLOTECOMBINACAO","Visible")',ctrl:'ENTRADAPROVITEMLOTECOMBINACAO',prop:'Visible'}]];
   this.EvtParms["GRDPROD_LASTPAGE"] = [[{av:'GRDPROD_nFirstRecordOnPage'},{av:'GRDPROD_nEOF'},{av:'subGrdprod_Rows'},{av:'AV50EntradaProvEmpresaId',fld:'vENTRADAPROVEMPRESAID',hsh:true},{av:'AV51EntradaProvId',fld:'vENTRADAPROVID',hsh:true},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A5098EntradaProvItemQuantidade',fld:'ENTRADAPROVITEMQUANTIDADE'},{av:'A5103EntradaProvItemValor',fld:'ENTRADAPROVITEMVALOR'},{av:'A8233EntradaProvItemLoteProdDesc',fld:'ENTRADAPROVITEMLOTEPRODDESC'}],[{ctrl:'vSITUACAOTRIBUTARIATIPO'},{av:'gx.fn.getCtrlProperty("ENTRADAPROVITEMLOTECOMBINACAO","Visible")',ctrl:'ENTRADAPROVITEMLOTECOMBINACAO',prop:'Visible'}]];
   this.setVCMap("A4665ModeloDocFiscalCodigo", "MODELODOCFISCALCODIGO", 0, "char");
   this.setVCMap("AV50EntradaProvEmpresaId", "vENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV101PessoaProvCPFCNPJ", "vPESSOAPROVCPFCNPJ", 0, "char");
   this.setVCMap("AV50EntradaProvEmpresaId", "vENTRADAPROVEMPRESAID", 0, "char");
   GrdprodContainer.addRefreshingVar({rfrVar:"AV50EntradaProvEmpresaId"});
   GrdprodContainer.addRefreshingVar(this.GXValidFnc[157]);
   GrdprodContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GrdprodContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GrdprodContainer.addRefreshingVar({rfrVar:"A5098EntradaProvItemQuantidade", rfrProp:"Value", gxAttId:"5098"});
   GrdprodContainer.addRefreshingVar({rfrVar:"A5103EntradaProvItemValor", rfrProp:"Value", gxAttId:"5103"});
   GrdprodContainer.addRefreshingVar({rfrVar:"A8233EntradaProvItemLoteProdDesc", rfrProp:"Value", gxAttId:"8233"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdetalharentradaprov());
