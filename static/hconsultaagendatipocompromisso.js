/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:3:35.54
*/
gx.evt.autoSkip = false;
gx.define('hconsultaagendatipocompromisso', false, function () {
   this.ServerClass =  "hconsultaagendatipocompromisso" ;
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
      this.AV21AgendaTipoCompromissoIdPar=gx.fn.getIntegerValue("vAGENDATIPOCOMPROMISSOIDPAR",'.') ;
   };
   this.e181bs2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111bs2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121bs2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131bs2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141bs2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151bs2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e161bs2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e201bs2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e221bs2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,31,34,36,38,40,42,43,44,45];
   this.GXLastCtrlId =45;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaagendatipocompromisso",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8568,24,"AGENDATIPOCOMPROMISSOID","","","AgendaTipoCompromissoId","int",0,"px",4,4,"right",null,[],8568,"AgendaTipoCompromissoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8572,25,"AGENDATIPOCOMPROMISSODESC","","","AgendaTipoCompromissoDesc","svchar",0,"px",20,20,"left",null,[],8572,"AgendaTipoCompromissoDesc",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAGENDATIPOCOMPROMISSOID",gxz:"ZV19AgendaTipoCompromissoId",gxold:"OV19AgendaTipoCompromissoId",gxvar:"AV19AgendaTipoCompromissoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AgendaTipoCompromissoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AgendaTipoCompromissoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAGENDATIPOCOMPROMISSOID",gx.O.AV19AgendaTipoCompromissoId,0)},c2v:function(){gx.O.AV19AgendaTipoCompromissoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAGENDATIPOCOMPROMISSOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vAGENDATIPOCOMPROMISSODESC",gxz:"ZV20AgendaTipoCompromissoDesc",gxold:"OV20AgendaTipoCompromissoDesc",gxvar:"AV20AgendaTipoCompromissoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AgendaTipoCompromissoDesc=Value},v2z:function(Value){gx.O.ZV20AgendaTipoCompromissoDesc=Value},v2c:function(){gx.fn.setControlValue("vAGENDATIPOCOMPROMISSODESC",gx.O.AV20AgendaTipoCompromissoDesc,0)},c2v:function(){gx.O.AV20AgendaTipoCompromissoDesc=this.val()},val:function(){return gx.fn.getControlValue("vAGENDATIPOCOMPROMISSODESC")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSOID",gxz:"Z8568AgendaTipoCompromissoId",gxold:"O8568AgendaTipoCompromissoId",gxvar:"A8568AgendaTipoCompromissoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8568AgendaTipoCompromissoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8568AgendaTipoCompromissoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AGENDATIPOCOMPROMISSOID",row || gx.fn.currentGridRowImpl(23),gx.O.A8568AgendaTipoCompromissoId,0)},c2v:function(){gx.O.A8568AgendaTipoCompromissoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AGENDATIPOCOMPROMISSOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSODESC",gxz:"Z8572AgendaTipoCompromissoDesc",gxold:"O8572AgendaTipoCompromissoDesc",gxvar:"A8572AgendaTipoCompromissoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8572AgendaTipoCompromissoDesc=Value},v2z:function(Value){gx.O.Z8572AgendaTipoCompromissoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("AGENDATIPOCOMPROMISSODESC",row || gx.fn.currentGridRowImpl(23),gx.O.A8572AgendaTipoCompromissoDesc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8572AgendaTipoCompromissoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("AGENDATIPOCOMPROMISSODESC",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLENAV",grid:0};
   GXValidFnc[34]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[42]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV19AgendaTipoCompromissoId = 0 ;
   this.ZV19AgendaTipoCompromissoId = 0 ;
   this.OV19AgendaTipoCompromissoId = 0 ;
   this.AV20AgendaTipoCompromissoDesc = "" ;
   this.ZV20AgendaTipoCompromissoDesc = "" ;
   this.OV20AgendaTipoCompromissoDesc = "" ;
   this.Z8568AgendaTipoCompromissoId = 0 ;
   this.O8568AgendaTipoCompromissoId = 0 ;
   this.Z8572AgendaTipoCompromissoDesc = "" ;
   this.O8572AgendaTipoCompromissoDesc = "" ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV19AgendaTipoCompromissoId = 0 ;
   this.AV20AgendaTipoCompromissoDesc = "" ;
   this.AV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV21AgendaTipoCompromissoIdPar = 0 ;
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.A8572AgendaTipoCompromissoDesc = "" ;
   this.Events = {"e181bs2_client": ["ENTER", true] ,"e111bs2_client": ["'GXM_FIRST'", true] ,"e121bs2_client": ["'GXM_PREVIOUS'", true] ,"e131bs2_client": ["'GXM_NEXT'", true] ,"e141bs2_client": ["'GXM_LAST'", true] ,"e151bs2_client": ["'PROCURAR'", true] ,"e161bs2_client": ["'FECHAR'", true] ,"e201bs2_client": ["'ATUALIZAPAGINA'", true] ,"e221bs2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV20AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'AGENDATIPOCOMPROMISSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("AGENDATIPOCOMPROMISSOID","Title")',ctrl:'AGENDATIPOCOMPROMISSOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'AGENDATIPOCOMPROMISSODESC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("AGENDATIPOCOMPROMISSODESC","Title")',ctrl:'AGENDATIPOCOMPROMISSODESC',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8568AgendaTipoCompromissoId',fld:'AGENDATIPOCOMPROMISSOID'}],[{av:'AV21AgendaTipoCompromissoIdPar',fld:'vAGENDATIPOCOMPROMISSOIDPAR'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV20AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV20AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV20AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV20AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV20AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21AgendaTipoCompromissoIdPar',fld:'vAGENDATIPOCOMPROMISSOIDPAR'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19AgendaTipoCompromissoId',fld:'vAGENDATIPOCOMPROMISSOID'},{av:'AV20AgendaTipoCompromissoDesc',fld:'vAGENDATIPOCOMPROMISSODESC'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV21AgendaTipoCompromissoIdPar", "vAGENDATIPOCOMPROMISSOIDPAR", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaagendatipocompromisso());
