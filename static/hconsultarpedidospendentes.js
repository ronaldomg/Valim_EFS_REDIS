/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:50:33.4
*/
gx.evt.autoSkip = false;
gx.define('hconsultarpedidospendentes', false, function () {
   this.ServerClass =  "hconsultarpedidospendentes" ;
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
   this.e13yr2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11yr2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15yr2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,24,26,29,31,33,35,37,40,42,45,47,49,51,53,56,58,59,60,61,62,63,64,65,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",57,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultarpedidospendentes",[],false,1,true,true,0,false,false,false,"CollSdtConsultarPedidosPendentes.SdtConsultarPedidosPendentesItem",0,"px","Novo registro",false,false,false,null,null,false,"AV29SdtPedidosPendentes",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11M",58,"CTLPEDIDOCOMPRADATAENTREGA","Previsão Entrega","","PedidoCompraDataEntrega","date",0,"px",10,10,"right",null,[],"GXV11M","GXV11M",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11N",59,"CTLPEDIDOCOMPRAANO","Ano","","PedidoCompraAno","int",0,"px",4,4,"right",null,[],"GXV11N","GXV11N",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11O",60,"CTLPEDIDOCOMPRANUMERO","No. Pedido","","PedidoCompraNumero","int",0,"px",7,7,"right",null,[],"GXV11O","GXV11O",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11P",61,"CTLPEDIDOCOMPRADATA","Data","","PedidoCompraData","date",0,"px",10,10,"right",null,[],"GXV11P","GXV11P",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11Q",62,"CTLPEDIDOCOMPRAPESSOAID","Fornecedor","","PedidoCompraPessoaId","int",0,"px",7,7,"right",null,[],"GXV11Q","GXV11Q",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11R",63,"CTLPEDIDOCOMPRAPESSOAFANTASIA","Nome Fornecedor","","PedidoCompraPessoaFantasia","svchar",0,"px",60,60,"left",null,[],"GXV11R","GXV11R",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11S",64,"CTLUNIDADEID","Un.","","UnidadeId","char",0,"px",3,3,"left",null,[],"GXV11S","GXV11S",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11T",65,"CTLPEDIDOCOMPRAQTDEPENDENTE","Qtde Pendente","","PedidoCompraQtdePendente","decimal",0,"px",21,21,"right",null,[],"GXV11T","GXV11T",true,4,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TXT1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV14ProdutoId",gxold:"OV14ProdutoId",gxvar:"AV14ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV14ProdutoId,0)},c2v:function(){gx.O.AV14ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAORESUMIDA",gxz:"ZV15ProdutoDescricaoResumida",gxold:"OV15ProdutoDescricaoResumida",gxvar:"AV15ProdutoDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ProdutoDescricaoResumida=Value},v2z:function(Value){gx.O.ZV15ProdutoDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAORESUMIDA",gx.O.AV15ProdutoDescricaoResumida,0)},c2v:function(){gx.O.AV15ProdutoDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXT7", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOQTDEATUAL",gxz:"ZV22ProdutoQtdeAtual",gxold:"OV22ProdutoQtdeAtual",gxvar:"AV22ProdutoQtdeAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ProdutoQtdeAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV22ProdutoQtdeAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOQTDEATUAL",gx.O.AV22ProdutoQtdeAtual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22ProdutoQtdeAtual=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOQTDEATUAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[24]={fld:"TXT3", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE3",grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIAID",gxz:"ZV16ProdutoFamiliaId",gxold:"OV16ProdutoFamiliaId",gxvar:"AV16ProdutoFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ProdutoFamiliaId=Value},v2z:function(Value){gx.O.ZV16ProdutoFamiliaId=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFAMILIAID",gx.O.AV16ProdutoFamiliaId,0)},c2v:function(){gx.O.AV16ProdutoFamiliaId=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFAMILIADESCRICAO",gxz:"ZV17ProdutoFamiliaDescricao",gxold:"OV17ProdutoFamiliaDescricao",gxvar:"AV17ProdutoFamiliaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ProdutoFamiliaDescricao=Value},v2z:function(Value){gx.O.ZV17ProdutoFamiliaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFAMILIADESCRICAO",gx.O.AV17ProdutoFamiliaDescricao,0)},c2v:function(){gx.O.AV17ProdutoFamiliaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFAMILIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TXT8", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOQTDEPENDENTE",gxz:"ZV27ProdutoQtdePendente",gxold:"OV27ProdutoQtdePendente",gxvar:"AV27ProdutoQtdePendente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProdutoQtdePendente=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV27ProdutoQtdePendente=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOQTDEPENDENTE",gx.O.AV27ProdutoQtdePendente,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27ProdutoQtdePendente=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOQTDEPENDENTE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TXT5", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEID",gxz:"ZV18ProdutoFabricanteId",gxold:"OV18ProdutoFabricanteId",gxvar:"AV18ProdutoFabricanteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ProdutoFabricanteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ProdutoFabricanteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEID",gx.O.AV18ProdutoFabricanteId,0)},c2v:function(){gx.O.AV18ProdutoFabricanteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOFABRICANTEID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFABRICANTEFANTASIA",gxz:"ZV19ProdutoFabricanteFantasia",gxold:"OV19ProdutoFabricanteFantasia",gxvar:"AV19ProdutoFabricanteFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProdutoFabricanteFantasia=Value},v2z:function(Value){gx.O.ZV19ProdutoFabricanteFantasia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOFABRICANTEFANTASIA",gx.O.AV19ProdutoFabricanteFantasia,0)},c2v:function(){gx.O.AV19ProdutoFabricanteFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOFABRICANTEFANTASIA")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TXT9", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOQTDETOTAL",gxz:"ZV28ProdutoQtdeTotal",gxold:"OV28ProdutoQtdeTotal",gxvar:"AV28ProdutoQtdeTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ProdutoQtdeTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV28ProdutoQtdeTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vPRODUTOQTDETOTAL",gx.O.AV28ProdutoQtdeTotal,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28ProdutoQtdeTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vPRODUTOQTDETOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[56]={fld:"ROL1", format:2,grid:0};
   GXValidFnc[58]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRADATAENTREGA",gxz:"ZV40GXV11M",gxold:"OV40GXV11M",gxvar:"GXV11M",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11M=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV40GXV11M=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRADATAENTREGA",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11M,0)},c2v:function(){gx.O.GXV11M=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPEDIDOCOMPRADATAENTREGA",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAANO",gxz:"ZV41GXV11N",gxold:"OV41GXV11N",gxvar:"GXV11N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11N=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41GXV11N=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11N,0)},c2v:function(){gx.O.GXV11N=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRANUMERO",gxz:"ZV42GXV11O",gxold:"OV42GXV11O",gxvar:"GXV11O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11O=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42GXV11O=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11O,0)},c2v:function(){gx.O.GXV11O=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRADATA",gxz:"ZV43GXV11P",gxold:"OV43GXV11P",gxvar:"GXV11P",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11P=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV43GXV11P=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11P,0)},c2v:function(){gx.O.GXV11P=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPEDIDOCOMPRADATA",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAPESSOAID",gxz:"ZV44GXV11Q",gxold:"OV44GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Q=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44GXV11Q=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11Q,0)},c2v:function(){gx.O.GXV11Q=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPEDIDOCOMPRAPESSOAID",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAPESSOAFANTASIA",gxz:"ZV45GXV11R",gxold:"OV45GXV11R",gxvar:"GXV11R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11R=Value},v2z:function(Value){gx.O.ZV45GXV11R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11R,0)},c2v:function(){gx.O.GXV11R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPEDIDOCOMPRAPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLUNIDADEID",gxz:"ZV46GXV11S",gxold:"OV46GXV11S",gxvar:"GXV11S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11S=Value},v2z:function(Value){gx.O.ZV46GXV11S=Value},v2c:function(row){gx.fn.setGridControlValue("CTLUNIDADEID",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11S,0)},c2v:function(){gx.O.GXV11S=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLUNIDADEID",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPEDIDOCOMPRAQTDEPENDENTE",gxz:"ZV47GXV11T",gxold:"OV47GXV11T",gxvar:"GXV11T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11T=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV47GXV11T=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLPEDIDOCOMPRAQTDEPENDENTE",row || gx.fn.currentGridRowImpl(57),gx.O.GXV11T,4,',')},c2v:function(){gx.O.GXV11T=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLPEDIDOCOMPRAQTDEPENDENTE",row || gx.fn.currentGridRowImpl(57),'.',',')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"ROL2", format:2,grid:0};
   this.AV14ProdutoId = 0 ;
   this.ZV14ProdutoId = 0 ;
   this.OV14ProdutoId = 0 ;
   this.AV15ProdutoDescricaoResumida = "" ;
   this.ZV15ProdutoDescricaoResumida = "" ;
   this.OV15ProdutoDescricaoResumida = "" ;
   this.AV22ProdutoQtdeAtual = 0 ;
   this.ZV22ProdutoQtdeAtual = 0 ;
   this.OV22ProdutoQtdeAtual = 0 ;
   this.AV16ProdutoFamiliaId = "" ;
   this.ZV16ProdutoFamiliaId = "" ;
   this.OV16ProdutoFamiliaId = "" ;
   this.AV17ProdutoFamiliaDescricao = "" ;
   this.ZV17ProdutoFamiliaDescricao = "" ;
   this.OV17ProdutoFamiliaDescricao = "" ;
   this.AV27ProdutoQtdePendente = 0 ;
   this.ZV27ProdutoQtdePendente = 0 ;
   this.OV27ProdutoQtdePendente = 0 ;
   this.AV18ProdutoFabricanteId = 0 ;
   this.ZV18ProdutoFabricanteId = 0 ;
   this.OV18ProdutoFabricanteId = 0 ;
   this.AV19ProdutoFabricanteFantasia = "" ;
   this.ZV19ProdutoFabricanteFantasia = "" ;
   this.OV19ProdutoFabricanteFantasia = "" ;
   this.AV28ProdutoQtdeTotal = 0 ;
   this.ZV28ProdutoQtdeTotal = 0 ;
   this.OV28ProdutoQtdeTotal = 0 ;
   this.ZV40GXV11M = gx.date.nullDate() ;
   this.OV40GXV11M = gx.date.nullDate() ;
   this.ZV41GXV11N = 0 ;
   this.OV41GXV11N = 0 ;
   this.ZV42GXV11O = 0 ;
   this.OV42GXV11O = 0 ;
   this.ZV43GXV11P = gx.date.nullDate() ;
   this.OV43GXV11P = gx.date.nullDate() ;
   this.ZV44GXV11Q = 0 ;
   this.OV44GXV11Q = 0 ;
   this.ZV45GXV11R = "" ;
   this.OV45GXV11R = "" ;
   this.ZV46GXV11S = "" ;
   this.OV46GXV11S = "" ;
   this.ZV47GXV11T = 0 ;
   this.OV47GXV11T = 0 ;
   this.AV14ProdutoId = 0 ;
   this.AV15ProdutoDescricaoResumida = "" ;
   this.AV22ProdutoQtdeAtual = 0 ;
   this.AV16ProdutoFamiliaId = "" ;
   this.AV17ProdutoFamiliaDescricao = "" ;
   this.AV27ProdutoQtdePendente = 0 ;
   this.AV18ProdutoFabricanteId = 0 ;
   this.AV19ProdutoFabricanteFantasia = "" ;
   this.AV28ProdutoQtdeTotal = 0 ;
   this.GXV11M = gx.date.nullDate() ;
   this.GXV11N = 0 ;
   this.GXV11O = 0 ;
   this.GXV11P = gx.date.nullDate() ;
   this.GXV11Q = 0 ;
   this.GXV11R = "" ;
   this.GXV11S = "" ;
   this.GXV11T = 0 ;
   this.A3337PedidoCompraNumero = 0 ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A4286PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.A3799PedidoCompraLOGSeq = 0 ;
   this.A3380PedidoCompraSituacao = "" ;
   this.A3360PedidoCompraData = gx.date.nullDate() ;
   this.A3362PedidoCompraPessoaId = 0 ;
   this.A3778PedidoCompraPessoaFantasia = "" ;
   this.A3389PedidoCompraDataEntrega = gx.date.nullDate() ;
   this.A3361PedidoCompraPessoaEmpId = "" ;
   this.A3340PedidoCompraItemProdutoId = 0 ;
   this.A3339PedidoCompraItemProdutoEmpId = "" ;
   this.A3344PedidoCompraItemUnidadeId = "" ;
   this.A3338PedidoCompraItemSeq = 0 ;
   this.A3348PedidoCompraItemQtdePendente = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3840ProdutoFamiliaId = "" ;
   this.A3841ProdutoFamiliaDescricao = "" ;
   this.A3398ProdutoFabricanteId = 0 ;
   this.A3846ProdutoFabricanteFantasia = "" ;
   this.A3839ProdutoFamiliaEmpresaId = "" ;
   this.A3845ProdutoFabricanteEmpId = "" ;
   this.Events = {"e13yr2_client": ["ENTER", true] ,"e11yr2_client": ["'FECHAR'", true] ,"e15yr2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV29SdtPedidosPendentes',fld:'vSDTPEDIDOSPENDENTES',grid:57}],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("A3426PedidoCompraEmpresaId", "PEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("A3336PedidoCompraAno", "PEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("A3337PedidoCompraNumero", "PEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("A3338PedidoCompraItemSeq", "PEDIDOCOMPRAITEMSEQ", 0, "int");
   this.setVCMap("A3348PedidoCompraItemQtdePendente", "PEDIDOCOMPRAITEMQTDEPENDENTE", 0, "decimal");
   this.addGridBCProperty("Sdtpedidospendentes", ["PedidoCompraDataEntrega"], this.GXValidFnc[58], "AV29SdtPedidosPendentes");
   this.addGridBCProperty("Sdtpedidospendentes", ["PedidoCompraAno"], this.GXValidFnc[59], "AV29SdtPedidosPendentes");
   this.addGridBCProperty("Sdtpedidospendentes", ["PedidoCompraNumero"], this.GXValidFnc[60], "AV29SdtPedidosPendentes");
   this.addGridBCProperty("Sdtpedidospendentes", ["PedidoCompraData"], this.GXValidFnc[61], "AV29SdtPedidosPendentes");
   this.addGridBCProperty("Sdtpedidospendentes", ["PedidoCompraPessoaId"], this.GXValidFnc[62], "AV29SdtPedidosPendentes");
   this.addGridBCProperty("Sdtpedidospendentes", ["PedidoCompraPessoaFantasia"], this.GXValidFnc[63], "AV29SdtPedidosPendentes");
   this.addGridBCProperty("Sdtpedidospendentes", ["UnidadeId"], this.GXValidFnc[64], "AV29SdtPedidosPendentes");
   this.addGridBCProperty("Sdtpedidospendentes", ["PedidoCompraQtdePendente"], this.GXValidFnc[65], "AV29SdtPedidosPendentes");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarpedidospendentes());
