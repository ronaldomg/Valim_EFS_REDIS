/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:38:42.77
*/
gx.evt.autoSkip = false;
gx.define('hmedico', false, function () {
   this.ServerClass =  "hmedico" ;
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
      this.AV9EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV28SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e1125b2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1225b2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1725b2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1325b2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1425b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1525b2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e1625b2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2025b2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2125b2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2225b2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2325b2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2525b2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2625b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,34,37,39,40,44,45,46,47,48,49,50,57];
   this.GXLastCtrlId =57;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",43,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hmedico",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(9946,44,"MEDICOID","Medico Id","","MedicoId","int",0,"px",4,4,"right",null,[],9946,"MedicoId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9952,45,"MEDICONOME","","","MedicoNome","svchar",0,"px",40,40,"left",null,[],9952,"MedicoNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9953,46,"MEDICOCRM","","","MedicoCRM","char",0,"px",15,15,"left",null,[],9953,"MedicoCRM",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9954,47,"MEDICOCPF","","","MedicoCPF","char",0,"px",14,14,"left",null,[],9954,"MedicoCPF",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",48,0,"px",17,"px","e2025b2_client","","Alterar","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",49,0,"px",17,"px","e2125b2_client","","Excluir","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpcon","vBMPCON",50,0,"px",17,"px","e2225b2_client","","Cons","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE7",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vMEDICONOME",gxz:"ZV15MedicoNome",gxold:"OV15MedicoNome",gxvar:"AV15MedicoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15MedicoNome=Value},v2z:function(Value){gx.O.ZV15MedicoNome=Value},v2c:function(){gx.fn.setControlValue("vMEDICONOME",gx.O.AV15MedicoNome,0)},c2v:function(){gx.O.AV15MedicoNome=this.val()},val:function(){return gx.fn.getControlValue("vMEDICONOME")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE1",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"IMAGE1",grid:0};
   GXValidFnc[32]={fld:"BTNHELP",grid:0};
   GXValidFnc[34]={fld:"TABLE5",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MEDICOID",gxz:"Z9946MedicoId",gxold:"O9946MedicoId",gxvar:"A9946MedicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9946MedicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9946MedicoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MEDICOID",row || gx.fn.currentGridRowImpl(43),gx.O.A9946MedicoId,0)},c2v:function(){gx.O.A9946MedicoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MEDICOID",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MEDICONOME",gxz:"Z9952MedicoNome",gxold:"O9952MedicoNome",gxvar:"A9952MedicoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9952MedicoNome=Value},v2z:function(Value){gx.O.Z9952MedicoNome=Value},v2c:function(row){gx.fn.setGridControlValue("MEDICONOME",row || gx.fn.currentGridRowImpl(43),gx.O.A9952MedicoNome,0)},c2v:function(){gx.O.A9952MedicoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("MEDICONOME",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MEDICOCRM",gxz:"Z9953MedicoCRM",gxold:"O9953MedicoCRM",gxvar:"A9953MedicoCRM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9953MedicoCRM=Value},v2z:function(Value){gx.O.Z9953MedicoCRM=Value},v2c:function(row){gx.fn.setGridControlValue("MEDICOCRM",row || gx.fn.currentGridRowImpl(43),gx.O.A9953MedicoCRM,0)},c2v:function(){gx.O.A9953MedicoCRM=this.val()},val:function(row){return gx.fn.getGridControlValue("MEDICOCRM",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MEDICOCPF",gxz:"Z9954MedicoCPF",gxold:"O9954MedicoCPF",gxvar:"A9954MedicoCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9954MedicoCPF=Value},v2z:function(Value){gx.O.Z9954MedicoCPF=Value},v2c:function(row){gx.fn.setGridControlValue("MEDICOCPF",row || gx.fn.currentGridRowImpl(43),gx.O.A9954MedicoCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9954MedicoCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("MEDICOCPF",row || gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV5bmpAlt",gxold:"OV5bmpAlt",gxvar:"AV5bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpAlt=Value},v2z:function(Value){gx.O.ZV5bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(43),gx.O.AV5bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV5bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43),gx.O.AV7bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV6bmpCon",gxold:"OV6bmpCon",gxvar:"AV6bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpCon=Value},v2z:function(Value){gx.O.ZV6bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(43),gx.O.AV6bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV6bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vORDEREDBY",gxz:"ZV22OrderedBy",gxold:"OV22OrderedBy",gxvar:"AV22OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV22OrderedBy,0)},c2v:function(){gx.O.AV22OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15MedicoNome = "" ;
   this.ZV15MedicoNome = "" ;
   this.OV15MedicoNome = "" ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.Z9946MedicoId = 0 ;
   this.O9946MedicoId = 0 ;
   this.Z9952MedicoNome = "" ;
   this.O9952MedicoNome = "" ;
   this.Z9953MedicoCRM = "" ;
   this.O9953MedicoCRM = "" ;
   this.Z9954MedicoCPF = "" ;
   this.O9954MedicoCPF = "" ;
   this.ZV5bmpAlt = "" ;
   this.OV5bmpAlt = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.ZV6bmpCon = "" ;
   this.OV6bmpCon = "" ;
   this.AV22OrderedBy = 0 ;
   this.ZV22OrderedBy = 0 ;
   this.OV22OrderedBy = 0 ;
   this.AV15MedicoNome = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV22OrderedBy = 0 ;
   this.A9945MedicoEmpresaId = "" ;
   this.A9946MedicoId = 0 ;
   this.A9952MedicoNome = "" ;
   this.A9953MedicoCRM = "" ;
   this.A9954MedicoCPF = "" ;
   this.AV5bmpAlt = "" ;
   this.AV7bmpExc = "" ;
   this.AV6bmpCon = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV28SnRecuperaFiltro = "" ;
   this.AV36Pgmname = "" ;
   this.Events = {"e1125b2_client": ["'ANTERIOR'", true] ,"e1225b2_client": ["'PROXIMO'", true] ,"e1725b2_client": ["VPAGINA.CLICK", true] ,"e1325b2_client": ["'NOVO'", true] ,"e1425b2_client": ["'FECHAR'", true] ,"e1525b2_client": ["'IMPRIMIR'", true] ,"e1625b2_client": ["'PROCURAR'", true] ,"e2025b2_client": ["'ALTERAR'", true] ,"e2125b2_client": ["'EXCLUIR'", true] ,"e2225b2_client": ["'CONSULTAR'", true] ,"e2325b2_client": ["'ATUALIZAPAGINA'", true] ,"e2525b2_client": ["ENTER", true] ,"e2625b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID1.REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{ctrl:'MEDICONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MEDICONOME","Title")',ctrl:'MEDICONOME',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MEDICOCRM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MEDICOCRM","Title")',ctrl:'MEDICOCRM',prop:'Title'},{ctrl:'MEDICOCPF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MEDICOCPF","Title")',ctrl:'MEDICOCPF',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV10filtros',fld:'vFILTROS'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV22OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV37Pgmdesc',fld:'vPGMDESC'}],[{av:'AV21OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV33QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A9946MedicoId',fld:'MEDICOID'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A9946MedicoId',fld:'MEDICOID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A9946MedicoId',fld:'MEDICOID'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A9946MedicoId',fld:'MEDICOID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A9946MedicoId',fld:'MEDICOID'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A9946MedicoId',fld:'MEDICOID'},{av:'AV10filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV15MedicoNome',fld:'vMEDICONOME'},{av:'AV22OrderedBy',fld:'vORDEREDBY'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV6bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV28SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV9EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[57]);
   Grid1Container.addRefreshingVar({rfrVar:"AV9EmpresaPadrao"});
   Grid1Container.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV5bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   Grid1Container.addRefreshingVar({rfrVar:"AV6bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   Grid1Container.addRefreshingVar({rfrVar:"AV28SnRecuperaFiltro"});
   Grid1Container.addRefreshingVar({rfrVar:"AV36Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmedico());
