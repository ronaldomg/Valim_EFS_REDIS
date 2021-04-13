/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:17.76
*/
gx.evt.autoSkip = false;
gx.define('hconsultainformacaonut', false, function () {
   this.ServerClass =  "hconsultainformacaonut" ;
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
      this.AV20InformacaoNutIdIN=gx.fn.getIntegerValue("vINFORMACAONUTIDIN",'.') ;
      this.AV21SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV18PInformacaoNutId=gx.fn.getIntegerValue("vPINFORMACAONUTID",'.') ;
   };
   this.e18n92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11n92_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12n92_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13n92_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14n92_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15n92_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16n92_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e20n92_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21n92_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23n91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,34,37,40,42,44,46,48,49,50,51,52];
   this.GXLastCtrlId =52;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultainformacaonut",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3621,24,"INFORMACAONUTID","","","InformacaoNutId","int",0,"px",4,4,"right",null,[],3621,"InformacaoNutId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3593,25,"INFORMACAONUTDESCRICAO","","","InformacaoNutDescricao","svchar",0,"px",50,50,"left",null,[],3593,"InformacaoNutDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3594,26,"INFORMACAONUTDSPORCAO","","","InformacaoNutDsPorcao","svchar",0,"px",35,35,"left",null,[],3594,"InformacaoNutDsPorcao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3595,27,"INFORMACAONUTUNPORCAO","","InformacaoNutUNPorcao","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",28,0,"px",17,"px","e20n92_client","","Alt","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vINFORMACAONUTID",gxz:"ZV16InformacaoNutId",gxold:"OV16InformacaoNutId",gxvar:"AV16InformacaoNutId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16InformacaoNutId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16InformacaoNutId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINFORMACAONUTID",gx.O.AV16InformacaoNutId,0)},c2v:function(){gx.O.AV16InformacaoNutId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINFORMACAONUTID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vINFORMACAONUTDESCRICAO",gxz:"ZV17InformacaoNutDescricao",gxold:"OV17InformacaoNutDescricao",gxvar:"AV17InformacaoNutDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17InformacaoNutDescricao=Value},v2z:function(Value){gx.O.ZV17InformacaoNutDescricao=Value},v2c:function(){gx.fn.setControlValue("vINFORMACAONUTDESCRICAO",gx.O.AV17InformacaoNutDescricao,0)},c2v:function(){gx.O.AV17InformacaoNutDescricao=this.val()},val:function(){return gx.fn.getControlValue("vINFORMACAONUTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAONUTID",gxz:"Z3621InformacaoNutId",gxold:"O3621InformacaoNutId",gxvar:"A3621InformacaoNutId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3621InformacaoNutId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3621InformacaoNutId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INFORMACAONUTID",row || gx.fn.currentGridRowImpl(23),gx.O.A3621InformacaoNutId,0)},c2v:function(){gx.O.A3621InformacaoNutId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INFORMACAONUTID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAONUTDESCRICAO",gxz:"Z3593InformacaoNutDescricao",gxold:"O3593InformacaoNutDescricao",gxvar:"A3593InformacaoNutDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3593InformacaoNutDescricao=Value},v2z:function(Value){gx.O.Z3593InformacaoNutDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("INFORMACAONUTDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A3593InformacaoNutDescricao,0)},c2v:function(){gx.O.A3593InformacaoNutDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("INFORMACAONUTDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAONUTDSPORCAO",gxz:"Z3594InformacaoNutDsPorcao",gxold:"O3594InformacaoNutDsPorcao",gxvar:"A3594InformacaoNutDsPorcao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3594InformacaoNutDsPorcao=Value},v2z:function(Value){gx.O.Z3594InformacaoNutDsPorcao=Value},v2c:function(row){gx.fn.setGridControlValue("INFORMACAONUTDSPORCAO",row || gx.fn.currentGridRowImpl(23),gx.O.A3594InformacaoNutDsPorcao,0)},c2v:function(){gx.O.A3594InformacaoNutDsPorcao=this.val()},val:function(row){return gx.fn.getGridControlValue("INFORMACAONUTDSPORCAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAONUTUNPORCAO",gxz:"Z3595InformacaoNutUNPorcao",gxold:"O3595InformacaoNutUNPorcao",gxvar:"A3595InformacaoNutUNPorcao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3595InformacaoNutUNPorcao=Value},v2z:function(Value){gx.O.Z3595InformacaoNutUNPorcao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INFORMACAONUTUNPORCAO",row || gx.fn.currentGridRowImpl(23),gx.O.A3595InformacaoNutUNPorcao)},c2v:function(){gx.O.A3595InformacaoNutUNPorcao=this.val()},val:function(row){return gx.fn.getGridControlValue("INFORMACAONUTUNPORCAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV19bmpAlt",gxold:"OV19bmpAlt",gxvar:"AV19bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19bmpAlt=Value},v2z:function(Value){gx.O.ZV19bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV19bmpAlt,gx.O.AV27Bmpalt_GXI)},c2v:function(){gx.O.AV27Bmpalt_GXI=this.val_GXI();gx.O.AV19bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV27Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLENAV",grid:0};
   GXValidFnc[37]={fld:"BTNADD",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={fld:"JS", format:2,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16InformacaoNutId = 0 ;
   this.ZV16InformacaoNutId = 0 ;
   this.OV16InformacaoNutId = 0 ;
   this.AV17InformacaoNutDescricao = "" ;
   this.ZV17InformacaoNutDescricao = "" ;
   this.OV17InformacaoNutDescricao = "" ;
   this.Z3621InformacaoNutId = 0 ;
   this.O3621InformacaoNutId = 0 ;
   this.Z3593InformacaoNutDescricao = "" ;
   this.O3593InformacaoNutDescricao = "" ;
   this.Z3594InformacaoNutDsPorcao = "" ;
   this.O3594InformacaoNutDsPorcao = "" ;
   this.Z3595InformacaoNutUNPorcao = "" ;
   this.O3595InformacaoNutUNPorcao = "" ;
   this.ZV19bmpAlt = "" ;
   this.OV19bmpAlt = "" ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16InformacaoNutId = 0 ;
   this.AV17InformacaoNutDescricao = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18PInformacaoNutId = 0 ;
   this.AV20InformacaoNutIdIN = 0 ;
   this.A3620InformacaoNutEmpresaId = "" ;
   this.A3621InformacaoNutId = 0 ;
   this.A3593InformacaoNutDescricao = "" ;
   this.A3594InformacaoNutDsPorcao = "" ;
   this.A3595InformacaoNutUNPorcao = "" ;
   this.AV19bmpAlt = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21SnParametro = "" ;
   this.Events = {"e18n92_client": ["ENTER", true] ,"e11n92_client": ["'GXM_FIRST'", true] ,"e12n92_client": ["'GXM_PREVIOUS'", true] ,"e13n92_client": ["'GXM_NEXT'", true] ,"e14n92_client": ["'GXM_LAST'", true] ,"e15n92_client": ["'PROCURAR'", true] ,"e16n92_client": ["'NOVO'", true] ,"e20n92_client": ["'ALTERAR'", true] ,"e21n92_client": ["'ATUALIZAPAGINA'", true] ,"e23n91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16InformacaoNutId',fld:'vINFORMACAONUTID'},{av:'AV17InformacaoNutDescricao',fld:'vINFORMACAONUTDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20InformacaoNutIdIN',fld:'vINFORMACAONUTIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV16InformacaoNutId',fld:'vINFORMACAONUTID'},{av:'AV17InformacaoNutDescricao',fld:'vINFORMACAONUTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{ctrl:'INFORMACAONUTID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INFORMACAONUTID","Title")',ctrl:'INFORMACAONUTID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'INFORMACAONUTDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INFORMACAONUTDESCRICAO","Title")',ctrl:'INFORMACAONUTDESCRICAO',prop:'Title'},{ctrl:'INFORMACAONUTDSPORCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("INFORMACAONUTDSPORCAO","Title")',ctrl:'INFORMACAONUTDSPORCAO',prop:'Title'},{ctrl:'INFORMACAONUTUNPORCAO'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3621InformacaoNutId',fld:'INFORMACAONUTID'}],[{av:'AV18PInformacaoNutId',fld:'vPINFORMACAONUTID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16InformacaoNutId',fld:'vINFORMACAONUTID'},{av:'AV17InformacaoNutDescricao',fld:'vINFORMACAONUTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20InformacaoNutIdIN',fld:'vINFORMACAONUTIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16InformacaoNutId',fld:'vINFORMACAONUTID'},{av:'AV17InformacaoNutDescricao',fld:'vINFORMACAONUTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20InformacaoNutIdIN',fld:'vINFORMACAONUTIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16InformacaoNutId',fld:'vINFORMACAONUTID'},{av:'AV17InformacaoNutDescricao',fld:'vINFORMACAONUTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20InformacaoNutIdIN',fld:'vINFORMACAONUTIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16InformacaoNutId',fld:'vINFORMACAONUTID'},{av:'AV17InformacaoNutDescricao',fld:'vINFORMACAONUTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20InformacaoNutIdIN',fld:'vINFORMACAONUTIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16InformacaoNutId',fld:'vINFORMACAONUTID'},{av:'AV17InformacaoNutDescricao',fld:'vINFORMACAONUTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20InformacaoNutIdIN',fld:'vINFORMACAONUTIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3621InformacaoNutId',fld:'INFORMACAONUTID'}],[{av:'A3621InformacaoNutId',fld:'INFORMACAONUTID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16InformacaoNutId',fld:'vINFORMACAONUTID'},{av:'AV17InformacaoNutDescricao',fld:'vINFORMACAONUTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20InformacaoNutIdIN',fld:'vINFORMACAONUTIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20InformacaoNutIdIN", "vINFORMACAONUTIDIN", 0, "int");
   this.setVCMap("AV21SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV18PInformacaoNutId", "vPINFORMACAONUTID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20InformacaoNutIdIN", "vINFORMACAONUTIDIN", 0, "int");
   this.setVCMap("AV21SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV20InformacaoNutIdIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV21SnParametro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultainformacaonut());
