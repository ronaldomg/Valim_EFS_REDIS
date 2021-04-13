/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:13.27
*/
gx.evt.autoSkip = false;
gx.define('hconsultatransacaosaida', false, function () {
   this.ServerClass =  "hconsultatransacaosaida" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV23TransacaoSaidaSnInativa=gx.fn.getControlValue("vTRANSACAOSAIDASNINATIVA") ;
      this.AV19TransacaoSaidaCodigo=gx.fn.getControlValue("vTRANSACAOSAIDACODIGO") ;
   };
   this.e17wi2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11wi2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12wi2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13wi2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14wi2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15wi2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20wi2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21wi1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,34,35,36,37,43,46,48,50,52,54,55,56,57];
   this.GXLastCtrlId =57;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatransacaosaida",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5695,29,"TRANSACAOSAIDACODIGO","","","TransacaoSaidaCodigo","char",0,"px",10,10,"left",null,[],5695,"TransacaoSaidaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5568,30,"TRANSACAOSAIDADESCRICAO","","","TransacaoSaidaDescricao","svchar",0,"px",30,30,"left",null,[],5568,"TransacaoSaidaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(5569,31,"TRANSACAOSAIDATIPO","","TransacaoSaidaTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(5578,32,"TRANSACAOSAIDACFOPDENESTADOCOD","","","TransacaoSaidaCFOPDenEstadoCod","int",0,"px",4,4,"right",null,[],5578,"TransacaoSaidaCFOPDenEstadoCod",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5580,33,"TRANSACAOSAIDACFOPFORESTADOCOD","","","TransacaoSaidaCFOPForEstadoCod","int",0,"px",4,4,"right",null,[],5580,"TransacaoSaidaCFOPForEstadoCod",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5597,34,"TRANSACAOSAIDACSTCODIGO","CST","","TransacaoSaidaCSTCodigo","char",0,"px",4,4,"left",null,[],5597,"TransacaoSaidaCSTCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpativa","vBMPATIVA",35,0,"px",17,"px",null,"","Ativa","Image","");
   GridContainer.addSingleLineEdit(5595,36,"TRANSACAOSAIDACSTTIPO","Tipo CST","","TransacaoSaidaCSTTipo","char",0,"px",1,1,"left",null,[],5595,"TransacaoSaidaCSTTipo",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5577,37,"TRANSACAOSAIDAATIVO","Transação Ativa","","TransacaoSaidaAtivo","char",0,"px",1,1,"left",null,[],5577,"TransacaoSaidaAtivo",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOSAIDACODIGOFILTRO",gxz:"ZV16TransacaoSaidaCodigoFiltro",gxold:"OV16TransacaoSaidaCodigoFiltro",gxvar:"AV16TransacaoSaidaCodigoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TransacaoSaidaCodigoFiltro=Value},v2z:function(Value){gx.O.ZV16TransacaoSaidaCodigoFiltro=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDACODIGOFILTRO",gx.O.AV16TransacaoSaidaCodigoFiltro,0)},c2v:function(){gx.O.AV16TransacaoSaidaCodigoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDACODIGOFILTRO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOSAIDADESCRICAOFILTRO",gxz:"ZV17TransacaoSaidaDescricaoFiltro",gxold:"OV17TransacaoSaidaDescricaoFiltro",gxvar:"AV17TransacaoSaidaDescricaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TransacaoSaidaDescricaoFiltro=Value},v2z:function(Value){gx.O.ZV17TransacaoSaidaDescricaoFiltro=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOSAIDADESCRICAOFILTRO",gx.O.AV17TransacaoSaidaDescricaoFiltro,0)},c2v:function(){gx.O.AV17TransacaoSaidaDescricaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDADESCRICAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOSAIDATIPOFILTRO",gxz:"ZV18TransacaoSaidaTipoFiltro",gxold:"OV18TransacaoSaidaTipoFiltro",gxvar:"AV18TransacaoSaidaTipoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18TransacaoSaidaTipoFiltro=Value},v2z:function(Value){gx.O.ZV18TransacaoSaidaTipoFiltro=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOSAIDATIPOFILTRO",gx.O.AV18TransacaoSaidaTipoFiltro)},c2v:function(){gx.O.AV18TransacaoSaidaTipoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOSAIDATIPOFILTRO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACODIGO",gxz:"Z5695TransacaoSaidaCodigo",gxold:"O5695TransacaoSaidaCodigo",gxvar:"A5695TransacaoSaidaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5695TransacaoSaidaCodigo=Value},v2z:function(Value){gx.O.Z5695TransacaoSaidaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACODIGO",row || gx.fn.currentGridRowImpl(28),gx.O.A5695TransacaoSaidaCodigo,0)},c2v:function(){gx.O.A5695TransacaoSaidaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDACODIGO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDADESCRICAO",gxz:"Z5568TransacaoSaidaDescricao",gxold:"O5568TransacaoSaidaDescricao",gxvar:"A5568TransacaoSaidaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5568TransacaoSaidaDescricao=Value},v2z:function(Value){gx.O.Z5568TransacaoSaidaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDADESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A5568TransacaoSaidaDescricao,0)},c2v:function(){gx.O.A5568TransacaoSaidaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDADESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDATIPO",gxz:"Z5569TransacaoSaidaTipo",gxold:"O5569TransacaoSaidaTipo",gxvar:"A5569TransacaoSaidaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5569TransacaoSaidaTipo=Value},v2z:function(Value){gx.O.Z5569TransacaoSaidaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOSAIDATIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A5569TransacaoSaidaTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5569TransacaoSaidaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDATIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACFOPDENESTADOCOD",gxz:"Z5578TransacaoSaidaCFOPDenEstadoCod",gxold:"O5578TransacaoSaidaCFOPDenEstadoCod",gxvar:"A5578TransacaoSaidaCFOPDenEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5578TransacaoSaidaCFOPDenEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5578TransacaoSaidaCFOPDenEstadoCod=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACFOPDENESTADOCOD",row || gx.fn.currentGridRowImpl(28),gx.O.A5578TransacaoSaidaCFOPDenEstadoCod,0)},c2v:function(){gx.O.A5578TransacaoSaidaCFOPDenEstadoCod=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSACAOSAIDACFOPDENESTADOCOD",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACFOPFORESTADOCOD",gxz:"Z5580TransacaoSaidaCFOPForEstadoCod",gxold:"O5580TransacaoSaidaCFOPForEstadoCod",gxvar:"A5580TransacaoSaidaCFOPForEstadoCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5580TransacaoSaidaCFOPForEstadoCod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5580TransacaoSaidaCFOPForEstadoCod=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACFOPFORESTADOCOD",row || gx.fn.currentGridRowImpl(28),gx.O.A5580TransacaoSaidaCFOPForEstadoCod,0)},c2v:function(){gx.O.A5580TransacaoSaidaCFOPForEstadoCod=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TRANSACAOSAIDACFOPFORESTADOCOD",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACSTCODIGO",gxz:"Z5597TransacaoSaidaCSTCodigo",gxold:"O5597TransacaoSaidaCSTCodigo",gxvar:"A5597TransacaoSaidaCSTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5597TransacaoSaidaCSTCodigo=Value},v2z:function(Value){gx.O.Z5597TransacaoSaidaCSTCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACSTCODIGO",row || gx.fn.currentGridRowImpl(28),gx.O.A5597TransacaoSaidaCSTCodigo,0)},c2v:function(){gx.O.A5597TransacaoSaidaCSTCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDACSTCODIGO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPATIVA",gxz:"ZV20bmpAtiva",gxold:"OV20bmpAtiva",gxvar:"AV20bmpAtiva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpAtiva=Value},v2z:function(Value){gx.O.ZV20bmpAtiva=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPATIVA",row || gx.fn.currentGridRowImpl(28),gx.O.AV20bmpAtiva,gx.O.AV29Bmpativa_GXI)},c2v:function(){gx.O.AV29Bmpativa_GXI=this.val_GXI();gx.O.AV20bmpAtiva=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPATIVA",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPATIVA_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV29Bmpativa_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDACSTTIPO",gxz:"Z5595TransacaoSaidaCSTTipo",gxold:"O5595TransacaoSaidaCSTTipo",gxvar:"A5595TransacaoSaidaCSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5595TransacaoSaidaCSTTipo=Value},v2z:function(Value){gx.O.Z5595TransacaoSaidaCSTTipo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDACSTTIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A5595TransacaoSaidaCSTTipo,0)},c2v:function(){gx.O.A5595TransacaoSaidaCSTTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDACSTTIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOSAIDAATIVO",gxz:"Z5577TransacaoSaidaAtivo",gxold:"O5577TransacaoSaidaAtivo",gxvar:"A5577TransacaoSaidaAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5577TransacaoSaidaAtivo=Value},v2z:function(Value){gx.O.Z5577TransacaoSaidaAtivo=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOSAIDAATIVO",row || gx.fn.currentGridRowImpl(28),gx.O.A5577TransacaoSaidaAtivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5577TransacaoSaidaAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOSAIDAATIVO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLENAV",grid:0};
   GXValidFnc[46]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[48]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[50]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[52]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[54]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV25Pagina",gxold:"OV25Pagina",gxvar:"AV25Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV25Pagina)},c2v:function(){gx.O.AV25Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV26PaginaAux",gxold:"OV26PaginaAux",gxvar:"AV26PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV26PaginaAux,0)},c2v:function(){gx.O.AV26PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16TransacaoSaidaCodigoFiltro = "" ;
   this.ZV16TransacaoSaidaCodigoFiltro = "" ;
   this.OV16TransacaoSaidaCodigoFiltro = "" ;
   this.AV17TransacaoSaidaDescricaoFiltro = "" ;
   this.ZV17TransacaoSaidaDescricaoFiltro = "" ;
   this.OV17TransacaoSaidaDescricaoFiltro = "" ;
   this.AV18TransacaoSaidaTipoFiltro = "" ;
   this.ZV18TransacaoSaidaTipoFiltro = "" ;
   this.OV18TransacaoSaidaTipoFiltro = "" ;
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
   this.ZV20bmpAtiva = "" ;
   this.OV20bmpAtiva = "" ;
   this.Z5595TransacaoSaidaCSTTipo = "" ;
   this.O5595TransacaoSaidaCSTTipo = "" ;
   this.Z5577TransacaoSaidaAtivo = "" ;
   this.O5577TransacaoSaidaAtivo = "" ;
   this.AV25Pagina = 0 ;
   this.ZV25Pagina = 0 ;
   this.OV25Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.ZV26PaginaAux = 0 ;
   this.OV26PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16TransacaoSaidaCodigoFiltro = "" ;
   this.AV17TransacaoSaidaDescricaoFiltro = "" ;
   this.AV18TransacaoSaidaTipoFiltro = "" ;
   this.AV25Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV23TransacaoSaidaSnInativa = "" ;
   this.AV19TransacaoSaidaCodigo = "" ;
   this.A5694TransacaoSaidaEmpresaId = "" ;
   this.A5695TransacaoSaidaCodigo = "" ;
   this.A5568TransacaoSaidaDescricao = "" ;
   this.A5569TransacaoSaidaTipo = "" ;
   this.A5578TransacaoSaidaCFOPDenEstadoCod = 0 ;
   this.A5580TransacaoSaidaCFOPForEstadoCod = 0 ;
   this.A5597TransacaoSaidaCSTCodigo = "" ;
   this.AV20bmpAtiva = "" ;
   this.A5595TransacaoSaidaCSTTipo = "" ;
   this.A5577TransacaoSaidaAtivo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17wi2_client": ["ENTER", true] ,"e11wi2_client": ["'GXM_FIRST'", true] ,"e12wi2_client": ["'GXM_PREVIOUS'", true] ,"e13wi2_client": ["'GXM_NEXT'", true] ,"e14wi2_client": ["'GXM_LAST'", true] ,"e15wi2_client": ["'PROCURAR'", true] ,"e20wi2_client": ["'ATUALIZAPAGINA'", true] ,"e21wi1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV17TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV18TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23TransacaoSaidaSnInativa',fld:'vTRANSACAOSAIDASNINATIVA',hsh:true},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TRANSACAOSAIDACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOSAIDACODIGO","Title")',ctrl:'TRANSACAOSAIDACODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TRANSACAOSAIDADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOSAIDADESCRICAO","Title")',ctrl:'TRANSACAOSAIDADESCRICAO',prop:'Title'},{ctrl:'TRANSACAOSAIDACFOPDENESTADOCOD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOSAIDACFOPDENESTADOCOD","Title")',ctrl:'TRANSACAOSAIDACFOPDENESTADOCOD',prop:'Title'},{ctrl:'TRANSACAOSAIDACFOPFORESTADOCOD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOSAIDACFOPFORESTADOCOD","Title")',ctrl:'TRANSACAOSAIDACFOPFORESTADOCOD',prop:'Title'},{ctrl:'TRANSACAOSAIDATIPO'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV24NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5695TransacaoSaidaCodigo',fld:'TRANSACAOSAIDACODIGO'}],[{av:'AV19TransacaoSaidaCodigo',fld:'vTRANSACAOSAIDACODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV17TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV18TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23TransacaoSaidaSnInativa',fld:'vTRANSACAOSAIDASNINATIVA',hsh:true},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV17TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV18TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23TransacaoSaidaSnInativa',fld:'vTRANSACAOSAIDASNINATIVA',hsh:true},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV17TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV18TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23TransacaoSaidaSnInativa',fld:'vTRANSACAOSAIDASNINATIVA',hsh:true},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV17TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV18TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23TransacaoSaidaSnInativa',fld:'vTRANSACAOSAIDASNINATIVA',hsh:true},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'}],[{av:'AV20bmpAtiva',fld:'vBMPATIVA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV17TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV18TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23TransacaoSaidaSnInativa',fld:'vTRANSACAOSAIDASNINATIVA',hsh:true},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV25Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TransacaoSaidaCodigoFiltro',fld:'vTRANSACAOSAIDACODIGOFILTRO'},{av:'AV17TransacaoSaidaDescricaoFiltro',fld:'vTRANSACAOSAIDADESCRICAOFILTRO'},{av:'AV18TransacaoSaidaTipoFiltro',fld:'vTRANSACAOSAIDATIPOFILTRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23TransacaoSaidaSnInativa',fld:'vTRANSACAOSAIDASNINATIVA',hsh:true},{av:'A5577TransacaoSaidaAtivo',fld:'TRANSACAOSAIDAATIVO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV23TransacaoSaidaSnInativa", "vTRANSACAOSAIDASNINATIVA", 0, "char");
   this.setVCMap("AV19TransacaoSaidaCodigo", "vTRANSACAOSAIDACODIGO", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV23TransacaoSaidaSnInativa", "vTRANSACAOSAIDASNINATIVA", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV23TransacaoSaidaSnInativa"});
   GridContainer.addRefreshingVar({rfrVar:"A5577TransacaoSaidaAtivo", rfrProp:"Value", gxAttId:"5577"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatransacaosaida());
