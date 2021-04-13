/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:12:56.24
*/
gx.evt.autoSkip = false;
gx.define('hcaracteristica', false, function () {
   this.ServerClass =  "hcaracteristica" ;
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
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e112e22_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122e22_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e172e22_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132e22_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142e22_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152e22_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e162e22_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e202e22_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e212e22_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e222e22_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e232e22_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e252e22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e262e22_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,50,54,55,56,57,58,59,66,67];
   this.GXLastCtrlId =67;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcaracteristica",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addComboBox(11319,54,"CARACTERISTICATIPO","Tipo","CaracteristicaTipo","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(11320,55,"CARACTERISTICACODIGO","","","CaracteristicaCodigo","char",0,"px",2,2,"left",null,[],11320,"CaracteristicaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(11387,56,"CARACTERISTICADESCRICAO","","","CaracteristicaDescricao","svchar",0,"px",30,30,"left",null,[],11387,"CaracteristicaDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",57,0,"px",17,"px","e202e22_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",58,0,"px",17,"px","e212e22_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",59,0,"px",17,"px","e222e22_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCARACTERISTICATIPO",gxz:"ZV10CaracteristicaTipo",gxold:"OV10CaracteristicaTipo",gxvar:"AV10CaracteristicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10CaracteristicaTipo=Value},v2z:function(Value){gx.O.ZV10CaracteristicaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCARACTERISTICATIPO",gx.O.AV10CaracteristicaTipo)},c2v:function(){gx.O.AV10CaracteristicaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICATIPO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCARACTERISTICACODIGO",gxz:"ZV8CaracteristicaCodigo",gxold:"OV8CaracteristicaCodigo",gxvar:"AV8CaracteristicaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8CaracteristicaCodigo=Value},v2z:function(Value){gx.O.ZV8CaracteristicaCodigo=Value},v2c:function(){gx.fn.setControlValue("vCARACTERISTICACODIGO",gx.O.AV8CaracteristicaCodigo,0)},c2v:function(){gx.O.AV8CaracteristicaCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICACODIGO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCARACTERISTICADESCRICAO",gxz:"ZV9CaracteristicaDescricao",gxold:"OV9CaracteristicaDescricao",gxvar:"AV9CaracteristicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9CaracteristicaDescricao=Value},v2z:function(Value){gx.O.ZV9CaracteristicaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCARACTERISTICADESCRICAO",gx.O.AV9CaracteristicaDescricao,0)},c2v:function(){gx.O.AV9CaracteristicaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCARACTERISTICADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"IMAGE1",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV25Pagina",gxold:"OV25Pagina",gxvar:"AV25Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV25Pagina)},c2v:function(){gx.O.AV25Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV26PaginaAux",gxold:"OV26PaginaAux",gxvar:"AV26PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV26PaginaAux,0)},c2v:function(){gx.O.AV26PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICATIPO",gxz:"Z11319CaracteristicaTipo",gxold:"O11319CaracteristicaTipo",gxvar:"A11319CaracteristicaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A11319CaracteristicaTipo=Value},v2z:function(Value){gx.O.Z11319CaracteristicaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CARACTERISTICATIPO",row || gx.fn.currentGridRowImpl(53),gx.O.A11319CaracteristicaTipo)},c2v:function(){gx.O.A11319CaracteristicaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("CARACTERISTICATIPO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICACODIGO",gxz:"Z11320CaracteristicaCodigo",gxold:"O11320CaracteristicaCodigo",gxvar:"A11320CaracteristicaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11320CaracteristicaCodigo=Value},v2z:function(Value){gx.O.Z11320CaracteristicaCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("CARACTERISTICACODIGO",row || gx.fn.currentGridRowImpl(53),gx.O.A11320CaracteristicaCodigo,0)},c2v:function(){gx.O.A11320CaracteristicaCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("CARACTERISTICACODIGO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CARACTERISTICADESCRICAO",gxz:"Z11387CaracteristicaDescricao",gxold:"O11387CaracteristicaDescricao",gxvar:"A11387CaracteristicaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11387CaracteristicaDescricao=Value},v2z:function(Value){gx.O.Z11387CaracteristicaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CARACTERISTICADESCRICAO",row || gx.fn.currentGridRowImpl(53),gx.O.A11387CaracteristicaDescricao,0)},c2v:function(){gx.O.A11387CaracteristicaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CARACTERISTICADESCRICAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV5bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpCon=Value},v2z:function(Value){gx.O.ZV6bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV6bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV24OrderedBy",gxold:"OV24OrderedBy",gxvar:"AV24OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV24OrderedBy,0)},c2v:function(){gx.O.AV24OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   this.AV10CaracteristicaTipo = "" ;
   this.ZV10CaracteristicaTipo = "" ;
   this.OV10CaracteristicaTipo = "" ;
   this.AV8CaracteristicaCodigo = "" ;
   this.ZV8CaracteristicaCodigo = "" ;
   this.OV8CaracteristicaCodigo = "" ;
   this.AV9CaracteristicaDescricao = "" ;
   this.ZV9CaracteristicaDescricao = "" ;
   this.OV9CaracteristicaDescricao = "" ;
   this.AV25Pagina = 0 ;
   this.ZV25Pagina = 0 ;
   this.OV25Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.ZV26PaginaAux = 0 ;
   this.OV26PaginaAux = 0 ;
   this.Z11319CaracteristicaTipo = "" ;
   this.O11319CaracteristicaTipo = "" ;
   this.Z11320CaracteristicaCodigo = "" ;
   this.O11320CaracteristicaCodigo = "" ;
   this.Z11387CaracteristicaDescricao = "" ;
   this.O11387CaracteristicaDescricao = "" ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV6bmpCon = "" ;
   this.OV6bmpCon = "" ;
   this.AV24OrderedBy = 0 ;
   this.ZV24OrderedBy = 0 ;
   this.OV24OrderedBy = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV10CaracteristicaTipo = "" ;
   this.AV8CaracteristicaCodigo = "" ;
   this.AV9CaracteristicaDescricao = "" ;
   this.AV25Pagina = 0 ;
   this.AV26PaginaAux = 0 ;
   this.AV24OrderedBy = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.A11466CaracteristicaEmpresaId = "" ;
   this.A11319CaracteristicaTipo = "" ;
   this.A11320CaracteristicaCodigo = "" ;
   this.A11387CaracteristicaDescricao = "" ;
   this.AV5bmpAlt = "" ;
   this.AV7bmpExc = "" ;
   this.AV6bmpCon = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.AV35Pgmname = "" ;
   this.Events = {"e112e22_client": ["'ANTERIOR'", true] ,"e122e22_client": ["'PROXIMO'", true] ,"e172e22_client": ["VPAGINA.CLICK", true] ,"e132e22_client": ["'NOVO'", true] ,"e142e22_client": ["'FECHAR'", true] ,"e152e22_client": ["'IMPRIMIR'", true] ,"e162e22_client": ["'PROCURAR'", true] ,"e202e22_client": ["'ALTERAR'", true] ,"e212e22_client": ["'EXCLUIR'", true] ,"e222e22_client": ["'CONSULTAR'", true] ,"e232e22_client": ["'ATUALIZAPAGINA'", true] ,"e252e22_client": ["ENTER", true] ,"e262e22_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{ctrl:'CARACTERISTICACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CARACTERISTICACODIGO","Title")',ctrl:'CARACTERISTICACODIGO',prop:'Title'},{av:'AV15Imagem',fld:'vIMAGEM'},{ctrl:'CARACTERISTICADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CARACTERISTICADESCRICAO","Title")',ctrl:'CARACTERISTICADESCRICAO',prop:'Title'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV13filtros',fld:'vFILTROS'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV24OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV13filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV26PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV13filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'AV13filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV13filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV36Pgmdesc',fld:'vPGMDESC'}],[{av:'AV23OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV21NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV20NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV32QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV25Pagina',fld:'vPAGINA'}],[{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV13filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A11319CaracteristicaTipo',fld:'CARACTERISTICATIPO'},{av:'A11320CaracteristicaCodigo',fld:'CARACTERISTICACODIGO'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A11320CaracteristicaCodigo',fld:'CARACTERISTICACODIGO'},{av:'A11319CaracteristicaTipo',fld:'CARACTERISTICATIPO'},{av:'AV13filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A11319CaracteristicaTipo',fld:'CARACTERISTICATIPO'},{av:'A11320CaracteristicaCodigo',fld:'CARACTERISTICACODIGO'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A11320CaracteristicaCodigo',fld:'CARACTERISTICACODIGO'},{av:'A11319CaracteristicaTipo',fld:'CARACTERISTICATIPO'},{av:'AV13filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A11319CaracteristicaTipo',fld:'CARACTERISTICATIPO'},{av:'A11320CaracteristicaCodigo',fld:'CARACTERISTICACODIGO'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV25Pagina',fld:'vPAGINA'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{av:'A11320CaracteristicaCodigo',fld:'CARACTERISTICACODIGO'},{av:'A11319CaracteristicaTipo',fld:'CARACTERISTICATIPO'},{av:'AV13filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10CaracteristicaTipo',fld:'vCARACTERISTICATIPO'},{av:'AV8CaracteristicaCodigo',fld:'vCARACTERISTICACODIGO'},{av:'AV9CaracteristicaDescricao',fld:'vCARACTERISTICADESCRICAO'},{av:'AV24OrderedBy',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV35Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcaracteristica());
