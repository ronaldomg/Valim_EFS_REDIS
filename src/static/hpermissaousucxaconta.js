/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:6.58
*/
gx.evt.autoSkip = false;
gx.define('hpermissaousucxaconta', false, function () {
   this.ServerClass =  "hpermissaousucxaconta" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV54SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e118y2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e128y2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e218y2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e228y2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e238y2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e168y2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e138y2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e148y2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e158y2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e178y2_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e248y2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e258y2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e268y2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,19,22,25,27,29,31,33,35,38,40,41,45,46,47,48,49,50,51,52,53,59,61,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hpermissaousucxaconta",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1771,45,"PERMISSAOUSUCXACONTAUSUARIOID","","","PermissaoUsuCxaContaUsuarioId","char",0,"px",12,12,"left",null,[],1771,"PermissaoUsuCxaContaUsuarioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcaixabancousu","vBMPCAIXABANCOUSU",46,0,"px",17,"px",null,"","Caixa/Banco","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmptipobaixausu","vBMPTIPOBAIXAUSU",47,0,"px",17,"px",null,"","Tipo de Baixa","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcxabcofilial","vBMPCXABCOFILIAL",48,0,"px",17,"px",null,"","Cxa/Bco por Filial","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",49,0,"px",17,"px","e218y2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",50,0,"px",17,"px","e228y2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",51,0,"px",17,"px","e238y2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1076,52,"PERMISSAOUSUCXACONTAEMPRESAID","Empresa","","PermissaoUsuCxaContaEmpresaId","char",0,"px",10,10,"left",null,[],1076,"PermissaoUsuCxaContaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1750,53,"PERMISSAOUSUCXACONTALIBCXABCO","Acesso Liberado Caixas/Bancos","","PermissaoUsuCxaContaLibCxaBco","char",0,"px",1,1,"left",null,[],1750,"PermissaoUsuCxaContaLibCxaBco",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOID",gxz:"ZV31UsuarioId",gxold:"OV31UsuarioId",gxvar:"AV31UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31UsuarioId=Value},v2z:function(Value){gx.O.ZV31UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV31UsuarioId,0)},c2v:function(){gx.O.AV31UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV32UsuarioNome",gxold:"OV32UsuarioNome",gxvar:"AV32UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32UsuarioNome=Value},v2z:function(Value){gx.O.ZV32UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV32UsuarioNome,0)},c2v:function(){gx.O.AV32UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TABLE4",grid:0};
   GXValidFnc[22]={fld:"TABLE6",grid:0};
   GXValidFnc[25]={fld:"IMAGE2",grid:0};
   GXValidFnc[27]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[29]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[31]={fld:"BTNHELP",grid:0};
   GXValidFnc[33]={fld:"IMAGE1",grid:0};
   GXValidFnc[35]={fld:"TABLE5",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAUSUARIOID",gxz:"Z1771PermissaoUsuCxaContaUsuarioId",gxold:"O1771PermissaoUsuCxaContaUsuarioId",gxvar:"A1771PermissaoUsuCxaContaUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1771PermissaoUsuCxaContaUsuarioId=Value},v2z:function(Value){gx.O.Z1771PermissaoUsuCxaContaUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAUSUARIOID",row || gx.fn.currentGridRowImpl(44),gx.O.A1771PermissaoUsuCxaContaUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1771PermissaoUsuCxaContaUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAUSUARIOID",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCAIXABANCOUSU",gxz:"ZV46bmpCaixaBancoUsu",gxold:"OV46bmpCaixaBancoUsu",gxvar:"AV46bmpCaixaBancoUsu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV46bmpCaixaBancoUsu=Value},v2z:function(Value){gx.O.ZV46bmpCaixaBancoUsu=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCAIXABANCOUSU",row || gx.fn.currentGridRowImpl(44),gx.O.AV46bmpCaixaBancoUsu,gx.O.AV64Bmpcaixabancousu_GXI)},c2v:function(){gx.O.AV64Bmpcaixabancousu_GXI=this.val_GXI();gx.O.AV46bmpCaixaBancoUsu=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCAIXABANCOUSU",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCAIXABANCOUSU_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV64Bmpcaixabancousu_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPTIPOBAIXAUSU",gxz:"ZV47bmpTipoBaixaUsu",gxold:"OV47bmpTipoBaixaUsu",gxvar:"AV47bmpTipoBaixaUsu",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV47bmpTipoBaixaUsu=Value},v2z:function(Value){gx.O.ZV47bmpTipoBaixaUsu=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPTIPOBAIXAUSU",row || gx.fn.currentGridRowImpl(44),gx.O.AV47bmpTipoBaixaUsu,gx.O.AV62Bmptipobaixausu_GXI)},c2v:function(){gx.O.AV62Bmptipobaixausu_GXI=this.val_GXI();gx.O.AV47bmpTipoBaixaUsu=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPTIPOBAIXAUSU",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPTIPOBAIXAUSU_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV62Bmptipobaixausu_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCXABCOFILIAL",gxz:"ZV48bmpCxaBcoFilial",gxold:"OV48bmpCxaBcoFilial",gxvar:"AV48bmpCxaBcoFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV48bmpCxaBcoFilial=Value},v2z:function(Value){gx.O.ZV48bmpCxaBcoFilial=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCXABCOFILIAL",row || gx.fn.currentGridRowImpl(44),gx.O.AV48bmpCxaBcoFilial,gx.O.AV63Bmpcxabcofilial_GXI)},c2v:function(){gx.O.AV63Bmpcxabcofilial_GXI=this.val_GXI();gx.O.AV48bmpCxaBcoFilial=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCXABCOFILIAL",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCXABCOFILIAL_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV63Bmpcxabcofilial_GXI',nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(44),gx.O.AV7bmpAlt,gx.O.AV59Bmpalt_GXI)},c2v:function(){gx.O.AV59Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV59Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(44),gx.O.AV8bmpExc,gx.O.AV60Bmpexc_GXI)},c2v:function(){gx.O.AV60Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV60Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(44),gx.O.AV16bmpCon,gx.O.AV61Bmpcon_GXI)},c2v:function(){gx.O.AV61Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(44))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(44))}, gxvar_GXI:'AV61Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTAEMPRESAID",gxz:"Z1076PermissaoUsuCxaContaEmpresaId",gxold:"O1076PermissaoUsuCxaContaEmpresaId",gxvar:"A1076PermissaoUsuCxaContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1076PermissaoUsuCxaContaEmpresaId=Value},v2z:function(Value){gx.O.Z1076PermissaoUsuCxaContaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTAEMPRESAID",row || gx.fn.currentGridRowImpl(44),gx.O.A1076PermissaoUsuCxaContaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1076PermissaoUsuCxaContaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTAEMPRESAID",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUCXACONTALIBCXABCO",gxz:"Z1750PermissaoUsuCxaContaLibCxaBco",gxold:"O1750PermissaoUsuCxaContaLibCxaBco",gxvar:"A1750PermissaoUsuCxaContaLibCxaBco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1750PermissaoUsuCxaContaLibCxaBco=Value},v2z:function(Value){gx.O.Z1750PermissaoUsuCxaContaLibCxaBco=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUCXACONTALIBCXABCO",row || gx.fn.currentGridRowImpl(44),gx.O.A1750PermissaoUsuCxaContaLibCxaBco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1750PermissaoUsuCxaContaLibCxaBco=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUCXACONTALIBCXABCO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"JS", format:2,grid:0};
   GXValidFnc[62]={fld:"PROMPT_USUARIOID",grid:0};
   this.AV31UsuarioId = "" ;
   this.ZV31UsuarioId = "" ;
   this.OV31UsuarioId = "" ;
   this.AV32UsuarioNome = "" ;
   this.ZV32UsuarioNome = "" ;
   this.OV32UsuarioNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.O1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.ZV46bmpCaixaBancoUsu = "" ;
   this.OV46bmpCaixaBancoUsu = "" ;
   this.ZV47bmpTipoBaixaUsu = "" ;
   this.OV47bmpTipoBaixaUsu = "" ;
   this.ZV48bmpCxaBcoFilial = "" ;
   this.OV48bmpCxaBcoFilial = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.O1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.Z1750PermissaoUsuCxaContaLibCxaBco = "" ;
   this.O1750PermissaoUsuCxaContaLibCxaBco = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV31UsuarioId = "" ;
   this.AV32UsuarioNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.AV46bmpCaixaBancoUsu = "" ;
   this.AV47bmpTipoBaixaUsu = "" ;
   this.AV48bmpCxaBcoFilial = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.A1750PermissaoUsuCxaContaLibCxaBco = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV54SnRecuperaFiltro = "" ;
   this.Events = {"e118y2_client": ["'ANTERIOR'", true] ,"e128y2_client": ["'PROXIMO'", true] ,"e218y2_client": ["'ALTERAR'", true] ,"e228y2_client": ["'EXCLUIR'", true] ,"e238y2_client": ["'CONSULTAR'", true] ,"e168y2_client": ["VPAGINA.CLICK", true] ,"e138y2_client": ["'NOVO'", true] ,"e148y2_client": ["'FECHAR'", true] ,"e158y2_client": ["'PROCURAR'", true] ,"e178y2_client": ["'COPIAR'", true] ,"e248y2_client": ["'ATUALIZAPAGINA'", true] ,"e258y2_client": ["ENTER", true] ,"e268y2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1750PermissaoUsuCxaContaLibCxaBco',fld:'PERMISSAOUSUCXACONTALIBCXABCO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1750PermissaoUsuCxaContaLibCxaBco',fld:'PERMISSAOUSUCXACONTALIBCXABCO'}],[{ctrl:'PERMISSAOUSUCXACONTAUSUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERMISSAOUSUCXACONTAUSUARIOID","Title")',ctrl:'PERMISSAOUSUCXACONTAUSUARIOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV54SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1750PermissaoUsuCxaContaLibCxaBco',fld:'PERMISSAOUSUCXACONTALIBCXABCO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1750PermissaoUsuCxaContaLibCxaBco',fld:'PERMISSAOUSUCXACONTALIBCXABCO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1750PermissaoUsuCxaContaLibCxaBco',fld:'PERMISSAOUSUCXACONTALIBCXABCO'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV47bmpTipoBaixaUsu',fld:'vBMPTIPOBAIXAUSU'},{av:'gx.fn.getCtrlProperty("vBMPTIPOBAIXAUSU","Tooltiptext")',ctrl:'vBMPTIPOBAIXAUSU',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPTIPOBAIXAUSU","Link")',ctrl:'vBMPTIPOBAIXAUSU',prop:'Link'},{av:'AV48bmpCxaBcoFilial',fld:'vBMPCXABCOFILIAL'},{av:'gx.fn.getCtrlProperty("vBMPCXABCOFILIAL","Tooltiptext")',ctrl:'vBMPCXABCOFILIAL',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCXABCOFILIAL","Link")',ctrl:'vBMPCXABCOFILIAL',prop:'Link'},{av:'AV46bmpCaixaBancoUsu',fld:'vBMPCAIXABANCOUSU'},{av:'gx.fn.getCtrlProperty("vBMPCAIXABANCOUSU","Tooltiptext")',ctrl:'vBMPCAIXABANCOUSU',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCAIXABANCOUSU","Link")',ctrl:'vBMPCAIXABANCOUSU',prop:'Link'},{av:'gx.fn.getCtrlProperty("vBMPCAIXABANCOUSU","Enabled")',ctrl:'vBMPCAIXABANCOUSU',prop:'Enabled'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1750PermissaoUsuCxaContaLibCxaBco',fld:'PERMISSAOUSUCXACONTALIBCXABCO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1750PermissaoUsuCxaContaLibCxaBco',fld:'PERMISSAOUSUCXACONTALIBCXABCO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1750PermissaoUsuCxaContaLibCxaBco',fld:'PERMISSAOUSUCXACONTALIBCXABCO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV31UsuarioId',fld:'vUSUARIOID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV54SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1750PermissaoUsuCxaContaLibCxaBco',fld:'PERMISSAOUSUCXACONTALIBCXABCO'}],[]];
   this.setPrompt("PROMPT_USUARIOID", [13]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV54SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV54SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV54SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1076PermissaoUsuCxaContaEmpresaId", rfrProp:"Value", gxAttId:"1076"});
   GridContainer.addRefreshingVar({rfrVar:"A1771PermissaoUsuCxaContaUsuarioId", rfrProp:"Value", gxAttId:"1771"});
   GridContainer.addRefreshingVar({rfrVar:"A1750PermissaoUsuCxaContaLibCxaBco", rfrProp:"Value", gxAttId:"1750"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hpermissaousucxaconta());
