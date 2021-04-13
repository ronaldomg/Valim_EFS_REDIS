/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:33:27.42
*/
gx.evt.autoSkip = false;
gx.define('hconsultarnotainutilizada', false, function () {
   this.ServerClass =  "hconsultarnotainutilizada" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.s112_client=function()
   {
      this.AV32TpErro = gx.num.trunc( 0 ,0) ;
      if ( this.AV68NumeracaoInicial > this.AV69NumeracaoFinal )
      {
         this.addMessage("Numeração inicial deve ser menor ou igual a final");
         gx.fn.usrSetFocus("vNUMERACAOINICIAL") ;
         this.AV32TpErro = gx.num.trunc( 1 ,0) ;
      }
   };
   this.e2112k2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hconsultarnotainutilizadajustif",[this.A7717SaidaInutilizadaSerie, this.A7718SaidaInutilizadaNumero, this.A7713SaidaInutilizadaJustificativa]), ["A7717SaidaInutilizadaSerie", "A7718SaidaInutilizadaNumero", "A7713SaidaInutilizadaJustificativa"]);
      this.refreshOutputs([{av:'A7713SaidaInutilizadaJustificativa',fld:'SAIDAINUTILIZADAJUSTIFICATIVA'},{av:'A7718SaidaInutilizadaNumero',fld:'SAIDAINUTILIZADANUMERO'},{av:'A7717SaidaInutilizadaSerie',fld:'SAIDAINUTILIZADASERIE'}]);
   };
   this.e1112k2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1212k2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1312k2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1412k2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1512k2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1612k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e1912k2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2212k2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2312k2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,25,33,34,35,36,42,46,49,51,53,55,57,58,59,60,62];
   this.GXLastCtrlId =62;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",32,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultarnotainutilizada",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(7717,33,"SAIDAINUTILIZADASERIE","","","SaidaInutilizadaSerie","char",0,"px",4,4,"left",null,[],7717,"SaidaInutilizadaSerie",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(7718,34,"SAIDAINUTILIZADANUMERO","","","SaidaInutilizadaNumero","int",0,"px",10,10,"right",null,[],7718,"SaidaInutilizadaNumero",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(7713,35,"SAIDAINUTILIZADAJUSTIFICATIVA","Justificativa da inutilização","","SaidaInutilizadaJustificativa","vchar",0,"px",9000,80,"left",null,[],7713,"SaidaInutilizadaJustificativa",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpjustificativa","vBMPJUSTIFICATIVA",36,0,"px",17,"px","e2112k2_client","","Justif","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSERIE",gxz:"ZV67Serie",gxold:"OV67Serie",gxvar:"AV67Serie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67Serie=Value},v2z:function(Value){gx.O.ZV67Serie=Value},v2c:function(){gx.fn.setControlValue("vSERIE",gx.O.AV67Serie,0)},c2v:function(){gx.O.AV67Serie=this.val()},val:function(){return gx.fn.getControlValue("vSERIE")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE10",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNUMERACAOINICIAL",gxz:"ZV68NumeracaoInicial",gxold:"OV68NumeracaoInicial",gxvar:"AV68NumeracaoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68NumeracaoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68NumeracaoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMERACAOINICIAL",gx.O.AV68NumeracaoInicial,0)},c2v:function(){gx.O.AV68NumeracaoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMERACAOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNUMERACAOFINAL",gxz:"ZV69NumeracaoFinal",gxold:"OV69NumeracaoFinal",gxvar:"AV69NumeracaoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69NumeracaoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV69NumeracaoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMERACAOFINAL",gx.O.AV69NumeracaoFinal,0)},c2v:function(){gx.O.AV69NumeracaoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMERACAOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADASERIE",gxz:"Z7717SaidaInutilizadaSerie",gxold:"O7717SaidaInutilizadaSerie",gxvar:"A7717SaidaInutilizadaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7717SaidaInutilizadaSerie=Value},v2z:function(Value){gx.O.Z7717SaidaInutilizadaSerie=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAINUTILIZADASERIE",row || gx.fn.currentGridRowImpl(32),gx.O.A7717SaidaInutilizadaSerie,0)},c2v:function(){gx.O.A7717SaidaInutilizadaSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAINUTILIZADASERIE",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADANUMERO",gxz:"Z7718SaidaInutilizadaNumero",gxold:"O7718SaidaInutilizadaNumero",gxvar:"A7718SaidaInutilizadaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7718SaidaInutilizadaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7718SaidaInutilizadaNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAINUTILIZADANUMERO",row || gx.fn.currentGridRowImpl(32),gx.O.A7718SaidaInutilizadaNumero,0)},c2v:function(){gx.O.A7718SaidaInutilizadaNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAINUTILIZADANUMERO",row || gx.fn.currentGridRowImpl(32),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"vchar",len:9000,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAINUTILIZADAJUSTIFICATIVA",gxz:"Z7713SaidaInutilizadaJustificativa",gxold:"O7713SaidaInutilizadaJustificativa",gxvar:"A7713SaidaInutilizadaJustificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7713SaidaInutilizadaJustificativa=Value},v2z:function(Value){gx.O.Z7713SaidaInutilizadaJustificativa=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAINUTILIZADAJUSTIFICATIVA",row || gx.fn.currentGridRowImpl(32),gx.O.A7713SaidaInutilizadaJustificativa,0)},c2v:function(){gx.O.A7713SaidaInutilizadaJustificativa=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAINUTILIZADAJUSTIFICATIVA",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPJUSTIFICATIVA",gxz:"ZV70BmpJustificativa",gxold:"OV70BmpJustificativa",gxvar:"AV70BmpJustificativa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV70BmpJustificativa=Value},v2z:function(Value){gx.O.ZV70BmpJustificativa=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPJUSTIFICATIVA",row || gx.fn.currentGridRowImpl(32),gx.O.AV70BmpJustificativa,gx.O.AV76Bmpjustificativa_GXI)},c2v:function(){gx.O.AV76Bmpjustificativa_GXI=this.val_GXI();gx.O.AV70BmpJustificativa=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPJUSTIFICATIVA",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPJUSTIFICATIVA_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV76Bmpjustificativa_GXI',nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLE6",grid:0};
   GXValidFnc[46]={fld:"TABLE7",grid:0};
   GXValidFnc[49]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[51]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[53]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[55]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[57]={fld:"IMAGE5",grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   this.AV67Serie = "" ;
   this.ZV67Serie = "" ;
   this.OV67Serie = "" ;
   this.AV68NumeracaoInicial = 0 ;
   this.ZV68NumeracaoInicial = 0 ;
   this.OV68NumeracaoInicial = 0 ;
   this.AV69NumeracaoFinal = 0 ;
   this.ZV69NumeracaoFinal = 0 ;
   this.OV69NumeracaoFinal = 0 ;
   this.Z7717SaidaInutilizadaSerie = "" ;
   this.O7717SaidaInutilizadaSerie = "" ;
   this.Z7718SaidaInutilizadaNumero = 0 ;
   this.O7718SaidaInutilizadaNumero = 0 ;
   this.Z7713SaidaInutilizadaJustificativa = "" ;
   this.O7713SaidaInutilizadaJustificativa = "" ;
   this.ZV70BmpJustificativa = "" ;
   this.OV70BmpJustificativa = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV67Serie = "" ;
   this.AV68NumeracaoInicial = 0 ;
   this.AV69NumeracaoFinal = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.A7717SaidaInutilizadaSerie = "" ;
   this.A7718SaidaInutilizadaNumero = 0 ;
   this.A7713SaidaInutilizadaJustificativa = "" ;
   this.AV70BmpJustificativa = "" ;
   this.AV32TpErro = 0 ;
   this.Events = {"e1112k2_client": ["'GXM_FIRST'", true] ,"e1212k2_client": ["'GXM_PREVIOUS'", true] ,"e1312k2_client": ["'GXM_NEXT'", true] ,"e1412k2_client": ["'GXM_LAST'", true] ,"e1512k2_client": ["'PROCURAR'", true] ,"e1612k2_client": ["'FECHAR'", true] ,"e1912k2_client": ["'ATUALIZAPAGINA'", true] ,"e2212k2_client": ["ENTER", true] ,"e2312k2_client": ["CANCEL", true] ,"e2112k2_client": ["'JUSTIFICATIVA'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67Serie',fld:'vSERIE'},{av:'AV68NumeracaoInicial',fld:'vNUMERACAOINICIAL'},{av:'AV69NumeracaoFinal',fld:'vNUMERACAOFINAL'},{av:'AV70BmpJustificativa',fld:'vBMPJUSTIFICATIVA'},{av:'gx.fn.getCtrlProperty("vBMPJUSTIFICATIVA","Tooltiptext")',ctrl:'vBMPJUSTIFICATIVA',prop:'Tooltiptext'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{ctrl:'SAIDAINUTILIZADASERIE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SAIDAINUTILIZADASERIE","Title")',ctrl:'SAIDAINUTILIZADASERIE',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'SAIDAINUTILIZADANUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SAIDAINUTILIZADANUMERO","Title")',ctrl:'SAIDAINUTILIZADANUMERO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67Serie',fld:'vSERIE'},{av:'AV68NumeracaoInicial',fld:'vNUMERACAOINICIAL'},{av:'AV69NumeracaoFinal',fld:'vNUMERACAOFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70BmpJustificativa',fld:'vBMPJUSTIFICATIVA'},{av:'gx.fn.getCtrlProperty("vBMPJUSTIFICATIVA","Tooltiptext")',ctrl:'vBMPJUSTIFICATIVA',prop:'Tooltiptext'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67Serie',fld:'vSERIE'},{av:'AV68NumeracaoInicial',fld:'vNUMERACAOINICIAL'},{av:'AV69NumeracaoFinal',fld:'vNUMERACAOFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70BmpJustificativa',fld:'vBMPJUSTIFICATIVA'},{av:'gx.fn.getCtrlProperty("vBMPJUSTIFICATIVA","Tooltiptext")',ctrl:'vBMPJUSTIFICATIVA',prop:'Tooltiptext'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67Serie',fld:'vSERIE'},{av:'AV68NumeracaoInicial',fld:'vNUMERACAOINICIAL'},{av:'AV69NumeracaoFinal',fld:'vNUMERACAOFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70BmpJustificativa',fld:'vBMPJUSTIFICATIVA'},{av:'gx.fn.getCtrlProperty("vBMPJUSTIFICATIVA","Tooltiptext")',ctrl:'vBMPJUSTIFICATIVA',prop:'Tooltiptext'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67Serie',fld:'vSERIE'},{av:'AV68NumeracaoInicial',fld:'vNUMERACAOINICIAL'},{av:'AV69NumeracaoFinal',fld:'vNUMERACAOFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70BmpJustificativa',fld:'vBMPJUSTIFICATIVA'},{av:'gx.fn.getCtrlProperty("vBMPJUSTIFICATIVA","Tooltiptext")',ctrl:'vBMPJUSTIFICATIVA',prop:'Tooltiptext'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67Serie',fld:'vSERIE'},{av:'AV68NumeracaoInicial',fld:'vNUMERACAOINICIAL'},{av:'AV69NumeracaoFinal',fld:'vNUMERACAOFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70BmpJustificativa',fld:'vBMPJUSTIFICATIVA'},{av:'gx.fn.getCtrlProperty("vBMPJUSTIFICATIVA","Tooltiptext")',ctrl:'vBMPJUSTIFICATIVA',prop:'Tooltiptext'},{av:'AV32TpErro',fld:'vTPERRO'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32TpErro',fld:'vTPERRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'JUSTIFICATIVA'"] = [[{av:'A7717SaidaInutilizadaSerie',fld:'SAIDAINUTILIZADASERIE'},{av:'A7718SaidaInutilizadaNumero',fld:'SAIDAINUTILIZADANUMERO'},{av:'A7713SaidaInutilizadaJustificativa',fld:'SAIDAINUTILIZADAJUSTIFICATIVA'}],[{av:'A7713SaidaInutilizadaJustificativa',fld:'SAIDAINUTILIZADAJUSTIFICATIVA'},{av:'A7718SaidaInutilizadaNumero',fld:'SAIDAINUTILIZADANUMERO'},{av:'A7717SaidaInutilizadaSerie',fld:'SAIDAINUTILIZADASERIE'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV67Serie',fld:'vSERIE'},{av:'AV68NumeracaoInicial',fld:'vNUMERACAOINICIAL'},{av:'AV69NumeracaoFinal',fld:'vNUMERACAOFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70BmpJustificativa',fld:'vBMPJUSTIFICATIVA'},{av:'gx.fn.getCtrlProperty("vBMPJUSTIFICATIVA","Tooltiptext")',ctrl:'vBMPJUSTIFICATIVA',prop:'Tooltiptext'}],[]];
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"AV70BmpJustificativa", rfrProp:"Value", gxAttId:"Bmpjustificativa"});
   GridContainer.addRefreshingVar({rfrVar:"AV70BmpJustificativa", rfrProp:"Tooltiptext", gxAttId:"Bmpjustificativa"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarnotainutilizada());
