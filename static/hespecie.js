/**@preserve  GeneXus Java 10_3_12-110051 on April 7, 2021 11:44:1.37
*/
gx.evt.autoSkip=!1;gx.define("hespecie",!1,function(){var n,t;this.ServerClass="hespecie";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("7","'ANTERIOR'");this.addKeyListener("8","'PROXIMO'");this.addKeyListener("3","'NOVO'");this.addKeyListener("12","'FECHAR'");this.addKeyListener("10","'IMPRIMIR'");this.addKeyListener("5","'PROCURAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.AV28SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO")};this.e117r2_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e127r2_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e217r2_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e227r2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e237r2_client=function(){this.executeServerEvent("'CONSULTAR'",!0,arguments[0],!1,!1)};this.e177r2_client=function(){this.executeServerEvent("VPAGINA.CLICK",!0,null,!1,!0)};this.e137r2_client=function(){this.executeServerEvent("'NOVO'",!0,null,!1,!1)};this.e147r2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e157r2_client=function(){this.executeServerEvent("'IMPRIMIR'",!0,null,!1,!1)};this.e167r2_client=function(){this.executeServerEvent("'PROCURAR'",!1,null,!1,!1)};this.e247r2_client=function(){this.executeServerEvent("'ATUALIZAPAGINA'",!0,arguments[0],!1,!1)};this.e257r2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e267r2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,34,37,39,40,44,45,46,47,48,49,56];this.GXLastCtrlId=56;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",43,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hespecie",[],!1,1,!0,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(938,44,"ESPECIEID","","","EspecieId","int",0,"px",3,3,"right",null,[],938,"EspecieId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(939,45,"ESPECIEDESCRICAO","","","EspecieDescricao","svchar",0,"px",25,25,"left",null,[],939,"EspecieDescricao",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpalt","vBMPALT",46,0,"px",17,"px","e217r2_client","","Alterar","Image","GridColumnImage");t.addBitmap("&Bmpexc","vBMPEXC",47,0,"px",17,"px","e227r2_client","","Excluir","Image","GridColumnImage");t.addBitmap("&Bmpcon","vBMPCON",48,0,"px",17,"px","e237r2_client","","Consultar","Image","GridColumnImage");t.addSingleLineEdit(937,49,"ESPECIEEMPRESAID","Empresa","","EspecieEmpresaId","char",0,"px",10,10,"left",null,[],937,"EspecieEmpresaId",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE1",grid:0};n[8]={fld:"TABLE3",grid:0};n[11]={fld:"TXTTITAPL2",format:0,grid:0};n[13]={lvl:0,type:"svchar",len:25,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vESPECIEDESCRICAO",gxz:"ZV27EspecieDescricao",gxold:"OV27EspecieDescricao",gxvar:"AV27EspecieDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27EspecieDescricao=n},v2z:function(n){gx.O.ZV27EspecieDescricao=n},v2c:function(){gx.fn.setControlValue("vESPECIEDESCRICAO",gx.O.AV27EspecieDescricao,0)},c2v:function(){gx.O.AV27EspecieDescricao=this.val()},val:function(){return gx.fn.getControlValue("vESPECIEDESCRICAO")},nac:gx.falseFn};n[18]={fld:"TABLE4",grid:0};n[21]={fld:"TABLE8",grid:0};n[24]={fld:"IMAGE2",grid:0};n[26]={fld:"BTNANTERIOR",grid:0};n[28]={fld:"BTNPROXIMO",grid:0};n[30]={fld:"IMAGE1",grid:0};n[32]={fld:"BTNHELP",grid:0};n[34]={fld:"TABLE5",grid:0};n[37]={fld:"TEXTBLOCK1",format:0,grid:0};n[39]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV5Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV5Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[40]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV6PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[44]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ESPECIEID",gxz:"Z938EspecieId",gxold:"O938EspecieId",gxvar:"A938EspecieId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A938EspecieId=gx.num.intval(n)},v2z:function(n){gx.O.Z938EspecieId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("ESPECIEID",n||gx.fn.currentGridRowImpl(43),gx.O.A938EspecieId,0)},c2v:function(){gx.O.A938EspecieId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("ESPECIEID",n||gx.fn.currentGridRowImpl(43),".")},nac:gx.falseFn};n[45]={lvl:2,type:"svchar",len:25,dec:0,sign:!1,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ESPECIEDESCRICAO",gxz:"Z939EspecieDescricao",gxold:"O939EspecieDescricao",gxvar:"A939EspecieDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A939EspecieDescricao=n},v2z:function(n){gx.O.Z939EspecieDescricao=n},v2c:function(n){gx.fn.setGridControlValue("ESPECIEDESCRICAO",n||gx.fn.currentGridRowImpl(43),gx.O.A939EspecieDescricao,0)},c2v:function(){gx.O.A939EspecieDescricao=this.val()},val:function(n){return gx.fn.getGridControlValue("ESPECIEDESCRICAO",n||gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};n[46]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7bmpAlt=n},v2z:function(n){gx.O.ZV7bmpAlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPALT",n||gx.fn.currentGridRowImpl(43),gx.O.AV7bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPALT",n||gx.fn.currentGridRowImpl(43))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPALT_GXI",n||gx.fn.currentGridRowImpl(43))},gxvar_GXI:"AV34Bmpalt_GXI",nac:gx.falseFn};n[47]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV8bmpExc=n},v2z:function(n){gx.O.ZV8bmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(43),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(43))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(43))},gxvar_GXI:"AV35Bmpexc_GXI",nac:gx.falseFn};n[48]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV16bmpCon=n},v2z:function(n){gx.O.ZV16bmpCon=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCON",n||gx.fn.currentGridRowImpl(43),gx.O.AV16bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCON",n||gx.fn.currentGridRowImpl(43))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCON_GXI",n||gx.fn.currentGridRowImpl(43))},gxvar_GXI:"AV36Bmpcon_GXI",nac:gx.falseFn};n[49]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:43,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ESPECIEEMPRESAID",gxz:"Z937EspecieEmpresaId",gxold:"O937EspecieEmpresaId",gxvar:"A937EspecieEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A937EspecieEmpresaId=n},v2z:function(n){gx.O.Z937EspecieEmpresaId=n},v2c:function(n){gx.fn.setGridControlValue("ESPECIEEMPRESAID",n||gx.fn.currentGridRowImpl(43),gx.O.A937EspecieEmpresaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A937EspecieEmpresaId=this.val()},val:function(n){return gx.fn.getGridControlValue("ESPECIEEMPRESAID",n||gx.fn.currentGridRowImpl(43))},nac:gx.falseFn};n[56]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV11OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV27EspecieDescricao="";this.ZV27EspecieDescricao="";this.OV27EspecieDescricao="";this.AV5Pagina=0;this.ZV5Pagina=0;this.OV5Pagina=0;this.AV6PaginaAux=0;this.ZV6PaginaAux=0;this.OV6PaginaAux=0;this.Z938EspecieId=0;this.O938EspecieId=0;this.Z939EspecieDescricao="";this.O939EspecieDescricao="";this.ZV7bmpAlt="";this.OV7bmpAlt="";this.ZV8bmpExc="";this.OV8bmpExc="";this.ZV16bmpCon="";this.OV16bmpCon="";this.Z937EspecieEmpresaId="";this.O937EspecieEmpresaId="";this.AV11OrderedBy=0;this.ZV11OrderedBy=0;this.OV11OrderedBy=0;this.AV27EspecieDescricao="";this.AV5Pagina=0;this.AV6PaginaAux=0;this.AV11OrderedBy=0;this.A938EspecieId=0;this.A939EspecieDescricao="";this.AV7bmpAlt="";this.AV8bmpExc="";this.AV16bmpCon="";this.A937EspecieEmpresaId="";this.AV17EmpresaPadrao="";this.AV28SnRecuperaFiltro="";this.Events={e117r2_client:["'ANTERIOR'",!0],e127r2_client:["'PROXIMO'",!0],e217r2_client:["'ALTERAR'",!0],e227r2_client:["'EXCLUIR'",!0],e237r2_client:["'CONSULTAR'",!0],e177r2_client:["VPAGINA.CLICK",!0],e137r2_client:["'NOVO'",!0],e147r2_client:["'FECHAR'",!0],e157r2_client:["'IMPRIMIR'",!0],e167r2_client:["'PROCURAR'",!0],e247r2_client:["'ATUALIZAPAGINA'",!0],e257r2_client:["ENTER",!0],e267r2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV28SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"}],[]];this.EvtParms["GRID.REFRESH"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV28SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"}],[{ctrl:"ESPECIEID",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("ESPECIEID","Title")',ctrl:"ESPECIEID",prop:"Title"},{av:"AV12Imagem",fld:"vIMAGEM"},{ctrl:"ESPECIEDESCRICAO",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("ESPECIEDESCRICAO","Title")',ctrl:"ESPECIEDESCRICAO",prop:"Title"},{av:"AV6PaginaAux",fld:"vPAGINAAUX"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV10NumPagina",fld:"vNUMPAGINA"},{av:"AV28SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"},{av:"AV23filtros",fld:"vFILTROS"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV28SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV5Pagina",fld:"vPAGINA"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV28SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV6PaginaAux",fld:"vPAGINAAUX"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["GRID.LOAD"]=[[],[{av:"AV7bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV16bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"}]];this.EvtParms["'ALTERAR'"]=[[{av:"A938EspecieId",fld:"ESPECIEID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"}],[{av:"A938EspecieId",fld:"ESPECIEID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"A938EspecieId",fld:"ESPECIEID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"}],[{av:"A938EspecieId",fld:"ESPECIEID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'CONSULTAR'"]=[[{av:"A938EspecieId",fld:"ESPECIEID"},{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"}],[{av:"A938EspecieId",fld:"ESPECIEID"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["VPAGINA.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV28SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV5Pagina",fld:"vPAGINA"}],[{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'NOVO'"]=[[],[]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms["'IMPRIMIR'"]=[[{av:"AV32Pgmname",fld:"vPGMNAME"},{av:"AV33Pgmdesc",fld:"vPGMDESC"}],[{av:"AV19NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV18NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV29QtdPagGeradas",fld:"vQTDPAGGERADAS"}]];this.EvtParms["'PROCURAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV28SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"AV5Pagina",fld:"vPAGINA"}],[{av:"AV5Pagina",fld:"vPAGINA"},{av:"AV23filtros",fld:"vFILTROS"}]];this.EvtParms["'ATUALIZAPAGINA'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV27EspecieDescricao",fld:"vESPECIEDESCRICAO"},{av:"AV11OrderedBy",fld:"vORDEREDBY"},{av:"AV17EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV28SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"}],[]];this.setVCMap("AV17EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV28SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("AV17EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV28SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");t.addRefreshingVar(this.GXValidFnc[13]);t.addRefreshingVar(this.GXValidFnc[56]);t.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});t.addRefreshingVar({rfrVar:"AV28SnRecuperaFiltro"});this.InitStandaloneVars()});gx.setParentObj(new hespecie)