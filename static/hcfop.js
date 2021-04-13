/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:8.45
*/
gx.evt.autoSkip = false;
gx.define('hcfop', false, function () {
   this.ServerClass =  "hcfop" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV39SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A3446CFOPSnSemItemEstoque=gx.fn.getControlValue("CFOPSNSEMITEMESTOQUE") ;
      this.A4285CFOPSNSubstituicao=gx.fn.getControlValue("CFOPSNSUBSTITUICAO") ;
   };
   this.e11ml2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ml2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17ml2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ml2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14ml2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ml2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16ml2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20ml2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21ml2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22ml2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24ml2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25ml2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26ml2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,33,36,39,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,67,68,69,70,71,78];
   this.GXLastCtrlId =78;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcfop",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3430,59,"CFOPCODIGO","","","CFOPCodigo","int",0,"px",4,4,"right",null,[],3430,"CFOPCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Descricao",60,"vDESCRICAO","","","Descricao","char",0,"px",50,50,"left",null,[],"Descricao","Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tipo",61,"vTIPO","","","Tipo","svchar",0,"px",45,45,"left",null,[],"Tipo","Tipo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(3445,62,"CFOPTIPO","","CFOPTipo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpsemitemest","vBMPSEMITEMEST",63,0,"px",17,"px",null,"","Nota sem item","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsubtrib","vBMPSUBTRIB",64,0,"px",17,"px",null,"","ST","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpvlrnota","vBMPVLRNOTA",65,0,"px",17,"px",null,"","Exige valor saída","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",66,0,"px",17,"px","e20ml2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",67,0,"px",17,"px","e21ml2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",68,0,"px",17,"px","e22ml2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3436,69,"CFOPDESCRICAO","Descrição CFOP","","CFOPDescricao","svchar",0,"px",340,80,"left",null,[],3436,"CFOPDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3444,70,"CFOPTIPOENTSAI","Entrada/Saída","","CFOPTipoEntSai","char",0,"px",2,2,"left",null,[],3444,"CFOPTipoEntSai",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5493,71,"CFOPSNEXIGEVALORNOTA","Exige valor da nota de saída","","CFOPSnExigeValorNota","char",0,"px",1,1,"left",null,[],5493,"CFOPSnExigeValorNota",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCFOPCODIGO",gxz:"ZV27CFOPCodigo",gxold:"OV27CFOPCodigo",gxvar:"AV27CFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27CFOPCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOPCODIGO",gx.O.AV27CFOPCodigo,0)},c2v:function(){gx.O.AV27CFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:340,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCFOPDESCRICAO",gxz:"ZV28CFOPDescricao",gxold:"OV28CFOPDescricao",gxvar:"AV28CFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28CFOPDescricao=Value},v2z:function(Value){gx.O.ZV28CFOPDescricao=Value},v2c:function(){gx.fn.setControlValue("vCFOPDESCRICAO",gx.O.AV28CFOPDescricao,0)},c2v:function(){gx.O.AV28CFOPDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCFOPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCFOPTIPOENTSAI",gxz:"ZV29CFOPTipoEntSai",gxold:"OV29CFOPTipoEntSai",gxvar:"AV29CFOPTipoEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29CFOPTipoEntSai=Value},v2z:function(Value){gx.O.ZV29CFOPTipoEntSai=Value},v2c:function(){gx.fn.setComboBoxValue("vCFOPTIPOENTSAI",gx.O.AV29CFOPTipoEntSai)},c2v:function(){gx.O.AV29CFOPTipoEntSai=this.val()},val:function(){return gx.fn.getControlValue("vCFOPTIPOENTSAI")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCFOPENTRADACODIGO",gxz:"ZV38CFOPEntradaCodigo",gxold:"OV38CFOPEntradaCodigo",gxvar:"AV38CFOPEntradaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38CFOPEntradaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38CFOPEntradaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOPENTRADACODIGO",gx.O.AV38CFOPEntradaCodigo,0)},c2v:function(){gx.O.AV38CFOPEntradaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPENTRADACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TABLE6",grid:0};
   GXValidFnc[39]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"IMAGE1",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CFOPCODIGO",gxz:"Z3430CFOPCodigo",gxold:"O3430CFOPCodigo",gxvar:"A3430CFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3430CFOPCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3430CFOPCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CFOPCODIGO",row || gx.fn.currentGridRowImpl(58),gx.O.A3430CFOPCodigo,0)},c2v:function(){gx.O.A3430CFOPCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CFOPCODIGO",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV32Descricao",gxold:"OV32Descricao",gxvar:"AV32Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32Descricao=Value},v2z:function(Value){gx.O.ZV32Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.AV32Descricao,0)},c2v:function(){gx.O.AV32Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:0,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV31Tipo",gxold:"OV31Tipo",gxvar:"AV31Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31Tipo=Value},v2z:function(Value){gx.O.ZV31Tipo=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPO",row || gx.fn.currentGridRowImpl(58),gx.O.AV31Tipo,0)},c2v:function(){gx.O.AV31Tipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CFOPTIPO",gxz:"Z3445CFOPTipo",gxold:"O3445CFOPTipo",gxvar:"A3445CFOPTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3445CFOPTipo=Value},v2z:function(Value){gx.O.Z3445CFOPTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CFOPTIPO",row || gx.fn.currentGridRowImpl(58),gx.O.A3445CFOPTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3445CFOPTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("CFOPTIPO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSEMITEMEST",gxz:"ZV33bmpSemItemEst",gxold:"OV33bmpSemItemEst",gxvar:"AV33bmpSemItemEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpSemItemEst=Value},v2z:function(Value){gx.O.ZV33bmpSemItemEst=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSEMITEMEST",row || gx.fn.currentGridRowImpl(58),gx.O.AV33bmpSemItemEst,gx.O.AV48Bmpsemitemest_GXI)},c2v:function(){gx.O.AV48Bmpsemitemest_GXI=this.val_GXI();gx.O.AV33bmpSemItemEst=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSEMITEMEST",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSEMITEMEST_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV48Bmpsemitemest_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSUBTRIB",gxz:"ZV36bmpSubTrib",gxold:"OV36bmpSubTrib",gxvar:"AV36bmpSubTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpSubTrib=Value},v2z:function(Value){gx.O.ZV36bmpSubTrib=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSUBTRIB",row || gx.fn.currentGridRowImpl(58),gx.O.AV36bmpSubTrib,gx.O.AV49Bmpsubtrib_GXI)},c2v:function(){gx.O.AV49Bmpsubtrib_GXI=this.val_GXI();gx.O.AV36bmpSubTrib=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSUBTRIB",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSUBTRIB_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV49Bmpsubtrib_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPVLRNOTA",gxz:"ZV37bmpVlrNota",gxold:"OV37bmpVlrNota",gxvar:"AV37bmpVlrNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV37bmpVlrNota=Value},v2z:function(Value){gx.O.ZV37bmpVlrNota=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPVLRNOTA",row || gx.fn.currentGridRowImpl(58),gx.O.AV37bmpVlrNota,gx.O.AV50Bmpvlrnota_GXI)},c2v:function(){gx.O.AV50Bmpvlrnota_GXI=this.val_GXI();gx.O.AV37bmpVlrNota=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPVLRNOTA",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPVLRNOTA_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV50Bmpvlrnota_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"svchar",len:340,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CFOPDESCRICAO",gxz:"Z3436CFOPDescricao",gxold:"O3436CFOPDescricao",gxvar:"A3436CFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3436CFOPDescricao=Value},v2z:function(Value){gx.O.Z3436CFOPDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CFOPDESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.A3436CFOPDescricao,0)},c2v:function(){gx.O.A3436CFOPDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CFOPDESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CFOPTIPOENTSAI",gxz:"Z3444CFOPTipoEntSai",gxold:"O3444CFOPTipoEntSai",gxvar:"A3444CFOPTipoEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3444CFOPTipoEntSai=Value},v2z:function(Value){gx.O.Z3444CFOPTipoEntSai=Value},v2c:function(row){gx.fn.setGridControlValue("CFOPTIPOENTSAI",row || gx.fn.currentGridRowImpl(58),gx.O.A3444CFOPTipoEntSai,0)},c2v:function(){gx.O.A3444CFOPTipoEntSai=this.val()},val:function(row){return gx.fn.getGridControlValue("CFOPTIPOENTSAI",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CFOPSNEXIGEVALORNOTA",gxz:"Z5493CFOPSnExigeValorNota",gxold:"O5493CFOPSnExigeValorNota",gxvar:"A5493CFOPSnExigeValorNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5493CFOPSnExigeValorNota=Value},v2z:function(Value){gx.O.Z5493CFOPSnExigeValorNota=Value},v2c:function(row){gx.fn.setGridControlValue("CFOPSNEXIGEVALORNOTA",row || gx.fn.currentGridRowImpl(58),gx.O.A5493CFOPSnExigeValorNota,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5493CFOPSnExigeValorNota=this.val()},val:function(row){return gx.fn.getGridControlValue("CFOPSNEXIGEVALORNOTA",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27CFOPCodigo = 0 ;
   this.ZV27CFOPCodigo = 0 ;
   this.OV27CFOPCodigo = 0 ;
   this.AV28CFOPDescricao = "" ;
   this.ZV28CFOPDescricao = "" ;
   this.OV28CFOPDescricao = "" ;
   this.AV29CFOPTipoEntSai = "" ;
   this.ZV29CFOPTipoEntSai = "" ;
   this.OV29CFOPTipoEntSai = "" ;
   this.AV38CFOPEntradaCodigo = 0 ;
   this.ZV38CFOPEntradaCodigo = 0 ;
   this.OV38CFOPEntradaCodigo = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3430CFOPCodigo = 0 ;
   this.O3430CFOPCodigo = 0 ;
   this.ZV32Descricao = "" ;
   this.OV32Descricao = "" ;
   this.ZV31Tipo = "" ;
   this.OV31Tipo = "" ;
   this.Z3445CFOPTipo = "" ;
   this.O3445CFOPTipo = "" ;
   this.ZV33bmpSemItemEst = "" ;
   this.OV33bmpSemItemEst = "" ;
   this.ZV36bmpSubTrib = "" ;
   this.OV36bmpSubTrib = "" ;
   this.ZV37bmpVlrNota = "" ;
   this.OV37bmpVlrNota = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3436CFOPDescricao = "" ;
   this.O3436CFOPDescricao = "" ;
   this.Z3444CFOPTipoEntSai = "" ;
   this.O3444CFOPTipoEntSai = "" ;
   this.Z5493CFOPSnExigeValorNota = "" ;
   this.O5493CFOPSnExigeValorNota = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27CFOPCodigo = 0 ;
   this.AV28CFOPDescricao = "" ;
   this.AV29CFOPTipoEntSai = "" ;
   this.AV38CFOPEntradaCodigo = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3446CFOPSnSemItemEstoque = "" ;
   this.A4285CFOPSNSubstituicao = "" ;
   this.A8553CFOPEntradaCodigo = 0 ;
   this.A3430CFOPCodigo = 0 ;
   this.AV32Descricao = "" ;
   this.AV31Tipo = "" ;
   this.A3445CFOPTipo = "" ;
   this.AV33bmpSemItemEst = "" ;
   this.AV36bmpSubTrib = "" ;
   this.AV37bmpVlrNota = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3436CFOPDescricao = "" ;
   this.A3444CFOPTipoEntSai = "" ;
   this.A5493CFOPSnExigeValorNota = "" ;
   this.AV39SnRecuperaFiltro = "" ;
   this.AV42Pgmname = "" ;
   this.Events = {"e11ml2_client": ["'ANTERIOR'", true] ,"e12ml2_client": ["'PROXIMO'", true] ,"e17ml2_client": ["VPAGINA.CLICK", true] ,"e13ml2_client": ["'NOVO'", true] ,"e14ml2_client": ["'FECHAR'", true] ,"e15ml2_client": ["'IMPRIMIR'", true] ,"e16ml2_client": ["'PROCURAR'", true] ,"e20ml2_client": ["'ALTERAR'", true] ,"e21ml2_client": ["'EXCLUIR'", true] ,"e22ml2_client": ["'CONSULTAR'", true] ,"e24ml2_client": ["'ATUALIZAPAGINA'", true] ,"e25ml2_client": ["ENTER", true] ,"e26ml2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV38CFOPEntradaCodigo',fld:'vCFOPENTRADACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'A3446CFOPSnSemItemEstoque',fld:'CFOPSNSEMITEMESTOQUE'},{av:'A4285CFOPSNSubstituicao',fld:'CFOPSNSUBSTITUICAO'},{av:'A5493CFOPSnExigeValorNota',fld:'CFOPSNEXIGEVALORNOTA'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV38CFOPEntradaCodigo',fld:'vCFOPENTRADACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'A3446CFOPSnSemItemEstoque',fld:'CFOPSNSEMITEMESTOQUE'},{av:'A4285CFOPSNSubstituicao',fld:'CFOPSNSUBSTITUICAO'},{av:'A5493CFOPSnExigeValorNota',fld:'CFOPSNEXIGEVALORNOTA'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'}],[{ctrl:'CFOPCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CFOPCODIGO","Title")',ctrl:'CFOPCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCRICAO","Title")',ctrl:'vDESCRICAO',prop:'Title'},{ctrl:'vTIPO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vTIPO","Title")',ctrl:'vTIPO',prop:'Title'},{ctrl:'CFOPTIPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV38CFOPEntradaCodigo',fld:'vCFOPENTRADACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'A3446CFOPSnSemItemEstoque',fld:'CFOPSNSEMITEMESTOQUE'},{av:'A4285CFOPSNSubstituicao',fld:'CFOPSNSUBSTITUICAO'},{av:'A5493CFOPSnExigeValorNota',fld:'CFOPSNEXIGEVALORNOTA'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV38CFOPEntradaCodigo',fld:'vCFOPENTRADACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'A3446CFOPSnSemItemEstoque',fld:'CFOPSNSEMITEMESTOQUE'},{av:'A4285CFOPSNSubstituicao',fld:'CFOPSNSUBSTITUICAO'},{av:'A5493CFOPSnExigeValorNota',fld:'CFOPSNEXIGEVALORNOTA'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV38CFOPEntradaCodigo',fld:'vCFOPENTRADACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'A3446CFOPSnSemItemEstoque',fld:'CFOPSNSEMITEMESTOQUE'},{av:'A4285CFOPSNSubstituicao',fld:'CFOPSNSUBSTITUICAO'},{av:'A5493CFOPSnExigeValorNota',fld:'CFOPSNEXIGEVALORNOTA'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV43Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV47Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV38CFOPEntradaCodigo',fld:'vCFOPENTRADACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'A3446CFOPSnSemItemEstoque',fld:'CFOPSNSEMITEMESTOQUE'},{av:'A4285CFOPSNSubstituicao',fld:'CFOPSNSUBSTITUICAO'},{av:'A5493CFOPSnExigeValorNota',fld:'CFOPSNEXIGEVALORNOTA'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["LOAD"] = [[{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'A3446CFOPSnSemItemEstoque',fld:'CFOPSNSEMITEMESTOQUE'},{av:'A4285CFOPSNSubstituicao',fld:'CFOPSNSUBSTITUICAO'},{av:'A5493CFOPSnExigeValorNota',fld:'CFOPSNEXIGEVALORNOTA'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'}],[{av:'AV32Descricao',fld:'vDESCRICAO'},{av:'gx.fn.getCtrlProperty("vDESCRICAO","Tooltiptext")',ctrl:'vDESCRICAO',prop:'Tooltiptext'},{av:'AV33bmpSemItemEst',fld:'vBMPSEMITEMEST'},{av:'AV36bmpSubTrib',fld:'vBMPSUBTRIB'},{av:'AV37bmpVlrNota',fld:'vBMPVLRNOTA'},{av:'AV31Tipo',fld:'vTIPO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CFOPCodigo',fld:'vCFOPCODIGO'},{av:'AV28CFOPDescricao',fld:'vCFOPDESCRICAO'},{av:'AV29CFOPTipoEntSai',fld:'vCFOPTIPOENTSAI'},{av:'AV38CFOPEntradaCodigo',fld:'vCFOPENTRADACODIGO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'A3436CFOPDescricao',fld:'CFOPDESCRICAO'},{av:'A3446CFOPSnSemItemEstoque',fld:'CFOPSNSEMITEMESTOQUE'},{av:'A4285CFOPSNSubstituicao',fld:'CFOPSNSUBSTITUICAO'},{av:'A5493CFOPSnExigeValorNota',fld:'CFOPSNEXIGEVALORNOTA'},{av:'A3444CFOPTipoEntSai',fld:'CFOPTIPOENTSAI'}],[]];
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A3446CFOPSnSemItemEstoque", "CFOPSNSEMITEMESTOQUE", 0, "char");
   this.setVCMap("A4285CFOPSNSubstituicao", "CFOPSNSUBSTITUICAO", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A3446CFOPSnSemItemEstoque", "CFOPSNSEMITEMESTOQUE", 0, "char");
   this.setVCMap("A4285CFOPSNSubstituicao", "CFOPSNSUBSTITUICAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV39SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV42Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A3436CFOPDescricao", rfrProp:"Value", gxAttId:"3436"});
   GridContainer.addRefreshingVar({rfrVar:"A3446CFOPSnSemItemEstoque"});
   GridContainer.addRefreshingVar({rfrVar:"A4285CFOPSNSubstituicao"});
   GridContainer.addRefreshingVar({rfrVar:"A5493CFOPSnExigeValorNota", rfrProp:"Value", gxAttId:"5493"});
   GridContainer.addRefreshingVar({rfrVar:"A3444CFOPTipoEntSai", rfrProp:"Value", gxAttId:"3444"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcfop());
