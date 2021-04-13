/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:42.62
*/
gx.evt.autoSkip = false;
gx.define('gx0483', false, function () {
   this.ServerClass =  "gx0483" ;
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
      this.AV10pTransacaoPagRecEmpresaId=gx.fn.getControlValue("vPTRANSACAOPAGRECEMPRESAID") ;
      this.AV11pTransacaoPagRecTipo=gx.fn.getControlValue("vPTRANSACAOPAGRECTIPO") ;
      this.AV12pTransacaoPagRecId=gx.fn.getControlValue("vPTRANSACAOPAGRECID") ;
      this.AV13pTransacaoPagRecFilialEmpresaid=gx.fn.getControlValue("vPTRANSACAOPAGRECFILIALEMPRESAID") ;
      this.AV14pTransacaoPagRecFilialId=gx.fn.getIntegerValue("vPTRANSACAOPAGRECFILIALID",'.') ;
   };
   this.e131ke2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ke1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,43,44,45,46,49];
   this.GXLastCtrlId =49;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0483",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1301,38,"TRANSACAOPAGRECFILIALEMPRESAID","Empresa","","TransacaoPagRecFilialEmpresaid","char",0,"px",10,10,"left",null,[],1301,"TransacaoPagRecFilialEmpresaid",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1302,39,"TRANSACAOPAGRECFILIALID","Filial","","TransacaoPagRecFilialId","int",0,"px",7,7,"right",null,[],1302,"TransacaoPagRecFilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1297,40,"TRANSACAOPAGRECCCONTABILEMPRES","Empresa","","TransacaoPagRecCContabilEmpres","char",0,"px",10,10,"left",null,[],1297,"TransacaoPagRecCContabilEmpres",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1298,41,"TRANSACAOPAGRECCCONTABILID","Conta Contábil","","TransacaoPagRecCContabilId","svchar",0,"px",30,30,"left",null,[],1298,"TransacaoPagRecCContabilId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1299,42,"TRANSACAOPAGRECCCONTABILUSUARI","Usuário","","TransacaoPagRecCContabilUsuari","char",0,"px",12,12,"left",null,[],1299,"TransacaoPagRecCContabilUsuari",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1300,43,"TRANSACAOPAGRECCCONTABILDATAHO","Data/Hora Alteração","","TransacaoPagRecCContabilDataHo","dtime",0,"px",16,16,"right",null,[],1300,"TransacaoPagRecCContabilDataHo",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1212,44,"TRANSACAOPAGRECEMPRESAID","Transacao Pag Rec Empresa Id","","TransacaoPagRecEmpresaId","char",0,"px",10,10,"left",null,[],1212,"TransacaoPagRecEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1175,45,"TRANSACAOPAGRECTIPO","Tipo","TransacaoPagRecTipo","char",null,0,false,false,0,"px","");
   Grid1Container.addSingleLineEdit(1266,46,"TRANSACAOPAGRECID","Código","","TransacaoPagRecId","char",0,"px",8,8,"left",null,[],1266,"TransacaoPagRecId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTRANSACAOPAGRECFILIALEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECFILIALEMPRESAID",gxz:"ZV6cTransacaoPagRecFilialEmpresaid",gxold:"OV6cTransacaoPagRecFilialEmpresaid",gxvar:"AV6cTransacaoPagRecFilialEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTransacaoPagRecFilialEmpresaid=Value},v2z:function(Value){gx.O.ZV6cTransacaoPagRecFilialEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPAGRECFILIALEMPRESAID",gx.O.AV6cTransacaoPagRecFilialEmpresaid,0)},c2v:function(){gx.O.AV6cTransacaoPagRecFilialEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPAGRECFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTRANSACAOPAGRECFILIALID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECFILIALID",gxz:"ZV7cTransacaoPagRecFilialId",gxold:"OV7cTransacaoPagRecFilialId",gxvar:"AV7cTransacaoPagRecFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTransacaoPagRecFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTransacaoPagRecFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPAGRECFILIALID",gx.O.AV7cTransacaoPagRecFilialId,0)},c2v:function(){gx.O.AV7cTransacaoPagRecFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRANSACAOPAGRECFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTRANSACAOPAGRECCCONTABILEMPRESAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECCCONTABILEMPRESAID",gxz:"ZV8cTransacaoPagRecCContabilEmpresaId",gxold:"OV8cTransacaoPagRecCContabilEmpresaId",gxvar:"AV8cTransacaoPagRecCContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTransacaoPagRecCContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV8cTransacaoPagRecCContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPAGRECCCONTABILEMPRESAID",gx.O.AV8cTransacaoPagRecCContabilEmpresaId,0)},c2v:function(){gx.O.AV8cTransacaoPagRecCContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPAGRECCCONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTRANSACAOPAGRECCCONTABILID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECCCONTABILID",gxz:"ZV9cTransacaoPagRecCContabilId",gxold:"OV9cTransacaoPagRecCContabilId",gxvar:"AV9cTransacaoPagRecCContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTransacaoPagRecCContabilId=Value},v2z:function(Value){gx.O.ZV9cTransacaoPagRecCContabilId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPAGRECCCONTABILID",gx.O.AV9cTransacaoPagRecCContabilId,0)},c2v:function(){gx.O.AV9cTransacaoPagRecCContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPAGRECCCONTABILID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECFILIALEMPRESAID",gxz:"Z1301TransacaoPagRecFilialEmpresaid",gxold:"O1301TransacaoPagRecFilialEmpresaid",gxvar:"A1301TransacaoPagRecFilialEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1301TransacaoPagRecFilialEmpresaid=Value},v2z:function(Value){gx.O.Z1301TransacaoPagRecFilialEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECFILIALEMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A1301TransacaoPagRecFilialEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1301TransacaoPagRecFilialEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECFILIALEMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECFILIALID",gxz:"Z1302TransacaoPagRecFilialId",gxold:"O1302TransacaoPagRecFilialId",gxvar:"A1302TransacaoPagRecFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1302TransacaoPagRecFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1302TransacaoPagRecFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECFILIALID",row || gx.fn.currentGridRowImpl(36),gx.O.A1302TransacaoPagRecFilialId,0)},c2v:function(){gx.O.A1302TransacaoPagRecFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSACAOPAGRECFILIALID",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECCCONTABILEMPRES",gxz:"Z1297TransacaoPagRecCContabilEmpres",gxold:"O1297TransacaoPagRecCContabilEmpres",gxvar:"A1297TransacaoPagRecCContabilEmpres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1297TransacaoPagRecCContabilEmpres=Value},v2z:function(Value){gx.O.Z1297TransacaoPagRecCContabilEmpres=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECCCONTABILEMPRES",row || gx.fn.currentGridRowImpl(36),gx.O.A1297TransacaoPagRecCContabilEmpres,0)},c2v:function(){gx.O.A1297TransacaoPagRecCContabilEmpres=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECCCONTABILEMPRES",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECCCONTABILID",gxz:"Z1298TransacaoPagRecCContabilId",gxold:"O1298TransacaoPagRecCContabilId",gxvar:"A1298TransacaoPagRecCContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1298TransacaoPagRecCContabilId=Value},v2z:function(Value){gx.O.Z1298TransacaoPagRecCContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECCCONTABILID",row || gx.fn.currentGridRowImpl(36),gx.O.A1298TransacaoPagRecCContabilId,0)},c2v:function(){gx.O.A1298TransacaoPagRecCContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECCCONTABILID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECCCONTABILUSUARI",gxz:"Z1299TransacaoPagRecCContabilUsuari",gxold:"O1299TransacaoPagRecCContabilUsuari",gxvar:"A1299TransacaoPagRecCContabilUsuari",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1299TransacaoPagRecCContabilUsuari=Value},v2z:function(Value){gx.O.Z1299TransacaoPagRecCContabilUsuari=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECCCONTABILUSUARI",row || gx.fn.currentGridRowImpl(36),gx.O.A1299TransacaoPagRecCContabilUsuari,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1299TransacaoPagRecCContabilUsuari=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECCCONTABILUSUARI",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECCCONTABILDATAHO",gxz:"Z1300TransacaoPagRecCContabilDataHo",gxold:"O1300TransacaoPagRecCContabilDataHo",gxvar:"A1300TransacaoPagRecCContabilDataHo",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1300TransacaoPagRecCContabilDataHo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1300TransacaoPagRecCContabilDataHo=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECCCONTABILDATAHO",row || gx.fn.currentGridRowImpl(36),gx.O.A1300TransacaoPagRecCContabilDataHo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1300TransacaoPagRecCContabilDataHo=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TRANSACAOPAGRECCCONTABILDATAHO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECEMPRESAID",gxz:"Z1212TransacaoPagRecEmpresaId",gxold:"O1212TransacaoPagRecEmpresaId",gxvar:"A1212TransacaoPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1212TransacaoPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1212TransacaoPagRecEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A1212TransacaoPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1212TransacaoPagRecEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECTIPO",gxz:"Z1175TransacaoPagRecTipo",gxold:"O1175TransacaoPagRecTipo",gxvar:"A1175TransacaoPagRecTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1175TransacaoPagRecTipo=Value},v2z:function(Value){gx.O.Z1175TransacaoPagRecTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOPAGRECTIPO",row || gx.fn.currentGridRowImpl(36),gx.O.A1175TransacaoPagRecTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1175TransacaoPagRecTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECTIPO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECID",gxz:"Z1266TransacaoPagRecId",gxold:"O1266TransacaoPagRecId",gxvar:"A1266TransacaoPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1266TransacaoPagRecId=Value},v2z:function(Value){gx.O.Z1266TransacaoPagRecId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECID",row || gx.fn.currentGridRowImpl(36),gx.O.A1266TransacaoPagRecId,0)},c2v:function(){gx.O.A1266TransacaoPagRecId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLE4",grid:0};
   this.AV6cTransacaoPagRecFilialEmpresaid = "" ;
   this.ZV6cTransacaoPagRecFilialEmpresaid = "" ;
   this.OV6cTransacaoPagRecFilialEmpresaid = "" ;
   this.AV7cTransacaoPagRecFilialId = 0 ;
   this.ZV7cTransacaoPagRecFilialId = 0 ;
   this.OV7cTransacaoPagRecFilialId = 0 ;
   this.AV8cTransacaoPagRecCContabilEmpresaId = "" ;
   this.ZV8cTransacaoPagRecCContabilEmpresaId = "" ;
   this.OV8cTransacaoPagRecCContabilEmpresaId = "" ;
   this.AV9cTransacaoPagRecCContabilId = "" ;
   this.ZV9cTransacaoPagRecCContabilId = "" ;
   this.OV9cTransacaoPagRecCContabilId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1301TransacaoPagRecFilialEmpresaid = "" ;
   this.O1301TransacaoPagRecFilialEmpresaid = "" ;
   this.Z1302TransacaoPagRecFilialId = 0 ;
   this.O1302TransacaoPagRecFilialId = 0 ;
   this.Z1297TransacaoPagRecCContabilEmpres = "" ;
   this.O1297TransacaoPagRecCContabilEmpres = "" ;
   this.Z1298TransacaoPagRecCContabilId = "" ;
   this.O1298TransacaoPagRecCContabilId = "" ;
   this.Z1299TransacaoPagRecCContabilUsuari = "" ;
   this.O1299TransacaoPagRecCContabilUsuari = "" ;
   this.Z1300TransacaoPagRecCContabilDataHo = gx.date.nullDate() ;
   this.O1300TransacaoPagRecCContabilDataHo = gx.date.nullDate() ;
   this.Z1212TransacaoPagRecEmpresaId = "" ;
   this.O1212TransacaoPagRecEmpresaId = "" ;
   this.Z1175TransacaoPagRecTipo = "" ;
   this.O1175TransacaoPagRecTipo = "" ;
   this.Z1266TransacaoPagRecId = "" ;
   this.O1266TransacaoPagRecId = "" ;
   this.AV6cTransacaoPagRecFilialEmpresaid = "" ;
   this.AV7cTransacaoPagRecFilialId = 0 ;
   this.AV8cTransacaoPagRecCContabilEmpresaId = "" ;
   this.AV9cTransacaoPagRecCContabilId = "" ;
   this.AV10pTransacaoPagRecEmpresaId = "" ;
   this.AV11pTransacaoPagRecTipo = "" ;
   this.AV12pTransacaoPagRecId = "" ;
   this.AV13pTransacaoPagRecFilialEmpresaid = "" ;
   this.AV14pTransacaoPagRecFilialId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1301TransacaoPagRecFilialEmpresaid = "" ;
   this.A1302TransacaoPagRecFilialId = 0 ;
   this.A1297TransacaoPagRecCContabilEmpres = "" ;
   this.A1298TransacaoPagRecCContabilId = "" ;
   this.A1299TransacaoPagRecCContabilUsuari = "" ;
   this.A1300TransacaoPagRecCContabilDataHo = gx.date.nullDate() ;
   this.A1212TransacaoPagRecEmpresaId = "" ;
   this.A1175TransacaoPagRecTipo = "" ;
   this.A1266TransacaoPagRecId = "" ;
   this.Events = {"e131ke2_client": ["ENTER", true] ,"e141ke1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPagRecFilialEmpresaid',fld:'vCTRANSACAOPAGRECFILIALEMPRESAID'},{av:'AV7cTransacaoPagRecFilialId',fld:'vCTRANSACAOPAGRECFILIALID'},{av:'AV8cTransacaoPagRecCContabilEmpresaId',fld:'vCTRANSACAOPAGRECCCONTABILEMPRESAID'},{av:'AV9cTransacaoPagRecCContabilId',fld:'vCTRANSACAOPAGRECCCONTABILID'},{av:'AV10pTransacaoPagRecEmpresaId',fld:'vPTRANSACAOPAGRECEMPRESAID',hsh:true},{av:'AV11pTransacaoPagRecTipo',fld:'vPTRANSACAOPAGRECTIPO',hsh:true},{av:'AV12pTransacaoPagRecId',fld:'vPTRANSACAOPAGRECID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1301TransacaoPagRecFilialEmpresaid',fld:'TRANSACAOPAGRECFILIALEMPRESAID'},{av:'A1302TransacaoPagRecFilialId',fld:'TRANSACAOPAGRECFILIALID'}],[{av:'AV13pTransacaoPagRecFilialEmpresaid',fld:'vPTRANSACAOPAGRECFILIALEMPRESAID'},{av:'AV14pTransacaoPagRecFilialId',fld:'vPTRANSACAOPAGRECFILIALID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPagRecFilialEmpresaid',fld:'vCTRANSACAOPAGRECFILIALEMPRESAID'},{av:'AV7cTransacaoPagRecFilialId',fld:'vCTRANSACAOPAGRECFILIALID'},{av:'AV8cTransacaoPagRecCContabilEmpresaId',fld:'vCTRANSACAOPAGRECCCONTABILEMPRESAID'},{av:'AV9cTransacaoPagRecCContabilId',fld:'vCTRANSACAOPAGRECCCONTABILID'},{av:'AV10pTransacaoPagRecEmpresaId',fld:'vPTRANSACAOPAGRECEMPRESAID',hsh:true},{av:'AV11pTransacaoPagRecTipo',fld:'vPTRANSACAOPAGRECTIPO',hsh:true},{av:'AV12pTransacaoPagRecId',fld:'vPTRANSACAOPAGRECID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPagRecFilialEmpresaid',fld:'vCTRANSACAOPAGRECFILIALEMPRESAID'},{av:'AV7cTransacaoPagRecFilialId',fld:'vCTRANSACAOPAGRECFILIALID'},{av:'AV8cTransacaoPagRecCContabilEmpresaId',fld:'vCTRANSACAOPAGRECCCONTABILEMPRESAID'},{av:'AV9cTransacaoPagRecCContabilId',fld:'vCTRANSACAOPAGRECCCONTABILID'},{av:'AV10pTransacaoPagRecEmpresaId',fld:'vPTRANSACAOPAGRECEMPRESAID',hsh:true},{av:'AV11pTransacaoPagRecTipo',fld:'vPTRANSACAOPAGRECTIPO',hsh:true},{av:'AV12pTransacaoPagRecId',fld:'vPTRANSACAOPAGRECID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPagRecFilialEmpresaid',fld:'vCTRANSACAOPAGRECFILIALEMPRESAID'},{av:'AV7cTransacaoPagRecFilialId',fld:'vCTRANSACAOPAGRECFILIALID'},{av:'AV8cTransacaoPagRecCContabilEmpresaId',fld:'vCTRANSACAOPAGRECCCONTABILEMPRESAID'},{av:'AV9cTransacaoPagRecCContabilId',fld:'vCTRANSACAOPAGRECCCONTABILID'},{av:'AV10pTransacaoPagRecEmpresaId',fld:'vPTRANSACAOPAGRECEMPRESAID',hsh:true},{av:'AV11pTransacaoPagRecTipo',fld:'vPTRANSACAOPAGRECTIPO',hsh:true},{av:'AV12pTransacaoPagRecId',fld:'vPTRANSACAOPAGRECID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPagRecFilialEmpresaid',fld:'vCTRANSACAOPAGRECFILIALEMPRESAID'},{av:'AV7cTransacaoPagRecFilialId',fld:'vCTRANSACAOPAGRECFILIALID'},{av:'AV8cTransacaoPagRecCContabilEmpresaId',fld:'vCTRANSACAOPAGRECCCONTABILEMPRESAID'},{av:'AV9cTransacaoPagRecCContabilId',fld:'vCTRANSACAOPAGRECCCONTABILID'},{av:'AV10pTransacaoPagRecEmpresaId',fld:'vPTRANSACAOPAGRECEMPRESAID',hsh:true},{av:'AV11pTransacaoPagRecTipo',fld:'vPTRANSACAOPAGRECTIPO',hsh:true},{av:'AV12pTransacaoPagRecId',fld:'vPTRANSACAOPAGRECID',hsh:true}],[]];
   this.setVCMap("AV10pTransacaoPagRecEmpresaId", "vPTRANSACAOPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV11pTransacaoPagRecTipo", "vPTRANSACAOPAGRECTIPO", 0, "char");
   this.setVCMap("AV12pTransacaoPagRecId", "vPTRANSACAOPAGRECID", 0, "char");
   this.setVCMap("AV13pTransacaoPagRecFilialEmpresaid", "vPTRANSACAOPAGRECFILIALEMPRESAID", 0, "char");
   this.setVCMap("AV14pTransacaoPagRecFilialId", "vPTRANSACAOPAGRECFILIALID", 0, "int");
   this.setVCMap("AV10pTransacaoPagRecEmpresaId", "vPTRANSACAOPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV11pTransacaoPagRecTipo", "vPTRANSACAOPAGRECTIPO", 0, "char");
   this.setVCMap("AV12pTransacaoPagRecId", "vPTRANSACAOPAGRECID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10pTransacaoPagRecEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pTransacaoPagRecTipo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pTransacaoPagRecId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0483());
