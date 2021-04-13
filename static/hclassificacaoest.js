/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:10.48
*/
gx.evt.autoSkip = false;
gx.define('hclassificacaoest', false, function () {
   this.ServerClass =  "hclassificacaoest" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A2923ClassificacaoEstSnObrigatorio=gx.fn.getControlValue("CLASSIFICACAOESTSNOBRIGATORIO") ;
   };
   this.e11mn2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12mn2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17mn2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13mn2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14mn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15mn2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16mn2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21mn2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22mn2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23mn2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24mn2_client=function()
   {
      this.executeServerEvent("'OPCAOCLASS'", true, arguments[0], false, false);
   };
   this.e25mn2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26mn2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27mn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hclassificacaoest",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2930,49,"CLASSIFICACAOESTID","","","ClassificacaoEstId","char",0,"px",15,15,"left",null,[],2930,"ClassificacaoEstId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2922,50,"CLASSIFICACAOESTDESCRICAO","","","ClassificacaoEstDescricao","svchar",0,"px",40,40,"left",null,[],2922,"ClassificacaoEstDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsimounao","vBMPSIMOUNAO",51,0,"px",17,"px",null,"","Obrigatório","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpopc","vBMPOPC",52,0,"px",17,"px","e24mn2_client","","Classif","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",53,0,"px",17,"px","e21mn2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",54,0,"px",17,"px","e22mn2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",55,0,"px",17,"px","e23mn2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSIFICACAOESTID",gxz:"ZV27ClassificacaoEstId",gxold:"OV27ClassificacaoEstId",gxvar:"AV27ClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ClassificacaoEstId=Value},v2z:function(Value){gx.O.ZV27ClassificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTID",gx.O.AV27ClassificacaoEstId,0)},c2v:function(){gx.O.AV27ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCLASSIFICACAOESTDESCRICAO",gxz:"ZV28ClassificacaoEstDescricao",gxold:"OV28ClassificacaoEstDescricao",gxvar:"AV28ClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.ZV28ClassificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTDESCRICAO",gx.O.AV28ClassificacaoEstDescricao,0)},c2v:function(){gx.O.AV28ClassificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTID",gxz:"Z2930ClassificacaoEstId",gxold:"O2930ClassificacaoEstId",gxvar:"A2930ClassificacaoEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2930ClassificacaoEstId=Value},v2z:function(Value){gx.O.Z2930ClassificacaoEstId=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(48),gx.O.A2930ClassificacaoEstId,0)},c2v:function(){gx.O.A2930ClassificacaoEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSIFICACAOESTID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTDESCRICAO",gxz:"Z2922ClassificacaoEstDescricao",gxold:"O2922ClassificacaoEstDescricao",gxvar:"A2922ClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2922ClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.Z2922ClassificacaoEstDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A2922ClassificacaoEstDescricao,0)},c2v:function(){gx.O.A2922ClassificacaoEstDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSIFICACAOESTDESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSIMOUNAO",gxz:"ZV29bmpSimOuNao",gxold:"OV29bmpSimOuNao",gxvar:"AV29bmpSimOuNao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpSimOuNao=Value},v2z:function(Value){gx.O.ZV29bmpSimOuNao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSIMOUNAO",row || gx.fn.currentGridRowImpl(48),gx.O.AV29bmpSimOuNao,gx.O.AV41Bmpsimounao_GXI)},c2v:function(){gx.O.AV41Bmpsimounao_GXI=this.val_GXI();gx.O.AV29bmpSimOuNao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSIMOUNAO",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSIMOUNAO_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV41Bmpsimounao_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPOPC",gxz:"ZV30bmpOpc",gxold:"OV30bmpOpc",gxvar:"AV30bmpOpc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpOpc=Value},v2z:function(Value){gx.O.ZV30bmpOpc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPOPC",row || gx.fn.currentGridRowImpl(48),gx.O.AV30bmpOpc,gx.O.AV40Bmpopc_GXI)},c2v:function(){gx.O.AV40Bmpopc_GXI=this.val_GXI();gx.O.AV30bmpOpc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPOPC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPOPC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV40Bmpopc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27ClassificacaoEstId = "" ;
   this.ZV27ClassificacaoEstId = "" ;
   this.OV27ClassificacaoEstId = "" ;
   this.AV28ClassificacaoEstDescricao = "" ;
   this.ZV28ClassificacaoEstDescricao = "" ;
   this.OV28ClassificacaoEstDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2930ClassificacaoEstId = "" ;
   this.O2930ClassificacaoEstId = "" ;
   this.Z2922ClassificacaoEstDescricao = "" ;
   this.O2922ClassificacaoEstDescricao = "" ;
   this.ZV29bmpSimOuNao = "" ;
   this.OV29bmpSimOuNao = "" ;
   this.ZV30bmpOpc = "" ;
   this.OV30bmpOpc = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27ClassificacaoEstId = "" ;
   this.AV28ClassificacaoEstDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2923ClassificacaoEstSnObrigatorio = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.AV29bmpSimOuNao = "" ;
   this.AV30bmpOpc = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.AV35Pgmname = "" ;
   this.Events = {"e11mn2_client": ["'ANTERIOR'", true] ,"e12mn2_client": ["'PROXIMO'", true] ,"e17mn2_client": ["VPAGINA.CLICK", true] ,"e13mn2_client": ["'NOVO'", true] ,"e14mn2_client": ["'FECHAR'", true] ,"e15mn2_client": ["'IMPRIMIR'", true] ,"e16mn2_client": ["'PROCURAR'", true] ,"e21mn2_client": ["'ALTERAR'", true] ,"e22mn2_client": ["'EXCLUIR'", true] ,"e23mn2_client": ["'CONSULTAR'", true] ,"e24mn2_client": ["'OPCAOCLASS'", true] ,"e25mn2_client": ["'ATUALIZAPAGINA'", true] ,"e26mn2_client": ["ENTER", true] ,"e27mn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpOpc',fld:'vBMPOPC'},{av:'gx.fn.getCtrlProperty("vBMPOPC","Tooltiptext")',ctrl:'vBMPOPC',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'}],[{av:'AV29bmpSimOuNao',fld:'vBMPSIMOUNAO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpOpc',fld:'vBMPOPC'},{av:'gx.fn.getCtrlProperty("vBMPOPC","Tooltiptext")',ctrl:'vBMPOPC',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'}],[{ctrl:'CLASSIFICACAOESTID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSIFICACAOESTID","Title")',ctrl:'CLASSIFICACAOESTID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CLASSIFICACAOESTDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CLASSIFICACAOESTDESCRICAO","Title")',ctrl:'CLASSIFICACAOESTDESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpOpc',fld:'vBMPOPC'},{av:'gx.fn.getCtrlProperty("vBMPOPC","Tooltiptext")',ctrl:'vBMPOPC',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpOpc',fld:'vBMPOPC'},{av:'gx.fn.getCtrlProperty("vBMPOPC","Tooltiptext")',ctrl:'vBMPOPC',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpOpc',fld:'vBMPOPC'},{av:'gx.fn.getCtrlProperty("vBMPOPC","Tooltiptext")',ctrl:'vBMPOPC',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV36Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV32QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpOpc',fld:'vBMPOPC'},{av:'gx.fn.getCtrlProperty("vBMPOPC","Tooltiptext")',ctrl:'vBMPOPC',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'OPCAOCLASS'"] = [[{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'},{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'}],[{av:'A2922ClassificacaoEstDescricao',fld:'CLASSIFICACAOESTDESCRICAO'},{av:'A2930ClassificacaoEstId',fld:'CLASSIFICACAOESTID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV28ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpOpc',fld:'vBMPOPC'},{av:'gx.fn.getCtrlProperty("vBMPOPC","Tooltiptext")',ctrl:'vBMPOPC',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A2923ClassificacaoEstSnObrigatorio',fld:'CLASSIFICACAOESTSNOBRIGATORIO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A2923ClassificacaoEstSnObrigatorio", "CLASSIFICACAOESTSNOBRIGATORIO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A2923ClassificacaoEstSnObrigatorio", "CLASSIFICACAOESTSNOBRIGATORIO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpOpc", rfrProp:"Value", gxAttId:"Bmpopc"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpOpc", rfrProp:"Tooltiptext", gxAttId:"Bmpopc"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV35Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A2923ClassificacaoEstSnObrigatorio"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hclassificacaoest());
