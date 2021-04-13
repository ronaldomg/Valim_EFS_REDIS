/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:35:0.12
*/
gx.evt.autoSkip = false;
gx.define('gx0b33', false, function () {
   this.ServerClass =  "gx0b33" ;
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
      this.AV10pPedidoCompraEmpresaId=gx.fn.getControlValue("vPPEDIDOCOMPRAEMPRESAID") ;
      this.AV11pPedidoCompraAno=gx.fn.getIntegerValue("vPPEDIDOCOMPRAANO",'.') ;
      this.AV12pPedidoCompraNumero=gx.fn.getIntegerValue("vPPEDIDOCOMPRANUMERO",'.') ;
      this.AV13pPedidoCompraLOGSeq=gx.fn.getIntegerValue("vPPEDIDOCOMPRALOGSEQ",'.') ;
   };
   this.e131pm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141pm1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,43,44,45,48];
   this.GXLastCtrlId =48;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0b33",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3799,38,"PEDIDOCOMPRALOGSEQ","Sequência","","PedidoCompraLOGSeq","int",0,"px",3,3,"right",null,[],3799,"PedidoCompraLOGSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3793,39,"PEDIDOCOMPRALOGDATA","Data/Hora","Selecionar","PedidoCompraLOGData","dtime",0,"px",16,16,"right",null,[],3793,"PedidoCompraLOGData",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3795,40,"PEDIDOCOMPRALOGUSUARIOALT","Usuário Alteração","","PedidoCompraLOGUsuarioAlt","char",0,"px",12,12,"left",null,[],3795,"PedidoCompraLOGUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3796,41,"PEDIDOCOMPRALOGDATAHORAALT","Data/Hora Alteração","","PedidoCompraLOGDataHoraAlt","dtime",0,"px",16,16,"right",null,[],3796,"PedidoCompraLOGDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4286,42,"PEDIDOCOMPRALOGDATAPREV","Data da Previsão Entrega","","PedidoCompraLOGDataPrev","date",0,"px",10,10,"right",null,[],4286,"PedidoCompraLOGDataPrev",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3426,43,"PEDIDOCOMPRAEMPRESAID","Empresa","","PedidoCompraEmpresaId","char",0,"px",10,10,"left",null,[],3426,"PedidoCompraEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3336,44,"PEDIDOCOMPRAANO","Ano","","PedidoCompraAno","int",0,"px",4,4,"right",null,[],3336,"PedidoCompraAno",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3337,45,"PEDIDOCOMPRANUMERO","Número","","PedidoCompraNumero","int",0,"px",7,7,"right",null,[],3337,"PedidoCompraNumero",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPEDIDOCOMPRALOGSEQ", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMPRALOGSEQ",gxz:"ZV6cPedidoCompraLOGSeq",gxold:"OV6cPedidoCompraLOGSeq",gxvar:"AV6cPedidoCompraLOGSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPedidoCompraLOGSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cPedidoCompraLOGSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMPRALOGSEQ",gx.O.AV6cPedidoCompraLOGSeq,0)},c2v:function(){gx.O.AV6cPedidoCompraLOGSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCOMPRALOGSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPEDIDOCOMPRALOGDATA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMPRALOGDATA",gxz:"ZV7cPedidoCompraLOGData",gxold:"OV7cPedidoCompraLOGData",gxvar:"AV7cPedidoCompraLOGData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPedidoCompraLOGData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7cPedidoCompraLOGData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMPRALOGDATA",gx.O.AV7cPedidoCompraLOGData,0)},c2v:function(){gx.O.AV7cPedidoCompraLOGData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPEDIDOCOMPRALOGDATA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPEDIDOCOMPRALOGUSUARIOALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMPRALOGUSUARIOALT",gxz:"ZV8cPedidoCompraLOGUsuarioAlt",gxold:"OV8cPedidoCompraLOGUsuarioAlt",gxvar:"AV8cPedidoCompraLOGUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPedidoCompraLOGUsuarioAlt=Value},v2z:function(Value){gx.O.ZV8cPedidoCompraLOGUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMPRALOGUSUARIOALT",gx.O.AV8cPedidoCompraLOGUsuarioAlt,0)},c2v:function(){gx.O.AV8cPedidoCompraLOGUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCOMPRALOGUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPEDIDOCOMPRALOGDATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMPRALOGDATAHORAALT",gxz:"ZV9cPedidoCompraLOGDataHoraAlt",gxold:"OV9cPedidoCompraLOGDataHoraAlt",gxvar:"AV9cPedidoCompraLOGDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPedidoCompraLOGDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cPedidoCompraLOGDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMPRALOGDATAHORAALT",gx.O.AV9cPedidoCompraLOGDataHoraAlt,0)},c2v:function(){gx.O.AV9cPedidoCompraLOGDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPEDIDOCOMPRALOGDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRALOGSEQ",gxz:"Z3799PedidoCompraLOGSeq",gxold:"O3799PedidoCompraLOGSeq",gxvar:"A3799PedidoCompraLOGSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3799PedidoCompraLOGSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3799PedidoCompraLOGSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRALOGSEQ",row || gx.fn.currentGridRowImpl(36),gx.O.A3799PedidoCompraLOGSeq,0)},c2v:function(){gx.O.A3799PedidoCompraLOGSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRALOGSEQ",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRALOGDATA",gxz:"Z3793PedidoCompraLOGData",gxold:"O3793PedidoCompraLOGData",gxvar:"A3793PedidoCompraLOGData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3793PedidoCompraLOGData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3793PedidoCompraLOGData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRALOGDATA",row || gx.fn.currentGridRowImpl(36),gx.O.A3793PedidoCompraLOGData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3793PedidoCompraLOGData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRALOGDATA",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRALOGUSUARIOALT",gxz:"Z3795PedidoCompraLOGUsuarioAlt",gxold:"O3795PedidoCompraLOGUsuarioAlt",gxvar:"A3795PedidoCompraLOGUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3795PedidoCompraLOGUsuarioAlt=Value},v2z:function(Value){gx.O.Z3795PedidoCompraLOGUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRALOGUSUARIOALT",row || gx.fn.currentGridRowImpl(36),gx.O.A3795PedidoCompraLOGUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3795PedidoCompraLOGUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRALOGUSUARIOALT",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRALOGDATAHORAALT",gxz:"Z3796PedidoCompraLOGDataHoraAlt",gxold:"O3796PedidoCompraLOGDataHoraAlt",gxvar:"A3796PedidoCompraLOGDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3796PedidoCompraLOGDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3796PedidoCompraLOGDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRALOGDATAHORAALT",row || gx.fn.currentGridRowImpl(36),gx.O.A3796PedidoCompraLOGDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3796PedidoCompraLOGDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRALOGDATAHORAALT",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRALOGDATAPREV",gxz:"Z4286PedidoCompraLOGDataPrev",gxold:"O4286PedidoCompraLOGDataPrev",gxvar:"A4286PedidoCompraLOGDataPrev",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4286PedidoCompraLOGDataPrev=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4286PedidoCompraLOGDataPrev=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRALOGDATAPREV",row || gx.fn.currentGridRowImpl(36),gx.O.A4286PedidoCompraLOGDataPrev,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4286PedidoCompraLOGDataPrev=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMPRALOGDATAPREV",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAEMPRESAID",gxz:"Z3426PedidoCompraEmpresaId",gxold:"O3426PedidoCompraEmpresaId",gxvar:"A3426PedidoCompraEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3426PedidoCompraEmpresaId=Value},v2z:function(Value){gx.O.Z3426PedidoCompraEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAEMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A3426PedidoCompraEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3426PedidoCompraEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMPRAEMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRAANO",gxz:"Z3336PedidoCompraAno",gxold:"O3336PedidoCompraAno",gxvar:"A3336PedidoCompraAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3336PedidoCompraAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3336PedidoCompraAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(36),gx.O.A3336PedidoCompraAno,0)},c2v:function(){gx.O.A3336PedidoCompraAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRAANO",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMPRANUMERO",gxz:"Z3337PedidoCompraNumero",gxold:"O3337PedidoCompraNumero",gxvar:"A3337PedidoCompraNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3337PedidoCompraNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3337PedidoCompraNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(36),gx.O.A3337PedidoCompraNumero,0)},c2v:function(){gx.O.A3337PedidoCompraNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMPRANUMERO",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TABLE4",grid:0};
   this.AV6cPedidoCompraLOGSeq = 0 ;
   this.ZV6cPedidoCompraLOGSeq = 0 ;
   this.OV6cPedidoCompraLOGSeq = 0 ;
   this.AV7cPedidoCompraLOGData = gx.date.nullDate() ;
   this.ZV7cPedidoCompraLOGData = gx.date.nullDate() ;
   this.OV7cPedidoCompraLOGData = gx.date.nullDate() ;
   this.AV8cPedidoCompraLOGUsuarioAlt = "" ;
   this.ZV8cPedidoCompraLOGUsuarioAlt = "" ;
   this.OV8cPedidoCompraLOGUsuarioAlt = "" ;
   this.AV9cPedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cPedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.OV9cPedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3799PedidoCompraLOGSeq = 0 ;
   this.O3799PedidoCompraLOGSeq = 0 ;
   this.Z3793PedidoCompraLOGData = gx.date.nullDate() ;
   this.O3793PedidoCompraLOGData = gx.date.nullDate() ;
   this.Z3795PedidoCompraLOGUsuarioAlt = "" ;
   this.O3795PedidoCompraLOGUsuarioAlt = "" ;
   this.Z3796PedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.O3796PedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.Z4286PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.O4286PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.Z3426PedidoCompraEmpresaId = "" ;
   this.O3426PedidoCompraEmpresaId = "" ;
   this.Z3336PedidoCompraAno = 0 ;
   this.O3336PedidoCompraAno = 0 ;
   this.Z3337PedidoCompraNumero = 0 ;
   this.O3337PedidoCompraNumero = 0 ;
   this.AV6cPedidoCompraLOGSeq = 0 ;
   this.AV7cPedidoCompraLOGData = gx.date.nullDate() ;
   this.AV8cPedidoCompraLOGUsuarioAlt = "" ;
   this.AV9cPedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.AV10pPedidoCompraEmpresaId = "" ;
   this.AV11pPedidoCompraAno = 0 ;
   this.AV12pPedidoCompraNumero = 0 ;
   this.AV13pPedidoCompraLOGSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A3799PedidoCompraLOGSeq = 0 ;
   this.A3793PedidoCompraLOGData = gx.date.nullDate() ;
   this.A3795PedidoCompraLOGUsuarioAlt = "" ;
   this.A3796PedidoCompraLOGDataHoraAlt = gx.date.nullDate() ;
   this.A4286PedidoCompraLOGDataPrev = gx.date.nullDate() ;
   this.A3426PedidoCompraEmpresaId = "" ;
   this.A3336PedidoCompraAno = 0 ;
   this.A3337PedidoCompraNumero = 0 ;
   this.Events = {"e131pm2_client": ["ENTER", true] ,"e141pm1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoCompraLOGSeq',fld:'vCPEDIDOCOMPRALOGSEQ'},{av:'AV7cPedidoCompraLOGData',fld:'vCPEDIDOCOMPRALOGDATA'},{av:'AV8cPedidoCompraLOGUsuarioAlt',fld:'vCPEDIDOCOMPRALOGUSUARIOALT'},{av:'AV9cPedidoCompraLOGDataHoraAlt',fld:'vCPEDIDOCOMPRALOGDATAHORAALT'},{av:'AV10pPedidoCompraEmpresaId',fld:'vPPEDIDOCOMPRAEMPRESAID',hsh:true},{av:'AV11pPedidoCompraAno',fld:'vPPEDIDOCOMPRAANO',hsh:true},{av:'AV12pPedidoCompraNumero',fld:'vPPEDIDOCOMPRANUMERO',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3799PedidoCompraLOGSeq',fld:'PEDIDOCOMPRALOGSEQ'}],[{av:'AV13pPedidoCompraLOGSeq',fld:'vPPEDIDOCOMPRALOGSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoCompraLOGSeq',fld:'vCPEDIDOCOMPRALOGSEQ'},{av:'AV7cPedidoCompraLOGData',fld:'vCPEDIDOCOMPRALOGDATA'},{av:'AV8cPedidoCompraLOGUsuarioAlt',fld:'vCPEDIDOCOMPRALOGUSUARIOALT'},{av:'AV9cPedidoCompraLOGDataHoraAlt',fld:'vCPEDIDOCOMPRALOGDATAHORAALT'},{av:'AV10pPedidoCompraEmpresaId',fld:'vPPEDIDOCOMPRAEMPRESAID',hsh:true},{av:'AV11pPedidoCompraAno',fld:'vPPEDIDOCOMPRAANO',hsh:true},{av:'AV12pPedidoCompraNumero',fld:'vPPEDIDOCOMPRANUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoCompraLOGSeq',fld:'vCPEDIDOCOMPRALOGSEQ'},{av:'AV7cPedidoCompraLOGData',fld:'vCPEDIDOCOMPRALOGDATA'},{av:'AV8cPedidoCompraLOGUsuarioAlt',fld:'vCPEDIDOCOMPRALOGUSUARIOALT'},{av:'AV9cPedidoCompraLOGDataHoraAlt',fld:'vCPEDIDOCOMPRALOGDATAHORAALT'},{av:'AV10pPedidoCompraEmpresaId',fld:'vPPEDIDOCOMPRAEMPRESAID',hsh:true},{av:'AV11pPedidoCompraAno',fld:'vPPEDIDOCOMPRAANO',hsh:true},{av:'AV12pPedidoCompraNumero',fld:'vPPEDIDOCOMPRANUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoCompraLOGSeq',fld:'vCPEDIDOCOMPRALOGSEQ'},{av:'AV7cPedidoCompraLOGData',fld:'vCPEDIDOCOMPRALOGDATA'},{av:'AV8cPedidoCompraLOGUsuarioAlt',fld:'vCPEDIDOCOMPRALOGUSUARIOALT'},{av:'AV9cPedidoCompraLOGDataHoraAlt',fld:'vCPEDIDOCOMPRALOGDATAHORAALT'},{av:'AV10pPedidoCompraEmpresaId',fld:'vPPEDIDOCOMPRAEMPRESAID',hsh:true},{av:'AV11pPedidoCompraAno',fld:'vPPEDIDOCOMPRAANO',hsh:true},{av:'AV12pPedidoCompraNumero',fld:'vPPEDIDOCOMPRANUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoCompraLOGSeq',fld:'vCPEDIDOCOMPRALOGSEQ'},{av:'AV7cPedidoCompraLOGData',fld:'vCPEDIDOCOMPRALOGDATA'},{av:'AV8cPedidoCompraLOGUsuarioAlt',fld:'vCPEDIDOCOMPRALOGUSUARIOALT'},{av:'AV9cPedidoCompraLOGDataHoraAlt',fld:'vCPEDIDOCOMPRALOGDATAHORAALT'},{av:'AV10pPedidoCompraEmpresaId',fld:'vPPEDIDOCOMPRAEMPRESAID',hsh:true},{av:'AV11pPedidoCompraAno',fld:'vPPEDIDOCOMPRAANO',hsh:true},{av:'AV12pPedidoCompraNumero',fld:'vPPEDIDOCOMPRANUMERO',hsh:true}],[]];
   this.setVCMap("AV10pPedidoCompraEmpresaId", "vPPEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV11pPedidoCompraAno", "vPPEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("AV12pPedidoCompraNumero", "vPPEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("AV13pPedidoCompraLOGSeq", "vPPEDIDOCOMPRALOGSEQ", 0, "int");
   this.setVCMap("AV10pPedidoCompraEmpresaId", "vPPEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV11pPedidoCompraAno", "vPPEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("AV12pPedidoCompraNumero", "vPPEDIDOCOMPRANUMERO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10pPedidoCompraEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pPedidoCompraAno"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pPedidoCompraNumero"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0b33());
