/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:0.60
*/
gx.evt.autoSkip = false;
gx.define('hetiqueta', false, function () {
   this.ServerClass =  "hetiqueta" ;
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
      this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11232_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12232_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e21232_client=function()
   {
      this.executeServerEvent("'ETIQUETALINHA'", true, arguments[0], false, false);
   };
   this.e22232_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e23232_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16232_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13232_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14232_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15232_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e24232_client=function()
   {
      this.executeServerEvent("'FONTE'", true, arguments[0], false, false);
   };
   this.e17232_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e25232_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e26232_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e27232_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28232_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,21,24,26,30,31,32,33,34,35,36,37,38,39,40,41,48,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hetiqueta",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(241,30,"ETIQUETACODIGO","","","EtiquetaCodigo","int",0,"px",4,4,"right",null,[],241,"EtiquetaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(235,31,"ETIQUETADESCRICAO","","","EtiquetaDescricao","svchar",0,"px",35,35,"left",null,[],235,"EtiquetaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(743,32,"ETIQUETATIPOIMPRESSAO","","EtiquetaTipoImpressao","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(100,33,"ETIQUETAQTDCOLLINHA","","","EtiquetaQtdColLinha","int",0,"px",4,4,"right",null,[],100,"EtiquetaQtdColLinha",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(98,34,"ETIQUETAQTDLINHASPAG","","","EtiquetaQtdLinhasPag","int",0,"px",4,4,"right",null,[],98,"EtiquetaQtdLinhasPag",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmplin","vBMPLIN",35,0,"px",17,"px","e21232_client","","Linhas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpfon","vBMPFON",36,0,"px",17,"px","e24232_client","","Fonte","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",37,0,"px",17,"px","e22232_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",38,0,"px",17,"px","e25232_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",39,0,"px",17,"px","e23232_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(240,40,"EMPRESAETIQUETAEMPRESAID","Empresa Etiqueta Empresa Id","","EmpresaEtiquetaEmpresaId","char",0,"px",10,10,"left",null,[],240,"EmpresaEtiquetaEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(237,41,"ETIQUETATAMFONTE","Tamanho Fonte","EtiquetaTamFonte","int",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETACODIGO",gxz:"Z241EtiquetaCodigo",gxold:"O241EtiquetaCodigo",gxvar:"A241EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A241EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z241EtiquetaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETACODIGO",row || gx.fn.currentGridRowImpl(29),gx.O.A241EtiquetaCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A241EtiquetaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETACODIGO",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETADESCRICAO",gxz:"Z235EtiquetaDescricao",gxold:"O235EtiquetaDescricao",gxvar:"A235EtiquetaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A235EtiquetaDescricao=Value},v2z:function(Value){gx.O.Z235EtiquetaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ETIQUETADESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A235EtiquetaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A235EtiquetaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETADESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATIPOIMPRESSAO",gxz:"Z743EtiquetaTipoImpressao",gxold:"O743EtiquetaTipoImpressao",gxvar:"A743EtiquetaTipoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A743EtiquetaTipoImpressao=Value},v2z:function(Value){gx.O.Z743EtiquetaTipoImpressao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("ETIQUETATIPOIMPRESSAO",row || gx.fn.currentGridRowImpl(29),gx.O.A743EtiquetaTipoImpressao);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A743EtiquetaTipoImpressao=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETATIPOIMPRESSAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETAQTDCOLLINHA",gxz:"Z100EtiquetaQtdColLinha",gxold:"O100EtiquetaQtdColLinha",gxvar:"A100EtiquetaQtdColLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A100EtiquetaQtdColLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.Z100EtiquetaQtdColLinha=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETAQTDCOLLINHA",row || gx.fn.currentGridRowImpl(29),gx.O.A100EtiquetaQtdColLinha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A100EtiquetaQtdColLinha=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETAQTDCOLLINHA",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETAQTDLINHASPAG",gxz:"Z98EtiquetaQtdLinhasPag",gxold:"O98EtiquetaQtdLinhasPag",gxvar:"A98EtiquetaQtdLinhasPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A98EtiquetaQtdLinhasPag=gx.num.intval(Value)},v2z:function(Value){gx.O.Z98EtiquetaQtdLinhasPag=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETAQTDLINHASPAG",row || gx.fn.currentGridRowImpl(29),gx.O.A98EtiquetaQtdLinhasPag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A98EtiquetaQtdLinhasPag=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETAQTDLINHASPAG",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLIN",gxz:"ZV25BmpLin",gxold:"OV25BmpLin",gxvar:"AV25BmpLin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25BmpLin=Value},v2z:function(Value){gx.O.ZV25BmpLin=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLIN",row || gx.fn.currentGridRowImpl(29),gx.O.AV25BmpLin,gx.O.AV39Bmplin_GXI)},c2v:function(){gx.O.AV39Bmplin_GXI=this.val_GXI();gx.O.AV25BmpLin=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLIN",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLIN_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV39Bmplin_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFON",gxz:"ZV29bmpFon",gxold:"OV29bmpFon",gxvar:"AV29bmpFon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpFon=Value},v2z:function(Value){gx.O.ZV29bmpFon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPFON",row || gx.fn.currentGridRowImpl(29),gx.O.AV29bmpFon,gx.O.AV38Bmpfon_GXI)},c2v:function(){gx.O.AV38Bmpfon_GXI=this.val_GXI();gx.O.AV29bmpFon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPFON",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPFON_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV38Bmpfon_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(29),gx.O.AV7bmpAlt,gx.O.AV35Bmpalt_GXI)},c2v:function(){gx.O.AV35Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV35Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(29),gx.O.AV8bmpExc,gx.O.AV36Bmpexc_GXI)},c2v:function(){gx.O.AV36Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV36Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(29),gx.O.AV16bmpCon,gx.O.AV37Bmpcon_GXI)},c2v:function(){gx.O.AV37Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(29))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(29))}, gxvar_GXI:'AV37Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAETIQUETAEMPRESAID",gxz:"Z240EmpresaEtiquetaEmpresaId",gxold:"O240EmpresaEtiquetaEmpresaId",gxvar:"A240EmpresaEtiquetaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A240EmpresaEtiquetaEmpresaId=Value},v2z:function(Value){gx.O.Z240EmpresaEtiquetaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAETIQUETAEMPRESAID",row || gx.fn.currentGridRowImpl(29),gx.O.A240EmpresaEtiquetaEmpresaId,0)},c2v:function(){gx.O.A240EmpresaEtiquetaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAETIQUETAEMPRESAID",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETATAMFONTE",gxz:"Z237EtiquetaTamFonte",gxold:"O237EtiquetaTamFonte",gxvar:"A237EtiquetaTamFonte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A237EtiquetaTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.Z237EtiquetaTamFonte=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("ETIQUETATAMFONTE",row || gx.fn.currentGridRowImpl(29),gx.O.A237EtiquetaTamFonte);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A237EtiquetaTamFonte=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETATAMFONTE",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.Z241EtiquetaCodigo = 0 ;
   this.O241EtiquetaCodigo = 0 ;
   this.Z235EtiquetaDescricao = "" ;
   this.O235EtiquetaDescricao = "" ;
   this.Z743EtiquetaTipoImpressao = "" ;
   this.O743EtiquetaTipoImpressao = "" ;
   this.Z100EtiquetaQtdColLinha = 0 ;
   this.O100EtiquetaQtdColLinha = 0 ;
   this.Z98EtiquetaQtdLinhasPag = 0 ;
   this.O98EtiquetaQtdLinhasPag = 0 ;
   this.ZV25BmpLin = "" ;
   this.OV25BmpLin = "" ;
   this.ZV29bmpFon = "" ;
   this.OV29bmpFon = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z240EmpresaEtiquetaEmpresaId = "" ;
   this.O240EmpresaEtiquetaEmpresaId = "" ;
   this.Z237EtiquetaTamFonte = 0 ;
   this.O237EtiquetaTamFonte = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV6PaginaAux = 0 ;
   this.A241EtiquetaCodigo = 0 ;
   this.A235EtiquetaDescricao = "" ;
   this.A743EtiquetaTipoImpressao = "" ;
   this.A100EtiquetaQtdColLinha = 0 ;
   this.A98EtiquetaQtdLinhasPag = 0 ;
   this.AV25BmpLin = "" ;
   this.AV29bmpFon = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A237EtiquetaTamFonte = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV30SnRecuperaFiltro = "" ;
   this.Events = {"e11232_client": ["'ANTERIOR'", true] ,"e12232_client": ["'PROXIMO'", true] ,"e21232_client": ["'ETIQUETALINHA'", true] ,"e22232_client": ["'ALTERAR'", true] ,"e23232_client": ["'CONSULTAR'", true] ,"e16232_client": ["VPAGINA.CLICK", true] ,"e13232_client": ["'NOVO'", true] ,"e14232_client": ["'FECHAR'", true] ,"e15232_client": ["'PROCURAR'", true] ,"e24232_client": ["'FONTE'", true] ,"e17232_client": ["'COPIAR'", true] ,"e25232_client": ["'EXCLUIR'", true] ,"e26232_client": ["'ATUALIZAPAGINA'", true] ,"e27232_client": ["ENTER", true] ,"e28232_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'ETIQUETACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETACODIGO","Title")',ctrl:'ETIQUETACODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'ETIQUETADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETADESCRICAO","Title")',ctrl:'ETIQUETADESCRICAO',prop:'Title'},{ctrl:'ETIQUETATIPOIMPRESSAO'},{ctrl:'ETIQUETAQTDCOLLINHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETAQTDCOLLINHA","Title")',ctrl:'ETIQUETAQTDCOLLINHA',prop:'Title'},{ctrl:'ETIQUETAQTDLINHASPAG',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETAQTDLINHASPAG","Title")',ctrl:'ETIQUETAQTDLINHASPAG',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29bmpFon',fld:'vBMPFON'},{av:'gx.fn.getCtrlProperty("vBMPFON","Tooltiptext")',ctrl:'vBMPFON',prop:'Tooltiptext'},{av:'AV25BmpLin',fld:'vBMPLIN'},{av:'gx.fn.getCtrlProperty("vBMPLIN","Tooltiptext")',ctrl:'vBMPLIN',prop:'Tooltiptext'}]];
   this.EvtParms["'ETIQUETALINHA'"] = [[{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A237EtiquetaTamFonte',fld:'ETIQUETATAMFONTE'}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FONTE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'}],[]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A240EmpresaEtiquetaEmpresaId',fld:'EMPRESAETIQUETAEMPRESAID'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hetiqueta());
