/**@preserve  GeneXus Java 10_3_12-110051 on July 11, 2020 7:46:1.47
*/
gx.evt.autoSkip = false;
gx.define('hfaturarvendalote', false, function () {
   this.ServerClass =  "hfaturarvendalote" ;
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
      this.AV26ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.AV19FilialEmpresaId=gx.fn.getControlValue("vFILIALEMPRESAID") ;
      this.AV28OutLoteProdutoCombinacao=gx.fn.getControlValue("vOUTLOTEPRODUTOCOMBINACAO") ;
      this.AV29SnLoteEscolhido=gx.fn.getControlValue("vSNLOTEESCOLHIDO") ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
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
   this.Validv_Esquemacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vESQUEMACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112h62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132h62_client=function()
   {
      this.executeServerEvent("'RETORNO'", true, arguments[0], false, false);
   };
   this.e152h62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e162h62_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,17,23,24,25,26,27,28,29,30,36];
   this.GXLastCtrlId =36;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",22,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hfaturarvendalote",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Edit1",23,"vEDIT1","","","Edit1","char",0,"px",15,15,"left","e132h62_client",[],"Edit1","Edit1",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Edit2",24,"vEDIT2","","","Edit2","char",0,"px",15,15,"left",null,[],"Edit2","Edit2",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Edit3",25,"vEDIT3","","","Edit3","char",0,"px",15,15,"left",null,[],"Edit3","Edit3",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Edit4",26,"vEDIT4","","","Edit4","char",0,"px",15,15,"left",null,[],"Edit4","Edit4",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Edit5",27,"vEDIT5","","","Edit5","char",0,"px",15,15,"left",null,[],"Edit5","Edit5",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Loteprodutocombinacao",28,"vLOTEPRODUTOCOMBINACAO","Lote","","LoteProdutoCombinacao","char",0,"px",20,20,"left",null,[],"Loteprodutocombinacao","LoteProdutoCombinacao",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Loteprodutoqtdeatual",29,"vLOTEPRODUTOQTDEATUAL","Quantidade","","LoteProdutoQtdeAtual","decimal",0,"px",21,21,"right",null,[],"Loteprodutoqtdeatual","LoteProdutoQtdeAtual",true,4,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Loteprodutovencimento",30,"vLOTEPRODUTOVENCIMENTO","Vencimento","","LoteProdutoVencimento","date",0,"px",10,10,"right",null,[],"Loteprodutovencimento","LoteProdutoVencimento",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV20FilialId",gxold:"OV20FilialId",gxvar:"AV20FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV20FilialId,0)},c2v:function(){gx.O.AV20FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV21FilialNome",gxold:"OV21FilialNome",gxvar:"AV21FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21FilialNome=Value},v2z:function(Value){gx.O.ZV21FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV21FilialNome,0)},c2v:function(){gx.O.AV21FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV27ProdutoId",gxold:"OV27ProdutoId",gxvar:"AV27ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV27ProdutoId,0)},c2v:function(){gx.O.AV27ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV25ProdutoDescricaoResumida",gxold:"OV25ProdutoDescricaoResumida",gxvar:"AV25ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV25ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV25ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV25ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:22,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT1",gxz:"ZV13Edit1",gxold:"OV13Edit1",gxvar:"AV13Edit1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV13Edit1=Value},v2z:function(Value){gx.O.ZV13Edit1=Value},v2c:function(row){gx.fn.setGridControlValue("vEDIT1",row || gx.fn.currentGridRowImpl(22),gx.O.AV13Edit1,0)},c2v:function(){gx.O.AV13Edit1=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDIT1",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:22,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT2",gxz:"ZV14Edit2",gxold:"OV14Edit2",gxvar:"AV14Edit2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV14Edit2=Value},v2z:function(Value){gx.O.ZV14Edit2=Value},v2c:function(row){gx.fn.setGridControlValue("vEDIT2",row || gx.fn.currentGridRowImpl(22),gx.O.AV14Edit2,0)},c2v:function(){gx.O.AV14Edit2=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDIT2",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:22,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT3",gxz:"ZV15Edit3",gxold:"OV15Edit3",gxvar:"AV15Edit3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV15Edit3=Value},v2z:function(Value){gx.O.ZV15Edit3=Value},v2c:function(row){gx.fn.setGridControlValue("vEDIT3",row || gx.fn.currentGridRowImpl(22),gx.O.AV15Edit3,0)},c2v:function(){gx.O.AV15Edit3=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDIT3",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:22,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT4",gxz:"ZV16Edit4",gxold:"OV16Edit4",gxvar:"AV16Edit4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16Edit4=Value},v2z:function(Value){gx.O.ZV16Edit4=Value},v2c:function(row){gx.fn.setGridControlValue("vEDIT4",row || gx.fn.currentGridRowImpl(22),gx.O.AV16Edit4,0)},c2v:function(){gx.O.AV16Edit4=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDIT4",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:22,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vEDIT5",gxz:"ZV17Edit5",gxold:"OV17Edit5",gxvar:"AV17Edit5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17Edit5=Value},v2z:function(Value){gx.O.ZV17Edit5=Value},v2c:function(row){gx.fn.setGridControlValue("vEDIT5",row || gx.fn.currentGridRowImpl(22),gx.O.AV17Edit5,0)},c2v:function(){gx.O.AV17Edit5=this.val()},val:function(row){return gx.fn.getGridControlValue("vEDIT5",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:22,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV23LoteProdutoCombinacao",gxold:"OV23LoteProdutoCombinacao",gxvar:"AV23LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV23LoteProdutoCombinacao=Value},v2c:function(row){gx.fn.setGridControlValue("vLOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(22),gx.O.AV23LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV23LoteProdutoCombinacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vLOTEPRODUTOCOMBINACAO",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,isacc:0,grid:22,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOQTDEATUAL",gxz:"ZV6LoteProdutoQtdeAtual",gxold:"OV6LoteProdutoQtdeAtual",gxvar:"AV6LoteProdutoQtdeAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6LoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV6LoteProdutoQtdeAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vLOTEPRODUTOQTDEATUAL",row || gx.fn.currentGridRowImpl(22),gx.O.AV6LoteProdutoQtdeAtual,4,',')},c2v:function(){gx.O.AV6LoteProdutoQtdeAtual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vLOTEPRODUTOQTDEATUAL",row || gx.fn.currentGridRowImpl(22),'.',',')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:22,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOVENCIMENTO",gxz:"ZV24LoteProdutoVencimento",gxold:"OV24LoteProdutoVencimento",gxvar:"AV24LoteProdutoVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24LoteProdutoVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24LoteProdutoVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vLOTEPRODUTOVENCIMENTO",row || gx.fn.currentGridRowImpl(22),gx.O.AV24LoteProdutoVencimento,0)},c2v:function(){gx.O.AV24LoteProdutoVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vLOTEPRODUTOVENCIMENTO",row || gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Esquemacodigo,isvalid:null,rgrid:[],fld:"vESQUEMACODIGO",gxz:"ZV18EsquemaCodigo",gxold:"OV18EsquemaCodigo",gxvar:"AV18EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vESQUEMACODIGO",gx.O.AV18EsquemaCodigo,0)},c2v:function(){gx.O.AV18EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vESQUEMACODIGO",'.')},nac:gx.falseFn};
   this.AV20FilialId = 0 ;
   this.ZV20FilialId = 0 ;
   this.OV20FilialId = 0 ;
   this.AV21FilialNome = "" ;
   this.ZV21FilialNome = "" ;
   this.OV21FilialNome = "" ;
   this.AV27ProdutoId = 0 ;
   this.ZV27ProdutoId = 0 ;
   this.OV27ProdutoId = 0 ;
   this.AV25ProdutoDescricaoResumida = "" ;
   this.ZV25ProdutoDescricaoResumida = "" ;
   this.OV25ProdutoDescricaoResumida = "" ;
   this.ZV13Edit1 = "" ;
   this.OV13Edit1 = "" ;
   this.ZV14Edit2 = "" ;
   this.OV14Edit2 = "" ;
   this.ZV15Edit3 = "" ;
   this.OV15Edit3 = "" ;
   this.ZV16Edit4 = "" ;
   this.OV16Edit4 = "" ;
   this.ZV17Edit5 = "" ;
   this.OV17Edit5 = "" ;
   this.ZV23LoteProdutoCombinacao = "" ;
   this.OV23LoteProdutoCombinacao = "" ;
   this.ZV6LoteProdutoQtdeAtual = 0 ;
   this.OV6LoteProdutoQtdeAtual = 0 ;
   this.ZV24LoteProdutoVencimento = gx.date.nullDate() ;
   this.OV24LoteProdutoVencimento = gx.date.nullDate() ;
   this.AV18EsquemaCodigo = 0 ;
   this.ZV18EsquemaCodigo = 0 ;
   this.OV18EsquemaCodigo = 0 ;
   this.AV20FilialId = 0 ;
   this.AV21FilialNome = "" ;
   this.AV27ProdutoId = 0 ;
   this.AV25ProdutoDescricaoResumida = "" ;
   this.AV18EsquemaCodigo = 0 ;
   this.AV26ProdutoEmpresaId = "" ;
   this.AV19FilialEmpresaId = "" ;
   this.AV28OutLoteProdutoCombinacao = "" ;
   this.AV29SnLoteEscolhido = "" ;
   this.AV13Edit1 = "" ;
   this.AV14Edit2 = "" ;
   this.AV15Edit3 = "" ;
   this.AV16Edit4 = "" ;
   this.AV17Edit5 = "" ;
   this.AV23LoteProdutoCombinacao = "" ;
   this.AV6LoteProdutoQtdeAtual = 0 ;
   this.AV24LoteProdutoVencimento = gx.date.nullDate() ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A9349FilialNomeReduzido = "" ;
   this.A3645LoteProdutoQtdeAtual = 0 ;
   this.A3624LoteProdutoCombinacao = "" ;
   this.Events = {"e112h62_client": ["'FECHAR'", true] ,"e132h62_client": ["'RETORNO'", true] ,"e152h62_client": ["ENTER", true] ,"e162h62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV23LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV6LoteProdutoQtdeAtual',fld:'vLOTEPRODUTOQTDEATUAL'},{av:'AV13Edit1',fld:'vEDIT1'},{av:'AV14Edit2',fld:'vEDIT2'},{av:'AV15Edit3',fld:'vEDIT3'},{av:'AV16Edit4',fld:'vEDIT4'},{av:'AV17Edit5',fld:'vEDIT5'},{av:'gx.fn.getCtrlProperty("vEDIT1","Visible")',ctrl:'vEDIT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT2","Visible")',ctrl:'vEDIT2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT3","Visible")',ctrl:'vEDIT3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT4","Visible")',ctrl:'vEDIT4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT5","Visible")',ctrl:'vEDIT5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEDIT1","Title")',ctrl:'vEDIT1',prop:'Title'},{av:'gx.fn.getCtrlProperty("vEDIT2","Title")',ctrl:'vEDIT2',prop:'Title'},{av:'gx.fn.getCtrlProperty("vEDIT3","Title")',ctrl:'vEDIT3',prop:'Title'},{av:'gx.fn.getCtrlProperty("vEDIT4","Title")',ctrl:'vEDIT4',prop:'Title'},{av:'gx.fn.getCtrlProperty("vEDIT5","Title")',ctrl:'vEDIT5',prop:'Title'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'AV28OutLoteProdutoCombinacao',fld:'vOUTLOTEPRODUTOCOMBINACAO'},{av:'AV29SnLoteEscolhido',fld:'vSNLOTEESCOLHIDO'}]];
   this.EvtParms["'RETORNO'"] = [[{av:'AV23LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'}],[{av:'AV28OutLoteProdutoCombinacao',fld:'vOUTLOTEPRODUTOCOMBINACAO'},{av:'AV29SnLoteEscolhido',fld:'vSNLOTEESCOLHIDO'}]];
   this.setVCMap("AV26ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV19FilialEmpresaId", "vFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV28OutLoteProdutoCombinacao", "vOUTLOTEPRODUTOCOMBINACAO", 0, "char");
   this.setVCMap("AV29SnLoteEscolhido", "vSNLOTEESCOLHIDO", 0, "char");
   Grid1Container.addRefreshingVar({rfrVar:"AV23LoteProdutoCombinacao", rfrProp:"Value", gxAttId:"Loteprodutocombinacao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV6LoteProdutoQtdeAtual", rfrProp:"Value", gxAttId:"Loteprodutoqtdeatual"});
   Grid1Container.addRefreshingVar({rfrVar:"AV13Edit1", rfrProp:"Value", gxAttId:"Edit1"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14Edit2", rfrProp:"Value", gxAttId:"Edit2"});
   Grid1Container.addRefreshingVar({rfrVar:"AV15Edit3", rfrProp:"Value", gxAttId:"Edit3"});
   Grid1Container.addRefreshingVar({rfrVar:"AV16Edit4", rfrProp:"Value", gxAttId:"Edit4"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17Edit5", rfrProp:"Value", gxAttId:"Edit5"});
   Grid1Container.addRefreshingVar({rfrVar:"AV13Edit1", rfrProp:"Visible", gxAttId:"Edit1"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14Edit2", rfrProp:"Visible", gxAttId:"Edit2"});
   Grid1Container.addRefreshingVar({rfrVar:"AV15Edit3", rfrProp:"Visible", gxAttId:"Edit3"});
   Grid1Container.addRefreshingVar({rfrVar:"AV16Edit4", rfrProp:"Visible", gxAttId:"Edit4"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17Edit5", rfrProp:"Visible", gxAttId:"Edit5"});
   Grid1Container.addRefreshingVar({rfrVar:"AV13Edit1", rfrProp:"Title", gxAttId:"Edit1"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14Edit2", rfrProp:"Title", gxAttId:"Edit2"});
   Grid1Container.addRefreshingVar({rfrVar:"AV15Edit3", rfrProp:"Title", gxAttId:"Edit3"});
   Grid1Container.addRefreshingVar({rfrVar:"AV16Edit4", rfrProp:"Title", gxAttId:"Edit4"});
   Grid1Container.addRefreshingVar({rfrVar:"AV17Edit5", rfrProp:"Title", gxAttId:"Edit5"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfaturarvendalote());
