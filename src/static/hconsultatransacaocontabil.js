/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:32.54
*/
gx.evt.autoSkip = false;
gx.define('hconsultatransacaocontabil', false, function () {
   this.ServerClass =  "hconsultatransacaocontabil" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV16PTransacaoContabilId=gx.fn.getControlValue("vPTRANSACAOCONTABILID") ;
   };
   this.e171l2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111l2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121l2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131l2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141l2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151l2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e191l2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211l1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatransacaocontabil",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(347,29,"TRANSACAOCONTABILID","","","TransacaoContabilId","svchar",0,"px",10,10,"left",null,[],347,"TransacaoContabilId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(572,30,"TRANSACAOCONTABILDESCRICAO","","","TransacaoContabilDescricao","svchar",0,"px",30,30,"left",null,[],572,"TransacaoContabilDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(573,31,"TRANSACAOCONTABILTIPO","","TransacaoContabilTipo","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCONTABILID",gxz:"ZV13TransacaoContabilId",gxold:"OV13TransacaoContabilId",gxvar:"AV13TransacaoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13TransacaoContabilId=Value},v2z:function(Value){gx.O.ZV13TransacaoContabilId=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCONTABILID",gx.O.AV13TransacaoContabilId,0)},c2v:function(){gx.O.AV13TransacaoContabilId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCONTABILID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCONTABILDESCRICAO",gxz:"ZV14TransacaoContabilDescricao",gxold:"OV14TransacaoContabilDescricao",gxvar:"AV14TransacaoContabilDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14TransacaoContabilDescricao=Value},v2z:function(Value){gx.O.ZV14TransacaoContabilDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRANSACAOCONTABILDESCRICAO",gx.O.AV14TransacaoContabilDescricao,0)},c2v:function(){gx.O.AV14TransacaoContabilDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCONTABILDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRANSACAOCONTABILTIPO",gxz:"ZV15TransacaoContabilTipo",gxold:"OV15TransacaoContabilTipo",gxvar:"AV15TransacaoContabilTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15TransacaoContabilTipo=Value},v2z:function(Value){gx.O.ZV15TransacaoContabilTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vTRANSACAOCONTABILTIPO",gx.O.AV15TransacaoContabilTipo)},c2v:function(){gx.O.AV15TransacaoContabilTipo=this.val()},val:function(){return gx.fn.getControlValue("vTRANSACAOCONTABILTIPO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILID",gxz:"Z347TransacaoContabilId",gxold:"O347TransacaoContabilId",gxvar:"A347TransacaoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A347TransacaoContabilId=Value},v2z:function(Value){gx.O.Z347TransacaoContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCONTABILID",row || gx.fn.currentGridRowImpl(28),gx.O.A347TransacaoContabilId,0)},c2v:function(){gx.O.A347TransacaoContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCONTABILID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILDESCRICAO",gxz:"Z572TransacaoContabilDescricao",gxold:"O572TransacaoContabilDescricao",gxvar:"A572TransacaoContabilDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A572TransacaoContabilDescricao=Value},v2z:function(Value){gx.O.Z572TransacaoContabilDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCONTABILDESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A572TransacaoContabilDescricao,0)},c2v:function(){gx.O.A572TransacaoContabilDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCONTABILDESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCONTABILTIPO",gxz:"Z573TransacaoContabilTipo",gxold:"O573TransacaoContabilTipo",gxvar:"A573TransacaoContabilTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A573TransacaoContabilTipo=Value},v2z:function(Value){gx.O.Z573TransacaoContabilTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOCONTABILTIPO",row || gx.fn.currentGridRowImpl(28),gx.O.A573TransacaoContabilTipo)},c2v:function(){gx.O.A573TransacaoContabilTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCONTABILTIPO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLENAV",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV13TransacaoContabilId = "" ;
   this.ZV13TransacaoContabilId = "" ;
   this.OV13TransacaoContabilId = "" ;
   this.AV14TransacaoContabilDescricao = "" ;
   this.ZV14TransacaoContabilDescricao = "" ;
   this.OV14TransacaoContabilDescricao = "" ;
   this.AV15TransacaoContabilTipo = "" ;
   this.ZV15TransacaoContabilTipo = "" ;
   this.OV15TransacaoContabilTipo = "" ;
   this.Z347TransacaoContabilId = "" ;
   this.O347TransacaoContabilId = "" ;
   this.Z572TransacaoContabilDescricao = "" ;
   this.O572TransacaoContabilDescricao = "" ;
   this.Z573TransacaoContabilTipo = "" ;
   this.O573TransacaoContabilTipo = "" ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV13TransacaoContabilId = "" ;
   this.AV14TransacaoContabilDescricao = "" ;
   this.AV15TransacaoContabilTipo = "" ;
   this.AV19PaginaAux = 0 ;
   this.AV18Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16PTransacaoContabilId = "" ;
   this.A346EmpresaTransacaoContabilEmpres = "" ;
   this.A347TransacaoContabilId = "" ;
   this.A572TransacaoContabilDescricao = "" ;
   this.A573TransacaoContabilTipo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e171l2_client": ["ENTER", true] ,"e111l2_client": ["'GXM_FIRST'", true] ,"e121l2_client": ["'GXM_PREVIOUS'", true] ,"e131l2_client": ["'GXM_NEXT'", true] ,"e141l2_client": ["'GXM_LAST'", true] ,"e151l2_client": ["'PROCURAR'", true] ,"e191l2_client": ["'ATUALIZAPAGINA'", true] ,"e211l1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV14TransacaoContabilDescricao',fld:'vTRANSACAOCONTABILDESCRICAO'},{av:'AV15TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TRANSACAOCONTABILID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCONTABILID","Title")',ctrl:'TRANSACAOCONTABILID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TRANSACAOCONTABILDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRANSACAOCONTABILDESCRICAO","Title")',ctrl:'TRANSACAOCONTABILDESCRICAO',prop:'Title'},{ctrl:'TRANSACAOCONTABILTIPO'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A347TransacaoContabilId',fld:'TRANSACAOCONTABILID'}],[{av:'AV16PTransacaoContabilId',fld:'vPTRANSACAOCONTABILID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV14TransacaoContabilDescricao',fld:'vTRANSACAOCONTABILDESCRICAO'},{av:'AV15TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV14TransacaoContabilDescricao',fld:'vTRANSACAOCONTABILDESCRICAO'},{av:'AV15TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV14TransacaoContabilDescricao',fld:'vTRANSACAOCONTABILDESCRICAO'},{av:'AV15TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV14TransacaoContabilDescricao',fld:'vTRANSACAOCONTABILDESCRICAO'},{av:'AV15TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV14TransacaoContabilDescricao',fld:'vTRANSACAOCONTABILDESCRICAO'},{av:'AV15TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13TransacaoContabilId',fld:'vTRANSACAOCONTABILID'},{av:'AV14TransacaoContabilDescricao',fld:'vTRANSACAOCONTABILDESCRICAO'},{av:'AV15TransacaoContabilTipo',fld:'vTRANSACAOCONTABILTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16PTransacaoContabilId", "vPTRANSACAOCONTABILID", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatransacaocontabil());
