/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:17:46.0
*/
gx.evt.autoSkip = false;
gx.define('htransacaoentrada', false, function () {
   this.ServerClass =  "htransacaoentrada" ;
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
      this.AV38Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11tm2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12tm2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16tm2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13tm2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14tm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15tm2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20tm2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21tm2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22tm2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e17tm2_client=function()
   {
      this.executeServerEvent("'DUPLICARREGISTRO'", true, null, false, false);
   };
   this.e23tm2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24tm2_client=function()
   {
      this.executeServerEvent("'BUSCACFOPCST'", true, arguments[0], false, false);
   };
   this.e26tm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27tm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,62,63,64,65,66,72];
   this.GXLastCtrlId =72;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htransacaoentrada",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4481,54,"TRANSACAOENTRADACODIGO","","","TransacaoEntradaCodigo","char",0,"px",10,10,"left",null,[],4481,"TransacaoEntradaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4482,55,"TRANSACAOENTRADADESCRICAO","","","TransacaoEntradaDescricao","svchar",0,"px",30,30,"left",null,[],4482,"TransacaoEntradaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4603,56,"TRANSACAOENTRADACFOPDENESTADOC","","","TransacaoEntradaCFOPDenEstadoC","int",0,"px",4,4,"right",null,[],4603,"TransacaoEntradaCFOPDenEstadoC",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4604,57,"TRANSACAOENTRADACFOPFORESTADOC","","","TransacaoEntradaCFOPForEstadoC","int",0,"px",4,4,"right",null,[],4604,"TransacaoEntradaCFOPForEstadoC",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4502,58,"TRANSACAOENTRADACSTCODIGO","","","TransacaoEntradaCSTCodigo","char",0,"px",4,4,"left",null,[],4502,"TransacaoEntradaCSTCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4500,59,"TRANSACAOENTRADACSTTIPO","Tipo da Situação Tributária","","TransacaoEntradaCSTTipo","char",0,"px",1,1,"left",null,[],4500,"TransacaoEntradaCSTTipo",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",60,0,"px",17,"px","e20tm2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",61,0,"px",17,"px","e21tm2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",62,0,"px",17,"px","e22tm2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpbuscacfopcst","vBMPBUSCACFOPCST",63,0,"px",17,"px","e24tm2_client","","Busca CFOP/CST","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(11262,64,"TRANSACAOENTRADACFOPCSTTPTRIB","Transacao Entrada CFOPCSTTp Trib","","TransacaoEntradaCFOPCSTTpTrib","char",0,"px",1,1,"left",null,[],11262,"TransacaoEntradaCFOPCSTTpTrib",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4480,65,"TRANSACAOENTRADAEMPRESAID","Empresa da transação","","TransacaoEntradaEmpresaId","char",0,"px",10,10,"left",null,[],4480,"TransacaoEntradaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(5489,66,"TRANSACAOENTRADATIPO","Transacao Entrada Tipo","TransacaoEntradaTipo","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"ORDEREDTEXT1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOENTRADACODIGO",gxz:"ZV28TransacaoEntradaCodigo",gxold:"OV28TransacaoEntradaCodigo",gxvar:"AV28TransacaoEntradaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TransacaoEntradaCodigo=Value},v2z:function(Value){gx.O.ZV28TransacaoEntradaCodigo=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADACODIGO",gx.O.AV28TransacaoEntradaCodigo,0)},c2v:function(){gx.O.AV28TransacaoEntradaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADACODIGO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"ORDEREDTEXT2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOENTRADADESCRICAO",gxz:"ZV29TransacaoEntradaDescricao",gxold:"OV29TransacaoEntradaDescricao",gxvar:"AV29TransacaoEntradaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TransacaoEntradaDescricao=Value},v2z:function(Value){gx.O.ZV29TransacaoEntradaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOENTRADADESCRICAO",gx.O.AV29TransacaoEntradaDescricao,0)},c2v:function(){gx.O.AV29TransacaoEntradaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOENTRADADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"ORDEREDTEXT3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOTRANSACAOENTRADA",gxz:"ZV34TipoTransacaoEntrada",gxold:"OV34TipoTransacaoEntrada",gxvar:"AV34TipoTransacaoEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV34TipoTransacaoEntrada=Value},v2z:function(Value){gx.O.ZV34TipoTransacaoEntrada=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOTRANSACAOENTRADA",gx.O.AV34TipoTransacaoEntrada)},c2v:function(){gx.O.AV34TipoTransacaoEntrada=this.val()},val:function(){return gx.fn.getControlValue("vTIPOTRANSACAOENTRADA")},nac:gx.falseFn};
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
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACODIGO",gxz:"Z4481TransacaoEntradaCodigo",gxold:"O4481TransacaoEntradaCodigo",gxvar:"A4481TransacaoEntradaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4481TransacaoEntradaCodigo=Value},v2z:function(Value){gx.O.Z4481TransacaoEntradaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACODIGO",row || gx.fn.currentGridRowImpl(53),gx.O.A4481TransacaoEntradaCodigo,0)},c2v:function(){gx.O.A4481TransacaoEntradaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADACODIGO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADADESCRICAO",gxz:"Z4482TransacaoEntradaDescricao",gxold:"O4482TransacaoEntradaDescricao",gxvar:"A4482TransacaoEntradaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4482TransacaoEntradaDescricao=Value},v2z:function(Value){gx.O.Z4482TransacaoEntradaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADADESCRICAO",row || gx.fn.currentGridRowImpl(53),gx.O.A4482TransacaoEntradaDescricao,0)},c2v:function(){gx.O.A4482TransacaoEntradaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADADESCRICAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACFOPDENESTADOC",gxz:"Z4603TransacaoEntradaCFOPDenEstadoC",gxold:"O4603TransacaoEntradaCFOPDenEstadoC",gxvar:"A4603TransacaoEntradaCFOPDenEstadoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4603TransacaoEntradaCFOPDenEstadoC=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4603TransacaoEntradaCFOPDenEstadoC=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACFOPDENESTADOC",row || gx.fn.currentGridRowImpl(53),gx.O.A4603TransacaoEntradaCFOPDenEstadoC,0)},c2v:function(){gx.O.A4603TransacaoEntradaCFOPDenEstadoC=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSACAOENTRADACFOPDENESTADOC",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACFOPFORESTADOC",gxz:"Z4604TransacaoEntradaCFOPForEstadoC",gxold:"O4604TransacaoEntradaCFOPForEstadoC",gxvar:"A4604TransacaoEntradaCFOPForEstadoC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4604TransacaoEntradaCFOPForEstadoC=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4604TransacaoEntradaCFOPForEstadoC=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACFOPFORESTADOC",row || gx.fn.currentGridRowImpl(53),gx.O.A4604TransacaoEntradaCFOPForEstadoC,0)},c2v:function(){gx.O.A4604TransacaoEntradaCFOPForEstadoC=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSACAOENTRADACFOPFORESTADOC",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACSTCODIGO",gxz:"Z4502TransacaoEntradaCSTCodigo",gxold:"O4502TransacaoEntradaCSTCodigo",gxvar:"A4502TransacaoEntradaCSTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4502TransacaoEntradaCSTCodigo=Value},v2z:function(Value){gx.O.Z4502TransacaoEntradaCSTCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACSTCODIGO",row || gx.fn.currentGridRowImpl(53),gx.O.A4502TransacaoEntradaCSTCodigo,0)},c2v:function(){gx.O.A4502TransacaoEntradaCSTCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADACSTCODIGO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACSTTIPO",gxz:"Z4500TransacaoEntradaCSTTipo",gxold:"O4500TransacaoEntradaCSTTipo",gxvar:"A4500TransacaoEntradaCSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4500TransacaoEntradaCSTTipo=Value},v2z:function(Value){gx.O.Z4500TransacaoEntradaCSTTipo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACSTTIPO",row || gx.fn.currentGridRowImpl(53),gx.O.A4500TransacaoEntradaCSTTipo,0)},c2v:function(){gx.O.A4500TransacaoEntradaCSTTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADACSTTIPO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV40Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV41Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV42Bmpcon_GXI)},c2v:function(){gx.O.AV42Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV42Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPBUSCACFOPCST",gxz:"ZV35bmpbuscacfopcst",gxold:"OV35bmpbuscacfopcst",gxvar:"AV35bmpbuscacfopcst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35bmpbuscacfopcst=Value},v2z:function(Value){gx.O.ZV35bmpbuscacfopcst=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPBUSCACFOPCST",row || gx.fn.currentGridRowImpl(53),gx.O.AV35bmpbuscacfopcst,gx.O.AV43Bmpbuscacfopcst_GXI)},c2v:function(){gx.O.AV43Bmpbuscacfopcst_GXI=this.val_GXI();gx.O.AV35bmpbuscacfopcst=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPBUSCACFOPCST",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPBUSCACFOPCST_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV43Bmpbuscacfopcst_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADACFOPCSTTPTRIB",gxz:"Z11262TransacaoEntradaCFOPCSTTpTrib",gxold:"O11262TransacaoEntradaCFOPCSTTpTrib",gxvar:"A11262TransacaoEntradaCFOPCSTTpTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11262TransacaoEntradaCFOPCSTTpTrib=Value},v2z:function(Value){gx.O.Z11262TransacaoEntradaCFOPCSTTpTrib=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADACFOPCSTTPTRIB",row || gx.fn.currentGridRowImpl(53),gx.O.A11262TransacaoEntradaCFOPCSTTpTrib,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11262TransacaoEntradaCFOPCSTTpTrib=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADACFOPCSTTPTRIB",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADAEMPRESAID",gxz:"Z4480TransacaoEntradaEmpresaId",gxold:"O4480TransacaoEntradaEmpresaId",gxvar:"A4480TransacaoEntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4480TransacaoEntradaEmpresaId=Value},v2z:function(Value){gx.O.Z4480TransacaoEntradaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(53),gx.O.A4480TransacaoEntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4480TransacaoEntradaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADATIPO",gxz:"Z5489TransacaoEntradaTipo",gxold:"O5489TransacaoEntradaTipo",gxvar:"A5489TransacaoEntradaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5489TransacaoEntradaTipo=Value},v2z:function(Value){gx.O.Z5489TransacaoEntradaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOENTRADATIPO",row || gx.fn.currentGridRowImpl(53),gx.O.A5489TransacaoEntradaTipo)},c2v:function(){gx.O.A5489TransacaoEntradaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADATIPO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28TransacaoEntradaCodigo = "" ;
   this.ZV28TransacaoEntradaCodigo = "" ;
   this.OV28TransacaoEntradaCodigo = "" ;
   this.AV29TransacaoEntradaDescricao = "" ;
   this.ZV29TransacaoEntradaDescricao = "" ;
   this.OV29TransacaoEntradaDescricao = "" ;
   this.AV34TipoTransacaoEntrada = "" ;
   this.ZV34TipoTransacaoEntrada = "" ;
   this.OV34TipoTransacaoEntrada = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z4481TransacaoEntradaCodigo = "" ;
   this.O4481TransacaoEntradaCodigo = "" ;
   this.Z4482TransacaoEntradaDescricao = "" ;
   this.O4482TransacaoEntradaDescricao = "" ;
   this.Z4603TransacaoEntradaCFOPDenEstadoC = 0 ;
   this.O4603TransacaoEntradaCFOPDenEstadoC = 0 ;
   this.Z4604TransacaoEntradaCFOPForEstadoC = 0 ;
   this.O4604TransacaoEntradaCFOPForEstadoC = 0 ;
   this.Z4502TransacaoEntradaCSTCodigo = "" ;
   this.O4502TransacaoEntradaCSTCodigo = "" ;
   this.Z4500TransacaoEntradaCSTTipo = "" ;
   this.O4500TransacaoEntradaCSTTipo = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV35bmpbuscacfopcst = "" ;
   this.OV35bmpbuscacfopcst = "" ;
   this.Z11262TransacaoEntradaCFOPCSTTpTrib = "" ;
   this.O11262TransacaoEntradaCFOPCSTTpTrib = "" ;
   this.Z4480TransacaoEntradaEmpresaId = "" ;
   this.O4480TransacaoEntradaEmpresaId = "" ;
   this.Z5489TransacaoEntradaTipo = "" ;
   this.O5489TransacaoEntradaTipo = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28TransacaoEntradaCodigo = "" ;
   this.AV29TransacaoEntradaDescricao = "" ;
   this.AV34TipoTransacaoEntrada = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A4481TransacaoEntradaCodigo = "" ;
   this.A4482TransacaoEntradaDescricao = "" ;
   this.A4603TransacaoEntradaCFOPDenEstadoC = 0 ;
   this.A4604TransacaoEntradaCFOPForEstadoC = 0 ;
   this.A4502TransacaoEntradaCSTCodigo = "" ;
   this.A4500TransacaoEntradaCSTTipo = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV35bmpbuscacfopcst = "" ;
   this.A11262TransacaoEntradaCFOPCSTTpTrib = "" ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A5489TransacaoEntradaTipo = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV38Pgmname = "" ;
   this.Events = {"e11tm2_client": ["'ANTERIOR'", true] ,"e12tm2_client": ["'PROXIMO'", true] ,"e16tm2_client": ["VPAGINA.CLICK", true] ,"e13tm2_client": ["'NOVO'", true] ,"e14tm2_client": ["'FECHAR'", true] ,"e15tm2_client": ["'PROCURAR'", true] ,"e20tm2_client": ["'ALTERAR'", true] ,"e21tm2_client": ["'EXCLUIR'", true] ,"e22tm2_client": ["'CONSULTAR'", true] ,"e17tm2_client": ["'DUPLICARREGISTRO'", true] ,"e23tm2_client": ["'ATUALIZAPAGINA'", true] ,"e24tm2_client": ["'BUSCACFOPCST'", true] ,"e26tm2_client": ["ENTER", true] ,"e27tm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A11262TransacaoEntradaCFOPCSTTpTrib',fld:'TRANSACAOENTRADACFOPCSTTPTRIB'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A11262TransacaoEntradaCFOPCSTTpTrib',fld:'TRANSACAOENTRADACFOPCSTTPTRIB'}],[{ctrl:'TRANSACAOENTRADACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOENTRADACODIGO","Title")',ctrl:'TRANSACAOENTRADACODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TRANSACAOENTRADADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOENTRADADESCRICAO","Title")',ctrl:'TRANSACAOENTRADADESCRICAO',prop:'Title'},{ctrl:'TRANSACAOENTRADACFOPDENESTADOC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOENTRADACFOPDENESTADOC","Title")',ctrl:'TRANSACAOENTRADACFOPDENESTADOC',prop:'Title'},{ctrl:'TRANSACAOENTRADACFOPFORESTADOC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOENTRADACFOPFORESTADOC","Title")',ctrl:'TRANSACAOENTRADACFOPFORESTADOC',prop:'Title'},{ctrl:'TRANSACAOENTRADACSTCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOENTRADACSTCODIGO","Title")',ctrl:'TRANSACAOENTRADACSTCODIGO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A11262TransacaoEntradaCFOPCSTTpTrib',fld:'TRANSACAOENTRADACFOPCSTTPTRIB'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A11262TransacaoEntradaCFOPCSTTpTrib',fld:'TRANSACAOENTRADACFOPCSTTPTRIB'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A11262TransacaoEntradaCFOPCSTTpTrib',fld:'TRANSACAOENTRADACFOPCSTTPTRIB'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV38Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A11262TransacaoEntradaCFOPCSTTpTrib',fld:'TRANSACAOENTRADACFOPCSTTPTRIB'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38Pgmname',fld:'vPGMNAME'}],[{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICARREGISTRO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A11262TransacaoEntradaCFOPCSTTpTrib',fld:'TRANSACAOENTRADACFOPCSTTPTRIB'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28TransacaoEntradaCodigo',fld:'vTRANSACAOENTRADACODIGO'},{av:'AV29TransacaoEntradaDescricao',fld:'vTRANSACAOENTRADADESCRICAO'},{av:'AV34TipoTransacaoEntrada',fld:'vTIPOTRANSACAOENTRADA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A11262TransacaoEntradaCFOPCSTTpTrib',fld:'TRANSACAOENTRADACFOPCSTTPTRIB'}],[]];
   this.EvtParms["'BUSCACFOPCST'"] = [[{av:'A11262TransacaoEntradaCFOPCSTTpTrib',fld:'TRANSACAOENTRADACFOPCSTTPTRIB'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'A4482TransacaoEntradaDescricao',fld:'TRANSACAOENTRADADESCRICAO'}],[{av:'A4482TransacaoEntradaDescricao',fld:'TRANSACAOENTRADADESCRICAO'},{av:'A4481TransacaoEntradaCodigo',fld:'TRANSACAOENTRADACODIGO'},{av:'A4480TransacaoEntradaEmpresaId',fld:'TRANSACAOENTRADAEMPRESAID'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A11262TransacaoEntradaCFOPCSTTpTrib',fld:'TRANSACAOENTRADACFOPCSTTPTRIB'}],[{av:'AV35bmpbuscacfopcst',fld:'vBMPBUSCACFOPCST'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Tooltiptext")',ctrl:'vBMPBUSCACFOPCST',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPBUSCACFOPCST","Enabled")',ctrl:'vBMPBUSCACFOPCST',prop:'Enabled'}]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV38Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV38Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV38Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"A11262TransacaoEntradaCFOPCSTTpTrib", rfrProp:"Value", gxAttId:"11262"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htransacaoentrada());
