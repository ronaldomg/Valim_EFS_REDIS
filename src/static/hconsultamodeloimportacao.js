/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:38.81
*/
gx.evt.autoSkip = false;
gx.define('hconsultamodeloimportacao', false, function () {
   this.ServerClass =  "hconsultamodeloimportacao" ;
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
      this.AV16ModeloImportacaoOut=gx.fn.getIntegerValue("vMODELOIMPORTACAOOUT",'.') ;
   };
   this.e17wu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11wu2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12wu2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13wu2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14wu2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15wu2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20wu2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21wu1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,29,30,31,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamodeloimportacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5916,24,"IMPORTACAOMODELO","","","ImportacaoModelo","int",0,"px",3,3,"right",null,[],5916,"ImportacaoModelo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5917,25,"IMPORTACAOMODELODESCRICAO","","","ImportacaoModeloDescricao","svchar",0,"px",40,40,"left",null,[],5917,"ImportacaoModeloDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tipodelimitador",26,"vTIPODELIMITADOR","","","TipoDelimitador","svchar",0,"px",20,20,"left",null,[],"Tipodelimitador","TipoDelimitador",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tiposeparador",27,"vTIPOSEPARADOR","","","TipoSeparador","svchar",0,"px",20,20,"left",null,[],"Tiposeparador","TipoSeparador",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsnativo","vBMPSNATIVO",28,0,"px",17,"px",null,"","Ativo","Image","");
   GridContainer.addSingleLineEdit(5925,29,"IMPORTACAOTIPODELIMITADOR","Delimitador","","ImportacaoTipoDelimitador","char",0,"px",1,1,"left",null,[],5925,"ImportacaoTipoDelimitador",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5924,30,"IMPORTACAOTIPOSEPARADOR","Separador","","ImportacaoTipoSeparador","char",0,"px",1,1,"left",null,[],5924,"ImportacaoTipoSeparador",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5926,31,"IMPORTACAOATIVO","Ativo","","ImportacaoAtivo","char",0,"px",1,1,"left",null,[],5926,"ImportacaoAtivo",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vIMPORTACAOMODELO",gxz:"ZV20ImportacaoModelo",gxold:"OV20ImportacaoModelo",gxvar:"AV20ImportacaoModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ImportacaoModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20ImportacaoModelo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vIMPORTACAOMODELO",gx.O.AV20ImportacaoModelo,0)},c2v:function(){gx.O.AV20ImportacaoModelo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIMPORTACAOMODELO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vIMPORTACAOMODELODESCRICAO",gxz:"ZV21ImportacaoModeloDescricao",gxold:"OV21ImportacaoModeloDescricao",gxvar:"AV21ImportacaoModeloDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ImportacaoModeloDescricao=Value},v2z:function(Value){gx.O.ZV21ImportacaoModeloDescricao=Value},v2c:function(){gx.fn.setControlValue("vIMPORTACAOMODELODESCRICAO",gx.O.AV21ImportacaoModeloDescricao,0)},c2v:function(){gx.O.AV21ImportacaoModeloDescricao=this.val()},val:function(){return gx.fn.getControlValue("vIMPORTACAOMODELODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOMODELO",gxz:"Z5916ImportacaoModelo",gxold:"O5916ImportacaoModelo",gxvar:"A5916ImportacaoModelo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5916ImportacaoModelo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5916ImportacaoModelo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("IMPORTACAOMODELO",row || gx.fn.currentGridRowImpl(23),gx.O.A5916ImportacaoModelo,0)},c2v:function(){gx.O.A5916ImportacaoModelo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("IMPORTACAOMODELO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOMODELODESCRICAO",gxz:"Z5917ImportacaoModeloDescricao",gxold:"O5917ImportacaoModeloDescricao",gxvar:"A5917ImportacaoModeloDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5917ImportacaoModeloDescricao=Value},v2z:function(Value){gx.O.Z5917ImportacaoModeloDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("IMPORTACAOMODELODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A5917ImportacaoModeloDescricao,0)},c2v:function(){gx.O.A5917ImportacaoModeloDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPORTACAOMODELODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODELIMITADOR",gxz:"ZV17TipoDelimitador",gxold:"OV17TipoDelimitador",gxvar:"AV17TipoDelimitador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17TipoDelimitador=Value},v2z:function(Value){gx.O.ZV17TipoDelimitador=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPODELIMITADOR",row || gx.fn.currentGridRowImpl(23),gx.O.AV17TipoDelimitador,0)},c2v:function(){gx.O.AV17TipoDelimitador=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPODELIMITADOR",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOSEPARADOR",gxz:"ZV18TipoSeparador",gxold:"OV18TipoSeparador",gxvar:"AV18TipoSeparador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV18TipoSeparador=Value},v2z:function(Value){gx.O.ZV18TipoSeparador=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOSEPARADOR",row || gx.fn.currentGridRowImpl(23),gx.O.AV18TipoSeparador,0)},c2v:function(){gx.O.AV18TipoSeparador=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOSEPARADOR",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNATIVO",gxz:"ZV19bmpSnAtivo",gxold:"OV19bmpSnAtivo",gxvar:"AV19bmpSnAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19bmpSnAtivo=Value},v2z:function(Value){gx.O.ZV19bmpSnAtivo=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNATIVO",row || gx.fn.currentGridRowImpl(23),gx.O.AV19bmpSnAtivo,gx.O.AV27Bmpsnativo_GXI)},c2v:function(){gx.O.AV27Bmpsnativo_GXI=this.val_GXI();gx.O.AV19bmpSnAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNATIVO",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNATIVO_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV27Bmpsnativo_GXI',nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOTIPODELIMITADOR",gxz:"Z5925ImportacaoTipoDelimitador",gxold:"O5925ImportacaoTipoDelimitador",gxvar:"A5925ImportacaoTipoDelimitador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5925ImportacaoTipoDelimitador=Value},v2z:function(Value){gx.O.Z5925ImportacaoTipoDelimitador=Value},v2c:function(row){gx.fn.setGridControlValue("IMPORTACAOTIPODELIMITADOR",row || gx.fn.currentGridRowImpl(23),gx.O.A5925ImportacaoTipoDelimitador,0)},c2v:function(){gx.O.A5925ImportacaoTipoDelimitador=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPORTACAOTIPODELIMITADOR",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOTIPOSEPARADOR",gxz:"Z5924ImportacaoTipoSeparador",gxold:"O5924ImportacaoTipoSeparador",gxvar:"A5924ImportacaoTipoSeparador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5924ImportacaoTipoSeparador=Value},v2z:function(Value){gx.O.Z5924ImportacaoTipoSeparador=Value},v2c:function(row){gx.fn.setGridControlValue("IMPORTACAOTIPOSEPARADOR",row || gx.fn.currentGridRowImpl(23),gx.O.A5924ImportacaoTipoSeparador,0)},c2v:function(){gx.O.A5924ImportacaoTipoSeparador=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPORTACAOTIPOSEPARADOR",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"IMPORTACAOATIVO",gxz:"Z5926ImportacaoAtivo",gxold:"O5926ImportacaoAtivo",gxvar:"A5926ImportacaoAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5926ImportacaoAtivo=Value},v2z:function(Value){gx.O.Z5926ImportacaoAtivo=Value},v2c:function(row){gx.fn.setGridControlValue("IMPORTACAOATIVO",row || gx.fn.currentGridRowImpl(23),gx.O.A5926ImportacaoAtivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5926ImportacaoAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPORTACAOATIVO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLENAV",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV20ImportacaoModelo = 0 ;
   this.ZV20ImportacaoModelo = 0 ;
   this.OV20ImportacaoModelo = 0 ;
   this.AV21ImportacaoModeloDescricao = "" ;
   this.ZV21ImportacaoModeloDescricao = "" ;
   this.OV21ImportacaoModeloDescricao = "" ;
   this.Z5916ImportacaoModelo = 0 ;
   this.O5916ImportacaoModelo = 0 ;
   this.Z5917ImportacaoModeloDescricao = "" ;
   this.O5917ImportacaoModeloDescricao = "" ;
   this.ZV17TipoDelimitador = "" ;
   this.OV17TipoDelimitador = "" ;
   this.ZV18TipoSeparador = "" ;
   this.OV18TipoSeparador = "" ;
   this.ZV19bmpSnAtivo = "" ;
   this.OV19bmpSnAtivo = "" ;
   this.Z5925ImportacaoTipoDelimitador = "" ;
   this.O5925ImportacaoTipoDelimitador = "" ;
   this.Z5924ImportacaoTipoSeparador = "" ;
   this.O5924ImportacaoTipoSeparador = "" ;
   this.Z5926ImportacaoAtivo = "" ;
   this.O5926ImportacaoAtivo = "" ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV20ImportacaoModelo = 0 ;
   this.AV21ImportacaoModeloDescricao = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16ModeloImportacaoOut = 0 ;
   this.A5915ImportacaoModeloEmpresaId = "" ;
   this.A5916ImportacaoModelo = 0 ;
   this.A5917ImportacaoModeloDescricao = "" ;
   this.AV17TipoDelimitador = "" ;
   this.AV18TipoSeparador = "" ;
   this.AV19bmpSnAtivo = "" ;
   this.A5925ImportacaoTipoDelimitador = "" ;
   this.A5924ImportacaoTipoSeparador = "" ;
   this.A5926ImportacaoAtivo = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17wu2_client": ["ENTER", true] ,"e11wu2_client": ["'GXM_FIRST'", true] ,"e12wu2_client": ["'GXM_PREVIOUS'", true] ,"e13wu2_client": ["'GXM_NEXT'", true] ,"e14wu2_client": ["'GXM_LAST'", true] ,"e15wu2_client": ["'PROCURAR'", true] ,"e20wu2_client": ["'ATUALIZAPAGINA'", true] ,"e21wu1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV21ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'IMPORTACAOMODELO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("IMPORTACAOMODELO","Title")',ctrl:'IMPORTACAOMODELO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'IMPORTACAOMODELODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("IMPORTACAOMODELODESCRICAO","Title")',ctrl:'IMPORTACAOMODELODESCRICAO',prop:'Title'},{ctrl:'vTIPODELIMITADOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vTIPODELIMITADOR","Title")',ctrl:'vTIPODELIMITADOR',prop:'Title'},{ctrl:'vTIPOSEPARADOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vTIPOSEPARADOR","Title")',ctrl:'vTIPOSEPARADOR',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5916ImportacaoModelo',fld:'IMPORTACAOMODELO'}],[{av:'AV16ModeloImportacaoOut',fld:'vMODELOIMPORTACAOOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV21ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV21ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV21ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV21ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV21ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'}],[{av:'AV17TipoDelimitador',fld:'vTIPODELIMITADOR'},{av:'AV18TipoSeparador',fld:'vTIPOSEPARADOR'},{av:'AV19bmpSnAtivo',fld:'vBMPSNATIVO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20ImportacaoModelo',fld:'vIMPORTACAOMODELO'},{av:'AV21ImportacaoModeloDescricao',fld:'vIMPORTACAOMODELODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A5925ImportacaoTipoDelimitador',fld:'IMPORTACAOTIPODELIMITADOR'},{av:'A5924ImportacaoTipoSeparador',fld:'IMPORTACAOTIPOSEPARADOR'},{av:'A5926ImportacaoAtivo',fld:'IMPORTACAOATIVO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV16ModeloImportacaoOut", "vMODELOIMPORTACAOOUT", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A5925ImportacaoTipoDelimitador", rfrProp:"Value", gxAttId:"5925"});
   GridContainer.addRefreshingVar({rfrVar:"A5924ImportacaoTipoSeparador", rfrProp:"Value", gxAttId:"5924"});
   GridContainer.addRefreshingVar({rfrVar:"A5926ImportacaoAtivo", rfrProp:"Value", gxAttId:"5926"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamodeloimportacao());
