/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:36.16
*/
gx.evt.autoSkip = false;
gx.define('hconsultamenunivel1', false, function () {
   this.ServerClass =  "hconsultamenunivel1" ;
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
      this.AV11MenuNivel1Id=gx.fn.getIntegerValue("vMENUNIVEL1ID",'.') ;
   };
   this.e17182_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11182_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12182_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13182_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14182_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15182_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19182_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21181_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,31,33,39,40,41,42,43,49,52,54,56,58,60,61,62,63,64,65];
   this.GXLastCtrlId =65;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",38,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamenunivel1",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(76,39,"MENUNIVEL1ID","","","MenuNivel1Id","int",0,"px",7,7,"right",null,[],76,"MenuNivel1Id",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(79,40,"MENUNIVEL1NOME","","","MenuNivel1Nome","svchar",0,"px",40,40,"left",null,[],79,"MenuNivel1Nome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(373,41,"MENUNIVEL1ORDEM","","","MenuNivel1Ordem","int",0,"px",4,4,"right",null,[],373,"MenuNivel1Ordem",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(367,42,"SISTEMANIVEL1","","","SistemaNivel1","char",0,"px",8,8,"left",null,[],367,"SistemaNivel1",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(368,43,"PROGRAMANIVEL1","","","ProgramaNivel1","int",0,"px",4,4,"right",null,[],368,"ProgramaNivel1",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMENUNIVEL1ID",gxz:"ZV12cMenuNivel1Id",gxold:"OV12cMenuNivel1Id",gxvar:"AV12cMenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cMenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cMenuNivel1Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL1ID",gx.O.AV12cMenuNivel1Id,0)},c2v:function(){gx.O.AV12cMenuNivel1Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL1ID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMENUNIVEL1NOME",gxz:"ZV13cMenuNivel1Nome",gxold:"OV13cMenuNivel1Nome",gxvar:"AV13cMenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13cMenuNivel1Nome=Value},v2z:function(Value){gx.O.ZV13cMenuNivel1Nome=Value},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL1NOME",gx.O.AV13cMenuNivel1Nome,0)},c2v:function(){gx.O.AV13cMenuNivel1Nome=this.val()},val:function(){return gx.fn.getControlValue("vCMENUNIVEL1NOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCMENUNIVEL1ORDEM",gxz:"ZV14cMenuNivel1Ordem",gxold:"OV14cMenuNivel1Ordem",gxvar:"AV14cMenuNivel1Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14cMenuNivel1Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14cMenuNivel1Ordem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMENUNIVEL1ORDEM",gx.O.AV14cMenuNivel1Ordem,0)},c2v:function(){gx.O.AV14cMenuNivel1Ordem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMENUNIVEL1ORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCSISTEMANIVEL1",gxz:"ZV15cSistemaNivel1",gxold:"OV15cSistemaNivel1",gxvar:"AV15cSistemaNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15cSistemaNivel1=Value},v2z:function(Value){gx.O.ZV15cSistemaNivel1=Value},v2c:function(){gx.fn.setControlValue("vCSISTEMANIVEL1",gx.O.AV15cSistemaNivel1,0)},c2v:function(){gx.O.AV15cSistemaNivel1=this.val()},val:function(){return gx.fn.getControlValue("vCSISTEMANIVEL1")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPROGRAMANIVEL1",gxz:"ZV16cProgramaNivel1",gxold:"OV16cProgramaNivel1",gxvar:"AV16cProgramaNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cProgramaNivel1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16cProgramaNivel1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROGRAMANIVEL1",gx.O.AV16cProgramaNivel1,0)},c2v:function(){gx.O.AV16cProgramaNivel1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROGRAMANIVEL1",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1ID",gxz:"Z76MenuNivel1Id",gxold:"O76MenuNivel1Id",gxvar:"A76MenuNivel1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A76MenuNivel1Id=gx.num.intval(Value)},v2z:function(Value){gx.O.Z76MenuNivel1Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(38),gx.O.A76MenuNivel1Id,0)},c2v:function(){gx.O.A76MenuNivel1Id=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL1ID",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1NOME",gxz:"Z79MenuNivel1Nome",gxold:"O79MenuNivel1Nome",gxvar:"A79MenuNivel1Nome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A79MenuNivel1Nome=Value},v2z:function(Value){gx.O.Z79MenuNivel1Nome=Value},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1NOME",row || gx.fn.currentGridRowImpl(38),gx.O.A79MenuNivel1Nome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A79MenuNivel1Nome=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUNIVEL1NOME",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENUNIVEL1ORDEM",gxz:"Z373MenuNivel1Ordem",gxold:"O373MenuNivel1Ordem",gxvar:"A373MenuNivel1Ordem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A373MenuNivel1Ordem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z373MenuNivel1Ordem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUNIVEL1ORDEM",row || gx.fn.currentGridRowImpl(38),gx.O.A373MenuNivel1Ordem,0)},c2v:function(){gx.O.A373MenuNivel1Ordem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUNIVEL1ORDEM",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMANIVEL1",gxz:"Z367SistemaNivel1",gxold:"O367SistemaNivel1",gxvar:"A367SistemaNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A367SistemaNivel1=Value},v2z:function(Value){gx.O.Z367SistemaNivel1=Value},v2c:function(row){gx.fn.setGridControlValue("SISTEMANIVEL1",row || gx.fn.currentGridRowImpl(38),gx.O.A367SistemaNivel1,0)},c2v:function(){gx.O.A367SistemaNivel1=this.val()},val:function(row){return gx.fn.getGridControlValue("SISTEMANIVEL1",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANIVEL1",gxz:"Z368ProgramaNivel1",gxold:"O368ProgramaNivel1",gxvar:"A368ProgramaNivel1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A368ProgramaNivel1=gx.num.intval(Value)},v2z:function(Value){gx.O.Z368ProgramaNivel1=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANIVEL1",row || gx.fn.currentGridRowImpl(38),gx.O.A368ProgramaNivel1,0)},c2v:function(){gx.O.A368ProgramaNivel1=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMANIVEL1",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLENAV",grid:0};
   GXValidFnc[52]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[54]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[56]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[58]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[60]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"PROMPT_CSISTEMANIVEL1",grid:0};
   GXValidFnc[65]={fld:"PROMPT_CPROGRAMANIVEL1",grid:0};
   this.AV12cMenuNivel1Id = 0 ;
   this.ZV12cMenuNivel1Id = 0 ;
   this.OV12cMenuNivel1Id = 0 ;
   this.AV13cMenuNivel1Nome = "" ;
   this.ZV13cMenuNivel1Nome = "" ;
   this.OV13cMenuNivel1Nome = "" ;
   this.AV14cMenuNivel1Ordem = 0 ;
   this.ZV14cMenuNivel1Ordem = 0 ;
   this.OV14cMenuNivel1Ordem = 0 ;
   this.AV15cSistemaNivel1 = "" ;
   this.ZV15cSistemaNivel1 = "" ;
   this.OV15cSistemaNivel1 = "" ;
   this.AV16cProgramaNivel1 = 0 ;
   this.ZV16cProgramaNivel1 = 0 ;
   this.OV16cProgramaNivel1 = 0 ;
   this.Z76MenuNivel1Id = 0 ;
   this.O76MenuNivel1Id = 0 ;
   this.Z79MenuNivel1Nome = "" ;
   this.O79MenuNivel1Nome = "" ;
   this.Z373MenuNivel1Ordem = 0 ;
   this.O373MenuNivel1Ordem = 0 ;
   this.Z367SistemaNivel1 = "" ;
   this.O367SistemaNivel1 = "" ;
   this.Z368ProgramaNivel1 = 0 ;
   this.O368ProgramaNivel1 = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV12cMenuNivel1Id = 0 ;
   this.AV13cMenuNivel1Nome = "" ;
   this.AV14cMenuNivel1Ordem = 0 ;
   this.AV15cSistemaNivel1 = "" ;
   this.AV16cProgramaNivel1 = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV19Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV11MenuNivel1Id = 0 ;
   this.A76MenuNivel1Id = 0 ;
   this.A79MenuNivel1Nome = "" ;
   this.A373MenuNivel1Ordem = 0 ;
   this.A367SistemaNivel1 = "" ;
   this.A368ProgramaNivel1 = 0 ;
   this.Events = {"e17182_client": ["ENTER", true] ,"e11182_client": ["'GXM_FIRST'", true] ,"e12182_client": ["'GXM_PREVIOUS'", true] ,"e13182_client": ["'GXM_NEXT'", true] ,"e14182_client": ["'GXM_LAST'", true] ,"e15182_client": ["'PROCURAR'", true] ,"e19182_client": ["'ATUALIZAPAGINA'", true] ,"e21181_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV14cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV15cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV16cProgramaNivel1',fld:'vCPROGRAMANIVEL1'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MENUNIVEL1ID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL1ID","Title")',ctrl:'MENUNIVEL1ID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MENUNIVEL1NOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL1NOME","Title")',ctrl:'MENUNIVEL1NOME',prop:'Title'},{ctrl:'MENUNIVEL1ORDEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUNIVEL1ORDEM","Title")',ctrl:'MENUNIVEL1ORDEM',prop:'Title'},{ctrl:'SISTEMANIVEL1',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SISTEMANIVEL1","Title")',ctrl:'SISTEMANIVEL1',prop:'Title'},{ctrl:'PROGRAMANIVEL1',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANIVEL1","Title")',ctrl:'PROGRAMANIVEL1',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A76MenuNivel1Id',fld:'MENUNIVEL1ID'}],[{av:'AV11MenuNivel1Id',fld:'vMENUNIVEL1ID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV14cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV15cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV16cProgramaNivel1',fld:'vCPROGRAMANIVEL1'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV14cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV15cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV16cProgramaNivel1',fld:'vCPROGRAMANIVEL1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV14cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV15cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV16cProgramaNivel1',fld:'vCPROGRAMANIVEL1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV14cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV15cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV16cProgramaNivel1',fld:'vCPROGRAMANIVEL1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV14cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV15cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV16cProgramaNivel1',fld:'vCPROGRAMANIVEL1'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV12cMenuNivel1Id',fld:'vCMENUNIVEL1ID'},{av:'AV13cMenuNivel1Nome',fld:'vCMENUNIVEL1NOME'},{av:'AV14cMenuNivel1Ordem',fld:'vCMENUNIVEL1ORDEM'},{av:'AV15cSistemaNivel1',fld:'vCSISTEMANIVEL1'},{av:'AV16cProgramaNivel1',fld:'vCPROGRAMANIVEL1'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setPrompt("PROMPT_CSISTEMANIVEL1", [28]);
   this.setPrompt("PROMPT_CPROGRAMANIVEL1", [33]);
   this.setVCMap("AV11MenuNivel1Id", "vMENUNIVEL1ID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamenunivel1());
