/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:29:49.55
*/
gx.evt.autoSkip = false;
gx.define('hconsultaremessaretornocpag', false, function () {
   this.ServerClass =  "hconsultaremessaretornocpag" ;
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
      this.AV19RemessaRetornoCPagId=gx.fn.getIntegerValue("vREMESSARETORNOCPAGID",'.') ;
   };
   this.e17w72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11w72_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12w72_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13w72_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14w72_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15w72_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19w72_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21w71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,34,37,39,41,43,45,46,47,48,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaremessaretornocpag",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5463,24,"REMESSARETORNOCPAGID","","","RemessaRetornoCPagId","int",0,"px",4,4,"right",null,[],5463,"RemessaRetornoCPagId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5447,25,"REMESSARETORNOCPAGDESCRICAO","","","RemessaRetornoCPagDescricao","svchar",0,"px",40,40,"left",null,[],5447,"RemessaRetornoCPagDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(5458,26,"REMESSARETORNOCPAGTIPO","Tipo","RemessaRetornoCPagTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(5448,27,"REMESSARETORNOCPAGTAMANHO","Tamanho","","RemessaRetornoCPagTamanho","int",0,"px",4,4,"right",null,[],5448,"RemessaRetornoCPagTamanho",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5451,28,"REMRETCPAGARBANCODESC","Banco","","RemRetCPagarBancoDesc","svchar",0,"px",25,25,"left",null,[],5451,"RemRetCPagarBancoDesc",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROD",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCREMESSARETORNOCPAGID",gxz:"ZV20cRemessaRetornoCPagId",gxold:"OV20cRemessaRetornoCPagId",gxvar:"AV20cRemessaRetornoCPagId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20cRemessaRetornoCPagId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20cRemessaRetornoCPagId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOCPAGID",gx.O.AV20cRemessaRetornoCPagId,0)},c2v:function(){gx.O.AV20cRemessaRetornoCPagId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOCPAGID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCREMESSARETORNOCPAGDESCRICAO",gxz:"ZV21cRemessaRetornoCPagDescricao",gxold:"OV21cRemessaRetornoCPagDescricao",gxvar:"AV21cRemessaRetornoCPagDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21cRemessaRetornoCPagDescricao=Value},v2z:function(Value){gx.O.ZV21cRemessaRetornoCPagDescricao=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOCPAGDESCRICAO",gx.O.AV21cRemessaRetornoCPagDescricao,0)},c2v:function(){gx.O.AV21cRemessaRetornoCPagDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNOCPAGDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGID",gxz:"Z5463RemessaRetornoCPagId",gxold:"O5463RemessaRetornoCPagId",gxvar:"A5463RemessaRetornoCPagId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5463RemessaRetornoCPagId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5463RemessaRetornoCPagId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGID",row || gx.fn.currentGridRowImpl(23),gx.O.A5463RemessaRetornoCPagId,0)},c2v:function(){gx.O.A5463RemessaRetornoCPagId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOCPAGID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGDESCRICAO",gxz:"Z5447RemessaRetornoCPagDescricao",gxold:"O5447RemessaRetornoCPagDescricao",gxvar:"A5447RemessaRetornoCPagDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5447RemessaRetornoCPagDescricao=Value},v2z:function(Value){gx.O.Z5447RemessaRetornoCPagDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A5447RemessaRetornoCPagDescricao,0)},c2v:function(){gx.O.A5447RemessaRetornoCPagDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOCPAGDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGTIPO",gxz:"Z5458RemessaRetornoCPagTipo",gxold:"O5458RemessaRetornoCPagTipo",gxvar:"A5458RemessaRetornoCPagTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5458RemessaRetornoCPagTipo=Value},v2z:function(Value){gx.O.Z5458RemessaRetornoCPagTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("REMESSARETORNOCPAGTIPO",row || gx.fn.currentGridRowImpl(23),gx.O.A5458RemessaRetornoCPagTipo)},c2v:function(){gx.O.A5458RemessaRetornoCPagTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOCPAGTIPO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOCPAGTAMANHO",gxz:"Z5448RemessaRetornoCPagTamanho",gxold:"O5448RemessaRetornoCPagTamanho",gxvar:"A5448RemessaRetornoCPagTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5448RemessaRetornoCPagTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5448RemessaRetornoCPagTamanho=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOCPAGTAMANHO",row || gx.fn.currentGridRowImpl(23),gx.O.A5448RemessaRetornoCPagTamanho,0)},c2v:function(){gx.O.A5448RemessaRetornoCPagTamanho=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOCPAGTAMANHO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REMRETCPAGARBANCODESC",gxz:"Z5451RemRetCPagarBancoDesc",gxold:"O5451RemRetCPagarBancoDesc",gxvar:"A5451RemRetCPagarBancoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5451RemRetCPagarBancoDesc=Value},v2z:function(Value){gx.O.Z5451RemRetCPagarBancoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("REMRETCPAGARBANCODESC",row || gx.fn.currentGridRowImpl(23),gx.O.A5451RemRetCPagarBancoDesc,0)},c2v:function(){gx.O.A5451RemRetCPagarBancoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("REMRETCPAGARBANCODESC",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLENAV",grid:0};
   GXValidFnc[37]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[45]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOLAYOUT",gxz:"ZV17TipoLayout",gxold:"OV17TipoLayout",gxvar:"AV17TipoLayout",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TipoLayout=Value},v2z:function(Value){gx.O.ZV17TipoLayout=Value},v2c:function(){gx.fn.setControlValue("vTIPOLAYOUT",gx.O.AV17TipoLayout,0)},c2v:function(){gx.O.AV17TipoLayout=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLAYOUT")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV20cRemessaRetornoCPagId = 0 ;
   this.ZV20cRemessaRetornoCPagId = 0 ;
   this.OV20cRemessaRetornoCPagId = 0 ;
   this.AV21cRemessaRetornoCPagDescricao = "" ;
   this.ZV21cRemessaRetornoCPagDescricao = "" ;
   this.OV21cRemessaRetornoCPagDescricao = "" ;
   this.Z5463RemessaRetornoCPagId = 0 ;
   this.O5463RemessaRetornoCPagId = 0 ;
   this.Z5447RemessaRetornoCPagDescricao = "" ;
   this.O5447RemessaRetornoCPagDescricao = "" ;
   this.Z5458RemessaRetornoCPagTipo = "" ;
   this.O5458RemessaRetornoCPagTipo = "" ;
   this.Z5448RemessaRetornoCPagTamanho = 0 ;
   this.O5448RemessaRetornoCPagTamanho = 0 ;
   this.Z5451RemRetCPagarBancoDesc = "" ;
   this.O5451RemRetCPagarBancoDesc = "" ;
   this.AV17TipoLayout = "" ;
   this.ZV17TipoLayout = "" ;
   this.OV17TipoLayout = "" ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV20cRemessaRetornoCPagId = 0 ;
   this.AV21cRemessaRetornoCPagDescricao = "" ;
   this.AV17TipoLayout = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19RemessaRetornoCPagId = 0 ;
   this.A5462RemessaRetornoCPagEmpresaId = "" ;
   this.A5449RemRetCPagarBancoEmpId = "" ;
   this.A5450RemRetCPagarBancoId = 0 ;
   this.A5463RemessaRetornoCPagId = 0 ;
   this.A5447RemessaRetornoCPagDescricao = "" ;
   this.A5458RemessaRetornoCPagTipo = "" ;
   this.A5448RemessaRetornoCPagTamanho = 0 ;
   this.A5451RemRetCPagarBancoDesc = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17w72_client": ["ENTER", true] ,"e11w72_client": ["'GXM_FIRST'", true] ,"e12w72_client": ["'GXM_PREVIOUS'", true] ,"e13w72_client": ["'GXM_NEXT'", true] ,"e14w72_client": ["'GXM_LAST'", true] ,"e15w72_client": ["'PROCURAR'", true] ,"e19w72_client": ["'ATUALIZAPAGINA'", true] ,"e21w71_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV21cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'REMESSARETORNOCPAGID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNOCPAGID","Title")',ctrl:'REMESSARETORNOCPAGID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'REMESSARETORNOCPAGDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REMESSARETORNOCPAGDESCRICAO","Title")',ctrl:'REMESSARETORNOCPAGDESCRICAO',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5463RemessaRetornoCPagId',fld:'REMESSARETORNOCPAGID'}],[{av:'AV19RemessaRetornoCPagId',fld:'vREMESSARETORNOCPAGID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV21cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TipoLayout',fld:'vTIPOLAYOUT',hsh:true}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV21cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV21cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV21cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TipoLayout',fld:'vTIPOLAYOUT',hsh:true},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV21cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TipoLayout',fld:'vTIPOLAYOUT',hsh:true}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20cRemessaRetornoCPagId',fld:'vCREMESSARETORNOCPAGID'},{av:'AV21cRemessaRetornoCPagDescricao',fld:'vCREMESSARETORNOCPAGDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17TipoLayout',fld:'vTIPOLAYOUT',hsh:true}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19RemessaRetornoCPagId", "vREMESSARETORNOCPAGID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaremessaretornocpag());
