/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:28.32
*/
gx.evt.autoSkip = false;
gx.define('hocorrencia', false, function () {
   this.ServerClass =  "hocorrencia" ;
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
      this.AV28SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11872_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12872_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e21872_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22872_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23872_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e17872_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13872_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14872_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15872_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16872_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e24872_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25872_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26872_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,34,37,39,40,44,45,46,47,48,49,56];
   this.GXLastCtrlId =56;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",43,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hocorrencia",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(973,44,"OCORRENCIAID","","","Ocorrenciaid","int",0,"px",3,3,"right",null,[],973,"Ocorrenciaid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(974,45,"OCORRENCIADESCRICAO","","","OcorrenciaDescricao","svchar",0,"px",25,25,"left",null,[],974,"OcorrenciaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",46,0,"px",17,"px","e21872_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",47,0,"px",17,"px","e22872_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",48,0,"px",17,"px","e23872_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(972,49,"OCORRENCIAEMPRESAID","Empresa","","OcorrenciaEmpresaId","char",0,"px",10,10,"left",null,[],972,"OcorrenciaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIADESCRICAO",gxz:"ZV27OcorrenciaDescricao",gxold:"OV27OcorrenciaDescricao",gxvar:"AV27OcorrenciaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27OcorrenciaDescricao=Value},v2z:function(Value){gx.O.ZV27OcorrenciaDescricao=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIADESCRICAO",gx.O.AV27OcorrenciaDescricao,0)},c2v:function(){gx.O.AV27OcorrenciaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE8",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"IMAGE1",grid:0};
   GXValidFnc[32]={fld:"BTNHELP",grid:0};
   GXValidFnc[34]={fld:"TABLE5",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAID",gxz:"Z973Ocorrenciaid",gxold:"O973Ocorrenciaid",gxvar:"A973Ocorrenciaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A973Ocorrenciaid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z973Ocorrenciaid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAID",row || gx.fn.currentGridRowImpl(43),gx.O.A973Ocorrenciaid,0)},c2v:function(){gx.O.A973Ocorrenciaid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIAID",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIADESCRICAO",gxz:"Z974OcorrenciaDescricao",gxold:"O974OcorrenciaDescricao",gxvar:"A974OcorrenciaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A974OcorrenciaDescricao=Value},v2z:function(Value){gx.O.Z974OcorrenciaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIADESCRICAO",row || gx.fn.currentGridRowImpl(43),gx.O.A974OcorrenciaDescricao,0)},c2v:function(){gx.O.A974OcorrenciaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIADESCRICAO",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(43),gx.O.AV7bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(43),gx.O.AV16bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAEMPRESAID",gxz:"Z972OcorrenciaEmpresaId",gxold:"O972OcorrenciaEmpresaId",gxvar:"A972OcorrenciaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A972OcorrenciaEmpresaId=Value},v2z:function(Value){gx.O.Z972OcorrenciaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAEMPRESAID",row || gx.fn.currentGridRowImpl(43),gx.O.A972OcorrenciaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A972OcorrenciaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAEMPRESAID",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27OcorrenciaDescricao = "" ;
   this.ZV27OcorrenciaDescricao = "" ;
   this.OV27OcorrenciaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z973Ocorrenciaid = 0 ;
   this.O973Ocorrenciaid = 0 ;
   this.Z974OcorrenciaDescricao = "" ;
   this.O974OcorrenciaDescricao = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z972OcorrenciaEmpresaId = "" ;
   this.O972OcorrenciaEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27OcorrenciaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A973Ocorrenciaid = 0 ;
   this.A974OcorrenciaDescricao = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A972OcorrenciaEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV28SnRecuperaFiltro = "" ;
   this.Events = {"e11872_client": ["'ANTERIOR'", true] ,"e12872_client": ["'PROXIMO'", true] ,"e21872_client": ["'ALTERAR'", true] ,"e22872_client": ["'EXCLUIR'", true] ,"e23872_client": ["'CONSULTAR'", true] ,"e17872_client": ["VPAGINA.CLICK", true] ,"e13872_client": ["'NOVO'", true] ,"e14872_client": ["'FECHAR'", true] ,"e15872_client": ["'IMPRIMIR'", true] ,"e16872_client": ["'PROCURAR'", true] ,"e24872_client": ["'ATUALIZAPAGINA'", true] ,"e25872_client": ["ENTER", true] ,"e26872_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'OCORRENCIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAID","Title")',ctrl:'OCORRENCIAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'OCORRENCIADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIADESCRICAO","Title")',ctrl:'OCORRENCIADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A973Ocorrenciaid',fld:'OCORRENCIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A973Ocorrenciaid',fld:'OCORRENCIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A973Ocorrenciaid',fld:'OCORRENCIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A973Ocorrenciaid',fld:'OCORRENCIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A973Ocorrenciaid',fld:'OCORRENCIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A973Ocorrenciaid',fld:'OCORRENCIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV33Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV28SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hocorrencia());
