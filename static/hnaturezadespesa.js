/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:15:9.65
*/
gx.evt.autoSkip = false;
gx.define('hnaturezadespesa', false, function () {
   this.ServerClass =  "hnaturezadespesa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11c82_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12c82_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16c82_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13c82_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14c82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15c82_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20c82_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21c82_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22c82_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23c82_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24c82_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25c82_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,35,37,38,42,43,44,45,46,47,48,49,56];
   this.GXLastCtrlId =56;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hnaturezadespesa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2073,42,"NATUREZADESPESAID","","","NaturezaDespesaId","int",0,"px",8,8,"right",null,[],2073,"NaturezaDespesaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2077,43,"NATUREZADESPESADESCRICAO","","","NaturezaDespesaDescricao","svchar",0,"px",40,40,"left",null,[],2077,"NaturezaDespesaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Desctpimpressao",44,"vDESCTPIMPRESSAO","Tipo Impressão","","DescTpImpressao","char",0,"px",10,10,"left",null,[],"Desctpimpressao","DescTpImpressao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2074,45,"NATUREZADESPESATPIMPRESSAO","","","NaturezaDespesaTpImpressao","char",0,"px",1,1,"left",null,[],2074,"NaturezaDespesaTpImpressao",false,0,false,false,"Centralizado",1,"");
   GridContainer.addComboBox(2075,46,"NATUREZADESPESATIPO","Tipo Natureza","NaturezaDespesaTipo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",47,0,"px",17,"px","e20c82_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",48,0,"px",17,"px","e21c82_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",49,0,"px",17,"px","e22c82_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZADESPESADESCRICAO",gxz:"ZV27NaturezaDespesaDescricao",gxold:"OV27NaturezaDespesaDescricao",gxvar:"AV27NaturezaDespesaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.ZV27NaturezaDespesaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESADESCRICAO",gx.O.AV27NaturezaDespesaDescricao,0)},c2v:function(){gx.O.AV27NaturezaDespesaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE6",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"BTNHELP",grid:0};
   GXValidFnc[32]={fld:"TABLE5",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESAID",gxz:"Z2073NaturezaDespesaId",gxold:"O2073NaturezaDespesaId",gxvar:"A2073NaturezaDespesaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2073NaturezaDespesaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2073NaturezaDespesaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NATUREZADESPESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A2073NaturezaDespesaId,0)},c2v:function(){gx.O.A2073NaturezaDespesaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NATUREZADESPESAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESADESCRICAO",gxz:"Z2077NaturezaDespesaDescricao",gxold:"O2077NaturezaDespesaDescricao",gxvar:"A2077NaturezaDespesaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2077NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.Z2077NaturezaDespesaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZADESPESADESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A2077NaturezaDespesaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2077NaturezaDespesaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZADESPESADESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTPIMPRESSAO",gxz:"ZV30DescTpImpressao",gxold:"OV30DescTpImpressao",gxvar:"AV30DescTpImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30DescTpImpressao=Value},v2z:function(Value){gx.O.ZV30DescTpImpressao=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCTPIMPRESSAO",row || gx.fn.currentGridRowImpl(41),gx.O.AV30DescTpImpressao,0)},c2v:function(){gx.O.AV30DescTpImpressao=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCTPIMPRESSAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESATPIMPRESSAO",gxz:"Z2074NaturezaDespesaTpImpressao",gxold:"O2074NaturezaDespesaTpImpressao",gxvar:"A2074NaturezaDespesaTpImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2074NaturezaDespesaTpImpressao=Value},v2z:function(Value){gx.O.Z2074NaturezaDespesaTpImpressao=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZADESPESATPIMPRESSAO",row || gx.fn.currentGridRowImpl(41),gx.O.A2074NaturezaDespesaTpImpressao,0)},c2v:function(){gx.O.A2074NaturezaDespesaTpImpressao=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZADESPESATPIMPRESSAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESATIPO",gxz:"Z2075NaturezaDespesaTipo",gxold:"O2075NaturezaDespesaTipo",gxvar:"A2075NaturezaDespesaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2075NaturezaDespesaTipo=Value},v2z:function(Value){gx.O.Z2075NaturezaDespesaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("NATUREZADESPESATIPO",row || gx.fn.currentGridRowImpl(41),gx.O.A2075NaturezaDespesaTipo)},c2v:function(){gx.O.A2075NaturezaDespesaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZADESPESATIPO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(41),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(41),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27NaturezaDespesaDescricao = "" ;
   this.ZV27NaturezaDespesaDescricao = "" ;
   this.OV27NaturezaDespesaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2073NaturezaDespesaId = 0 ;
   this.O2073NaturezaDespesaId = 0 ;
   this.Z2077NaturezaDespesaDescricao = "" ;
   this.O2077NaturezaDespesaDescricao = "" ;
   this.ZV30DescTpImpressao = "" ;
   this.OV30DescTpImpressao = "" ;
   this.Z2074NaturezaDespesaTpImpressao = "" ;
   this.O2074NaturezaDespesaTpImpressao = "" ;
   this.Z2075NaturezaDespesaTipo = "" ;
   this.O2075NaturezaDespesaTipo = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27NaturezaDespesaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A2077NaturezaDespesaDescricao = "" ;
   this.AV30DescTpImpressao = "" ;
   this.A2074NaturezaDespesaTpImpressao = "" ;
   this.A2075NaturezaDespesaTipo = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e11c82_client": ["'ANTERIOR'", true] ,"e12c82_client": ["'PROXIMO'", true] ,"e16c82_client": ["VPAGINA.CLICK", true] ,"e13c82_client": ["'NOVO'", true] ,"e14c82_client": ["'FECHAR'", true] ,"e15c82_client": ["'PROCURAR'", true] ,"e20c82_client": ["'ALTERAR'", true] ,"e21c82_client": ["'EXCLUIR'", true] ,"e22c82_client": ["'CONSULTAR'", true] ,"e23c82_client": ["'ATUALIZAPAGINA'", true] ,"e24c82_client": ["ENTER", true] ,"e25c82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2074NaturezaDespesaTpImpressao',fld:'NATUREZADESPESATPIMPRESSAO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2074NaturezaDespesaTpImpressao',fld:'NATUREZADESPESATPIMPRESSAO'}],[{av:'AV30DescTpImpressao',fld:'vDESCTPIMPRESSAO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2074NaturezaDespesaTpImpressao',fld:'NATUREZADESPESATPIMPRESSAO'}],[{ctrl:'NATUREZADESPESAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZADESPESAID","Title")',ctrl:'NATUREZADESPESAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'NATUREZADESPESADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZADESPESADESCRICAO","Title")',ctrl:'NATUREZADESPESADESCRICAO',prop:'Title'},{ctrl:'NATUREZADESPESATPIMPRESSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NATUREZADESPESATPIMPRESSAO","Title")',ctrl:'NATUREZADESPESATPIMPRESSAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2074NaturezaDespesaTpImpressao',fld:'NATUREZADESPESATPIMPRESSAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2074NaturezaDespesaTpImpressao',fld:'NATUREZADESPESATPIMPRESSAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2074NaturezaDespesaTpImpressao',fld:'NATUREZADESPESATPIMPRESSAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2074NaturezaDespesaTpImpressao',fld:'NATUREZADESPESATPIMPRESSAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2074NaturezaDespesaTpImpressao',fld:'NATUREZADESPESATPIMPRESSAO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2074NaturezaDespesaTpImpressao", rfrProp:"Value", gxAttId:"2074"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hnaturezadespesa());
