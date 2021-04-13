/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:36:54.67
*/
gx.evt.autoSkip = false;
gx.define('hgrupooco', false, function () {
   this.ServerClass =  "hgrupooco" ;
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
      this.AV11EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e1124b2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1224b2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e2124b2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2224b2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2324b2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e1724b2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1324b2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1424b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1524b2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e1624b2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2424b2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2524b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,26,29,32,34,36,38,40,42,45,47,48,52,53,54,55,56,57,58,64,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgrupooco",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10008,52,"GRUPOOCOID","","","GrupoOcoId","int",0,"px",2,2,"right",null,[],10008,"GrupoOcoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10094,53,"GRUPOOCODESCRICAO","","","GrupoOcoDescricao","svchar",0,"px",30,30,"left",null,[],10094,"GrupoOcoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10014,54,"GRUPOOCOCENCUSID","Centro Custo","","GrupoOcoCenCusId","svchar",0,"px",30,30,"left",null,[],10014,"GrupoOcoCenCusId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10012,55,"GRUPOOCOCCONTABILID","Conta Contábil","","GrupoOcoCcontabilId","svchar",0,"px",30,30,"left",null,[],10012,"GrupoOcoCcontabilId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",56,0,"px",17,"px","e2124b2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",57,0,"px",17,"px","e2224b2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",58,0,"px",17,"px","e2324b2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"ZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOOCOID",gxz:"ZV16GrupoOcoId",gxold:"OV16GrupoOcoId",gxvar:"AV16GrupoOcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16GrupoOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16GrupoOcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOOCOID",gx.O.AV16GrupoOcoId,0)},c2v:function(){gx.O.AV16GrupoOcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOOCOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRUPOOCODESCRICAO",gxz:"ZV15GrupoOcoDescricao",gxold:"OV15GrupoOcoDescricao",gxvar:"AV15GrupoOcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15GrupoOcoDescricao=Value},v2z:function(Value){gx.O.ZV15GrupoOcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRUPOOCODESCRICAO",gx.O.AV15GrupoOcoDescricao,0)},c2v:function(){gx.O.AV15GrupoOcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRUPOOCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLE4",grid:0};
   GXValidFnc[29]={fld:"TABLE8",grid:0};
   GXValidFnc[32]={fld:"IMAGE2",grid:0};
   GXValidFnc[34]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[36]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[38]={fld:"IMAGE1",grid:0};
   GXValidFnc[40]={fld:"BTNHELP",grid:0};
   GXValidFnc[42]={fld:"TABLE5",grid:0};
   GXValidFnc[45]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV28Pagina",gxold:"OV28Pagina",gxvar:"AV28Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV28Pagina)},c2v:function(){gx.O.AV28Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV29PaginaAux",gxold:"OV29PaginaAux",gxvar:"AV29PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV29PaginaAux,0)},c2v:function(){gx.O.AV29PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"ZZ",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCOID",gxz:"Z10008GrupoOcoId",gxold:"O10008GrupoOcoId",gxvar:"A10008GrupoOcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10008GrupoOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10008GrupoOcoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCOID",row || gx.fn.currentGridRowImpl(51),gx.O.A10008GrupoOcoId,0)},c2v:function(){gx.O.A10008GrupoOcoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOOCOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCODESCRICAO",gxz:"Z10094GrupoOcoDescricao",gxold:"O10094GrupoOcoDescricao",gxvar:"A10094GrupoOcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10094GrupoOcoDescricao=Value},v2z:function(Value){gx.O.Z10094GrupoOcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A10094GrupoOcoDescricao,0)},c2v:function(){gx.O.A10094GrupoOcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOOCODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCOCENCUSID",gxz:"Z10014GrupoOcoCenCusId",gxold:"O10014GrupoOcoCenCusId",gxvar:"A10014GrupoOcoCenCusId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10014GrupoOcoCenCusId=Value},v2z:function(Value){gx.O.Z10014GrupoOcoCenCusId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCOCENCUSID",row || gx.fn.currentGridRowImpl(51),gx.O.A10014GrupoOcoCenCusId,0)},c2v:function(){gx.O.A10014GrupoOcoCenCusId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOOCOCENCUSID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCOCCONTABILID",gxz:"Z10012GrupoOcoCcontabilId",gxold:"O10012GrupoOcoCcontabilId",gxvar:"A10012GrupoOcoCcontabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10012GrupoOcoCcontabilId=Value},v2z:function(Value){gx.O.Z10012GrupoOcoCcontabilId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCOCCONTABILID",row || gx.fn.currentGridRowImpl(51),gx.O.A10012GrupoOcoCcontabilId,0)},c2v:function(){gx.O.A10012GrupoOcoCcontabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOOCOCCONTABILID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(51),gx.O.AV5bmpAlt,gx.O.AV42Bmpalt_GXI)},c2v:function(){gx.O.AV42Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV42Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51),gx.O.AV8bmpExc,gx.O.AV43Bmpexc_GXI)},c2v:function(){gx.O.AV43Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV43Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV7bmpCon",gxold:"OV7bmpCon",gxvar:"AV7bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpCon=Value},v2z:function(Value){gx.O.ZV7bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(51),gx.O.AV7bmpCon,gx.O.AV44Bmpcon_GXI)},c2v:function(){gx.O.AV44Bmpcon_GXI=this.val_GXI();gx.O.AV7bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV44Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[64]={fld:"JS", format:2,grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV27OrderedBy",gxold:"OV27OrderedBy",gxvar:"AV27OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV27OrderedBy,0)},c2v:function(){gx.O.AV27OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16GrupoOcoId = 0 ;
   this.ZV16GrupoOcoId = 0 ;
   this.OV16GrupoOcoId = 0 ;
   this.AV15GrupoOcoDescricao = "" ;
   this.ZV15GrupoOcoDescricao = "" ;
   this.OV15GrupoOcoDescricao = "" ;
   this.AV28Pagina = 0 ;
   this.ZV28Pagina = 0 ;
   this.OV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.ZV29PaginaAux = 0 ;
   this.OV29PaginaAux = 0 ;
   this.Z10008GrupoOcoId = 0 ;
   this.O10008GrupoOcoId = 0 ;
   this.Z10094GrupoOcoDescricao = "" ;
   this.O10094GrupoOcoDescricao = "" ;
   this.Z10014GrupoOcoCenCusId = "" ;
   this.O10014GrupoOcoCenCusId = "" ;
   this.Z10012GrupoOcoCcontabilId = "" ;
   this.O10012GrupoOcoCcontabilId = "" ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV7bmpCon = "" ;
   this.OV7bmpCon = "" ;
   this.AV27OrderedBy = 0 ;
   this.ZV27OrderedBy = 0 ;
   this.OV27OrderedBy = 0 ;
   this.AV16GrupoOcoId = 0 ;
   this.AV15GrupoOcoDescricao = "" ;
   this.AV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.AV27OrderedBy = 0 ;
   this.A10007GrupoOcoEmpresaId = "" ;
   this.A10008GrupoOcoId = 0 ;
   this.A10094GrupoOcoDescricao = "" ;
   this.A10014GrupoOcoCenCusId = "" ;
   this.A10012GrupoOcoCcontabilId = "" ;
   this.AV5bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV7bmpCon = "" ;
   this.AV11EmpresaPadrao = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.Events = {"e1124b2_client": ["'ANTERIOR'", true] ,"e1224b2_client": ["'PROXIMO'", true] ,"e2124b2_client": ["'ALTERAR'", true] ,"e2224b2_client": ["'EXCLUIR'", true] ,"e2324b2_client": ["'CONSULTAR'", true] ,"e1724b2_client": ["VPAGINA.CLICK", true] ,"e1324b2_client": ["'NOVO'", true] ,"e1424b2_client": ["'FECHAR'", true] ,"e1524b2_client": ["'IMPRIMIR'", true] ,"e1624b2_client": ["'PROCURAR'", true] ,"e2424b2_client": ["ENTER", true] ,"e2524b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV15GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV27OrderedBy',fld:'vORDEREDBY'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV15GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV27OrderedBy',fld:'vORDEREDBY'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'}],[{ctrl:'GRUPOOCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOOCOID","Title")',ctrl:'GRUPOOCOID',prop:'Title'},{av:'AV18Imagem',fld:'vIMAGEM'},{ctrl:'GRUPOOCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRUPOOCODESCRICAO","Title")',ctrl:'GRUPOOCODESCRICAO',prop:'Title'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV25NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV14filtros',fld:'vFILTROS'},{av:'AV16GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV15GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV27OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV15GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV27OrderedBy',fld:'vORDEREDBY'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV28Pagina',fld:'vPAGINA'}],[{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV15GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV27OrderedBy',fld:'vORDEREDBY'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV7bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV36EmpresaSnContabilidade',fld:'vEMPRESASNCONTABILIDADE'},{av:'AV37SnContabilidade',fld:'vSNCONTABILIDADE'},{av:'gx.fn.getCtrlProperty("GRUPOOCOCCONTABILID","Visible")',ctrl:'GRUPOOCOCCONTABILID',prop:'Visible'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV16GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV15GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV27OrderedBy',fld:'vORDEREDBY'}],[{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV16GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV15GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV27OrderedBy',fld:'vORDEREDBY'}],[{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV16GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV15GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV27OrderedBy',fld:'vORDEREDBY'}],[{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV15GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV27OrderedBy',fld:'vORDEREDBY'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV28Pagina',fld:'vPAGINA'}],[{av:'AV14filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV41Pgmdesc',fld:'vPGMDESC'}],[{av:'AV24NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV23NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV30QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16GrupoOcoId',fld:'vGRUPOOCOID'},{av:'AV15GrupoOcoDescricao',fld:'vGRUPOOCODESCRICAO'},{av:'AV27OrderedBy',fld:'vORDEREDBY'},{av:'AV11EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'},{av:'AV28Pagina',fld:'vPAGINA'}],[{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV14filtros',fld:'vFILTROS'}]];
   this.setVCMap("AV11EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV11EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV11EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A10008GrupoOcoId", rfrProp:"Value", gxAttId:"10008"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgrupooco());
