/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:35:45.32
*/
gx.evt.autoSkip = false;
gx.define('gx0bo0', false, function () {
   this.ServerClass =  "gx0bo0" ;
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
      this.AV11pTipoPedidoEmpresaId=gx.fn.getControlValue("vPTIPOPEDIDOEMPRESAID") ;
      this.AV12pTipoPedidoId=gx.fn.getControlValue("vPTIPOPEDIDOID") ;
   };
   this.e131q92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141q91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0bo0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4083,43,"TIPOPEDIDOEMPRESAID","Empresa Tipo Pedido","","TipoPedidoEmpresaId","char",0,"px",10,10,"left",null,[],4083,"TipoPedidoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3753,44,"TIPOPEDIDOID","Código do Tipo de Pedido","","TipoPedidoId","char",0,"px",3,3,"left",null,[],3753,"TipoPedidoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4080,45,"TIPOPEDIDODESCRICAO","Descrição do Tipo de Pedido","Selecionar","TipoPedidoDescricao","svchar",0,"px",30,30,"left",null,[],4080,"TipoPedidoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4081,46,"TIPOPEDIDOUSUARIOALT","Usuário de Alteração","","TipoPedidoUsuarioAlt","char",0,"px",12,12,"left",null,[],4081,"TipoPedidoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4082,47,"TIPOPEDIDODATAHORAALT","Data/Hora de Alteração","","TipoPedidoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],4082,"TipoPedidoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOPEDIDOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPEDIDOEMPRESAID",gxz:"ZV6cTipoPedidoEmpresaId",gxold:"OV6cTipoPedidoEmpresaId",gxvar:"AV6cTipoPedidoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoPedidoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTipoPedidoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOPEDIDOEMPRESAID",gx.O.AV6cTipoPedidoEmpresaId,0)},c2v:function(){gx.O.AV6cTipoPedidoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPEDIDOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPOPEDIDOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPEDIDOID",gxz:"ZV7cTipoPedidoId",gxold:"OV7cTipoPedidoId",gxvar:"AV7cTipoPedidoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoPedidoId=Value},v2z:function(Value){gx.O.ZV7cTipoPedidoId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOPEDIDOID",gx.O.AV7cTipoPedidoId,0)},c2v:function(){gx.O.AV7cTipoPedidoId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPEDIDOID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPOPEDIDODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPEDIDODESCRICAO",gxz:"ZV8cTipoPedidoDescricao",gxold:"OV8cTipoPedidoDescricao",gxvar:"AV8cTipoPedidoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoPedidoDescricao=Value},v2z:function(Value){gx.O.ZV8cTipoPedidoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTIPOPEDIDODESCRICAO",gx.O.AV8cTipoPedidoDescricao,0)},c2v:function(){gx.O.AV8cTipoPedidoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPEDIDODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOPEDIDOUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPEDIDOUSUARIOALT",gxz:"ZV9cTipoPedidoUsuarioAlt",gxold:"OV9cTipoPedidoUsuarioAlt",gxvar:"AV9cTipoPedidoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoPedidoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cTipoPedidoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCTIPOPEDIDOUSUARIOALT",gx.O.AV9cTipoPedidoUsuarioAlt,0)},c2v:function(){gx.O.AV9cTipoPedidoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOPEDIDOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOPEDIDODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPEDIDODATAHORAALT",gxz:"ZV10cTipoPedidoDataHoraAlt",gxold:"OV10cTipoPedidoDataHoraAlt",gxvar:"AV10cTipoPedidoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoPedidoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cTipoPedidoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOPEDIDODATAHORAALT",gx.O.AV10cTipoPedidoDataHoraAlt,0)},c2v:function(){gx.O.AV10cTipoPedidoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCTIPOPEDIDODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPEDIDOEMPRESAID",gxz:"Z4083TipoPedidoEmpresaId",gxold:"O4083TipoPedidoEmpresaId",gxvar:"A4083TipoPedidoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4083TipoPedidoEmpresaId=Value},v2z:function(Value){gx.O.Z4083TipoPedidoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPEDIDOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A4083TipoPedidoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4083TipoPedidoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPEDIDOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPEDIDOID",gxz:"Z3753TipoPedidoId",gxold:"O3753TipoPedidoId",gxvar:"A3753TipoPedidoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3753TipoPedidoId=Value},v2z:function(Value){gx.O.Z3753TipoPedidoId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPEDIDOID",row || gx.fn.currentGridRowImpl(41),gx.O.A3753TipoPedidoId,0)},c2v:function(){gx.O.A3753TipoPedidoId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPEDIDOID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPEDIDODESCRICAO",gxz:"Z4080TipoPedidoDescricao",gxold:"O4080TipoPedidoDescricao",gxvar:"A4080TipoPedidoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4080TipoPedidoDescricao=Value},v2z:function(Value){gx.O.Z4080TipoPedidoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPEDIDODESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A4080TipoPedidoDescricao,0)},c2v:function(){gx.O.A4080TipoPedidoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPEDIDODESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPEDIDOUSUARIOALT",gxz:"Z4081TipoPedidoUsuarioAlt",gxold:"O4081TipoPedidoUsuarioAlt",gxvar:"A4081TipoPedidoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4081TipoPedidoUsuarioAlt=Value},v2z:function(Value){gx.O.Z4081TipoPedidoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPEDIDOUSUARIOALT",row || gx.fn.currentGridRowImpl(41),gx.O.A4081TipoPedidoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4081TipoPedidoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPEDIDOUSUARIOALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPEDIDODATAHORAALT",gxz:"Z4082TipoPedidoDataHoraAlt",gxold:"O4082TipoPedidoDataHoraAlt",gxvar:"A4082TipoPedidoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4082TipoPedidoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4082TipoPedidoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOPEDIDODATAHORAALT",row || gx.fn.currentGridRowImpl(41),gx.O.A4082TipoPedidoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4082TipoPedidoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TIPOPEDIDODATAHORAALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cTipoPedidoEmpresaId = "" ;
   this.ZV6cTipoPedidoEmpresaId = "" ;
   this.OV6cTipoPedidoEmpresaId = "" ;
   this.AV7cTipoPedidoId = "" ;
   this.ZV7cTipoPedidoId = "" ;
   this.OV7cTipoPedidoId = "" ;
   this.AV8cTipoPedidoDescricao = "" ;
   this.ZV8cTipoPedidoDescricao = "" ;
   this.OV8cTipoPedidoDescricao = "" ;
   this.AV9cTipoPedidoUsuarioAlt = "" ;
   this.ZV9cTipoPedidoUsuarioAlt = "" ;
   this.OV9cTipoPedidoUsuarioAlt = "" ;
   this.AV10cTipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cTipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.OV10cTipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4083TipoPedidoEmpresaId = "" ;
   this.O4083TipoPedidoEmpresaId = "" ;
   this.Z3753TipoPedidoId = "" ;
   this.O3753TipoPedidoId = "" ;
   this.Z4080TipoPedidoDescricao = "" ;
   this.O4080TipoPedidoDescricao = "" ;
   this.Z4081TipoPedidoUsuarioAlt = "" ;
   this.O4081TipoPedidoUsuarioAlt = "" ;
   this.Z4082TipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.O4082TipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.AV6cTipoPedidoEmpresaId = "" ;
   this.AV7cTipoPedidoId = "" ;
   this.AV8cTipoPedidoDescricao = "" ;
   this.AV9cTipoPedidoUsuarioAlt = "" ;
   this.AV10cTipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.AV11pTipoPedidoEmpresaId = "" ;
   this.AV12pTipoPedidoId = "" ;
   this.AV5LinkSelection = "" ;
   this.A4083TipoPedidoEmpresaId = "" ;
   this.A3753TipoPedidoId = "" ;
   this.A4080TipoPedidoDescricao = "" ;
   this.A4081TipoPedidoUsuarioAlt = "" ;
   this.A4082TipoPedidoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131q92_client": ["ENTER", true] ,"e141q91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPedidoEmpresaId',fld:'vCTIPOPEDIDOEMPRESAID'},{av:'AV7cTipoPedidoId',fld:'vCTIPOPEDIDOID'},{av:'AV8cTipoPedidoDescricao',fld:'vCTIPOPEDIDODESCRICAO'},{av:'AV9cTipoPedidoUsuarioAlt',fld:'vCTIPOPEDIDOUSUARIOALT'},{av:'AV10cTipoPedidoDataHoraAlt',fld:'vCTIPOPEDIDODATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4083TipoPedidoEmpresaId',fld:'TIPOPEDIDOEMPRESAID'},{av:'A3753TipoPedidoId',fld:'TIPOPEDIDOID'}],[{av:'AV11pTipoPedidoEmpresaId',fld:'vPTIPOPEDIDOEMPRESAID'},{av:'AV12pTipoPedidoId',fld:'vPTIPOPEDIDOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPedidoEmpresaId',fld:'vCTIPOPEDIDOEMPRESAID'},{av:'AV7cTipoPedidoId',fld:'vCTIPOPEDIDOID'},{av:'AV8cTipoPedidoDescricao',fld:'vCTIPOPEDIDODESCRICAO'},{av:'AV9cTipoPedidoUsuarioAlt',fld:'vCTIPOPEDIDOUSUARIOALT'},{av:'AV10cTipoPedidoDataHoraAlt',fld:'vCTIPOPEDIDODATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPedidoEmpresaId',fld:'vCTIPOPEDIDOEMPRESAID'},{av:'AV7cTipoPedidoId',fld:'vCTIPOPEDIDOID'},{av:'AV8cTipoPedidoDescricao',fld:'vCTIPOPEDIDODESCRICAO'},{av:'AV9cTipoPedidoUsuarioAlt',fld:'vCTIPOPEDIDOUSUARIOALT'},{av:'AV10cTipoPedidoDataHoraAlt',fld:'vCTIPOPEDIDODATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPedidoEmpresaId',fld:'vCTIPOPEDIDOEMPRESAID'},{av:'AV7cTipoPedidoId',fld:'vCTIPOPEDIDOID'},{av:'AV8cTipoPedidoDescricao',fld:'vCTIPOPEDIDODESCRICAO'},{av:'AV9cTipoPedidoUsuarioAlt',fld:'vCTIPOPEDIDOUSUARIOALT'},{av:'AV10cTipoPedidoDataHoraAlt',fld:'vCTIPOPEDIDODATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPedidoEmpresaId',fld:'vCTIPOPEDIDOEMPRESAID'},{av:'AV7cTipoPedidoId',fld:'vCTIPOPEDIDOID'},{av:'AV8cTipoPedidoDescricao',fld:'vCTIPOPEDIDODESCRICAO'},{av:'AV9cTipoPedidoUsuarioAlt',fld:'vCTIPOPEDIDOUSUARIOALT'},{av:'AV10cTipoPedidoDataHoraAlt',fld:'vCTIPOPEDIDODATAHORAALT'}],[]];
   this.setVCMap("AV11pTipoPedidoEmpresaId", "vPTIPOPEDIDOEMPRESAID", 0, "char");
   this.setVCMap("AV12pTipoPedidoId", "vPTIPOPEDIDOID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0bo0());
