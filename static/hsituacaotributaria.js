/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:13.19
*/
gx.evt.autoSkip = false;
gx.define('hsituacaotributaria', false, function () {
   this.ServerClass =  "hsituacaotributaria" ;
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
      this.AV43SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV47Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11qd2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12qd2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17qd2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13qd2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14qd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15qd2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16qd2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19qd2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20qd2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21qd2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22qd2_client=function()
   {
      this.executeServerEvent("'ICMSPRODUTO'", true, arguments[0], false, false);
   };
   this.e25qd2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26qd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27qd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,75];
   this.GXLastCtrlId =75;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsituacaotributaria",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3566,54,"SITUACAOTRIBUTARIACODIGO","","","SituacaoTributariaCodigo","char",0,"px",4,4,"left",null,[],3566,"SituacaoTributariaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Descricao",55,"vDESCRICAO","Descrição","","Descricao","svchar",0,"px",60,60,"left",null,[],"Descricao","Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3571,56,"SITUACAOTRIBUTARIADESCRICAO","","","SituacaoTributariaDescricao","svchar",0,"px",130,80,"left",null,[],3571,"SituacaoTributariaDescricao",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(3568,57,"SITUACAOTRIBUTARIATIPOTRIBUTAC","","SituacaoTributariaTipoTributac","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Sittribtip",58,"vSITTRIBTIP","Tributação","","SitTribTip","svchar",0,"px",30,30,"left",null,[],"Sittribtip","SitTribTip",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpsnreducao","vBMPSNREDUCAO",59,0,"px",17,"px",null,"","Redução","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsnsubstit","vBMPSNSUBSTIT",60,0,"px",17,"px",null,"","S.T.","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpicms","vBMPICMS",61,0,"px",17,"px","e22qd2_client","","ICMS","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",62,0,"px",17,"px","e19qd2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",63,0,"px",17,"px","e20qd2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",64,0,"px",17,"px","e21qd2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3569,65,"SITUACAOTRIBUTARIASNREDUCAO","Redução na Base de Cálculo ICMS?","","SituacaoTributariaSnReducao","char",0,"px",1,1,"left",null,[],3569,"SituacaoTributariaSnReducao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4337,66,"SITUACAOTRIBUTARIASTANTERIOR","Substituição Tributária cobrada anteriormente","","SituacaoTributariaSTAnterior","char",0,"px",1,1,"left",null,[],4337,"SituacaoTributariaSTAnterior",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3570,67,"SITUACAOTRIBUTARIASNSUBSTIT","Substituição Tributária?","","SituacaoTributariaSnSubstit","char",0,"px",1,1,"left",null,[],3570,"SituacaoTributariaSnSubstit",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3564,68,"SITUACAOTRIBUTARIATIPO","Tipo de Situação Tributária","SituacaoTributariaTipo","char",null,0,false,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAOTRIBUTARIATIPO",gxz:"ZV28SituacaoTributariaTipo",gxold:"OV28SituacaoTributariaTipo",gxvar:"AV28SituacaoTributariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28SituacaoTributariaTipo=Value},v2z:function(Value){gx.O.ZV28SituacaoTributariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOTRIBUTARIATIPO",gx.O.AV28SituacaoTributariaTipo)},c2v:function(){gx.O.AV28SituacaoTributariaTipo=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIATIPO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAOTRIBUTARIACODIGO",gxz:"ZV27SituacaoTributariaCodigo",gxold:"OV27SituacaoTributariaCodigo",gxvar:"AV27SituacaoTributariaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27SituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.ZV27SituacaoTributariaCodigo=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIACODIGO",gx.O.AV27SituacaoTributariaCodigo,0)},c2v:function(){gx.O.AV27SituacaoTributariaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIACODIGO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:130,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAOTRIBUTARIADESCRICAO",gxz:"ZV29SituacaoTributariaDescricao",gxold:"OV29SituacaoTributariaDescricao",gxvar:"AV29SituacaoTributariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29SituacaoTributariaDescricao=Value},v2z:function(Value){gx.O.ZV29SituacaoTributariaDescricao=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOTRIBUTARIADESCRICAO",gx.O.AV29SituacaoTributariaDescricao,0)},c2v:function(){gx.O.AV29SituacaoTributariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOTRIBUTARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"IMAGE1",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIACODIGO",gxz:"Z3566SituacaoTributariaCodigo",gxold:"O3566SituacaoTributariaCodigo",gxvar:"A3566SituacaoTributariaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3566SituacaoTributariaCodigo=Value},v2z:function(Value){gx.O.Z3566SituacaoTributariaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIACODIGO",row || gx.fn.currentGridRowImpl(53),gx.O.A3566SituacaoTributariaCodigo,0)},c2v:function(){gx.O.A3566SituacaoTributariaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIACODIGO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV42Descricao",gxold:"OV42Descricao",gxvar:"AV42Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV42Descricao=Value},v2z:function(Value){gx.O.ZV42Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(53),gx.O.AV42Descricao,0)},c2v:function(){gx.O.AV42Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:130,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIADESCRICAO",gxz:"Z3571SituacaoTributariaDescricao",gxold:"O3571SituacaoTributariaDescricao",gxvar:"A3571SituacaoTributariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3571SituacaoTributariaDescricao=Value},v2z:function(Value){gx.O.Z3571SituacaoTributariaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIADESCRICAO",row || gx.fn.currentGridRowImpl(53),gx.O.A3571SituacaoTributariaDescricao,0)},c2v:function(){gx.O.A3571SituacaoTributariaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIADESCRICAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIATIPOTRIBUTAC",gxz:"Z3568SituacaoTributariaTipoTributac",gxold:"O3568SituacaoTributariaTipoTributac",gxvar:"A3568SituacaoTributariaTipoTributac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3568SituacaoTributariaTipoTributac=Value},v2z:function(Value){gx.O.Z3568SituacaoTributariaTipoTributac=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SITUACAOTRIBUTARIATIPOTRIBUTAC",row || gx.fn.currentGridRowImpl(53),gx.O.A3568SituacaoTributariaTipoTributac)},c2v:function(){gx.O.A3568SituacaoTributariaTipoTributac=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIATIPOTRIBUTAC",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSITTRIBTIP",gxz:"ZV41SitTribTip",gxold:"OV41SitTribTip",gxvar:"AV41SitTribTip",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV41SitTribTip=Value},v2z:function(Value){gx.O.ZV41SitTribTip=Value},v2c:function(row){gx.fn.setGridControlValue("vSITTRIBTIP",row || gx.fn.currentGridRowImpl(53),gx.O.AV41SitTribTip,0)},c2v:function(){gx.O.AV41SitTribTip=this.val()},val:function(row){return gx.fn.getGridControlValue("vSITTRIBTIP",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNREDUCAO",gxz:"ZV36bmpSnReducao",gxold:"OV36bmpSnReducao",gxvar:"AV36bmpSnReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpSnReducao=Value},v2z:function(Value){gx.O.ZV36bmpSnReducao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNREDUCAO",row || gx.fn.currentGridRowImpl(53),gx.O.AV36bmpSnReducao,gx.O.AV53Bmpsnreducao_GXI)},c2v:function(){gx.O.AV53Bmpsnreducao_GXI=this.val_GXI();gx.O.AV36bmpSnReducao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNREDUCAO",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNREDUCAO_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV53Bmpsnreducao_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNSUBSTIT",gxz:"ZV37bmpSnSubstit",gxold:"OV37bmpSnSubstit",gxvar:"AV37bmpSnSubstit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV37bmpSnSubstit=Value},v2z:function(Value){gx.O.ZV37bmpSnSubstit=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNSUBSTIT",row || gx.fn.currentGridRowImpl(53),gx.O.AV37bmpSnSubstit,gx.O.AV54Bmpsnsubstit_GXI)},c2v:function(){gx.O.AV54Bmpsnsubstit_GXI=this.val_GXI();gx.O.AV37bmpSnSubstit=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNSUBSTIT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNSUBSTIT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV54Bmpsnsubstit_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPICMS",gxz:"ZV34bmpICMS",gxold:"OV34bmpICMS",gxvar:"AV34bmpICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpICMS=Value},v2z:function(Value){gx.O.ZV34bmpICMS=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPICMS",row || gx.fn.currentGridRowImpl(53),gx.O.AV34bmpICMS,gx.O.AV52Bmpicms_GXI)},c2v:function(){gx.O.AV52Bmpicms_GXI=this.val_GXI();gx.O.AV34bmpICMS=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPICMS",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPICMS_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV52Bmpicms_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV49Bmpalt_GXI)},c2v:function(){gx.O.AV49Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV49Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV50Bmpexc_GXI)},c2v:function(){gx.O.AV50Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV50Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV51Bmpcon_GXI)},c2v:function(){gx.O.AV51Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV51Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIASNREDUCAO",gxz:"Z3569SituacaoTributariaSnReducao",gxold:"O3569SituacaoTributariaSnReducao",gxvar:"A3569SituacaoTributariaSnReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3569SituacaoTributariaSnReducao=Value},v2z:function(Value){gx.O.Z3569SituacaoTributariaSnReducao=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIASNREDUCAO",row || gx.fn.currentGridRowImpl(53),gx.O.A3569SituacaoTributariaSnReducao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3569SituacaoTributariaSnReducao=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIASNREDUCAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIASTANTERIOR",gxz:"Z4337SituacaoTributariaSTAnterior",gxold:"O4337SituacaoTributariaSTAnterior",gxvar:"A4337SituacaoTributariaSTAnterior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4337SituacaoTributariaSTAnterior=Value},v2z:function(Value){gx.O.Z4337SituacaoTributariaSTAnterior=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIASTANTERIOR",row || gx.fn.currentGridRowImpl(53),gx.O.A4337SituacaoTributariaSTAnterior,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4337SituacaoTributariaSTAnterior=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIASTANTERIOR",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIASNSUBSTIT",gxz:"Z3570SituacaoTributariaSnSubstit",gxold:"O3570SituacaoTributariaSnSubstit",gxvar:"A3570SituacaoTributariaSnSubstit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3570SituacaoTributariaSnSubstit=Value},v2z:function(Value){gx.O.Z3570SituacaoTributariaSnSubstit=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOTRIBUTARIASNSUBSTIT",row || gx.fn.currentGridRowImpl(53),gx.O.A3570SituacaoTributariaSnSubstit,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3570SituacaoTributariaSnSubstit=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIASNSUBSTIT",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOTRIBUTARIATIPO",gxz:"Z3564SituacaoTributariaTipo",gxold:"O3564SituacaoTributariaTipo",gxvar:"A3564SituacaoTributariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3564SituacaoTributariaTipo=Value},v2z:function(Value){gx.O.Z3564SituacaoTributariaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SITUACAOTRIBUTARIATIPO",row || gx.fn.currentGridRowImpl(53),gx.O.A3564SituacaoTributariaTipo)},c2v:function(){gx.O.A3564SituacaoTributariaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOTRIBUTARIATIPO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28SituacaoTributariaTipo = "" ;
   this.ZV28SituacaoTributariaTipo = "" ;
   this.OV28SituacaoTributariaTipo = "" ;
   this.AV27SituacaoTributariaCodigo = "" ;
   this.ZV27SituacaoTributariaCodigo = "" ;
   this.OV27SituacaoTributariaCodigo = "" ;
   this.AV29SituacaoTributariaDescricao = "" ;
   this.ZV29SituacaoTributariaDescricao = "" ;
   this.OV29SituacaoTributariaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3566SituacaoTributariaCodigo = "" ;
   this.O3566SituacaoTributariaCodigo = "" ;
   this.ZV42Descricao = "" ;
   this.OV42Descricao = "" ;
   this.Z3571SituacaoTributariaDescricao = "" ;
   this.O3571SituacaoTributariaDescricao = "" ;
   this.Z3568SituacaoTributariaTipoTributac = "" ;
   this.O3568SituacaoTributariaTipoTributac = "" ;
   this.ZV41SitTribTip = "" ;
   this.OV41SitTribTip = "" ;
   this.ZV36bmpSnReducao = "" ;
   this.OV36bmpSnReducao = "" ;
   this.ZV37bmpSnSubstit = "" ;
   this.OV37bmpSnSubstit = "" ;
   this.ZV34bmpICMS = "" ;
   this.OV34bmpICMS = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3569SituacaoTributariaSnReducao = "" ;
   this.O3569SituacaoTributariaSnReducao = "" ;
   this.Z4337SituacaoTributariaSTAnterior = "" ;
   this.O4337SituacaoTributariaSTAnterior = "" ;
   this.Z3570SituacaoTributariaSnSubstit = "" ;
   this.O3570SituacaoTributariaSnSubstit = "" ;
   this.Z3564SituacaoTributariaTipo = "" ;
   this.O3564SituacaoTributariaTipo = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28SituacaoTributariaTipo = "" ;
   this.AV27SituacaoTributariaCodigo = "" ;
   this.AV29SituacaoTributariaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.AV42Descricao = "" ;
   this.A3571SituacaoTributariaDescricao = "" ;
   this.A3568SituacaoTributariaTipoTributac = "" ;
   this.AV41SitTribTip = "" ;
   this.AV36bmpSnReducao = "" ;
   this.AV37bmpSnSubstit = "" ;
   this.AV34bmpICMS = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3569SituacaoTributariaSnReducao = "" ;
   this.A4337SituacaoTributariaSTAnterior = "" ;
   this.A3570SituacaoTributariaSnSubstit = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.AV43SnRecuperaFiltro = "" ;
   this.AV47Pgmname = "" ;
   this.Events = {"e11qd2_client": ["'ANTERIOR'", true] ,"e12qd2_client": ["'PROXIMO'", true] ,"e17qd2_client": ["VPAGINA.CLICK", true] ,"e13qd2_client": ["'NOVO'", true] ,"e14qd2_client": ["'FECHAR'", true] ,"e15qd2_client": ["'IMPRIMIR'", true] ,"e16qd2_client": ["'PROCURAR'", true] ,"e19qd2_client": ["'ALTERAR'", true] ,"e20qd2_client": ["'EXCLUIR'", true] ,"e21qd2_client": ["'CONSULTAR'", true] ,"e22qd2_client": ["'ICMSPRODUTO'", true] ,"e25qd2_client": ["'ATUALIZAPAGINA'", true] ,"e26qd2_client": ["ENTER", true] ,"e27qd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpICMS',fld:'vBMPICMS'},{av:'gx.fn.getCtrlProperty("vBMPICMS","Tooltiptext")',ctrl:'vBMPICMS',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'}],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpICMS',fld:'vBMPICMS'},{av:'gx.fn.getCtrlProperty("vBMPICMS","Tooltiptext")',ctrl:'vBMPICMS',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpICMS',fld:'vBMPICMS'},{av:'gx.fn.getCtrlProperty("vBMPICMS","Tooltiptext")',ctrl:'vBMPICMS',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpICMS',fld:'vBMPICMS'},{av:'gx.fn.getCtrlProperty("vBMPICMS","Tooltiptext")',ctrl:'vBMPICMS',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV47Pgmname',fld:'vPGMNAME'}],[{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV47Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV48Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV44QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpICMS',fld:'vBMPICMS'},{av:'gx.fn.getCtrlProperty("vBMPICMS","Tooltiptext")',ctrl:'vBMPICMS',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV47Pgmname',fld:'vPGMNAME'}],[{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV47Pgmname',fld:'vPGMNAME'}],[{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV47Pgmname',fld:'vPGMNAME'}],[{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ICMSPRODUTO'"] = [[{av:'A3568SituacaoTributariaTipoTributac',fld:'SITUACAOTRIBUTARIATIPOTRIBUTAC'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'A4337SituacaoTributariaSTAnterior',fld:'SITUACAOTRIBUTARIASTANTERIOR'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV47Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'}],[{av:'AV36bmpSnReducao',fld:'vBMPSNREDUCAO'},{av:'AV37bmpSnSubstit',fld:'vBMPSNSUBSTIT'},{av:'AV42Descricao',fld:'vDESCRICAO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpICMS',fld:'vBMPICMS'},{av:'gx.fn.getCtrlProperty("vBMPICMS","Tooltiptext")',ctrl:'vBMPICMS',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'}],[{av:'gx.fn.getCtrlProperty("vBMPSNREDUCAO","Visible")',ctrl:'vBMPSNREDUCAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPSNSUBSTIT","Visible")',ctrl:'vBMPSNSUBSTIT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPICMS","Visible")',ctrl:'vBMPICMS',prop:'Visible'},{ctrl:'SITUACAOTRIBUTARIACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SITUACAOTRIBUTARIACODIGO","Title")',ctrl:'SITUACAOTRIBUTARIACODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SITUACAOTRIBUTARIADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SITUACAOTRIBUTARIADESCRICAO","Title")',ctrl:'SITUACAOTRIBUTARIADESCRICAO',prop:'Title'},{ctrl:'SITUACAOTRIBUTARIATIPOTRIBUTAC'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28SituacaoTributariaTipo',fld:'vSITUACAOTRIBUTARIATIPO'},{av:'AV27SituacaoTributariaCodigo',fld:'vSITUACAOTRIBUTARIACODIGO'},{av:'AV29SituacaoTributariaDescricao',fld:'vSITUACAOTRIBUTARIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34bmpICMS',fld:'vBMPICMS'},{av:'gx.fn.getCtrlProperty("vBMPICMS","Tooltiptext")',ctrl:'vBMPICMS',prop:'Tooltiptext'},{av:'AV43SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV47Pgmname',fld:'vPGMNAME'},{av:'A3569SituacaoTributariaSnReducao',fld:'SITUACAOTRIBUTARIASNREDUCAO'},{av:'A3570SituacaoTributariaSnSubstit',fld:'SITUACAOTRIBUTARIASNSUBSTIT'},{av:'A3571SituacaoTributariaDescricao',fld:'SITUACAOTRIBUTARIADESCRICAO'}],[]];
   this.setVCMap("AV43SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV47Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV43SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV47Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpICMS", rfrProp:"Value", gxAttId:"Bmpicms"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpICMS", rfrProp:"Tooltiptext", gxAttId:"Bmpicms"});
   GridContainer.addRefreshingVar({rfrVar:"AV43SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV47Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A3569SituacaoTributariaSnReducao", rfrProp:"Value", gxAttId:"3569"});
   GridContainer.addRefreshingVar({rfrVar:"A3570SituacaoTributariaSnSubstit", rfrProp:"Value", gxAttId:"3570"});
   GridContainer.addRefreshingVar({rfrVar:"A3571SituacaoTributariaDescricao", rfrProp:"Value", gxAttId:"3571"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsituacaotributaria());
