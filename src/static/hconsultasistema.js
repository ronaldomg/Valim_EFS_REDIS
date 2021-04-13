/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:29.71
*/
gx.evt.autoSkip = false;
gx.define('hconsultasistema', false, function () {
   this.ServerClass =  "hconsultasistema" ;
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
      this.AV8pSistemaId=gx.fn.getControlValue("vPSISTEMAID") ;
   };
   this.e171j2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111j2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121j2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131j2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141j2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151j2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e191j2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211j1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasistema",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(140,29,"SISTEMAID","","","SistemaId","char",0,"px",8,8,"left",null,[],140,"SistemaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(539,30,"SISTEMANOME","","","SistemaNome","svchar",0,"px",40,40,"left",null,[],539,"SistemaNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(540,31,"SISTEMAVERSAO","","","SistemaVersao","int",0,"px",9,9,"right",null,[],540,"SistemaVersao",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCSISTEMAID",gxz:"ZV5cSistemaId",gxold:"OV5cSistemaId",gxvar:"AV5cSistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5cSistemaId=Value},v2z:function(Value){gx.O.ZV5cSistemaId=Value},v2c:function(){gx.fn.setControlValue("vCSISTEMAID",gx.O.AV5cSistemaId,0)},c2v:function(){gx.O.AV5cSistemaId=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCSISTEMANOME",gxz:"ZV6cSistemaNome",gxold:"OV6cSistemaNome",gxvar:"AV6cSistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSistemaNome=Value},v2z:function(Value){gx.O.ZV6cSistemaNome=Value},v2c:function(){gx.fn.setControlValue("vCSISTEMANOME",gx.O.AV6cSistemaNome,0)},c2v:function(){gx.O.AV6cSistemaNome=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMANOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCSISTEMAVERSAO",gxz:"ZV7cSistemaVersao",gxold:"OV7cSistemaVersao",gxvar:"AV7cSistemaVersao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSistemaVersao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cSistemaVersao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSISTEMAVERSAO",gx.O.AV7cSistemaVersao,0)},c2v:function(){gx.O.AV7cSistemaVersao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSISTEMAVERSAO",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(28),gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMANOME",gxz:"Z539SistemaNome",gxold:"O539SistemaNome",gxvar:"A539SistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A539SistemaNome=Value},v2z:function(Value){gx.O.Z539SistemaNome=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMANOME",row || gx.fn.currentGridRowImpl(28),gx.O.A539SistemaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A539SistemaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMANOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAVERSAO",gxz:"Z540SistemaVersao",gxold:"O540SistemaVersao",gxvar:"A540SistemaVersao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A540SistemaVersao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z540SistemaVersao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SISTEMAVERSAO",row || gx.fn.currentGridRowImpl(28),gx.O.A540SistemaVersao,0)},c2v:function(){gx.O.A540SistemaVersao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SISTEMAVERSAO",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLENAV",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV17Pagina",gxold:"OV17Pagina",gxvar:"AV17Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV17Pagina)},c2v:function(){gx.O.AV17Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV18PaginaAux",gxold:"OV18PaginaAux",gxvar:"AV18PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV18PaginaAux,0)},c2v:function(){gx.O.AV18PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV9Orderedby",gxold:"OV9Orderedby",gxvar:"AV9Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV9Orderedby,0)},c2v:function(){gx.O.AV9Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5cSistemaId = "" ;
   this.ZV5cSistemaId = "" ;
   this.OV5cSistemaId = "" ;
   this.AV6cSistemaNome = "" ;
   this.ZV6cSistemaNome = "" ;
   this.OV6cSistemaNome = "" ;
   this.AV7cSistemaVersao = 0 ;
   this.ZV7cSistemaVersao = 0 ;
   this.OV7cSistemaVersao = 0 ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.Z539SistemaNome = "" ;
   this.O539SistemaNome = "" ;
   this.Z540SistemaVersao = 0 ;
   this.O540SistemaVersao = 0 ;
   this.AV17Pagina = 0 ;
   this.ZV17Pagina = 0 ;
   this.OV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.ZV18PaginaAux = 0 ;
   this.OV18PaginaAux = 0 ;
   this.AV9Orderedby = 0 ;
   this.ZV9Orderedby = 0 ;
   this.OV9Orderedby = 0 ;
   this.AV5cSistemaId = "" ;
   this.AV6cSistemaNome = "" ;
   this.AV7cSistemaVersao = 0 ;
   this.AV17Pagina = 0 ;
   this.AV18PaginaAux = 0 ;
   this.AV9Orderedby = 0 ;
   this.AV8pSistemaId = "" ;
   this.A140SistemaId = "" ;
   this.A539SistemaNome = "" ;
   this.A540SistemaVersao = 0 ;
   this.Events = {"e171j2_client": ["ENTER", true] ,"e111j2_client": ["'GXM_FIRST'", true] ,"e121j2_client": ["'GXM_PREVIOUS'", true] ,"e131j2_client": ["'GXM_NEXT'", true] ,"e141j2_client": ["'GXM_LAST'", true] ,"e151j2_client": ["'PROCURAR'", true] ,"e191j2_client": ["'ATUALIZAPAGINA'", true] ,"e211j1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5cSistemaId',fld:'vCSISTEMAID'},{av:'AV6cSistemaNome',fld:'vCSISTEMANOME'},{av:'AV7cSistemaVersao',fld:'vCSISTEMAVERSAO'},{av:'AV9Orderedby',fld:'vORDEREDBY'}],[{ctrl:'SISTEMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMAID","Title")',ctrl:'SISTEMAID',prop:'Title'},{av:'AV11Imagem',fld:'vIMAGEM'},{ctrl:'SISTEMANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMANOME","Title")',ctrl:'SISTEMANOME',prop:'Title'},{ctrl:'SISTEMAVERSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMAVERSAO","Title")',ctrl:'SISTEMAVERSAO',prop:'Title'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV16NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A140SistemaId',fld:'SISTEMAID'}],[{av:'AV8pSistemaId',fld:'vPSISTEMAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5cSistemaId',fld:'vCSISTEMAID'},{av:'AV6cSistemaNome',fld:'vCSISTEMANOME'},{av:'AV7cSistemaVersao',fld:'vCSISTEMAVERSAO'},{av:'AV9Orderedby',fld:'vORDEREDBY'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5cSistemaId',fld:'vCSISTEMAID'},{av:'AV6cSistemaNome',fld:'vCSISTEMANOME'},{av:'AV7cSistemaVersao',fld:'vCSISTEMAVERSAO'},{av:'AV9Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5cSistemaId',fld:'vCSISTEMAID'},{av:'AV6cSistemaNome',fld:'vCSISTEMANOME'},{av:'AV7cSistemaVersao',fld:'vCSISTEMAVERSAO'},{av:'AV9Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5cSistemaId',fld:'vCSISTEMAID'},{av:'AV6cSistemaNome',fld:'vCSISTEMANOME'},{av:'AV7cSistemaVersao',fld:'vCSISTEMAVERSAO'},{av:'AV9Orderedby',fld:'vORDEREDBY'},{av:'AV18PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5cSistemaId',fld:'vCSISTEMAID'},{av:'AV6cSistemaNome',fld:'vCSISTEMANOME'},{av:'AV7cSistemaVersao',fld:'vCSISTEMAVERSAO'},{av:'AV9Orderedby',fld:'vORDEREDBY'}],[{av:'AV9Orderedby',fld:'vORDEREDBY'},{av:'AV17Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5cSistemaId',fld:'vCSISTEMAID'},{av:'AV6cSistemaNome',fld:'vCSISTEMANOME'},{av:'AV7cSistemaVersao',fld:'vCSISTEMAVERSAO'},{av:'AV9Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV8pSistemaId", "vPSISTEMAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasistema());
