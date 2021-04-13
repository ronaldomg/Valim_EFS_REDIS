/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:45:51.54
*/
gx.evt.autoSkip = false;
gx.define('hconsultacontribuinte', false, function () {
   this.ServerClass =  "hconsultacontribuinte" ;
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
      this.AV17ContribuinteIdOut=gx.fn.getIntegerValue("vCONTRIBUINTEIDOUT",'.') ;
   };
   this.e17jd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11jd2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12jd2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13jd2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14jd2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15jd2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19jd2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21jd1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,16,17,18,24,27,29,31,33,35,36,37,38];
   this.GXLastCtrlId =38;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",15,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacontribuinte",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2868,16,"CONTRIBUINTEID","","","ContribuinteId","int",0,"px",2,2,"right",null,[],2868,"ContribuinteId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2869,17,"CONTRIBUINTENOME","","","ContribuinteNome","svchar",0,"px",60,60,"left",null,[],2869,"ContribuinteNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2870,18,"CONTRIBUINTECNPJ","CNPJ","","ContribuinteCNPJ","char",0,"px",18,18,"left",null,[],2870,"ContribuinteCNPJ",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTRIBUINTENOME",gxz:"ZV16ContribuinteNome",gxold:"OV16ContribuinteNome",gxvar:"AV16ContribuinteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ContribuinteNome=Value},v2z:function(Value){gx.O.ZV16ContribuinteNome=Value},v2c:function(){gx.fn.setControlValue("vCONTRIBUINTENOME",gx.O.AV16ContribuinteNome,0)},c2v:function(){gx.O.AV16ContribuinteNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTRIBUINTENOME")},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRIBUINTEID",gxz:"Z2868ContribuinteId",gxold:"O2868ContribuinteId",gxvar:"A2868ContribuinteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2868ContribuinteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2868ContribuinteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTRIBUINTEID",row || gx.fn.currentGridRowImpl(15),gx.O.A2868ContribuinteId,0)},c2v:function(){gx.O.A2868ContribuinteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTRIBUINTEID",row || gx.fn.currentGridRowImpl(15),'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRIBUINTENOME",gxz:"Z2869ContribuinteNome",gxold:"O2869ContribuinteNome",gxvar:"A2869ContribuinteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2869ContribuinteNome=Value},v2z:function(Value){gx.O.Z2869ContribuinteNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRIBUINTENOME",row || gx.fn.currentGridRowImpl(15),gx.O.A2869ContribuinteNome,0)},c2v:function(){gx.O.A2869ContribuinteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRIBUINTENOME",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:15,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRIBUINTECNPJ",gxz:"Z2870ContribuinteCNPJ",gxold:"O2870ContribuinteCNPJ",gxvar:"A2870ContribuinteCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2870ContribuinteCNPJ=Value},v2z:function(Value){gx.O.Z2870ContribuinteCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRIBUINTECNPJ",row || gx.fn.currentGridRowImpl(15),gx.O.A2870ContribuinteCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2870ContribuinteCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRIBUINTECNPJ",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLENAV",grid:0};
   GXValidFnc[27]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[29]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[31]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[33]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[35]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV19Pagina",gxold:"OV19Pagina",gxvar:"AV19Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV19Pagina)},c2v:function(){gx.O.AV19Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV20PaginaAux",gxold:"OV20PaginaAux",gxvar:"AV20PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV20PaginaAux,0)},c2v:function(){gx.O.AV20PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16ContribuinteNome = "" ;
   this.ZV16ContribuinteNome = "" ;
   this.OV16ContribuinteNome = "" ;
   this.Z2868ContribuinteId = 0 ;
   this.O2868ContribuinteId = 0 ;
   this.Z2869ContribuinteNome = "" ;
   this.O2869ContribuinteNome = "" ;
   this.Z2870ContribuinteCNPJ = "" ;
   this.O2870ContribuinteCNPJ = "" ;
   this.AV19Pagina = 0 ;
   this.ZV19Pagina = 0 ;
   this.OV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.ZV20PaginaAux = 0 ;
   this.OV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16ContribuinteNome = "" ;
   this.AV19Pagina = 0 ;
   this.AV20PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17ContribuinteIdOut = 0 ;
   this.A2867ContribuinteEmpresaId = "" ;
   this.A2868ContribuinteId = 0 ;
   this.A2869ContribuinteNome = "" ;
   this.A2870ContribuinteCNPJ = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17jd2_client": ["ENTER", true] ,"e11jd2_client": ["'GXM_FIRST'", true] ,"e12jd2_client": ["'GXM_PREVIOUS'", true] ,"e13jd2_client": ["'GXM_NEXT'", true] ,"e14jd2_client": ["'GXM_LAST'", true] ,"e15jd2_client": ["'PROCURAR'", true] ,"e19jd2_client": ["'ATUALIZAPAGINA'", true] ,"e21jd1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ContribuinteNome',fld:'vCONTRIBUINTENOME'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'CONTRIBUINTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTRIBUINTEID","Title")',ctrl:'CONTRIBUINTEID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CONTRIBUINTENOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTRIBUINTENOME","Title")',ctrl:'CONTRIBUINTENOME',prop:'Title'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2868ContribuinteId',fld:'CONTRIBUINTEID'}],[{av:'AV17ContribuinteIdOut',fld:'vCONTRIBUINTEIDOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ContribuinteNome',fld:'vCONTRIBUINTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ContribuinteNome',fld:'vCONTRIBUINTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ContribuinteNome',fld:'vCONTRIBUINTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19Pagina',fld:'vPAGINA'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ContribuinteNome',fld:'vCONTRIBUINTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ContribuinteNome',fld:'vCONTRIBUINTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ContribuinteNome',fld:'vCONTRIBUINTENOME'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17ContribuinteIdOut", "vCONTRIBUINTEIDOUT", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[38]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacontribuinte());
