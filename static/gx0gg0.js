/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:40:31.19
*/
gx.evt.autoSkip = false;
gx.define('gx0gg0', false, function () {
   this.ServerClass =  "gx0gg0" ;
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
      this.AV12pPedidoComodatoId=gx.fn.getIntegerValue("vPPEDIDOCOMODATOID",'.') ;
      this.AV13pPedidoComodatoData=gx.fn.getDateValue("vPPEDIDOCOMODATODATA") ;
   };
   this.e131u72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141u71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0gg0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7623,48,"PEDIDOCOMODATOID","Número Comodato","","PedidoComodatoId","int",0,"px",8,8,"right",null,[],7623,"PedidoComodatoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7612,49,"PEDIDOCOMODATODATA","Data","","PedidoComodatoData","date",0,"px",10,10,"right",null,[],7612,"PedidoComodatoData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7613,50,"PEDIDOCOMODATOCLIENTEEMPID","Empresa Clientes","","PedidoComodatoClienteEmpId","char",0,"px",10,10,"left",null,[],7613,"PedidoComodatoClienteEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7614,51,"PEDIDOCOMODATOCLIENTEID","Clientes","","PedidoComodatoClienteId","int",0,"px",7,7,"right",null,[],7614,"PedidoComodatoClienteId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7616,52,"PEDIDOCOMODATOUSUARIOALT","Usuário de Alteração","","PedidoComodatoUsuarioAlt","char",0,"px",12,12,"left",null,[],7616,"PedidoComodatoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7617,53,"PEDIDOCOMODATODATAHORAALT","Data/Hora de Alteração","","PedidoComodatoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],7617,"PedidoComodatoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPEDIDOCOMODATOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATOID",gxz:"ZV6cPedidoComodatoId",gxold:"OV6cPedidoComodatoId",gxvar:"AV6cPedidoComodatoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPedidoComodatoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cPedidoComodatoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMODATOID",gx.O.AV6cPedidoComodatoId,0)},c2v:function(){gx.O.AV6cPedidoComodatoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCOMODATOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPEDIDOCOMODATODATA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATODATA",gxz:"ZV7cPedidoComodatoData",gxold:"OV7cPedidoComodatoData",gxvar:"AV7cPedidoComodatoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPedidoComodatoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7cPedidoComodatoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMODATODATA",gx.O.AV7cPedidoComodatoData,0)},c2v:function(){gx.O.AV7cPedidoComodatoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCPEDIDOCOMODATODATA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPEDIDOCOMODATOCLIENTEEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATOCLIENTEEMPID",gxz:"ZV8cPedidoComodatoClienteEmpId",gxold:"OV8cPedidoComodatoClienteEmpId",gxvar:"AV8cPedidoComodatoClienteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPedidoComodatoClienteEmpId=Value},v2z:function(Value){gx.O.ZV8cPedidoComodatoClienteEmpId=Value},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMODATOCLIENTEEMPID",gx.O.AV8cPedidoComodatoClienteEmpId,0)},c2v:function(){gx.O.AV8cPedidoComodatoClienteEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCOMODATOCLIENTEEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPEDIDOCOMODATOCLIENTEID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATOCLIENTEID",gxz:"ZV9cPedidoComodatoClienteId",gxold:"OV9cPedidoComodatoClienteId",gxvar:"AV9cPedidoComodatoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPedidoComodatoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cPedidoComodatoClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMODATOCLIENTEID",gx.O.AV9cPedidoComodatoClienteId,0)},c2v:function(){gx.O.AV9cPedidoComodatoClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCOMODATOCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPEDIDOCOMODATOUSUARIOALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATOUSUARIOALT",gxz:"ZV10cPedidoComodatoUsuarioAlt",gxold:"OV10cPedidoComodatoUsuarioAlt",gxvar:"AV10cPedidoComodatoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cPedidoComodatoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV10cPedidoComodatoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMODATOUSUARIOALT",gx.O.AV10cPedidoComodatoUsuarioAlt,0)},c2v:function(){gx.O.AV10cPedidoComodatoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCOMODATOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPEDIDOCOMODATODATAHORAALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCOMODATODATAHORAALT",gxz:"ZV11cPedidoComodatoDataHoraAlt",gxold:"OV11cPedidoComodatoDataHoraAlt",gxvar:"AV11cPedidoComodatoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cPedidoComodatoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cPedidoComodatoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCOMODATODATAHORAALT",gx.O.AV11cPedidoComodatoDataHoraAlt,0)},c2v:function(){gx.O.AV11cPedidoComodatoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPEDIDOCOMODATODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATOID",gxz:"Z7623PedidoComodatoId",gxold:"O7623PedidoComodatoId",gxvar:"A7623PedidoComodatoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7623PedidoComodatoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7623PedidoComodatoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATOID",row || gx.fn.currentGridRowImpl(46),gx.O.A7623PedidoComodatoId,0)},c2v:function(){gx.O.A7623PedidoComodatoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMODATOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATODATA",gxz:"Z7612PedidoComodatoData",gxold:"O7612PedidoComodatoData",gxvar:"A7612PedidoComodatoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7612PedidoComodatoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7612PedidoComodatoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATODATA",row || gx.fn.currentGridRowImpl(46),gx.O.A7612PedidoComodatoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7612PedidoComodatoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMODATODATA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATOCLIENTEEMPID",gxz:"Z7613PedidoComodatoClienteEmpId",gxold:"O7613PedidoComodatoClienteEmpId",gxvar:"A7613PedidoComodatoClienteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7613PedidoComodatoClienteEmpId=Value},v2z:function(Value){gx.O.Z7613PedidoComodatoClienteEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATOCLIENTEEMPID",row || gx.fn.currentGridRowImpl(46),gx.O.A7613PedidoComodatoClienteEmpId,0)},c2v:function(){gx.O.A7613PedidoComodatoClienteEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMODATOCLIENTEEMPID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATOCLIENTEID",gxz:"Z7614PedidoComodatoClienteId",gxold:"O7614PedidoComodatoClienteId",gxvar:"A7614PedidoComodatoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7614PedidoComodatoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7614PedidoComodatoClienteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATOCLIENTEID",row || gx.fn.currentGridRowImpl(46),gx.O.A7614PedidoComodatoClienteId,0)},c2v:function(){gx.O.A7614PedidoComodatoClienteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PEDIDOCOMODATOCLIENTEID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATOUSUARIOALT",gxz:"Z7616PedidoComodatoUsuarioAlt",gxold:"O7616PedidoComodatoUsuarioAlt",gxvar:"A7616PedidoComodatoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7616PedidoComodatoUsuarioAlt=Value},v2z:function(Value){gx.O.Z7616PedidoComodatoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATOUSUARIOALT",row || gx.fn.currentGridRowImpl(46),gx.O.A7616PedidoComodatoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7616PedidoComodatoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("PEDIDOCOMODATOUSUARIOALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCOMODATODATAHORAALT",gxz:"Z7617PedidoComodatoDataHoraAlt",gxold:"O7617PedidoComodatoDataHoraAlt",gxvar:"A7617PedidoComodatoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7617PedidoComodatoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7617PedidoComodatoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PEDIDOCOMODATODATAHORAALT",row || gx.fn.currentGridRowImpl(46),gx.O.A7617PedidoComodatoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7617PedidoComodatoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PEDIDOCOMODATODATAHORAALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cPedidoComodatoId = 0 ;
   this.ZV6cPedidoComodatoId = 0 ;
   this.OV6cPedidoComodatoId = 0 ;
   this.AV7cPedidoComodatoData = gx.date.nullDate() ;
   this.ZV7cPedidoComodatoData = gx.date.nullDate() ;
   this.OV7cPedidoComodatoData = gx.date.nullDate() ;
   this.AV8cPedidoComodatoClienteEmpId = "" ;
   this.ZV8cPedidoComodatoClienteEmpId = "" ;
   this.OV8cPedidoComodatoClienteEmpId = "" ;
   this.AV9cPedidoComodatoClienteId = 0 ;
   this.ZV9cPedidoComodatoClienteId = 0 ;
   this.OV9cPedidoComodatoClienteId = 0 ;
   this.AV10cPedidoComodatoUsuarioAlt = "" ;
   this.ZV10cPedidoComodatoUsuarioAlt = "" ;
   this.OV10cPedidoComodatoUsuarioAlt = "" ;
   this.AV11cPedidoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.ZV11cPedidoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.OV11cPedidoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7623PedidoComodatoId = 0 ;
   this.O7623PedidoComodatoId = 0 ;
   this.Z7612PedidoComodatoData = gx.date.nullDate() ;
   this.O7612PedidoComodatoData = gx.date.nullDate() ;
   this.Z7613PedidoComodatoClienteEmpId = "" ;
   this.O7613PedidoComodatoClienteEmpId = "" ;
   this.Z7614PedidoComodatoClienteId = 0 ;
   this.O7614PedidoComodatoClienteId = 0 ;
   this.Z7616PedidoComodatoUsuarioAlt = "" ;
   this.O7616PedidoComodatoUsuarioAlt = "" ;
   this.Z7617PedidoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.O7617PedidoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.AV6cPedidoComodatoId = 0 ;
   this.AV7cPedidoComodatoData = gx.date.nullDate() ;
   this.AV8cPedidoComodatoClienteEmpId = "" ;
   this.AV9cPedidoComodatoClienteId = 0 ;
   this.AV10cPedidoComodatoUsuarioAlt = "" ;
   this.AV11cPedidoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.AV12pPedidoComodatoId = 0 ;
   this.AV13pPedidoComodatoData = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A7623PedidoComodatoId = 0 ;
   this.A7612PedidoComodatoData = gx.date.nullDate() ;
   this.A7613PedidoComodatoClienteEmpId = "" ;
   this.A7614PedidoComodatoClienteId = 0 ;
   this.A7616PedidoComodatoUsuarioAlt = "" ;
   this.A7617PedidoComodatoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131u72_client": ["ENTER", true] ,"e141u71_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoComodatoId',fld:'vCPEDIDOCOMODATOID'},{av:'AV7cPedidoComodatoData',fld:'vCPEDIDOCOMODATODATA'},{av:'AV8cPedidoComodatoClienteEmpId',fld:'vCPEDIDOCOMODATOCLIENTEEMPID'},{av:'AV9cPedidoComodatoClienteId',fld:'vCPEDIDOCOMODATOCLIENTEID'},{av:'AV10cPedidoComodatoUsuarioAlt',fld:'vCPEDIDOCOMODATOUSUARIOALT'},{av:'AV11cPedidoComodatoDataHoraAlt',fld:'vCPEDIDOCOMODATODATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7623PedidoComodatoId',fld:'PEDIDOCOMODATOID'},{av:'A7612PedidoComodatoData',fld:'PEDIDOCOMODATODATA'}],[{av:'AV12pPedidoComodatoId',fld:'vPPEDIDOCOMODATOID'},{av:'AV13pPedidoComodatoData',fld:'vPPEDIDOCOMODATODATA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoComodatoId',fld:'vCPEDIDOCOMODATOID'},{av:'AV7cPedidoComodatoData',fld:'vCPEDIDOCOMODATODATA'},{av:'AV8cPedidoComodatoClienteEmpId',fld:'vCPEDIDOCOMODATOCLIENTEEMPID'},{av:'AV9cPedidoComodatoClienteId',fld:'vCPEDIDOCOMODATOCLIENTEID'},{av:'AV10cPedidoComodatoUsuarioAlt',fld:'vCPEDIDOCOMODATOUSUARIOALT'},{av:'AV11cPedidoComodatoDataHoraAlt',fld:'vCPEDIDOCOMODATODATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoComodatoId',fld:'vCPEDIDOCOMODATOID'},{av:'AV7cPedidoComodatoData',fld:'vCPEDIDOCOMODATODATA'},{av:'AV8cPedidoComodatoClienteEmpId',fld:'vCPEDIDOCOMODATOCLIENTEEMPID'},{av:'AV9cPedidoComodatoClienteId',fld:'vCPEDIDOCOMODATOCLIENTEID'},{av:'AV10cPedidoComodatoUsuarioAlt',fld:'vCPEDIDOCOMODATOUSUARIOALT'},{av:'AV11cPedidoComodatoDataHoraAlt',fld:'vCPEDIDOCOMODATODATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoComodatoId',fld:'vCPEDIDOCOMODATOID'},{av:'AV7cPedidoComodatoData',fld:'vCPEDIDOCOMODATODATA'},{av:'AV8cPedidoComodatoClienteEmpId',fld:'vCPEDIDOCOMODATOCLIENTEEMPID'},{av:'AV9cPedidoComodatoClienteId',fld:'vCPEDIDOCOMODATOCLIENTEID'},{av:'AV10cPedidoComodatoUsuarioAlt',fld:'vCPEDIDOCOMODATOUSUARIOALT'},{av:'AV11cPedidoComodatoDataHoraAlt',fld:'vCPEDIDOCOMODATODATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPedidoComodatoId',fld:'vCPEDIDOCOMODATOID'},{av:'AV7cPedidoComodatoData',fld:'vCPEDIDOCOMODATODATA'},{av:'AV8cPedidoComodatoClienteEmpId',fld:'vCPEDIDOCOMODATOCLIENTEEMPID'},{av:'AV9cPedidoComodatoClienteId',fld:'vCPEDIDOCOMODATOCLIENTEID'},{av:'AV10cPedidoComodatoUsuarioAlt',fld:'vCPEDIDOCOMODATOUSUARIOALT'},{av:'AV11cPedidoComodatoDataHoraAlt',fld:'vCPEDIDOCOMODATODATAHORAALT'}],[]];
   this.setVCMap("AV12pPedidoComodatoId", "vPPEDIDOCOMODATOID", 0, "int");
   this.setVCMap("AV13pPedidoComodatoData", "vPPEDIDOCOMODATODATA", 0, "date");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0gg0());