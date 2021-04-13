/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:14.69
*/
gx.evt.autoSkip = false;
gx.define('hconsultatrndesc', false, function () {
   this.ServerClass =  "hconsultatrndesc" ;
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
      this.AV17PTrnDescSigla=gx.fn.getControlValue("vPTRNDESCSIGLA") ;
   };
   this.e17952_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11952_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12952_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13952_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14952_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15952_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19952_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21951_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,37,39,41,43,44,45,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatrndesc",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1363,24,"TRNDESCSIGLA","","","TrnDescSigla","char",0,"px",8,8,"left",null,[],1363,"TrnDescSigla",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1303,25,"TRNDESCDESCRICAO","","","TrnDescDescricao","svchar",0,"px",40,40,"left",null,[],1303,"TrnDescDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1362,26,"TRNDESCEMPRESAID","Empresa","","TrnDescEmpresaId","char",0,"px",10,10,"left",null,[],1362,"TrnDescEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRNDESCSIGLA",gxz:"ZV15TrnDescSigla",gxold:"OV15TrnDescSigla",gxvar:"AV15TrnDescSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15TrnDescSigla=Value},v2z:function(Value){gx.O.ZV15TrnDescSigla=Value},v2c:function(){gx.fn.setControlValue("vTRNDESCSIGLA",gx.O.AV15TrnDescSigla,0)},c2v:function(){gx.O.AV15TrnDescSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRNDESCSIGLA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRNDESCDESCRICAO",gxz:"ZV16TrnDescDescricao",gxold:"OV16TrnDescDescricao",gxvar:"AV16TrnDescDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TrnDescDescricao=Value},v2z:function(Value){gx.O.ZV16TrnDescDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRNDESCDESCRICAO",gx.O.AV16TrnDescDescricao,0)},c2v:function(){gx.O.AV16TrnDescDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRNDESCDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCSIGLA",gxz:"Z1363TrnDescSigla",gxold:"O1363TrnDescSigla",gxvar:"A1363TrnDescSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1363TrnDescSigla=Value},v2z:function(Value){gx.O.Z1363TrnDescSigla=Value},v2c:function(row){gx.fn.setGridControlValue("TRNDESCSIGLA",row || gx.fn.currentGridRowImpl(23),gx.O.A1363TrnDescSigla,0)},c2v:function(){gx.O.A1363TrnDescSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNDESCSIGLA",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCDESCRICAO",gxz:"Z1303TrnDescDescricao",gxold:"O1303TrnDescDescricao",gxvar:"A1303TrnDescDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1303TrnDescDescricao=Value},v2z:function(Value){gx.O.Z1303TrnDescDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRNDESCDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A1303TrnDescDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1303TrnDescDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNDESCDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCEMPRESAID",gxz:"Z1362TrnDescEmpresaId",gxold:"O1362TrnDescEmpresaId",gxvar:"A1362TrnDescEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1362TrnDescEmpresaId=Value},v2z:function(Value){gx.O.Z1362TrnDescEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRNDESCEMPRESAID",row || gx.fn.currentGridRowImpl(23),gx.O.A1362TrnDescEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1362TrnDescEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNDESCEMPRESAID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[43]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15TrnDescSigla = "" ;
   this.ZV15TrnDescSigla = "" ;
   this.OV15TrnDescSigla = "" ;
   this.AV16TrnDescDescricao = "" ;
   this.ZV16TrnDescDescricao = "" ;
   this.OV16TrnDescDescricao = "" ;
   this.Z1363TrnDescSigla = "" ;
   this.O1363TrnDescSigla = "" ;
   this.Z1303TrnDescDescricao = "" ;
   this.O1303TrnDescDescricao = "" ;
   this.Z1362TrnDescEmpresaId = "" ;
   this.O1362TrnDescEmpresaId = "" ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15TrnDescSigla = "" ;
   this.AV16TrnDescDescricao = "" ;
   this.AV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17PTrnDescSigla = "" ;
   this.A1363TrnDescSigla = "" ;
   this.A1303TrnDescDescricao = "" ;
   this.A1362TrnDescEmpresaId = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17952_client": ["ENTER", true] ,"e11952_client": ["'GXM_FIRST'", true] ,"e12952_client": ["'GXM_PREVIOUS'", true] ,"e13952_client": ["'GXM_NEXT'", true] ,"e14952_client": ["'GXM_LAST'", true] ,"e15952_client": ["'PROCURAR'", true] ,"e19952_client": ["'ATUALIZAPAGINA'", true] ,"e21951_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV16TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TRNDESCSIGLA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNDESCSIGLA","Title")',ctrl:'TRNDESCSIGLA',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TRNDESCDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNDESCDESCRICAO","Title")',ctrl:'TRNDESCDESCRICAO',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1363TrnDescSigla',fld:'TRNDESCSIGLA'}],[{av:'AV17PTrnDescSigla',fld:'vPTRNDESCSIGLA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV16TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV16TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV16TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV16TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV16TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV16TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17PTrnDescSigla", "vPTRNDESCSIGLA", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatrndesc());
