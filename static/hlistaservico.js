/**@preserve  GeneXus Java 10_3_12-110051 on December 17, 2020 9:46:50.71
*/
gx.evt.autoSkip=!1;gx.define("hlistaservico",!1,function(){var n,t;this.ServerClass="hlistaservico";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("7","'ANTERIOR'");this.addKeyListener("8","'PROXIMO'");this.addKeyListener("3","'NOVO'");this.addKeyListener("12","'FECHAR'");this.addKeyListener("10","'IMPRIMIR'");this.addKeyListener("5","'PROCURAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO");this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME");this.A2980ListaServicoDescricao=gx.fn.getControlValue("LISTASERVICODESCRICAO")};this.e11ok2_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e12ok2_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e17ok2_client=function(){this.executeServerEvent("VPAGINA.CLICK",!0,null,!1,!0)};this.e13ok2_client=function(){this.executeServerEvent("'NOVO'",!0,null,!1,!1)};this.e14ok2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e15ok2_client=function(){this.executeServerEvent("'IMPRIMIR'",!0,null,!1,!1)};this.e16ok2_client=function(){this.executeServerEvent("'PROCURAR'",!1,null,!1,!1)};this.e20ok2_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e21ok2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e22ok2_client=function(){this.executeServerEvent("'CONSULTAR'",!0,arguments[0],!1,!1)};this.e24ok2_client=function(){this.executeServerEvent("'ATUALIZAPAGINA'",!0,arguments[0],!1,!1)};this.e25ok2_client=function(){this.executeServerEvent("'FILIAIS'",!0,arguments[0],!1,!1)};this.e26ok2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e27ok2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,61];this.GXLastCtrlId=61;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlistaservico",[],!1,1,!0,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(2983,49,"LISTASERVICOID","","","ListaServicoId","int",0,"px",6,6,"right",null,[],2983,"ListaServicoId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Descricao",50,"vDESCRICAO","Descricao","","Descricao","char",0,"px",50,50,"left",null,[],"Descricao","Descricao",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addBitmap("&Bmpfilial","vBMPFILIAL",51,0,"px",17,"px","e25ok2_client","","Filiais","Image","GridColumnImage");t.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px","e20ok2_client","","Alterar","Image","GridColumnImage");t.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px","e21ok2_client","","Excluir","Image","GridColumnImage");t.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px","e22ok2_client","","Consultar","Image","GridColumnImage");this.setGrid(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE9",grid:0};n[8]={fld:"TABLE10",grid:0};n[11]={fld:"TXTTITAPL1",format:0,grid:0};n[13]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLISTASERVICOID",gxz:"ZV28ListaServicoId",gxold:"OV28ListaServicoId",gxvar:"AV28ListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28ListaServicoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV28ListaServicoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vLISTASERVICOID",gx.O.AV28ListaServicoId,0)},c2v:function(){gx.O.AV28ListaServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLISTASERVICOID",".")},nac:gx.falseFn};n[16]={fld:"TXTTITAPL3",format:0,grid:0};n[18]={lvl:0,type:"svchar",len:360,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLISTASERVICODESCRICAO",gxz:"ZV27ListaServicoDescricao",gxold:"OV27ListaServicoDescricao",gxvar:"AV27ListaServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27ListaServicoDescricao=n},v2z:function(n){gx.O.ZV27ListaServicoDescricao=n},v2c:function(){gx.fn.setControlValue("vLISTASERVICODESCRICAO",gx.O.AV27ListaServicoDescricao,0)},c2v:function(){gx.O.AV27ListaServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vLISTASERVICODESCRICAO")},nac:gx.falseFn};n[23]={fld:"TABLE4",grid:0};n[26]={fld:"TABLE8",grid:0};n[29]={fld:"IMAGE2",grid:0};n[31]={fld:"BTNANTERIOR",grid:0};n[33]={fld:"BTNPROXIMO",grid:0};n[35]={fld:"IMAGE1",grid:0};n[37]={fld:"BTNHELP",grid:0};n[39]={fld:"TABLE5",grid:0};n[42]={fld:"TEXTBLOCK1",format:0,grid:0};n[44]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV5Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV5Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[45]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV6PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[49]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LISTASERVICOID",gxz:"Z2983ListaServicoId",gxold:"O2983ListaServicoId",gxvar:"A2983ListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A2983ListaServicoId=gx.num.intval(n)},v2z:function(n){gx.O.Z2983ListaServicoId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("LISTASERVICOID",n||gx.fn.currentGridRowImpl(48),gx.O.A2983ListaServicoId,0)},c2v:function(){gx.O.A2983ListaServicoId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("LISTASERVICOID",n||gx.fn.currentGridRowImpl(48),".")},nac:gx.falseFn};n[50]={lvl:2,type:"char",len:50,dec:0,sign:!1,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV29Descricao",gxold:"OV29Descricao",gxvar:"AV29Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV29Descricao=n},v2z:function(n){gx.O.ZV29Descricao=n},v2c:function(n){gx.fn.setGridControlValue("vDESCRICAO",n||gx.fn.currentGridRowImpl(48),gx.O.AV29Descricao,0)},c2v:function(){gx.O.AV29Descricao=this.val()},val:function(n){return gx.fn.getGridControlValue("vDESCRICAO",n||gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};n[51]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFILIAL",gxz:"ZV33bmpFilial",gxold:"OV33bmpFilial",gxvar:"AV33bmpFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV33bmpFilial=n},v2z:function(n){gx.O.ZV33bmpFilial=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPFILIAL",n||gx.fn.currentGridRowImpl(48),gx.O.AV33bmpFilial,gx.O.AV38Bmpfilial_GXI)},c2v:function(){gx.O.AV38Bmpfilial_GXI=this.val_GXI();gx.O.AV33bmpFilial=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPFILIAL",n||gx.fn.currentGridRowImpl(48))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPFILIAL_GXI",n||gx.fn.currentGridRowImpl(48))},gxvar_GXI:"AV38Bmpfilial_GXI",nac:gx.falseFn};n[52]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7bmpAlt=n},v2z:function(n){gx.O.ZV7bmpAlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPALT",n||gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPALT",n||gx.fn.currentGridRowImpl(48))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPALT_GXI",n||gx.fn.currentGridRowImpl(48))},gxvar_GXI:"AV39Bmpalt_GXI",nac:gx.falseFn};n[53]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV8bmpExc=n},v2z:function(n){gx.O.ZV8bmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(48))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(48))},gxvar_GXI:"AV40Bmpexc_GXI",nac:gx.falseFn};n[54]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV16bmpCon=n},v2z:function(n){gx.O.ZV16bmpCon=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCON",n||gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCON",n||gx.fn.currentGridRowImpl(48))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCON_GXI",n||gx.fn.currentGridRowImpl(48))},gxvar_GXI:"AV41Bmpcon_GXI",nac:gx.falseFn};n[61]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV11OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV28ListaServicoId=0;this.ZV28ListaServicoId=0;this.OV28ListaServicoId=0;this.AV27ListaServicoDescricao="";this.ZV27ListaServicoDescricao="";this.OV27ListaServicoDescricao="";this.AV5Pagina=0;this.ZV5Pagina=0;this.OV5Pagina=0;this.AV6PaginaAux=0;this.ZV6PaginaAux=0;this.OV6PaginaAux=0;this.Z2983ListaServicoId=0;this.O2983ListaServicoId=0;this.ZV29Descricao="";this.OV29Descricao="";this.ZV33bmpFilial="";this.OV33bmpFilial="";this.ZV7bmpAlt="";this.OV7bmpAlt="";this.ZV8bmpExc="";this.OV8bmpExc="";this.ZV16bmpCon="";this.OV16bmpCon="";this.AV11OrderedBy=0;this.ZV11OrderedBy=0;this.OV11OrderedBy=0;this.AV28ListaServicoId=0;this.AV27ListaServicoDescricao="";this.AV5Pagina=0;this.AV6PaginaAux=0;this.AV11OrderedBy=0;this.A2980ListaServicoDescricao="";this.A2983ListaServicoId=0;this.AV29Descricao="";this.AV33bmpFilial="";this.AV7bmpAlt="";this.AV8bmpExc="";this.AV16bmpCon="";this.AV30SnRecuperaFiltro="";this.AV36Pgmname="";this.Events={e11ok2_client:["'ANTERIOR'",!0],e12ok2_client:["'PROXIMO'",!0],e17ok2_client:["VPAGINA.CLICK",!0],e13ok2_client:["'NOVO'",!0],e14ok2_client:["'FECHAR'",!0],e15ok2_client:["'IMPRIMIR'",!0],e16ok2_client:["'PROCURAR'",!0],e20ok2_client:["'ALTERAR'",!0],e21ok2_client:["'EXCLUIR'",!0],e22ok2_client:["'CONSULTAR'",!0],e24ok2_client:["'ATUALIZAPAGINA'",!0],e25ok2_client:["'FILIAIS'",!0],e26ok2_client:["ENTER",!0],e27ok2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV33bmpFilial",fld:"vBMPFILIAL"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV36Pgmname",fld:"vPGMNAME"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"}],[]];this.EvtParms["GRID.REFRESH"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV33bmpFilial",fld:"vBMPFILIAL"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV36Pgmname",fld:"vPGMNAME"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"}],[{ctrl:"LISTASERVICOID",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("LISTASERVICOID","Title")',ctrl:"LISTASERVICOID",prop:"Title"},{av:"AV12Imagem",fld:"vIMAGEM"},{av:"AV6PaginaAux",fld:"vPAGINAAUX"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV10NumPagina",fld:"vNUMPAGINA"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"},{av:"AV23filtros",fld:"vFILTROS"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV33bmpFilial",fld:"vBMPFILIAL"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV36Pgmname",fld:"vPGMNAME"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"},{av:"AV5Pagina",fld:"vPAGINA"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV33bmpFilial",fld:"vBMPFILIAL"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV36Pgmname",fld:"vPGMNAME"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV6PaginaAux",fld:"vPAGINAAUX"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["VPAGINA.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV33bmpFilial",fld:"vBMPFILIAL"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV36Pgmname",fld:"vPGMNAME"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"},{av:"AV5Pagina",fld:"vPAGINA"}],[{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'NOVO'"]=[[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV36Pgmname",fld:"vPGMNAME"}],[{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV36Pgmname",fld:"vPGMNAME"}],[]];this.EvtParms["'IMPRIMIR'"]=[[{av:"AV36Pgmname",fld:"vPGMNAME"},{av:"AV37Pgmdesc",fld:"vPGMDESC"}],[{av:"AV20OrdenacaoDescricao",fld:"vORDENACAODESCRICAO"},{av:"AV19NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV18NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV31QtdPagGeradas",fld:"vQTDPAGGERADAS"}]];this.EvtParms["'PROCURAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV33bmpFilial",fld:"vBMPFILIAL"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV36Pgmname",fld:"vPGMNAME"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"},{av:"AV5Pagina",fld:"vPAGINA"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'ALTERAR'"]=[[{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV36Pgmname",fld:"vPGMNAME"}],[{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV36Pgmname",fld:"vPGMNAME"}],[{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'CONSULTAR'"]=[[{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV36Pgmname",fld:"vPGMNAME"}],[{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms.LOAD=[[{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"}],[{av:"AV29Descricao",fld:"vDESCRICAO"},{av:'gx.fn.getCtrlProperty("vDESCRICAO","Tooltiptext")',ctrl:"vDESCRICAO",prop:"Tooltiptext"}]];this.EvtParms["'ATUALIZAPAGINA'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV33bmpFilial",fld:"vBMPFILIAL"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV36Pgmname",fld:"vPGMNAME"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"}],[]];this.EvtParms["'FILIAIS'"]=[[{av:"A2983ListaServicoId",fld:"LISTASERVICOID"}],[]];this.setVCMap("AV30SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV36Pgmname","vPGMNAME",0,"char");this.setVCMap("A2980ListaServicoDescricao","LISTASERVICODESCRICAO",0,"svchar");this.setVCMap("AV30SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV36Pgmname","vPGMNAME",0,"char");this.setVCMap("A2980ListaServicoDescricao","LISTASERVICODESCRICAO",0,"svchar");t.addRefreshingVar(this.GXValidFnc[13]);t.addRefreshingVar(this.GXValidFnc[18]);t.addRefreshingVar(this.GXValidFnc[61]);t.addRefreshingVar({rfrVar:"AV33bmpFilial",rfrProp:"Value",gxAttId:"Bmpfilial"});t.addRefreshingVar({rfrVar:"AV7bmpAlt",rfrProp:"Tooltiptext",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV7bmpAlt",rfrProp:"Value",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV8bmpExc",rfrProp:"Value",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV8bmpExc",rfrProp:"Tooltiptext",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV16bmpCon",rfrProp:"Value",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV16bmpCon",rfrProp:"Tooltiptext",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});t.addRefreshingVar({rfrVar:"AV36Pgmname"});t.addRefreshingVar({rfrVar:"A2980ListaServicoDescricao"});this.InitStandaloneVars()});gx.setParentObj(new hlistaservico)