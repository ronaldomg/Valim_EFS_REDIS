/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:44.99
*/
gx.evt.autoSkip = false;
gx.define('hintegracaocbl', false, function () {
   this.ServerClass =  "hintegracaocbl" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e119u2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e129u2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e219u2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e229u2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e239u2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e179u2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e139u2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e149u2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e159u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e169u2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e249u2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e259u2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e269u2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e279u2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hintegracaocbl",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1487,49,"INTEGRACAOCBLID","","","IntegracaoCblId","int",0,"px",4,4,"right",null,[],1487,"IntegracaoCblId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1887,50,"INTEGRACAOCBLDESCRICAO","","","IntegracaoCblDescricao","svchar",0,"px",40,40,"left",null,[],1887,"IntegracaoCblDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpdupint","vBMPDUPINT",51,0,"px",17,"px","e249u2_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e219u2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e229u2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px","e239u2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1486,55,"INTEGRACAOCBLEMPRESAID","Empresa","","IntegracaoCblEmpresaId","char",0,"px",10,10,"left",null,[],1486,"IntegracaoCblEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vINTEGRACAOCBLID",gxz:"ZV29IntegracaoCblId",gxold:"OV29IntegracaoCblId",gxvar:"AV29IntegracaoCblId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29IntegracaoCblId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29IntegracaoCblId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTEGRACAOCBLID",gx.O.AV29IntegracaoCblId,0)},c2v:function(){gx.O.AV29IntegracaoCblId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTEGRACAOCBLID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vINTEGRACAOCBLDESCRICAO",gxz:"ZV28IntegracaoCblDescricao",gxold:"OV28IntegracaoCblDescricao",gxvar:"AV28IntegracaoCblDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28IntegracaoCblDescricao=Value},v2z:function(Value){gx.O.ZV28IntegracaoCblDescricao=Value},v2c:function(){gx.fn.setControlValue("vINTEGRACAOCBLDESCRICAO",gx.O.AV28IntegracaoCblDescricao,0)},c2v:function(){gx.O.AV28IntegracaoCblDescricao=this.val()},val:function(){return gx.fn.getControlValue("vINTEGRACAOCBLDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE8",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE3",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLID",gxz:"Z1487IntegracaoCblId",gxold:"O1487IntegracaoCblId",gxvar:"A1487IntegracaoCblId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1487IntegracaoCblId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1487IntegracaoCblId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLID",row || gx.fn.currentGridRowImpl(48),gx.O.A1487IntegracaoCblId,0)},c2v:function(){gx.O.A1487IntegracaoCblId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTEGRACAOCBLID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLDESCRICAO",gxz:"Z1887IntegracaoCblDescricao",gxold:"O1887IntegracaoCblDescricao",gxvar:"A1887IntegracaoCblDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1887IntegracaoCblDescricao=Value},v2z:function(Value){gx.O.Z1887IntegracaoCblDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLDESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A1887IntegracaoCblDescricao,0)},c2v:function(){gx.O.A1887IntegracaoCblDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLDESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUPINT",gxz:"ZV27bmpDupInt",gxold:"OV27bmpDupInt",gxvar:"AV27bmpDupInt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpDupInt=Value},v2z:function(Value){gx.O.ZV27bmpDupInt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDUPINT",row || gx.fn.currentGridRowImpl(48),gx.O.AV27bmpDupInt,gx.O.AV39Bmpdupint_GXI)},c2v:function(){gx.O.AV39Bmpdupint_GXI=this.val_GXI();gx.O.AV27bmpDupInt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDUPINT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDUPINT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV39Bmpdupint_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLEMPRESAID",gxz:"Z1486IntegracaoCblEmpresaId",gxold:"O1486IntegracaoCblEmpresaId",gxvar:"A1486IntegracaoCblEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1486IntegracaoCblEmpresaId=Value},v2z:function(Value){gx.O.Z1486IntegracaoCblEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLEMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A1486IntegracaoCblEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1486IntegracaoCblEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLEMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV29IntegracaoCblId = 0 ;
   this.ZV29IntegracaoCblId = 0 ;
   this.OV29IntegracaoCblId = 0 ;
   this.AV28IntegracaoCblDescricao = "" ;
   this.ZV28IntegracaoCblDescricao = "" ;
   this.OV28IntegracaoCblDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1487IntegracaoCblId = 0 ;
   this.O1487IntegracaoCblId = 0 ;
   this.Z1887IntegracaoCblDescricao = "" ;
   this.O1887IntegracaoCblDescricao = "" ;
   this.ZV27bmpDupInt = "" ;
   this.OV27bmpDupInt = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1486IntegracaoCblEmpresaId = "" ;
   this.O1486IntegracaoCblEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV29IntegracaoCblId = 0 ;
   this.AV28IntegracaoCblDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1487IntegracaoCblId = 0 ;
   this.A1887IntegracaoCblDescricao = "" ;
   this.AV27bmpDupInt = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1486IntegracaoCblEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV30SnRecuperaFiltro = "" ;
   this.Events = {"e119u2_client": ["'ANTERIOR'", true] ,"e129u2_client": ["'PROXIMO'", true] ,"e219u2_client": ["'ALTERAR'", true] ,"e229u2_client": ["'EXCLUIR'", true] ,"e239u2_client": ["'CONSULTAR'", true] ,"e179u2_client": ["VPAGINA.CLICK", true] ,"e139u2_client": ["'NOVO'", true] ,"e149u2_client": ["'IMPRIMIR'", true] ,"e159u2_client": ["'FECHAR'", true] ,"e169u2_client": ["'PROCURAR'", true] ,"e249u2_client": ["'DUPLICAR'", true] ,"e259u2_client": ["'ATUALIZAPAGINA'", true] ,"e269u2_client": ["ENTER", true] ,"e279u2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'INTEGRACAOCBLID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INTEGRACAOCBLID","Title")',ctrl:'INTEGRACAOCBLID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'INTEGRACAOCBLDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INTEGRACAOCBLDESCRICAO","Title")',ctrl:'INTEGRACAOCBLDESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27bmpDupInt',fld:'vBMPDUPINT'},{av:'gx.fn.getCtrlProperty("vBMPDUPINT","Tooltiptext")',ctrl:'vBMPDUPINT',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1487IntegracaoCblId',fld:'INTEGRACAOCBLID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1487IntegracaoCblId',fld:'INTEGRACAOCBLID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1487IntegracaoCblId',fld:'INTEGRACAOCBLID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1487IntegracaoCblId',fld:'INTEGRACAOCBLID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1487IntegracaoCblId',fld:'INTEGRACAOCBLID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1487IntegracaoCblId',fld:'INTEGRACAOCBLID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV35Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV31QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1486IntegracaoCblEmpresaId',fld:'INTEGRACAOCBLEMPRESAID'},{av:'A1487IntegracaoCblId',fld:'INTEGRACAOCBLID'},{av:'A1887IntegracaoCblDescricao',fld:'INTEGRACAOCBLDESCRICAO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV29IntegracaoCblId',fld:'vINTEGRACAOCBLID'},{av:'AV28IntegracaoCblDescricao',fld:'vINTEGRACAOCBLDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hintegracaocbl());
