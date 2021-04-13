/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:54:52.12
*/
gx.evt.autoSkip = false;
gx.define('hsistema', false, function () {
   this.ServerClass =  "hsistema" ;
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
      this.AV23SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A501SistemaUltimoPrograma=gx.fn.getIntegerValue("SISTEMAULTIMOPROGRAMA",'.') ;
   };
   this.e11402_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12402_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e19402_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20402_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21402_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e15402_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13402_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e22402_client=function()
   {
      this.executeServerEvent("'ATUALIZAR'", true, arguments[0], false, false);
   };
   this.e14402_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e24402_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25402_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26402_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,35,36,43];
   this.GXLastCtrlId =43;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsistema",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(140,29,"SISTEMAID","","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(539,30,"SISTEMANOME","","","SistemaNome","svchar",0,"px",40,40,"left",null,[],539,"SistemaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(540,31,"SISTEMAVERSAO","","","SistemaVersao","int",0,"px",9,9,"right",null,[],540,"SistemaVersao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpprog","vBMPPROG",32,0,"px",17,"px",null,"","Programas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpparametro","vBMPPARAMETRO",33,0,"px",17,"px",null,"","Parâmetros","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",34,0,"px",17,"px","e19402_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",35,0,"px",17,"px","e20402_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",36,0,"px",17,"px","e21402_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(28),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMANOME",gxz:"Z539SistemaNome",gxold:"O539SistemaNome",gxvar:"A539SistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A539SistemaNome=Value},v2z:function(Value){gx.O.Z539SistemaNome=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMANOME",row || gx.fn.currentGridRowImpl(28),gx.O.A539SistemaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A539SistemaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMANOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAVERSAO",gxz:"Z540SistemaVersao",gxold:"O540SistemaVersao",gxvar:"A540SistemaVersao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A540SistemaVersao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z540SistemaVersao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SISTEMAVERSAO",row || gx.fn.currentGridRowImpl(28),gx.O.A540SistemaVersao,0)},c2v:function(){gx.O.A540SistemaVersao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SISTEMAVERSAO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROG",gxz:"ZV17bmpProg",gxold:"OV17bmpProg",gxvar:"AV17bmpProg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17bmpProg=Value},v2z:function(Value){gx.O.ZV17bmpProg=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPROG",row || gx.fn.currentGridRowImpl(28),gx.O.AV17bmpProg,gx.O.AV29Bmpprog_GXI)},c2v:function(){gx.O.AV29Bmpprog_GXI=this.val_GXI();gx.O.AV17bmpProg=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPROG",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPROG_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV29Bmpprog_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPARAMETRO",gxz:"ZV18bmpParametro",gxold:"OV18bmpParametro",gxvar:"AV18bmpParametro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18bmpParametro=Value},v2z:function(Value){gx.O.ZV18bmpParametro=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPARAMETRO",row || gx.fn.currentGridRowImpl(28),gx.O.AV18bmpParametro,gx.O.AV33Bmpparametro_GXI)},c2v:function(){gx.O.AV33Bmpparametro_GXI=this.val_GXI();gx.O.AV18bmpParametro=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPARAMETRO",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPARAMETRO_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV33Bmpparametro_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV7bmpAlt,gx.O.AV30Bmpalt_GXI)},c2v:function(){gx.O.AV30Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV30Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV8bmpExc,gx.O.AV31Bmpexc_GXI)},c2v:function(){gx.O.AV31Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV31Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV16bmpCon,gx.O.AV32Bmpcon_GXI)},c2v:function(){gx.O.AV32Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV32Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.Z539SistemaNome = "" ;
   this.O539SistemaNome = "" ;
   this.Z540SistemaVersao = 0 ;
   this.O540SistemaVersao = 0 ;
   this.ZV17bmpProg = "" ;
   this.OV17bmpProg = "" ;
   this.ZV18bmpParametro = "" ;
   this.OV18bmpParametro = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A501SistemaUltimoPrograma = 0 ;
   this.A140SistemaId = "" ;
   this.A539SistemaNome = "" ;
   this.A540SistemaVersao = 0 ;
   this.AV17bmpProg = "" ;
   this.AV18bmpParametro = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV23SnRecuperaFiltro = "" ;
   this.Events = {"e11402_client": ["'ANTERIOR'", true] ,"e12402_client": ["'PROXIMO'", true] ,"e19402_client": ["'ALTERAR'", true] ,"e20402_client": ["'EXCLUIR'", true] ,"e21402_client": ["'CONSULTAR'", true] ,"e15402_client": ["VPAGINA.CLICK", true] ,"e13402_client": ["'NOVO'", true] ,"e22402_client": ["'ATUALIZAR'", true] ,"e14402_client": ["'FECHAR'", true] ,"e24402_client": ["'ATUALIZAPAGINA'", true] ,"e25402_client": ["ENTER", true] ,"e26402_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPPROG","Visible")',ctrl:'vBMPPROG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCON","Visible")',ctrl:'vBMPCON',prop:'Visible'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A501SistemaUltimoPrograma',fld:'SISTEMAULTIMOPROGRAMA'},{av:'A140SistemaId',fld:'SISTEMAID'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPPROG","Visible")',ctrl:'vBMPPROG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCON","Visible")',ctrl:'vBMPCON',prop:'Visible'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A501SistemaUltimoPrograma',fld:'SISTEMAULTIMOPROGRAMA'},{av:'A140SistemaId',fld:'SISTEMAID'}],[{ctrl:'SISTEMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMAID","Title")',ctrl:'SISTEMAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SISTEMANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMANOME","Title")',ctrl:'SISTEMANOME',prop:'Title'},{ctrl:'SISTEMAVERSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMAVERSAO","Title")',ctrl:'SISTEMAVERSAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV22filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPPROG","Visible")',ctrl:'vBMPPROG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCON","Visible")',ctrl:'vBMPCON',prop:'Visible'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A501SistemaUltimoPrograma',fld:'SISTEMAULTIMOPROGRAMA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPPROG","Visible")',ctrl:'vBMPPROG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCON","Visible")',ctrl:'vBMPCON',prop:'Visible'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A501SistemaUltimoPrograma',fld:'SISTEMAULTIMOPROGRAMA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A501SistemaUltimoPrograma',fld:'SISTEMAULTIMOPROGRAMA'},{av:'A140SistemaId',fld:'SISTEMAID'}],[{av:'AV17bmpProg',fld:'vBMPPROG'},{av:'gx.fn.getCtrlProperty("vBMPPROG","Tooltiptext")',ctrl:'vBMPPROG',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPPROG","Link")',ctrl:'vBMPPROG',prop:'Link'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV18bmpParametro',fld:'vBMPPARAMETRO'},{av:'gx.fn.getCtrlProperty("vBMPPARAMETRO","Tooltiptext")',ctrl:'vBMPPARAMETRO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPPARAMETRO","Link")',ctrl:'vBMPPARAMETRO',prop:'Link'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPPROG","Visible")',ctrl:'vBMPPROG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCON","Visible")',ctrl:'vBMPCON',prop:'Visible'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A501SistemaUltimoPrograma',fld:'SISTEMAULTIMOPROGRAMA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ATUALIZAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPPROG","Visible")',ctrl:'vBMPPROG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCON","Visible")',ctrl:'vBMPCON',prop:'Visible'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A501SistemaUltimoPrograma',fld:'SISTEMAULTIMOPROGRAMA'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'gx.fn.getCtrlProperty("vBMPPROG","Visible")',ctrl:'vBMPPROG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPCON","Visible")',ctrl:'vBMPCON',prop:'Visible'},{av:'AV23SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A501SistemaUltimoPrograma',fld:'SISTEMAULTIMOPROGRAMA'},{av:'A140SistemaId',fld:'SISTEMAID'}],[]];
   this.setVCMap("AV23SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A501SistemaUltimoPrograma", "SISTEMAULTIMOPROGRAMA", 0, "int");
   this.setVCMap("AV23SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A501SistemaUltimoPrograma", "SISTEMAULTIMOPROGRAMA", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar({rfrVar:"AV17bmpProg", rfrProp:"Visible", gxAttId:"Bmpprog"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Visible", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Visible", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Visible", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV23SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A501SistemaUltimoPrograma"});
   GridContainer.addRefreshingVar({rfrVar:"A140SistemaId", rfrProp:"Value", gxAttId:"140"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsistema());
