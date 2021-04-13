/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:25:55.22
*/
gx.evt.autoSkip = false;
gx.define('gx01s0', false, function () {
   this.ServerClass =  "gx01s0" ;
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
      this.AV13pEmpresaPessoasEmpresaId=gx.fn.getControlValue("vPEMPRESAPESSOASEMPRESAID") ;
      this.AV14pPessoaId=gx.fn.getIntegerValue("vPPESSOAID",'.') ;
      this.AV15pEmpresaTipoTelefoneEmpresaId=gx.fn.getControlValue("vPEMPRESATIPOTELEFONEEMPRESAID") ;
      this.AV16pTipoTelefoneId=gx.fn.getControlValue("vPTIPOTELEFONEID") ;
   };
   this.e131j12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141j11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx01s0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(227,53,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(69,54,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(544,55,"EMPRESATIPOTELEFONEEMPRESAID","Empresa Tipo Telefone Empresa Id","","EmpresaTipoTelefoneEmpresaId","char",0,"px",10,10,"left",null,[],544,"EmpresaTipoTelefoneEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(545,56,"TIPOTELEFONEID","Tipo de Telefone","","TipoTelefoneId","char",0,"px",15,15,"left",null,[],545,"TipoTelefoneId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(542,57,"TELEFONEPESSOANUMERO","Telefone","Selecionar","TelefonePessoaNumero","svchar",0,"px",15,15,"left",null,[],542,"TelefonePessoaNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(543,58,"TELEFONEPESSOARAMAL","Ramal","","TelefonePessoaRamal","svchar",0,"px",5,5,"left",null,[],543,"TelefonePessoaRamal",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(826,59,"TELEFONEPESSOAUSUARIOID","Usuário","","TelefonePessoaUsuarioId","char",0,"px",12,12,"left",null,[],826,"TelefonePessoaUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(3240,60,"TELEFONEPESSOATIPO","Tipo","TelefonePessoaTipo","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEMPRESAPESSOASEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAPESSOASEMPRESAID",gxz:"ZV6cEmpresaPessoasEmpresaId",gxold:"OV6cEmpresaPessoasEmpresaId",gxvar:"AV6cEmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESAPESSOASEMPRESAID",gx.O.AV6cEmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV6cEmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPESSOAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOAID",gxz:"ZV7cPessoaId",gxold:"OV7cPessoaId",gxvar:"AV7cPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPESSOAID",gx.O.AV7cPessoaId,0)},c2v:function(){gx.O.AV7cPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKEMPRESATIPOTELEFONEEMPRESAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESATIPOTELEFONEEMPRESAID",gxz:"ZV8cEmpresaTipoTelefoneEmpresaId",gxold:"OV8cEmpresaTipoTelefoneEmpresaId",gxvar:"AV8cEmpresaTipoTelefoneEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEmpresaTipoTelefoneEmpresaId=Value},v2z:function(Value){gx.O.ZV8cEmpresaTipoTelefoneEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESATIPOTELEFONEEMPRESAID",gx.O.AV8cEmpresaTipoTelefoneEmpresaId,0)},c2v:function(){gx.O.AV8cEmpresaTipoTelefoneEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESATIPOTELEFONEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOTELEFONEID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOTELEFONEID",gxz:"ZV9cTipoTelefoneId",gxold:"OV9cTipoTelefoneId",gxvar:"AV9cTipoTelefoneId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTipoTelefoneId=Value},v2z:function(Value){gx.O.ZV9cTipoTelefoneId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOTELEFONEID",gx.O.AV9cTipoTelefoneId,0)},c2v:function(){gx.O.AV9cTipoTelefoneId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOTELEFONEID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTELEFONEPESSOANUMERO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTELEFONEPESSOANUMERO",gxz:"ZV10cTelefonePessoaNumero",gxold:"OV10cTelefonePessoaNumero",gxvar:"AV10cTelefonePessoaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTelefonePessoaNumero=Value},v2z:function(Value){gx.O.ZV10cTelefonePessoaNumero=Value},v2c:function(){gx.fn.setControlValue("vCTELEFONEPESSOANUMERO",gx.O.AV10cTelefonePessoaNumero,0)},c2v:function(){gx.O.AV10cTelefonePessoaNumero=this.val()},val:function(){return gx.fn.getControlValue("vCTELEFONEPESSOANUMERO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTELEFONEPESSOARAMAL", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTELEFONEPESSOARAMAL",gxz:"ZV11cTelefonePessoaRamal",gxold:"OV11cTelefonePessoaRamal",gxvar:"AV11cTelefonePessoaRamal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTelefonePessoaRamal=Value},v2z:function(Value){gx.O.ZV11cTelefonePessoaRamal=Value},v2c:function(){gx.fn.setControlValue("vCTELEFONEPESSOARAMAL",gx.O.AV11cTelefonePessoaRamal,0)},c2v:function(){gx.O.AV11cTelefonePessoaRamal=this.val()},val:function(){return gx.fn.getControlValue("vCTELEFONEPESSOARAMAL")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTELEFONEPESSOAUSUARIOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTELEFONEPESSOAUSUARIOID",gxz:"ZV12cTelefonePessoaUsuarioId",gxold:"OV12cTelefonePessoaUsuarioId",gxvar:"AV12cTelefonePessoaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTelefonePessoaUsuarioId=Value},v2z:function(Value){gx.O.ZV12cTelefonePessoaUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCTELEFONEPESSOAUSUARIOID",gx.O.AV12cTelefonePessoaUsuarioId,0)},c2v:function(){gx.O.AV12cTelefonePessoaUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCTELEFONEPESSOAUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(51),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESATIPOTELEFONEEMPRESAID",gxz:"Z544EmpresaTipoTelefoneEmpresaId",gxold:"O544EmpresaTipoTelefoneEmpresaId",gxvar:"A544EmpresaTipoTelefoneEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A544EmpresaTipoTelefoneEmpresaId=Value},v2z:function(Value){gx.O.Z544EmpresaTipoTelefoneEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESATIPOTELEFONEEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A544EmpresaTipoTelefoneEmpresaId,0)},c2v:function(){gx.O.A544EmpresaTipoTelefoneEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESATIPOTELEFONEEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOTELEFONEID",gxz:"Z545TipoTelefoneId",gxold:"O545TipoTelefoneId",gxvar:"A545TipoTelefoneId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A545TipoTelefoneId=Value},v2z:function(Value){gx.O.Z545TipoTelefoneId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOTELEFONEID",row || gx.fn.currentGridRowImpl(51),gx.O.A545TipoTelefoneId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A545TipoTelefoneId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOTELEFONEID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TELEFONEPESSOANUMERO",gxz:"Z542TelefonePessoaNumero",gxold:"O542TelefonePessoaNumero",gxvar:"A542TelefonePessoaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A542TelefonePessoaNumero=Value},v2z:function(Value){gx.O.Z542TelefonePessoaNumero=Value},v2c:function(row){gx.fn.setGridControlValue("TELEFONEPESSOANUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A542TelefonePessoaNumero,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A542TelefonePessoaNumero=this.val()},val:function(row){return gx.fn.getGridControlValue("TELEFONEPESSOANUMERO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:5,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TELEFONEPESSOARAMAL",gxz:"Z543TelefonePessoaRamal",gxold:"O543TelefonePessoaRamal",gxvar:"A543TelefonePessoaRamal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A543TelefonePessoaRamal=Value},v2z:function(Value){gx.O.Z543TelefonePessoaRamal=Value},v2c:function(row){gx.fn.setGridControlValue("TELEFONEPESSOARAMAL",row || gx.fn.currentGridRowImpl(51),gx.O.A543TelefonePessoaRamal,0)},c2v:function(){gx.O.A543TelefonePessoaRamal=this.val()},val:function(row){return gx.fn.getGridControlValue("TELEFONEPESSOARAMAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TELEFONEPESSOAUSUARIOID",gxz:"Z826TelefonePessoaUsuarioId",gxold:"O826TelefonePessoaUsuarioId",gxvar:"A826TelefonePessoaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A826TelefonePessoaUsuarioId=Value},v2z:function(Value){gx.O.Z826TelefonePessoaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("TELEFONEPESSOAUSUARIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A826TelefonePessoaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A826TelefonePessoaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("TELEFONEPESSOAUSUARIOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TELEFONEPESSOATIPO",gxz:"Z3240TelefonePessoaTipo",gxold:"O3240TelefonePessoaTipo",gxvar:"A3240TelefonePessoaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3240TelefonePessoaTipo=Value},v2z:function(Value){gx.O.Z3240TelefonePessoaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TELEFONEPESSOATIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A3240TelefonePessoaTipo)},c2v:function(){gx.O.A3240TelefonePessoaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TELEFONEPESSOATIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cEmpresaPessoasEmpresaId = "" ;
   this.ZV6cEmpresaPessoasEmpresaId = "" ;
   this.OV6cEmpresaPessoasEmpresaId = "" ;
   this.AV7cPessoaId = 0 ;
   this.ZV7cPessoaId = 0 ;
   this.OV7cPessoaId = 0 ;
   this.AV8cEmpresaTipoTelefoneEmpresaId = "" ;
   this.ZV8cEmpresaTipoTelefoneEmpresaId = "" ;
   this.OV8cEmpresaTipoTelefoneEmpresaId = "" ;
   this.AV9cTipoTelefoneId = "" ;
   this.ZV9cTipoTelefoneId = "" ;
   this.OV9cTipoTelefoneId = "" ;
   this.AV10cTelefonePessoaNumero = "" ;
   this.ZV10cTelefonePessoaNumero = "" ;
   this.OV10cTelefonePessoaNumero = "" ;
   this.AV11cTelefonePessoaRamal = "" ;
   this.ZV11cTelefonePessoaRamal = "" ;
   this.OV11cTelefonePessoaRamal = "" ;
   this.AV12cTelefonePessoaUsuarioId = "" ;
   this.ZV12cTelefonePessoaUsuarioId = "" ;
   this.OV12cTelefonePessoaUsuarioId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z544EmpresaTipoTelefoneEmpresaId = "" ;
   this.O544EmpresaTipoTelefoneEmpresaId = "" ;
   this.Z545TipoTelefoneId = "" ;
   this.O545TipoTelefoneId = "" ;
   this.Z542TelefonePessoaNumero = "" ;
   this.O542TelefonePessoaNumero = "" ;
   this.Z543TelefonePessoaRamal = "" ;
   this.O543TelefonePessoaRamal = "" ;
   this.Z826TelefonePessoaUsuarioId = "" ;
   this.O826TelefonePessoaUsuarioId = "" ;
   this.Z3240TelefonePessoaTipo = "" ;
   this.O3240TelefonePessoaTipo = "" ;
   this.AV6cEmpresaPessoasEmpresaId = "" ;
   this.AV7cPessoaId = 0 ;
   this.AV8cEmpresaTipoTelefoneEmpresaId = "" ;
   this.AV9cTipoTelefoneId = "" ;
   this.AV10cTelefonePessoaNumero = "" ;
   this.AV11cTelefonePessoaRamal = "" ;
   this.AV12cTelefonePessoaUsuarioId = "" ;
   this.AV13pEmpresaPessoasEmpresaId = "" ;
   this.AV14pPessoaId = 0 ;
   this.AV15pEmpresaTipoTelefoneEmpresaId = "" ;
   this.AV16pTipoTelefoneId = "" ;
   this.AV5LinkSelection = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A544EmpresaTipoTelefoneEmpresaId = "" ;
   this.A545TipoTelefoneId = "" ;
   this.A542TelefonePessoaNumero = "" ;
   this.A543TelefonePessoaRamal = "" ;
   this.A826TelefonePessoaUsuarioId = "" ;
   this.A3240TelefonePessoaTipo = "" ;
   this.Events = {"e131j12_client": ["ENTER", true] ,"e141j11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cEmpresaTipoTelefoneEmpresaId',fld:'vCEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV9cTipoTelefoneId',fld:'vCTIPOTELEFONEID'},{av:'AV10cTelefonePessoaNumero',fld:'vCTELEFONEPESSOANUMERO'},{av:'AV11cTelefonePessoaRamal',fld:'vCTELEFONEPESSOARAMAL'},{av:'AV12cTelefonePessoaUsuarioId',fld:'vCTELEFONEPESSOAUSUARIOID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A544EmpresaTipoTelefoneEmpresaId',fld:'EMPRESATIPOTELEFONEEMPRESAID'},{av:'A545TipoTelefoneId',fld:'TIPOTELEFONEID'}],[{av:'AV13pEmpresaPessoasEmpresaId',fld:'vPEMPRESAPESSOASEMPRESAID'},{av:'AV14pPessoaId',fld:'vPPESSOAID'},{av:'AV15pEmpresaTipoTelefoneEmpresaId',fld:'vPEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV16pTipoTelefoneId',fld:'vPTIPOTELEFONEID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cEmpresaTipoTelefoneEmpresaId',fld:'vCEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV9cTipoTelefoneId',fld:'vCTIPOTELEFONEID'},{av:'AV10cTelefonePessoaNumero',fld:'vCTELEFONEPESSOANUMERO'},{av:'AV11cTelefonePessoaRamal',fld:'vCTELEFONEPESSOARAMAL'},{av:'AV12cTelefonePessoaUsuarioId',fld:'vCTELEFONEPESSOAUSUARIOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cEmpresaTipoTelefoneEmpresaId',fld:'vCEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV9cTipoTelefoneId',fld:'vCTIPOTELEFONEID'},{av:'AV10cTelefonePessoaNumero',fld:'vCTELEFONEPESSOANUMERO'},{av:'AV11cTelefonePessoaRamal',fld:'vCTELEFONEPESSOARAMAL'},{av:'AV12cTelefonePessoaUsuarioId',fld:'vCTELEFONEPESSOAUSUARIOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cEmpresaTipoTelefoneEmpresaId',fld:'vCEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV9cTipoTelefoneId',fld:'vCTIPOTELEFONEID'},{av:'AV10cTelefonePessoaNumero',fld:'vCTELEFONEPESSOANUMERO'},{av:'AV11cTelefonePessoaRamal',fld:'vCTELEFONEPESSOARAMAL'},{av:'AV12cTelefonePessoaUsuarioId',fld:'vCTELEFONEPESSOAUSUARIOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cEmpresaTipoTelefoneEmpresaId',fld:'vCEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV9cTipoTelefoneId',fld:'vCTIPOTELEFONEID'},{av:'AV10cTelefonePessoaNumero',fld:'vCTELEFONEPESSOANUMERO'},{av:'AV11cTelefonePessoaRamal',fld:'vCTELEFONEPESSOARAMAL'},{av:'AV12cTelefonePessoaUsuarioId',fld:'vCTELEFONEPESSOAUSUARIOID'}],[]];
   this.setVCMap("AV13pEmpresaPessoasEmpresaId", "vPEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV14pPessoaId", "vPPESSOAID", 0, "int");
   this.setVCMap("AV15pEmpresaTipoTelefoneEmpresaId", "vPEMPRESATIPOTELEFONEEMPRESAID", 0, "char");
   this.setVCMap("AV16pTipoTelefoneId", "vPTIPOTELEFONEID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx01s0());