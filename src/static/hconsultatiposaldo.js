/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:17:48.2
*/
gx.evt.autoSkip = false;
gx.define('hconsultatiposaldo', false, function () {
   this.ServerClass =  "hconsultatiposaldo" ;
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
      this.AV20TipoSaldoEnt=gx.fn.getIntegerValue("vTIPOSALDOENT",'.') ;
      this.AV19TipoSaldoRet=gx.fn.getIntegerValue("vTIPOSALDORET",'.') ;
   };
   this.e18tn2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11tn2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12tn2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13tn2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14tn2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15tn2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16tn2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e21tn2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e22tn1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,33,36,39,41,43,45,47,48,49,50];
   this.GXLastCtrlId =50;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatiposaldo",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1569,24,"TIPOSALDOID","","","TipoSaldoId","int",0,"px",7,7,"right",null,[],1569,"TipoSaldoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1570,25,"TIPOSALDODESCRICAO","","","TipoSaldoDescricao","svchar",0,"px",20,20,"left",null,[],1570,"TipoSaldoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Snsangria",26,"vSNSANGRIA","","","SnSangria","char",0,"px",4,4,"left",null,[],"Snsangria","SnSangria",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4336,27,"TIPOSALDOSNSANGRIA","Sangria","","TipoSaldoSnSangria","char",0,"px",1,1,"left",null,[],4336,"TipoSaldoSnSangria",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOSALDOID",gxz:"ZV16TipoSaldoId",gxold:"OV16TipoSaldoId",gxvar:"AV16TipoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16TipoSaldoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOSALDOID",gx.O.AV16TipoSaldoId,0)},c2v:function(){gx.O.AV16TipoSaldoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOSALDOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOSALDODESCRICAO",gxz:"ZV17TipoSaldoDescricao",gxold:"OV17TipoSaldoDescricao",gxvar:"AV17TipoSaldoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TipoSaldoDescricao=Value},v2z:function(Value){gx.O.ZV17TipoSaldoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOSALDODESCRICAO",gx.O.AV17TipoSaldoDescricao,0)},c2v:function(){gx.O.AV17TipoSaldoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSALDODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDOID",gxz:"Z1569TipoSaldoId",gxold:"O1569TipoSaldoId",gxvar:"A1569TipoSaldoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1569TipoSaldoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1569TipoSaldoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDOID",row || gx.fn.currentGridRowImpl(23),gx.O.A1569TipoSaldoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1569TipoSaldoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOSALDOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDODESCRICAO",gxz:"Z1570TipoSaldoDescricao",gxold:"O1570TipoSaldoDescricao",gxvar:"A1570TipoSaldoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1570TipoSaldoDescricao=Value},v2z:function(Value){gx.O.Z1570TipoSaldoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A1570TipoSaldoDescricao,0)},c2v:function(){gx.O.A1570TipoSaldoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSALDODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNSANGRIA",gxz:"ZV18SnSangria",gxold:"OV18SnSangria",gxvar:"AV18SnSangria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV18SnSangria=Value},v2z:function(Value){gx.O.ZV18SnSangria=Value},v2c:function(row){gx.fn.setGridControlValue("vSNSANGRIA",row || gx.fn.currentGridRowImpl(23),gx.O.AV18SnSangria,0)},c2v:function(){gx.O.AV18SnSangria=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNSANGRIA",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOSALDOSNSANGRIA",gxz:"Z4336TipoSaldoSnSangria",gxold:"O4336TipoSaldoSnSangria",gxvar:"A4336TipoSaldoSnSangria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4336TipoSaldoSnSangria=Value},v2z:function(Value){gx.O.Z4336TipoSaldoSnSangria=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOSALDOSNSANGRIA",row || gx.fn.currentGridRowImpl(23),gx.O.A4336TipoSaldoSnSangria,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4336TipoSaldoSnSangria=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOSALDOSNSANGRIA",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLENAV",grid:0};
   GXValidFnc[36]={fld:"IMAGE5",grid:0};
   GXValidFnc[39]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[47]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV22Pagina",gxold:"OV22Pagina",gxvar:"AV22Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV22Pagina)},c2v:function(){gx.O.AV22Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV23PaginaAux",gxold:"OV23PaginaAux",gxvar:"AV23PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV23PaginaAux,0)},c2v:function(){gx.O.AV23PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16TipoSaldoId = 0 ;
   this.ZV16TipoSaldoId = 0 ;
   this.OV16TipoSaldoId = 0 ;
   this.AV17TipoSaldoDescricao = "" ;
   this.ZV17TipoSaldoDescricao = "" ;
   this.OV17TipoSaldoDescricao = "" ;
   this.Z1569TipoSaldoId = 0 ;
   this.O1569TipoSaldoId = 0 ;
   this.Z1570TipoSaldoDescricao = "" ;
   this.O1570TipoSaldoDescricao = "" ;
   this.ZV18SnSangria = "" ;
   this.OV18SnSangria = "" ;
   this.Z4336TipoSaldoSnSangria = "" ;
   this.O4336TipoSaldoSnSangria = "" ;
   this.AV22Pagina = 0 ;
   this.ZV22Pagina = 0 ;
   this.OV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.ZV23PaginaAux = 0 ;
   this.OV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16TipoSaldoId = 0 ;
   this.AV17TipoSaldoDescricao = "" ;
   this.AV22Pagina = 0 ;
   this.AV23PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19TipoSaldoRet = 0 ;
   this.AV20TipoSaldoEnt = 0 ;
   this.A1568TipoSaldoEmpresaId = "" ;
   this.A1569TipoSaldoId = 0 ;
   this.A1570TipoSaldoDescricao = "" ;
   this.AV18SnSangria = "" ;
   this.A4336TipoSaldoSnSangria = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e18tn2_client": ["ENTER", true] ,"e11tn2_client": ["'GXM_FIRST'", true] ,"e12tn2_client": ["'GXM_PREVIOUS'", true] ,"e13tn2_client": ["'GXM_NEXT'", true] ,"e14tn2_client": ["'GXM_LAST'", true] ,"e15tn2_client": ["'PROCURAR'", true] ,"e16tn2_client": ["'NOVO'", true] ,"e21tn2_client": ["'ATUALIZAPAGINA'", true] ,"e22tn1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV17TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20TipoSaldoEnt',fld:'vTIPOSALDOENT',hsh:true}],[{av:'AV16TipoSaldoId',fld:'vTIPOSALDOID'},{ctrl:'TIPOSALDOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOSALDOID","Title")',ctrl:'TIPOSALDOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPOSALDODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOSALDODESCRICAO","Title")',ctrl:'TIPOSALDODESCRICAO',prop:'Title'},{ctrl:'vSNSANGRIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vSNSANGRIA","Title")',ctrl:'vSNSANGRIA',prop:'Title'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV21NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A1569TipoSaldoId',fld:'TIPOSALDOID'}],[{av:'AV19TipoSaldoRet',fld:'vTIPOSALDORET'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV17TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TipoSaldoEnt',fld:'vTIPOSALDOENT',hsh:true},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV17TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TipoSaldoEnt',fld:'vTIPOSALDOENT',hsh:true},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'},{av:'AV22Pagina',fld:'vPAGINA'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV17TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TipoSaldoEnt',fld:'vTIPOSALDOENT',hsh:true},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'},{av:'AV22Pagina',fld:'vPAGINA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV17TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TipoSaldoEnt',fld:'vTIPOSALDOENT',hsh:true},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'},{av:'AV23PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'}],[{av:'AV18SnSangria',fld:'vSNSANGRIA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV17TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TipoSaldoEnt',fld:'vTIPOSALDOENT',hsh:true},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoSaldoId',fld:'vTIPOSALDOID'},{av:'AV17TipoSaldoDescricao',fld:'vTIPOSALDODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20TipoSaldoEnt',fld:'vTIPOSALDOENT',hsh:true},{av:'A4336TipoSaldoSnSangria',fld:'TIPOSALDOSNSANGRIA'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20TipoSaldoEnt", "vTIPOSALDOENT", 0, "int");
   this.setVCMap("AV19TipoSaldoRet", "vTIPOSALDORET", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20TipoSaldoEnt", "vTIPOSALDOENT", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV20TipoSaldoEnt"});
   GridContainer.addRefreshingVar({rfrVar:"A4336TipoSaldoSnSangria", rfrProp:"Value", gxAttId:"4336"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatiposaldo());
