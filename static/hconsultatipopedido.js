/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:45.62
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipopedido', false, function () {
   this.ServerClass =  "hconsultatipopedido" ;
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
      this.AV20TipoPedidoIdIN=gx.fn.getControlValue("vTIPOPEDIDOIDIN") ;
      this.AV21SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV16TipoPedidoId=gx.fn.getControlValue("vTIPOPEDIDOID") ;
   };
   this.e18nt2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11nt2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nt2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nt2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nt2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15nt2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16nt2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e20nt2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21nt2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23nt1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,32,35,38,40,42,44,46,47,48,49];
   this.GXLastCtrlId =49;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipopedido",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3753,24,"TIPOPEDIDOID","","","TipoPedidoId","char",0,"px",3,3,"left",null,[],3753,"TipoPedidoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4080,25,"TIPOPEDIDODESCRICAO","","","TipoPedidoDescricao","svchar",0,"px",30,30,"left",null,[],4080,"TipoPedidoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",26,0,"px",17,"px","e20nt2_client","","Alt","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCODTIPOPED",gxz:"ZV17CodTipoPed",gxold:"OV17CodTipoPed",gxvar:"AV17CodTipoPed",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17CodTipoPed=Value},v2z:function(Value){gx.O.ZV17CodTipoPed=Value},v2c:function(){gx.fn.setControlValue("vCODTIPOPED",gx.O.AV17CodTipoPed,0)},c2v:function(){gx.O.AV17CodTipoPed=this.val()},val:function(){return gx.fn.getControlValue("vCODTIPOPED")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDESCTIPOPED",gxz:"ZV18DescTipoPed",gxold:"OV18DescTipoPed",gxvar:"AV18DescTipoPed",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18DescTipoPed=Value},v2z:function(Value){gx.O.ZV18DescTipoPed=Value},v2c:function(){gx.fn.setControlValue("vDESCTIPOPED",gx.O.AV18DescTipoPed,0)},c2v:function(){gx.O.AV18DescTipoPed=this.val()},val:function(){return gx.fn.getControlValue("vDESCTIPOPED")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPEDIDOID",gxz:"Z3753TipoPedidoId",gxold:"O3753TipoPedidoId",gxvar:"A3753TipoPedidoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3753TipoPedidoId=Value},v2z:function(Value){gx.O.Z3753TipoPedidoId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPEDIDOID",row || gx.fn.currentGridRowImpl(23),gx.O.A3753TipoPedidoId,0)},c2v:function(){gx.O.A3753TipoPedidoId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPEDIDOID",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPEDIDODESCRICAO",gxz:"Z4080TipoPedidoDescricao",gxold:"O4080TipoPedidoDescricao",gxvar:"A4080TipoPedidoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4080TipoPedidoDescricao=Value},v2z:function(Value){gx.O.Z4080TipoPedidoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOPEDIDODESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A4080TipoPedidoDescricao,0)},c2v:function(){gx.O.A4080TipoPedidoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOPEDIDODESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV19bmpAlt",gxold:"OV19bmpAlt",gxvar:"AV19bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19bmpAlt=Value},v2z:function(Value){gx.O.ZV19bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV19bmpAlt,gx.O.AV27Bmpalt_GXI)},c2v:function(){gx.O.AV27Bmpalt_GXI=this.val_GXI();gx.O.AV19bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV27Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLENAV",grid:0};
   GXValidFnc[35]={fld:"BTNADD",grid:0};
   GXValidFnc[38]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[40]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[42]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[44]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[46]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV17CodTipoPed = "" ;
   this.ZV17CodTipoPed = "" ;
   this.OV17CodTipoPed = "" ;
   this.AV18DescTipoPed = "" ;
   this.ZV18DescTipoPed = "" ;
   this.OV18DescTipoPed = "" ;
   this.Z3753TipoPedidoId = "" ;
   this.O3753TipoPedidoId = "" ;
   this.Z4080TipoPedidoDescricao = "" ;
   this.O4080TipoPedidoDescricao = "" ;
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
   this.AV17CodTipoPed = "" ;
   this.AV18DescTipoPed = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16TipoPedidoId = "" ;
   this.AV20TipoPedidoIdIN = "" ;
   this.A4083TipoPedidoEmpresaId = "" ;
   this.A3753TipoPedidoId = "" ;
   this.A4080TipoPedidoDescricao = "" ;
   this.AV19bmpAlt = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21SnParametro = "" ;
   this.Events = {"e18nt2_client": ["ENTER", true] ,"e11nt2_client": ["'GXM_FIRST'", true] ,"e12nt2_client": ["'GXM_PREVIOUS'", true] ,"e13nt2_client": ["'GXM_NEXT'", true] ,"e14nt2_client": ["'GXM_LAST'", true] ,"e15nt2_client": ["'PROCURAR'", true] ,"e16nt2_client": ["'NOVO'", true] ,"e20nt2_client": ["'ALTERAR'", true] ,"e21nt2_client": ["'ATUALIZAPAGINA'", true] ,"e23nt1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CodTipoPed',fld:'vCODTIPOPED'},{av:'AV18DescTipoPed',fld:'vDESCTIPOPED'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV20TipoPedidoIdIN',fld:'vTIPOPEDIDOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV17CodTipoPed',fld:'vCODTIPOPED'},{av:'AV18DescTipoPed',fld:'vDESCTIPOPED'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{ctrl:'TIPOPEDIDOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOPEDIDOID","Title")',ctrl:'TIPOPEDIDOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPOPEDIDODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOPEDIDODESCRICAO","Title")',ctrl:'TIPOPEDIDODESCRICAO',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3753TipoPedidoId',fld:'TIPOPEDIDOID'}],[{av:'AV16TipoPedidoId',fld:'vTIPOPEDIDOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CodTipoPed',fld:'vCODTIPOPED'},{av:'AV18DescTipoPed',fld:'vDESCTIPOPED'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20TipoPedidoIdIN',fld:'vTIPOPEDIDOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CodTipoPed',fld:'vCODTIPOPED'},{av:'AV18DescTipoPed',fld:'vDESCTIPOPED'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20TipoPedidoIdIN',fld:'vTIPOPEDIDOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CodTipoPed',fld:'vCODTIPOPED'},{av:'AV18DescTipoPed',fld:'vDESCTIPOPED'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20TipoPedidoIdIN',fld:'vTIPOPEDIDOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CodTipoPed',fld:'vCODTIPOPED'},{av:'AV18DescTipoPed',fld:'vDESCTIPOPED'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20TipoPedidoIdIN',fld:'vTIPOPEDIDOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CodTipoPed',fld:'vCODTIPOPED'},{av:'AV18DescTipoPed',fld:'vDESCTIPOPED'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20TipoPedidoIdIN',fld:'vTIPOPEDIDOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV21SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3753TipoPedidoId',fld:'TIPOPEDIDOID'}],[{av:'A3753TipoPedidoId',fld:'TIPOPEDIDOID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17CodTipoPed',fld:'vCODTIPOPED'},{av:'AV18DescTipoPed',fld:'vDESCTIPOPED'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV20TipoPedidoIdIN',fld:'vTIPOPEDIDOIDIN',hsh:true},{av:'AV21SnParametro',fld:'vSNPARAMETRO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20TipoPedidoIdIN", "vTIPOPEDIDOIDIN", 0, "char");
   this.setVCMap("AV21SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV16TipoPedidoId", "vTIPOPEDIDOID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV20TipoPedidoIdIN", "vTIPOPEDIDOIDIN", 0, "char");
   this.setVCMap("AV21SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV20TipoPedidoIdIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV21SnParametro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipopedido());
