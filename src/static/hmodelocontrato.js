/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:36.36
*/
gx.evt.autoSkip = false;
gx.define('hmodelocontrato', false, function () {
   this.ServerClass =  "hmodelocontrato" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV35SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11ui2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ui2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16ui2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ui2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e21ui2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22ui2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e14ui2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ui2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e17ui2_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, null, false, false);
   };
   this.e23ui2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e24ui2_client=function()
   {
      this.executeServerEvent("'VISUALIZAR'", true, arguments[0], false, false);
   };
   this.e25ui2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26ui2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27ui2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,21,24,26,27,31,32,33,34,35,36,37,38,44,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodelocontrato",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5337,31,"MODELOCONTRATOID","","","ModeloContratoId","int",0,"px",3,3,"right",null,[],5337,"ModeloContratoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5333,32,"MODELOCONTRATODESCRICAO","","","ModeloContratoDescricao","svchar",0,"px",40,40,"left",null,[],5333,"ModeloContratoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmplay","vBMPLAY",33,0,"px",17,"px",null,"","Layout","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpvis","vBMPVIS",34,0,"px",17,"px","e24ui2_client","","Visualizar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",35,0,"px",17,"px","e21ui2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",36,0,"px",17,"px","e23ui2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",37,0,"px",17,"px","e22ui2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(5336,38,"MODELOCONTRATOEMPRESAID","Empresa","","ModeloContratoEmpresaId","char",0,"px",10,10,"left",null,[],5336,"ModeloContratoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOID",gxz:"Z5337ModeloContratoId",gxold:"O5337ModeloContratoId",gxvar:"A5337ModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5337ModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5337ModeloContratoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOID",row || gx.fn.currentGridRowImpl(30),gx.O.A5337ModeloContratoId,0)},c2v:function(){gx.O.A5337ModeloContratoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOID",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATODESCRICAO",gxz:"Z5333ModeloContratoDescricao",gxold:"O5333ModeloContratoDescricao",gxvar:"A5333ModeloContratoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5333ModeloContratoDescricao=Value},v2z:function(Value){gx.O.Z5333ModeloContratoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATODESCRICAO",row || gx.fn.currentGridRowImpl(30),gx.O.A5333ModeloContratoDescricao,0)},c2v:function(){gx.O.A5333ModeloContratoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOCONTRATODESCRICAO",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLAY",gxz:"ZV27bmpLay",gxold:"OV27bmpLay",gxvar:"AV27bmpLay",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpLay=Value},v2z:function(Value){gx.O.ZV27bmpLay=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLAY",row || gx.fn.currentGridRowImpl(30),gx.O.AV27bmpLay,gx.O.AV43Bmplay_GXI)},c2v:function(){gx.O.AV43Bmplay_GXI=this.val_GXI();gx.O.AV27bmpLay=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLAY",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLAY_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV43Bmplay_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPVIS",gxz:"ZV31bmpVis",gxold:"OV31bmpVis",gxvar:"AV31bmpVis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpVis=Value},v2z:function(Value){gx.O.ZV31bmpVis=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPVIS",row || gx.fn.currentGridRowImpl(30),gx.O.AV31bmpVis,gx.O.AV42Bmpvis_GXI)},c2v:function(){gx.O.AV42Bmpvis_GXI=this.val_GXI();gx.O.AV31bmpVis=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPVIS",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPVIS_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV42Bmpvis_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(30),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV40Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(30),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOEMPRESAID",gxz:"Z5336ModeloContratoEmpresaId",gxold:"O5336ModeloContratoEmpresaId",gxvar:"A5336ModeloContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5336ModeloContratoEmpresaId=Value},v2z:function(Value){gx.O.Z5336ModeloContratoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(30),gx.O.A5336ModeloContratoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5336ModeloContratoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOCONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"JSABR", format:2,grid:0};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5337ModeloContratoId = 0 ;
   this.O5337ModeloContratoId = 0 ;
   this.Z5333ModeloContratoDescricao = "" ;
   this.O5333ModeloContratoDescricao = "" ;
   this.ZV27bmpLay = "" ;
   this.OV27bmpLay = "" ;
   this.ZV31bmpVis = "" ;
   this.OV31bmpVis = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z5336ModeloContratoEmpresaId = "" ;
   this.O5336ModeloContratoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A5337ModeloContratoId = 0 ;
   this.A5333ModeloContratoDescricao = "" ;
   this.AV27bmpLay = "" ;
   this.AV31bmpVis = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A5336ModeloContratoEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.Events = {"e11ui2_client": ["'ANTERIOR'", true] ,"e12ui2_client": ["'PROXIMO'", true] ,"e16ui2_client": ["VPAGINA.CLICK", true] ,"e13ui2_client": ["'NOVO'", true] ,"e21ui2_client": ["'ALTERAR'", true] ,"e22ui2_client": ["'CONSULTAR'", true] ,"e14ui2_client": ["'FECHAR'", true] ,"e15ui2_client": ["'PROCURAR'", true] ,"e17ui2_client": ["'COPIAR'", true] ,"e23ui2_client": ["'EXCLUIR'", true] ,"e24ui2_client": ["'VISUALIZAR'", true] ,"e25ui2_client": ["'ATUALIZAPAGINA'", true] ,"e26ui2_client": ["ENTER", true] ,"e27ui2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'}],[{ctrl:'MODELOCONTRATOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOCONTRATOID","Title")',ctrl:'MODELOCONTRATOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MODELOCONTRATODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOCONTRATODESCRICAO","Title")',ctrl:'MODELOCONTRATODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'}],[{av:'AV27bmpLay',fld:'vBMPLAY'},{av:'gx.fn.getCtrlProperty("vBMPLAY","Tooltiptext")',ctrl:'vBMPLAY',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPLAY","Link")',ctrl:'vBMPLAY',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'}],[]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'}],[]];
   this.EvtParms["'VISUALIZAR'"] = [[{av:'AV32DataNula',fld:'vDATANULA'},{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'AV33ParContrato',fld:'vPARCONTRATO'},{av:'AV39Pgmdesc',fld:'vPGMDESC'}],[{av:'AV32DataNula',fld:'vDATANULA'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV33ParContrato',fld:'vPARCONTRATO'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'AV29QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV31bmpVis',fld:'vBMPVIS'},{av:'gx.fn.getCtrlProperty("vBMPVIS","Tooltiptext")',ctrl:'vBMPVIS',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5333ModeloContratoDescricao',fld:'MODELOCONTRATODESCRICAO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV35SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpVis", rfrProp:"Value", gxAttId:"Bmpvis"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpVis", rfrProp:"Tooltiptext", gxAttId:"Bmpvis"});
   GridContainer.addRefreshingVar({rfrVar:"AV35SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A5336ModeloContratoEmpresaId", rfrProp:"Value", gxAttId:"5336"});
   GridContainer.addRefreshingVar({rfrVar:"A5337ModeloContratoId", rfrProp:"Value", gxAttId:"5337"});
   GridContainer.addRefreshingVar({rfrVar:"A5333ModeloContratoDescricao", rfrProp:"Value", gxAttId:"5333"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodelocontrato());
