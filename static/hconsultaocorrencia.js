/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:35.6
*/
gx.evt.autoSkip = false;
gx.define('hconsultaocorrencia', false, function () {
   this.ServerClass =  "hconsultaocorrencia" ;
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
      this.AV16POcorrenciaId=gx.fn.getIntegerValue("vPOCORRENCIAID",'.') ;
   };
   this.e178c2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e118c2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e128c2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e138c2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e148c2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e158c2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e198c2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e218c1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,19,20,21,27,30,32,34,36,38,39,40,41];
   this.GXLastCtrlId =41;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",18,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaocorrencia",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(973,19,"OCORRENCIAID","","","Ocorrenciaid","int",0,"px",3,3,"right",null,[],973,"Ocorrenciaid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(974,20,"OCORRENCIADESCRICAO","","","OcorrenciaDescricao","svchar",0,"px",25,25,"left",null,[],974,"OcorrenciaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(972,21,"OCORRENCIAEMPRESAID","Empresa","","OcorrenciaEmpresaId","char",0,"px",10,10,"left",null,[],972,"OcorrenciaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOCORRENCIADESCRICAO",gxz:"ZV15OcorrenciaDescricao",gxold:"OV15OcorrenciaDescricao",gxvar:"AV15OcorrenciaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15OcorrenciaDescricao=Value},v2z:function(Value){gx.O.ZV15OcorrenciaDescricao=Value},v2c:function(){gx.fn.setControlValue("vOCORRENCIADESCRICAO",gx.O.AV15OcorrenciaDescricao,0)},c2v:function(){gx.O.AV15OcorrenciaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOCORRENCIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAID",gxz:"Z973Ocorrenciaid",gxold:"O973Ocorrenciaid",gxvar:"A973Ocorrenciaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A973Ocorrenciaid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z973Ocorrenciaid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAID",row || gx.fn.currentGridRowImpl(18),gx.O.A973Ocorrenciaid,0)},c2v:function(){gx.O.A973Ocorrenciaid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIAID",row || gx.fn.currentGridRowImpl(18),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIADESCRICAO",gxz:"Z974OcorrenciaDescricao",gxold:"O974OcorrenciaDescricao",gxvar:"A974OcorrenciaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A974OcorrenciaDescricao=Value},v2z:function(Value){gx.O.Z974OcorrenciaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIADESCRICAO",row || gx.fn.currentGridRowImpl(18),gx.O.A974OcorrenciaDescricao,0)},c2v:function(){gx.O.A974OcorrenciaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIADESCRICAO",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:18,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIAEMPRESAID",gxz:"Z972OcorrenciaEmpresaId",gxold:"O972OcorrenciaEmpresaId",gxvar:"A972OcorrenciaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A972OcorrenciaEmpresaId=Value},v2z:function(Value){gx.O.Z972OcorrenciaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIAEMPRESAID",row || gx.fn.currentGridRowImpl(18),gx.O.A972OcorrenciaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A972OcorrenciaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("OCORRENCIAEMPRESAID",row || gx.fn.currentGridRowImpl(18))},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLENAV",grid:0};
   GXValidFnc[30]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[32]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[34]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[36]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[38]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15OcorrenciaDescricao = "" ;
   this.ZV15OcorrenciaDescricao = "" ;
   this.OV15OcorrenciaDescricao = "" ;
   this.Z973Ocorrenciaid = 0 ;
   this.O973Ocorrenciaid = 0 ;
   this.Z974OcorrenciaDescricao = "" ;
   this.O974OcorrenciaDescricao = "" ;
   this.Z972OcorrenciaEmpresaId = "" ;
   this.O972OcorrenciaEmpresaId = "" ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15OcorrenciaDescricao = "" ;
   this.AV19PaginaAux = 0 ;
   this.AV18Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16POcorrenciaId = 0 ;
   this.A973Ocorrenciaid = 0 ;
   this.A974OcorrenciaDescricao = "" ;
   this.A972OcorrenciaEmpresaId = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e178c2_client": ["ENTER", true] ,"e118c2_client": ["'GXM_FIRST'", true] ,"e128c2_client": ["'GXM_PREVIOUS'", true] ,"e138c2_client": ["'GXM_NEXT'", true] ,"e148c2_client": ["'GXM_LAST'", true] ,"e158c2_client": ["'PROCURAR'", true] ,"e198c2_client": ["'ATUALIZAPAGINA'", true] ,"e218c1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'OCORRENCIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIAID","Title")',ctrl:'OCORRENCIAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'OCORRENCIADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OCORRENCIADESCRICAO","Title")',ctrl:'OCORRENCIADESCRICAO',prop:'Title'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A973Ocorrenciaid',fld:'OCORRENCIAID'}],[{av:'AV16POcorrenciaId',fld:'vPOCORRENCIAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15OcorrenciaDescricao',fld:'vOCORRENCIADESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16POcorrenciaId", "vPOCORRENCIAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar(this.GXValidFnc[41]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaocorrencia());
