/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:50.49
*/
gx.evt.autoSkip = false;
gx.define('hconsultabanco', false, function () {
   this.ServerClass =  "hconsultabanco" ;
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
      this.AV18BancoId=gx.fn.getIntegerValue("vBANCOID",'.') ;
   };
   this.e177o2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e117o2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e127o2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e137o2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e147o2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e157o2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e197o2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e217o1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultabanco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(947,29,"BANCOID","","","BancoId","int",0,"px",3,3,"right",null,[],947,"BancoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(948,30,"BANCONOME","","","BancoNome","svchar",0,"px",25,25,"left",null,[],948,"BancoNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(949,31,"BANCOQTDEDIGITOBOLETO","","","BancoQtdeDigitoBoleto","int",0,"px",2,2,"right",null,[],949,"BancoQtdeDigitoBoleto",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCBANCOID",gxz:"ZV15cBancoId",gxold:"OV15cBancoId",gxvar:"AV15cBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15cBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15cBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOID",gx.O.AV15cBancoId,0)},c2v:function(){gx.O.AV15cBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCBANCONOME",gxz:"ZV16cBancoNome",gxold:"OV16cBancoNome",gxvar:"AV16cBancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cBancoNome=Value},v2z:function(Value){gx.O.ZV16cBancoNome=Value},v2c:function(){gx.fn.setControlValue("vCBANCONOME",gx.O.AV16cBancoNome,0)},c2v:function(){gx.O.AV16cBancoNome=this.val()},val:function(){return gx.fn.getControlValue("vCBANCONOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCBANCOQTDEDIGITOBOLETO",gxz:"ZV17cBancoQtdeDigitoBoleto",gxold:"OV17cBancoQtdeDigitoBoleto",gxvar:"AV17cBancoQtdeDigitoBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cBancoQtdeDigitoBoleto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17cBancoQtdeDigitoBoleto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOQTDEDIGITOBOLETO",gx.O.AV17cBancoQtdeDigitoBoleto,0)},c2v:function(){gx.O.AV17cBancoQtdeDigitoBoleto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOQTDEDIGITOBOLETO",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCOID",gxz:"Z947BancoId",gxold:"O947BancoId",gxvar:"A947BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A947BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z947BancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOID",row || gx.fn.currentGridRowImpl(28),gx.O.A947BancoId,0)},c2v:function(){gx.O.A947BancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCONOME",gxz:"Z948BancoNome",gxold:"O948BancoNome",gxvar:"A948BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A948BancoNome=Value},v2z:function(Value){gx.O.Z948BancoNome=Value},v2c:function(row){gx.fn.setGridControlValue("BANCONOME",row || gx.fn.currentGridRowImpl(28),gx.O.A948BancoNome,0)},c2v:function(){gx.O.A948BancoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCONOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCOQTDEDIGITOBOLETO",gxz:"Z949BancoQtdeDigitoBoleto",gxold:"O949BancoQtdeDigitoBoleto",gxvar:"A949BancoQtdeDigitoBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A949BancoQtdeDigitoBoleto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z949BancoQtdeDigitoBoleto=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOQTDEDIGITOBOLETO",row || gx.fn.currentGridRowImpl(28),gx.O.A949BancoQtdeDigitoBoleto,0)},c2v:function(){gx.O.A949BancoQtdeDigitoBoleto=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOQTDEDIGITOBOLETO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLENAV",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV20Pagina",gxold:"OV20Pagina",gxvar:"AV20Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV20Pagina)},c2v:function(){gx.O.AV20Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV21PaginaAux",gxold:"OV21PaginaAux",gxvar:"AV21PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV21PaginaAux,0)},c2v:function(){gx.O.AV21PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15cBancoId = 0 ;
   this.ZV15cBancoId = 0 ;
   this.OV15cBancoId = 0 ;
   this.AV16cBancoNome = "" ;
   this.ZV16cBancoNome = "" ;
   this.OV16cBancoNome = "" ;
   this.AV17cBancoQtdeDigitoBoleto = 0 ;
   this.ZV17cBancoQtdeDigitoBoleto = 0 ;
   this.OV17cBancoQtdeDigitoBoleto = 0 ;
   this.Z947BancoId = 0 ;
   this.O947BancoId = 0 ;
   this.Z948BancoNome = "" ;
   this.O948BancoNome = "" ;
   this.Z949BancoQtdeDigitoBoleto = 0 ;
   this.O949BancoQtdeDigitoBoleto = 0 ;
   this.AV20Pagina = 0 ;
   this.ZV20Pagina = 0 ;
   this.OV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.ZV21PaginaAux = 0 ;
   this.OV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15cBancoId = 0 ;
   this.AV16cBancoNome = "" ;
   this.AV17cBancoQtdeDigitoBoleto = 0 ;
   this.AV20Pagina = 0 ;
   this.AV21PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A947BancoId = 0 ;
   this.A948BancoNome = "" ;
   this.A949BancoQtdeDigitoBoleto = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e177o2_client": ["ENTER", true] ,"e117o2_client": ["'GXM_FIRST'", true] ,"e127o2_client": ["'GXM_PREVIOUS'", true] ,"e137o2_client": ["'GXM_NEXT'", true] ,"e147o2_client": ["'GXM_LAST'", true] ,"e157o2_client": ["'PROCURAR'", true] ,"e197o2_client": ["'ATUALIZAPAGINA'", true] ,"e217o1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cBancoId',fld:'vCBANCOID'},{av:'AV16cBancoNome',fld:'vCBANCONOME'},{av:'AV17cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'BANCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BANCOID","Title")',ctrl:'BANCOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'BANCONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BANCONOME","Title")',ctrl:'BANCONOME',prop:'Title'},{ctrl:'BANCOQTDEDIGITOBOLETO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BANCOQTDEDIGITOBOLETO","Title")',ctrl:'BANCOQTDEDIGITOBOLETO',prop:'Title'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV19NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A947BancoId',fld:'BANCOID'}],[{av:'AV18BancoId',fld:'vBANCOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cBancoId',fld:'vCBANCOID'},{av:'AV16cBancoNome',fld:'vCBANCONOME'},{av:'AV17cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cBancoId',fld:'vCBANCOID'},{av:'AV16cBancoNome',fld:'vCBANCONOME'},{av:'AV17cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cBancoId',fld:'vCBANCOID'},{av:'AV16cBancoNome',fld:'vCBANCONOME'},{av:'AV17cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20Pagina',fld:'vPAGINA'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cBancoId',fld:'vCBANCOID'},{av:'AV16cBancoNome',fld:'vCBANCONOME'},{av:'AV17cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cBancoId',fld:'vCBANCOID'},{av:'AV16cBancoNome',fld:'vCBANCONOME'},{av:'AV17cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15cBancoId',fld:'vCBANCOID'},{av:'AV16cBancoNome',fld:'vCBANCONOME'},{av:'AV17cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV18BancoId", "vBANCOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultabanco());
