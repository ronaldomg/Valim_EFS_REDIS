/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:15:33.96
*/
gx.evt.autoSkip = false;
gx.define('hcontratocpc', false, function () {
   this.ServerClass =  "hcontratocpc" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV9EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV24Pagina=gx.fn.getIntegerValue("vPAGINA",'.') ;
   };
   this.e112f62_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e122f62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152f62_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e162f62_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e172f62_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e182f62_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e202f62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e212f62_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7,10,13,15,20,21,22,23,24,25];
   this.GXLastCtrlId =25;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",19,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcontratocpc",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(11516,20,"CONTRATOCPCEMPRESAID","Empresa","","ContratoCPCEmpresaId","char",0,"px",10,10,"left",null,[],11516,"ContratoCPCEmpresaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(11524,21,"CONTRATOCPCTIPO","Tipo","ContratoCPCTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(11517,22,"CONTRATOCPCTITULO","Título","","ContratoCPCTitulo","svchar",0,"px",500,80,"left",null,[],11517,"ContratoCPCTitulo",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",23,0,"px",17,"px","e152f62_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",24,0,"px",17,"px","e162f62_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",25,0,"px",17,"px","e172f62_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[7]={fld:"TABLE4",grid:0};
   GXValidFnc[10]={fld:"TABLE1",grid:0};
   GXValidFnc[13]={fld:"IMAGE2",grid:0};
   GXValidFnc[15]={fld:"BTNHELP",grid:0};
   GXValidFnc[20]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCPCEMPRESAID",gxz:"Z11516ContratoCPCEmpresaId",gxold:"O11516ContratoCPCEmpresaId",gxvar:"A11516ContratoCPCEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11516ContratoCPCEmpresaId=Value},v2z:function(Value){gx.O.Z11516ContratoCPCEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOCPCEMPRESAID",row || gx.fn.currentGridRowImpl(19),gx.O.A11516ContratoCPCEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11516ContratoCPCEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOCPCEMPRESAID",row || gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCPCTIPO",gxz:"Z11524ContratoCPCTipo",gxold:"O11524ContratoCPCTipo",gxvar:"A11524ContratoCPCTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A11524ContratoCPCTipo=Value},v2z:function(Value){gx.O.Z11524ContratoCPCTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTRATOCPCTIPO",row || gx.fn.currentGridRowImpl(19),gx.O.A11524ContratoCPCTipo)},c2v:function(){gx.O.A11524ContratoCPCTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOCPCTIPO",row || gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"svchar",len:500,dec:0,sign:false,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCPCTITULO",gxz:"Z11517ContratoCPCTitulo",gxold:"O11517ContratoCPCTitulo",gxvar:"A11517ContratoCPCTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11517ContratoCPCTitulo=Value},v2z:function(Value){gx.O.Z11517ContratoCPCTitulo=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOCPCTITULO",row || gx.fn.currentGridRowImpl(19),gx.O.A11517ContratoCPCTitulo,0)},c2v:function(){gx.O.A11517ContratoCPCTitulo=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOCPCTITULO",row || gx.fn.currentGridRowImpl(19))},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(19),gx.O.AV5bmpAlt,gx.O.AV35Bmpalt_GXI)},c2v:function(){gx.O.AV35Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(19))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(19))}, gxvar_GXI:'AV35Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(19),gx.O.AV7bmpExc,gx.O.AV36Bmpexc_GXI)},c2v:function(){gx.O.AV36Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(19))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(19))}, gxvar_GXI:'AV36Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:19,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpCon=Value},v2z:function(Value){gx.O.ZV6bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(19),gx.O.AV6bmpCon,gx.O.AV37Bmpcon_GXI)},c2v:function(){gx.O.AV37Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(19))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(19))}, gxvar_GXI:'AV37Bmpcon_GXI',nac:gx.falseFn};
   this.Z11516ContratoCPCEmpresaId = "" ;
   this.O11516ContratoCPCEmpresaId = "" ;
   this.Z11524ContratoCPCTipo = "" ;
   this.O11524ContratoCPCTipo = "" ;
   this.Z11517ContratoCPCTitulo = "" ;
   this.O11517ContratoCPCTitulo = "" ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV6bmpCon = "" ;
   this.OV6bmpCon = "" ;
   this.A11516ContratoCPCEmpresaId = "" ;
   this.A11524ContratoCPCTipo = "" ;
   this.A11517ContratoCPCTitulo = "" ;
   this.AV5bmpAlt = "" ;
   this.AV7bmpExc = "" ;
   this.AV6bmpCon = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV24Pagina = 0 ;
   this.Events = {"e112f62_client": ["'NOVO'", true] ,"e122f62_client": ["'FECHAR'", true] ,"e152f62_client": ["'ALTERAR'", true] ,"e162f62_client": ["'EXCLUIR'", true] ,"e172f62_client": ["'CONSULTAR'", true] ,"e182f62_client": ["'ATUALIZAPAGINA'", true] ,"e202f62_client": ["ENTER", true] ,"e212f62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV24Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV24Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["'NOVO'"] = [[{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV24Pagina',fld:'vPAGINA'}],[]];
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24Pagina", "vPAGINA", 0, "int");
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24Pagina", "vPAGINA", 0, "int");
   GridContainer.addRefreshingVar({rfrVar:"AV9EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV24Pagina"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcontratocpc());
