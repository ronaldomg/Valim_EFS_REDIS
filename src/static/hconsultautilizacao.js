/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:53.67
*/
gx.evt.autoSkip = false;
gx.define('hconsultautilizacao', false, function () {
   this.ServerClass =  "hconsultautilizacao" ;
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
      this.AV24UtilizacaoIdParm=gx.fn.getIntegerValue("vUTILIZACAOIDPARM",'.') ;
      this.AV25SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
   };
   this.e18ny2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e19ny2_client=function()
   {
      this.executeServerEvent("UTILIZACAOID.CLICK", true, arguments[0], false, false);
   };
   this.e11ny2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ny2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ny2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ny2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15ny2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16ny2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e21ny2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22ny2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24ny1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,34,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultautilizacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4026,24,"UTILIZACAOID","","","UtilizacaoId","int",0,"px",3,3,"right","e19ny2_client",[],4026,"UtilizacaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4059,25,"UTILIZACAODESCRICAO","","","UtilizacaoDescricao","svchar",0,"px",30,30,"left",null,[],4059,"UtilizacaoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",26,0,"px",17,"px","e21ny2_client","","Alterar","Image","");
   GridContainer.addSingleLineEdit("Utilizacaodescricaoout",27,"vUTILIZACAODESCRICAOOUT","Utilizacao Descricao Out","","UtilizacaoDescricaoOut","svchar",0,"px",30,30,"left",null,[],"Utilizacaodescricaoout","UtilizacaoDescricaoOut",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Utilizacaoidout",28,"vUTILIZACAOIDOUT","Utilizacao Id Out","","UtilizacaoIdOut","int",0,"px",3,3,"right",null,[],"Utilizacaoidout","UtilizacaoIdOut",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUTILIZACAOID",gxz:"ZV16UtilizacaoId",gxold:"OV16UtilizacaoId",gxvar:"AV16UtilizacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16UtilizacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16UtilizacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUTILIZACAOID",gx.O.AV16UtilizacaoId,0)},c2v:function(){gx.O.AV16UtilizacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUTILIZACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUTILIZACAODESCRICAO",gxz:"ZV18UtilizacaoDescricao",gxold:"OV18UtilizacaoDescricao",gxvar:"AV18UtilizacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18UtilizacaoDescricao=Value},v2z:function(Value){gx.O.ZV18UtilizacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vUTILIZACAODESCRICAO",gx.O.AV18UtilizacaoDescricao,0)},c2v:function(){gx.O.AV18UtilizacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vUTILIZACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"UTILIZACAOID",gxz:"Z4026UtilizacaoId",gxold:"O4026UtilizacaoId",gxvar:"A4026UtilizacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4026UtilizacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4026UtilizacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("UTILIZACAOID",row || gx.fn.currentGridRowImpl(23),gx.O.A4026UtilizacaoId,0)},c2v:function(){gx.O.A4026UtilizacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("UTILIZACAOID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"UTILIZACAODESCRICAO",gxz:"Z4059UtilizacaoDescricao",gxold:"O4059UtilizacaoDescricao",gxvar:"A4059UtilizacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4059UtilizacaoDescricao=Value},v2z:function(Value){gx.O.Z4059UtilizacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("UTILIZACAODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A4059UtilizacaoDescricao,0)},c2v:function(){gx.O.A4059UtilizacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("UTILIZACAODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV19bmpAlt",gxold:"OV19bmpAlt",gxvar:"AV19bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19bmpAlt=Value},v2z:function(Value){gx.O.ZV19bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV19bmpAlt,gx.O.AV32Bmpalt_GXI)},c2v:function(){gx.O.AV32Bmpalt_GXI=this.val_GXI();gx.O.AV19bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV32Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUTILIZACAODESCRICAOOUT",gxz:"ZV23UtilizacaoDescricaoOut",gxold:"OV23UtilizacaoDescricaoOut",gxvar:"AV23UtilizacaoDescricaoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23UtilizacaoDescricaoOut=Value},v2z:function(Value){gx.O.ZV23UtilizacaoDescricaoOut=Value},v2c:function(row){gx.fn.setGridControlValue("vUTILIZACAODESCRICAOOUT",row || gx.fn.currentGridRowImpl(23),gx.O.AV23UtilizacaoDescricaoOut,0)},c2v:function(){gx.O.AV23UtilizacaoDescricaoOut=this.val()},val:function(row){return gx.fn.getGridControlValue("vUTILIZACAODESCRICAOOUT",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vUTILIZACAOIDOUT",gxz:"ZV21UtilizacaoIdOut",gxold:"OV21UtilizacaoIdOut",gxvar:"AV21UtilizacaoIdOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21UtilizacaoIdOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21UtilizacaoIdOut=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vUTILIZACAOIDOUT",row || gx.fn.currentGridRowImpl(23),gx.O.AV21UtilizacaoIdOut,0)},c2v:function(){gx.O.AV21UtilizacaoIdOut=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vUTILIZACAOIDOUT",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLENAV",grid:0};
   GXValidFnc[37]={fld:"INCLUICLIENTE1",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV27Pagina)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV28PaginaAux",gxold:"OV28PaginaAux",gxvar:"AV28PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV28PaginaAux,0)},c2v:function(){gx.O.AV28PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16UtilizacaoId = 0 ;
   this.ZV16UtilizacaoId = 0 ;
   this.OV16UtilizacaoId = 0 ;
   this.AV18UtilizacaoDescricao = "" ;
   this.ZV18UtilizacaoDescricao = "" ;
   this.OV18UtilizacaoDescricao = "" ;
   this.Z4026UtilizacaoId = 0 ;
   this.O4026UtilizacaoId = 0 ;
   this.Z4059UtilizacaoDescricao = "" ;
   this.O4059UtilizacaoDescricao = "" ;
   this.ZV19bmpAlt = "" ;
   this.OV19bmpAlt = "" ;
   this.ZV23UtilizacaoDescricaoOut = "" ;
   this.OV23UtilizacaoDescricaoOut = "" ;
   this.ZV21UtilizacaoIdOut = 0 ;
   this.OV21UtilizacaoIdOut = 0 ;
   this.AV27Pagina = 0 ;
   this.ZV27Pagina = 0 ;
   this.OV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.ZV28PaginaAux = 0 ;
   this.OV28PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16UtilizacaoId = 0 ;
   this.AV18UtilizacaoDescricao = "" ;
   this.AV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV24UtilizacaoIdParm = 0 ;
   this.A4025UtilizacaoEmpresaId = "" ;
   this.A4026UtilizacaoId = 0 ;
   this.A4059UtilizacaoDescricao = "" ;
   this.AV19bmpAlt = "" ;
   this.AV23UtilizacaoDescricaoOut = "" ;
   this.AV21UtilizacaoIdOut = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.AV25SnParametro = "" ;
   this.Events = {"e18ny2_client": ["ENTER", true] ,"e19ny2_client": ["UTILIZACAOID.CLICK", true] ,"e11ny2_client": ["'GXM_FIRST'", true] ,"e12ny2_client": ["'GXM_PREVIOUS'", true] ,"e13ny2_client": ["'GXM_NEXT'", true] ,"e14ny2_client": ["'GXM_LAST'", true] ,"e15ny2_client": ["'PROCURAR'", true] ,"e16ny2_client": ["'NOVO'", true] ,"e21ny2_client": ["'ALTERAR'", true] ,"e22ny2_client": ["'ATUALIZAPAGINA'", true] ,"e24ny1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV18UtilizacaoDescricao',fld:'vUTILIZACAODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24UtilizacaoIdParm',fld:'vUTILIZACAOIDPARM',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV16UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV18UtilizacaoDescricao',fld:'vUTILIZACAODESCRICAO'},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{ctrl:'UTILIZACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("UTILIZACAOID","Title")',ctrl:'UTILIZACAOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'UTILIZACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("UTILIZACAODESCRICAO","Title")',ctrl:'UTILIZACAODESCRICAO',prop:'Title'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV26NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A4026UtilizacaoId',fld:'UTILIZACAOID'},{av:'A4059UtilizacaoDescricao',fld:'UTILIZACAODESCRICAO'}],[{av:'AV21UtilizacaoIdOut',fld:'vUTILIZACAOIDOUT'},{av:'AV23UtilizacaoDescricaoOut',fld:'vUTILIZACAODESCRICAOOUT'}]];
   this.EvtParms["UTILIZACAOID.CLICK"] = [[{av:'A4026UtilizacaoId',fld:'UTILIZACAOID'},{av:'A4059UtilizacaoDescricao',fld:'UTILIZACAODESCRICAO'},{av:'AV21UtilizacaoIdOut',fld:'vUTILIZACAOIDOUT'},{av:'AV23UtilizacaoDescricaoOut',fld:'vUTILIZACAODESCRICAOOUT'}],[{av:'AV21UtilizacaoIdOut',fld:'vUTILIZACAOIDOUT'},{av:'AV23UtilizacaoDescricaoOut',fld:'vUTILIZACAODESCRICAOOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV18UtilizacaoDescricao',fld:'vUTILIZACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24UtilizacaoIdParm',fld:'vUTILIZACAOIDPARM',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV18UtilizacaoDescricao',fld:'vUTILIZACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24UtilizacaoIdParm',fld:'vUTILIZACAOIDPARM',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV18UtilizacaoDescricao',fld:'vUTILIZACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24UtilizacaoIdParm',fld:'vUTILIZACAOIDPARM',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV18UtilizacaoDescricao',fld:'vUTILIZACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24UtilizacaoIdParm',fld:'vUTILIZACAOIDPARM',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV18UtilizacaoDescricao',fld:'vUTILIZACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24UtilizacaoIdParm',fld:'vUTILIZACAOIDPARM',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A4026UtilizacaoId',fld:'UTILIZACAOID'}],[{av:'A4026UtilizacaoId',fld:'UTILIZACAOID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16UtilizacaoId',fld:'vUTILIZACAOID'},{av:'AV18UtilizacaoDescricao',fld:'vUTILIZACAODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV24UtilizacaoIdParm',fld:'vUTILIZACAOIDPARM',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24UtilizacaoIdParm", "vUTILIZACAOIDPARM", 0, "int");
   this.setVCMap("AV25SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24UtilizacaoIdParm", "vUTILIZACAOIDPARM", 0, "int");
   this.setVCMap("AV25SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV24UtilizacaoIdParm"});
   GridContainer.addRefreshingVar({rfrVar:"AV25SnParametro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultautilizacao());
