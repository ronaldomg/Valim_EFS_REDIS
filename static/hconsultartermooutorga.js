/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:48:40.12
*/
gx.evt.autoSkip = false;
gx.define('hconsultartermooutorga', false, function () {
   this.ServerClass =  "hconsultartermooutorga" ;
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
      this.AV22TermoOutorgaNoProcessoSaida=gx.fn.getControlValue("vTERMOOUTORGANOPROCESSOSAIDA") ;
   };
   this.e1713p2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1113p2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1213p2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1313p2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1413p2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1513p2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2013p2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2113p1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,34,37,39,41,43,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultartermooutorga",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8112,24,"TERMOOUTORGANOPROCESSO","","","TermoOutorgaNoProcesso","svchar",0,"px",20,20,"left",null,[],8112,"TermoOutorgaNoProcesso",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8081,25,"TERMOOUTORGADESCEDITAL","","","TermoOutorgaDescEdital","svchar",0,"px",40,40,"left",null,[],8081,"TermoOutorgaDescEdital",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Titulo",26,"vTITULO","","","Titulo","svchar",0,"px",50,50,"left",null,[],"Titulo","Titulo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8082,27,"TERMOOUTORGATITULO","Título","","TermoOutorgaTitulo","svchar",0,"px",150,80,"left",null,[],8082,"TermoOutorgaTitulo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8105,28,"TERMOOUTORGAVALOR","","","TermoOutorgaValor","decimal",0,"px",22,22,"right",null,[],8105,"TermoOutorgaValor",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTERMOOUTORGANOPROCESSO",gxz:"ZV19TermoOutorgaNoProcesso",gxold:"OV19TermoOutorgaNoProcesso",gxvar:"AV19TermoOutorgaNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.ZV19TermoOutorgaNoProcesso=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGANOPROCESSO",gx.O.AV19TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.AV19TermoOutorgaNoProcesso=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGANOPROCESSO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTERMOOUTORGATITULO",gxz:"ZV20TermoOutorgaTitulo",gxold:"OV20TermoOutorgaTitulo",gxvar:"AV20TermoOutorgaTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TermoOutorgaTitulo=Value},v2z:function(Value){gx.O.ZV20TermoOutorgaTitulo=Value},v2c:function(){gx.fn.setControlValue("vTERMOOUTORGATITULO",gx.O.AV20TermoOutorgaTitulo,0)},c2v:function(){gx.O.AV20TermoOutorgaTitulo=this.val()},val:function(){return gx.fn.getControlValue("vTERMOOUTORGATITULO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOPROCESSO",gxz:"Z8112TermoOutorgaNoProcesso",gxold:"O8112TermoOutorgaNoProcesso",gxvar:"A8112TermoOutorgaNoProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8112TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.Z8112TermoOutorgaNoProcesso=Value},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGANOPROCESSO",row || gx.fn.currentGridRowImpl(23),gx.O.A8112TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.A8112TermoOutorgaNoProcesso=this.val()},val:function(row){return gx.fn.getGridControlValue("TERMOOUTORGANOPROCESSO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGADESCEDITAL",gxz:"Z8081TermoOutorgaDescEdital",gxold:"O8081TermoOutorgaDescEdital",gxvar:"A8081TermoOutorgaDescEdital",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8081TermoOutorgaDescEdital=Value},v2z:function(Value){gx.O.Z8081TermoOutorgaDescEdital=Value},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGADESCEDITAL",row || gx.fn.currentGridRowImpl(23),gx.O.A8081TermoOutorgaDescEdital,0)},c2v:function(){gx.O.A8081TermoOutorgaDescEdital=this.val()},val:function(row){return gx.fn.getGridControlValue("TERMOOUTORGADESCEDITAL",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTITULO",gxz:"ZV21Titulo",gxold:"OV21Titulo",gxvar:"AV21Titulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV21Titulo=Value},v2z:function(Value){gx.O.ZV21Titulo=Value},v2c:function(row){gx.fn.setGridControlValue("vTITULO",row || gx.fn.currentGridRowImpl(23),gx.O.AV21Titulo,0)},c2v:function(){gx.O.AV21Titulo=this.val()},val:function(row){return gx.fn.getGridControlValue("vTITULO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:150,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGATITULO",gxz:"Z8082TermoOutorgaTitulo",gxold:"O8082TermoOutorgaTitulo",gxvar:"A8082TermoOutorgaTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8082TermoOutorgaTitulo=Value},v2z:function(Value){gx.O.Z8082TermoOutorgaTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("TERMOOUTORGATITULO",row || gx.fn.currentGridRowImpl(23),gx.O.A8082TermoOutorgaTitulo,0)},c2v:function(){gx.O.A8082TermoOutorgaTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("TERMOOUTORGATITULO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TERMOOUTORGAVALOR",gxz:"Z8105TermoOutorgaValor",gxold:"O8105TermoOutorgaValor",gxvar:"A8105TermoOutorgaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8105TermoOutorgaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8105TermoOutorgaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TERMOOUTORGAVALOR",row || gx.fn.currentGridRowImpl(23),gx.O.A8105TermoOutorgaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8105TermoOutorgaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TERMOOUTORGAVALOR",row || gx.fn.currentGridRowImpl(23),'.',',')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLENAV",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV19TermoOutorgaNoProcesso = "" ;
   this.ZV19TermoOutorgaNoProcesso = "" ;
   this.OV19TermoOutorgaNoProcesso = "" ;
   this.AV20TermoOutorgaTitulo = "" ;
   this.ZV20TermoOutorgaTitulo = "" ;
   this.OV20TermoOutorgaTitulo = "" ;
   this.Z8112TermoOutorgaNoProcesso = "" ;
   this.O8112TermoOutorgaNoProcesso = "" ;
   this.Z8081TermoOutorgaDescEdital = "" ;
   this.O8081TermoOutorgaDescEdital = "" ;
   this.ZV21Titulo = "" ;
   this.OV21Titulo = "" ;
   this.Z8082TermoOutorgaTitulo = "" ;
   this.O8082TermoOutorgaTitulo = "" ;
   this.Z8105TermoOutorgaValor = 0 ;
   this.O8105TermoOutorgaValor = 0 ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV19TermoOutorgaNoProcesso = "" ;
   this.AV20TermoOutorgaTitulo = "" ;
   this.AV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV22TermoOutorgaNoProcessoSaida = "" ;
   this.A8111TermoOutorgaEmpresaId = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.A8081TermoOutorgaDescEdital = "" ;
   this.AV21Titulo = "" ;
   this.A8082TermoOutorgaTitulo = "" ;
   this.A8105TermoOutorgaValor = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e1713p2_client": ["ENTER", true] ,"e1113p2_client": ["'GXM_FIRST'", true] ,"e1213p2_client": ["'GXM_PREVIOUS'", true] ,"e1313p2_client": ["'GXM_NEXT'", true] ,"e1413p2_client": ["'GXM_LAST'", true] ,"e1513p2_client": ["'PROCURAR'", true] ,"e2013p2_client": ["'ATUALIZAPAGINA'", true] ,"e2113p1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV20TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TERMOOUTORGANOPROCESSO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TERMOOUTORGANOPROCESSO","Title")',ctrl:'TERMOOUTORGANOPROCESSO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'vTITULO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vTITULO","Title")',ctrl:'vTITULO',prop:'Title'},{ctrl:'TERMOOUTORGADESCEDITAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TERMOOUTORGADESCEDITAL","Title")',ctrl:'TERMOOUTORGADESCEDITAL',prop:'Title'},{ctrl:'TERMOOUTORGAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TERMOOUTORGAVALOR","Title")',ctrl:'TERMOOUTORGAVALOR',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8112TermoOutorgaNoProcesso',fld:'TERMOOUTORGANOPROCESSO'}],[{av:'AV22TermoOutorgaNoProcessoSaida',fld:'vTERMOOUTORGANOPROCESSOSAIDA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV20TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV20TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV20TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV20TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV20TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'}],[{av:'AV21Titulo',fld:'vTITULO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19TermoOutorgaNoProcesso',fld:'vTERMOOUTORGANOPROCESSO'},{av:'AV20TermoOutorgaTitulo',fld:'vTERMOOUTORGATITULO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A8082TermoOutorgaTitulo',fld:'TERMOOUTORGATITULO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV22TermoOutorgaNoProcessoSaida", "vTERMOOUTORGANOPROCESSOSAIDA", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A8082TermoOutorgaTitulo", rfrProp:"Value", gxAttId:"8082"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultartermooutorga());
