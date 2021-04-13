/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:16:32.86
*/
gx.evt.autoSkip = false;
gx.define('hmargemmarkup', false, function () {
   this.ServerClass =  "hmargemmarkup" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11tf2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12tf2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17tf2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13tf2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14tf2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15tf2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16tf2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20tf2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21tf2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22tf2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23tf2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25tf2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26tf2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,20,22,24,27,29,36,39,42,44,46,48,50,52,55,57,58,62,63,64,65,66,67,68];
   this.GXLastCtrlId =68;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",61,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmargemmarkup",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4317,62,"MARGEMMARKUPCODIGO","","","MargemMarkupCodigo","char",0,"px",8,8,"left",null,[],4317,"MargemMarkupCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4318,63,"MARGEMMARKUPDESCRICAO","","","MargemMarkupDescricao","svchar",0,"px",30,30,"left",null,[],4318,"MargemMarkupDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4319,64,"MARGEMMARKUPPERCENTUAL","","","MargemMarkupPercentual","decimal",0,"px",8,8,"right",null,[],4319,"MargemMarkupPercentual",true,4,false,false,"Attribute",1,"");
   GridContainer.addComboBox(4315,65,"MARGEMMARKUPMETODO","","MargemMarkupMetodo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",66,0,"px",17,"px","e20tf2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",67,0,"px",17,"px","e21tf2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",68,0,"px",17,"px","e22tf2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"ORDEREDTEXT", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMARGEMMARKUPCODIGO",gxz:"ZV29MargemMarkupCodigo",gxold:"OV29MargemMarkupCodigo",gxvar:"AV29MargemMarkupCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29MargemMarkupCodigo=Value},v2z:function(Value){gx.O.ZV29MargemMarkupCodigo=Value},v2c:function(){gx.fn.setControlValue("vMARGEMMARKUPCODIGO",gx.O.AV29MargemMarkupCodigo,0)},c2v:function(){gx.O.AV29MargemMarkupCodigo=this.val()},val:function(){return gx.fn.getControlValue("vMARGEMMARKUPCODIGO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMARGEMMARKUPMETODO",gxz:"ZV27MargemMarkupMetodo",gxold:"OV27MargemMarkupMetodo",gxvar:"AV27MargemMarkupMetodo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27MargemMarkupMetodo=Value},v2z:function(Value){gx.O.ZV27MargemMarkupMetodo=Value},v2c:function(){gx.fn.setComboBoxValue("vMARGEMMARKUPMETODO",gx.O.AV27MargemMarkupMetodo)},c2v:function(){gx.O.AV27MargemMarkupMetodo=this.val()},val:function(){return gx.fn.getControlValue("vMARGEMMARKUPMETODO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMARGEMMARKUPDESCRICAO",gxz:"ZV28MargemMarkupDescricao",gxold:"OV28MargemMarkupDescricao",gxvar:"AV28MargemMarkupDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28MargemMarkupDescricao=Value},v2z:function(Value){gx.O.ZV28MargemMarkupDescricao=Value},v2c:function(){gx.fn.setControlValue("vMARGEMMARKUPDESCRICAO",gx.O.AV28MargemMarkupDescricao,0)},c2v:function(){gx.O.AV28MargemMarkupDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMARGEMMARKUPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={fld:"TABLE8",grid:0};
   GXValidFnc[42]={fld:"IMAGE2",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"IMAGE1",grid:0};
   GXValidFnc[50]={fld:"BTNHELP",grid:0};
   GXValidFnc[52]={fld:"TABLE5",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPCODIGO",gxz:"Z4317MargemMarkupCodigo",gxold:"O4317MargemMarkupCodigo",gxvar:"A4317MargemMarkupCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4317MargemMarkupCodigo=Value},v2z:function(Value){gx.O.Z4317MargemMarkupCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("MARGEMMARKUPCODIGO",row || gx.fn.currentGridRowImpl(61),gx.O.A4317MargemMarkupCodigo,0)},c2v:function(){gx.O.A4317MargemMarkupCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("MARGEMMARKUPCODIGO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPDESCRICAO",gxz:"Z4318MargemMarkupDescricao",gxold:"O4318MargemMarkupDescricao",gxvar:"A4318MargemMarkupDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4318MargemMarkupDescricao=Value},v2z:function(Value){gx.O.Z4318MargemMarkupDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MARGEMMARKUPDESCRICAO",row || gx.fn.currentGridRowImpl(61),gx.O.A4318MargemMarkupDescricao,0)},c2v:function(){gx.O.A4318MargemMarkupDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MARGEMMARKUPDESCRICAO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPPERCENTUAL",gxz:"Z4319MargemMarkupPercentual",gxold:"O4319MargemMarkupPercentual",gxvar:"A4319MargemMarkupPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4319MargemMarkupPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4319MargemMarkupPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MARGEMMARKUPPERCENTUAL",row || gx.fn.currentGridRowImpl(61),gx.O.A4319MargemMarkupPercentual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4319MargemMarkupPercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MARGEMMARKUPPERCENTUAL",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPMETODO",gxz:"Z4315MargemMarkupMetodo",gxold:"O4315MargemMarkupMetodo",gxvar:"A4315MargemMarkupMetodo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4315MargemMarkupMetodo=Value},v2z:function(Value){gx.O.Z4315MargemMarkupMetodo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MARGEMMARKUPMETODO",row || gx.fn.currentGridRowImpl(61),gx.O.A4315MargemMarkupMetodo)},c2v:function(){gx.O.A4315MargemMarkupMetodo=this.val()},val:function(row){return gx.fn.getGridControlValue("MARGEMMARKUPMETODO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(61),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(61),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV29MargemMarkupCodigo = "" ;
   this.ZV29MargemMarkupCodigo = "" ;
   this.OV29MargemMarkupCodigo = "" ;
   this.AV27MargemMarkupMetodo = "" ;
   this.ZV27MargemMarkupMetodo = "" ;
   this.OV27MargemMarkupMetodo = "" ;
   this.AV28MargemMarkupDescricao = "" ;
   this.ZV28MargemMarkupDescricao = "" ;
   this.OV28MargemMarkupDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z4317MargemMarkupCodigo = "" ;
   this.O4317MargemMarkupCodigo = "" ;
   this.Z4318MargemMarkupDescricao = "" ;
   this.O4318MargemMarkupDescricao = "" ;
   this.Z4319MargemMarkupPercentual = 0 ;
   this.O4319MargemMarkupPercentual = 0 ;
   this.Z4315MargemMarkupMetodo = "" ;
   this.O4315MargemMarkupMetodo = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV29MargemMarkupCodigo = "" ;
   this.AV27MargemMarkupMetodo = "" ;
   this.AV28MargemMarkupDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.A4317MargemMarkupCodigo = "" ;
   this.A4318MargemMarkupDescricao = "" ;
   this.A4319MargemMarkupPercentual = 0 ;
   this.A4315MargemMarkupMetodo = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV30SnRecuperaFiltro = "" ;
   this.AV34Pgmname = "" ;
   this.Events = {"e11tf2_client": ["'ANTERIOR'", true] ,"e12tf2_client": ["'PROXIMO'", true] ,"e17tf2_client": ["VPAGINA.CLICK", true] ,"e13tf2_client": ["'NOVO'", true] ,"e14tf2_client": ["'FECHAR'", true] ,"e15tf2_client": ["'IMPRIMIR'", true] ,"e16tf2_client": ["'PROCURAR'", true] ,"e20tf2_client": ["'ALTERAR'", true] ,"e21tf2_client": ["'EXCLUIR'", true] ,"e22tf2_client": ["'CONSULTAR'", true] ,"e23tf2_client": ["'ATUALIZAPAGINA'", true] ,"e25tf2_client": ["ENTER", true] ,"e26tf2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO'},{av:'AV27MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV28MargemMarkupDescricao',fld:'vMARGEMMARKUPDESCRICAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO'},{av:'AV27MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV28MargemMarkupDescricao',fld:'vMARGEMMARKUPDESCRICAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{ctrl:'MARGEMMARKUPCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MARGEMMARKUPCODIGO","Title")',ctrl:'MARGEMMARKUPCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MARGEMMARKUPDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MARGEMMARKUPDESCRICAO","Title")',ctrl:'MARGEMMARKUPDESCRICAO',prop:'Title'},{ctrl:'MARGEMMARKUPPERCENTUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MARGEMMARKUPPERCENTUAL","Title")',ctrl:'MARGEMMARKUPPERCENTUAL',prop:'Title'},{ctrl:'MARGEMMARKUPMETODO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO'},{av:'AV27MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV28MargemMarkupDescricao',fld:'vMARGEMMARKUPDESCRICAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO'},{av:'AV27MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV28MargemMarkupDescricao',fld:'vMARGEMMARKUPDESCRICAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO'},{av:'AV27MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV28MargemMarkupDescricao',fld:'vMARGEMMARKUPDESCRICAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV29MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO'},{av:'AV28MargemMarkupDescricao',fld:'vMARGEMMARKUPDESCRICAO'},{av:'AV27MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV35Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV31QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV27MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV28MargemMarkupDescricao',fld:'vMARGEMMARKUPDESCRICAO'},{av:'AV29MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO'},{av:'AV27MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV28MargemMarkupDescricao',fld:'vMARGEMMARKUPDESCRICAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A4317MargemMarkupCodigo',fld:'MARGEMMARKUPCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A4317MargemMarkupCodigo',fld:'MARGEMMARKUPCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A4317MargemMarkupCodigo',fld:'MARGEMMARKUPCODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29MargemMarkupCodigo',fld:'vMARGEMMARKUPCODIGO'},{av:'AV27MargemMarkupMetodo',fld:'vMARGEMMARKUPMETODO'},{av:'AV28MargemMarkupDescricao',fld:'vMARGEMMARKUPDESCRICAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV34Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmargemmarkup());
