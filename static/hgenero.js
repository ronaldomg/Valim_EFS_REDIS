/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:16.82
*/
gx.evt.autoSkip = false;
gx.define('hgenero', false, function () {
   this.ServerClass =  "hgenero" ;
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
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11o92_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12o92_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17o92_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13o92_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14o92_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15o92_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16o92_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21o92_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22o92_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23o92_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24o92_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25o92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26o92_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,27,30,33,35,37,39,41,43,46,48,49,53,54,55,56,57,58,65];
   this.GXLastCtrlId =65;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",52,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgenero",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3527,53,"GENEROID","","","GeneroId","char",0,"px",2,2,"left",null,[],3527,"GeneroId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Generodescricao",54,"vGENERODESCRICAO","Descrição do Gênero","","GeneroDescricao","svchar",0,"px",160,80,"left",null,[],"Generodescricao","GeneroDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",55,0,"px",17,"px","e21o92_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",56,0,"px",17,"px","e22o92_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",57,0,"px",17,"px","e23o92_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3524,58,"GENERODESCRICAO","","","GeneroDescricao","svchar",0,"px",160,80,"left",null,[],3524,"GeneroDescricao",false,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGENEROID1",gxz:"ZV27GeneroId1",gxold:"OV27GeneroId1",gxvar:"AV27GeneroId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27GeneroId1=Value},v2z:function(Value){gx.O.ZV27GeneroId1=Value},v2c:function(){gx.fn.setControlValue("vGENEROID1",gx.O.AV27GeneroId1,0)},c2v:function(){gx.O.AV27GeneroId1=this.val()},val:function(){return gx.fn.getControlValue("vGENEROID1")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:160,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGENERODESCRICAO1",gxz:"ZV28GeneroDescricao1",gxold:"OV28GeneroDescricao1",gxvar:"AV28GeneroDescricao1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28GeneroDescricao1=Value},v2z:function(Value){gx.O.ZV28GeneroDescricao1=Value},v2c:function(){gx.fn.setControlValue("vGENERODESCRICAO1",gx.O.AV28GeneroDescricao1,0)},c2v:function(){gx.O.AV28GeneroDescricao1=this.val()},val:function(){return gx.fn.getControlValue("vGENERODESCRICAO1")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TABLE3",grid:0};
   GXValidFnc[33]={fld:"IMAGE2",grid:0};
   GXValidFnc[35]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[37]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[39]={fld:"IMAGE1",grid:0};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   GXValidFnc[43]={fld:"TABLE5",grid:0};
   GXValidFnc[46]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GENEROID",gxz:"Z3527GeneroId",gxold:"O3527GeneroId",gxvar:"A3527GeneroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3527GeneroId=Value},v2z:function(Value){gx.O.Z3527GeneroId=Value},v2c:function(row){gx.fn.setGridControlValue("GENEROID",row || gx.fn.currentGridRowImpl(52),gx.O.A3527GeneroId,0)},c2v:function(){gx.O.A3527GeneroId=this.val()},val:function(row){return gx.fn.getGridControlValue("GENEROID",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:160,dec:0,sign:false,ro:0,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vGENERODESCRICAO",gxz:"ZV31GeneroDescricao",gxold:"OV31GeneroDescricao",gxvar:"AV31GeneroDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31GeneroDescricao=Value},v2z:function(Value){gx.O.ZV31GeneroDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vGENERODESCRICAO",row || gx.fn.currentGridRowImpl(52),gx.O.AV31GeneroDescricao,0)},c2v:function(){gx.O.AV31GeneroDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vGENERODESCRICAO",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(52),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(52),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(52),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(52))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(52))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:160,dec:0,sign:false,ro:1,isacc:0,grid:52,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GENERODESCRICAO",gxz:"Z3524GeneroDescricao",gxold:"O3524GeneroDescricao",gxvar:"A3524GeneroDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3524GeneroDescricao=Value},v2z:function(Value){gx.O.Z3524GeneroDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GENERODESCRICAO",row || gx.fn.currentGridRowImpl(52),gx.O.A3524GeneroDescricao,0)},c2v:function(){gx.O.A3524GeneroDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GENERODESCRICAO",row || gx.fn.currentGridRowImpl(52))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27GeneroId1 = "" ;
   this.ZV27GeneroId1 = "" ;
   this.OV27GeneroId1 = "" ;
   this.AV28GeneroDescricao1 = "" ;
   this.ZV28GeneroDescricao1 = "" ;
   this.OV28GeneroDescricao1 = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3527GeneroId = "" ;
   this.O3527GeneroId = "" ;
   this.ZV31GeneroDescricao = "" ;
   this.OV31GeneroDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3524GeneroDescricao = "" ;
   this.O3524GeneroDescricao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27GeneroId1 = "" ;
   this.AV28GeneroDescricao1 = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3527GeneroId = "" ;
   this.AV31GeneroDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3524GeneroDescricao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.AV37Pgmname = "" ;
   this.Events = {"e11o92_client": ["'ANTERIOR'", true] ,"e12o92_client": ["'PROXIMO'", true] ,"e17o92_client": ["VPAGINA.CLICK", true] ,"e13o92_client": ["'NOVO'", true] ,"e14o92_client": ["'FECHAR'", true] ,"e15o92_client": ["'IMPRIMIR'", true] ,"e16o92_client": ["'PROCURAR'", true] ,"e21o92_client": ["'ALTERAR'", true] ,"e22o92_client": ["'EXCLUIR'", true] ,"e23o92_client": ["'CONSULTAR'", true] ,"e24o92_client": ["'ATUALIZAPAGINA'", true] ,"e25o92_client": ["ENTER", true] ,"e26o92_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A3524GeneroDescricao',fld:'GENERODESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A3524GeneroDescricao',fld:'GENERODESCRICAO'}],[{ctrl:'GENEROID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GENEROID","Title")',ctrl:'GENEROID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'GENERODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GENERODESCRICAO","Title")',ctrl:'GENERODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3524GeneroDescricao',fld:'GENERODESCRICAO'}],[{av:'AV31GeneroDescricao',fld:'vGENERODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A3524GeneroDescricao',fld:'GENERODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A3524GeneroDescricao',fld:'GENERODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A3524GeneroDescricao',fld:'GENERODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV37Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV38Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A3524GeneroDescricao',fld:'GENERODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3527GeneroId',fld:'GENEROID'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'A3527GeneroId',fld:'GENEROID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3527GeneroId',fld:'GENEROID'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'A3527GeneroId',fld:'GENEROID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3527GeneroId',fld:'GENEROID'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'A3527GeneroId',fld:'GENEROID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GeneroId1',fld:'vGENEROID1'},{av:'AV28GeneroDescricao1',fld:'vGENERODESCRICAO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'A3524GeneroDescricao',fld:'GENERODESCRICAO'}],[]];
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV37Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A3524GeneroDescricao", rfrProp:"Value", gxAttId:"3524"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgenero());
