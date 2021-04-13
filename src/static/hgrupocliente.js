/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:8:51.93
*/
gx.evt.autoSkip = false;
gx.define('hgrupocliente', false, function () {
   this.ServerClass =  "hgrupocliente" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
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
      this.AV27SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e112bi2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122bi2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e202bi2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e212bi2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e222bi2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e162bi2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132bi2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142bi2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152bi2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e232bi2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e242bi2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e252bi2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,35,37,38,42,43,44,45,46,47,54,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgrupocliente",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11062,42,"GRUPOCLIENTEID","","","GrupoClienteId","int",0,"px",3,3,"right",null,[],11062,"GrupoClienteId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(11078,43,"GRUPOCLIENTEDESCRICAO","","","GrupoClienteDescricao","svchar",0,"px",40,40,"left",null,[],11078,"GrupoClienteDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",44,0,"px",17,"px","e202bi2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",45,0,"px",17,"px","e212bi2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",46,0,"px",17,"px","e222bi2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(11061,47,"GRUPOCLIENTEEMPRESAID","Grupo Cliente Empresa Id","","GrupoClienteEmpresaId","char",0,"px",10,10,"left",null,[],11061,"GrupoClienteEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOCLIENTEDESCRICAO",gxz:"ZV11GrupoClienteDescricao",gxold:"OV11GrupoClienteDescricao",gxvar:"AV11GrupoClienteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11GrupoClienteDescricao=Value},v2z:function(Value){gx.O.ZV11GrupoClienteDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRUPOCLIENTEDESCRICAO",gx.O.AV11GrupoClienteDescricao,0)},c2v:function(){gx.O.AV11GrupoClienteDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOCLIENTEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE8",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"BTNHELP",grid:0};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOCLIENTEID",gxz:"Z11062GrupoClienteId",gxold:"O11062GrupoClienteId",gxvar:"A11062GrupoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11062GrupoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11062GrupoClienteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOCLIENTEID",row || gx.fn.currentGridRowImpl(41),gx.O.A11062GrupoClienteId,0)},c2v:function(){gx.O.A11062GrupoClienteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOCLIENTEID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOCLIENTEDESCRICAO",gxz:"Z11078GrupoClienteDescricao",gxold:"O11078GrupoClienteDescricao",gxvar:"A11078GrupoClienteDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11078GrupoClienteDescricao=Value},v2z:function(Value){gx.O.Z11078GrupoClienteDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOCLIENTEDESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A11078GrupoClienteDescricao,0)},c2v:function(){gx.O.A11078GrupoClienteDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCLIENTEDESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(41),gx.O.AV5bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41),gx.O.AV7bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpCon=Value},v2z:function(Value){gx.O.ZV6bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(41),gx.O.AV6bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOCLIENTEEMPRESAID",gxz:"Z11061GrupoClienteEmpresaId",gxold:"O11061GrupoClienteEmpresaId",gxvar:"A11061GrupoClienteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11061GrupoClienteEmpresaId=Value},v2z:function(Value){gx.O.Z11061GrupoClienteEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOCLIENTEEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A11061GrupoClienteEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11061GrupoClienteEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOCLIENTEEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV22OrderedBy",gxold:"OV22OrderedBy",gxvar:"AV22OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV22OrderedBy,0)},c2v:function(){gx.O.AV22OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   this.AV11GrupoClienteDescricao = "" ;
   this.ZV11GrupoClienteDescricao = "" ;
   this.OV11GrupoClienteDescricao = "" ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.Z11062GrupoClienteId = 0 ;
   this.O11062GrupoClienteId = 0 ;
   this.Z11078GrupoClienteDescricao = "" ;
   this.O11078GrupoClienteDescricao = "" ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV6bmpCon = "" ;
   this.OV6bmpCon = "" ;
   this.Z11061GrupoClienteEmpresaId = "" ;
   this.O11061GrupoClienteEmpresaId = "" ;
   this.AV22OrderedBy = 0 ;
   this.ZV22OrderedBy = 0 ;
   this.OV22OrderedBy = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV11GrupoClienteDescricao = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV22OrderedBy = 0 ;
   this.AV9EmpresaPadrao = "" ;
   this.A11062GrupoClienteId = 0 ;
   this.A11078GrupoClienteDescricao = "" ;
   this.AV5bmpAlt = "" ;
   this.AV7bmpExc = "" ;
   this.AV6bmpCon = "" ;
   this.A11061GrupoClienteEmpresaId = "" ;
   this.AV27SnRecuperaFiltro = "" ;
   this.Events = {"e112bi2_client": ["'ANTERIOR'", true] ,"e122bi2_client": ["'PROXIMO'", true] ,"e202bi2_client": ["'ALTERAR'", true] ,"e212bi2_client": ["'EXCLUIR'", true] ,"e222bi2_client": ["'CONSULTAR'", true] ,"e162bi2_client": ["VPAGINA.CLICK", true] ,"e132bi2_client": ["'NOVO'", true] ,"e142bi2_client": ["'FECHAR'", true] ,"e152bi2_client": ["'PROCURAR'", true] ,"e232bi2_client": ["'ATUALIZAPAGINA'", true] ,"e242bi2_client": ["ENTER", true] ,"e252bi2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'GRUPOCLIENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOCLIENTEID","Title")',ctrl:'GRUPOCLIENTEID',prop:'Title'},{av:'AV13Imagem',fld:'vIMAGEM'},{ctrl:'GRUPOCLIENTEDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOCLIENTEDESCRICAO","Title")',ctrl:'GRUPOCLIENTEDESCRICAO',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV10filtros',fld:'vFILTROS'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A11062GrupoClienteId',fld:'GRUPOCLIENTEID'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'}],[{av:'A11062GrupoClienteId',fld:'GRUPOCLIENTEID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A11062GrupoClienteId',fld:'GRUPOCLIENTEID'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'}],[{av:'A11062GrupoClienteId',fld:'GRUPOCLIENTEID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A11062GrupoClienteId',fld:'GRUPOCLIENTEID'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'}],[{av:'A11062GrupoClienteId',fld:'GRUPOCLIENTEID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11GrupoClienteDescricao',fld:'vGRUPOCLIENTEDESCRICAO'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["ENTER"] = [[],[]];
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV27SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV27SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgrupocliente());
