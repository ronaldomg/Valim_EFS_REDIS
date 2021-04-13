/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:7:40.34
*/
gx.evt.autoSkip = false;
gx.define('hconsultatrntransf', false, function () {
   this.ServerClass =  "hconsultatrntransf" ;
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
      this.AV17PTrnTransfSigla=gx.fn.getControlValue("vPTRNTRANSFSIGLA") ;
   };
   this.e179c2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e119c2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e129c2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e139c2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e149c2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e159c2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e199c2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e219c1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,34,37,39,41,43,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatrntransf",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1415,24,"TRNTRANSFSIGLA","","","TrnTransfSigla","char",0,"px",8,8,"left",null,[],1415,"TrnTransfSigla",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1370,25,"TRNTRANSFDESCRICAO","","","TrnTransfDescricao","svchar",0,"px",35,35,"left",null,[],1370,"TrnTransfDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1396,26,"TRNTRANSFCAIBANDEBDESCRICAO","","","TrnTransfCaiBanDebDescricao","svchar",0,"px",25,25,"left",null,[],1396,"TrnTransfCaiBanDebDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1378,27,"TRNTRANSFCAIBANCREDESCRICAO","","","TrnTransfCaiBanCreDescricao","svchar",0,"px",25,25,"left",null,[],1378,"TrnTransfCaiBanCreDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1414,28,"TRNTRANSFEMPRESAID","Empresa","","TrnTransfEmpresaID","char",0,"px",10,10,"left",null,[],1414,"TrnTransfEmpresaID",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRNTRANSFSIGLA",gxz:"ZV15TrnTransfSigla",gxold:"OV15TrnTransfSigla",gxvar:"AV15TrnTransfSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TrnTransfSigla=Value},v2z:function(Value){gx.O.ZV15TrnTransfSigla=Value},v2c:function(){gx.fn.setControlValue("vTRNTRANSFSIGLA",gx.O.AV15TrnTransfSigla,0)},c2v:function(){gx.O.AV15TrnTransfSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRNTRANSFSIGLA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRNTRANSFDESCRICAO",gxz:"ZV16TrnTransfDescricao",gxold:"OV16TrnTransfDescricao",gxvar:"AV16TrnTransfDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TrnTransfDescricao=Value},v2z:function(Value){gx.O.ZV16TrnTransfDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRNTRANSFDESCRICAO",gx.O.AV16TrnTransfDescricao,0)},c2v:function(){gx.O.AV16TrnTransfDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRNTRANSFDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFSIGLA",gxz:"Z1415TrnTransfSigla",gxold:"O1415TrnTransfSigla",gxvar:"A1415TrnTransfSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1415TrnTransfSigla=Value},v2z:function(Value){gx.O.Z1415TrnTransfSigla=Value},v2c:function(row){gx.fn.setGridControlValue("TRNTRANSFSIGLA",row || gx.fn.currentGridRowImpl(23),gx.O.A1415TrnTransfSigla,0)},c2v:function(){gx.O.A1415TrnTransfSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNTRANSFSIGLA",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFDESCRICAO",gxz:"Z1370TrnTransfDescricao",gxold:"O1370TrnTransfDescricao",gxvar:"A1370TrnTransfDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1370TrnTransfDescricao=Value},v2z:function(Value){gx.O.Z1370TrnTransfDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRNTRANSFDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A1370TrnTransfDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1370TrnTransfDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNTRANSFDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFCAIBANDEBDESCRICAO",gxz:"Z1396TrnTransfCaiBanDebDescricao",gxold:"O1396TrnTransfCaiBanDebDescricao",gxvar:"A1396TrnTransfCaiBanDebDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1396TrnTransfCaiBanDebDescricao=Value},v2z:function(Value){gx.O.Z1396TrnTransfCaiBanDebDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRNTRANSFCAIBANDEBDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A1396TrnTransfCaiBanDebDescricao,0)},c2v:function(){gx.O.A1396TrnTransfCaiBanDebDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNTRANSFCAIBANDEBDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFCAIBANCREDESCRICAO",gxz:"Z1378TrnTransfCaiBanCreDescricao",gxold:"O1378TrnTransfCaiBanCreDescricao",gxvar:"A1378TrnTransfCaiBanCreDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1378TrnTransfCaiBanCreDescricao=Value},v2z:function(Value){gx.O.Z1378TrnTransfCaiBanCreDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRNTRANSFCAIBANCREDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A1378TrnTransfCaiBanCreDescricao,0)},c2v:function(){gx.O.A1378TrnTransfCaiBanCreDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNTRANSFCAIBANCREDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFEMPRESAID",gxz:"Z1414TrnTransfEmpresaID",gxold:"O1414TrnTransfEmpresaID",gxvar:"A1414TrnTransfEmpresaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1414TrnTransfEmpresaID=Value},v2z:function(Value){gx.O.Z1414TrnTransfEmpresaID=Value},v2c:function(row){gx.fn.setGridControlValue("TRNTRANSFEMPRESAID",row || gx.fn.currentGridRowImpl(23),gx.O.A1414TrnTransfEmpresaID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1414TrnTransfEmpresaID=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNTRANSFEMPRESAID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLENAV",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15TrnTransfSigla = "" ;
   this.ZV15TrnTransfSigla = "" ;
   this.OV15TrnTransfSigla = "" ;
   this.AV16TrnTransfDescricao = "" ;
   this.ZV16TrnTransfDescricao = "" ;
   this.OV16TrnTransfDescricao = "" ;
   this.Z1415TrnTransfSigla = "" ;
   this.O1415TrnTransfSigla = "" ;
   this.Z1370TrnTransfDescricao = "" ;
   this.O1370TrnTransfDescricao = "" ;
   this.Z1396TrnTransfCaiBanDebDescricao = "" ;
   this.O1396TrnTransfCaiBanDebDescricao = "" ;
   this.Z1378TrnTransfCaiBanCreDescricao = "" ;
   this.O1378TrnTransfCaiBanCreDescricao = "" ;
   this.Z1414TrnTransfEmpresaID = "" ;
   this.O1414TrnTransfEmpresaID = "" ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15TrnTransfSigla = "" ;
   this.AV16TrnTransfDescricao = "" ;
   this.AV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17PTrnTransfSigla = "" ;
   this.A1376TrnTransfCaiBanCreEmpresaId = "" ;
   this.A1377TrnTransfCaiBanCreId = 0 ;
   this.A1394TrnTransfCaiBanDebEmpresaId = "" ;
   this.A1395TrnTransfCaiBanDebId = 0 ;
   this.A1415TrnTransfSigla = "" ;
   this.A1370TrnTransfDescricao = "" ;
   this.A1396TrnTransfCaiBanDebDescricao = "" ;
   this.A1378TrnTransfCaiBanCreDescricao = "" ;
   this.A1414TrnTransfEmpresaID = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e179c2_client": ["ENTER", true] ,"e119c2_client": ["'GXM_FIRST'", true] ,"e129c2_client": ["'GXM_PREVIOUS'", true] ,"e139c2_client": ["'GXM_NEXT'", true] ,"e149c2_client": ["'GXM_LAST'", true] ,"e159c2_client": ["'PROCURAR'", true] ,"e199c2_client": ["'ATUALIZAPAGINA'", true] ,"e219c1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV16TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TRNTRANSFSIGLA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNTRANSFSIGLA","Title")',ctrl:'TRNTRANSFSIGLA',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TRNTRANSFDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNTRANSFDESCRICAO","Title")',ctrl:'TRNTRANSFDESCRICAO',prop:'Title'},{ctrl:'TRNTRANSFCAIBANDEBDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNTRANSFCAIBANDEBDESCRICAO","Title")',ctrl:'TRNTRANSFCAIBANDEBDESCRICAO',prop:'Title'},{ctrl:'TRNTRANSFCAIBANCREDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNTRANSFCAIBANCREDESCRICAO","Title")',ctrl:'TRNTRANSFCAIBANCREDESCRICAO',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'}],[{av:'AV17PTrnTransfSigla',fld:'vPTRNTRANSFSIGLA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV16TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV16TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV16TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV16TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV16TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV16TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17PTrnTransfSigla", "vPTRNTRANSFSIGLA", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatrntransf());
