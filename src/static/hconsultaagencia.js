/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:56.62
*/
gx.evt.autoSkip = false;
gx.define('hconsultaagencia', false, function () {
   this.ServerClass =  "hconsultaagencia" ;
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
      this.AV19BancoId=gx.fn.getIntegerValue("vBANCOID",'.') ;
      this.AV18BancoAgenciaId=gx.fn.getIntegerValue("vBANCOAGENCIAID",'.') ;
   };
   this.e177q2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e117q2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e127q2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e137q2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e147q2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e157q2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e197q2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e217q1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,36,37,43,46,48,50,52,54,55,56,57];
   this.GXLastCtrlId =57;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",35,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaagencia",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(953,36,"BANCOAGENCIAID","","","BancoAgenciaId","int",0,"px",4,4,"right",null,[],953,"BancoAgenciaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(954,37,"BANCOAGENCIANOME","","","BancoAgenciaNome","svchar",0,"px",40,40,"left",null,[],954,"BancoAgenciaNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCBANCOID",gxz:"ZV16cBancoId",gxold:"OV16cBancoId",gxvar:"AV16cBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16cBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOID",gx.O.AV16cBancoId,0)},c2v:function(){gx.O.AV16cBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCBANCONOME",gxz:"ZV20cBancoNome",gxold:"OV20cBancoNome",gxvar:"AV20cBancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20cBancoNome=Value},v2z:function(Value){gx.O.ZV20cBancoNome=Value},v2c:function(){gx.fn.setControlValue("vCBANCONOME",gx.O.AV20cBancoNome,0)},c2v:function(){gx.O.AV20cBancoNome=this.val()},val:function(){return gx.fn.getControlValue("vCBANCONOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCBANCOAGENCIAID",gxz:"ZV15cBancoAgenciaId",gxold:"OV15cBancoAgenciaId",gxvar:"AV15cBancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15cBancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15cBancoAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOAGENCIAID",gx.O.AV15cBancoAgenciaId,0)},c2v:function(){gx.O.AV15cBancoAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCBANCOAGENCIANOME",gxz:"ZV17cBancoAgenciaNome",gxold:"OV17cBancoAgenciaNome",gxvar:"AV17cBancoAgenciaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cBancoAgenciaNome=Value},v2z:function(Value){gx.O.ZV17cBancoAgenciaNome=Value},v2c:function(){gx.fn.setControlValue("vCBANCOAGENCIANOME",gx.O.AV17cBancoAgenciaNome,0)},c2v:function(){gx.O.AV17cBancoAgenciaNome=this.val()},val:function(){return gx.fn.getControlValue("vCBANCOAGENCIANOME")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCOAGENCIAID",gxz:"Z953BancoAgenciaId",gxold:"O953BancoAgenciaId",gxvar:"A953BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A953BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z953BancoAgenciaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(35),gx.O.A953BancoAgenciaId,0)},c2v:function(){gx.O.A953BancoAgenciaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOAGENCIAID",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCOAGENCIANOME",gxz:"Z954BancoAgenciaNome",gxold:"O954BancoAgenciaNome",gxvar:"A954BancoAgenciaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A954BancoAgenciaNome=Value},v2z:function(Value){gx.O.Z954BancoAgenciaNome=Value},v2c:function(row){gx.fn.setGridControlValue("BANCOAGENCIANOME",row || gx.fn.currentGridRowImpl(35),gx.O.A954BancoAgenciaNome,0)},c2v:function(){gx.O.A954BancoAgenciaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCOAGENCIANOME",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TABLENAV",grid:0};
   GXValidFnc[46]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[48]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[50]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[52]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[54]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16cBancoId = 0 ;
   this.ZV16cBancoId = 0 ;
   this.OV16cBancoId = 0 ;
   this.AV20cBancoNome = "" ;
   this.ZV20cBancoNome = "" ;
   this.OV20cBancoNome = "" ;
   this.AV15cBancoAgenciaId = 0 ;
   this.ZV15cBancoAgenciaId = 0 ;
   this.OV15cBancoAgenciaId = 0 ;
   this.AV17cBancoAgenciaNome = "" ;
   this.ZV17cBancoAgenciaNome = "" ;
   this.OV17cBancoAgenciaNome = "" ;
   this.Z953BancoAgenciaId = 0 ;
   this.O953BancoAgenciaId = 0 ;
   this.Z954BancoAgenciaNome = "" ;
   this.O954BancoAgenciaNome = "" ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16cBancoId = 0 ;
   this.AV20cBancoNome = "" ;
   this.AV15cBancoAgenciaId = 0 ;
   this.AV17cBancoAgenciaNome = "" ;
   this.AV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19BancoId = 0 ;
   this.AV18BancoAgenciaId = 0 ;
   this.A947BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A953BancoAgenciaId = 0 ;
   this.A954BancoAgenciaNome = "" ;
   this.A948BancoNome = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e177q2_client": ["ENTER", true] ,"e117q2_client": ["'GXM_FIRST'", true] ,"e127q2_client": ["'GXM_PREVIOUS'", true] ,"e137q2_client": ["'GXM_NEXT'", true] ,"e147q2_client": ["'GXM_LAST'", true] ,"e157q2_client": ["'PROCURAR'", true] ,"e197q2_client": ["'ATUALIZAPAGINA'", true] ,"e217q1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cBancoId',fld:'vCBANCOID'},{av:'AV15cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV17cBancoAgenciaNome',fld:'vCBANCOAGENCIANOME'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'BANCOAGENCIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BANCOAGENCIAID","Title")',ctrl:'BANCOAGENCIAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'BANCOAGENCIANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BANCOAGENCIANOME","Title")',ctrl:'BANCOAGENCIANOME',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'}],[{av:'AV18BancoAgenciaId',fld:'vBANCOAGENCIAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cBancoId',fld:'vCBANCOID'},{av:'AV15cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV17cBancoAgenciaNome',fld:'vCBANCOAGENCIANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cBancoId',fld:'vCBANCOID'},{av:'AV15cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV17cBancoAgenciaNome',fld:'vCBANCOAGENCIANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cBancoId',fld:'vCBANCOID'},{av:'AV15cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV17cBancoAgenciaNome',fld:'vCBANCOAGENCIANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cBancoId',fld:'vCBANCOID'},{av:'AV15cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV17cBancoAgenciaNome',fld:'vCBANCOAGENCIANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cBancoId',fld:'vCBANCOID'},{av:'AV15cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV17cBancoAgenciaNome',fld:'vCBANCOAGENCIANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16cBancoId',fld:'vCBANCOID'},{av:'AV15cBancoAgenciaId',fld:'vCBANCOAGENCIAID'},{av:'AV17cBancoAgenciaNome',fld:'vCBANCOAGENCIANOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19BancoId", "vBANCOID", 0, "int");
   this.setVCMap("AV18BancoAgenciaId", "vBANCOAGENCIAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaagencia());
