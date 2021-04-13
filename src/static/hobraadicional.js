/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:15:37.84
*/
gx.evt.autoSkip = false;
gx.define('hobraadicional', false, function () {
   this.ServerClass =  "hobraadicional" ;
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
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV39ModeTelaObra=gx.fn.getControlValue("vMODETELAOBRA") ;
   };
   this.e112f82_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122f82_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e152f82_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132f82_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142f82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e182f82_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e192f82_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e202f82_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e212f82_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e232f82_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e242f82_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,20,23,25,27,29,31,34,36,37,41,42,43,44,45,46,53,54];
   this.GXLastCtrlId =54;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hobraadicional",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11542,41,"OBRAADICIONALSEQ","","","ObraAdicionalSeq","int",0,"px",4,4,"right",null,[],11542,"ObraAdicionalSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11548,42,"OBRAADICIONALDESCRICAO","","","ObraAdicionalDescricao","svchar",0,"px",200,80,"left",null,[],11548,"ObraAdicionalDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",43,0,"px",17,"px","e182f82_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",44,0,"px",17,"px","e192f82_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",45,0,"px",17,"px","e202f82_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(11549,46,"OBRAADICIONALUSUARIOALT","Obra Adicional Usuario Alt","","ObraAdicionalUsuarioAlt","char",0,"px",12,12,"left",null,[],11549,"ObraAdicionalUsuarioAlt",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOBRACODIGO",gxz:"ZV36ObraCodigo",gxold:"OV36ObraCodigo",gxvar:"AV36ObraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36ObraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36ObraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOBRACODIGO",gx.O.AV36ObraCodigo,0)},c2v:function(){gx.O.AV36ObraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOBRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRANOME",gxz:"ZV37ObraNome",gxold:"OV37ObraNome",gxvar:"AV37ObraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37ObraNome=Value},v2z:function(Value){gx.O.ZV37ObraNome=Value},v2c:function(){gx.fn.setControlValue("vOBRANOME",gx.O.AV37ObraNome,0)},c2v:function(){gx.O.AV37ObraNome=this.val()},val:function(){return gx.fn.getControlValue("vOBRANOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TABLE4",grid:0};
   GXValidFnc[20]={fld:"TABLE1",grid:0};
   GXValidFnc[23]={fld:"IMAGE2",grid:0};
   GXValidFnc[25]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[27]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[29]={fld:"BTNHELP",grid:0};
   GXValidFnc[31]={fld:"TABLE5",grid:0};
   GXValidFnc[34]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV26Pagina",gxold:"OV26Pagina",gxvar:"AV26Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV26Pagina)},c2v:function(){gx.O.AV26Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV27PaginaAux",gxold:"OV27PaginaAux",gxvar:"AV27PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV27PaginaAux,0)},c2v:function(){gx.O.AV27PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OBRAADICIONALSEQ",gxz:"Z11542ObraAdicionalSeq",gxold:"O11542ObraAdicionalSeq",gxvar:"A11542ObraAdicionalSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11542ObraAdicionalSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11542ObraAdicionalSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OBRAADICIONALSEQ",row || gx.fn.currentGridRowImpl(40),gx.O.A11542ObraAdicionalSeq,0)},c2v:function(){gx.O.A11542ObraAdicionalSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OBRAADICIONALSEQ",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:200,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OBRAADICIONALDESCRICAO",gxz:"Z11548ObraAdicionalDescricao",gxold:"O11548ObraAdicionalDescricao",gxvar:"A11548ObraAdicionalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11548ObraAdicionalDescricao=Value},v2z:function(Value){gx.O.Z11548ObraAdicionalDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OBRAADICIONALDESCRICAO",row || gx.fn.currentGridRowImpl(40),gx.O.A11548ObraAdicionalDescricao,0)},c2v:function(){gx.O.A11548ObraAdicionalDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OBRAADICIONALDESCRICAO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(40),gx.O.AV5bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(40),gx.O.AV7bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpCon=Value},v2z:function(Value){gx.O.ZV6bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(40),gx.O.AV6bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(40))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(40))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OBRAADICIONALUSUARIOALT",gxz:"Z11549ObraAdicionalUsuarioAlt",gxold:"O11549ObraAdicionalUsuarioAlt",gxvar:"A11549ObraAdicionalUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11549ObraAdicionalUsuarioAlt=Value},v2z:function(Value){gx.O.Z11549ObraAdicionalUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("OBRAADICIONALUSUARIOALT",row || gx.fn.currentGridRowImpl(40),gx.O.A11549ObraAdicionalUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11549ObraAdicionalUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("OBRAADICIONALUSUARIOALT",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV25OrderedBy",gxold:"OV25OrderedBy",gxvar:"AV25OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV25OrderedBy,0)},c2v:function(){gx.O.AV25OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOBRAEMPRESAID",gxz:"ZV38ObraEmpresaId",gxold:"OV38ObraEmpresaId",gxvar:"AV38ObraEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ObraEmpresaId=Value},v2z:function(Value){gx.O.ZV38ObraEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vOBRAEMPRESAID",gx.O.AV38ObraEmpresaId,0)},c2v:function(){gx.O.AV38ObraEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vOBRAEMPRESAID")},nac:gx.falseFn};
   this.AV36ObraCodigo = 0 ;
   this.ZV36ObraCodigo = 0 ;
   this.OV36ObraCodigo = 0 ;
   this.AV37ObraNome = "" ;
   this.ZV37ObraNome = "" ;
   this.OV37ObraNome = "" ;
   this.AV26Pagina = 0 ;
   this.ZV26Pagina = 0 ;
   this.OV26Pagina = 0 ;
   this.AV27PaginaAux = 0 ;
   this.ZV27PaginaAux = 0 ;
   this.OV27PaginaAux = 0 ;
   this.Z11542ObraAdicionalSeq = 0 ;
   this.O11542ObraAdicionalSeq = 0 ;
   this.Z11548ObraAdicionalDescricao = "" ;
   this.O11548ObraAdicionalDescricao = "" ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV6bmpCon = "" ;
   this.OV6bmpCon = "" ;
   this.Z11549ObraAdicionalUsuarioAlt = "" ;
   this.O11549ObraAdicionalUsuarioAlt = "" ;
   this.AV25OrderedBy = 0 ;
   this.ZV25OrderedBy = 0 ;
   this.OV25OrderedBy = 0 ;
   this.AV38ObraEmpresaId = "" ;
   this.ZV38ObraEmpresaId = "" ;
   this.OV38ObraEmpresaId = "" ;
   this.AV36ObraCodigo = 0 ;
   this.AV37ObraNome = "" ;
   this.AV26Pagina = 0 ;
   this.AV27PaginaAux = 0 ;
   this.AV25OrderedBy = 0 ;
   this.AV38ObraEmpresaId = "" ;
   this.AV39ModeTelaObra = "" ;
   this.A11312ObraCodigo = 0 ;
   this.A11311ObraEmpresaId = "" ;
   this.A11542ObraAdicionalSeq = 0 ;
   this.A11548ObraAdicionalDescricao = "" ;
   this.AV5bmpAlt = "" ;
   this.AV7bmpExc = "" ;
   this.AV6bmpCon = "" ;
   this.A11549ObraAdicionalUsuarioAlt = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.AV42Pgmname = "" ;
   this.Events = {"e112f82_client": ["'ANTERIOR'", true] ,"e122f82_client": ["'PROXIMO'", true] ,"e152f82_client": ["VPAGINA.CLICK", true] ,"e132f82_client": ["'NOVO'", true] ,"e142f82_client": ["'FECHAR'", true] ,"e182f82_client": ["'ALTERAR'", true] ,"e192f82_client": ["'EXCLUIR'", true] ,"e202f82_client": ["'CONSULTAR'", true] ,"e212f82_client": ["'ATUALIZAPAGINA'", true] ,"e232f82_client": ["ENTER", true] ,"e242f82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25OrderedBy',fld:'vORDEREDBY'},{av:'AV38ObraEmpresaId',fld:'vOBRAEMPRESAID'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25OrderedBy',fld:'vORDEREDBY'},{av:'AV38ObraEmpresaId',fld:'vOBRAEMPRESAID'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{ctrl:'OBRAADICIONALSEQ',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OBRAADICIONALSEQ","Title")',ctrl:'OBRAADICIONALSEQ',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'OBRAADICIONALDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OBRAADICIONALDESCRICAO","Title")',ctrl:'OBRAADICIONALDESCRICAO',prop:'Title'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV10filtros',fld:'vFILTROS'},{av:'AV25OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25OrderedBy',fld:'vORDEREDBY'},{av:'AV38ObraEmpresaId',fld:'vOBRAEMPRESAID'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV26Pagina',fld:'vPAGINA'}],[{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25OrderedBy',fld:'vORDEREDBY'},{av:'AV38ObraEmpresaId',fld:'vOBRAEMPRESAID'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25OrderedBy',fld:'vORDEREDBY'},{av:'AV38ObraEmpresaId',fld:'vOBRAEMPRESAID'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV26Pagina',fld:'vPAGINA'}],[{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV37ObraNome',fld:'vOBRANOME'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV25OrderedBy',fld:'vORDEREDBY'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV37ObraNome',fld:'vOBRANOME'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV39ModeTelaObra',fld:'vMODETELAOBRA'}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV37ObraNome',fld:'vOBRANOME'},{av:'A11542ObraAdicionalSeq',fld:'OBRAADICIONALSEQ'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV25OrderedBy',fld:'vORDEREDBY'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A11542ObraAdicionalSeq',fld:'OBRAADICIONALSEQ'},{av:'AV37ObraNome',fld:'vOBRANOME'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV37ObraNome',fld:'vOBRANOME'},{av:'A11542ObraAdicionalSeq',fld:'OBRAADICIONALSEQ'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV25OrderedBy',fld:'vORDEREDBY'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A11542ObraAdicionalSeq',fld:'OBRAADICIONALSEQ'},{av:'AV37ObraNome',fld:'vOBRANOME'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV37ObraNome',fld:'vOBRANOME'},{av:'A11542ObraAdicionalSeq',fld:'OBRAADICIONALSEQ'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV25OrderedBy',fld:'vORDEREDBY'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A11542ObraAdicionalSeq',fld:'OBRAADICIONALSEQ'},{av:'AV37ObraNome',fld:'vOBRANOME'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25OrderedBy',fld:'vORDEREDBY'},{av:'AV38ObraEmpresaId',fld:'vOBRAEMPRESAID'},{av:'AV36ObraCodigo',fld:'vOBRACODIGO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV39ModeTelaObra", "vMODETELAOBRA", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV42Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hobraadicional());
