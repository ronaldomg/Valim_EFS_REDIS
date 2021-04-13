/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:0:41.58
*/
gx.evt.autoSkip = false;
gx.define('hconsultaforcavendaitens', false, function () {
   this.ServerClass =  "hconsultaforcavendaitens" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV18FvEmpresa=gx.fn.getControlValue("vFVEMPRESA") ;
      this.AV19FvId=gx.fn.getIntegerValue("vFVID",'.') ;
      this.A2961ProdutoDescricaoResumida=gx.fn.getControlValue("PRODUTODESCRICAORESUMIDA") ;
      this.A2915EsquemaCodigo=gx.fn.getIntegerValue("ESQUEMACODIGO",'.') ;
      this.AV11DescLote1=gx.fn.getControlValue("vDESCLOTE1") ;
      this.AV30TitLote1=gx.fn.getControlValue("vTITLOTE1") ;
      this.AV12DescLote2=gx.fn.getControlValue("vDESCLOTE2") ;
      this.AV31TitLote2=gx.fn.getControlValue("vTITLOTE2") ;
      this.AV13DescLote3=gx.fn.getControlValue("vDESCLOTE3") ;
      this.AV32TitLote3=gx.fn.getControlValue("vTITLOTE3") ;
      this.AV14DescLote4=gx.fn.getControlValue("vDESCLOTE4") ;
      this.AV33TitLote4=gx.fn.getControlValue("vTITLOTE4") ;
      this.AV15DescLote5=gx.fn.getControlValue("vDESCLOTE5") ;
      this.AV34TitLote5=gx.fn.getControlValue("vTITLOTE5") ;
      this.A2921AtributoEsquemaCodigo=gx.fn.getIntegerValue("ATRIBUTOESQUEMACODIGO",'.') ;
      this.AV17EsquemaCodigo=gx.fn.getIntegerValue("vESQUEMACODIGO",'.') ;
      this.AV23LoteProdutoCombinacao=gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO") ;
      this.A2917AtributoEsquemaSnCadastrado=gx.fn.getControlValue("ATRIBUTOESQUEMASNCADASTRADO") ;
      this.A2941ValorAtributoCodigo=gx.fn.getIntegerValue("VALORATRIBUTOCODIGO",'.') ;
      this.A2938ValorAtributoDescricao=gx.fn.getControlValue("VALORATRIBUTODESCRICAO") ;
      this.A2916AtributoEsquemaDescricao=gx.fn.getControlValue("ATRIBUTOESQUEMADESCRICAO") ;
   };
   this.Valid_Produtoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(9) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PRODUTOID", gx.fn.currentGridRowImpl(9));
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
   this.e192822_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e202822_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e212822_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e112822_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e122822_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132822_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142822_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e152822_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e222822_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e232822_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,33,35,37,43,47,49,50,52];
   this.GXLastCtrlId =52;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",9,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultaforcavendaitens",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(10619,10,"FVITENSSEQUENCIA","Sequência","","FVItensSequencia","int",0,"px",6,6,"right",null,[],10619,"FVItensSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Produtodescricaoresumida",11,"vPRODUTODESCRICAORESUMIDA","Produto","","ProdutoDescricaoResumida","svchar",0,"px",40,40,"left",null,[],"Produtodescricaoresumida","ProdutoDescricaoResumida",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Lote1",12,"vLOTE1","","","Lote1","svchar",0,"px",40,40,"left",null,[],"Lote1","Lote1",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Lote2",13,"vLOTE2","","","Lote2","svchar",0,"px",40,40,"left",null,[],"Lote2","Lote2",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Lote3",14,"vLOTE3","","","Lote3","svchar",0,"px",40,40,"left",null,[],"Lote3","Lote3",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Lote4",15,"vLOTE4","","","Lote4","svchar",0,"px",40,40,"left",null,[],"Lote4","Lote4",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Lote5",16,"vLOTE5","","","Lote5","svchar",0,"px",40,40,"left",null,[],"Lote5","Lote5",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2965,17,"PRODUTOID","Código do Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],2965,"ProdutoId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10649,18,"FVITENSLOTECOMBINACAO","Tamanho","","FVItensLoteCombinacao","char",0,"px",20,20,"left",null,[],10649,"FVItensLoteCombinacao",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10651,19,"FVITENSQUANTIDADE","Quantidade","","FVItensQuantidade","decimal",0,"px",18,18,"right",null,[],10651,"FVItensQuantidade",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10652,20,"FVITENSVALORUNITARIO","Valor Unitário","","FVItensValorUnitario","decimal",0,"px",21,21,"right",null,[],10652,"FVItensValorUnitario",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10653,21,"FVITENSDESCONTO","Desconto","","FVItensDesconto","decimal",0,"px",22,22,"right",null,[],10653,"FVItensDesconto",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Valortotal",22,"vVALORTOTAL","Valor Total","","ValorTotal","decimal",0,"px",22,22,"right",null,[],"Valortotal","ValorTotal",true,2,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",23,0,"px",17,"px","e192822_client","","Alterar","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",24,0,"px",17,"px","e202822_client","","Excluir","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpcons","vBMPCONS",25,0,"px",17,"px","e212822_client","","Consultar","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE8",grid:0};
   GXValidFnc[10]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVITENSSEQUENCIA",gxz:"Z10619FVItensSequencia",gxold:"O10619FVItensSequencia",gxvar:"A10619FVItensSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10619FVItensSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10619FVItensSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FVITENSSEQUENCIA",row || gx.fn.currentGridRowImpl(9),gx.O.A10619FVItensSequencia,0)},c2v:function(){gx.O.A10619FVItensSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FVITENSSEQUENCIA",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV28ProdutoDescricaoResumida",gxold:"OV28ProdutoDescricaoResumida",gxvar:"AV28ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV28ProdutoDescricaoResumida=Value},v2c:function(row){gx.fn.setGridControlValue("vPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(9),gx.O.AV28ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV28ProdutoDescricaoResumida=this.val()},val:function(row){return gx.fn.getGridControlValue("vPRODUTODESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE1",gxz:"ZV37Lote1",gxold:"OV37Lote1",gxvar:"AV37Lote1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37Lote1=Value},v2z:function(Value){gx.O.ZV37Lote1=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTE1",row || gx.fn.currentGridRowImpl(9),gx.O.AV37Lote1,0)},c2v:function(){gx.O.AV37Lote1=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTE1",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE2",gxz:"ZV38Lote2",gxold:"OV38Lote2",gxvar:"AV38Lote2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV38Lote2=Value},v2z:function(Value){gx.O.ZV38Lote2=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTE2",row || gx.fn.currentGridRowImpl(9),gx.O.AV38Lote2,0)},c2v:function(){gx.O.AV38Lote2=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTE2",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE3",gxz:"ZV39Lote3",gxold:"OV39Lote3",gxvar:"AV39Lote3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV39Lote3=Value},v2z:function(Value){gx.O.ZV39Lote3=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTE3",row || gx.fn.currentGridRowImpl(9),gx.O.AV39Lote3,0)},c2v:function(){gx.O.AV39Lote3=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTE3",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE4",gxz:"ZV40Lote4",gxold:"OV40Lote4",gxvar:"AV40Lote4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV40Lote4=Value},v2z:function(Value){gx.O.ZV40Lote4=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTE4",row || gx.fn.currentGridRowImpl(9),gx.O.AV40Lote4,0)},c2v:function(){gx.O.AV40Lote4=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTE4",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLOTE5",gxz:"ZV41Lote5",gxold:"OV41Lote5",gxvar:"AV41Lote5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV41Lote5=Value},v2z:function(Value){gx.O.ZV41Lote5=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTE5",row || gx.fn.currentGridRowImpl(9),gx.O.AV41Lote5,0)},c2v:function(){gx.O.AV41Lote5=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTE5",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:this.Valid_Produtoid,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOID",row || gx.fn.currentGridRowImpl(9),gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOID",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVITENSLOTECOMBINACAO",gxz:"Z10649FVItensLoteCombinacao",gxold:"O10649FVItensLoteCombinacao",gxvar:"A10649FVItensLoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10649FVItensLoteCombinacao=Value},v2z:function(Value){gx.O.Z10649FVItensLoteCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("FVITENSLOTECOMBINACAO",row || gx.fn.currentGridRowImpl(9),gx.O.A10649FVItensLoteCombinacao,0)},c2v:function(){gx.O.A10649FVItensLoteCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("FVITENSLOTECOMBINACAO",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZZZZZZZZZ9.9999",ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVITENSQUANTIDADE",gxz:"Z10651FVItensQuantidade",gxold:"O10651FVItensQuantidade",gxvar:"A10651FVItensQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10651FVItensQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10651FVItensQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("FVITENSQUANTIDADE",row || gx.fn.currentGridRowImpl(9),gx.O.A10651FVItensQuantidade,4,',')},c2v:function(){gx.O.A10651FVItensQuantidade=this.val()},val:function(row){return gx.fn.getGridDecimalValue("FVITENSQUANTIDADE",row || gx.fn.currentGridRowImpl(9),'.',',')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"decimal",len:18,dec:4,sign:false,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVITENSVALORUNITARIO",gxz:"Z10652FVItensValorUnitario",gxold:"O10652FVItensValorUnitario",gxvar:"A10652FVItensValorUnitario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10652FVItensValorUnitario=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10652FVItensValorUnitario=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("FVITENSVALORUNITARIO",row || gx.fn.currentGridRowImpl(9),gx.O.A10652FVItensValorUnitario,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10652FVItensValorUnitario=this.val()},val:function(row){return gx.fn.getGridDecimalValue("FVITENSVALORUNITARIO",row || gx.fn.currentGridRowImpl(9),'.',',')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVITENSDESCONTO",gxz:"Z10653FVItensDesconto",gxold:"O10653FVItensDesconto",gxvar:"A10653FVItensDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10653FVItensDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10653FVItensDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("FVITENSDESCONTO",row || gx.fn.currentGridRowImpl(9),gx.O.A10653FVItensDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10653FVItensDesconto=this.val()},val:function(row){return gx.fn.getGridDecimalValue("FVITENSDESCONTO",row || gx.fn.currentGridRowImpl(9),'.',',')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV36ValorTotal",gxold:"OV36ValorTotal",gxvar:"AV36ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV36ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORTOTAL",row || gx.fn.currentGridRowImpl(9),gx.O.AV36ValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV36ValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORTOTAL",row || gx.fn.currentGridRowImpl(9),'.',',')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5BmpAlt",gxold:"OV5BmpAlt",gxvar:"AV5BmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5BmpAlt=Value},v2z:function(Value){gx.O.ZV5BmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(9),gx.O.AV5BmpAlt,gx.O.AV47Bmpalt_GXI)},c2v:function(){gx.O.AV47Bmpalt_GXI=this.val_GXI();gx.O.AV5BmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(9))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(9))}, gxvar_GXI:'AV47Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7BmpExc",gxold:"OV7BmpExc",gxvar:"AV7BmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7BmpExc=Value},v2z:function(Value){gx.O.ZV7BmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(9),gx.O.AV7BmpExc,gx.O.AV48Bmpexc_GXI)},c2v:function(){gx.O.AV48Bmpexc_GXI=this.val_GXI();gx.O.AV7BmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(9))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(9))}, gxvar_GXI:'AV48Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONS",gxz:"ZV6BmpCons",gxold:"OV6BmpCons",gxvar:"AV6BmpCons",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6BmpCons=Value},v2z:function(Value){gx.O.ZV6BmpCons=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONS",row || gx.fn.currentGridRowImpl(9),gx.O.AV6BmpCons,gx.O.AV49Bmpcons_GXI)},c2v:function(){gx.O.AV49Bmpcons_GXI=this.val_GXI();gx.O.AV6BmpCons=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONS",row || gx.fn.currentGridRowImpl(9))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONS_GXI",row || gx.fn.currentGridRowImpl(9))}, gxvar_GXI:'AV49Bmpcons_GXI',nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[31]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[33]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[35]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[37]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"TABLE9",grid:0};
   GXValidFnc[47]={fld:"TABLE10",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV27Pagina,0)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV42PaginaAux",gxold:"OV42PaginaAux",gxvar:"AV42PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV42PaginaAux,0)},c2v:function(){gx.O.AV42PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   this.Z10619FVItensSequencia = 0 ;
   this.O10619FVItensSequencia = 0 ;
   this.ZV28ProdutoDescricaoResumida = "" ;
   this.OV28ProdutoDescricaoResumida = "" ;
   this.ZV37Lote1 = "" ;
   this.OV37Lote1 = "" ;
   this.ZV38Lote2 = "" ;
   this.OV38Lote2 = "" ;
   this.ZV39Lote3 = "" ;
   this.OV39Lote3 = "" ;
   this.ZV40Lote4 = "" ;
   this.OV40Lote4 = "" ;
   this.ZV41Lote5 = "" ;
   this.OV41Lote5 = "" ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.Z10649FVItensLoteCombinacao = "" ;
   this.O10649FVItensLoteCombinacao = "" ;
   this.Z10651FVItensQuantidade = 0 ;
   this.O10651FVItensQuantidade = 0 ;
   this.Z10652FVItensValorUnitario = 0 ;
   this.O10652FVItensValorUnitario = 0 ;
   this.Z10653FVItensDesconto = 0 ;
   this.O10653FVItensDesconto = 0 ;
   this.ZV36ValorTotal = 0 ;
   this.OV36ValorTotal = 0 ;
   this.ZV5BmpAlt = "" ;
   this.OV5BmpAlt = "" ;
   this.ZV7BmpExc = "" ;
   this.OV7BmpExc = "" ;
   this.ZV6BmpCons = "" ;
   this.OV6BmpCons = "" ;
   this.AV27Pagina = 0 ;
   this.ZV27Pagina = 0 ;
   this.OV27Pagina = 0 ;
   this.AV42PaginaAux = 0 ;
   this.ZV42PaginaAux = 0 ;
   this.OV42PaginaAux = 0 ;
   this.AV27Pagina = 0 ;
   this.AV42PaginaAux = 0 ;
   this.AV18FvEmpresa = "" ;
   this.AV19FvId = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A10618FVId = 0 ;
   this.A10617FVEmpresa = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A10619FVItensSequencia = 0 ;
   this.AV28ProdutoDescricaoResumida = "" ;
   this.AV37Lote1 = "" ;
   this.AV38Lote2 = "" ;
   this.AV39Lote3 = "" ;
   this.AV40Lote4 = "" ;
   this.AV41Lote5 = "" ;
   this.A2965ProdutoId = 0 ;
   this.A10649FVItensLoteCombinacao = "" ;
   this.A10651FVItensQuantidade = 0 ;
   this.A10652FVItensValorUnitario = 0 ;
   this.A10653FVItensDesconto = 0 ;
   this.AV36ValorTotal = 0 ;
   this.AV5BmpAlt = "" ;
   this.AV7BmpExc = "" ;
   this.AV6BmpCons = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.AV11DescLote1 = "" ;
   this.AV30TitLote1 = "" ;
   this.AV12DescLote2 = "" ;
   this.AV31TitLote2 = "" ;
   this.AV13DescLote3 = "" ;
   this.AV32TitLote3 = "" ;
   this.AV14DescLote4 = "" ;
   this.AV33TitLote4 = "" ;
   this.AV15DescLote5 = "" ;
   this.AV34TitLote5 = "" ;
   this.AV17EsquemaCodigo = 0 ;
   this.AV23LoteProdutoCombinacao = "" ;
   this.Events = {"e192822_client": ["'ALTERAR'", true] ,"e202822_client": ["'EXCLUIR'", true] ,"e212822_client": ["'CONSULTAR'", true] ,"e112822_client": ["'FECHAR'", true] ,"e122822_client": ["'GXM_PREVIOUS'", true] ,"e132822_client": ["'GXM_NEXT'", true] ,"e142822_client": ["'GXM_FIRST'", true] ,"e152822_client": ["'GXM_LAST'", true] ,"e222822_client": ["ENTER", true] ,"e232822_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV18FvEmpresa',fld:'vFVEMPRESA'},{av:'AV19FvId',fld:'vFVID'},{av:'AV5BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6BmpCons',fld:'vBMPCONS'},{av:'gx.fn.getCtrlProperty("vBMPCONS","Tooltiptext")',ctrl:'vBMPCONS',prop:'Tooltiptext'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A10652FVItensValorUnitario',fld:'FVITENSVALORUNITARIO'},{av:'A10651FVItensQuantidade',fld:'FVITENSQUANTIDADE'},{av:'A10653FVItensDesconto',fld:'FVITENSDESCONTO'},{av:'A10649FVItensLoteCombinacao',fld:'FVITENSLOTECOMBINACAO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV11DescLote1',fld:'vDESCLOTE1'},{av:'AV30TitLote1',fld:'vTITLOTE1'},{av:'AV12DescLote2',fld:'vDESCLOTE2'},{av:'AV31TitLote2',fld:'vTITLOTE2'},{av:'AV13DescLote3',fld:'vDESCLOTE3'},{av:'AV32TitLote3',fld:'vTITLOTE3'},{av:'AV14DescLote4',fld:'vDESCLOTE4'},{av:'AV33TitLote4',fld:'vTITLOTE4'},{av:'AV15DescLote5',fld:'vDESCLOTE5'},{av:'AV34TitLote5',fld:'vTITLOTE5'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV17EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[]];
   this.EvtParms["GRID1.REFRESH"] = [[{av:'AV27Pagina',fld:'vPAGINA'}],[{av:'AV42PaginaAux',fld:'vPAGINAAUX'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A10652FVItensValorUnitario',fld:'FVITENSVALORUNITARIO'},{av:'A10651FVItensQuantidade',fld:'FVITENSQUANTIDADE'},{av:'A10653FVItensDesconto',fld:'FVITENSDESCONTO'},{av:'A10649FVItensLoteCombinacao',fld:'FVITENSLOTECOMBINACAO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV11DescLote1',fld:'vDESCLOTE1'},{av:'AV30TitLote1',fld:'vTITLOTE1'},{av:'AV12DescLote2',fld:'vDESCLOTE2'},{av:'AV31TitLote2',fld:'vTITLOTE2'},{av:'AV13DescLote3',fld:'vDESCLOTE3'},{av:'AV32TitLote3',fld:'vTITLOTE3'},{av:'AV14DescLote4',fld:'vDESCLOTE4'},{av:'AV33TitLote4',fld:'vTITLOTE4'},{av:'AV15DescLote5',fld:'vDESCLOTE5'},{av:'AV34TitLote5',fld:'vTITLOTE5'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV17EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV28ProdutoDescricaoResumida',fld:'vPRODUTODESCRICAORESUMIDA'},{av:'AV36ValorTotal',fld:'vVALORTOTAL'},{av:'AV23LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV17EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'gx.fn.getCtrlProperty("vLOTE1","Visible")',ctrl:'vLOTE1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTE1","Title")',ctrl:'vLOTE1',prop:'Title'},{av:'AV37Lote1',fld:'vLOTE1'},{av:'gx.fn.getCtrlProperty("vLOTE2","Visible")',ctrl:'vLOTE2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTE2","Title")',ctrl:'vLOTE2',prop:'Title'},{av:'AV38Lote2',fld:'vLOTE2'},{av:'gx.fn.getCtrlProperty("vLOTE3","Visible")',ctrl:'vLOTE3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTE3","Title")',ctrl:'vLOTE3',prop:'Title'},{av:'AV39Lote3',fld:'vLOTE3'},{av:'gx.fn.getCtrlProperty("vLOTE4","Visible")',ctrl:'vLOTE4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTE4","Title")',ctrl:'vLOTE4',prop:'Title'},{av:'AV40Lote4',fld:'vLOTE4'},{av:'gx.fn.getCtrlProperty("vLOTE5","Visible")',ctrl:'vLOTE5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLOTE5","Title")',ctrl:'vLOTE5',prop:'Title'},{av:'AV41Lote5',fld:'vLOTE5'},{av:'AV11DescLote1',fld:'vDESCLOTE1'},{av:'AV12DescLote2',fld:'vDESCLOTE2'},{av:'AV13DescLote3',fld:'vDESCLOTE3'},{av:'AV14DescLote4',fld:'vDESCLOTE4'},{av:'AV15DescLote5',fld:'vDESCLOTE5'},{av:'AV30TitLote1',fld:'vTITLOTE1'},{av:'AV31TitLote2',fld:'vTITLOTE2'},{av:'AV32TitLote3',fld:'vTITLOTE3'},{av:'AV33TitLote4',fld:'vTITLOTE4'},{av:'AV34TitLote5',fld:'vTITLOTE5'},{av:'AV9Cont',fld:'vCONT'},{av:'AV10DescLote',fld:'vDESCLOTE'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV19FvId',fld:'vFVID'},{av:'A10619FVItensSequencia',fld:'FVITENSSEQUENCIA'}],[{av:'A10619FVItensSequencia',fld:'FVITENSSEQUENCIA'},{av:'AV19FvId',fld:'vFVID'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV19FvId',fld:'vFVID'},{av:'A10619FVItensSequencia',fld:'FVITENSSEQUENCIA'}],[{av:'A10619FVItensSequencia',fld:'FVITENSSEQUENCIA'},{av:'AV19FvId',fld:'vFVID'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV19FvId',fld:'vFVID'},{av:'A10619FVItensSequencia',fld:'FVITENSSEQUENCIA'}],[{av:'A10619FVItensSequencia',fld:'FVITENSSEQUENCIA'},{av:'AV19FvId',fld:'vFVID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV18FvEmpresa',fld:'vFVEMPRESA'},{av:'AV19FvId',fld:'vFVID'},{av:'AV5BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6BmpCons',fld:'vBMPCONS'},{av:'gx.fn.getCtrlProperty("vBMPCONS","Tooltiptext")',ctrl:'vBMPCONS',prop:'Tooltiptext'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A10652FVItensValorUnitario',fld:'FVITENSVALORUNITARIO'},{av:'A10651FVItensQuantidade',fld:'FVITENSQUANTIDADE'},{av:'A10653FVItensDesconto',fld:'FVITENSDESCONTO'},{av:'A10649FVItensLoteCombinacao',fld:'FVITENSLOTECOMBINACAO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV11DescLote1',fld:'vDESCLOTE1'},{av:'AV30TitLote1',fld:'vTITLOTE1'},{av:'AV12DescLote2',fld:'vDESCLOTE2'},{av:'AV31TitLote2',fld:'vTITLOTE2'},{av:'AV13DescLote3',fld:'vDESCLOTE3'},{av:'AV32TitLote3',fld:'vTITLOTE3'},{av:'AV14DescLote4',fld:'vDESCLOTE4'},{av:'AV33TitLote4',fld:'vTITLOTE4'},{av:'AV15DescLote5',fld:'vDESCLOTE5'},{av:'AV34TitLote5',fld:'vTITLOTE5'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV17EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV18FvEmpresa',fld:'vFVEMPRESA'},{av:'AV19FvId',fld:'vFVID'},{av:'AV5BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6BmpCons',fld:'vBMPCONS'},{av:'gx.fn.getCtrlProperty("vBMPCONS","Tooltiptext")',ctrl:'vBMPCONS',prop:'Tooltiptext'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A10652FVItensValorUnitario',fld:'FVITENSVALORUNITARIO'},{av:'A10651FVItensQuantidade',fld:'FVITENSQUANTIDADE'},{av:'A10653FVItensDesconto',fld:'FVITENSDESCONTO'},{av:'A10649FVItensLoteCombinacao',fld:'FVITENSLOTECOMBINACAO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV11DescLote1',fld:'vDESCLOTE1'},{av:'AV30TitLote1',fld:'vTITLOTE1'},{av:'AV12DescLote2',fld:'vDESCLOTE2'},{av:'AV31TitLote2',fld:'vTITLOTE2'},{av:'AV13DescLote3',fld:'vDESCLOTE3'},{av:'AV32TitLote3',fld:'vTITLOTE3'},{av:'AV14DescLote4',fld:'vDESCLOTE4'},{av:'AV33TitLote4',fld:'vTITLOTE4'},{av:'AV15DescLote5',fld:'vDESCLOTE5'},{av:'AV34TitLote5',fld:'vTITLOTE5'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV17EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV42PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV18FvEmpresa',fld:'vFVEMPRESA'},{av:'AV19FvId',fld:'vFVID'},{av:'AV5BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6BmpCons',fld:'vBMPCONS'},{av:'gx.fn.getCtrlProperty("vBMPCONS","Tooltiptext")',ctrl:'vBMPCONS',prop:'Tooltiptext'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A10652FVItensValorUnitario',fld:'FVITENSVALORUNITARIO'},{av:'A10651FVItensQuantidade',fld:'FVITENSQUANTIDADE'},{av:'A10653FVItensDesconto',fld:'FVITENSDESCONTO'},{av:'A10649FVItensLoteCombinacao',fld:'FVITENSLOTECOMBINACAO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV11DescLote1',fld:'vDESCLOTE1'},{av:'AV30TitLote1',fld:'vTITLOTE1'},{av:'AV12DescLote2',fld:'vDESCLOTE2'},{av:'AV31TitLote2',fld:'vTITLOTE2'},{av:'AV13DescLote3',fld:'vDESCLOTE3'},{av:'AV32TitLote3',fld:'vTITLOTE3'},{av:'AV14DescLote4',fld:'vDESCLOTE4'},{av:'AV33TitLote4',fld:'vTITLOTE4'},{av:'AV15DescLote5',fld:'vDESCLOTE5'},{av:'AV34TitLote5',fld:'vTITLOTE5'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV17EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV18FvEmpresa',fld:'vFVEMPRESA'},{av:'AV19FvId',fld:'vFVID'},{av:'AV5BmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7BmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6BmpCons',fld:'vBMPCONS'},{av:'gx.fn.getCtrlProperty("vBMPCONS","Tooltiptext")',ctrl:'vBMPCONS',prop:'Tooltiptext'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'A2961ProdutoDescricaoResumida',fld:'PRODUTODESCRICAORESUMIDA'},{av:'A10652FVItensValorUnitario',fld:'FVITENSVALORUNITARIO'},{av:'A10651FVItensQuantidade',fld:'FVITENSQUANTIDADE'},{av:'A10653FVItensDesconto',fld:'FVITENSDESCONTO'},{av:'A10649FVItensLoteCombinacao',fld:'FVITENSLOTECOMBINACAO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV11DescLote1',fld:'vDESCLOTE1'},{av:'AV30TitLote1',fld:'vTITLOTE1'},{av:'AV12DescLote2',fld:'vDESCLOTE2'},{av:'AV31TitLote2',fld:'vTITLOTE2'},{av:'AV13DescLote3',fld:'vDESCLOTE3'},{av:'AV32TitLote3',fld:'vTITLOTE3'},{av:'AV14DescLote4',fld:'vDESCLOTE4'},{av:'AV33TitLote4',fld:'vTITLOTE4'},{av:'AV15DescLote5',fld:'vDESCLOTE5'},{av:'AV34TitLote5',fld:'vTITLOTE5'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV17EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV23LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV42PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.setVCMap("AV18FvEmpresa", "vFVEMPRESA", 0, "char");
   this.setVCMap("AV19FvId", "vFVID", 0, "int");
   this.setVCMap("A2961ProdutoDescricaoResumida", "PRODUTODESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("AV11DescLote1", "vDESCLOTE1", 0, "svchar");
   this.setVCMap("AV30TitLote1", "vTITLOTE1", 0, "svchar");
   this.setVCMap("AV12DescLote2", "vDESCLOTE2", 0, "svchar");
   this.setVCMap("AV31TitLote2", "vTITLOTE2", 0, "svchar");
   this.setVCMap("AV13DescLote3", "vDESCLOTE3", 0, "svchar");
   this.setVCMap("AV32TitLote3", "vTITLOTE3", 0, "svchar");
   this.setVCMap("AV14DescLote4", "vDESCLOTE4", 0, "svchar");
   this.setVCMap("AV33TitLote4", "vTITLOTE4", 0, "svchar");
   this.setVCMap("AV15DescLote5", "vDESCLOTE5", 0, "svchar");
   this.setVCMap("AV34TitLote5", "vTITLOTE5", 0, "svchar");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("AV17EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV23LoteProdutoCombinacao", "vLOTEPRODUTOCOMBINACAO", 0, "char");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("AV18FvEmpresa", "vFVEMPRESA", 0, "char");
   this.setVCMap("AV19FvId", "vFVID", 0, "int");
   this.setVCMap("A2961ProdutoDescricaoResumida", "PRODUTODESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("AV11DescLote1", "vDESCLOTE1", 0, "svchar");
   this.setVCMap("AV30TitLote1", "vTITLOTE1", 0, "svchar");
   this.setVCMap("AV12DescLote2", "vDESCLOTE2", 0, "svchar");
   this.setVCMap("AV31TitLote2", "vTITLOTE2", 0, "svchar");
   this.setVCMap("AV13DescLote3", "vDESCLOTE3", 0, "svchar");
   this.setVCMap("AV32TitLote3", "vTITLOTE3", 0, "svchar");
   this.setVCMap("AV14DescLote4", "vDESCLOTE4", 0, "svchar");
   this.setVCMap("AV33TitLote4", "vTITLOTE4", 0, "svchar");
   this.setVCMap("AV15DescLote5", "vDESCLOTE5", 0, "svchar");
   this.setVCMap("AV34TitLote5", "vTITLOTE5", 0, "svchar");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("AV17EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV23LoteProdutoCombinacao", "vLOTEPRODUTOCOMBINACAO", 0, "char");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV18FvEmpresa"});
   Grid1Container.addRefreshingVar({rfrVar:"AV19FvId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV5BmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV5BmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV7BmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV7BmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV6BmpCons", rfrProp:"Value", gxAttId:"Bmpcons"});
   Grid1Container.addRefreshingVar({rfrVar:"AV6BmpCons", rfrProp:"Tooltiptext", gxAttId:"Bmpcons"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[49]);
   Grid1Container.addRefreshingVar({rfrVar:"A2961ProdutoDescricaoResumida"});
   Grid1Container.addRefreshingVar({rfrVar:"A10652FVItensValorUnitario", rfrProp:"Value", gxAttId:"10652"});
   Grid1Container.addRefreshingVar({rfrVar:"A10651FVItensQuantidade", rfrProp:"Value", gxAttId:"10651"});
   Grid1Container.addRefreshingVar({rfrVar:"A10653FVItensDesconto", rfrProp:"Value", gxAttId:"10653"});
   Grid1Container.addRefreshingVar({rfrVar:"A10649FVItensLoteCombinacao", rfrProp:"Value", gxAttId:"10649"});
   Grid1Container.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11DescLote1"});
   Grid1Container.addRefreshingVar({rfrVar:"AV30TitLote1"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12DescLote2"});
   Grid1Container.addRefreshingVar({rfrVar:"AV31TitLote2"});
   Grid1Container.addRefreshingVar({rfrVar:"AV13DescLote3"});
   Grid1Container.addRefreshingVar({rfrVar:"AV32TitLote3"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14DescLote4"});
   Grid1Container.addRefreshingVar({rfrVar:"AV33TitLote4"});
   Grid1Container.addRefreshingVar({rfrVar:"AV15DescLote5"});
   Grid1Container.addRefreshingVar({rfrVar:"AV34TitLote5"});
   Grid1Container.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17EsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV23LoteProdutoCombinacao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   Grid1Container.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2938ValorAtributoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaforcavendaitens());
