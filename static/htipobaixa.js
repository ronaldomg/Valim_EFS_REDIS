/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:7:11.91
*/
gx.evt.autoSkip = false;
gx.define('htipobaixa', false, function () {
   this.ServerClass =  "htipobaixa" ;
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
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV9UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV14MsgErro=gx.fn.getControlValue("vMSGERRO") ;
   };
   this.e118r2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e128r2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e208r2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e218r2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e228r2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e168r2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e138r2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e148r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e158r2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e238r2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e248r2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e258r2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e268r2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,45,47,48,52,53,54,55,56,57,58,59,60,61,62,69];
   this.GXLastCtrlId =69;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipobaixa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addComboBox(1049,52,"TIPOBAIXAPAGREC","","TipoBaixaPagRec","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(1053,53,"TIPOBAIXASIGLA","","","TipoBaixaSigla","char",50,"px",5,5,"left",null,[],1053,"TipoBaixaSigla",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1054,54,"TIPOBAIXADESCRICAO","","","TipoBaixaDescricao","svchar",143,"px",30,30,"left",null,[],1054,"TipoBaixaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1069,55,"LANCAMENTOBAIXADESCRICAO","","","LancamentoBaixaDescricao","svchar",120,"px",25,25,"left",null,[],1069,"LancamentoBaixaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(943,56,"TIPOCONTADESCRICAO","","","TipoContaDescricao","svchar",120,"px",25,25,"left",null,[],943,"TipoContaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1065,57,"TPCOBRANCATPBAIXADESCRICAO","","","TpCobrancaTpBaixaDescricao","svchar",120,"px",25,25,"left",null,[],1065,"TpCobrancaTpBaixaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpcopiar","vBMPCOPIAR",58,0,"px",17,"px","e238r2_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",59,0,"px",17,"px","e208r2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",60,0,"px",17,"px","e218r2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",61,0,"px",17,"px","e228r2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1052,62,"TIPOBAIXAEMPRESAID","Empresa","","TipoBaixaEmpresaId","char",0,"px",10,10,"left",null,[],1052,"TipoBaixaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOBAIXAPAGREC",gxz:"ZV27TipoBaixaPagRec",gxold:"OV27TipoBaixaPagRec",gxvar:"AV27TipoBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27TipoBaixaPagRec=Value},v2z:function(Value){gx.O.ZV27TipoBaixaPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOBAIXAPAGREC",gx.O.AV27TipoBaixaPagRec)},c2v:function(){gx.O.AV27TipoBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXAPAGREC")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOBAIXASIGLA",gxz:"ZV28TipoBaixaSigla",gxold:"OV28TipoBaixaSigla",gxvar:"AV28TipoBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoBaixaSigla=Value},v2z:function(Value){gx.O.ZV28TipoBaixaSigla=Value},v2c:function(){gx.fn.setControlValue("vTIPOBAIXASIGLA",gx.O.AV28TipoBaixaSigla,0)},c2v:function(){gx.O.AV28TipoBaixaSigla=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXASIGLA")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOBAIXADESCRICAO",gxz:"ZV29TipoBaixaDescricao",gxold:"OV29TipoBaixaDescricao",gxvar:"AV29TipoBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TipoBaixaDescricao=Value},v2z:function(Value){gx.O.ZV29TipoBaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOBAIXADESCRICAO",gx.O.AV29TipoBaixaDescricao,0)},c2v:function(){gx.O.AV29TipoBaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE8",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNHELP",grid:0};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAPAGREC",gxz:"Z1049TipoBaixaPagRec",gxold:"O1049TipoBaixaPagRec",gxvar:"A1049TipoBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1049TipoBaixaPagRec=Value},v2z:function(Value){gx.O.Z1049TipoBaixaPagRec=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOBAIXAPAGREC",row || gx.fn.currentGridRowImpl(51),gx.O.A1049TipoBaixaPagRec)},c2v:function(){gx.O.A1049TipoBaixaPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAPAGREC",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXASIGLA",gxz:"Z1053TipoBaixaSigla",gxold:"O1053TipoBaixaSigla",gxvar:"A1053TipoBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1053TipoBaixaSigla=Value},v2z:function(Value){gx.O.Z1053TipoBaixaSigla=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXASIGLA",row || gx.fn.currentGridRowImpl(51),gx.O.A1053TipoBaixaSigla,0)},c2v:function(){gx.O.A1053TipoBaixaSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXASIGLA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXADESCRICAO",gxz:"Z1054TipoBaixaDescricao",gxold:"O1054TipoBaixaDescricao",gxvar:"A1054TipoBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1054TipoBaixaDescricao=Value},v2z:function(Value){gx.O.Z1054TipoBaixaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXADESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A1054TipoBaixaDescricao,0)},c2v:function(){gx.O.A1054TipoBaixaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXADESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBAIXADESCRICAO",gxz:"Z1069LancamentoBaixaDescricao",gxold:"O1069LancamentoBaixaDescricao",gxvar:"A1069LancamentoBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1069LancamentoBaixaDescricao=Value},v2z:function(Value){gx.O.Z1069LancamentoBaixaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOBAIXADESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A1069LancamentoBaixaDescricao,0)},c2v:function(){gx.O.A1069LancamentoBaixaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOBAIXADESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTADESCRICAO",gxz:"Z943TipoContaDescricao",gxold:"O943TipoContaDescricao",gxvar:"A943TipoContaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A943TipoContaDescricao=Value},v2z:function(Value){gx.O.Z943TipoContaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCONTADESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A943TipoContaDescricao,0)},c2v:function(){gx.O.A943TipoContaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONTADESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRANCATPBAIXADESCRICAO",gxz:"Z1065TpCobrancaTpBaixaDescricao",gxold:"O1065TpCobrancaTpBaixaDescricao",gxvar:"A1065TpCobrancaTpBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1065TpCobrancaTpBaixaDescricao=Value},v2z:function(Value){gx.O.Z1065TpCobrancaTpBaixaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TPCOBRANCATPBAIXADESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A1065TpCobrancaTpBaixaDescricao,0)},c2v:function(){gx.O.A1065TpCobrancaTpBaixaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TPCOBRANCATPBAIXADESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCOPIAR",gxz:"ZV30bmpCopiar",gxold:"OV30bmpCopiar",gxvar:"AV30bmpCopiar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpCopiar=Value},v2z:function(Value){gx.O.ZV30bmpCopiar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCOPIAR",row || gx.fn.currentGridRowImpl(51),gx.O.AV30bmpCopiar,gx.O.AV39Bmpcopiar_GXI)},c2v:function(){gx.O.AV39Bmpcopiar_GXI=this.val_GXI();gx.O.AV30bmpCopiar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCOPIAR",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCOPIAR_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV39Bmpcopiar_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(51),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(51),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAEMPRESAID",gxz:"Z1052TipoBaixaEmpresaId",gxold:"O1052TipoBaixaEmpresaId",gxvar:"A1052TipoBaixaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1052TipoBaixaEmpresaId=Value},v2z:function(Value){gx.O.Z1052TipoBaixaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1052TipoBaixaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1052TipoBaixaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TipoBaixaPagRec = "" ;
   this.ZV27TipoBaixaPagRec = "" ;
   this.OV27TipoBaixaPagRec = "" ;
   this.AV28TipoBaixaSigla = "" ;
   this.ZV28TipoBaixaSigla = "" ;
   this.OV28TipoBaixaSigla = "" ;
   this.AV29TipoBaixaDescricao = "" ;
   this.ZV29TipoBaixaDescricao = "" ;
   this.OV29TipoBaixaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1049TipoBaixaPagRec = "" ;
   this.O1049TipoBaixaPagRec = "" ;
   this.Z1053TipoBaixaSigla = "" ;
   this.O1053TipoBaixaSigla = "" ;
   this.Z1054TipoBaixaDescricao = "" ;
   this.O1054TipoBaixaDescricao = "" ;
   this.Z1069LancamentoBaixaDescricao = "" ;
   this.O1069LancamentoBaixaDescricao = "" ;
   this.Z943TipoContaDescricao = "" ;
   this.O943TipoContaDescricao = "" ;
   this.Z1065TpCobrancaTpBaixaDescricao = "" ;
   this.O1065TpCobrancaTpBaixaDescricao = "" ;
   this.ZV30bmpCopiar = "" ;
   this.OV30bmpCopiar = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1052TipoBaixaEmpresaId = "" ;
   this.O1052TipoBaixaEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TipoBaixaPagRec = "" ;
   this.AV28TipoBaixaSigla = "" ;
   this.AV29TipoBaixaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A941TipoContaEmpresaId = "" ;
   this.A942TipoContaId = 0 ;
   this.A1063TpCobrancaTpBaixaEmpresaId = "" ;
   this.A1064TpCobrancaTpBaixaId = 0 ;
   this.A1067LancamentoBaixaEmpresaId = "" ;
   this.A1068LancamentoBaixaId = 0 ;
   this.A1049TipoBaixaPagRec = "" ;
   this.A1053TipoBaixaSigla = "" ;
   this.A1054TipoBaixaDescricao = "" ;
   this.A1069LancamentoBaixaDescricao = "" ;
   this.A943TipoContaDescricao = "" ;
   this.A1065TpCobrancaTpBaixaDescricao = "" ;
   this.AV30bmpCopiar = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1052TipoBaixaEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.AV9UsrCod = "" ;
   this.AV14MsgErro = "" ;
   this.Events = {"e118r2_client": ["'ANTERIOR'", true] ,"e128r2_client": ["'PROXIMO'", true] ,"e208r2_client": ["'ALTERAR'", true] ,"e218r2_client": ["'EXCLUIR'", true] ,"e228r2_client": ["'CONSULTAR'", true] ,"e168r2_client": ["VPAGINA.CLICK", true] ,"e138r2_client": ["'NOVO'", true] ,"e148r2_client": ["'FECHAR'", true] ,"e158r2_client": ["'PROCURAR'", true] ,"e238r2_client": ["'DUPLICAR'", true] ,"e248r2_client": ["'ATUALIZAPAGINA'", true] ,"e258r2_client": ["ENTER", true] ,"e268r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV14MsgErro',fld:'vMSGERRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV14MsgErro',fld:'vMSGERRO'}],[{ctrl:'TIPOBAIXAPAGREC'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOBAIXASIGLA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBAIXASIGLA","Title")',ctrl:'TIPOBAIXASIGLA',prop:'Title'},{ctrl:'TIPOBAIXADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBAIXADESCRICAO","Title")',ctrl:'TIPOBAIXADESCRICAO',prop:'Title'},{ctrl:'LANCAMENTOBAIXADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOBAIXADESCRICAO","Title")',ctrl:'LANCAMENTOBAIXADESCRICAO',prop:'Title'},{ctrl:'TIPOCONTADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCONTADESCRICAO","Title")',ctrl:'TIPOCONTADESCRICAO',prop:'Title'},{ctrl:'TPCOBRANCATPBAIXADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TPCOBRANCATPBAIXADESCRICAO","Title")',ctrl:'TPCOBRANCATPBAIXADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV14MsgErro',fld:'vMSGERRO'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpCopiar',fld:'vBMPCOPIAR'},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'gx.fn.getCtrlProperty("vBMPCOPIAR","Enabled")',ctrl:'vBMPCOPIAR',prop:'Enabled'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'}],[{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'}],[{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'}],[{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'AV28TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV29TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV9UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV14MsgErro',fld:'vMSGERRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV9UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV14MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV9UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV14MsgErro", "vMSGERRO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV9UsrCod"});
   GridContainer.addRefreshingVar({rfrVar:"AV14MsgErro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htipobaixa());
