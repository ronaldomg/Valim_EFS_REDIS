/**@preserve  GeneXus Java 10_3_12-110051 on January 4, 2021 10:47:32.21
*/
gx.evt.autoSkip=!1;gx.define("gx0oi2",!1,function(){var n,t;this.ServerClass="gx0oi2";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV10pPedidoClienteEmpresaId=gx.fn.getControlValue("vPPEDIDOCLIENTEEMPRESAID");this.AV11pPedidoClienteNumero=gx.fn.getIntegerValue("vPPEDIDOCLIENTENUMERO",".");this.AV12pPedidoClienteSaidaEmpId=gx.fn.getControlValue("vPPEDIDOCLIENTESAIDAEMPID");this.AV13pPedidoClienteSaidaId=gx.fn.getIntegerValue("vPPEDIDOCLIENTESAIDAID",".")};this.e132i42_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e142i41_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,43,46];this.GXLastCtrlId=46;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0oi2",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");t.addSingleLineEdit(11859,38,"PEDIDOCLIENTESAIDAEMPID","Emp Id","","PedidoClienteSaidaEmpId","char",0,"px",10,10,"left",null,[],11859,"PedidoClienteSaidaEmpId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11860,39,"PEDIDOCLIENTESAIDAID","Saida Id","","PedidoClienteSaidaId","int",0,"px",10,10,"right",null,[],11860,"PedidoClienteSaidaId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11879,40,"PEDIDOCLIENTESAIDAUSUARIOALT","Usuario Alt","Selecionar","PedidoClienteSaidaUsuarioAlt","char",0,"px",12,12,"left",null,[],11879,"PedidoClienteSaidaUsuarioAlt",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11880,41,"PEDIDOCLIENTESAIDADATAHORAALT","Hora Alt","","PedidoClienteSaidaDataHoraAlt","date",0,"px",10,10,"right",null,[],11880,"PedidoClienteSaidaDataHoraAlt",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11850,42,"PEDIDOCLIENTEEMPRESAID","Pedido Cliente Empresa Id","","PedidoClienteEmpresaId","char",0,"px",10,10,"left",null,[],11850,"PedidoClienteEmpresaId",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11851,43,"PEDIDOCLIENTENUMERO","Pedido Cliente Numero","","PedidoClienteNumero","int",0,"px",10,10,"right",null,[],11851,"PedidoClienteNumero",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[8]={fld:"GROUP1",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCKPEDIDOCLIENTESAIDAEMPID",format:0,grid:0};n[14]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCLIENTESAIDAEMPID",gxz:"ZV6cPedidoClienteSaidaEmpId",gxold:"OV6cPedidoClienteSaidaEmpId",gxvar:"AV6cPedidoClienteSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cPedidoClienteSaidaEmpId=n},v2z:function(n){gx.O.ZV6cPedidoClienteSaidaEmpId=n},v2c:function(){gx.fn.setControlValue("vCPEDIDOCLIENTESAIDAEMPID",gx.O.AV6cPedidoClienteSaidaEmpId,0)},c2v:function(){gx.O.AV6cPedidoClienteSaidaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCLIENTESAIDAEMPID")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCKPEDIDOCLIENTESAIDAID",format:0,grid:0};n[19]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCLIENTESAIDAID",gxz:"ZV7cPedidoClienteSaidaId",gxold:"OV7cPedidoClienteSaidaId",gxvar:"AV7cPedidoClienteSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cPedidoClienteSaidaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV7cPedidoClienteSaidaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCLIENTESAIDAID",gx.O.AV7cPedidoClienteSaidaId,0)},c2v:function(){gx.O.AV7cPedidoClienteSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPEDIDOCLIENTESAIDAID",".")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCKPEDIDOCLIENTESAIDAUSUARIOALT",format:0,grid:0};n[24]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCLIENTESAIDAUSUARIOALT",gxz:"ZV8cPedidoClienteSaidaUsuarioAlt",gxold:"OV8cPedidoClienteSaidaUsuarioAlt",gxvar:"AV8cPedidoClienteSaidaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cPedidoClienteSaidaUsuarioAlt=n},v2z:function(n){gx.O.ZV8cPedidoClienteSaidaUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("vCPEDIDOCLIENTESAIDAUSUARIOALT",gx.O.AV8cPedidoClienteSaidaUsuarioAlt,0)},c2v:function(){gx.O.AV8cPedidoClienteSaidaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCPEDIDOCLIENTESAIDAUSUARIOALT")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCKPEDIDOCLIENTESAIDADATAHORAALT",format:0,grid:0};n[29]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPEDIDOCLIENTESAIDADATAHORAALT",gxz:"ZV9cPedidoClienteSaidaDataHoraAlt",gxold:"OV9cPedidoClienteSaidaDataHoraAlt",gxvar:"AV9cPedidoClienteSaidaDataHoraAlt",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cPedidoClienteSaidaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV9cPedidoClienteSaidaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vCPEDIDOCLIENTESAIDADATAHORAALT",gx.O.AV9cPedidoClienteSaidaDataHoraAlt,0)},c2v:function(){gx.O.AV9cPedidoClienteSaidaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCPEDIDOCLIENTESAIDADATAHORAALT")},nac:gx.falseFn};n[32]={fld:"GROUP2",grid:0};n[33]={fld:"TABLE3",grid:0};n[37]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(36))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(36))},gxvar_GXI:"AV16Linkselection_GXI",nac:gx.falseFn};n[38]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCLIENTESAIDAEMPID",gxz:"Z11859PedidoClienteSaidaEmpId",gxold:"O11859PedidoClienteSaidaEmpId",gxvar:"A11859PedidoClienteSaidaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11859PedidoClienteSaidaEmpId=n},v2z:function(n){gx.O.Z11859PedidoClienteSaidaEmpId=n},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCLIENTESAIDAEMPID",n||gx.fn.currentGridRowImpl(36),gx.O.A11859PedidoClienteSaidaEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11859PedidoClienteSaidaEmpId=this.val()},val:function(n){return gx.fn.getGridControlValue("PEDIDOCLIENTESAIDAEMPID",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[39]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCLIENTESAIDAID",gxz:"Z11860PedidoClienteSaidaId",gxold:"O11860PedidoClienteSaidaId",gxvar:"A11860PedidoClienteSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11860PedidoClienteSaidaId=gx.num.intval(n)},v2z:function(n){gx.O.Z11860PedidoClienteSaidaId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCLIENTESAIDAID",n||gx.fn.currentGridRowImpl(36),gx.O.A11860PedidoClienteSaidaId,0)},c2v:function(){gx.O.A11860PedidoClienteSaidaId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PEDIDOCLIENTESAIDAID",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[40]={lvl:2,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCLIENTESAIDAUSUARIOALT",gxz:"Z11879PedidoClienteSaidaUsuarioAlt",gxold:"O11879PedidoClienteSaidaUsuarioAlt",gxvar:"A11879PedidoClienteSaidaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11879PedidoClienteSaidaUsuarioAlt=n},v2z:function(n){gx.O.Z11879PedidoClienteSaidaUsuarioAlt=n},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCLIENTESAIDAUSUARIOALT",n||gx.fn.currentGridRowImpl(36),gx.O.A11879PedidoClienteSaidaUsuarioAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11879PedidoClienteSaidaUsuarioAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("PEDIDOCLIENTESAIDAUSUARIOALT",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[41]={lvl:2,type:"date",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCLIENTESAIDADATAHORAALT",gxz:"Z11880PedidoClienteSaidaDataHoraAlt",gxold:"O11880PedidoClienteSaidaDataHoraAlt",gxvar:"A11880PedidoClienteSaidaDataHoraAlt",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11880PedidoClienteSaidaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z11880PedidoClienteSaidaDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCLIENTESAIDADATAHORAALT",n||gx.fn.currentGridRowImpl(36),gx.O.A11880PedidoClienteSaidaDataHoraAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11880PedidoClienteSaidaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("PEDIDOCLIENTESAIDADATAHORAALT",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[42]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCLIENTEEMPRESAID",gxz:"Z11850PedidoClienteEmpresaId",gxold:"O11850PedidoClienteEmpresaId",gxvar:"A11850PedidoClienteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11850PedidoClienteEmpresaId=n},v2z:function(n){gx.O.Z11850PedidoClienteEmpresaId=n},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCLIENTEEMPRESAID",n||gx.fn.currentGridRowImpl(36),gx.O.A11850PedidoClienteEmpresaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11850PedidoClienteEmpresaId=this.val()},val:function(n){return gx.fn.getGridControlValue("PEDIDOCLIENTEEMPRESAID",n||gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};n[43]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOCLIENTENUMERO",gxz:"Z11851PedidoClienteNumero",gxold:"O11851PedidoClienteNumero",gxvar:"A11851PedidoClienteNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11851PedidoClienteNumero=gx.num.intval(n)},v2z:function(n){gx.O.Z11851PedidoClienteNumero=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PEDIDOCLIENTENUMERO",n||gx.fn.currentGridRowImpl(36),gx.O.A11851PedidoClienteNumero,0)},c2v:function(){gx.O.A11851PedidoClienteNumero=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PEDIDOCLIENTENUMERO",n||gx.fn.currentGridRowImpl(36),".")},nac:gx.falseFn};n[46]={fld:"TABLE4",grid:0};this.AV6cPedidoClienteSaidaEmpId="";this.ZV6cPedidoClienteSaidaEmpId="";this.OV6cPedidoClienteSaidaEmpId="";this.AV7cPedidoClienteSaidaId=0;this.ZV7cPedidoClienteSaidaId=0;this.OV7cPedidoClienteSaidaId=0;this.AV8cPedidoClienteSaidaUsuarioAlt="";this.ZV8cPedidoClienteSaidaUsuarioAlt="";this.OV8cPedidoClienteSaidaUsuarioAlt="";this.AV9cPedidoClienteSaidaDataHoraAlt=gx.date.nullDate();this.ZV9cPedidoClienteSaidaDataHoraAlt=gx.date.nullDate();this.OV9cPedidoClienteSaidaDataHoraAlt=gx.date.nullDate();this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z11859PedidoClienteSaidaEmpId="";this.O11859PedidoClienteSaidaEmpId="";this.Z11860PedidoClienteSaidaId=0;this.O11860PedidoClienteSaidaId=0;this.Z11879PedidoClienteSaidaUsuarioAlt="";this.O11879PedidoClienteSaidaUsuarioAlt="";this.Z11880PedidoClienteSaidaDataHoraAlt=gx.date.nullDate();this.O11880PedidoClienteSaidaDataHoraAlt=gx.date.nullDate();this.Z11850PedidoClienteEmpresaId="";this.O11850PedidoClienteEmpresaId="";this.Z11851PedidoClienteNumero=0;this.O11851PedidoClienteNumero=0;this.AV6cPedidoClienteSaidaEmpId="";this.AV7cPedidoClienteSaidaId=0;this.AV8cPedidoClienteSaidaUsuarioAlt="";this.AV9cPedidoClienteSaidaDataHoraAlt=gx.date.nullDate();this.AV10pPedidoClienteEmpresaId="";this.AV11pPedidoClienteNumero=0;this.AV12pPedidoClienteSaidaEmpId="";this.AV13pPedidoClienteSaidaId=0;this.AV5LinkSelection="";this.A11859PedidoClienteSaidaEmpId="";this.A11860PedidoClienteSaidaId=0;this.A11879PedidoClienteSaidaUsuarioAlt="";this.A11880PedidoClienteSaidaDataHoraAlt=gx.date.nullDate();this.A11850PedidoClienteEmpresaId="";this.A11851PedidoClienteNumero=0;this.Events={e132i42_client:["ENTER",!0],e142i41_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoClienteSaidaEmpId",fld:"vCPEDIDOCLIENTESAIDAEMPID"},{av:"AV7cPedidoClienteSaidaId",fld:"vCPEDIDOCLIENTESAIDAID"},{av:"AV8cPedidoClienteSaidaUsuarioAlt",fld:"vCPEDIDOCLIENTESAIDAUSUARIOALT"},{av:"AV9cPedidoClienteSaidaDataHoraAlt",fld:"vCPEDIDOCLIENTESAIDADATAHORAALT"},{av:"AV10pPedidoClienteEmpresaId",fld:"vPPEDIDOCLIENTEEMPRESAID",hsh:!0},{av:"AV11pPedidoClienteNumero",fld:"vPPEDIDOCLIENTENUMERO",hsh:!0}],[]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A11859PedidoClienteSaidaEmpId",fld:"PEDIDOCLIENTESAIDAEMPID"},{av:"A11860PedidoClienteSaidaId",fld:"PEDIDOCLIENTESAIDAID"}],[{av:"AV12pPedidoClienteSaidaEmpId",fld:"vPPEDIDOCLIENTESAIDAEMPID"},{av:"AV13pPedidoClienteSaidaId",fld:"vPPEDIDOCLIENTESAIDAID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoClienteSaidaEmpId",fld:"vCPEDIDOCLIENTESAIDAEMPID"},{av:"AV7cPedidoClienteSaidaId",fld:"vCPEDIDOCLIENTESAIDAID"},{av:"AV8cPedidoClienteSaidaUsuarioAlt",fld:"vCPEDIDOCLIENTESAIDAUSUARIOALT"},{av:"AV9cPedidoClienteSaidaDataHoraAlt",fld:"vCPEDIDOCLIENTESAIDADATAHORAALT"},{av:"AV10pPedidoClienteEmpresaId",fld:"vPPEDIDOCLIENTEEMPRESAID",hsh:!0},{av:"AV11pPedidoClienteNumero",fld:"vPPEDIDOCLIENTENUMERO",hsh:!0}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoClienteSaidaEmpId",fld:"vCPEDIDOCLIENTESAIDAEMPID"},{av:"AV7cPedidoClienteSaidaId",fld:"vCPEDIDOCLIENTESAIDAID"},{av:"AV8cPedidoClienteSaidaUsuarioAlt",fld:"vCPEDIDOCLIENTESAIDAUSUARIOALT"},{av:"AV9cPedidoClienteSaidaDataHoraAlt",fld:"vCPEDIDOCLIENTESAIDADATAHORAALT"},{av:"AV10pPedidoClienteEmpresaId",fld:"vPPEDIDOCLIENTEEMPRESAID",hsh:!0},{av:"AV11pPedidoClienteNumero",fld:"vPPEDIDOCLIENTENUMERO",hsh:!0}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoClienteSaidaEmpId",fld:"vCPEDIDOCLIENTESAIDAEMPID"},{av:"AV7cPedidoClienteSaidaId",fld:"vCPEDIDOCLIENTESAIDAID"},{av:"AV8cPedidoClienteSaidaUsuarioAlt",fld:"vCPEDIDOCLIENTESAIDAUSUARIOALT"},{av:"AV9cPedidoClienteSaidaDataHoraAlt",fld:"vCPEDIDOCLIENTESAIDADATAHORAALT"},{av:"AV10pPedidoClienteEmpresaId",fld:"vPPEDIDOCLIENTEEMPRESAID",hsh:!0},{av:"AV11pPedidoClienteNumero",fld:"vPPEDIDOCLIENTENUMERO",hsh:!0}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cPedidoClienteSaidaEmpId",fld:"vCPEDIDOCLIENTESAIDAEMPID"},{av:"AV7cPedidoClienteSaidaId",fld:"vCPEDIDOCLIENTESAIDAID"},{av:"AV8cPedidoClienteSaidaUsuarioAlt",fld:"vCPEDIDOCLIENTESAIDAUSUARIOALT"},{av:"AV9cPedidoClienteSaidaDataHoraAlt",fld:"vCPEDIDOCLIENTESAIDADATAHORAALT"},{av:"AV10pPedidoClienteEmpresaId",fld:"vPPEDIDOCLIENTEEMPRESAID",hsh:!0},{av:"AV11pPedidoClienteNumero",fld:"vPPEDIDOCLIENTENUMERO",hsh:!0}],[]];this.setVCMap("AV10pPedidoClienteEmpresaId","vPPEDIDOCLIENTEEMPRESAID",0,"char");this.setVCMap("AV11pPedidoClienteNumero","vPPEDIDOCLIENTENUMERO",0,"int");this.setVCMap("AV12pPedidoClienteSaidaEmpId","vPPEDIDOCLIENTESAIDAEMPID",0,"char");this.setVCMap("AV13pPedidoClienteSaidaId","vPPEDIDOCLIENTESAIDAID",0,"int");this.setVCMap("AV10pPedidoClienteEmpresaId","vPPEDIDOCLIENTEEMPRESAID",0,"char");this.setVCMap("AV11pPedidoClienteNumero","vPPEDIDOCLIENTENUMERO",0,"int");t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[24]);t.addRefreshingVar(this.GXValidFnc[29]);t.addRefreshingVar({rfrVar:"AV10pPedidoClienteEmpresaId"});t.addRefreshingVar({rfrVar:"AV11pPedidoClienteNumero"});this.InitStandaloneVars()});gx.setParentObj(new gx0oi2)