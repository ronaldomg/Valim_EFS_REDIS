/**@preserve  GeneXus Java 10_3_12-110051 on July 11, 2020 7:45:57.49
*/
gx.evt.autoSkip = false;
gx.define('hfaturarvendaproduto', false, function () {
   this.ServerClass =  "hfaturarvendaproduto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV45SdtAdvertencia=gx.fn.getControlValue("vSDTADVERTENCIA") ;
      this.AV50SnLoteUnico=gx.fn.getControlValue("vSNLOTEUNICO") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.AV37ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",'.') ;
      this.AV39ProdutoIdAux=gx.fn.getIntegerValue("vPRODUTOIDAUX",'.') ;
      this.A2915EsquemaCodigo=gx.fn.getIntegerValue("ESQUEMACODIGO",'.') ;
      this.A2921AtributoEsquemaCodigo=gx.fn.getIntegerValue("ATRIBUTOESQUEMACODIGO",'.') ;
      this.A2917AtributoEsquemaSnCadastrado=gx.fn.getControlValue("ATRIBUTOESQUEMASNCADASTRADO") ;
      this.A2941ValorAtributoCodigo=gx.fn.getIntegerValue("VALORATRIBUTOCODIGO",'.') ;
      this.AV30LoteProdutoCombinacaoLinha=gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAOLINHA") ;
      this.A2938ValorAtributoDescricao=gx.fn.getControlValue("VALORATRIBUTODESCRICAO") ;
      this.A2916AtributoEsquemaDescricao=gx.fn.getControlValue("ATRIBUTOESQUEMADESCRICAO") ;
      this.AV28Idx=gx.fn.getIntegerValue("vIDX",'.') ;
      this.AV6FilialId=gx.fn.getIntegerValue("vFILIALID",'.') ;
   };
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
   this.Validv_Produtoidtela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOIDTELA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112h52_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e162h52_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e122h52_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e132h52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e142h52_client=function()
   {
      this.executeServerEvent("'PROMPT'", true, null, false, false);
   };
   this.e192h52_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,32,35,38,40,41,42,45,47,53,54,55,56,57,58,59,60,61,62,68,69,70];
   this.GXLastCtrlId =70;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",52,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hfaturarvendaproduto",[],false,1,false,true,0,false,false,false,"CollItemDev.ItemDevItem",0,"px","Novo registro",false,false,false,null,null,false,"AV45SdtAdvertencia",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV11H",53,"CTLPRODUTOID"," Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],"GXV11H","GXV11H",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11I",54,"CTLPRODUTODESCRICAO","Descrição","","ProdutoDescricao","svchar",0,"px",120,80,"left",null,[],"GXV11I","GXV11I",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Edit1",55,"vEDIT1","","","Edit1","char",0,"px",15,15,"left",null,[],"Edit1","Edit1",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Edit2",56,"vEDIT2","","","Edit2","char",0,"px",15,15,"left",null,[],"Edit2","Edit2",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Edit3",57,"vEDIT3","","","Edit3","char",0,"px",15,15,"left",null,[],"Edit3","Edit3",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Edit4",58,"vEDIT4","","","Edit4","char",0,"px",15,15,"left",null,[],"Edit4","Edit4",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Edit5",59,"vEDIT5","","","Edit5","char",0,"px",15,15,"left",null,[],"Edit5","Edit5",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11O",60,"CTLPRODUTOLOTECOMBINACAO","Combinação Lote","","ProdutoLoteCombinacao","char",0,"px",20,20,"left",null,[],"GXV11O","GXV11O",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11P",61,"CTLQUANTIDADE","Quantidade","","Quantidade","decimal",0,"px",21,21,"right",null,[],"GXV11P","GXV11P",true,4,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",62,0,"px",17,"px","e162h52_client","","Exc","Image","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV38ProdutoId",gxold:"OV38ProdutoId",gxvar:"AV38ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV38ProdutoId,0)},c2v:function(){gx.O.AV38ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV35ProdutoDescricaoResumida",gxold:"OV35ProdutoDescricaoResumida",gxvar:"AV35ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV35ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV35ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV35ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAITEMQUANTIDADE",gxz:"ZV42SaidaItemQuantidade",gxold:"OV42SaidaItemQuantidade",gxvar:"AV42SaidaItemQuantidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SaidaItemQuantidade=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV42SaidaItemQuantidade=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSAIDAITEMQUANTIDADE",gx.O.AV42SaidaItemQuantidade,4,',')},c2v:function(){gx.O.AV42SaidaItemQuantidade=this.val()},val:function(){return gx.fn.getDecimalValue("vSAIDAITEMQUANTIDADE",'.',',')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDERESTANTE",gxz:"ZV41QtdeRestante",gxold:"OV41QtdeRestante",gxvar:"AV41QtdeRestante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41QtdeRestante=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV41QtdeRestante=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vQTDERESTANTE",gx.O.AV41QtdeRestante,4,',')},c2v:function(){gx.O.AV41QtdeRestante=this.val()},val:function(){return gx.fn.getDecimalValue("vQTDERESTANTE",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE6",grid:0};
   GXValidFnc[35]={fld:"TABLE8",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoidtela,isvalid:null,rgrid:[],fld:"vPRODUTOIDTELA",gxz:"ZV40ProdutoIdTela",gxold:"OV40ProdutoIdTela",gxvar:"AV40ProdutoIdTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ProdutoIdTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40ProdutoIdTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOIDTELA",gx.O.AV40ProdutoIdTela,0)},c2v:function(){gx.O.AV40ProdutoIdTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOIDTELA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNPROMPT",grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDATELA",gxz:"ZV36ProdutoDescricaoResumidaTela",gxold:"OV36ProdutoDescricaoResumidaTela",gxvar:"AV36ProdutoDescricaoResumidaTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ProdutoDescricaoResumidaTela=Value},v2z:function(Value){gx.O.ZV36ProdutoDescricaoResumidaTela=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDATELA",gx.O.AV36ProdutoDescricaoResumidaTela,0)},c2v:function(){gx.O.AV36ProdutoDescricaoResumidaTela=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDATELA")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAITEMQUANTIDADETELA",gxz:"ZV43SaidaItemQuantidadeTela",gxold:"OV43SaidaItemQuantidadeTela",gxvar:"AV43SaidaItemQuantidadeTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43SaidaItemQuantidadeTela=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV43SaidaItemQuantidadeTela=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vSAIDAITEMQUANTIDADETELA",gx.O.AV43SaidaItemQuantidadeTela,4,',')},c2v:function(){gx.O.AV43SaidaItemQuantidadeTela=this.val()},val:function(){return gx.fn.getDecimalValue("vSAIDAITEMQUANTIDADETELA",'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:52,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOID",gxz:"ZV57GXV11H",gxold:"OV57GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11H=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57GXV11H=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11H,0)},c2v:function(){gx.O.GXV11H=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPRODUTOID",row || gx.fn.currentGridRowImpl(52),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:120,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTODESCRICAO",gxz:"ZV58GXV11I",gxold:"OV58GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11I=Value},v2z:function(Value){gx.O.ZV58GXV11I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTODESCRICAO",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT1",gxz:"ZV22Edit1",gxold:"OV22Edit1",gxvar:"AV22Edit1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV22Edit1=Value},v2z:function(Value){gx.O.ZV22Edit1=Value},v2c:function(row){gx.fn.setGridControlValue("vEDIT1",row || gx.fn.currentGridRowImpl(52),gx.O.AV22Edit1,0)},c2v:function(){gx.O.AV22Edit1=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDIT1",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT2",gxz:"ZV23Edit2",gxold:"OV23Edit2",gxvar:"AV23Edit2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23Edit2=Value},v2z:function(Value){gx.O.ZV23Edit2=Value},v2c:function(row){gx.fn.setGridControlValue("vEDIT2",row || gx.fn.currentGridRowImpl(52),gx.O.AV23Edit2,0)},c2v:function(){gx.O.AV23Edit2=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDIT2",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT3",gxz:"ZV24Edit3",gxold:"OV24Edit3",gxvar:"AV24Edit3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV24Edit3=Value},v2z:function(Value){gx.O.ZV24Edit3=Value},v2c:function(row){gx.fn.setGridControlValue("vEDIT3",row || gx.fn.currentGridRowImpl(52),gx.O.AV24Edit3,0)},c2v:function(){gx.O.AV24Edit3=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDIT3",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT4",gxz:"ZV25Edit4",gxold:"OV25Edit4",gxvar:"AV25Edit4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV25Edit4=Value},v2z:function(Value){gx.O.ZV25Edit4=Value},v2c:function(row){gx.fn.setGridControlValue("vEDIT4",row || gx.fn.currentGridRowImpl(52),gx.O.AV25Edit4,0)},c2v:function(){gx.O.AV25Edit4=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDIT4",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT5",gxz:"ZV26Edit5",gxold:"OV26Edit5",gxvar:"AV26Edit5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV26Edit5=Value},v2z:function(Value){gx.O.ZV26Edit5=Value},v2c:function(row){gx.fn.setGridControlValue("vEDIT5",row || gx.fn.currentGridRowImpl(52),gx.O.AV26Edit5,0)},c2v:function(){gx.O.AV26Edit5=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDIT5",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOLOTECOMBINACAO",gxz:"ZV59GXV11O",gxold:"OV59GXV11O",gxvar:"GXV11O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11O=Value},v2z:function(Value){gx.O.ZV59GXV11O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOLOTECOMBINACAO",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11O,0)},c2v:function(){gx.O.GXV11O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOLOTECOMBINACAO",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:52,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLQUANTIDADE",gxz:"ZV60GXV11P",gxold:"OV60GXV11P",gxvar:"GXV11P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11P=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV60GXV11P=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLQUANTIDADE",row || gx.fn.currentGridRowImpl(52),gx.O.GXV11P,4,',')},c2v:function(){gx.O.GXV11P=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLQUANTIDADE",row || gx.fn.currentGridRowImpl(52),'.',',')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV17bmpExc",gxold:"OV17bmpExc",gxvar:"AV17bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17bmpExc=Value},v2z:function(Value){gx.O.ZV17bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(52),gx.O.AV17bmpExc,gx.O.AV66Bmpexc_GXI)},c2v:function(){gx.O.AV66Bmpexc_GXI=this.val_GXI();gx.O.AV17bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV66Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNLOTEESCOLHIDO",gxz:"ZV49SnLoteEscolhido",gxold:"OV49SnLoteEscolhido",gxvar:"AV49SnLoteEscolhido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49SnLoteEscolhido=Value},v2z:function(Value){gx.O.ZV49SnLoteEscolhido=Value},v2c:function(){gx.fn.setControlValue("vSNLOTEESCOLHIDO",gx.O.AV49SnLoteEscolhido,0)},c2v:function(){gx.O.AV49SnLoteEscolhido=this.val()},val:function(){return gx.fn.getControlValue("vSNLOTEESCOLHIDO")},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:14,dec:0,sign:false,pic:"ZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOBARRAS",gxz:"ZV33ProdutoCodigoBarras",gxold:"OV33ProdutoCodigoBarras",gxvar:"AV33ProdutoCodigoBarras",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ProdutoCodigoBarras=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33ProdutoCodigoBarras=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOBARRAS",gx.O.AV33ProdutoCodigoBarras,0)},c2v:function(){gx.O.AV33ProdutoCodigoBarras=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOBARRAS",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV10LoteProdutoCombinacao",gxold:"OV10LoteProdutoCombinacao",gxvar:"AV10LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV10LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV10LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV10LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   this.AV38ProdutoId = 0 ;
   this.ZV38ProdutoId = 0 ;
   this.OV38ProdutoId = 0 ;
   this.AV35ProdutoDescricaoResumida = "" ;
   this.ZV35ProdutoDescricaoResumida = "" ;
   this.OV35ProdutoDescricaoResumida = "" ;
   this.AV42SaidaItemQuantidade = 0 ;
   this.ZV42SaidaItemQuantidade = 0 ;
   this.OV42SaidaItemQuantidade = 0 ;
   this.AV41QtdeRestante = 0 ;
   this.ZV41QtdeRestante = 0 ;
   this.OV41QtdeRestante = 0 ;
   this.AV40ProdutoIdTela = 0 ;
   this.ZV40ProdutoIdTela = 0 ;
   this.OV40ProdutoIdTela = 0 ;
   this.AV36ProdutoDescricaoResumidaTela = "" ;
   this.ZV36ProdutoDescricaoResumidaTela = "" ;
   this.OV36ProdutoDescricaoResumidaTela = "" ;
   this.AV43SaidaItemQuantidadeTela = 0 ;
   this.ZV43SaidaItemQuantidadeTela = 0 ;
   this.OV43SaidaItemQuantidadeTela = 0 ;
   this.ZV57GXV11H = 0 ;
   this.OV57GXV11H = 0 ;
   this.ZV58GXV11I = "" ;
   this.OV58GXV11I = "" ;
   this.ZV22Edit1 = "" ;
   this.OV22Edit1 = "" ;
   this.ZV23Edit2 = "" ;
   this.OV23Edit2 = "" ;
   this.ZV24Edit3 = "" ;
   this.OV24Edit3 = "" ;
   this.ZV25Edit4 = "" ;
   this.OV25Edit4 = "" ;
   this.ZV26Edit5 = "" ;
   this.OV26Edit5 = "" ;
   this.ZV59GXV11O = "" ;
   this.OV59GXV11O = "" ;
   this.ZV60GXV11P = 0 ;
   this.OV60GXV11P = 0 ;
   this.ZV17bmpExc = "" ;
   this.OV17bmpExc = "" ;
   this.AV49SnLoteEscolhido = "" ;
   this.ZV49SnLoteEscolhido = "" ;
   this.OV49SnLoteEscolhido = "" ;
   this.AV33ProdutoCodigoBarras = 0 ;
   this.ZV33ProdutoCodigoBarras = 0 ;
   this.OV33ProdutoCodigoBarras = 0 ;
   this.AV10LoteProdutoCombinacao = "" ;
   this.ZV10LoteProdutoCombinacao = "" ;
   this.OV10LoteProdutoCombinacao = "" ;
   this.AV38ProdutoId = 0 ;
   this.AV35ProdutoDescricaoResumida = "" ;
   this.AV42SaidaItemQuantidade = 0 ;
   this.AV41QtdeRestante = 0 ;
   this.AV40ProdutoIdTela = 0 ;
   this.AV36ProdutoDescricaoResumidaTela = "" ;
   this.AV43SaidaItemQuantidadeTela = 0 ;
   this.AV49SnLoteEscolhido = "" ;
   this.AV33ProdutoCodigoBarras = 0 ;
   this.AV10LoteProdutoCombinacao = "" ;
   this.AV28Idx = 0 ;
   this.AV6FilialId = 0 ;
   this.GXV11H = 0 ;
   this.GXV11I = "" ;
   this.AV22Edit1 = "" ;
   this.AV23Edit2 = "" ;
   this.AV24Edit3 = "" ;
   this.AV25Edit4 = "" ;
   this.AV26Edit5 = "" ;
   this.GXV11O = "" ;
   this.GXV11P = 0 ;
   this.AV17bmpExc = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3645LoteProdutoQtdeAtual = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.A3644LoteProdutoCodigoBarras = 0 ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.AV45SdtAdvertencia = [ ] ;
   this.AV50SnLoteUnico = "" ;
   this.AV37ProdutoEmpresaId = "" ;
   this.AV39ProdutoIdAux = 0 ;
   this.AV30LoteProdutoCombinacaoLinha = "" ;
   this.Events = {"e112h52_client": ["ENTER", true] ,"e162h52_client": ["'EXCLUIR'", true] ,"e122h52_client": ["'CONFIRMAR'", true] ,"e132h52_client": ["'FECHAR'", true] ,"e142h52_client": ["'PROMPT'", true] ,"e192h52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV17bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV50SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV39ProdutoIdAux',fld:'vPRODUTOIDAUX'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV30LoteProdutoCombinacaoLinha',fld:'vLOTEPRODUTOCOMBINACAOLINHA'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV42SaidaItemQuantidade',fld:'vSAIDAITEMQUANTIDADE',hsh:true},{av:'AV45SdtAdvertencia',fld:'vSDTADVERTENCIA',grid:52},{av:'AV49SnLoteEscolhido',fld:'vSNLOTEESCOLHIDO'},{av:'AV40ProdutoIdTela',fld:'vPRODUTOIDTELA'},{av:'AV36ProdutoDescricaoResumidaTela',fld:'vPRODUTODESCRICAORESUMIDATELA'},{av:'AV43SaidaItemQuantidadeTela',fld:'vSAIDAITEMQUANTIDADETELA'},{av:'AV10LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'}],[{av:'AV41QtdeRestante',fld:'vQTDERESTANTE'},{av:'AV71GXV5',fld:'vGXV5'},{av:'AV47SdtAdvertenciaItem',fld:'vSDTADVERTENCIAITEM'},{av:'AV49SnLoteEscolhido',fld:'vSNLOTEESCOLHIDO'},{av:'AV45SdtAdvertencia',fld:'vSDTADVERTENCIA',grid:52},{av:'AV40ProdutoIdTela',fld:'vPRODUTOIDTELA'},{av:'AV36ProdutoDescricaoResumidaTela',fld:'vPRODUTODESCRICAORESUMIDATELA'},{av:'AV43SaidaItemQuantidadeTela',fld:'vSAIDAITEMQUANTIDADETELA'},{av:'AV14ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV33ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV10LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'}]];
   this.EvtParms["'PROMPT'"] = [[{av:'AV6FilialId',fld:'vFILIALID',hsh:true},{av:'Gx_date',fld:'vTODAY'},{av:'AV11PrecoId',fld:'vPRECOID'},{av:'AV12ProdutoCategoria',fld:'vPRODUTOCATEGORIA'},{av:'AV38ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV7GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV15SubGrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'}],[{av:'AV33ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'AV14ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV10LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV13ProdutoCodigoId',fld:'vPRODUTOCODIGOID'},{av:'AV15SubGrupoProdutoId',fld:'vSUBGRUPOPRODUTOID'},{av:'AV7GrupoProdutoId',fld:'vGRUPOPRODUTOID'},{av:'AV40ProdutoIdTela',fld:'vPRODUTOIDTELA'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV17bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV42SaidaItemQuantidade',fld:'vSAIDAITEMQUANTIDADE',hsh:true},{av:'AV45SdtAdvertencia',fld:'vSDTADVERTENCIA',grid:52},{av:'AV49SnLoteEscolhido',fld:'vSNLOTEESCOLHIDO'},{av:'AV40ProdutoIdTela',fld:'vPRODUTOIDTELA'},{av:'AV36ProdutoDescricaoResumidaTela',fld:'vPRODUTODESCRICAORESUMIDATELA'},{av:'AV43SaidaItemQuantidadeTela',fld:'vSAIDAITEMQUANTIDADETELA'},{av:'AV10LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV50SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV39ProdutoIdAux',fld:'vPRODUTOIDAUX'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV30LoteProdutoCombinacaoLinha',fld:'vLOTEPRODUTOCOMBINACAOLINHA'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'},{av:'AV8hasErro',fld:'vHASERRO'},{av:'A3624LoteProdutoCombinacao',fld:'LOTEPRODUTOCOMBINACAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV27FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'AV6FilialId',fld:'vFILIALID',hsh:true},{av:'A3645LoteProdutoQtdeAtual',fld:'LOTEPRODUTOQTDEATUAL'},{av:'AV33ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'},{av:'A3644LoteProdutoCodigoBarras',fld:'LOTEPRODUTOCODIGOBARRAS'}],[{av:'AV50SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV20Count',fld:'vCOUNT'},{av:'AV10LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV49SnLoteEscolhido',fld:'vSNLOTEESCOLHIDO'},{av:'AV8hasErro',fld:'vHASERRO'},{av:'AV31MsgErro',fld:'vMSGERRO'},{av:'AV48SnExisteReg',fld:'vSNEXISTEREG'},{av:'AV34ProdutoCodigoBarrasPr',fld:'vPRODUTOCODIGOBARRASPR'},{av:'AV14ProdutoReferencia',fld:'vPRODUTOREFERENCIA'},{av:'AV36ProdutoDescricaoResumidaTela',fld:'vPRODUTODESCRICAORESUMIDATELA'},{av:'AV44SaidaQuantidade',fld:'vSAIDAQUANTIDADE'},{av:'AV68GXV4',fld:'vGXV4'},{av:'AV47SdtAdvertenciaItem',fld:'vSDTADVERTENCIAITEM'},{av:'AV45SdtAdvertencia',fld:'vSDTADVERTENCIA',grid:52},{av:'AV40ProdutoIdTela',fld:'vPRODUTOIDTELA'},{av:'AV43SaidaItemQuantidadeTela',fld:'vSAIDAITEMQUANTIDADETELA'},{av:'AV33ProdutoCodigoBarras',fld:'vPRODUTOCODIGOBARRAS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV45SdtAdvertencia',fld:'vSDTADVERTENCIA',grid:52},{av:'AV40ProdutoIdTela',fld:'vPRODUTOIDTELA'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV17bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV42SaidaItemQuantidade',fld:'vSAIDAITEMQUANTIDADE',hsh:true},{av:'AV49SnLoteEscolhido',fld:'vSNLOTEESCOLHIDO'},{av:'AV36ProdutoDescricaoResumidaTela',fld:'vPRODUTODESCRICAORESUMIDATELA'},{av:'AV43SaidaItemQuantidadeTela',fld:'vSAIDAITEMQUANTIDADETELA'},{av:'AV10LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV50SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV39ProdutoIdAux',fld:'vPRODUTOIDAUX'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV30LoteProdutoCombinacaoLinha',fld:'vLOTEPRODUTOCOMBINACAOLINHA'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV45SdtAdvertencia',fld:'vSDTADVERTENCIA',grid:52}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV45SdtAdvertencia',fld:'vSDTADVERTENCIA',grid:52},{av:'AV50SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV37ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID',hsh:true},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV39ProdutoIdAux',fld:'vPRODUTOIDAUX'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'A2917AtributoEsquemaSnCadastrado',fld:'ATRIBUTOESQUEMASNCADASTRADO'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'AV30LoteProdutoCombinacaoLinha',fld:'vLOTEPRODUTOCOMBINACAOLINHA'},{av:'A2938ValorAtributoDescricao',fld:'VALORATRIBUTODESCRICAO'},{av:'A2916AtributoEsquemaDescricao',fld:'ATRIBUTOESQUEMADESCRICAO'}],[{av:'AV39ProdutoIdAux',fld:'vPRODUTOIDAUX'},{av:'AV30LoteProdutoCombinacaoLinha',fld:'vLOTEPRODUTOCOMBINACAOLINHA'},{av:'AV5EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV22Edit1',fld:'vEDIT1'},{av:'AV23Edit2',fld:'vEDIT2'},{av:'AV24Edit3',fld:'vEDIT3'},{av:'AV25Edit4',fld:'vEDIT4'},{av:'AV26Edit5',fld:'vEDIT5'},{av:'AV20Count',fld:'vCOUNT'},{av:'gx.fn.getCtrlProperty("vEDIT1","Title")',ctrl:'vEDIT1',prop:'Title'},{av:'gx.fn.getCtrlProperty("vEDIT1","Visible")',ctrl:'vEDIT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT2","Title")',ctrl:'vEDIT2',prop:'Title'},{av:'gx.fn.getCtrlProperty("vEDIT2","Visible")',ctrl:'vEDIT2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT3","Visible")',ctrl:'vEDIT3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT3","Title")',ctrl:'vEDIT3',prop:'Title'},{av:'gx.fn.getCtrlProperty("vEDIT4","Visible")',ctrl:'vEDIT4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT4","Title")',ctrl:'vEDIT4',prop:'Title'},{av:'gx.fn.getCtrlProperty("vEDIT5","Visible")',ctrl:'vEDIT5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT5","Title")',ctrl:'vEDIT5',prop:'Title'}]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV28Idx',fld:'vIDX',hsh:true},{av:'AV45SdtAdvertencia',fld:'vSDTADVERTENCIA',grid:52}],[{av:'AV46SdtAdvertenciaAux',fld:'vSDTADVERTENCIAAUX'},{av:'AV79GXV6',fld:'vGXV6'},{av:'AV53SdtAdvertenciaItemAux',fld:'vSDTADVERTENCIAITEMAUX'},{av:'AV80GXV7',fld:'vGXV7'},{av:'AV47SdtAdvertenciaItem',fld:'vSDTADVERTENCIAITEM'},{av:'AV52SdtProdutoAdv',fld:'vSDTPRODUTOADV'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON2"];
   this.setVCMap("AV45SdtAdvertencia", "vSDTADVERTENCIA", 0, "CollItemDev.ItemDevItem");
   this.setVCMap("AV50SnLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV37ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("AV39ProdutoIdAux", "vPRODUTOIDAUX", 0, "int");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("AV30LoteProdutoCombinacaoLinha", "vLOTEPRODUTOCOMBINACAOLINHA", 0, "char");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   this.setVCMap("AV28Idx", "vIDX", 0, "int");
   this.setVCMap("AV6FilialId", "vFILIALID", 0, "int");
   this.setVCMap("AV45SdtAdvertencia", "vSDTADVERTENCIA", 0, "CollItemDev.ItemDevItem");
   this.setVCMap("AV50SnLoteUnico", "vSNLOTEUNICO", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV37ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A2965ProdutoId", "PRODUTOID", 0, "int");
   this.setVCMap("AV39ProdutoIdAux", "vPRODUTOIDAUX", 0, "int");
   this.setVCMap("A2915EsquemaCodigo", "ESQUEMACODIGO", 0, "int");
   this.setVCMap("A2921AtributoEsquemaCodigo", "ATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("A2917AtributoEsquemaSnCadastrado", "ATRIBUTOESQUEMASNCADASTRADO", 0, "char");
   this.setVCMap("A2941ValorAtributoCodigo", "VALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("AV30LoteProdutoCombinacaoLinha", "vLOTEPRODUTOCOMBINACAOLINHA", 0, "char");
   this.setVCMap("A2938ValorAtributoDescricao", "VALORATRIBUTODESCRICAO", 0, "char");
   this.setVCMap("A2916AtributoEsquemaDescricao", "ATRIBUTOESQUEMADESCRICAO", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV17bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[22]);
   Grid1Container.addRefreshingVar({rfrVar:"AV45SdtAdvertencia"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[68]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[40]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[42]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[47]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[70]);
   Grid1Container.addRefreshingVar({rfrVar:"AV50SnLoteUnico"});
   Grid1Container.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV37ProdutoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2965ProdutoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV39ProdutoIdAux"});
   Grid1Container.addRefreshingVar({rfrVar:"A2915EsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2921AtributoEsquemaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A2917AtributoEsquemaSnCadastrado"});
   Grid1Container.addRefreshingVar({rfrVar:"A2941ValorAtributoCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV30LoteProdutoCombinacaoLinha"});
   Grid1Container.addRefreshingVar({rfrVar:"A2938ValorAtributoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A2916AtributoEsquemaDescricao"});
   this.addGridBCProperty("Sdtadvertencia", ["ProdutoId"], this.GXValidFnc[53], "AV45SdtAdvertencia");
   this.addGridBCProperty("Sdtadvertencia", ["ProdutoDescricao"], this.GXValidFnc[54], "AV45SdtAdvertencia");
   this.addGridBCProperty("Sdtadvertencia", ["ProdutoLoteCombinacao"], this.GXValidFnc[60], "AV45SdtAdvertencia");
   this.addGridBCProperty("Sdtadvertencia", ["Quantidade"], this.GXValidFnc[61], "AV45SdtAdvertencia");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfaturarvendaproduto());
