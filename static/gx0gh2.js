/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:40:33.54
*/
gx.evt.autoSkip = false;
gx.define('gx0gh2', false, function () {
   this.ServerClass =  "gx0gh2" ;
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
      this.AV11pPedidoComodatoId=gx.fn.getIntegerValue("vPPEDIDOCOMODATOID",'.') ;
      this.AV12pPedidoComodatoData=gx.fn.getDateValue("vPPEDIDOCOMODATODATA") ;
      this.AV13pPedidoComodatoItemSeq=gx.fn.getIntegerValue("vPPEDIDOCOMODATOITEMSEQ",'.') ;
   };
   this.e131u82_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141u81_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,49,52];
   this.GXLastCtrlId =52;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0gh2",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7624,43,"PEDIDOCOMODATOITEMSEQ","Sequência","","PedidoComodatoItemSeq","int",0,"px",4,4,"right",null,[],7624,"PedidoComodatoItemSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7618,44,"PEDIDOCOMODATOITEMPRODEMP","Empresa Produto","","PedidoComodatoItemProdEmp","char",0,"px",10,10,"left",null,[],7618,"PedidoComodatoItemProdEmp",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7619,45,"PEDIDOCOMODATOITEMPRODID","Código do Produto","","PedidoComodatoItemProdId","int",0,"px",10,10,"right",null,[],7619,"PedidoComodatoItemProdId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7621,46,"PEDIDOCOMODATOITEMQTDE","Quantidade","","PedidoComodatoItemQtde","decimal",0,"px",22,22,"right",null,[],7621,"PedidoComodatoItemQtde",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7622,47,"PEDIDOCOMODATOITEMPRECO","Preço","","PedidoComodatoItemPreco","decimal",0,"px",22,22,"right",null,[],7622,"PedidoComodatoItemPreco",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7623,48,"PEDIDOCOMODATOID","Número Comodato","","PedidoComodatoId","int",0,"px",8,8,"right",null,[],7623,"PedidoComodatoId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7612,49,"PEDIDOCOMODATODATA","Data","","PedidoComodatoData","date",0,"px",10,10,"right",null,[],7612,"PedidoComodatoData",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPEDIDOCOMODATOITEMSEQ", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATOITEMSEQ",gxz:"ZV6cPedidoComodatoItemSeq",gxold:"OV6cPedidoComodatoItemSeq",gxvar:"AV6cPedidoComodatoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPedidoComodatoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cPedidoComodatoItemSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMODATOITEMSEQ",gx.O.AV6cPedidoComodatoItemSeq,0)},c2v:function(){gx.O.AV6cPedidoComodatoItemSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCOMODATOITEMSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPEDIDOCOMODATOITEMPRODEMP", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATOITEMPRODEMP",gxz:"ZV7cPedidoComodatoItemProdEmp",gxold:"OV7cPedidoComodatoItemProdEmp",gxvar:"AV7cPedidoComodatoItemProdEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPedidoComodatoItemProdEmp=Value},v2z:function(Value){gx.O.ZV7cPedidoComodatoItemProdEmp=Value},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMODATOITEMPRODEMP",gx.O.AV7cPedidoComodatoItemProdEmp,0)},c2v:function(){gx.O.AV7cPedidoComodatoItemProdEmp=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCOMODATOITEMPRODEMP")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPEDIDOCOMODATOITEMPRODID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATOITEMPRODID",gxz:"ZV8cPedidoComodatoItemProdId",gxold:"OV8cPedidoComodatoItemProdId",gxvar:"AV8cPedidoComodatoItemProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPedidoComodatoItemProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cPedidoComodatoItemProdId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMODATOITEMPRODID",gx.O.AV8cPedidoComodatoItemProdId,0)},c2v:function(){gx.O.AV8cPedidoComodatoItemProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCOMODATOITEMPRODID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPEDIDOCOMODATOITEMQTDE", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATOITEMQTDE",gxz:"ZV9cPedidoComodatoItemQtde",gxold:"OV9cPedidoComodatoItemQtde",gxvar:"AV9cPedidoComodatoItemQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPedidoComodatoItemQtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV9cPedidoComodatoItemQtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCPEDIDOCOMODATOITEMQTDE",gx.O.AV9cPedidoComodatoItemQtde,2,',')},c2v:function(){gx.O.AV9cPedidoComodatoItemQtde=this.val()},val:function(){return gx.fn.getDecimalValue("vCPEDIDOCOMODATOITEMQTDE",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPEDIDOCOMODATOITEMPRECO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATOITEMPRECO",gxz:"ZV10cPedidoComodatoItemPreco",gxold:"OV10cPedidoComodatoItemPreco",gxvar:"AV10cPedidoComodatoItemPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cPedidoComodatoItemPreco=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV10cPedidoComodatoItemPreco=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCPEDIDOCOMODATOITEMPRECO",gx.O.AV10cPedidoComodatoItemPreco,2,',')},c2v:function(){gx.O.AV10cPedidoComodatoItemPreco=this.val()},val:function(){return gx.fn.getDecimalValue("vCPEDIDOCOMODATOITEMPRECO",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATOITEMSEQ",gxz:"Z7624PedidoComodatoItemSeq",gxold:"O7624PedidoComodatoItemSeq",gxvar:"A7624PedidoComodatoItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7624PedidoComodatoItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7624PedidoComodatoItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATOITEMSEQ",row || gx.fn.currentGridRowImpl(41),gx.O.A7624PedidoComodatoItemSeq,0)},c2v:function(){gx.O.A7624PedidoComodatoItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMODATOITEMSEQ",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATOITEMPRODEMP",gxz:"Z7618PedidoComodatoItemProdEmp",gxold:"O7618PedidoComodatoItemProdEmp",gxvar:"A7618PedidoComodatoItemProdEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7618PedidoComodatoItemProdEmp=Value},v2z:function(Value){gx.O.Z7618PedidoComodatoItemProdEmp=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATOITEMPRODEMP",row || gx.fn.currentGridRowImpl(41),gx.O.A7618PedidoComodatoItemProdEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7618PedidoComodatoItemProdEmp=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMODATOITEMPRODEMP",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATOITEMPRODID",gxz:"Z7619PedidoComodatoItemProdId",gxold:"O7619PedidoComodatoItemProdId",gxvar:"A7619PedidoComodatoItemProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7619PedidoComodatoItemProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7619PedidoComodatoItemProdId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATOITEMPRODID",row || gx.fn.currentGridRowImpl(41),gx.O.A7619PedidoComodatoItemProdId,0)},c2v:function(){gx.O.A7619PedidoComodatoItemProdId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMODATOITEMPRODID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATOITEMQTDE",gxz:"Z7621PedidoComodatoItemQtde",gxold:"O7621PedidoComodatoItemQtde",gxvar:"A7621PedidoComodatoItemQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7621PedidoComodatoItemQtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7621PedidoComodatoItemQtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PEDIDOCOMODATOITEMQTDE",row || gx.fn.currentGridRowImpl(41),gx.O.A7621PedidoComodatoItemQtde,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7621PedidoComodatoItemQtde=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PEDIDOCOMODATOITEMQTDE",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATOITEMPRECO",gxz:"Z7622PedidoComodatoItemPreco",gxold:"O7622PedidoComodatoItemPreco",gxvar:"A7622PedidoComodatoItemPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7622PedidoComodatoItemPreco=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7622PedidoComodatoItemPreco=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PEDIDOCOMODATOITEMPRECO",row || gx.fn.currentGridRowImpl(41),gx.O.A7622PedidoComodatoItemPreco,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7622PedidoComodatoItemPreco=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PEDIDOCOMODATOITEMPRECO",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATOID",gxz:"Z7623PedidoComodatoId",gxold:"O7623PedidoComodatoId",gxvar:"A7623PedidoComodatoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7623PedidoComodatoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7623PedidoComodatoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATOID",row || gx.fn.currentGridRowImpl(41),gx.O.A7623PedidoComodatoId,0)},c2v:function(){gx.O.A7623PedidoComodatoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMODATOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATODATA",gxz:"Z7612PedidoComodatoData",gxold:"O7612PedidoComodatoData",gxvar:"A7612PedidoComodatoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7612PedidoComodatoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7612PedidoComodatoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATODATA",row || gx.fn.currentGridRowImpl(41),gx.O.A7612PedidoComodatoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7612PedidoComodatoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMODATODATA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLE4",grid:0};
   this.AV6cPedidoComodatoItemSeq = 0 ;
   this.ZV6cPedidoComodatoItemSeq = 0 ;
   this.OV6cPedidoComodatoItemSeq = 0 ;
   this.AV7cPedidoComodatoItemProdEmp = "" ;
   this.ZV7cPedidoComodatoItemProdEmp = "" ;
   this.OV7cPedidoComodatoItemProdEmp = "" ;
   this.AV8cPedidoComodatoItemProdId = 0 ;
   this.ZV8cPedidoComodatoItemProdId = 0 ;
   this.OV8cPedidoComodatoItemProdId = 0 ;
   this.AV9cPedidoComodatoItemQtde = 0 ;
   this.ZV9cPedidoComodatoItemQtde = 0 ;
   this.OV9cPedidoComodatoItemQtde = 0 ;
   this.AV10cPedidoComodatoItemPreco = 0 ;
   this.ZV10cPedidoComodatoItemPreco = 0 ;
   this.OV10cPedidoComodatoItemPreco = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7624PedidoComodatoItemSeq = 0 ;
   this.O7624PedidoComodatoItemSeq = 0 ;
   this.Z7618PedidoComodatoItemProdEmp = "" ;
   this.O7618PedidoComodatoItemProdEmp = "" ;
   this.Z7619PedidoComodatoItemProdId = 0 ;
   this.O7619PedidoComodatoItemProdId = 0 ;
   this.Z7621PedidoComodatoItemQtde = 0 ;
   this.O7621PedidoComodatoItemQtde = 0 ;
   this.Z7622PedidoComodatoItemPreco = 0 ;
   this.O7622PedidoComodatoItemPreco = 0 ;
   this.Z7623PedidoComodatoId = 0 ;
   this.O7623PedidoComodatoId = 0 ;
   this.Z7612PedidoComodatoData = gx.date.nullDate() ;
   this.O7612PedidoComodatoData = gx.date.nullDate() ;
   this.AV6cPedidoComodatoItemSeq = 0 ;
   this.AV7cPedidoComodatoItemProdEmp = "" ;
   this.AV8cPedidoComodatoItemProdId = 0 ;
   this.AV9cPedidoComodatoItemQtde = 0 ;
   this.AV10cPedidoComodatoItemPreco = 0 ;
   this.AV11pPedidoComodatoId = 0 ;
   this.AV12pPedidoComodatoData = gx.date.nullDate() ;
   this.AV13pPedidoComodatoItemSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A7624PedidoComodatoItemSeq = 0 ;
   this.A7618PedidoComodatoItemProdEmp = "" ;
   this.A7619PedidoComodatoItemProdId = 0 ;
   this.A7621PedidoComodatoItemQtde = 0 ;
   this.A7622PedidoComodatoItemPreco = 0 ;
   this.A7623PedidoComodatoId = 0 ;
   this.A7612PedidoComodatoData = gx.date.nullDate() ;
   this.Events = {"e131u82_client": ["ENTER", true] ,"e141u81_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoComodatoItemSeq',fld:'vCPEDIDOCOMODATOITEMSEQ'},{av:'AV7cPedidoComodatoItemProdEmp',fld:'vCPEDIDOCOMODATOITEMPRODEMP'},{av:'AV8cPedidoComodatoItemProdId',fld:'vCPEDIDOCOMODATOITEMPRODID'},{av:'AV9cPedidoComodatoItemQtde',fld:'vCPEDIDOCOMODATOITEMQTDE'},{av:'AV10cPedidoComodatoItemPreco',fld:'vCPEDIDOCOMODATOITEMPRECO'},{av:'AV11pPedidoComodatoId',fld:'vPPEDIDOCOMODATOID',hsh:true},{av:'AV12pPedidoComodatoData',fld:'vPPEDIDOCOMODATODATA',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7624PedidoComodatoItemSeq',fld:'PEDIDOCOMODATOITEMSEQ'}],[{av:'AV13pPedidoComodatoItemSeq',fld:'vPPEDIDOCOMODATOITEMSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoComodatoItemSeq',fld:'vCPEDIDOCOMODATOITEMSEQ'},{av:'AV7cPedidoComodatoItemProdEmp',fld:'vCPEDIDOCOMODATOITEMPRODEMP'},{av:'AV8cPedidoComodatoItemProdId',fld:'vCPEDIDOCOMODATOITEMPRODID'},{av:'AV9cPedidoComodatoItemQtde',fld:'vCPEDIDOCOMODATOITEMQTDE'},{av:'AV10cPedidoComodatoItemPreco',fld:'vCPEDIDOCOMODATOITEMPRECO'},{av:'AV11pPedidoComodatoId',fld:'vPPEDIDOCOMODATOID',hsh:true},{av:'AV12pPedidoComodatoData',fld:'vPPEDIDOCOMODATODATA',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoComodatoItemSeq',fld:'vCPEDIDOCOMODATOITEMSEQ'},{av:'AV7cPedidoComodatoItemProdEmp',fld:'vCPEDIDOCOMODATOITEMPRODEMP'},{av:'AV8cPedidoComodatoItemProdId',fld:'vCPEDIDOCOMODATOITEMPRODID'},{av:'AV9cPedidoComodatoItemQtde',fld:'vCPEDIDOCOMODATOITEMQTDE'},{av:'AV10cPedidoComodatoItemPreco',fld:'vCPEDIDOCOMODATOITEMPRECO'},{av:'AV11pPedidoComodatoId',fld:'vPPEDIDOCOMODATOID',hsh:true},{av:'AV12pPedidoComodatoData',fld:'vPPEDIDOCOMODATODATA',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoComodatoItemSeq',fld:'vCPEDIDOCOMODATOITEMSEQ'},{av:'AV7cPedidoComodatoItemProdEmp',fld:'vCPEDIDOCOMODATOITEMPRODEMP'},{av:'AV8cPedidoComodatoItemProdId',fld:'vCPEDIDOCOMODATOITEMPRODID'},{av:'AV9cPedidoComodatoItemQtde',fld:'vCPEDIDOCOMODATOITEMQTDE'},{av:'AV10cPedidoComodatoItemPreco',fld:'vCPEDIDOCOMODATOITEMPRECO'},{av:'AV11pPedidoComodatoId',fld:'vPPEDIDOCOMODATOID',hsh:true},{av:'AV12pPedidoComodatoData',fld:'vPPEDIDOCOMODATODATA',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoComodatoItemSeq',fld:'vCPEDIDOCOMODATOITEMSEQ'},{av:'AV7cPedidoComodatoItemProdEmp',fld:'vCPEDIDOCOMODATOITEMPRODEMP'},{av:'AV8cPedidoComodatoItemProdId',fld:'vCPEDIDOCOMODATOITEMPRODID'},{av:'AV9cPedidoComodatoItemQtde',fld:'vCPEDIDOCOMODATOITEMQTDE'},{av:'AV10cPedidoComodatoItemPreco',fld:'vCPEDIDOCOMODATOITEMPRECO'},{av:'AV11pPedidoComodatoId',fld:'vPPEDIDOCOMODATOID',hsh:true},{av:'AV12pPedidoComodatoData',fld:'vPPEDIDOCOMODATODATA',hsh:true}],[]];
   this.setVCMap("AV11pPedidoComodatoId", "vPPEDIDOCOMODATOID", 0, "int");
   this.setVCMap("AV12pPedidoComodatoData", "vPPEDIDOCOMODATODATA", 0, "date");
   this.setVCMap("AV13pPedidoComodatoItemSeq", "vPPEDIDOCOMODATOITEMSEQ", 0, "int");
   this.setVCMap("AV11pPedidoComodatoId", "vPPEDIDOCOMODATOID", 0, "int");
   this.setVCMap("AV12pPedidoComodatoData", "vPPEDIDOCOMODATODATA", 0, "date");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pPedidoComodatoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pPedidoComodatoData"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0gh2());
