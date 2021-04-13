/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:55:15.5
*/
gx.evt.autoSkip = false;
gx.define('husuario', false, function () {
   this.ServerClass =  "husuario" ;
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
      this.AV21UsuarioPrivilegio=gx.fn.getControlValue("vUSUARIOPRIVILEGIO") ;
      this.AV41SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A612UsuarioSituacao=gx.fn.getControlValue("USUARIOSITUACAO") ;
   };
   this.e114d2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e124d2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e164d2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e134d2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e144d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e154d2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e204d2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e214d2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e224d2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e234d2_client=function()
   {
      this.executeServerEvent("'ZERARSENHA'", true, arguments[0], false, false);
   };
   this.e244d2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e254d2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e264d2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,56,57,58,65];
   this.GXLastCtrlId =65;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"husuario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(75,47,"USUARIOID","","","UsuarioId","char",0,"px",12,12,"left",null,[],75,"UsuarioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(219,48,"USUARIONOME","","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],219,"UsuarioNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(604,49,"USUARIOPRIVILEGIO","","UsuarioPrivilegio","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpsit","vBMPSIT",50,0,"px",17,"px",null,"","Situação","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpzerarsenha","vBMPZERARSENHA",51,0,"px",17,"px","e234d2_client","","Zerar Senha","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpemp","vBMPEMP",52,0,"px",17,"px",null,"","Empresas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpmens","vBMPMENS",53,0,"px",17,"px",null,"","Mensagens","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmppro","vBMPPRO",54,0,"px",17,"px",null,"","Programas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpper","vBMPPER",55,0,"px",17,"px",null,"","Menu","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",56,0,"px",17,"px","e214d2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",57,0,"px",17,"px","e204d2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",58,0,"px",17,"px","e224d2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOINI",gxz:"ZV25UsuarioIni",gxold:"OV25UsuarioIni",gxvar:"AV25UsuarioIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25UsuarioIni=Value},v2z:function(Value){gx.O.ZV25UsuarioIni=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOINI",gx.O.AV25UsuarioIni,0)},c2v:function(){gx.O.AV25UsuarioIni=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOINI")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAO",gxz:"ZV20Situacao",gxold:"OV20Situacao",gxvar:"AV20Situacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Situacao=Value},v2z:function(Value){gx.O.ZV20Situacao=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAO",gx.O.AV20Situacao)},c2v:function(){gx.O.AV20Situacao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE1",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(46),gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIONOME",gxz:"Z219UsuarioNome",gxold:"O219UsuarioNome",gxvar:"A219UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A219UsuarioNome=Value},v2z:function(Value){gx.O.Z219UsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(46),gx.O.A219UsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A219UsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIONOME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOPRIVILEGIO",gxz:"Z604UsuarioPrivilegio",gxold:"O604UsuarioPrivilegio",gxvar:"A604UsuarioPrivilegio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A604UsuarioPrivilegio=Value},v2z:function(Value){gx.O.Z604UsuarioPrivilegio=Value},v2c:function(row){gx.fn.setGridComboBoxValue("USUARIOPRIVILEGIO",row || gx.fn.currentGridRowImpl(46),gx.O.A604UsuarioPrivilegio);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A604UsuarioPrivilegio=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOPRIVILEGIO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSIT",gxz:"ZV17bmpSit",gxold:"OV17bmpSit",gxvar:"AV17bmpSit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17bmpSit=Value},v2z:function(Value){gx.O.ZV17bmpSit=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSIT",row || gx.fn.currentGridRowImpl(46),gx.O.AV17bmpSit,gx.O.AV47Bmpsit_GXI)},c2v:function(){gx.O.AV47Bmpsit_GXI=this.val_GXI();gx.O.AV17bmpSit=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSIT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSIT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV47Bmpsit_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPZERARSENHA",gxz:"ZV30bmpZerarSenha",gxold:"OV30bmpZerarSenha",gxvar:"AV30bmpZerarSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpZerarSenha=Value},v2z:function(Value){gx.O.ZV30bmpZerarSenha=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPZERARSENHA",row || gx.fn.currentGridRowImpl(46),gx.O.AV30bmpZerarSenha,gx.O.AV48Bmpzerarsenha_GXI)},c2v:function(){gx.O.AV48Bmpzerarsenha_GXI=this.val_GXI();gx.O.AV30bmpZerarSenha=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPZERARSENHA",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPZERARSENHA_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV48Bmpzerarsenha_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEMP",gxz:"ZV19bmpEmp",gxold:"OV19bmpEmp",gxvar:"AV19bmpEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19bmpEmp=Value},v2z:function(Value){gx.O.ZV19bmpEmp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEMP",row || gx.fn.currentGridRowImpl(46),gx.O.AV19bmpEmp,gx.O.AV49Bmpemp_GXI)},c2v:function(){gx.O.AV49Bmpemp_GXI=this.val_GXI();gx.O.AV19bmpEmp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEMP",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEMP_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV49Bmpemp_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPMENS",gxz:"ZV18bmpMens",gxold:"OV18bmpMens",gxvar:"AV18bmpMens",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18bmpMens=Value},v2z:function(Value){gx.O.ZV18bmpMens=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPMENS",row || gx.fn.currentGridRowImpl(46),gx.O.AV18bmpMens,gx.O.AV50Bmpmens_GXI)},c2v:function(){gx.O.AV50Bmpmens_GXI=this.val_GXI();gx.O.AV18bmpMens=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPMENS",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPMENS_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV50Bmpmens_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRO",gxz:"ZV23bmpPro",gxold:"OV23bmpPro",gxvar:"AV23bmpPro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpPro=Value},v2z:function(Value){gx.O.ZV23bmpPro=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRO",row || gx.fn.currentGridRowImpl(46),gx.O.AV23bmpPro,gx.O.AV54Bmppro_GXI)},c2v:function(){gx.O.AV54Bmppro_GXI=this.val_GXI();gx.O.AV23bmpPro=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRO",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRO_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV54Bmppro_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPER",gxz:"ZV24bmpPer",gxold:"OV24bmpPer",gxvar:"AV24bmpPer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24bmpPer=Value},v2z:function(Value){gx.O.ZV24bmpPer=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPER",row || gx.fn.currentGridRowImpl(46),gx.O.AV24bmpPer,gx.O.AV55Bmpper_GXI)},c2v:function(){gx.O.AV55Bmpper_GXI=this.val_GXI();gx.O.AV24bmpPer=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPER",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPER_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV55Bmpper_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV51Bmpalt_GXI)},c2v:function(){gx.O.AV51Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV51Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV52Bmpexc_GXI)},c2v:function(){gx.O.AV52Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV52Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV53Bmpcon_GXI)},c2v:function(){gx.O.AV53Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV53Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV25UsuarioIni = "" ;
   this.ZV25UsuarioIni = "" ;
   this.OV25UsuarioIni = "" ;
   this.AV20Situacao = "" ;
   this.ZV20Situacao = "" ;
   this.OV20Situacao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.Z219UsuarioNome = "" ;
   this.O219UsuarioNome = "" ;
   this.Z604UsuarioPrivilegio = "" ;
   this.O604UsuarioPrivilegio = "" ;
   this.ZV17bmpSit = "" ;
   this.OV17bmpSit = "" ;
   this.ZV30bmpZerarSenha = "" ;
   this.OV30bmpZerarSenha = "" ;
   this.ZV19bmpEmp = "" ;
   this.OV19bmpEmp = "" ;
   this.ZV18bmpMens = "" ;
   this.OV18bmpMens = "" ;
   this.ZV23bmpPro = "" ;
   this.OV23bmpPro = "" ;
   this.ZV24bmpPer = "" ;
   this.OV24bmpPer = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV25UsuarioIni = "" ;
   this.AV20Situacao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A612UsuarioSituacao = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A604UsuarioPrivilegio = "" ;
   this.AV17bmpSit = "" ;
   this.AV30bmpZerarSenha = "" ;
   this.AV19bmpEmp = "" ;
   this.AV18bmpMens = "" ;
   this.AV23bmpPro = "" ;
   this.AV24bmpPer = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A608UsuarioChave = "" ;
   this.AV21UsuarioPrivilegio = "" ;
   this.AV41SnRecuperaFiltro = "" ;
   this.Events = {"e114d2_client": ["'ANTERIOR'", true] ,"e124d2_client": ["'PROXIMO'", true] ,"e164d2_client": ["VPAGINA.CLICK", true] ,"e134d2_client": ["'NOVO'", true] ,"e144d2_client": ["'FECHAR'", true] ,"e154d2_client": ["'PROCURAR'", true] ,"e204d2_client": ["'EXCLUIR'", true] ,"e214d2_client": ["'ALTERAR'", true] ,"e224d2_client": ["'CONSULTAR'", true] ,"e234d2_client": ["'ZERARSENHA'", true] ,"e244d2_client": ["'ATUALIZAPAGINA'", true] ,"e254d2_client": ["ENTER", true] ,"e264d2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21UsuarioPrivilegio',fld:'vUSUARIOPRIVILEGIO'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Jsonclick")',ctrl:'vBMPZERARSENHA',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Visible")',ctrl:'vBMPZERARSENHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEMP","Visible")',ctrl:'vBMPEMP',prop:'Visible'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21UsuarioPrivilegio',fld:'vUSUARIOPRIVILEGIO'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Jsonclick")',ctrl:'vBMPZERARSENHA',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Visible")',ctrl:'vBMPZERARSENHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEMP","Visible")',ctrl:'vBMPEMP',prop:'Visible'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'USUARIONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIONOME","Title")',ctrl:'USUARIONOME',prop:'Title'},{ctrl:'USUARIOPRIVILEGIO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21UsuarioPrivilegio',fld:'vUSUARIOPRIVILEGIO'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Jsonclick")',ctrl:'vBMPZERARSENHA',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Visible")',ctrl:'vBMPZERARSENHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEMP","Visible")',ctrl:'vBMPEMP',prop:'Visible'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21UsuarioPrivilegio',fld:'vUSUARIOPRIVILEGIO'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Jsonclick")',ctrl:'vBMPZERARSENHA',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Visible")',ctrl:'vBMPZERARSENHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEMP","Visible")',ctrl:'vBMPEMP',prop:'Visible'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV17bmpSit',fld:'vBMPSIT'},{av:'gx.fn.getCtrlProperty("vBMPSIT","Tooltiptext")',ctrl:'vBMPSIT',prop:'Tooltiptext'},{av:'AV30bmpZerarSenha',fld:'vBMPZERARSENHA'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Tooltiptext")',ctrl:'vBMPZERARSENHA',prop:'Tooltiptext'},{av:'AV19bmpEmp',fld:'vBMPEMP'},{av:'gx.fn.getCtrlProperty("vBMPEMP","Tooltiptext")',ctrl:'vBMPEMP',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEMP","Link")',ctrl:'vBMPEMP',prop:'Link'},{av:'AV18bmpMens',fld:'vBMPMENS'},{av:'gx.fn.getCtrlProperty("vBMPMENS","Tooltiptext")',ctrl:'vBMPMENS',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPMENS","Link")',ctrl:'vBMPMENS',prop:'Link'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV23bmpPro',fld:'vBMPPRO'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Tooltiptext")',ctrl:'vBMPPRO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPPRO","Link")',ctrl:'vBMPPRO',prop:'Link'},{av:'AV24bmpPer',fld:'vBMPPER'},{av:'gx.fn.getCtrlProperty("vBMPPER","Tooltiptext")',ctrl:'vBMPPER',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPPER","Link")',ctrl:'vBMPPER',prop:'Link'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21UsuarioPrivilegio',fld:'vUSUARIOPRIVILEGIO'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Jsonclick")',ctrl:'vBMPZERARSENHA',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Visible")',ctrl:'vBMPZERARSENHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEMP","Visible")',ctrl:'vBMPEMP',prop:'Visible'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21UsuarioPrivilegio',fld:'vUSUARIOPRIVILEGIO'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Jsonclick")',ctrl:'vBMPZERARSENHA',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Visible")',ctrl:'vBMPZERARSENHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEMP","Visible")',ctrl:'vBMPEMP',prop:'Visible'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV40ErrDsc',fld:'vERRDSC'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ZERARSENHA'"] = [[{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV35UsuarioId',fld:'vUSUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A608UsuarioChave',fld:'USUARIOCHAVE'},{av:'AV39Erro',fld:'vERRO'}],[{av:'AV35UsuarioId',fld:'vUSUARIOID'},{av:'AV56GXLvl271',fld:'vGXLVL271'},{av:'AV36UsuarioIdAux',fld:'vUSUARIOIDAUX'},{av:'AV37UsuarioChaveAux',fld:'vUSUARIOCHAVEAUX'},{av:'AV38UsrSnhAux',fld:'vUSRSNHAUX'},{av:'AV39Erro',fld:'vERRO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25UsuarioIni',fld:'vUSUARIOINI'},{av:'AV20Situacao',fld:'vSITUACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21UsuarioPrivilegio',fld:'vUSUARIOPRIVILEGIO'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Jsonclick")',ctrl:'vBMPZERARSENHA',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'gx.fn.getCtrlProperty("vBMPZERARSENHA","Visible")',ctrl:'vBMPZERARSENHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEMP","Visible")',ctrl:'vBMPEMP',prop:'Visible'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A612UsuarioSituacao',fld:'USUARIOSITUACAO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[]];
   this.setVCMap("AV21UsuarioPrivilegio", "vUSUARIOPRIVILEGIO", 0, "char");
   this.setVCMap("AV41SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A612UsuarioSituacao", "USUARIOSITUACAO", 0, "char");
   this.setVCMap("AV21UsuarioPrivilegio", "vUSUARIOPRIVILEGIO", 0, "char");
   this.setVCMap("AV41SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A612UsuarioSituacao", "USUARIOSITUACAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar({rfrVar:"AV21UsuarioPrivilegio"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpZerarSenha", rfrProp:"Jsonclick", gxAttId:"Bmpzerarsenha"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpZerarSenha", rfrProp:"Visible", gxAttId:"Bmpzerarsenha"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpEmp", rfrProp:"Visible", gxAttId:"Bmpemp"});
   GridContainer.addRefreshingVar({rfrVar:"AV41SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A612UsuarioSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"A75UsuarioId", rfrProp:"Value", gxAttId:"75"});
   GridContainer.addRefreshingVar({rfrVar:"A219UsuarioNome", rfrProp:"Value", gxAttId:"219"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new husuario());
