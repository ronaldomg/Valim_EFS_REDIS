/**@preserve  GeneXus Java 10_3_12-110051 on December 17, 2020 10:23:20.8
*/
gx.evt.autoSkip=!1;gx.define("hlistaservicofilial",!1,function(){var n,t;this.ServerClass="hlistaservicofilial";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("7","'ANTERIOR'");this.addKeyListener("8","'PROXIMO'");this.addKeyListener("3","'NOVO'");this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","'PROCURAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.A2983ListaServicoId=gx.fn.getIntegerValue("LISTASERVICOID",".");this.A2980ListaServicoDescricao=gx.fn.getControlValue("LISTASERVICODESCRICAO");this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO");this.AV35INListaServicoId=gx.fn.getIntegerValue("vINLISTASERVICOID",".");this.AV36INfilialId=gx.fn.getIntegerValue("vINFILIALID",".")};this.Validv_Listaservicoid=function(){try{var n=gx.util.balloon.getNew("vLISTASERVICOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s112_client=function(){};this.s122_client=function(){};this.e112hn2_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e122hn2_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e162hn2_client=function(){this.executeServerEvent("VPAGINA.CLICK",!0,null,!1,!0)};this.e132hn2_client=function(){this.executeServerEvent("'NOVO'",!0,null,!1,!1)};this.e142hn2_client=function(){this.executeServerEvent("'FECHAR'",!0,null,!1,!1)};this.e152hn2_client=function(){this.executeServerEvent("'PROCURAR'",!1,null,!1,!1)};this.e202hn2_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e212hn2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e222hn2_client=function(){this.executeServerEvent("'CONSULTAR'",!0,arguments[0],!1,!1)};this.e232hn2_client=function(){this.executeServerEvent("'ATUALIZAPAGINA'",!0,arguments[0],!1,!1)};this.e252hn2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e262hn2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,14,17,19,24,28,31,33,34,38,39,40,41,42,48,51,53,55,57,58];this.GXLastCtrlId=58;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlistaservicofilial",[],!1,1,!0,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(11836,38,"FILIALLISTASERVICOFILIALID","Filial","","FilialListaServicoFilialid","int",0,"px",7,7,"right",null,[],11836,"FilialListaServicoFilialid",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(11837,39,"FILIALLISTASERVICOLISTASERVICO","Lista Servico","","FilialListaServicoListaServico","int",0,"px",6,6,"right",null,[],11837,"FilialListaServicoListaServico",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpalt","vBMPALT",40,0,"px",17,"px","e202hn2_client","","Alterar","Image","GridColumnImage");t.addBitmap("&Bmpexc","vBMPEXC",41,0,"px",17,"px","e212hn2_client","","Excluir","Image","GridColumnImage");t.addBitmap("&Bmpcon","vBMPCON",42,0,"px",17,"px","e222hn2_client","","Consultar","Image","GridColumnImage");this.setGrid(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE9",grid:0};n[8]={fld:"TABLE10",grid:0};n[11]={fld:"TXTTITAPL1",format:0,grid:0};n[13]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Listaservicoid,isvalid:null,rgrid:[this.GridContainer],fld:"vLISTASERVICOID",gxz:"ZV28ListaServicoId",gxold:"OV28ListaServicoId",gxvar:"AV28ListaServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28ListaServicoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV28ListaServicoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vLISTASERVICOID",gx.O.AV28ListaServicoId,0)},c2v:function(){gx.O.AV28ListaServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLISTASERVICOID",".")},nac:gx.falseFn};n[14]={lvl:0,type:"svchar",len:360,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLISTASERVICODESCRICAO",gxz:"ZV27ListaServicoDescricao",gxold:"OV27ListaServicoDescricao",gxvar:"AV27ListaServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27ListaServicoDescricao=n},v2z:function(n){gx.O.ZV27ListaServicoDescricao=n},v2c:function(){gx.fn.setControlValue("vLISTASERVICODESCRICAO",gx.O.AV27ListaServicoDescricao,0)},c2v:function(){gx.O.AV27ListaServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vLISTASERVICODESCRICAO")},nac:gx.falseFn};n[17]={fld:"TXTTITAPL3",format:0,grid:0};n[19]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFILIALID",gxz:"ZV34filialId",gxold:"OV34filialId",gxvar:"AV34filialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){gx.O.AV34filialId=gx.num.intval(n)},v2z:function(n){gx.O.ZV34filialId=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vFILIALID",gx.O.AV34filialId)},c2v:function(){gx.O.AV34filialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",".")},nac:gx.falseFn};n[24]={fld:"TABLE4",grid:0};n[28]={fld:"TABLE5",grid:0};n[31]={fld:"TEXTBLOCK1",format:0,grid:0};n[33]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV5Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV5Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[34]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV6PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[38]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALLISTASERVICOFILIALID",gxz:"Z11836FilialListaServicoFilialid",gxold:"O11836FilialListaServicoFilialid",gxvar:"A11836FilialListaServicoFilialid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11836FilialListaServicoFilialid=gx.num.intval(n)},v2z:function(n){gx.O.Z11836FilialListaServicoFilialid=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("FILIALLISTASERVICOFILIALID",n||gx.fn.currentGridRowImpl(37),gx.O.A11836FilialListaServicoFilialid,0)},c2v:function(){gx.O.A11836FilialListaServicoFilialid=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("FILIALLISTASERVICOFILIALID",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[39]={lvl:2,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALLISTASERVICOLISTASERVICO",gxz:"Z11837FilialListaServicoListaServico",gxold:"O11837FilialListaServicoListaServico",gxvar:"A11837FilialListaServicoListaServico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11837FilialListaServicoListaServico=gx.num.intval(n)},v2z:function(n){gx.O.Z11837FilialListaServicoListaServico=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("FILIALLISTASERVICOLISTASERVICO",n||gx.fn.currentGridRowImpl(37),gx.O.A11837FilialListaServicoListaServico,0)},c2v:function(){gx.O.A11837FilialListaServicoListaServico=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("FILIALLISTASERVICOLISTASERVICO",n||gx.fn.currentGridRowImpl(37),".")},nac:gx.falseFn};n[40]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7bmpAlt=n},v2z:function(n){gx.O.ZV7bmpAlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPALT",n||gx.fn.currentGridRowImpl(37),gx.O.AV7bmpAlt,gx.O.AV42Bmpalt_GXI)},c2v:function(){gx.O.AV42Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPALT",n||gx.fn.currentGridRowImpl(37))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPALT_GXI",n||gx.fn.currentGridRowImpl(37))},gxvar_GXI:"AV42Bmpalt_GXI",nac:gx.falseFn};n[41]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV8bmpExc=n},v2z:function(n){gx.O.ZV8bmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(37),gx.O.AV8bmpExc,gx.O.AV43Bmpexc_GXI)},c2v:function(){gx.O.AV43Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(37))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(37))},gxvar_GXI:"AV43Bmpexc_GXI",nac:gx.falseFn};n[42]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV16bmpCon=n},v2z:function(n){gx.O.ZV16bmpCon=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCON",n||gx.fn.currentGridRowImpl(37),gx.O.AV16bmpCon,gx.O.AV44Bmpcon_GXI)},c2v:function(){gx.O.AV44Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCON",n||gx.fn.currentGridRowImpl(37))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCON_GXI",n||gx.fn.currentGridRowImpl(37))},gxvar_GXI:"AV44Bmpcon_GXI",nac:gx.falseFn};n[48]={fld:"TABLE8",grid:0};n[51]={fld:"IMAGE2",grid:0};n[53]={fld:"BTNANTERIOR",grid:0};n[55]={fld:"BTNPROXIMO",grid:0};n[57]={fld:"IMAGE3",grid:0};n[58]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV11OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV28ListaServicoId=0;this.ZV28ListaServicoId=0;this.OV28ListaServicoId=0;this.AV27ListaServicoDescricao="";this.ZV27ListaServicoDescricao="";this.OV27ListaServicoDescricao="";this.AV34filialId=0;this.ZV34filialId=0;this.OV34filialId=0;this.AV5Pagina=0;this.ZV5Pagina=0;this.OV5Pagina=0;this.AV6PaginaAux=0;this.ZV6PaginaAux=0;this.OV6PaginaAux=0;this.Z11836FilialListaServicoFilialid=0;this.O11836FilialListaServicoFilialid=0;this.Z11837FilialListaServicoListaServico=0;this.O11837FilialListaServicoListaServico=0;this.ZV7bmpAlt="";this.OV7bmpAlt="";this.ZV8bmpExc="";this.OV8bmpExc="";this.ZV16bmpCon="";this.OV16bmpCon="";this.AV11OrderedBy=0;this.ZV11OrderedBy=0;this.OV11OrderedBy=0;this.AV28ListaServicoId=0;this.AV27ListaServicoDescricao="";this.AV34filialId=0;this.AV5Pagina=0;this.AV6PaginaAux=0;this.AV11OrderedBy=0;this.AV35INListaServicoId=0;this.AV36INfilialId=0;this.A11836FilialListaServicoFilialid=0;this.A11837FilialListaServicoListaServico=0;this.AV7bmpAlt="";this.AV8bmpExc="";this.AV16bmpCon="";this.A2983ListaServicoId=0;this.A2980ListaServicoDescricao="";this.AV30SnRecuperaFiltro="";this.Events={e112hn2_client:["'ANTERIOR'",!0],e122hn2_client:["'PROXIMO'",!0],e162hn2_client:["VPAGINA.CLICK",!0],e132hn2_client:["'NOVO'",!0],e142hn2_client:["'FECHAR'",!0],e152hn2_client:["'PROCURAR'",!0],e202hn2_client:["'ALTERAR'",!0],e212hn2_client:["'EXCLUIR'",!0],e222hn2_client:["'CONSULTAR'",!0],e232hn2_client:["'ATUALIZAPAGINA'",!0],e252hn2_client:["ENTER",!0],e262hn2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV34filialId",fld:"vFILIALID"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO",hsh:!0},{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"}],[{av:"AV45GXLvl60",fld:"vGXLVL60"},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"}]];this.EvtParms["GRID.REFRESH"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV34filialId",fld:"vFILIALID"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO",hsh:!0}],[{av:"AV6PaginaAux",fld:"vPAGINAAUX"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV10NumPagina",fld:"vNUMPAGINA"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO",hsh:!0},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV34filialId",fld:"vFILIALID"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO",hsh:!0},{av:"AV5Pagina",fld:"vPAGINA"}],[{av:"AV5Pagina",fld:"vPAGINA"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV34filialId",fld:"vFILIALID"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO",hsh:!0},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV6PaginaAux",fld:"vPAGINAAUX"}],[{av:"AV5Pagina",fld:"vPAGINA"}]];this.EvtParms["VPAGINA.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV34filialId",fld:"vFILIALID"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO",hsh:!0},{av:"AV5Pagina",fld:"vPAGINA"}],[]];this.EvtParms["'NOVO'"]=[[{av:"AV34filialId",fld:"vFILIALID"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"}],[]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms["'PROCURAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV34filialId",fld:"vFILIALID"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO",hsh:!0},{av:"AV27ListaServicoDescricao",fld:"vLISTASERVICODESCRICAO"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV11OrderedBy",fld:"vORDEREDBY"}]];this.EvtParms["'ALTERAR'"]=[[{av:"A11837FilialListaServicoListaServico",fld:"FILIALLISTASERVICOLISTASERVICO"},{av:"A11836FilialListaServicoFilialid",fld:"FILIALLISTASERVICOFILIALID"}],[]];this.EvtParms["'EXCLUIR'"]=[[{av:"A11837FilialListaServicoListaServico",fld:"FILIALLISTASERVICOLISTASERVICO"},{av:"A11836FilialListaServicoFilialid",fld:"FILIALLISTASERVICOFILIALID"}],[]];this.EvtParms["'CONSULTAR'"]=[[{av:"A11837FilialListaServicoListaServico",fld:"FILIALLISTASERVICOLISTASERVICO"},{av:"A11836FilialListaServicoFilialid",fld:"FILIALLISTASERVICOFILIALID"}],[]];this.EvtParms["'ATUALIZAPAGINA'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV28ListaServicoId",fld:"vLISTASERVICOID"},{av:"AV34filialId",fld:"vFILIALID"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV7bmpAlt",fld:"vBMPALT"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"A2983ListaServicoId",fld:"LISTASERVICOID"},{av:"A2980ListaServicoDescricao",fld:"LISTASERVICODESCRICAO"},{av:"AV30SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO",hsh:!0}],[]];this.setVCMap("A2983ListaServicoId","LISTASERVICOID",0,"int");this.setVCMap("A2980ListaServicoDescricao","LISTASERVICODESCRICAO",0,"svchar");this.setVCMap("AV30SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV35INListaServicoId","vINLISTASERVICOID",0,"int");this.setVCMap("AV36INfilialId","vINFILIALID",0,"int");this.setVCMap("A2983ListaServicoId","LISTASERVICOID",0,"int");this.setVCMap("A2980ListaServicoDescricao","LISTASERVICODESCRICAO",0,"svchar");this.setVCMap("AV30SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");t.addRefreshingVar(this.GXValidFnc[13]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar({rfrVar:"AV7bmpAlt",rfrProp:"Tooltiptext",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV7bmpAlt",rfrProp:"Value",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV8bmpExc",rfrProp:"Value",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV8bmpExc",rfrProp:"Tooltiptext",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV16bmpCon",rfrProp:"Value",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV16bmpCon",rfrProp:"Tooltiptext",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"A2983ListaServicoId"});t.addRefreshingVar({rfrVar:"A2980ListaServicoDescricao"});t.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});this.InitStandaloneVars()});gx.setParentObj(new hlistaservicofilial)