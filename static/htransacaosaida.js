/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:10.75
*/
gx.evt.autoSkip = false;
gx.define('htransacaosaida', false, function () {
   this.ServerClass =  "htransacaosaida" ;
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
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A5577TransacaoSaidaAtivo=gx.fn.getControlValue("TRANSACAOSAIDAATIVO") ;
   };
   this.e11wg2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12wg2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16wg2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13wg2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14wg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15wg2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21wg2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22wg2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23wg2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e17wg2_client=function()
   {
      this.executeServerEvent("'DUPLICARREGISTRO'", true, null, false, false);
   };
   this.e24wg2_client=function()
   {
      this.executeServerEvent("'BUSCACFOPCST'", true, arguments[0], false, false);
   };
   this.e25wg2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26wg2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27wg2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,62,63,64,65,66,67,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htransacaosaida",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5695,54,"TRANSACAOSAIDACODIGO","","","TransacaoSaidaCodigo","char",0,"px",10,10,"left",null,[],5695,"TransacaoSaidaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5568,55,"TRANSACAOSAIDADESCRICAO","","","TransacaoSaidaDescricao","svchar",0,"px",30,30,"left",null,[],5568,"TransacaoSaidaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(5569,56,"TRANSACAOSAIDATIPO","","TransacaoSaidaTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(5578,57,"TRANSACAOSAIDACFOPDENESTADOCOD","","","TransacaoSaidaCFOPDenEstadoCod","int",0,"px",4,4,"right",null,[],5578,"TransacaoSaidaCFOPDenEstadoCod",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5580,58,"TRANSACAOSAIDACFOPFORESTADOCOD","","","TransacaoSaidaCFOPForEstadoCod","int",0,"px",4,4,"right",null,[],5580,"TransacaoSaidaCFOPForEstadoCod",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5597,59,"TRANSACAOSAIDACSTCODIGO","CST","","TransacaoSaidaCSTCodigo","char",0,"px",4,4,"left",null,[],5597,"TransacaoSaidaCSTCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpativa","vBMPATIVA",60,0,"px",17,"px",null,"","Ativa","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",61,0,"px",17,"px","e21wg2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",62,0,"px",17,"px","e22wg2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",63,0,"px",17,"px","e23wg2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5595,64,"TRANSACAOSAIDACSTTIPO","Tipo CST","","TransacaoSaidaCSTTipo","char",0,"px",1,1,"left",null,[],5595,"TransacaoSaidaCSTTipo",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addBitmap("&Bmpbuscacfopcst","vBMPBUSCACFOPCST",65,0,"px",17,"px","e24wg2_client","","Busca Cfop/Cst","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5694,66,"TRANSACAOSAIDAEMPRESAID","Empresa da Transação","","TransacaoSaidaEmpresaId","char",0,"px",10,10,"left",null,[],5694,"TransacaoSaidaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9432,67,"TRANSACAOSAIDATPBUSCACFOCST","Tipo de Busca CFOP/CST","","TransacaoSaidaTpBuscaCFOCST","char",0,"px",1,1,"left",null,[],9432,"TransacaoSaidaTpBuscaCFOCST",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOSAIDACODIGOFILTRO",gxz:"ZV27TransacaoSaidaCodigoFiltro",gxold:"OV27TransacaoSaidaCodigoFiltro",gxvar:"AV27TransacaoSaidaCodigoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TransacaoSaidaCodigoFiltro=Value},v2z:function(Value){gx.O.ZV27TransacaoSaidaCodigoFiltro=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDACODIGOFILTRO",gx.O.AV27TransacaoSaidaCodigoFiltro,0)},c2v:function(){gx.O.AV27TransacaoSaidaCodigoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDACODIGOFILTRO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOSAIDADESCRICAOFILTRO",gxz:"ZV28TransacaoSaidaDescricaoFiltro",gxold:"OV28TransacaoSaidaDescricaoFiltro",gxvar:"AV28TransacaoSaidaDescricaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TransacaoSaidaDescricaoFiltro=Value},v2z:function(Value){gx.O.ZV28TransacaoSaidaDescricaoFiltro=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDADESCRICAOFILTRO",gx.O.AV28TransacaoSaidaDescricaoFiltro,0)},c2v:function(){gx.O.AV28TransacaoSaidaDescricaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDADESCRICAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOSAIDATIPOFILTRO",gxz:"ZV29TransacaoSaidaTipoFiltro",gxold:"OV29TransacaoSaidaTipoFiltro",gxvar:"AV29TransacaoSaidaTipoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29TransacaoSaidaTipoFiltro=Value},v2z:function(Value){gx.O.ZV29TransacaoSaidaTipoFiltro=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOSAIDATIPOFILTRO",gx.O.AV29TransacaoSaidaTipoFiltro)},c2v:function(){gx.O.AV29TransacaoSaidaTipoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDATIPOFILTRO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNHELP",grid:0};
   GXValidFnc[42]={fld:"DUPLICAR",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACODIGO",gxz:"Z5695TransacaoSaidaCodigo",gxold:"O5695TransacaoSaidaCodigo",gxvar:"A5695TransacaoSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5695TransacaoSaidaCodigo=Value},v2z:function(Value){gx.O.Z5695TransacaoSaidaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACODIGO",row || gx.fn.currentGridRowImpl(53),gx.O.A5695TransacaoSaidaCodigo,0)},c2v:function(){gx.O.A5695TransacaoSaidaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDACODIGO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDADESCRICAO",gxz:"Z5568TransacaoSaidaDescricao",gxold:"O5568TransacaoSaidaDescricao",gxvar:"A5568TransacaoSaidaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5568TransacaoSaidaDescricao=Value},v2z:function(Value){gx.O.Z5568TransacaoSaidaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDADESCRICAO",row || gx.fn.currentGridRowImpl(53),gx.O.A5568TransacaoSaidaDescricao,0)},c2v:function(){gx.O.A5568TransacaoSaidaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDADESCRICAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDATIPO",gxz:"Z5569TransacaoSaidaTipo",gxold:"O5569TransacaoSaidaTipo",gxvar:"A5569TransacaoSaidaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5569TransacaoSaidaTipo=Value},v2z:function(Value){gx.O.Z5569TransacaoSaidaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOSAIDATIPO",row || gx.fn.currentGridRowImpl(53),gx.O.A5569TransacaoSaidaTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5569TransacaoSaidaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDATIPO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACFOPDENESTADOCOD",gxz:"Z5578TransacaoSaidaCFOPDenEstadoCod",gxold:"O5578TransacaoSaidaCFOPDenEstadoCod",gxvar:"A5578TransacaoSaidaCFOPDenEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5578TransacaoSaidaCFOPDenEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5578TransacaoSaidaCFOPDenEstadoCod=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACFOPDENESTADOCOD",row || gx.fn.currentGridRowImpl(53),gx.O.A5578TransacaoSaidaCFOPDenEstadoCod,0)},c2v:function(){gx.O.A5578TransacaoSaidaCFOPDenEstadoCod=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSACAOSAIDACFOPDENESTADOCOD",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACFOPFORESTADOCOD",gxz:"Z5580TransacaoSaidaCFOPForEstadoCod",gxold:"O5580TransacaoSaidaCFOPForEstadoCod",gxvar:"A5580TransacaoSaidaCFOPForEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5580TransacaoSaidaCFOPForEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5580TransacaoSaidaCFOPForEstadoCod=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACFOPFORESTADOCOD",row || gx.fn.currentGridRowImpl(53),gx.O.A5580TransacaoSaidaCFOPForEstadoCod,0)},c2v:function(){gx.O.A5580TransacaoSaidaCFOPForEstadoCod=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSACAOSAIDACFOPFORESTADOCOD",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACSTCODIGO",gxz:"Z5597TransacaoSaidaCSTCodigo",gxold:"O5597TransacaoSaidaCSTCodigo",gxvar:"A5597TransacaoSaidaCSTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5597TransacaoSaidaCSTCodigo=Value},v2z:function(Value){gx.O.Z5597TransacaoSaidaCSTCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACSTCODIGO",row || gx.fn.currentGridRowImpl(53),gx.O.A5597TransacaoSaidaCSTCodigo,0)},c2v:function(){gx.O.A5597TransacaoSaidaCSTCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDACSTCODIGO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPATIVA",gxz:"ZV32bmpAtiva",gxold:"OV32bmpAtiva",gxvar:"AV32bmpAtiva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpAtiva=Value},v2z:function(Value){gx.O.ZV32bmpAtiva=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPATIVA",row || gx.fn.currentGridRowImpl(53),gx.O.AV32bmpAtiva,gx.O.AV42Bmpativa_GXI)},c2v:function(){gx.O.AV42Bmpativa_GXI=this.val_GXI();gx.O.AV32bmpAtiva=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPATIVA",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPATIVA_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV42Bmpativa_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACSTTIPO",gxz:"Z5595TransacaoSaidaCSTTipo",gxold:"O5595TransacaoSaidaCSTTipo",gxvar:"A5595TransacaoSaidaCSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5595TransacaoSaidaCSTTipo=Value},v2z:function(Value){gx.O.Z5595TransacaoSaidaCSTTipo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACSTTIPO",row || gx.fn.currentGridRowImpl(53),gx.O.A5595TransacaoSaidaCSTTipo,0)},c2v:function(){gx.O.A5595TransacaoSaidaCSTTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDACSTTIPO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPBUSCACFOPCST",gxz:"ZV33BmpBuscaCfopCst",gxold:"OV33BmpBuscaCfopCst",gxvar:"AV33BmpBuscaCfopCst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33BmpBuscaCfopCst=Value},v2z:function(Value){gx.O.ZV33BmpBuscaCfopCst=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPBUSCACFOPCST",row || gx.fn.currentGridRowImpl(53),gx.O.AV33BmpBuscaCfopCst,gx.O.AV41Bmpbuscacfopcst_GXI)},c2v:function(){gx.O.AV41Bmpbuscacfopcst_GXI=this.val_GXI();gx.O.AV33BmpBuscaCfopCst=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPBUSCACFOPCST",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPBUSCACFOPCST_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV41Bmpbuscacfopcst_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDAEMPRESAID",gxz:"Z5694TransacaoSaidaEmpresaId",gxold:"O5694TransacaoSaidaEmpresaId",gxvar:"A5694TransacaoSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5694TransacaoSaidaEmpresaId=Value},v2z:function(Value){gx.O.Z5694TransacaoSaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(53),gx.O.A5694TransacaoSaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5694TransacaoSaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDATPBUSCACFOCST",gxz:"Z9432TransacaoSaidaTpBuscaCFOCST",gxold:"O9432TransacaoSaidaTpBuscaCFOCST",gxvar:"A9432TransacaoSaidaTpBuscaCFOCST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9432TransacaoSaidaTpBuscaCFOCST=Value},v2z:function(Value){gx.O.Z9432TransacaoSaidaTpBuscaCFOCST=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDATPBUSCACFOCST",row || gx.fn.currentGridRowImpl(53),gx.O.A9432TransacaoSaidaTpBuscaCFOCST,0)},c2v:function(){gx.O.A9432TransacaoSaidaTpBuscaCFOCST=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDATPBUSCACFOCST",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TransacaoSaidaCodigoFiltro = "" ;
   this.ZV27TransacaoSaidaCodigoFiltro = "" ;
   this.OV27TransacaoSaidaCodigoFiltro = "" ;
   this.AV28TransacaoSaidaDescricaoFiltro = "" ;
   this.ZV28TransacaoSaidaDescricaoFiltro = "" ;
   this.OV28TransacaoSaidaDescricaoFiltro = "" ;
   this.AV29TransacaoSaidaTipoFiltro = "" ;
   this.ZV29TransacaoSaidaTipoFiltro = "" ;
   this.OV29TransacaoSaidaTipoFiltro = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5695TransacaoSaidaCodigo = "" ;
   this.O5695TransacaoSaidaCodigo = "" ;
   this.Z5568TransacaoSaidaDescricao = "" ;
   this.O5568TransacaoSaidaDescricao = "" ;
   this.Z5569TransacaoSaidaTipo = "" ;
   this.O5569TransacaoSaidaTipo = "" ;
   this.Z5578TransacaoSaidaCFOPDenEstadoCod = 0 ;
   this.O5578TransacaoSaidaCFOPDenEstadoCod = 0 ;
   this.Z5580TransacaoSaidaCFOPForEstadoCod = 0 ;
   this.O5580TransacaoSaidaCFOPForEstadoCod = 0 ;
   this.Z5597TransacaoSaidaCSTCodigo = "" ;
   this.O5597TransacaoSaidaCSTCodigo = "" ;
   this.ZV32bmpAtiva = "" ;
   this.OV32bmpAtiva = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5595TransacaoSaidaCSTTipo = "" ;
   this.O5595TransacaoSaidaCSTTipo = "" ;
   this.ZV33BmpBuscaCfopCst = "" ;
   this.OV33BmpBuscaCfopCst = "" ;
   this.Z5694TransacaoSaidaEmpresaId = "" ;
   this.O5694TransacaoSaidaEmpresaId = "" ;
   this.Z9432TransacaoSaidaTpBuscaCFOCST = "" ;
   this.O9432TransacaoSaidaTpBuscaCFOCST = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TransacaoSaidaCodigoFiltro = "" ;
   this.AV28TransacaoSaidaDescricaoFiltro = "" ;
   this.AV29TransacaoSaidaTipoFiltro = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A5577TransacaoSaidaAtivo = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5568TransacaoSaidaDescricao = "" ;
   this.A5569TransacaoSaidaTipo = "" ;
   this.A5578TransacaoSaidaCFOPDenEstadoCod = 0 ;
   this.A5580TransacaoSaidaCFOPForEstadoCod = 0 ;
   this.A5597TransacaoSaidaCSTCodigo = "" ;
   this.AV32bmpAtiva = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5595TransacaoSaidaCSTTipo = "" ;
   this.AV33BmpBuscaCfopCst = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A9432TransacaoSaidaTpBuscaCFOCST = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV36Pgmname = "" ;
   this.Events = {"e11wg2_client": ["'ANTERIOR'", true] ,"e12wg2_client": ["'PROXIMO'", true] ,"e16wg2_client": ["VPAGINA.CLICK", true] ,"e13wg2_client": ["'NOVO'", true] ,"e14wg2_client": ["'FECHAR'", true] ,"e15wg2_client": ["'PROCURAR'", true] ,"e21wg2_client": ["'ALTERAR'", true] ,"e22wg2_client": ["'EXCLUIR'", true] ,"e23wg2_client": ["'CONSULTAR'", true] ,"e17wg2_client": ["'DUPLICARREGISTRO'", true] ,"e24wg2_client": ["'BUSCACFOPCST'", true] ,"e25wg2_client": ["'ATUALIZAPAGINA'", true] ,"e26wg2_client": ["ENTER", true] ,"e27wg2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpBuscaCfopCst',fld:'vBMPBUSCACFOPCST'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Tooltiptext")',ctrl:'vBMPBUSCACFOPCST',prop:'Tooltiptext'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A9432TransacaoSaidaTpBuscaCFOCST',fld:'TRANSACAOSAIDATPBUSCACFOCST'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpBuscaCfopCst',fld:'vBMPBUSCACFOPCST'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Tooltiptext")',ctrl:'vBMPBUSCACFOPCST',prop:'Tooltiptext'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A9432TransacaoSaidaTpBuscaCFOCST',fld:'TRANSACAOSAIDATPBUSCACFOCST'}],[{ctrl:'TRANSACAOSAIDACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOSAIDACODIGO","Title")',ctrl:'TRANSACAOSAIDACODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TRANSACAOSAIDADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOSAIDADESCRICAO","Title")',ctrl:'TRANSACAOSAIDADESCRICAO',prop:'Title'},{ctrl:'TRANSACAOSAIDACFOPDENESTADOCOD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOSAIDACFOPDENESTADOCOD","Title")',ctrl:'TRANSACAOSAIDACFOPDENESTADOCOD',prop:'Title'},{ctrl:'TRANSACAOSAIDACFOPFORESTADOCOD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOSAIDACFOPFORESTADOCOD","Title")',ctrl:'TRANSACAOSAIDACFOPFORESTADOCOD',prop:'Title'},{ctrl:'TRANSACAOSAIDATIPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A9432TransacaoSaidaTpBuscaCFOCST',fld:'TRANSACAOSAIDATPBUSCACFOCST'}],[{av:'AV32bmpAtiva',fld:'vBMPATIVA'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Enabled")',ctrl:'vBMPBUSCACFOPCST',prop:'Enabled'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpBuscaCfopCst',fld:'vBMPBUSCACFOPCST'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Tooltiptext")',ctrl:'vBMPBUSCACFOPCST',prop:'Tooltiptext'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A9432TransacaoSaidaTpBuscaCFOCST',fld:'TRANSACAOSAIDATPBUSCACFOCST'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpBuscaCfopCst',fld:'vBMPBUSCACFOPCST'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Tooltiptext")',ctrl:'vBMPBUSCACFOPCST',prop:'Tooltiptext'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A9432TransacaoSaidaTpBuscaCFOCST',fld:'TRANSACAOSAIDATPBUSCACFOCST'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpBuscaCfopCst',fld:'vBMPBUSCACFOPCST'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Tooltiptext")',ctrl:'vBMPBUSCACFOPCST',prop:'Tooltiptext'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A9432TransacaoSaidaTpBuscaCFOCST',fld:'TRANSACAOSAIDATPBUSCACFOCST'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpBuscaCfopCst',fld:'vBMPBUSCACFOPCST'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Tooltiptext")',ctrl:'vBMPBUSCACFOPCST',prop:'Tooltiptext'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A9432TransacaoSaidaTpBuscaCFOCST',fld:'TRANSACAOSAIDATPBUSCACFOCST'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICARREGISTRO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpBuscaCfopCst',fld:'vBMPBUSCACFOPCST'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Tooltiptext")',ctrl:'vBMPBUSCACFOPCST',prop:'Tooltiptext'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A9432TransacaoSaidaTpBuscaCFOCST',fld:'TRANSACAOSAIDATPBUSCACFOCST'}],[]];
   this.EvtParms["'BUSCACFOPCST'"] = [[{av:'A9432TransacaoSaidaTpBuscaCFOCST',fld:'TRANSACAOSAIDATPBUSCACFOCST'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A5568TransacaoSaidaDescricao',fld:'TRANSACAOSAIDADESCRICAO'}],[{av:'A5568TransacaoSaidaDescricao',fld:'TRANSACAOSAIDADESCRICAO'},{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'},{av:'A5694TransacaoSaidaEmpresaId',fld:'TRANSACAOSAIDAEMPRESAID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV28TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV29TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33BmpBuscaCfopCst',fld:'vBMPBUSCACFOPCST'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Tooltiptext")',ctrl:'vBMPBUSCACFOPCST',prop:'Tooltiptext'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'A9432TransacaoSaidaTpBuscaCFOCST',fld:'TRANSACAOSAIDATPBUSCACFOCST'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A5577TransacaoSaidaAtivo", "TRANSACAOSAIDAATIVO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A5577TransacaoSaidaAtivo", "TRANSACAOSAIDAATIVO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33BmpBuscaCfopCst", rfrProp:"Value", gxAttId:"Bmpbuscacfopcst"});
   GridContainer.addRefreshingVar({rfrVar:"AV33BmpBuscaCfopCst", rfrProp:"Tooltiptext", gxAttId:"Bmpbuscacfopcst"});
   GridContainer.addRefreshingVar({rfrVar:"AV36Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"A5577TransacaoSaidaAtivo"});
   GridContainer.addRefreshingVar({rfrVar:"A9432TransacaoSaidaTpBuscaCFOCST", rfrProp:"Value", gxAttId:"9432"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htransacaosaida());
