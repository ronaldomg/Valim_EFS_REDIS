/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:25.2
*/
gx.evt.autoSkip = false;
gx.define('gx0ca0', false, function () {
   this.ServerClass =  "gx0ca0" ;
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
      this.AV13pTipoSaldoEmpresaId=gx.fn.getControlValue("vPTIPOSALDOEMPRESAID") ;
      this.AV14pTipoSaldoId=gx.fn.getIntegerValue("vPTIPOSALDOID",'.') ;
   };
   this.e131r02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141r01_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ca0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1568,53,"TIPOSALDOEMPRESAID","Empresa Tipo Saldo","","TipoSaldoEmpresaId","char",0,"px",10,10,"left",null,[],1568,"TipoSaldoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1569,54,"TIPOSALDOID","Código","","TipoSaldoId","int",0,"px",7,7,"right",null,[],1569,"TipoSaldoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1570,55,"TIPOSALDODESCRICAO","Descrição","Selecionar","TipoSaldoDescricao","svchar",0,"px",20,20,"left",null,[],1570,"TipoSaldoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4336,56,"TIPOSALDOSNSANGRIA","Sangria","","TipoSaldoSnSangria","char",0,"px",1,1,"left",null,[],4336,"TipoSaldoSnSangria",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1571,57,"TIPOSALDOUSUARIOALT","Usuário Alteração","","TipoSaldoUsuarioAlt","char",0,"px",12,12,"left",null,[],1571,"TipoSaldoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1572,58,"TIPOSALDODATAHORAALT","Data/Hora Alteração","","TipoSaldoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],1572,"TipoSaldoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8019,59,"TIPOSALDOSUBTRAIRTROCO","Tipo Saldo Subtrair Troco","","TipoSaldoSubtrairTroco","char",0,"px",1,1,"left",null,[],8019,"TipoSaldoSubtrairTroco",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOSALDOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOSALDOEMPRESAID",gxz:"ZV6cTipoSaldoEmpresaId",gxold:"OV6cTipoSaldoEmpresaId",gxvar:"AV6cTipoSaldoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoSaldoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTipoSaldoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOSALDOEMPRESAID",gx.O.AV6cTipoSaldoEmpresaId,0)},c2v:function(){gx.O.AV6cTipoSaldoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOSALDOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPOSALDOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOSALDOID",gxz:"ZV7cTipoSaldoId",gxold:"OV7cTipoSaldoId",gxvar:"AV7cTipoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTipoSaldoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOSALDOID",gx.O.AV7cTipoSaldoId,0)},c2v:function(){gx.O.AV7cTipoSaldoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOSALDOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPOSALDODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOSALDODESCRICAO",gxz:"ZV8cTipoSaldoDescricao",gxold:"OV8cTipoSaldoDescricao",gxvar:"AV8cTipoSaldoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoSaldoDescricao=Value},v2z:function(Value){gx.O.ZV8cTipoSaldoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTIPOSALDODESCRICAO",gx.O.AV8cTipoSaldoDescricao,0)},c2v:function(){gx.O.AV8cTipoSaldoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOSALDODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOSALDOSNSANGRIA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOSALDOSNSANGRIA",gxz:"ZV9cTipoSaldoSnSangria",gxold:"OV9cTipoSaldoSnSangria",gxvar:"AV9cTipoSaldoSnSangria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoSaldoSnSangria=Value},v2z:function(Value){gx.O.ZV9cTipoSaldoSnSangria=Value},v2c:function(){gx.fn.setControlValue("vCTIPOSALDOSNSANGRIA",gx.O.AV9cTipoSaldoSnSangria,0)},c2v:function(){gx.O.AV9cTipoSaldoSnSangria=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOSALDOSNSANGRIA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOSALDOUSUARIOALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOSALDOUSUARIOALT",gxz:"ZV10cTipoSaldoUsuarioAlt",gxold:"OV10cTipoSaldoUsuarioAlt",gxvar:"AV10cTipoSaldoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoSaldoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV10cTipoSaldoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCTIPOSALDOUSUARIOALT",gx.O.AV10cTipoSaldoUsuarioAlt,0)},c2v:function(){gx.O.AV10cTipoSaldoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOSALDOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTIPOSALDODATAHORAALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOSALDODATAHORAALT",gxz:"ZV11cTipoSaldoDataHoraAlt",gxold:"OV11cTipoSaldoDataHoraAlt",gxvar:"AV11cTipoSaldoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTipoSaldoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cTipoSaldoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOSALDODATAHORAALT",gx.O.AV11cTipoSaldoDataHoraAlt,0)},c2v:function(){gx.O.AV11cTipoSaldoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCTIPOSALDODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTIPOSALDOSUBTRAIRTROCO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOSALDOSUBTRAIRTROCO",gxz:"ZV12cTipoSaldoSubtrairTroco",gxold:"OV12cTipoSaldoSubtrairTroco",gxvar:"AV12cTipoSaldoSubtrairTroco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTipoSaldoSubtrairTroco=Value},v2z:function(Value){gx.O.ZV12cTipoSaldoSubtrairTroco=Value},v2c:function(){gx.fn.setControlValue("vCTIPOSALDOSUBTRAIRTROCO",gx.O.AV12cTipoSaldoSubtrairTroco,0)},c2v:function(){gx.O.AV12cTipoSaldoSubtrairTroco=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOSALDOSUBTRAIRTROCO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDOEMPRESAID",gxz:"Z1568TipoSaldoEmpresaId",gxold:"O1568TipoSaldoEmpresaId",gxvar:"A1568TipoSaldoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1568TipoSaldoEmpresaId=Value},v2z:function(Value){gx.O.Z1568TipoSaldoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1568TipoSaldoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1568TipoSaldoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSALDOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDOID",gxz:"Z1569TipoSaldoId",gxold:"O1569TipoSaldoId",gxvar:"A1569TipoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1569TipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1569TipoSaldoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1569TipoSaldoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1569TipoSaldoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOSALDOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDODESCRICAO",gxz:"Z1570TipoSaldoDescricao",gxold:"O1570TipoSaldoDescricao",gxvar:"A1570TipoSaldoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1570TipoSaldoDescricao=Value},v2z:function(Value){gx.O.Z1570TipoSaldoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A1570TipoSaldoDescricao,0)},c2v:function(){gx.O.A1570TipoSaldoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSALDODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDOSNSANGRIA",gxz:"Z4336TipoSaldoSnSangria",gxold:"O4336TipoSaldoSnSangria",gxvar:"A4336TipoSaldoSnSangria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4336TipoSaldoSnSangria=Value},v2z:function(Value){gx.O.Z4336TipoSaldoSnSangria=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDOSNSANGRIA",row || gx.fn.currentGridRowImpl(51),gx.O.A4336TipoSaldoSnSangria,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4336TipoSaldoSnSangria=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSALDOSNSANGRIA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDOUSUARIOALT",gxz:"Z1571TipoSaldoUsuarioAlt",gxold:"O1571TipoSaldoUsuarioAlt",gxvar:"A1571TipoSaldoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1571TipoSaldoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1571TipoSaldoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDOUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A1571TipoSaldoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1571TipoSaldoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSALDOUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDODATAHORAALT",gxz:"Z1572TipoSaldoDataHoraAlt",gxold:"O1572TipoSaldoDataHoraAlt",gxvar:"A1572TipoSaldoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1572TipoSaldoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1572TipoSaldoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDODATAHORAALT",row || gx.fn.currentGridRowImpl(51),gx.O.A1572TipoSaldoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1572TipoSaldoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TIPOSALDODATAHORAALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDOSUBTRAIRTROCO",gxz:"Z8019TipoSaldoSubtrairTroco",gxold:"O8019TipoSaldoSubtrairTroco",gxvar:"A8019TipoSaldoSubtrairTroco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8019TipoSaldoSubtrairTroco=Value},v2z:function(Value){gx.O.Z8019TipoSaldoSubtrairTroco=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDOSUBTRAIRTROCO",row || gx.fn.currentGridRowImpl(51),gx.O.A8019TipoSaldoSubtrairTroco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8019TipoSaldoSubtrairTroco=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSALDOSUBTRAIRTROCO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cTipoSaldoEmpresaId = "" ;
   this.ZV6cTipoSaldoEmpresaId = "" ;
   this.OV6cTipoSaldoEmpresaId = "" ;
   this.AV7cTipoSaldoId = 0 ;
   this.ZV7cTipoSaldoId = 0 ;
   this.OV7cTipoSaldoId = 0 ;
   this.AV8cTipoSaldoDescricao = "" ;
   this.ZV8cTipoSaldoDescricao = "" ;
   this.OV8cTipoSaldoDescricao = "" ;
   this.AV9cTipoSaldoSnSangria = "" ;
   this.ZV9cTipoSaldoSnSangria = "" ;
   this.OV9cTipoSaldoSnSangria = "" ;
   this.AV10cTipoSaldoUsuarioAlt = "" ;
   this.ZV10cTipoSaldoUsuarioAlt = "" ;
   this.OV10cTipoSaldoUsuarioAlt = "" ;
   this.AV11cTipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.ZV11cTipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.OV11cTipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.AV12cTipoSaldoSubtrairTroco = "" ;
   this.ZV12cTipoSaldoSubtrairTroco = "" ;
   this.OV12cTipoSaldoSubtrairTroco = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1568TipoSaldoEmpresaId = "" ;
   this.O1568TipoSaldoEmpresaId = "" ;
   this.Z1569TipoSaldoId = 0 ;
   this.O1569TipoSaldoId = 0 ;
   this.Z1570TipoSaldoDescricao = "" ;
   this.O1570TipoSaldoDescricao = "" ;
   this.Z4336TipoSaldoSnSangria = "" ;
   this.O4336TipoSaldoSnSangria = "" ;
   this.Z1571TipoSaldoUsuarioAlt = "" ;
   this.O1571TipoSaldoUsuarioAlt = "" ;
   this.Z1572TipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.O1572TipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.Z8019TipoSaldoSubtrairTroco = "" ;
   this.O8019TipoSaldoSubtrairTroco = "" ;
   this.AV6cTipoSaldoEmpresaId = "" ;
   this.AV7cTipoSaldoId = 0 ;
   this.AV8cTipoSaldoDescricao = "" ;
   this.AV9cTipoSaldoSnSangria = "" ;
   this.AV10cTipoSaldoUsuarioAlt = "" ;
   this.AV11cTipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.AV12cTipoSaldoSubtrairTroco = "" ;
   this.AV13pTipoSaldoEmpresaId = "" ;
   this.AV14pTipoSaldoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1568TipoSaldoEmpresaId = "" ;
   this.A1569TipoSaldoId = 0 ;
   this.A1570TipoSaldoDescricao = "" ;
   this.A4336TipoSaldoSnSangria = "" ;
   this.A1571TipoSaldoUsuarioAlt = "" ;
   this.A1572TipoSaldoDataHoraAlt = gx.date.nullDate() ;
   this.A8019TipoSaldoSubtrairTroco = "" ;
   this.Events = {"e131r02_client": ["ENTER", true] ,"e141r01_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoSaldoEmpresaId',fld:'vCTIPOSALDOEMPRESAID'},{av:'AV7cTipoSaldoId',fld:'vCTIPOSALDOID'},{av:'AV8cTipoSaldoDescricao',fld:'vCTIPOSALDODESCRICAO'},{av:'AV9cTipoSaldoSnSangria',fld:'vCTIPOSALDOSNSANGRIA'},{av:'AV10cTipoSaldoUsuarioAlt',fld:'vCTIPOSALDOUSUARIOALT'},{av:'AV11cTipoSaldoDataHoraAlt',fld:'vCTIPOSALDODATAHORAALT'},{av:'AV12cTipoSaldoSubtrairTroco',fld:'vCTIPOSALDOSUBTRAIRTROCO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1568TipoSaldoEmpresaId',fld:'TIPOSALDOEMPRESAID'},{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'}],[{av:'AV13pTipoSaldoEmpresaId',fld:'vPTIPOSALDOEMPRESAID'},{av:'AV14pTipoSaldoId',fld:'vPTIPOSALDOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoSaldoEmpresaId',fld:'vCTIPOSALDOEMPRESAID'},{av:'AV7cTipoSaldoId',fld:'vCTIPOSALDOID'},{av:'AV8cTipoSaldoDescricao',fld:'vCTIPOSALDODESCRICAO'},{av:'AV9cTipoSaldoSnSangria',fld:'vCTIPOSALDOSNSANGRIA'},{av:'AV10cTipoSaldoUsuarioAlt',fld:'vCTIPOSALDOUSUARIOALT'},{av:'AV11cTipoSaldoDataHoraAlt',fld:'vCTIPOSALDODATAHORAALT'},{av:'AV12cTipoSaldoSubtrairTroco',fld:'vCTIPOSALDOSUBTRAIRTROCO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoSaldoEmpresaId',fld:'vCTIPOSALDOEMPRESAID'},{av:'AV7cTipoSaldoId',fld:'vCTIPOSALDOID'},{av:'AV8cTipoSaldoDescricao',fld:'vCTIPOSALDODESCRICAO'},{av:'AV9cTipoSaldoSnSangria',fld:'vCTIPOSALDOSNSANGRIA'},{av:'AV10cTipoSaldoUsuarioAlt',fld:'vCTIPOSALDOUSUARIOALT'},{av:'AV11cTipoSaldoDataHoraAlt',fld:'vCTIPOSALDODATAHORAALT'},{av:'AV12cTipoSaldoSubtrairTroco',fld:'vCTIPOSALDOSUBTRAIRTROCO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoSaldoEmpresaId',fld:'vCTIPOSALDOEMPRESAID'},{av:'AV7cTipoSaldoId',fld:'vCTIPOSALDOID'},{av:'AV8cTipoSaldoDescricao',fld:'vCTIPOSALDODESCRICAO'},{av:'AV9cTipoSaldoSnSangria',fld:'vCTIPOSALDOSNSANGRIA'},{av:'AV10cTipoSaldoUsuarioAlt',fld:'vCTIPOSALDOUSUARIOALT'},{av:'AV11cTipoSaldoDataHoraAlt',fld:'vCTIPOSALDODATAHORAALT'},{av:'AV12cTipoSaldoSubtrairTroco',fld:'vCTIPOSALDOSUBTRAIRTROCO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoSaldoEmpresaId',fld:'vCTIPOSALDOEMPRESAID'},{av:'AV7cTipoSaldoId',fld:'vCTIPOSALDOID'},{av:'AV8cTipoSaldoDescricao',fld:'vCTIPOSALDODESCRICAO'},{av:'AV9cTipoSaldoSnSangria',fld:'vCTIPOSALDOSNSANGRIA'},{av:'AV10cTipoSaldoUsuarioAlt',fld:'vCTIPOSALDOUSUARIOALT'},{av:'AV11cTipoSaldoDataHoraAlt',fld:'vCTIPOSALDODATAHORAALT'},{av:'AV12cTipoSaldoSubtrairTroco',fld:'vCTIPOSALDOSUBTRAIRTROCO'}],[]];
   this.setVCMap("AV13pTipoSaldoEmpresaId", "vPTIPOSALDOEMPRESAID", 0, "char");
   this.setVCMap("AV14pTipoSaldoId", "vPTIPOSALDOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ca0());
