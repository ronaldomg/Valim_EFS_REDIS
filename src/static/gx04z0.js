/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:44.43
*/
gx.evt.autoSkip = false;
gx.define('gx04z0', false, function () {
   this.ServerClass =  "gx04z0" ;
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
      this.AV13pPermissaoUsuCxaContaEmpresaId=gx.fn.getControlValue("vPPERMISSAOUSUCXACONTAEMPRESAID") ;
      this.AV14pPermissaoUsuCxaContaUsuarioId=gx.fn.getControlValue("vPPERMISSAOUSUCXACONTAUSUARIOID") ;
      this.AV15pTipoBaixaUsuTpBaixaEmpId=gx.fn.getControlValue("vPTIPOBAIXAUSUTPBAIXAEMPID") ;
      this.AV16pTipoBaixaUsuTpBaixaPagRec=gx.fn.getControlValue("vPTIPOBAIXAUSUTPBAIXAPAGREC") ;
      this.AV17pTipoBaixaUsuTpBaixaSigla=gx.fn.getControlValue("vPTIPOBAIXAUSUTPBAIXASIGLA") ;
   };
   this.e131l62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141l61_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx04z0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1076,53,"PERMISSAOUSUCXACONTAEMPRESAID","Empresa","","PermissaoUsuCxaContaEmpresaId","char",0,"px",10,10,"left",null,[],1076,"PermissaoUsuCxaContaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1771,54,"PERMISSAOUSUCXACONTAUSUARIOID","Usuário","","PermissaoUsuCxaContaUsuarioId","char",0,"px",12,12,"left",null,[],1771,"PermissaoUsuCxaContaUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1754,55,"TIPOBAIXAUSUTPBAIXAEMPID","Empresa","","TipoBaixaUsuTpBaixaEmpId","char",0,"px",10,10,"left",null,[],1754,"TipoBaixaUsuTpBaixaEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1755,56,"TIPOBAIXAUSUTPBAIXAPAGREC","Pagar/Receber","","TipoBaixaUsuTpBaixaPagRec","char",0,"px",1,1,"left",null,[],1755,"TipoBaixaUsuTpBaixaPagRec",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1756,57,"TIPOBAIXAUSUTPBAIXASIGLA","Tipo Baixa","","TipoBaixaUsuTpBaixaSigla","char",0,"px",5,5,"left",null,[],1756,"TipoBaixaUsuTpBaixaSigla",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1772,58,"TIPOBAIXAUSUUSUARIOALT","Usuário Alteração","","TipoBaixaUsuUsuarioAlt","char",0,"px",12,12,"left",null,[],1772,"TipoBaixaUsuUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1773,59,"TIPOBAIXAUSUDATAHORAALT","Data/Hora Alteração","","TipoBaixaUsuDataHoraAlt","dtime",0,"px",16,16,"right",null,[],1773,"TipoBaixaUsuDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPERMISSAOUSUCXACONTAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUCXACONTAEMPRESAID",gxz:"ZV6cPermissaoUsuCxaContaEmpresaId",gxold:"OV6cPermissaoUsuCxaContaEmpresaId",gxvar:"AV6cPermissaoUsuCxaContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPermissaoUsuCxaContaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cPermissaoUsuCxaContaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPERMISSAOUSUCXACONTAEMPRESAID",gx.O.AV6cPermissaoUsuCxaContaEmpresaId,0)},c2v:function(){gx.O.AV6cPermissaoUsuCxaContaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOUSUCXACONTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPERMISSAOUSUCXACONTAUSUARIOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUCXACONTAUSUARIOID",gxz:"ZV7cPermissaoUsuCxaContaUsuarioId",gxold:"OV7cPermissaoUsuCxaContaUsuarioId",gxvar:"AV7cPermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.ZV7cPermissaoUsuCxaContaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCPERMISSAOUSUCXACONTAUSUARIOID",gx.O.AV7cPermissaoUsuCxaContaUsuarioId,0)},c2v:function(){gx.O.AV7cPermissaoUsuCxaContaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOUSUCXACONTAUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPOBAIXAUSUTPBAIXAEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOBAIXAUSUTPBAIXAEMPID",gxz:"ZV8cTipoBaixaUsuTpBaixaEmpId",gxold:"OV8cTipoBaixaUsuTpBaixaEmpId",gxvar:"AV8cTipoBaixaUsuTpBaixaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoBaixaUsuTpBaixaEmpId=Value},v2z:function(Value){gx.O.ZV8cTipoBaixaUsuTpBaixaEmpId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOBAIXAUSUTPBAIXAEMPID",gx.O.AV8cTipoBaixaUsuTpBaixaEmpId,0)},c2v:function(){gx.O.AV8cTipoBaixaUsuTpBaixaEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOBAIXAUSUTPBAIXAEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOBAIXAUSUTPBAIXAPAGREC", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOBAIXAUSUTPBAIXAPAGREC",gxz:"ZV9cTipoBaixaUsuTpBaixaPagRec",gxold:"OV9cTipoBaixaUsuTpBaixaPagRec",gxvar:"AV9cTipoBaixaUsuTpBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoBaixaUsuTpBaixaPagRec=Value},v2z:function(Value){gx.O.ZV9cTipoBaixaUsuTpBaixaPagRec=Value},v2c:function(){gx.fn.setControlValue("vCTIPOBAIXAUSUTPBAIXAPAGREC",gx.O.AV9cTipoBaixaUsuTpBaixaPagRec,0)},c2v:function(){gx.O.AV9cTipoBaixaUsuTpBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOBAIXAUSUTPBAIXAPAGREC")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOBAIXAUSUTPBAIXASIGLA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOBAIXAUSUTPBAIXASIGLA",gxz:"ZV10cTipoBaixaUsuTpBaixaSigla",gxold:"OV10cTipoBaixaUsuTpBaixaSigla",gxvar:"AV10cTipoBaixaUsuTpBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoBaixaUsuTpBaixaSigla=Value},v2z:function(Value){gx.O.ZV10cTipoBaixaUsuTpBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("vCTIPOBAIXAUSUTPBAIXASIGLA",gx.O.AV10cTipoBaixaUsuTpBaixaSigla,0)},c2v:function(){gx.O.AV10cTipoBaixaUsuTpBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOBAIXAUSUTPBAIXASIGLA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTIPOBAIXAUSUUSUARIOALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOBAIXAUSUUSUARIOALT",gxz:"ZV11cTipoBaixaUsuUsuarioAlt",gxold:"OV11cTipoBaixaUsuUsuarioAlt",gxvar:"AV11cTipoBaixaUsuUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTipoBaixaUsuUsuarioAlt=Value},v2z:function(Value){gx.O.ZV11cTipoBaixaUsuUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCTIPOBAIXAUSUUSUARIOALT",gx.O.AV11cTipoBaixaUsuUsuarioAlt,0)},c2v:function(){gx.O.AV11cTipoBaixaUsuUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOBAIXAUSUUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTIPOBAIXAUSUDATAHORAALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOBAIXAUSUDATAHORAALT",gxz:"ZV12cTipoBaixaUsuDataHoraAlt",gxold:"OV12cTipoBaixaUsuDataHoraAlt",gxvar:"AV12cTipoBaixaUsuDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTipoBaixaUsuDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cTipoBaixaUsuDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOBAIXAUSUDATAHORAALT",gx.O.AV12cTipoBaixaUsuDataHoraAlt,0)},c2v:function(){gx.O.AV12cTipoBaixaUsuDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCTIPOBAIXAUSUDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAEMPRESAID",gxz:"Z1076PermissaoUsuCxaContaEmpresaId",gxold:"O1076PermissaoUsuCxaContaEmpresaId",gxvar:"A1076PermissaoUsuCxaContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1076PermissaoUsuCxaContaEmpresaId=Value},v2z:function(Value){gx.O.Z1076PermissaoUsuCxaContaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1076PermissaoUsuCxaContaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1076PermissaoUsuCxaContaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUARIOID",gxz:"Z1771PermissaoUsuCxaContaUsuarioId",gxold:"O1771PermissaoUsuCxaContaUsuarioId",gxvar:"A1771PermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1771PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.Z1771PermissaoUsuCxaContaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAUSUARIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1771PermissaoUsuCxaContaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1771PermissaoUsuCxaContaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAUSUARIOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXAEMPID",gxz:"Z1754TipoBaixaUsuTpBaixaEmpId",gxold:"O1754TipoBaixaUsuTpBaixaEmpId",gxvar:"A1754TipoBaixaUsuTpBaixaEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1754TipoBaixaUsuTpBaixaEmpId=Value},v2z:function(Value){gx.O.Z1754TipoBaixaUsuTpBaixaEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAUSUTPBAIXAEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A1754TipoBaixaUsuTpBaixaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1754TipoBaixaUsuTpBaixaEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAUSUTPBAIXAEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXAPAGREC",gxz:"Z1755TipoBaixaUsuTpBaixaPagRec",gxold:"O1755TipoBaixaUsuTpBaixaPagRec",gxvar:"A1755TipoBaixaUsuTpBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1755TipoBaixaUsuTpBaixaPagRec=Value},v2z:function(Value){gx.O.Z1755TipoBaixaUsuTpBaixaPagRec=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAUSUTPBAIXAPAGREC",row || gx.fn.currentGridRowImpl(51),gx.O.A1755TipoBaixaUsuTpBaixaPagRec,0)},c2v:function(){gx.O.A1755TipoBaixaUsuTpBaixaPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAUSUTPBAIXAPAGREC",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUTPBAIXASIGLA",gxz:"Z1756TipoBaixaUsuTpBaixaSigla",gxold:"O1756TipoBaixaUsuTpBaixaSigla",gxvar:"A1756TipoBaixaUsuTpBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1756TipoBaixaUsuTpBaixaSigla=Value},v2z:function(Value){gx.O.Z1756TipoBaixaUsuTpBaixaSigla=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAUSUTPBAIXASIGLA",row || gx.fn.currentGridRowImpl(51),gx.O.A1756TipoBaixaUsuTpBaixaSigla,0)},c2v:function(){gx.O.A1756TipoBaixaUsuTpBaixaSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAUSUTPBAIXASIGLA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUUSUARIOALT",gxz:"Z1772TipoBaixaUsuUsuarioAlt",gxold:"O1772TipoBaixaUsuUsuarioAlt",gxvar:"A1772TipoBaixaUsuUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1772TipoBaixaUsuUsuarioAlt=Value},v2z:function(Value){gx.O.Z1772TipoBaixaUsuUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAUSUUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A1772TipoBaixaUsuUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1772TipoBaixaUsuUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAUSUUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAUSUDATAHORAALT",gxz:"Z1773TipoBaixaUsuDataHoraAlt",gxold:"O1773TipoBaixaUsuDataHoraAlt",gxvar:"A1773TipoBaixaUsuDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1773TipoBaixaUsuDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1773TipoBaixaUsuDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAUSUDATAHORAALT",row || gx.fn.currentGridRowImpl(51),gx.O.A1773TipoBaixaUsuDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1773TipoBaixaUsuDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TIPOBAIXAUSUDATAHORAALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cPermissaoUsuCxaContaEmpresaId = "" ;
   this.ZV6cPermissaoUsuCxaContaEmpresaId = "" ;
   this.OV6cPermissaoUsuCxaContaEmpresaId = "" ;
   this.AV7cPermissaoUsuCxaContaUsuarioId = "" ;
   this.ZV7cPermissaoUsuCxaContaUsuarioId = "" ;
   this.OV7cPermissaoUsuCxaContaUsuarioId = "" ;
   this.AV8cTipoBaixaUsuTpBaixaEmpId = "" ;
   this.ZV8cTipoBaixaUsuTpBaixaEmpId = "" ;
   this.OV8cTipoBaixaUsuTpBaixaEmpId = "" ;
   this.AV9cTipoBaixaUsuTpBaixaPagRec = "" ;
   this.ZV9cTipoBaixaUsuTpBaixaPagRec = "" ;
   this.OV9cTipoBaixaUsuTpBaixaPagRec = "" ;
   this.AV10cTipoBaixaUsuTpBaixaSigla = "" ;
   this.ZV10cTipoBaixaUsuTpBaixaSigla = "" ;
   this.OV10cTipoBaixaUsuTpBaixaSigla = "" ;
   this.AV11cTipoBaixaUsuUsuarioAlt = "" ;
   this.ZV11cTipoBaixaUsuUsuarioAlt = "" ;
   this.OV11cTipoBaixaUsuUsuarioAlt = "" ;
   this.AV12cTipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.ZV12cTipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.OV12cTipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.O1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.Z1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.O1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.Z1754TipoBaixaUsuTpBaixaEmpId = "" ;
   this.O1754TipoBaixaUsuTpBaixaEmpId = "" ;
   this.Z1755TipoBaixaUsuTpBaixaPagRec = "" ;
   this.O1755TipoBaixaUsuTpBaixaPagRec = "" ;
   this.Z1756TipoBaixaUsuTpBaixaSigla = "" ;
   this.O1756TipoBaixaUsuTpBaixaSigla = "" ;
   this.Z1772TipoBaixaUsuUsuarioAlt = "" ;
   this.O1772TipoBaixaUsuUsuarioAlt = "" ;
   this.Z1773TipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.O1773TipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.AV6cPermissaoUsuCxaContaEmpresaId = "" ;
   this.AV7cPermissaoUsuCxaContaUsuarioId = "" ;
   this.AV8cTipoBaixaUsuTpBaixaEmpId = "" ;
   this.AV9cTipoBaixaUsuTpBaixaPagRec = "" ;
   this.AV10cTipoBaixaUsuTpBaixaSigla = "" ;
   this.AV11cTipoBaixaUsuUsuarioAlt = "" ;
   this.AV12cTipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.AV13pPermissaoUsuCxaContaEmpresaId = "" ;
   this.AV14pPermissaoUsuCxaContaUsuarioId = "" ;
   this.AV15pTipoBaixaUsuTpBaixaEmpId = "" ;
   this.AV16pTipoBaixaUsuTpBaixaPagRec = "" ;
   this.AV17pTipoBaixaUsuTpBaixaSigla = "" ;
   this.AV5LinkSelection = "" ;
   this.A1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1754TipoBaixaUsuTpBaixaEmpId = "" ;
   this.A1755TipoBaixaUsuTpBaixaPagRec = "" ;
   this.A1756TipoBaixaUsuTpBaixaSigla = "" ;
   this.A1772TipoBaixaUsuUsuarioAlt = "" ;
   this.A1773TipoBaixaUsuDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131l62_client": ["ENTER", true] ,"e141l61_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPermissaoUsuCxaContaEmpresaId',fld:'vCPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV7cPermissaoUsuCxaContaUsuarioId',fld:'vCPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV8cTipoBaixaUsuTpBaixaEmpId',fld:'vCTIPOBAIXAUSUTPBAIXAEMPID'},{av:'AV9cTipoBaixaUsuTpBaixaPagRec',fld:'vCTIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV10cTipoBaixaUsuTpBaixaSigla',fld:'vCTIPOBAIXAUSUTPBAIXASIGLA'},{av:'AV11cTipoBaixaUsuUsuarioAlt',fld:'vCTIPOBAIXAUSUUSUARIOALT'},{av:'AV12cTipoBaixaUsuDataHoraAlt',fld:'vCTIPOBAIXAUSUDATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1754TipoBaixaUsuTpBaixaEmpId',fld:'TIPOBAIXAUSUTPBAIXAEMPID'},{av:'A1755TipoBaixaUsuTpBaixaPagRec',fld:'TIPOBAIXAUSUTPBAIXAPAGREC'},{av:'A1756TipoBaixaUsuTpBaixaSigla',fld:'TIPOBAIXAUSUTPBAIXASIGLA'}],[{av:'AV13pPermissaoUsuCxaContaEmpresaId',fld:'vPPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV14pPermissaoUsuCxaContaUsuarioId',fld:'vPPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV15pTipoBaixaUsuTpBaixaEmpId',fld:'vPTIPOBAIXAUSUTPBAIXAEMPID'},{av:'AV16pTipoBaixaUsuTpBaixaPagRec',fld:'vPTIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV17pTipoBaixaUsuTpBaixaSigla',fld:'vPTIPOBAIXAUSUTPBAIXASIGLA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPermissaoUsuCxaContaEmpresaId',fld:'vCPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV7cPermissaoUsuCxaContaUsuarioId',fld:'vCPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV8cTipoBaixaUsuTpBaixaEmpId',fld:'vCTIPOBAIXAUSUTPBAIXAEMPID'},{av:'AV9cTipoBaixaUsuTpBaixaPagRec',fld:'vCTIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV10cTipoBaixaUsuTpBaixaSigla',fld:'vCTIPOBAIXAUSUTPBAIXASIGLA'},{av:'AV11cTipoBaixaUsuUsuarioAlt',fld:'vCTIPOBAIXAUSUUSUARIOALT'},{av:'AV12cTipoBaixaUsuDataHoraAlt',fld:'vCTIPOBAIXAUSUDATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPermissaoUsuCxaContaEmpresaId',fld:'vCPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV7cPermissaoUsuCxaContaUsuarioId',fld:'vCPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV8cTipoBaixaUsuTpBaixaEmpId',fld:'vCTIPOBAIXAUSUTPBAIXAEMPID'},{av:'AV9cTipoBaixaUsuTpBaixaPagRec',fld:'vCTIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV10cTipoBaixaUsuTpBaixaSigla',fld:'vCTIPOBAIXAUSUTPBAIXASIGLA'},{av:'AV11cTipoBaixaUsuUsuarioAlt',fld:'vCTIPOBAIXAUSUUSUARIOALT'},{av:'AV12cTipoBaixaUsuDataHoraAlt',fld:'vCTIPOBAIXAUSUDATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPermissaoUsuCxaContaEmpresaId',fld:'vCPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV7cPermissaoUsuCxaContaUsuarioId',fld:'vCPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV8cTipoBaixaUsuTpBaixaEmpId',fld:'vCTIPOBAIXAUSUTPBAIXAEMPID'},{av:'AV9cTipoBaixaUsuTpBaixaPagRec',fld:'vCTIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV10cTipoBaixaUsuTpBaixaSigla',fld:'vCTIPOBAIXAUSUTPBAIXASIGLA'},{av:'AV11cTipoBaixaUsuUsuarioAlt',fld:'vCTIPOBAIXAUSUUSUARIOALT'},{av:'AV12cTipoBaixaUsuDataHoraAlt',fld:'vCTIPOBAIXAUSUDATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPermissaoUsuCxaContaEmpresaId',fld:'vCPERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV7cPermissaoUsuCxaContaUsuarioId',fld:'vCPERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV8cTipoBaixaUsuTpBaixaEmpId',fld:'vCTIPOBAIXAUSUTPBAIXAEMPID'},{av:'AV9cTipoBaixaUsuTpBaixaPagRec',fld:'vCTIPOBAIXAUSUTPBAIXAPAGREC'},{av:'AV10cTipoBaixaUsuTpBaixaSigla',fld:'vCTIPOBAIXAUSUTPBAIXASIGLA'},{av:'AV11cTipoBaixaUsuUsuarioAlt',fld:'vCTIPOBAIXAUSUUSUARIOALT'},{av:'AV12cTipoBaixaUsuDataHoraAlt',fld:'vCTIPOBAIXAUSUDATAHORAALT'}],[]];
   this.setVCMap("AV13pPermissaoUsuCxaContaEmpresaId", "vPPERMISSAOUSUCXACONTAEMPRESAID", 0, "char");
   this.setVCMap("AV14pPermissaoUsuCxaContaUsuarioId", "vPPERMISSAOUSUCXACONTAUSUARIOID", 0, "char");
   this.setVCMap("AV15pTipoBaixaUsuTpBaixaEmpId", "vPTIPOBAIXAUSUTPBAIXAEMPID", 0, "char");
   this.setVCMap("AV16pTipoBaixaUsuTpBaixaPagRec", "vPTIPOBAIXAUSUTPBAIXAPAGREC", 0, "char");
   this.setVCMap("AV17pTipoBaixaUsuTpBaixaSigla", "vPTIPOBAIXAUSUTPBAIXASIGLA", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx04z0());