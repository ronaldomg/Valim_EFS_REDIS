/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:55:49.90
*/
gx.evt.autoSkip = false;
gx.define('hconsultaetiqueta', false, function () {
   this.ServerClass =  "hconsultaetiqueta" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV13EtiquetaCodigo=gx.fn.getIntegerValue("vETIQUETACODIGO",'.') ;
   };
   this.e17652_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11652_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12652_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13652_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14652_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15652_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19652_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21651_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,34,35,36,37,43,46,48,50,52,54,55,56,57];
   this.GXLastCtrlId =57;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",33,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaetiqueta",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(241,34,"ETIQUETACODIGO","","","EtiquetaCodigo","int",0,"px",4,4,"right",null,[],241,"EtiquetaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(235,35,"ETIQUETADESCRICAO","","","EtiquetaDescricao","svchar",0,"px",35,35,"left",null,[],235,"EtiquetaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(100,36,"ETIQUETAQTDCOLLINHA","","","EtiquetaQtdColLinha","int",0,"px",4,4,"right",null,[],100,"EtiquetaQtdColLinha",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(98,37,"ETIQUETAQTDLINHASPAG","","","EtiquetaQtdLinhasPag","int",0,"px",4,4,"right",null,[],98,"EtiquetaQtdLinhasPag",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCETIQUETACODIGO",gxz:"ZV14cEtiquetaCodigo",gxold:"OV14cEtiquetaCodigo",gxvar:"AV14cEtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14cEtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14cEtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCETIQUETACODIGO",gx.O.AV14cEtiquetaCodigo,0)},c2v:function(){gx.O.AV14cEtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCETIQUETACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCETIQUETADESCRICAO",gxz:"ZV15cEtiquetaDescricao",gxold:"OV15cEtiquetaDescricao",gxvar:"AV15cEtiquetaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15cEtiquetaDescricao=Value},v2z:function(Value){gx.O.ZV15cEtiquetaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCETIQUETADESCRICAO",gx.O.AV15cEtiquetaDescricao,0)},c2v:function(){gx.O.AV15cEtiquetaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCETIQUETADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCETIQUETAQTDCOLLINHA",gxz:"ZV17cEtiquetaQtdColLinha",gxold:"OV17cEtiquetaQtdColLinha",gxvar:"AV17cEtiquetaQtdColLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cEtiquetaQtdColLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17cEtiquetaQtdColLinha=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCETIQUETAQTDCOLLINHA",gx.O.AV17cEtiquetaQtdColLinha,0)},c2v:function(){gx.O.AV17cEtiquetaQtdColLinha=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCETIQUETAQTDCOLLINHA",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCETIQUETAQTDLINHASPAG",gxz:"ZV16cEtiquetaQtdLinhasPag",gxold:"OV16cEtiquetaQtdLinhasPag",gxvar:"AV16cEtiquetaQtdLinhasPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cEtiquetaQtdLinhasPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16cEtiquetaQtdLinhasPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCETIQUETAQTDLINHASPAG",gx.O.AV16cEtiquetaQtdLinhasPag,0)},c2v:function(){gx.O.AV16cEtiquetaQtdLinhasPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCETIQUETAQTDLINHASPAG",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETACODIGO",gxz:"Z241EtiquetaCodigo",gxold:"O241EtiquetaCodigo",gxvar:"A241EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A241EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z241EtiquetaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETACODIGO",row || gx.fn.currentGridRowImpl(33),gx.O.A241EtiquetaCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A241EtiquetaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETACODIGO",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETADESCRICAO",gxz:"Z235EtiquetaDescricao",gxold:"O235EtiquetaDescricao",gxvar:"A235EtiquetaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A235EtiquetaDescricao=Value},v2z:function(Value){gx.O.Z235EtiquetaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ETIQUETADESCRICAO",row || gx.fn.currentGridRowImpl(33),gx.O.A235EtiquetaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A235EtiquetaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ETIQUETADESCRICAO",row || gx.fn.currentGridRowImpl(33))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETAQTDCOLLINHA",gxz:"Z100EtiquetaQtdColLinha",gxold:"O100EtiquetaQtdColLinha",gxvar:"A100EtiquetaQtdColLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A100EtiquetaQtdColLinha=gx.num.intval(Value)},v2z:function(Value){gx.O.Z100EtiquetaQtdColLinha=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETAQTDCOLLINHA",row || gx.fn.currentGridRowImpl(33),gx.O.A100EtiquetaQtdColLinha,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A100EtiquetaQtdColLinha=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETAQTDCOLLINHA",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:33,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ETIQUETAQTDLINHASPAG",gxz:"Z98EtiquetaQtdLinhasPag",gxold:"O98EtiquetaQtdLinhasPag",gxvar:"A98EtiquetaQtdLinhasPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A98EtiquetaQtdLinhasPag=gx.num.intval(Value)},v2z:function(Value){gx.O.Z98EtiquetaQtdLinhasPag=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ETIQUETAQTDLINHASPAG",row || gx.fn.currentGridRowImpl(33),gx.O.A98EtiquetaQtdLinhasPag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A98EtiquetaQtdLinhasPag=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ETIQUETAQTDLINHASPAG",row || gx.fn.currentGridRowImpl(33),'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLENAV",grid:0};
   GXValidFnc[46]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[48]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[50]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[52]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[54]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV14cEtiquetaCodigo = 0 ;
   this.ZV14cEtiquetaCodigo = 0 ;
   this.OV14cEtiquetaCodigo = 0 ;
   this.AV15cEtiquetaDescricao = "" ;
   this.ZV15cEtiquetaDescricao = "" ;
   this.OV15cEtiquetaDescricao = "" ;
   this.AV17cEtiquetaQtdColLinha = 0 ;
   this.ZV17cEtiquetaQtdColLinha = 0 ;
   this.OV17cEtiquetaQtdColLinha = 0 ;
   this.AV16cEtiquetaQtdLinhasPag = 0 ;
   this.ZV16cEtiquetaQtdLinhasPag = 0 ;
   this.OV16cEtiquetaQtdLinhasPag = 0 ;
   this.Z241EtiquetaCodigo = 0 ;
   this.O241EtiquetaCodigo = 0 ;
   this.Z235EtiquetaDescricao = "" ;
   this.O235EtiquetaDescricao = "" ;
   this.Z100EtiquetaQtdColLinha = 0 ;
   this.O100EtiquetaQtdColLinha = 0 ;
   this.Z98EtiquetaQtdLinhasPag = 0 ;
   this.O98EtiquetaQtdLinhasPag = 0 ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV14cEtiquetaCodigo = 0 ;
   this.AV15cEtiquetaDescricao = "" ;
   this.AV17cEtiquetaQtdColLinha = 0 ;
   this.AV16cEtiquetaQtdLinhasPag = 0 ;
   this.AV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV13EtiquetaCodigo = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A235EtiquetaDescricao = "" ;
   this.A100EtiquetaQtdColLinha = 0 ;
   this.A98EtiquetaQtdLinhasPag = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17652_client": ["ENTER", true] ,"e11652_client": ["'GXM_FIRST'", true] ,"e12652_client": ["'GXM_PREVIOUS'", true] ,"e13652_client": ["'GXM_NEXT'", true] ,"e14652_client": ["'GXM_LAST'", true] ,"e15652_client": ["'PROCURAR'", true] ,"e19652_client": ["'ATUALIZAPAGINA'", true] ,"e21651_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV15cEtiquetaDescricao',fld:'vCETIQUETADESCRICAO'},{av:'AV17cEtiquetaQtdColLinha',fld:'vCETIQUETAQTDCOLLINHA'},{av:'AV16cEtiquetaQtdLinhasPag',fld:'vCETIQUETAQTDLINHASPAG'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'ETIQUETACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETACODIGO","Title")',ctrl:'ETIQUETACODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'ETIQUETADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETADESCRICAO","Title")',ctrl:'ETIQUETADESCRICAO',prop:'Title'},{ctrl:'ETIQUETAQTDCOLLINHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETAQTDCOLLINHA","Title")',ctrl:'ETIQUETAQTDCOLLINHA',prop:'Title'},{ctrl:'ETIQUETAQTDLINHASPAG',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ETIQUETAQTDLINHASPAG","Title")',ctrl:'ETIQUETAQTDLINHASPAG',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'}],[{av:'AV13EtiquetaCodigo',fld:'vETIQUETACODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV15cEtiquetaDescricao',fld:'vCETIQUETADESCRICAO'},{av:'AV17cEtiquetaQtdColLinha',fld:'vCETIQUETAQTDCOLLINHA'},{av:'AV16cEtiquetaQtdLinhasPag',fld:'vCETIQUETAQTDLINHASPAG'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV15cEtiquetaDescricao',fld:'vCETIQUETADESCRICAO'},{av:'AV17cEtiquetaQtdColLinha',fld:'vCETIQUETAQTDCOLLINHA'},{av:'AV16cEtiquetaQtdLinhasPag',fld:'vCETIQUETAQTDLINHASPAG'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV15cEtiquetaDescricao',fld:'vCETIQUETADESCRICAO'},{av:'AV17cEtiquetaQtdColLinha',fld:'vCETIQUETAQTDCOLLINHA'},{av:'AV16cEtiquetaQtdLinhasPag',fld:'vCETIQUETAQTDLINHASPAG'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV15cEtiquetaDescricao',fld:'vCETIQUETADESCRICAO'},{av:'AV17cEtiquetaQtdColLinha',fld:'vCETIQUETAQTDCOLLINHA'},{av:'AV16cEtiquetaQtdLinhasPag',fld:'vCETIQUETAQTDLINHASPAG'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV15cEtiquetaDescricao',fld:'vCETIQUETADESCRICAO'},{av:'AV17cEtiquetaQtdColLinha',fld:'vCETIQUETAQTDCOLLINHA'},{av:'AV16cEtiquetaQtdLinhasPag',fld:'vCETIQUETAQTDLINHASPAG'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A241EtiquetaCodigo',fld:'ETIQUETACODIGO'},{av:'A235EtiquetaDescricao',fld:'ETIQUETADESCRICAO'},{av:'A100EtiquetaQtdColLinha',fld:'ETIQUETAQTDCOLLINHA'},{av:'A98EtiquetaQtdLinhasPag',fld:'ETIQUETAQTDLINHASPAG'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV14cEtiquetaCodigo',fld:'vCETIQUETACODIGO'},{av:'AV15cEtiquetaDescricao',fld:'vCETIQUETADESCRICAO'},{av:'AV17cEtiquetaQtdColLinha',fld:'vCETIQUETAQTDCOLLINHA'},{av:'AV16cEtiquetaQtdLinhasPag',fld:'vCETIQUETAQTDLINHASPAG'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV13EtiquetaCodigo", "vETIQUETACODIGO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaetiqueta());
