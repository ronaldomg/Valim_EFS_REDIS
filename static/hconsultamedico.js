/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:8:45.65
*/
gx.evt.autoSkip = false;
gx.define('hconsultamedico', false, function () {
   this.ServerClass =  "hconsultamedico" ;
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
      this.AV20MedicoEmpresaid=gx.fn.getControlValue("vMEDICOEMPRESAID") ;
      this.AV16PMedicoId=gx.fn.getIntegerValue("vPMEDICOID",'.') ;
   };
   this.e172bf2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e112bf2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e122bf2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e132bf2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e142bf2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e152bf2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e202bf1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,22,28,29,30,36,39,41,43,45,47,48,49,50];
   this.GXLastCtrlId =50;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",27,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamedico",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(9946,28,"MEDICOID","","","MedicoId","int",0,"px",4,4,"right",null,[],9946,"MedicoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9952,29,"MEDICONOME","","","MedicoNome","svchar",0,"px",40,40,"left",null,[],9952,"MedicoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9953,30,"MEDICOCRM","CRM","","MedicoCRM","char",0,"px",15,15,"left",null,[],9953,"MedicoCRM",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMEDICOID",gxz:"ZV9MedicoId",gxold:"OV9MedicoId",gxvar:"AV9MedicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9MedicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9MedicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMEDICOID",gx.O.AV9MedicoId,0)},c2v:function(){gx.O.AV9MedicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMEDICOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMEDICONOME",gxz:"ZV10MedicoNome",gxold:"OV10MedicoNome",gxvar:"AV10MedicoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10MedicoNome=Value},v2z:function(Value){gx.O.ZV10MedicoNome=Value},v2c:function(){gx.fn.setControlValue("vMEDICONOME",gx.O.AV10MedicoNome,0)},c2v:function(){gx.O.AV10MedicoNome=this.val()},val:function(){return gx.fn.getControlValue("vMEDICONOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABLE2",grid:0};
   GXValidFnc[28]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MEDICOID",gxz:"Z9946MedicoId",gxold:"O9946MedicoId",gxvar:"A9946MedicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9946MedicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9946MedicoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MEDICOID",row || gx.fn.currentGridRowImpl(27),gx.O.A9946MedicoId,0)},c2v:function(){gx.O.A9946MedicoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MEDICOID",row || gx.fn.currentGridRowImpl(27),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MEDICONOME",gxz:"Z9952MedicoNome",gxold:"O9952MedicoNome",gxvar:"A9952MedicoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9952MedicoNome=Value},v2z:function(Value){gx.O.Z9952MedicoNome=Value},v2c:function(row){gx.fn.setGridControlValue("MEDICONOME",row || gx.fn.currentGridRowImpl(27),gx.O.A9952MedicoNome,0)},c2v:function(){gx.O.A9952MedicoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("MEDICONOME",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MEDICOCRM",gxz:"Z9953MedicoCRM",gxold:"O9953MedicoCRM",gxvar:"A9953MedicoCRM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9953MedicoCRM=Value},v2z:function(Value){gx.O.Z9953MedicoCRM=Value},v2c:function(row){gx.fn.setGridControlValue("MEDICOCRM",row || gx.fn.currentGridRowImpl(27),gx.O.A9953MedicoCRM,0)},c2v:function(){gx.O.A9953MedicoCRM=this.val()},val:function(row){return gx.fn.getGridControlValue("MEDICOCRM",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLENAV",grid:0};
   GXValidFnc[39]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[47]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV14Pagina",gxold:"OV14Pagina",gxvar:"AV14Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV14Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV14Pagina)},c2v:function(){gx.O.AV14Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV15PaginaAux",gxold:"OV15PaginaAux",gxvar:"AV15PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV15PaginaAux,0)},c2v:function(){gx.O.AV15PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV13Orderedby",gxold:"OV13Orderedby",gxvar:"AV13Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV13Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV13Orderedby,0)},c2v:function(){gx.O.AV13Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV9MedicoId = 0 ;
   this.ZV9MedicoId = 0 ;
   this.OV9MedicoId = 0 ;
   this.AV10MedicoNome = "" ;
   this.ZV10MedicoNome = "" ;
   this.OV10MedicoNome = "" ;
   this.Z9946MedicoId = 0 ;
   this.O9946MedicoId = 0 ;
   this.Z9952MedicoNome = "" ;
   this.O9952MedicoNome = "" ;
   this.Z9953MedicoCRM = "" ;
   this.O9953MedicoCRM = "" ;
   this.AV14Pagina = 0 ;
   this.ZV14Pagina = 0 ;
   this.OV14Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.ZV15PaginaAux = 0 ;
   this.OV15PaginaAux = 0 ;
   this.AV13Orderedby = 0 ;
   this.ZV13Orderedby = 0 ;
   this.OV13Orderedby = 0 ;
   this.AV9MedicoId = 0 ;
   this.AV10MedicoNome = "" ;
   this.AV14Pagina = 0 ;
   this.AV15PaginaAux = 0 ;
   this.AV13Orderedby = 0 ;
   this.AV16PMedicoId = 0 ;
   this.A9945MedicoEmpresaId = "" ;
   this.A9946MedicoId = 0 ;
   this.A9952MedicoNome = "" ;
   this.A9953MedicoCRM = "" ;
   this.AV20MedicoEmpresaid = "" ;
   this.Events = {"e172bf2_client": ["ENTER", true] ,"e112bf2_client": ["'GXM_FIRST'", true] ,"e122bf2_client": ["'GXM_PREVIOUS'", true] ,"e132bf2_client": ["'GXM_NEXT'", true] ,"e142bf2_client": ["'GXM_LAST'", true] ,"e152bf2_client": ["'PROCURAR'", true] ,"e202bf1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV9MedicoId',fld:'vMEDICOID'},{av:'AV10MedicoNome',fld:'vMEDICONOME'},{av:'AV20MedicoEmpresaid',fld:'vMEDICOEMPRESAID'},{av:'AV13Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MEDICOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MEDICOID","Title")',ctrl:'MEDICOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MEDICONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MEDICONOME","Title")',ctrl:'MEDICONOME',prop:'Title'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'},{av:'AV14Pagina',fld:'vPAGINA'},{av:'AV12NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A9946MedicoId',fld:'MEDICOID'}],[{av:'AV16PMedicoId',fld:'vPMEDICOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV9MedicoId',fld:'vMEDICOID'},{av:'AV10MedicoNome',fld:'vMEDICONOME'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV20MedicoEmpresaid',fld:'vMEDICOEMPRESAID'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV9MedicoId',fld:'vMEDICOID'},{av:'AV10MedicoNome',fld:'vMEDICONOME'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV20MedicoEmpresaid',fld:'vMEDICOEMPRESAID'},{av:'AV14Pagina',fld:'vPAGINA'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV9MedicoId',fld:'vMEDICOID'},{av:'AV10MedicoNome',fld:'vMEDICONOME'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV20MedicoEmpresaid',fld:'vMEDICOEMPRESAID'},{av:'AV14Pagina',fld:'vPAGINA'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV9MedicoId',fld:'vMEDICOID'},{av:'AV10MedicoNome',fld:'vMEDICONOME'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV20MedicoEmpresaid',fld:'vMEDICOEMPRESAID'},{av:'AV15PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV9MedicoId',fld:'vMEDICOID'},{av:'AV10MedicoNome',fld:'vMEDICONOME'},{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV20MedicoEmpresaid',fld:'vMEDICOEMPRESAID'}],[{av:'AV13Orderedby',fld:'vORDEREDBY'},{av:'AV14Pagina',fld:'vPAGINA'}]];
   this.setVCMap("AV20MedicoEmpresaid", "vMEDICOEMPRESAID", 0, "char");
   this.setVCMap("AV16PMedicoId", "vPMEDICOID", 0, "int");
   this.setVCMap("AV20MedicoEmpresaid", "vMEDICOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar({rfrVar:"AV20MedicoEmpresaid"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamedico());
