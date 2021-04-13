/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:20.26
*/
gx.evt.autoSkip = false;
gx.define('hparametrofcx', false, function () {
   this.ServerClass =  "hparametrofcx" ;
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
      this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11wn2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12wn2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16wn2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13wn2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14wn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15wn2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e19wn2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20wn2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21wn2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22wn2_client=function()
   {
      this.executeServerEvent("'ALIQUOTAS'", true, arguments[0], false, false);
   };
   this.e23wn2_client=function()
   {
      this.executeServerEvent("'EQUIPAMENTO'", true, arguments[0], false, false);
   };
   this.e25wn2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26wn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,35];
   this.GXLastCtrlId =35;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hparametrofcx",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5836,29,"PARAMETROFCXID","Sequência","","ParametroFcxId","int",0,"px",1,1,"right",null,[],5836,"ParametroFcxId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5799,30,"PARAMETROFCXDESC","Descrição","","ParametroFcxDesc","svchar",0,"px",30,30,"left",null,[],5799,"ParametroFcxDesc",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalq","vBMPALQ",31,0,"px",17,"px","e22wn2_client","","Alíquotas","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpecf","vBMPECF",32,0,"px",17,"px","e23wn2_client","","ECF","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",33,0,"px",17,"px","e19wn2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",34,0,"px",17,"px","e20wn2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",35,0,"px",17,"px","e21wn2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"BTNINCLUIR",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROFCXID",gxz:"Z5836ParametroFcxId",gxold:"O5836ParametroFcxId",gxvar:"A5836ParametroFcxId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5836ParametroFcxId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5836ParametroFcxId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARAMETROFCXID",row || gx.fn.currentGridRowImpl(28),gx.O.A5836ParametroFcxId,0)},c2v:function(){gx.O.A5836ParametroFcxId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARAMETROFCXID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROFCXDESC",gxz:"Z5799ParametroFcxDesc",gxold:"O5799ParametroFcxDesc",gxvar:"A5799ParametroFcxDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5799ParametroFcxDesc=Value},v2z:function(Value){gx.O.Z5799ParametroFcxDesc=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROFCXDESC",row || gx.fn.currentGridRowImpl(28),gx.O.A5799ParametroFcxDesc,0)},c2v:function(){gx.O.A5799ParametroFcxDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROFCXDESC",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALQ",gxz:"ZV28bmpAlq",gxold:"OV28bmpAlq",gxvar:"AV28bmpAlq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28bmpAlq=Value},v2z:function(Value){gx.O.ZV28bmpAlq=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALQ",row || gx.fn.currentGridRowImpl(28),gx.O.AV28bmpAlq,gx.O.AV35Bmpalq_GXI)},c2v:function(){gx.O.AV35Bmpalq_GXI=this.val_GXI();gx.O.AV28bmpAlq=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALQ",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALQ_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV35Bmpalq_GXI',nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPECF",gxz:"ZV29bmpEcf",gxold:"OV29bmpEcf",gxvar:"AV29bmpEcf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpEcf=Value},v2z:function(Value){gx.O.ZV29bmpEcf=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPECF",row || gx.fn.currentGridRowImpl(28),gx.O.AV29bmpEcf,gx.O.AV36Bmpecf_GXI)},c2v:function(){gx.O.AV36Bmpecf_GXI=this.val_GXI();gx.O.AV29bmpEcf=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPECF",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPECF_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV36Bmpecf_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z5836ParametroFcxId = 0 ;
   this.O5836ParametroFcxId = 0 ;
   this.Z5799ParametroFcxDesc = "" ;
   this.O5799ParametroFcxDesc = "" ;
   this.ZV28bmpAlq = "" ;
   this.OV28bmpAlq = "" ;
   this.ZV29bmpEcf = "" ;
   this.OV29bmpEcf = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.A5836ParametroFcxId = 0 ;
   this.A5799ParametroFcxDesc = "" ;
   this.AV28bmpAlq = "" ;
   this.AV29bmpEcf = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV30SnRecuperaFiltro = "" ;
   this.AV33Pgmname = "" ;
   this.Events = {"e11wn2_client": ["'ANTERIOR'", true] ,"e12wn2_client": ["'PROXIMO'", true] ,"e16wn2_client": ["VPAGINA.CLICK", true] ,"e13wn2_client": ["'NOVO'", true] ,"e14wn2_client": ["'FECHAR'", true] ,"e15wn2_client": ["'PROCURAR'", true] ,"e19wn2_client": ["'ALTERAR'", true] ,"e20wn2_client": ["'EXCLUIR'", true] ,"e21wn2_client": ["'CONSULTAR'", true] ,"e22wn2_client": ["'ALIQUOTAS'", true] ,"e23wn2_client": ["'EQUIPAMENTO'", true] ,"e25wn2_client": ["ENTER", true] ,"e26wn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28bmpAlq',fld:'vBMPALQ'},{av:'gx.fn.getCtrlProperty("vBMPALQ","Tooltiptext")',ctrl:'vBMPALQ',prop:'Tooltiptext'},{av:'AV29bmpEcf',fld:'vBMPECF'},{av:'gx.fn.getCtrlProperty("vBMPECF","Tooltiptext")',ctrl:'vBMPECF',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28bmpAlq',fld:'vBMPALQ'},{av:'gx.fn.getCtrlProperty("vBMPALQ","Tooltiptext")',ctrl:'vBMPALQ',prop:'Tooltiptext'},{av:'AV29bmpEcf',fld:'vBMPECF'},{av:'gx.fn.getCtrlProperty("vBMPECF","Tooltiptext")',ctrl:'vBMPECF',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28bmpAlq',fld:'vBMPALQ'},{av:'gx.fn.getCtrlProperty("vBMPALQ","Tooltiptext")',ctrl:'vBMPALQ',prop:'Tooltiptext'},{av:'AV29bmpEcf',fld:'vBMPECF'},{av:'gx.fn.getCtrlProperty("vBMPECF","Tooltiptext")',ctrl:'vBMPECF',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28bmpAlq',fld:'vBMPALQ'},{av:'gx.fn.getCtrlProperty("vBMPALQ","Tooltiptext")',ctrl:'vBMPALQ',prop:'Tooltiptext'},{av:'AV29bmpEcf',fld:'vBMPECF'},{av:'gx.fn.getCtrlProperty("vBMPECF","Tooltiptext")',ctrl:'vBMPECF',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28bmpAlq',fld:'vBMPALQ'},{av:'gx.fn.getCtrlProperty("vBMPALQ","Tooltiptext")',ctrl:'vBMPALQ',prop:'Tooltiptext'},{av:'AV29bmpEcf',fld:'vBMPECF'},{av:'gx.fn.getCtrlProperty("vBMPECF","Tooltiptext")',ctrl:'vBMPECF',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV33Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28bmpAlq',fld:'vBMPALQ'},{av:'gx.fn.getCtrlProperty("vBMPALQ","Tooltiptext")',ctrl:'vBMPALQ',prop:'Tooltiptext'},{av:'AV29bmpEcf',fld:'vBMPECF'},{av:'gx.fn.getCtrlProperty("vBMPECF","Tooltiptext")',ctrl:'vBMPECF',prop:'Tooltiptext'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV33Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5836ParametroFcxId',fld:'PARAMETROFCXID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'A5836ParametroFcxId',fld:'PARAMETROFCXID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A5836ParametroFcxId',fld:'PARAMETROFCXID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'A5836ParametroFcxId',fld:'PARAMETROFCXID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5836ParametroFcxId',fld:'PARAMETROFCXID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33Pgmname',fld:'vPGMNAME'}],[{av:'A5836ParametroFcxId',fld:'PARAMETROFCXID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALIQUOTAS'"] = [[{av:'A5836ParametroFcxId',fld:'PARAMETROFCXID'},{av:'A5799ParametroFcxDesc',fld:'PARAMETROFCXDESC'}],[]];
   this.EvtParms["'EQUIPAMENTO'"] = [[],[]];
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar({rfrVar:"AV28bmpAlq", rfrProp:"Value", gxAttId:"Bmpalq"});
   GridContainer.addRefreshingVar({rfrVar:"AV28bmpAlq", rfrProp:"Tooltiptext", gxAttId:"Bmpalq"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpEcf", rfrProp:"Value", gxAttId:"Bmpecf"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpEcf", rfrProp:"Tooltiptext", gxAttId:"Bmpecf"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV33Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hparametrofcx());
