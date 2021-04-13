/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:54:54.40
*/
gx.evt.autoSkip = false;
gx.define('htabela', false, function () {
   this.ServerClass =  "htabela" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV26SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11422_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12422_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e20422_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21422_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22422_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e15422_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13422_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14422_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e23422_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e16422_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e24422_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25422_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26422_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,59,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htabela",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3123,47,"TABELAEMPRESAID","","","TabelaEmpresaId","char",0,"px",10,10,"left",null,[],3123,"TabelaEmpresaId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(139,48,"TABELAID","","","TabelaId","svchar",0,"px",30,30,"left",null,[],139,"TabelaId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(541,49,"TABELADESCRICAO","","","TabelaDescricao","svchar",0,"px",40,40,"left",null,[],541,"TabelaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(138,50,"EMPRESAID","","","EmpresaId","char",0,"px",10,10,"left",null,[],138,"EmpresaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",51,0,"px",17,"px","e20422_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",52,0,"px",17,"px","e21422_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",53,0,"px",17,"px","e22422_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXT1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTABELAEMPRESAID",gxz:"ZV24TabelaEmpresaId",gxold:"OV24TabelaEmpresaId",gxvar:"AV24TabelaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TabelaEmpresaId=Value},v2z:function(Value){gx.O.ZV24TabelaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTABELAEMPRESAID",gx.O.AV24TabelaEmpresaId,0)},c2v:function(){gx.O.AV24TabelaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTABELAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXT2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTABELAID",gxz:"ZV25TabelaId",gxold:"OV25TabelaId",gxvar:"AV25TabelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TabelaId=Value},v2z:function(Value){gx.O.ZV25TabelaId=Value},v2c:function(){gx.fn.setControlValue("vTABELAID",gx.O.AV25TabelaId,0)},c2v:function(){gx.O.AV25TabelaId=this.val()},val:function(){return gx.fn.getControlValue("vTABELAID")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TABELAEMPRESAID",gxz:"Z3123TabelaEmpresaId",gxold:"O3123TabelaEmpresaId",gxvar:"A3123TabelaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3123TabelaEmpresaId=Value},v2z:function(Value){gx.O.Z3123TabelaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TABELAEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A3123TabelaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3123TabelaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELAEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:30,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TABELAID",gxz:"Z139TabelaId",gxold:"O139TabelaId",gxvar:"A139TabelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A139TabelaId=Value},v2z:function(Value){gx.O.Z139TabelaId=Value},v2c:function(row){gx.fn.setGridControlValue("TABELAID",row || gx.fn.currentGridRowImpl(46),gx.O.A139TabelaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A139TabelaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TABELADESCRICAO",gxz:"Z541TabelaDescricao",gxold:"O541TabelaDescricao",gxvar:"A541TabelaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A541TabelaDescricao=Value},v2z:function(Value){gx.O.Z541TabelaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TABELADESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A541TabelaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A541TabelaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TABELADESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAID",gxz:"Z138EmpresaId",gxold:"O138EmpresaId",gxvar:"A138EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A138EmpresaId=Value},v2z:function(Value){gx.O.Z138EmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A138EmpresaId,0)},c2v:function(){gx.O.A138EmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV31Bmpalt_GXI)},c2v:function(){gx.O.AV31Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV31Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV32Bmpexc_GXI)},c2v:function(){gx.O.AV32Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV32Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV33Bmpcon_GXI)},c2v:function(){gx.O.AV33Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV33Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"PROMPT_TABELAEMPRESAID",grid:0};
   this.AV24TabelaEmpresaId = "" ;
   this.ZV24TabelaEmpresaId = "" ;
   this.OV24TabelaEmpresaId = "" ;
   this.AV25TabelaId = "" ;
   this.ZV25TabelaId = "" ;
   this.OV25TabelaId = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3123TabelaEmpresaId = "" ;
   this.O3123TabelaEmpresaId = "" ;
   this.Z139TabelaId = "" ;
   this.O139TabelaId = "" ;
   this.Z541TabelaDescricao = "" ;
   this.O541TabelaDescricao = "" ;
   this.Z138EmpresaId = "" ;
   this.O138EmpresaId = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV24TabelaEmpresaId = "" ;
   this.AV25TabelaId = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3123TabelaEmpresaId = "" ;
   this.A139TabelaId = "" ;
   this.A541TabelaDescricao = "" ;
   this.A138EmpresaId = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV26SnRecuperaFiltro = "" ;
   this.AV29Pgmname = "" ;
   this.Events = {"e11422_client": ["'ANTERIOR'", true] ,"e12422_client": ["'PROXIMO'", true] ,"e20422_client": ["'ALTERAR'", true] ,"e21422_client": ["'EXCLUIR'", true] ,"e22422_client": ["'CONSULTAR'", true] ,"e15422_client": ["VPAGINA.CLICK", true] ,"e13422_client": ["'NOVO'", true] ,"e14422_client": ["'FECHAR'", true] ,"e23422_client": ["'ATUALIZAR'", true] ,"e16422_client": ["'PROCURAR'", true] ,"e24422_client": ["'ATUALIZAPAGINA'", true] ,"e25422_client": ["ENTER", true] ,"e26422_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV25TabelaId',fld:'vTABELAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV29Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV25TabelaId',fld:'vTABELAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV29Pgmname',fld:'vPGMNAME'}],[{ctrl:'TABELAEMPRESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TABELAEMPRESAID","Title")',ctrl:'TABELAEMPRESAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TABELAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TABELAID","Title")',ctrl:'TABELAID',prop:'Title'},{ctrl:'TABELADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TABELADESCRICAO","Title")',ctrl:'TABELADESCRICAO',prop:'Title'},{ctrl:'EMPRESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EMPRESAID","Title")',ctrl:'EMPRESAID',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV19filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV25TabelaId',fld:'vTABELAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV29Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV25TabelaId',fld:'vTABELAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV29Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3123TabelaEmpresaId',fld:'TABELAEMPRESAID'},{av:'A139TabelaId',fld:'TABELAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV29Pgmname',fld:'vPGMNAME'}],[{av:'A139TabelaId',fld:'TABELAID'},{av:'A3123TabelaEmpresaId',fld:'TABELAEMPRESAID'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3123TabelaEmpresaId',fld:'TABELAEMPRESAID'},{av:'A139TabelaId',fld:'TABELAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV29Pgmname',fld:'vPGMNAME'}],[{av:'A139TabelaId',fld:'TABELAID'},{av:'A3123TabelaEmpresaId',fld:'TABELAEMPRESAID'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3123TabelaEmpresaId',fld:'TABELAEMPRESAID'},{av:'A139TabelaId',fld:'TABELAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV29Pgmname',fld:'vPGMNAME'}],[{av:'A139TabelaId',fld:'TABELAID'},{av:'A3123TabelaEmpresaId',fld:'TABELAEMPRESAID'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV25TabelaId',fld:'vTABELAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV29Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV29Pgmname',fld:'vPGMNAME'}],[{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV25TabelaId',fld:'vTABELAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV29Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV25TabelaId',fld:'vTABELAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV29Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV19filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV24TabelaEmpresaId',fld:'vTABELAEMPRESAID'},{av:'AV25TabelaId',fld:'vTABELAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV29Pgmname',fld:'vPGMNAME'}],[]];
   this.setPrompt("PROMPT_TABELAEMPRESAID", [13]);
   this.setVCMap("AV26SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV26SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar({rfrVar:"AV26SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV29Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htabela());
