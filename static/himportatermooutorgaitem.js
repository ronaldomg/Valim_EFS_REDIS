/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:48:55.89
*/
gx.evt.autoSkip = false;
gx.define('himportatermooutorgaitem', false, function () {
   this.ServerClass =  "himportatermooutorgaitem" ;
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
      this.AV11Sdt=gx.fn.getControlValue("vSDT") ;
   };
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
   this.s122_client=function()
   {
      this.AV33ContGrid = gx.num.trunc( 1 ,0) ;
      /* Start For Each Line in Grdproduto */
      var rowIdx40 = 1 ;
      var currentRowIdx40 = gx.fn.currentGridRowImpl(40) ;
      var rowIdxS40 ;
      var gridObj40 = gx.O.getGridById(40,0) ;
      while ( rowIdx40 <= gridObj40.grid.rows.length )
      {
         rowIdxS40 =  gx.text.padl( gx.text.tostring( rowIdx40), 4, "0")  ;
         gridObj40.instanciateRow(gridObj40.grid.getRowById(rowIdx40 - 1));
         this.AV34ContSdt = gx.num.trunc( 1 ,0) ;
         this.AV78GXV3 = gx.num.trunc( 1 ,0) ;
         while ( this.AV78GXV3 <= this.AV11Sdt.length )
         {
            this.AV16SdtItem =  this.AV11Sdt[this.AV78GXV3 - 1]  ;
            if ( this.AV34ContSdt == this.AV33ContGrid )
            {
               this.AV16SdtItem.Produto = gx.num.trunc( this.AV21ProdutoIdGrid ,0) ;
               this.AV16SdtItem.NaturezaDespesa = gx.num.trunc( this.AV54NaturezaDespesaId ,0) ;
            }
            this.AV34ContSdt = gx.num.trunc( this.AV34ContSdt + 1 ,0) ;
            this.AV78GXV3 = gx.num.trunc( this.AV78GXV3 + 1 ,0) ;
         }
         this.AV33ContGrid = gx.num.trunc( this.AV33ContGrid + 1 ,0) ;
         rowIdx40 = gx.num.trunc( rowIdx40 + 1 ,0) ;
      }
      if ( currentRowIdx40 )
      {
         gridObj40.instanciateRow(currentRowIdx40);
      }
   };
   this.e1113s2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1213s2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", false, null, false, false);
   };
   this.e1313s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1713s2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,19,21,23,25,27,29,32,34,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,64,65,66,69,70,71,72,73,74,75,76,77,78,79,81,82];
   this.GXLastCtrlId =82;
   this.GrdprodutoContainer = new gx.grid.grid(this, 2,"WbpLvl2",40,"Grdproduto","Grdproduto","GrdprodutoContainer",this.CmpContext,this.IsMasterPage,"himportatermooutorgaitem",[],false,1,true,true,0,true,false,false,"CollSdtOutorgaProdutos.SdtOutorgaProdutosItem",0,"px","Novo registro",true,false,true,null,null,false,"AV11Sdt",false,[1,1,1,1]);
   var GrdprodutoContainer = this.GrdprodutoContainer;
   GrdprodutoContainer.addSingleLineEdit("GXV115",41,"CTLPRODUTOXML","Identif.","","ProdutoXml","int",0,"px",8,8,"right",null,[],"GXV115","GXV115",true,0,false,false,"",1,"");
   GrdprodutoContainer.addSingleLineEdit("Descidentif",42,"vDESCIDENTIF","Descrição","","DescIdentif","svchar",0,"px",40,40,"left",null,[],"Descidentif","DescIdentif",true,0,false,false,"",1,"");
   GrdprodutoContainer.addSingleLineEdit("Tipodispendiocodigo",43,"vTIPODISPENDIOCODIGO","Tp. Disp.","","TipoDispendioCodigo","int",0,"px",4,4,"right",null,[],"Tipodispendiocodigo","TipoDispendioCodigo",true,0,false,false,"Attribute",1,"");
   GrdprodutoContainer.addSingleLineEdit("GXV118",44,"CTLPRODUTO","Código do Produto","","Produto","int",0,"px",10,10,"right",null,[],"GXV118","GXV118",false,0,false,false,"Attribute",1,"");
   GrdprodutoContainer.addSingleLineEdit("Produtoidgrid",45,"vPRODUTOIDGRID","Produto","","ProdutoIdGrid","int",0,"px",10,10,"right",null,[],"Produtoidgrid","ProdutoIdGrid",true,0,false,false,"",1,"");
   GrdprodutoContainer.addBitmap("&Bmppro","vBMPPRO",46,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GrdprodutoContainer.addSingleLineEdit("GXV11B",47,"CTLDESCPRODUTO","Descrição do Produto","","DescProduto","svchar",0,"px",40,40,"left",null,[],"GXV11B","GXV11B",true,0,false,false,"",1,"");
   GrdprodutoContainer.addSingleLineEdit("Naturezadespesaid",48,"vNATUREZADESPESAID","Nat. Desp.","","NaturezaDespesaId","int",0,"px",8,8,"right",null,[],"Naturezadespesaid","NaturezaDespesaId",true,0,false,false,"",1,"");
   GrdprodutoContainer.addBitmap("prompt_Naturezadespesaid","PROMPT_NATUREZADESPESAID",83,0,"",0,"",null,"","","gx-prompt Image","");
   GrdprodutoContainer.addBitmap("&Bmpnat","vBMPNAT",49,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GrdprodutoContainer.addSingleLineEdit("GXV11E",50,"CTLQTDESOLICITADA","Qtde Solicitada","","QtdeSolicitada","decimal",0,"px",21,21,"right",null,[],"GXV11E","GXV11E",true,4,false,false,"",1,"");
   GrdprodutoContainer.addSingleLineEdit("GXV11F",51,"CTLVALORSOLICITADO","Valor Solicitado","","ValorSolicitado","decimal",0,"px",22,22,"right",null,[],"GXV11F","GXV11F",true,2,false,false,"",1,"");
   GrdprodutoContainer.addSingleLineEdit("GXV11G",52,"CTLQTDEAPROVADA","Qtde Aprovada","","QtdeAprovada","decimal",0,"px",21,21,"right",null,[],"GXV11G","GXV11G",true,4,false,false,"",1,"");
   GrdprodutoContainer.addSingleLineEdit("GXV11H",53,"CTLVALORAPROVADO","Valor Aprovado","","ValorAprovado","decimal",0,"px",22,22,"right",null,[],"GXV11H","GXV11H",true,2,false,false,"",1,"");
   GrdprodutoContainer.addSingleLineEdit("GXV11I",54,"CTLSNEXISTE","Sn Existe","","SnExiste","char",0,"px",1,1,"left",null,[],"GXV11I","GXV11I",false,0,false,false,"Attribute",1,"");
   this.setGrid(GrdprodutoContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOOUTORGANOPROCESSO",gxz:"ZV5TermoOutorgaNoProcesso",gxold:"OV5TermoOutorgaNoProcesso",gxvar:"AV5TermoOutorgaNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.ZV5TermoOutorgaNoProcesso=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGANOPROCESSO",gx.O.AV5TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.AV5TermoOutorgaNoProcesso=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGANOPROCESSO")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOOUTORGAINICIOPROCESSO",gxz:"ZV7TermoOutorgaInicioProcesso",gxold:"OV7TermoOutorgaInicioProcesso",gxvar:"AV7TermoOutorgaInicioProcesso",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7TermoOutorgaInicioProcesso=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7TermoOutorgaInicioProcesso=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGAINICIOPROCESSO",gx.O.AV7TermoOutorgaInicioProcesso,0)},c2v:function(){gx.O.AV7TermoOutorgaInicioProcesso=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTERMOOUTORGAINICIOPROCESSO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOOUTORGANUMEROEDITAL",gxz:"ZV6TermoOutorgaNumeroEdital",gxold:"OV6TermoOutorgaNumeroEdital",gxvar:"AV6TermoOutorgaNumeroEdital",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6TermoOutorgaNumeroEdital=Value},v2z:function(Value){gx.O.ZV6TermoOutorgaNumeroEdital=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGANUMEROEDITAL",gx.O.AV6TermoOutorgaNumeroEdital,0)},c2v:function(){gx.O.AV6TermoOutorgaNumeroEdital=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGANUMEROEDITAL")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOOUTORGAFINALPROCESSO",gxz:"ZV8TermoOutorgaFinalProcesso",gxold:"OV8TermoOutorgaFinalProcesso",gxvar:"AV8TermoOutorgaFinalProcesso",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8TermoOutorgaFinalProcesso=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8TermoOutorgaFinalProcesso=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGAFINALPROCESSO",gx.O.AV8TermoOutorgaFinalProcesso,0)},c2v:function(){gx.O.AV8TermoOutorgaFinalProcesso=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTERMOOUTORGAFINALPROCESSO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOOUTORGAVALOR",gxz:"ZV9TermoOutorgaValor",gxold:"OV9TermoOutorgaValor",gxvar:"AV9TermoOutorgaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9TermoOutorgaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV9TermoOutorgaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTERMOOUTORGAVALOR",gx.O.AV9TermoOutorgaValor,2,',')},c2v:function(){gx.O.AV9TermoOutorgaValor=this.val()},val:function(){return gx.fn.getDecimalValue("vTERMOOUTORGAVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTERMOOUTORGATITULO",gxz:"ZV10TermoOutorgaTitulo",gxold:"OV10TermoOutorgaTitulo",gxvar:"AV10TermoOutorgaTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10TermoOutorgaTitulo=Value},v2z:function(Value){gx.O.ZV10TermoOutorgaTitulo=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGATITULO",gx.O.AV10TermoOutorgaTitulo,0)},c2v:function(){gx.O.AV10TermoOutorgaTitulo=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGATITULO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[41]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOXML",gxz:"ZV64GXV115",gxold:"OV64GXV115",gxvar:"GXV115",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV115=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64GXV115=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOXML",row || gx.fn.currentGridRowImpl(40),gx.O.GXV115,0)},c2v:function(){gx.O.GXV115=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOXML",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCIDENTIF",gxz:"ZV49DescIdentif",gxold:"OV49DescIdentif",gxvar:"AV49DescIdentif",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV49DescIdentif=Value},v2z:function(Value){gx.O.ZV49DescIdentif=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCIDENTIF",row || gx.fn.currentGridRowImpl(40),gx.O.AV49DescIdentif,0)},c2v:function(){gx.O.AV49DescIdentif=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCIDENTIF",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODISPENDIOCODIGO",gxz:"ZV50TipoDispendioCodigo",gxold:"OV50TipoDispendioCodigo",gxvar:"AV50TipoDispendioCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV50TipoDispendioCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50TipoDispendioCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTIPODISPENDIOCODIGO",row || gx.fn.currentGridRowImpl(40),gx.O.AV50TipoDispendioCodigo,0)},c2v:function(){gx.O.AV50TipoDispendioCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTIPODISPENDIOCODIGO",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTO",gxz:"ZV65GXV118",gxold:"OV65GXV118",gxvar:"GXV118",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV118=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65GXV118=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTO",row || gx.fn.currentGridRowImpl(40),gx.O.GXV118,0)},c2v:function(){gx.O.GXV118=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTO",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOIDGRID",gxz:"ZV21ProdutoIdGrid",gxold:"OV21ProdutoIdGrid",gxvar:"AV21ProdutoIdGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21ProdutoIdGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21ProdutoIdGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPRODUTOIDGRID",row || gx.fn.currentGridRowImpl(40),gx.O.AV21ProdutoIdGrid,0)},c2v:function(){gx.O.AV21ProdutoIdGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPRODUTOIDGRID",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRO",gxz:"ZV22BmpPro",gxold:"OV22BmpPro",gxvar:"AV22BmpPro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22BmpPro=Value},v2z:function(Value){gx.O.ZV22BmpPro=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRO",row || gx.fn.currentGridRowImpl(40),gx.O.AV22BmpPro,gx.O.AV73Bmppro_GXI)},c2v:function(){gx.O.AV73Bmppro_GXI=this.val_GXI();gx.O.AV22BmpPro=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRO",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRO_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV73Bmppro_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCPRODUTO",gxz:"ZV66GXV11B",gxold:"OV66GXV11B",gxvar:"GXV11B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11B=Value},v2z:function(Value){gx.O.ZV66GXV11B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCPRODUTO",row || gx.fn.currentGridRowImpl(40),gx.O.GXV11B,0)},c2v:function(){gx.O.GXV11B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCPRODUTO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESPESAID",gxz:"ZV54NaturezaDespesaId",gxold:"OV54NaturezaDespesaId",gxvar:"AV54NaturezaDespesaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV54NaturezaDespesaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54NaturezaDespesaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNATUREZADESPESAID",row || gx.fn.currentGridRowImpl(40),gx.O.AV54NaturezaDespesaId,0)},c2v:function(){gx.O.AV54NaturezaDespesaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNATUREZADESPESAID",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPNAT",gxz:"ZV55BmpNat",gxold:"OV55BmpNat",gxvar:"AV55BmpNat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV55BmpNat=Value},v2z:function(Value){gx.O.ZV55BmpNat=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPNAT",row || gx.fn.currentGridRowImpl(40),gx.O.AV55BmpNat,gx.O.AV74Bmpnat_GXI)},c2v:function(){gx.O.AV74Bmpnat_GXI=this.val_GXI();gx.O.AV55BmpNat=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPNAT",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPNAT_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV74Bmpnat_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDESOLICITADA",gxz:"ZV67GXV11E",gxold:"OV67GXV11E",gxvar:"GXV11E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11E=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV67GXV11E=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDESOLICITADA",row || gx.fn.currentGridRowImpl(40),gx.O.GXV11E,4,',')},c2v:function(){gx.O.GXV11E=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDESOLICITADA",row || gx.fn.currentGridRowImpl(40),'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORSOLICITADO",gxz:"ZV68GXV11F",gxold:"OV68GXV11F",gxvar:"GXV11F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11F=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV68GXV11F=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORSOLICITADO",row || gx.fn.currentGridRowImpl(40),gx.O.GXV11F,2,',')},c2v:function(){gx.O.GXV11F=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORSOLICITADO",row || gx.fn.currentGridRowImpl(40),'.',',')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDEAPROVADA",gxz:"ZV69GXV11G",gxold:"OV69GXV11G",gxvar:"GXV11G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11G=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV69GXV11G=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQTDEAPROVADA",row || gx.fn.currentGridRowImpl(40),gx.O.GXV11G,4,',')},c2v:function(){gx.O.GXV11G=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQTDEAPROVADA",row || gx.fn.currentGridRowImpl(40),'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLVALORAPROVADO",gxz:"ZV70GXV11H",gxold:"OV70GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11H=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV70GXV11H=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLVALORAPROVADO",row || gx.fn.currentGridRowImpl(40),gx.O.GXV11H,2,',')},c2v:function(){gx.O.GXV11H=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLVALORAPROVADO",row || gx.fn.currentGridRowImpl(40),'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:40,gxgrid:this.GrdprodutoContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNEXISTE",gxz:"ZV71GXV11I",gxold:"OV71GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11I=Value},v2z:function(Value){gx.O.ZV71GXV11I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSNEXISTE",row || gx.fn.currentGridRowImpl(40),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNEXISTE",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[55]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVOJAIMP",gxz:"ZV47ArquivoJaImp",gxold:"OV47ArquivoJaImp",gxvar:"AV47ArquivoJaImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ArquivoJaImp=Value},v2z:function(Value){gx.O.ZV47ArquivoJaImp=Value},v2c:function(){gx.fn.setControlValue("vARQUIVOJAIMP",gx.O.AV47ArquivoJaImp,0)},c2v:function(){gx.O.AV47ArquivoJaImp=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVOJAIMP")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vARQUIVO",gxz:"ZV12Arquivo",gxold:"OV12Arquivo",gxvar:"AV12Arquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12Arquivo=Value},v2z:function(Value){gx.O.ZV12Arquivo=Value},v2c:function(){gx.fn.setControlValue("vARQUIVO",gx.O.AV12Arquivo,0)},c2v:function(){gx.O.AV12Arquivo=this.val()},val:function(){return gx.fn.getControlValue("vARQUIVO")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TABPROMPT",grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoempresaid,isvalid:null,rgrid:[],fld:"vPRODUTOEMPRESAID",gxz:"ZV20ProdutoEmpresaId",gxold:"OV20ProdutoEmpresaId",gxvar:"AV20ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV20ProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOEMPRESAID",gx.O.AV20ProdutoEmpresaId,0)},c2v:function(){gx.O.AV20ProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDPROMPT",gxz:"ZV23FilialIdPrompt",gxold:"OV23FilialIdPrompt",gxvar:"AV23FilialIdPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FilialIdPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23FilialIdPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDPROMPT",gx.O.AV23FilialIdPrompt,0)},c2v:function(){gx.O.AV23FilialIdPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECOIDPROMPT",gxz:"ZV24PrecoIdPrompt",gxold:"OV24PrecoIdPrompt",gxvar:"AV24PrecoIdPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PrecoIdPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PrecoIdPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOIDPROMPT",gx.O.AV24PrecoIdPrompt,0)},c2v:function(){gx.O.AV24PrecoIdPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOIDPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV25ProdutoCategoria",gxold:"OV25ProdutoCategoria",gxvar:"AV25ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV25ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV25ProdutoCategoria)},c2v:function(){gx.O.AV25ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV26SubGrupoProdutoId",gxold:"OV26SubGrupoProdutoId",gxvar:"AV26SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV26SubGrupoProdutoId,0)},c2v:function(){gx.O.AV26SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV27ProdutoCodigoId",gxold:"OV27ProdutoCodigoId",gxvar:"AV27ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV27ProdutoCodigoId,0)},c2v:function(){gx.O.AV27ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV28LoteProdutoCombinacao",gxold:"OV28LoteProdutoCombinacao",gxvar:"AV28LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV28LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV28LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV28LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV29GrupoProdutoId",gxold:"OV29GrupoProdutoId",gxvar:"AV29GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV29GrupoProdutoId,0)},c2v:function(){gx.O.AV29GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV30ProdutoReferencia",gxold:"OV30ProdutoReferencia",gxvar:"AV30ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV30ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV30ProdutoReferencia,0)},c2v:function(){gx.O.AV30ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOBARRAS",gxz:"ZV31ProdutoCodigoBarras",gxold:"OV31ProdutoCodigoBarras",gxvar:"AV31ProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOBARRAS",gx.O.AV31ProdutoCodigoBarras,0)},c2v:function(){gx.O.AV31ProdutoCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV43Qtde",gxold:"OV43Qtde",gxvar:"AV43Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV43Qtde,0)},c2v:function(){gx.O.AV43Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"JS", format:2,grid:0};
   this.AV5TermoOutorgaNoProcesso = "" ;
   this.ZV5TermoOutorgaNoProcesso = "" ;
   this.OV5TermoOutorgaNoProcesso = "" ;
   this.AV7TermoOutorgaInicioProcesso = gx.date.nullDate() ;
   this.ZV7TermoOutorgaInicioProcesso = gx.date.nullDate() ;
   this.OV7TermoOutorgaInicioProcesso = gx.date.nullDate() ;
   this.AV6TermoOutorgaNumeroEdital = "" ;
   this.ZV6TermoOutorgaNumeroEdital = "" ;
   this.OV6TermoOutorgaNumeroEdital = "" ;
   this.AV8TermoOutorgaFinalProcesso = gx.date.nullDate() ;
   this.ZV8TermoOutorgaFinalProcesso = gx.date.nullDate() ;
   this.OV8TermoOutorgaFinalProcesso = gx.date.nullDate() ;
   this.AV9TermoOutorgaValor = 0 ;
   this.ZV9TermoOutorgaValor = 0 ;
   this.OV9TermoOutorgaValor = 0 ;
   this.AV10TermoOutorgaTitulo = "" ;
   this.ZV10TermoOutorgaTitulo = "" ;
   this.OV10TermoOutorgaTitulo = "" ;
   this.ZV64GXV115 = 0 ;
   this.OV64GXV115 = 0 ;
   this.ZV49DescIdentif = "" ;
   this.OV49DescIdentif = "" ;
   this.ZV50TipoDispendioCodigo = 0 ;
   this.OV50TipoDispendioCodigo = 0 ;
   this.ZV65GXV118 = 0 ;
   this.OV65GXV118 = 0 ;
   this.ZV21ProdutoIdGrid = 0 ;
   this.OV21ProdutoIdGrid = 0 ;
   this.ZV22BmpPro = "" ;
   this.OV22BmpPro = "" ;
   this.ZV66GXV11B = "" ;
   this.OV66GXV11B = "" ;
   this.ZV54NaturezaDespesaId = 0 ;
   this.OV54NaturezaDespesaId = 0 ;
   this.ZV55BmpNat = "" ;
   this.OV55BmpNat = "" ;
   this.ZV67GXV11E = 0 ;
   this.OV67GXV11E = 0 ;
   this.ZV68GXV11F = 0 ;
   this.OV68GXV11F = 0 ;
   this.ZV69GXV11G = 0 ;
   this.OV69GXV11G = 0 ;
   this.ZV70GXV11H = 0 ;
   this.OV70GXV11H = 0 ;
   this.ZV71GXV11I = "" ;
   this.OV71GXV11I = "" ;
   this.AV47ArquivoJaImp = "" ;
   this.ZV47ArquivoJaImp = "" ;
   this.OV47ArquivoJaImp = "" ;
   this.AV12Arquivo = "" ;
   this.ZV12Arquivo = "" ;
   this.OV12Arquivo = "" ;
   this.AV20ProdutoEmpresaId = "" ;
   this.ZV20ProdutoEmpresaId = "" ;
   this.OV20ProdutoEmpresaId = "" ;
   this.AV23FilialIdPrompt = 0 ;
   this.ZV23FilialIdPrompt = 0 ;
   this.OV23FilialIdPrompt = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV24PrecoIdPrompt = 0 ;
   this.ZV24PrecoIdPrompt = 0 ;
   this.OV24PrecoIdPrompt = 0 ;
   this.AV25ProdutoCategoria = "" ;
   this.ZV25ProdutoCategoria = "" ;
   this.OV25ProdutoCategoria = "" ;
   this.AV26SubGrupoProdutoId = 0 ;
   this.ZV26SubGrupoProdutoId = 0 ;
   this.OV26SubGrupoProdutoId = 0 ;
   this.AV27ProdutoCodigoId = 0 ;
   this.ZV27ProdutoCodigoId = 0 ;
   this.OV27ProdutoCodigoId = 0 ;
   this.AV28LoteProdutoCombinacao = "" ;
   this.ZV28LoteProdutoCombinacao = "" ;
   this.OV28LoteProdutoCombinacao = "" ;
   this.AV29GrupoProdutoId = 0 ;
   this.ZV29GrupoProdutoId = 0 ;
   this.OV29GrupoProdutoId = 0 ;
   this.AV30ProdutoReferencia = "" ;
   this.ZV30ProdutoReferencia = "" ;
   this.OV30ProdutoReferencia = "" ;
   this.AV31ProdutoCodigoBarras = 0 ;
   this.ZV31ProdutoCodigoBarras = 0 ;
   this.OV31ProdutoCodigoBarras = 0 ;
   this.AV43Qtde = 0 ;
   this.ZV43Qtde = 0 ;
   this.OV43Qtde = 0 ;
   this.AV5TermoOutorgaNoProcesso = "" ;
   this.AV7TermoOutorgaInicioProcesso = gx.date.nullDate() ;
   this.AV6TermoOutorgaNumeroEdital = "" ;
   this.AV8TermoOutorgaFinalProcesso = gx.date.nullDate() ;
   this.AV9TermoOutorgaValor = 0 ;
   this.AV10TermoOutorgaTitulo = "" ;
   this.AV47ArquivoJaImp = "" ;
   this.AV12Arquivo = "" ;
   this.AV20ProdutoEmpresaId = "" ;
   this.AV23FilialIdPrompt = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV24PrecoIdPrompt = 0 ;
   this.AV25ProdutoCategoria = "" ;
   this.AV26SubGrupoProdutoId = 0 ;
   this.AV27ProdutoCodigoId = 0 ;
   this.AV28LoteProdutoCombinacao = "" ;
   this.AV29GrupoProdutoId = 0 ;
   this.AV30ProdutoReferencia = "" ;
   this.AV31ProdutoCodigoBarras = 0 ;
   this.AV43Qtde = 0 ;
   this.GXV115 = 0 ;
   this.AV49DescIdentif = "" ;
   this.AV50TipoDispendioCodigo = 0 ;
   this.GXV118 = 0 ;
   this.AV21ProdutoIdGrid = 0 ;
   this.AV22BmpPro = "" ;
   this.GXV11B = "" ;
   this.AV54NaturezaDespesaId = 0 ;
   this.AV55BmpNat = "" ;
   this.GXV11E = 0 ;
   this.GXV11F = 0 ;
   this.GXV11G = 0 ;
   this.GXV11H = 0 ;
   this.GXV11I = "" ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A8183NaturezaDespesaCodItemFap = 0 ;
   this.A8181NaturezaDespesaTpDispId = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3838ProdutoCodificacaoPrincipal = "" ;
   this.A8153TipoDispendioCodigo = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.AV11Sdt = [ ] ;
   this.AV16SdtItem = {} ;
   this.AV78GXV3 = 0 ;
   this.AV34ContSdt = 0 ;
   this.AV33ContGrid = 0 ;
   this.Events = {"e1113s2_client": ["ENTER", true] ,"e1213s2_client": ["'IMPRIMIR'", true] ,"e1313s2_client": ["'FECHAR'", true] ,"e1713s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'subGrdproduto_Rows'},{av:'AV22BmpPro',fld:'vBMPPRO',grid:40},{av:'AV55BmpNat',fld:'vBMPNAT',grid:40},{av:'AV11Sdt',fld:'vSDT',grid:40},{av:'AV21ProdutoIdGrid',fld:'vPRODUTOIDGRID',grid:40},{av:'AV54NaturezaDespesaId',fld:'vNATUREZADESPESAID',grid:40}],[{av:'AV33ContGrid',fld:'vCONTGRID'},{av:'AV34ContSdt',fld:'vCONTSDT'},{av:'AV78GXV3',fld:'vGXV3'},{av:'AV16SdtItem',fld:'vSDTITEM'}]];
   this.EvtParms["GRDPRODUTO.LOAD"] = [[{av:'AV11Sdt',fld:'vSDT',grid:40}],[{av:'AV50TipoDispendioCodigo',fld:'vTIPODISPENDIOCODIGO'},{av:'AV21ProdutoIdGrid',fld:'vPRODUTOIDGRID'},{av:'AV54NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV49DescIdentif',fld:'vDESCIDENTIF'},{ctrl:'CTLPRODUTOXML',prop:'Class'},{av:'gx.fn.getCtrlProperty("vPRODUTOIDGRID","Class")',ctrl:'vPRODUTOIDGRID',prop:'Class'},{ctrl:'CTLDESCPRODUTO',prop:'Class'},{ctrl:'CTLQTDESOLICITADA',prop:'Class'},{ctrl:'CTLVALORSOLICITADO',prop:'Class'},{ctrl:'CTLQTDEAPROVADA',prop:'Class'},{ctrl:'CTLVALORAPROVADO',prop:'Class'},{av:'gx.fn.getCtrlProperty("vNATUREZADESPESAID","Class")',ctrl:'vNATUREZADESPESAID',prop:'Class'},{av:'gx.fn.getCtrlProperty("vDESCIDENTIF","Class")',ctrl:'vDESCIDENTIF',prop:'Class'},{av:'gx.fn.getCtrlProperty("vPRODUTOIDGRID","Enabled")',ctrl:'vPRODUTOIDGRID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNATUREZADESPESAID","Enabled")',ctrl:'vNATUREZADESPESAID',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV11Sdt',fld:'vSDT',grid:40},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV20ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3838ProdutoCodificacaoPrincipal',fld:'PRODUTOCODIFICACAOPRINCIPAL'},{av:'A8153TipoDispendioCodigo',fld:'TIPODISPENDIOCODIGO'},{av:'A2076NaturezaDespesaEmpresaId',fld:'NATUREZADESPESAEMPRESAID'},{av:'AV56NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'A8183NaturezaDespesaCodItemFap',fld:'NATUREZADESPESACODITEMFAP'},{av:'A8181NaturezaDespesaTpDispId',fld:'NATUREZADESPESATPDISPID'},{av:'AV12Arquivo',fld:'vARQUIVO'},{av:'AV47ArquivoJaImp',fld:'vARQUIVOJAIMP'},{av:'AV21ProdutoIdGrid',fld:'vPRODUTOIDGRID',grid:40},{av:'AV54NaturezaDespesaId',fld:'vNATUREZADESPESAID',grid:40},{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'subGrdproduto_Rows'},{av:'AV22BmpPro',fld:'vBMPPRO',grid:40},{av:'AV55BmpNat',fld:'vBMPNAT',grid:40}],[{av:'AV35SnErro',fld:'vSNERRO'},{av:'AV36NumLinha',fld:'vNUMLINHA'},{av:'AV79GXV4',fld:'vGXV4'},{av:'AV16SdtItem',fld:'vSDTITEM'},{av:'AV80GXLvl185',fld:'vGXLVL185'},{av:'AV81GXLvl206',fld:'vGXLVL206'},{av:'AV11Sdt',fld:'vSDT',grid:40},{av:'AV33ContGrid',fld:'vCONTGRID'},{av:'AV34ContSdt',fld:'vCONTSDT'},{av:'AV78GXV3',fld:'vGXV3'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV82Pgmname',fld:'vPGMNAME'},{av:'AV53QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV5TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV6TermoOutorgaNumeroEdital',fld:'vTERMOOUTORGANUMEROEDITAL'},{av:'AV10TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV7TermoOutorgaInicioProcesso',fld:'vTERMOOUTORGAINICIOPROCESSO'},{av:'AV8TermoOutorgaFinalProcesso',fld:'vTERMOOUTORGAFINALPROCESSO'},{av:'AV9TermoOutorgaValor',fld:'vTERMOOUTORGAVALOR'},{av:'AV11Sdt',fld:'vSDT',grid:40},{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'subGrdproduto_Rows'},{av:'AV22BmpPro',fld:'vBMPPRO'},{av:'AV55BmpNat',fld:'vBMPNAT'},{av:'AV21ProdutoIdGrid',fld:'vPRODUTOIDGRID'},{av:'AV54NaturezaDespesaId',fld:'vNATUREZADESPESAID'}],[{av:'AV52NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV51NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV11Sdt',fld:'vSDT',grid:40},{av:'AV9TermoOutorgaValor',fld:'vTERMOOUTORGAVALOR'},{av:'AV8TermoOutorgaFinalProcesso',fld:'vTERMOOUTORGAFINALPROCESSO'},{av:'AV7TermoOutorgaInicioProcesso',fld:'vTERMOOUTORGAINICIOPROCESSO'},{av:'AV10TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV6TermoOutorgaNumeroEdital',fld:'vTERMOOUTORGANUMEROEDITAL'},{av:'AV5TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV53QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRDPRODUTO_FIRSTPAGE"] = [[{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'subGrdproduto_Rows'},{av:'AV22BmpPro',fld:'vBMPPRO',grid:40},{av:'AV55BmpNat',fld:'vBMPNAT',grid:40},{av:'AV21ProdutoIdGrid',fld:'vPRODUTOIDGRID',grid:40},{av:'AV54NaturezaDespesaId',fld:'vNATUREZADESPESAID',grid:40},{av:'AV11Sdt',fld:'vSDT',grid:40}],[{av:'AV33ContGrid',fld:'vCONTGRID'},{av:'AV34ContSdt',fld:'vCONTSDT'},{av:'AV78GXV3',fld:'vGXV3'},{av:'AV16SdtItem',fld:'vSDTITEM'}]];
   this.EvtParms["GRDPRODUTO_PREVPAGE"] = [[{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'subGrdproduto_Rows'},{av:'AV22BmpPro',fld:'vBMPPRO',grid:40},{av:'AV55BmpNat',fld:'vBMPNAT',grid:40},{av:'AV21ProdutoIdGrid',fld:'vPRODUTOIDGRID',grid:40},{av:'AV54NaturezaDespesaId',fld:'vNATUREZADESPESAID',grid:40},{av:'AV11Sdt',fld:'vSDT',grid:40}],[{av:'AV33ContGrid',fld:'vCONTGRID'},{av:'AV34ContSdt',fld:'vCONTSDT'},{av:'AV78GXV3',fld:'vGXV3'},{av:'AV16SdtItem',fld:'vSDTITEM'}]];
   this.EvtParms["GRDPRODUTO_NEXTPAGE"] = [[{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'subGrdproduto_Rows'},{av:'AV22BmpPro',fld:'vBMPPRO',grid:40},{av:'AV55BmpNat',fld:'vBMPNAT',grid:40},{av:'AV21ProdutoIdGrid',fld:'vPRODUTOIDGRID',grid:40},{av:'AV54NaturezaDespesaId',fld:'vNATUREZADESPESAID',grid:40},{av:'AV11Sdt',fld:'vSDT',grid:40}],[{av:'AV33ContGrid',fld:'vCONTGRID'},{av:'AV34ContSdt',fld:'vCONTSDT'},{av:'AV78GXV3',fld:'vGXV3'},{av:'AV16SdtItem',fld:'vSDTITEM'}]];
   this.EvtParms["GRDPRODUTO_LASTPAGE"] = [[{av:'GRDPRODUTO_nFirstRecordOnPage'},{av:'GRDPRODUTO_nEOF'},{av:'subGrdproduto_Rows'},{av:'AV22BmpPro',fld:'vBMPPRO',grid:40},{av:'AV55BmpNat',fld:'vBMPNAT',grid:40},{av:'AV21ProdutoIdGrid',fld:'vPRODUTOIDGRID',grid:40},{av:'AV54NaturezaDespesaId',fld:'vNATUREZADESPESAID',grid:40},{av:'AV11Sdt',fld:'vSDT',grid:40}],[{av:'AV33ContGrid',fld:'vCONTGRID'},{av:'AV34ContSdt',fld:'vCONTSDT'},{av:'AV78GXV3',fld:'vGXV3'},{av:'AV16SdtItem',fld:'vSDTITEM'}]];
   this.setPrompt("PROMPT_NATUREZADESPESAID", [48]);
   this.EnterCtrl = ["BTNCONF"];
   this.setVCMap("A3838ProdutoCodificacaoPrincipal", "PRODUTOCODIFICACAOPRINCIPAL", 0, "char");
   this.setVCMap("AV11Sdt", "vSDT", 0, "CollSdtOutorgaProdutos.SdtOutorgaProdutosItem");
   this.setVCMap("AV11Sdt", "vSDT", 0, "CollSdtOutorgaProdutos.SdtOutorgaProdutosItem");
   GrdprodutoContainer.addRefreshingVar({rfrVar:"AV22BmpPro", rfrProp:"Value", gxAttId:"Bmppro"});
   GrdprodutoContainer.addRefreshingVar({rfrVar:"AV55BmpNat", rfrProp:"Value", gxAttId:"Bmpnat"});
   GrdprodutoContainer.addRefreshingVar({rfrVar:"AV11Sdt"});
   GrdprodutoContainer.addRefreshingVar({rfrVar:"AV21ProdutoIdGrid", rfrProp:"Value", gxAttId:"Produtoidgrid"});
   GrdprodutoContainer.addRefreshingVar({rfrVar:"AV54NaturezaDespesaId", rfrProp:"Value", gxAttId:"Naturezadespesaid"});
   this.addGridBCProperty("Sdt", ["ProdutoXml"], this.GXValidFnc[41], "AV11Sdt");
   this.addGridBCProperty("Sdt", ["Produto"], this.GXValidFnc[44], "AV11Sdt");
   this.addGridBCProperty("Sdt", ["DescProduto"], this.GXValidFnc[47], "AV11Sdt");
   this.addGridBCProperty("Sdt", ["QtdeSolicitada"], this.GXValidFnc[50], "AV11Sdt");
   this.addGridBCProperty("Sdt", ["ValorSolicitado"], this.GXValidFnc[51], "AV11Sdt");
   this.addGridBCProperty("Sdt", ["QtdeAprovada"], this.GXValidFnc[52], "AV11Sdt");
   this.addGridBCProperty("Sdt", ["ValorAprovado"], this.GXValidFnc[53], "AV11Sdt");
   this.addGridBCProperty("Sdt", ["SnExiste"], this.GXValidFnc[54], "AV11Sdt");
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportatermooutorgaitem());
