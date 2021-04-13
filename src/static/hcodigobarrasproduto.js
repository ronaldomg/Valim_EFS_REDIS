/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:54:14.38
*/
gx.evt.autoSkip = false;
gx.define('hcodigobarrasproduto', false, function () {
   this.ServerClass =  "hcodigobarrasproduto" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV37Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11mp2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12mp2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17mp2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13mp2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14mp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15mp2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16mp2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e21mp2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22mp2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e18mp2_client=function()
   {
      this.executeServerEvent("'CALCULACODIGOBARRAS'", true, null, false, false);
   };
   this.e23mp2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25mp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26mp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,26,29,31,33,35,37,39,41,44,46,47,51,52,53,54,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",50,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcodigobarrasproduto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2968,51,"CODIGOBARRASPRODUTOBARRA","","","CodigoBarrasProdutoBarra","int",0,"px",15,15,"right",null,[],2968,"CodigoBarrasProdutoBarra",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3450,52,"CODIGOBARRASEANTRIBUTAVEL","","","CodigoBarrasEANTributavel","int",0,"px",15,15,"right",null,[],3450,"CodigoBarrasEANTributavel",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e21mp2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px","e22mp2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE9",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[this.GridContainer],fld:"vPRODUTOID",gxz:"ZV27ProdutoId",gxold:"OV27ProdutoId",gxvar:"AV27ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV27ProdutoId,0)},c2v:function(){gx.O.AV27ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESCRICAO",gxz:"ZV28ProdutoDescricao",gxold:"OV28ProdutoDescricao",gxvar:"AV28ProdutoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ProdutoDescricao=Value},v2z:function(Value){gx.O.ZV28ProdutoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESCRICAO",gx.O.AV28ProdutoDescricao,0)},c2v:function(){gx.O.AV28ProdutoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE1",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNCALCCOD",grid:0};
   GXValidFnc[39]={fld:"BTNHELP",grid:0};
   GXValidFnc[41]={fld:"TABLE5",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODIGOBARRASPRODUTOBARRA",gxz:"Z2968CodigoBarrasProdutoBarra",gxold:"O2968CodigoBarrasProdutoBarra",gxvar:"A2968CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2968CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2968CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CODIGOBARRASPRODUTOBARRA",row || gx.fn.currentGridRowImpl(50),gx.O.A2968CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.A2968CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CODIGOBARRASPRODUTOBARRA",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CODIGOBARRASEANTRIBUTAVEL",gxz:"Z3450CodigoBarrasEANTributavel",gxold:"O3450CodigoBarrasEANTributavel",gxvar:"A3450CodigoBarrasEANTributavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3450CodigoBarrasEANTributavel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3450CodigoBarrasEANTributavel=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CODIGOBARRASEANTRIBUTAVEL",row || gx.fn.currentGridRowImpl(50),gx.O.A3450CodigoBarrasEANTributavel,0)},c2v:function(){gx.O.A3450CodigoBarrasEANTributavel=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CODIGOBARRASEANTRIBUTAVEL",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(50),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27ProdutoId = 0 ;
   this.ZV27ProdutoId = 0 ;
   this.OV27ProdutoId = 0 ;
   this.AV28ProdutoDescricao = "" ;
   this.ZV28ProdutoDescricao = "" ;
   this.OV28ProdutoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2968CodigoBarrasProdutoBarra = 0 ;
   this.O2968CodigoBarrasProdutoBarra = 0 ;
   this.Z3450CodigoBarrasEANTributavel = 0 ;
   this.O3450CodigoBarrasEANTributavel = 0 ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27ProdutoId = 0 ;
   this.AV28ProdutoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2960ProdutoDescricao = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2968CodigoBarrasProdutoBarra = 0 ;
   this.A3450CodigoBarrasEANTributavel = 0 ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A2961ProdutoDescricaoResumida = "" ;
   this.A3857ProdutoTipoVendaBalanca = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.AV37Pgmname = "" ;
   this.Events = {"e11mp2_client": ["'ANTERIOR'", true] ,"e12mp2_client": ["'PROXIMO'", true] ,"e17mp2_client": ["VPAGINA.CLICK", true] ,"e13mp2_client": ["'NOVO'", true] ,"e14mp2_client": ["'FECHAR'", true] ,"e15mp2_client": ["'IMPRIMIR'", true] ,"e16mp2_client": ["'PROCURAR'", true] ,"e21mp2_client": ["'EXCLUIR'", true] ,"e22mp2_client": ["'CONSULTAR'", true] ,"e18mp2_client": ["'CALCULACODIGOBARRAS'", true] ,"e23mp2_client": ["'ATUALIZAPAGINA'", true] ,"e25mp2_client": ["ENTER", true] ,"e26mp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{ctrl:'CODIGOBARRASPRODUTOBARRA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CODIGOBARRASPRODUTOBARRA","Title")',ctrl:'CODIGOBARRASPRODUTOBARRA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CODIGOBARRASEANTRIBUTAVEL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CODIGOBARRASEANTRIBUTAVEL","Title")',ctrl:'CODIGOBARRASEANTRIBUTAVEL',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV30ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV30ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV37Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV27ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV38Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'A2960ProdutoDescricao',fld:'PRODUTODESCRICAO'},{av:'AV27ProdutoId',fld:'vPRODUTOID',hsh:true}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV30ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV30ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV30ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[{av:'AV30ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A2968CodigoBarrasProdutoBarra',fld:'CODIGOBARRASPRODUTOBARRA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CALCULACODIGOBARRAS'"] = [[{av:'AV9UsrCod',fld:'vUSRCOD'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ProdutoId',fld:'vPRODUTOID',hsh:true}],[{av:'AV14MsgErro',fld:'vMSGERRO'},{av:'AV32CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ProdutoId',fld:'vPRODUTOID',hsh:true},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV37Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV37Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV37Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcodigobarrasproduto());
