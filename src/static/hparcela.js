/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:49:59.4
*/
gx.evt.autoSkip = false;
gx.define('hparcela', false, function () {
   this.ServerClass =  "hparcela" ;
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
      this.AV29ParcelaEmpresaId=gx.fn.getControlValue("vPARCELAEMPRESAID") ;
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.s132_client=function()
   {
      if ( this.AV11OrderedBy == 1 || this.AV11OrderedBy == 2 )
      {
         this.AV32DescricaoOrdenacao =  "CODIGO"  ;
      }
      if ( this.AV11OrderedBy == 3 || this.AV11OrderedBy == 4 )
      {
         this.AV32DescricaoOrdenacao =  "VALOR MÁXIMO"  ;
      }
      if ( this.AV11OrderedBy == 5 || this.AV11OrderedBy == 6 )
      {
         this.AV32DescricaoOrdenacao =  "QUANTIDADE DE PARCELAS"  ;
      }
   };
   this.e111492_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121492_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171492_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131492_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141492_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151492_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161492_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e201492_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211492_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221492_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e241492_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e251492_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261492_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,21,24,26,27,31,32,33,34,35,36,37,40];
   this.GXLastCtrlId =40;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hparcela",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8318,31,"PARCELAID","","","ParcelaId","int",0,"px",4,4,"right",null,[],8318,"ParcelaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8313,32,"PARCELAVALORMAXIMOPROPOSTA","","","ParcelaValorMaximoProposta","decimal",0,"px",22,22,"right",null,[],8313,"ParcelaValorMaximoProposta",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8314,33,"PARCELAQUANTIDADEPARCELA","","","ParcelaQuantidadeParcela","int",0,"px",4,4,"right",null,[],8314,"ParcelaQuantidadeParcela",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Resultadostr",34,"vRESULTADOSTR","Valor Médio das Parcelas","","ResultadoStr","char",0,"px",22,22,"left",null,[],"Resultadostr","ResultadoStr",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",35,0,"px",17,"px","e201492_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",36,0,"px",17,"px","e211492_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",37,0,"px",17,"px","e221492_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"IMAGE1",grid:0};
   GXValidFnc[19]={fld:"BTNHELP",grid:0};
   GXValidFnc[21]={fld:"TABLE5",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARCELAID",gxz:"Z8318ParcelaId",gxold:"O8318ParcelaId",gxvar:"A8318ParcelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8318ParcelaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8318ParcelaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARCELAID",row || gx.fn.currentGridRowImpl(30),gx.O.A8318ParcelaId,0)},c2v:function(){gx.O.A8318ParcelaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARCELAID",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARCELAVALORMAXIMOPROPOSTA",gxz:"Z8313ParcelaValorMaximoProposta",gxold:"O8313ParcelaValorMaximoProposta",gxvar:"A8313ParcelaValorMaximoProposta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8313ParcelaValorMaximoProposta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8313ParcelaValorMaximoProposta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PARCELAVALORMAXIMOPROPOSTA",row || gx.fn.currentGridRowImpl(30),gx.O.A8313ParcelaValorMaximoProposta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8313ParcelaValorMaximoProposta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PARCELAVALORMAXIMOPROPOSTA",row || gx.fn.currentGridRowImpl(30),'.',',')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARCELAQUANTIDADEPARCELA",gxz:"Z8314ParcelaQuantidadeParcela",gxold:"O8314ParcelaQuantidadeParcela",gxvar:"A8314ParcelaQuantidadeParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8314ParcelaQuantidadeParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8314ParcelaQuantidadeParcela=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARCELAQUANTIDADEPARCELA",row || gx.fn.currentGridRowImpl(30),gx.O.A8314ParcelaQuantidadeParcela,0)},c2v:function(){gx.O.A8314ParcelaQuantidadeParcela=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARCELAQUANTIDADEPARCELA",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:22,dec:0,sign:false,ro:0,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vRESULTADOSTR",gxz:"ZV28ResultadoStr",gxold:"OV28ResultadoStr",gxvar:"AV28ResultadoStr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28ResultadoStr=Value},v2z:function(Value){gx.O.ZV28ResultadoStr=Value},v2c:function(row){gx.fn.setGridControlValue("vRESULTADOSTR",row || gx.fn.currentGridRowImpl(30),gx.O.AV28ResultadoStr,0)},c2v:function(){gx.O.AV28ResultadoStr=this.val()},val:function(row){return gx.fn.getGridControlValue("vRESULTADOSTR",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(30),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(30),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(30))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(30))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8318ParcelaId = 0 ;
   this.O8318ParcelaId = 0 ;
   this.Z8313ParcelaValorMaximoProposta = 0 ;
   this.O8313ParcelaValorMaximoProposta = 0 ;
   this.Z8314ParcelaQuantidadeParcela = 0 ;
   this.O8314ParcelaQuantidadeParcela = 0 ;
   this.ZV28ResultadoStr = "" ;
   this.OV28ResultadoStr = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A8317ParcelaEmpresaId = "" ;
   this.A8318ParcelaId = 0 ;
   this.A8313ParcelaValorMaximoProposta = 0 ;
   this.A8314ParcelaQuantidadeParcela = 0 ;
   this.AV28ResultadoStr = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV29ParcelaEmpresaId = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.AV32DescricaoOrdenacao = "" ;
   this.Events = {"e111492_client": ["'ANTERIOR'", true] ,"e121492_client": ["'PROXIMO'", true] ,"e171492_client": ["VPAGINA.CLICK", true] ,"e131492_client": ["'NOVO'", true] ,"e141492_client": ["'FECHAR'", true] ,"e151492_client": ["'IMPRIMIR'", true] ,"e161492_client": ["'PROCURAR'", true] ,"e201492_client": ["'ALTERAR'", true] ,"e211492_client": ["'EXCLUIR'", true] ,"e221492_client": ["'CONSULTAR'", true] ,"e241492_client": ["'ATUALIZAPAGINA'", true] ,"e251492_client": ["ENTER", true] ,"e261492_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ParcelaEmpresaId',fld:'vPARCELAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8313ParcelaValorMaximoProposta',fld:'PARCELAVALORMAXIMOPROPOSTA'},{av:'A8314ParcelaQuantidadeParcela',fld:'PARCELAQUANTIDADEPARCELA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ParcelaEmpresaId',fld:'vPARCELAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8313ParcelaValorMaximoProposta',fld:'PARCELAVALORMAXIMOPROPOSTA'},{av:'A8314ParcelaQuantidadeParcela',fld:'PARCELAQUANTIDADEPARCELA'}],[{ctrl:'PARCELAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARCELAID","Title")',ctrl:'PARCELAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PARCELAVALORMAXIMOPROPOSTA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARCELAVALORMAXIMOPROPOSTA","Title")',ctrl:'PARCELAVALORMAXIMOPROPOSTA',prop:'Title'},{ctrl:'PARCELAQUANTIDADEPARCELA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARCELAQUANTIDADEPARCELA","Title")',ctrl:'PARCELAQUANTIDADEPARCELA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ParcelaEmpresaId',fld:'vPARCELAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8313ParcelaValorMaximoProposta',fld:'PARCELAVALORMAXIMOPROPOSTA'},{av:'A8314ParcelaQuantidadeParcela',fld:'PARCELAQUANTIDADEPARCELA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ParcelaEmpresaId',fld:'vPARCELAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8313ParcelaValorMaximoProposta',fld:'PARCELAVALORMAXIMOPROPOSTA'},{av:'A8314ParcelaQuantidadeParcela',fld:'PARCELAQUANTIDADEPARCELA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ParcelaEmpresaId',fld:'vPARCELAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8313ParcelaValorMaximoProposta',fld:'PARCELAVALORMAXIMOPROPOSTA'},{av:'A8314ParcelaQuantidadeParcela',fld:'PARCELAQUANTIDADEPARCELA'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV32DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV29ParcelaEmpresaId',fld:'vPARCELAEMPRESAID'},{av:'AV30ParcelaId',fld:'vPARCELAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41Qtdpaggeradas',fld:'vQTDPAGGERADAS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30ParcelaId',fld:'vPARCELAID'},{av:'AV29ParcelaEmpresaId',fld:'vPARCELAEMPRESAID'},{av:'AV32DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ParcelaEmpresaId',fld:'vPARCELAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8313ParcelaValorMaximoProposta',fld:'PARCELAVALORMAXIMOPROPOSTA'},{av:'A8314ParcelaQuantidadeParcela',fld:'PARCELAQUANTIDADEPARCELA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8318ParcelaId',fld:'PARCELAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8318ParcelaId',fld:'PARCELAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8318ParcelaId',fld:'PARCELAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8318ParcelaId',fld:'PARCELAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8318ParcelaId',fld:'PARCELAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A8318ParcelaId',fld:'PARCELAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8313ParcelaValorMaximoProposta',fld:'PARCELAVALORMAXIMOPROPOSTA'},{av:'A8314ParcelaQuantidadeParcela',fld:'PARCELAQUANTIDADEPARCELA'}],[{av:'AV27Resultado',fld:'vRESULTADO'},{av:'AV28ResultadoStr',fld:'vRESULTADOSTR'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ParcelaEmpresaId',fld:'vPARCELAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A8313ParcelaValorMaximoProposta',fld:'PARCELAVALORMAXIMOPROPOSTA'},{av:'A8314ParcelaQuantidadeParcela',fld:'PARCELAQUANTIDADEPARCELA'}],[]];
   this.setVCMap("AV29ParcelaEmpresaId", "vPARCELAEMPRESAID", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV29ParcelaEmpresaId", "vPARCELAEMPRESAID", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV29ParcelaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A8313ParcelaValorMaximoProposta", rfrProp:"Value", gxAttId:"8313"});
   GridContainer.addRefreshingVar({rfrVar:"A8314ParcelaQuantidadeParcela", rfrProp:"Value", gxAttId:"8314"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hparcela());
