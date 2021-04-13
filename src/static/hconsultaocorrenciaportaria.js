/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:37:14.82
*/
gx.evt.autoSkip = false;
gx.define('hconsultaocorrenciaportaria', false, function () {
   this.ServerClass =  "hconsultaocorrenciaportaria" ;
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
      this.AV18OcorrenciaPortariaEmpresaId=gx.fn.getControlValue("vOCORRENCIAPORTARIAEMPRESAID") ;
      this.AV19OutOcorrenciaPortariaId=gx.fn.getIntegerValue("vOUTOCORRENCIAPORTARIAID",'.') ;
   };
   this.e17gj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11gj2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12gj2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13gj2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14gj2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15gj2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19gj2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21gj1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,34,35,41,44,46,48,50,52,53,54,55];
   this.GXLastCtrlId =55;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaocorrenciaportaria",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2663,29,"OCORRENCIAPORTARIAID","","","OcorrenciaPortariaId","int",0,"px",4,4,"right",null,[],2663,"OcorrenciaPortariaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2675,30,"OCORRENCIAPORTARIADESCRICAO","","","OcorrenciaPortariaDescricao","svchar",0,"px",35,35,"left",null,[],2675,"OcorrenciaPortariaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2676,31,"OCORRENCIAPORTARIATIPOBLOQUEIO","Tipo Bloqueio Portaria","OcorrenciaPortariaTipoBloqueio","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(2678,32,"OCORRENCIAPORTARIATIPO","Tipo","OcorrenciaPortariaTipo","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(2679,33,"OCORRENCIAPORTARIATIPOREGOBS","Tipo Registro Obs","OcorrenciaPortariaTipoRegObs","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(2677,34,"OCORRENCIAPORTARIAGERARDEBITO","Gerar Deb","OcorrenciaPortariaGerarDebito","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(2680,35,"OCORRENCIAPORTARIAAPRDESCOCOPO","Apr Portaria","OcorrenciaPortariaAprDescOcoPo","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIAPORTARIAID",gxz:"ZV15OcorrenciaPortariaId",gxold:"OV15OcorrenciaPortariaId",gxvar:"AV15OcorrenciaPortariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15OcorrenciaPortariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15OcorrenciaPortariaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPORTARIAID",gx.O.AV15OcorrenciaPortariaId,0)},c2v:function(){gx.O.AV15OcorrenciaPortariaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAPORTARIAID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIAPORTARIADESCRICAO",gxz:"ZV16OcorrenciaPortariaDescricao",gxold:"OV16OcorrenciaPortariaDescricao",gxvar:"AV16OcorrenciaPortariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16OcorrenciaPortariaDescricao=Value},v2z:function(Value){gx.O.ZV16OcorrenciaPortariaDescricao=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPORTARIADESCRICAO",gx.O.AV16OcorrenciaPortariaDescricao,0)},c2v:function(){gx.O.AV16OcorrenciaPortariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAPORTARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIAPORTARIATIPO",gxz:"ZV17OcorrenciaPortariaTipo",gxold:"OV17OcorrenciaPortariaTipo",gxvar:"AV17OcorrenciaPortariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17OcorrenciaPortariaTipo=Value},v2z:function(Value){gx.O.ZV17OcorrenciaPortariaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vOCORRENCIAPORTARIATIPO",gx.O.AV17OcorrenciaPortariaTipo)},c2v:function(){gx.O.AV17OcorrenciaPortariaTipo=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIAPORTARIATIPO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAID",gxz:"Z2663OcorrenciaPortariaId",gxold:"O2663OcorrenciaPortariaId",gxvar:"A2663OcorrenciaPortariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2663OcorrenciaPortariaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPORTARIAID",row || gx.fn.currentGridRowImpl(28),gx.O.A2663OcorrenciaPortariaId,0)},c2v:function(){gx.O.A2663OcorrenciaPortariaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIAPORTARIAID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIADESCRICAO",gxz:"Z2675OcorrenciaPortariaDescricao",gxold:"O2675OcorrenciaPortariaDescricao",gxvar:"A2675OcorrenciaPortariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2675OcorrenciaPortariaDescricao=Value},v2z:function(Value){gx.O.Z2675OcorrenciaPortariaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAPORTARIADESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A2675OcorrenciaPortariaDescricao,0)},c2v:function(){gx.O.A2675OcorrenciaPortariaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIADESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIATIPOBLOQUEIO",gxz:"Z2676OcorrenciaPortariaTipoBloqueio",gxold:"O2676OcorrenciaPortariaTipoBloqueio",gxvar:"A2676OcorrenciaPortariaTipoBloqueio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2676OcorrenciaPortariaTipoBloqueio=Value},v2z:function(Value){gx.O.Z2676OcorrenciaPortariaTipoBloqueio=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIATIPOBLOQUEIO",row || gx.fn.currentGridRowImpl(28),gx.O.A2676OcorrenciaPortariaTipoBloqueio)},c2v:function(){gx.O.A2676OcorrenciaPortariaTipoBloqueio=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIATIPOBLOQUEIO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIATIPO",gxz:"Z2678OcorrenciaPortariaTipo",gxold:"O2678OcorrenciaPortariaTipo",gxvar:"A2678OcorrenciaPortariaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2678OcorrenciaPortariaTipo=Value},v2z:function(Value){gx.O.Z2678OcorrenciaPortariaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIATIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A2678OcorrenciaPortariaTipo)},c2v:function(){gx.O.A2678OcorrenciaPortariaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIATIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIATIPOREGOBS",gxz:"Z2679OcorrenciaPortariaTipoRegObs",gxold:"O2679OcorrenciaPortariaTipoRegObs",gxvar:"A2679OcorrenciaPortariaTipoRegObs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2679OcorrenciaPortariaTipoRegObs=Value},v2z:function(Value){gx.O.Z2679OcorrenciaPortariaTipoRegObs=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIATIPOREGOBS",row || gx.fn.currentGridRowImpl(28),gx.O.A2679OcorrenciaPortariaTipoRegObs)},c2v:function(){gx.O.A2679OcorrenciaPortariaTipoRegObs=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIATIPOREGOBS",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAGERARDEBITO",gxz:"Z2677OcorrenciaPortariaGerarDebito",gxold:"O2677OcorrenciaPortariaGerarDebito",gxvar:"A2677OcorrenciaPortariaGerarDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2677OcorrenciaPortariaGerarDebito=Value},v2z:function(Value){gx.O.Z2677OcorrenciaPortariaGerarDebito=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIAGERARDEBITO",row || gx.fn.currentGridRowImpl(28),gx.O.A2677OcorrenciaPortariaGerarDebito)},c2v:function(){gx.O.A2677OcorrenciaPortariaGerarDebito=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIAGERARDEBITO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAPORTARIAAPRDESCOCOPO",gxz:"Z2680OcorrenciaPortariaAprDescOcoPo",gxold:"O2680OcorrenciaPortariaAprDescOcoPo",gxvar:"A2680OcorrenciaPortariaAprDescOcoPo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2680OcorrenciaPortariaAprDescOcoPo=Value},v2z:function(Value){gx.O.Z2680OcorrenciaPortariaAprDescOcoPo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("OCORRENCIAPORTARIAAPRDESCOCOPO",row || gx.fn.currentGridRowImpl(28),gx.O.A2680OcorrenciaPortariaAprDescOcoPo)},c2v:function(){gx.O.A2680OcorrenciaPortariaAprDescOcoPo=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAPORTARIAAPRDESCOCOPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLENAV",grid:0};
   GXValidFnc[44]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[46]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[48]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[50]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[52]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15OcorrenciaPortariaId = 0 ;
   this.ZV15OcorrenciaPortariaId = 0 ;
   this.OV15OcorrenciaPortariaId = 0 ;
   this.AV16OcorrenciaPortariaDescricao = "" ;
   this.ZV16OcorrenciaPortariaDescricao = "" ;
   this.OV16OcorrenciaPortariaDescricao = "" ;
   this.AV17OcorrenciaPortariaTipo = "" ;
   this.ZV17OcorrenciaPortariaTipo = "" ;
   this.OV17OcorrenciaPortariaTipo = "" ;
   this.Z2663OcorrenciaPortariaId = 0 ;
   this.O2663OcorrenciaPortariaId = 0 ;
   this.Z2675OcorrenciaPortariaDescricao = "" ;
   this.O2675OcorrenciaPortariaDescricao = "" ;
   this.Z2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.O2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.Z2678OcorrenciaPortariaTipo = "" ;
   this.O2678OcorrenciaPortariaTipo = "" ;
   this.Z2679OcorrenciaPortariaTipoRegObs = "" ;
   this.O2679OcorrenciaPortariaTipoRegObs = "" ;
   this.Z2677OcorrenciaPortariaGerarDebito = "" ;
   this.O2677OcorrenciaPortariaGerarDebito = "" ;
   this.Z2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.O2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15OcorrenciaPortariaId = 0 ;
   this.AV16OcorrenciaPortariaDescricao = "" ;
   this.AV17OcorrenciaPortariaTipo = "" ;
   this.AV21Pagina = 0 ;
   this.AV22PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19OutOcorrenciaPortariaId = 0 ;
   this.A2662OcorrenciaPortariaEmpresaId = "" ;
   this.A2663OcorrenciaPortariaId = 0 ;
   this.A2675OcorrenciaPortariaDescricao = "" ;
   this.A2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.A2678OcorrenciaPortariaTipo = "" ;
   this.A2679OcorrenciaPortariaTipoRegObs = "" ;
   this.A2677OcorrenciaPortariaGerarDebito = "" ;
   this.A2680OcorrenciaPortariaAprDescOcoPo = "" ;
   this.AV18OcorrenciaPortariaEmpresaId = "" ;
   this.Events = {"e17gj2_client": ["ENTER", true] ,"e11gj2_client": ["'GXM_FIRST'", true] ,"e12gj2_client": ["'GXM_PREVIOUS'", true] ,"e13gj2_client": ["'GXM_NEXT'", true] ,"e14gj2_client": ["'GXM_LAST'", true] ,"e15gj2_client": ["'PROCURAR'", true] ,"e19gj2_client": ["'ATUALIZAPAGINA'", true] ,"e21gj1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV16OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV17OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV18OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'OCORRENCIAPORTARIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPORTARIAID","Title")',ctrl:'OCORRENCIAPORTARIAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'OCORRENCIAPORTARIADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAPORTARIADESCRICAO","Title")',ctrl:'OCORRENCIAPORTARIADESCRICAO',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2663OcorrenciaPortariaId',fld:'OCORRENCIAPORTARIAID'}],[{av:'AV19OutOcorrenciaPortariaId',fld:'vOUTOCORRENCIAPORTARIAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV16OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV17OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV16OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV17OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV16OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV17OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV16OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV17OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV16OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV17OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaPortariaId',fld:'vOCORRENCIAPORTARIAID'},{av:'AV16OcorrenciaPortariaDescricao',fld:'vOCORRENCIAPORTARIADESCRICAO'},{av:'AV17OcorrenciaPortariaTipo',fld:'vOCORRENCIAPORTARIATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'}],[]];
   this.setVCMap("AV18OcorrenciaPortariaEmpresaId", "vOCORRENCIAPORTARIAEMPRESAID", 0, "char");
   this.setVCMap("AV19OutOcorrenciaPortariaId", "vOUTOCORRENCIAPORTARIAID", 0, "int");
   this.setVCMap("AV18OcorrenciaPortariaEmpresaId", "vOCORRENCIAPORTARIAEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridContainer.addRefreshingVar({rfrVar:"AV18OcorrenciaPortariaEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaocorrenciaportaria());
