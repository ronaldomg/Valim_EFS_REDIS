/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 18:19:10.14
*/
gx.evt.autoSkip=!1;gx.define("hramoatividade",!1,function(){var n,t;this.ServerClass="hramoatividade";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("7","'ANTERIOR'");this.addKeyListener("8","'PROXIMO'");this.addKeyListener("3","'NOVO'");this.addKeyListener("12","'FECHAR'");this.addKeyListener("10","'IMPRIMIR'");this.addKeyListener("5","'PROCURAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV10EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.AV27SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO");this.A10105RamoAtividadeDescricao=gx.fn.getControlValue("RAMOATIVIDADEDESCRICAO")};this.e1124f2_client=function(){this.executeServerEvent("'ANTERIOR'",!0,null,!1,!1)};this.e1224f2_client=function(){this.executeServerEvent("'PROXIMO'",!0,null,!1,!1)};this.e2024f2_client=function(){this.executeServerEvent("'ALTERAR'",!0,arguments[0],!1,!1)};this.e2124f2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e2224f2_client=function(){this.executeServerEvent("'CONSULTAR'",!0,arguments[0],!1,!1)};this.e1724f2_client=function(){this.executeServerEvent("VPAGINA.CLICK",!0,null,!1,!0)};this.e1324f2_client=function(){this.executeServerEvent("'NOVO'",!0,null,!1,!1)};this.e1424f2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e1524f2_client=function(){this.executeServerEvent("'IMPRIMIR'",!0,null,!1,!1)};this.e1624f2_client=function(){this.executeServerEvent("'PROCURAR'",!1,null,!1,!1)};this.e2424f2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e2524f2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,14,16,19,21,31,34,37,39,41,43,45,47,50,52,53,57,58,59,60,61,62,69,70];this.GXLastCtrlId=70;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",56,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hramoatividade",[],!1,1,!0,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(10020,57,"RAMOATIVIDADECODIGO","","","RamoAtividadeCodigo","int",0,"px",12,12,"right",null,[],10020,"RamoAtividadeCodigo",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Ramoatividadedescricaogrid",58,"vRAMOATIVIDADEDESCRICAOGRID","","","RamoatividadeDescricaoGrid","svchar",0,"px",50,50,"left",null,[],"Ramoatividadedescricaogrid","RamoatividadeDescricaoGrid",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(10106,59,"RAMOATIVIDADEGRUPORAMODESC","Grupo do Ramo","","RamoAtividadeGrupoRamoDesc","svchar",0,"px",50,50,"left",null,[],10106,"RamoAtividadeGrupoRamoDesc",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpalt","vBMPALT",60,0,"px",17,"px","e2024f2_client","","Alterar","Image","GridColumnImage");t.addBitmap("&Bmpexc","vBMPEXC",61,0,"px",17,"px","e2124f2_client","","Excluir","Image","GridColumnImage");t.addBitmap("&Bmpcon","vBMPCON",62,0,"px",17,"px","e2224f2_client","","Consultar","Image","GridColumnImage");this.setGrid(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE1",grid:0};n[8]={fld:"TABLE6",grid:0};n[11]={fld:"TABLE3",grid:0};n[14]={fld:"TXTFILTRO",format:0,grid:0};n[16]={lvl:0,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vRAMOATIVIDADECODIGO",gxz:"ZV24RamoAtividadeCodigo",gxold:"OV24RamoAtividadeCodigo",gxvar:"AV24RamoAtividadeCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24RamoAtividadeCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV24RamoAtividadeCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vRAMOATIVIDADECODIGO",gx.O.AV24RamoAtividadeCodigo,0)},c2v:function(){gx.O.AV24RamoAtividadeCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRAMOATIVIDADECODIGO",".")},nac:gx.falseFn};n[19]={fld:"TXTFILTRO2",format:0,grid:0};n[21]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vRAMOATIVIDADEDESCRICAO",gxz:"ZV25RamoAtividadeDescricao",gxold:"OV25RamoAtividadeDescricao",gxvar:"AV25RamoAtividadeDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25RamoAtividadeDescricao=n},v2z:function(n){gx.O.ZV25RamoAtividadeDescricao=n},v2c:function(){gx.fn.setControlValue("vRAMOATIVIDADEDESCRICAO",gx.O.AV25RamoAtividadeDescricao,0)},c2v:function(){gx.O.AV25RamoAtividadeDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRAMOATIVIDADEDESCRICAO")},nac:gx.falseFn};n[31]={fld:"TABLE4",grid:0};n[34]={fld:"TABLE8",grid:0};n[37]={fld:"BTNINSERIR",grid:0};n[39]={fld:"BTNANTERIOR",grid:0};n[41]={fld:"BTNPROXIMO",grid:0};n[43]={fld:"IMAGE1",grid:0};n[45]={fld:"BTNHELP",grid:0};n[47]={fld:"TABLE5",grid:0};n[50]={fld:"TEXTBLOCK1",format:0,grid:0};n[52]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV21Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV21Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[53]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV22PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[57]={lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZZ",ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RAMOATIVIDADECODIGO",gxz:"Z10020RamoAtividadeCodigo",gxold:"O10020RamoAtividadeCodigo",gxvar:"A10020RamoAtividadeCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A10020RamoAtividadeCodigo=gx.num.intval(n)},v2z:function(n){gx.O.Z10020RamoAtividadeCodigo=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("RAMOATIVIDADECODIGO",n||gx.fn.currentGridRowImpl(56),gx.O.A10020RamoAtividadeCodigo,0)},c2v:function(){gx.O.A10020RamoAtividadeCodigo=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("RAMOATIVIDADECODIGO",n||gx.fn.currentGridRowImpl(56),".")},nac:gx.falseFn};n[58]={lvl:2,type:"svchar",len:50,dec:0,sign:!1,ro:0,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vRAMOATIVIDADEDESCRICAOGRID",gxz:"ZV30RamoatividadeDescricaoGrid",gxold:"OV30RamoatividadeDescricaoGrid",gxvar:"AV30RamoatividadeDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV30RamoatividadeDescricaoGrid=n},v2z:function(n){gx.O.ZV30RamoatividadeDescricaoGrid=n},v2c:function(n){gx.fn.setGridControlValue("vRAMOATIVIDADEDESCRICAOGRID",n||gx.fn.currentGridRowImpl(56),gx.O.AV30RamoatividadeDescricaoGrid,0)},c2v:function(){gx.O.AV30RamoatividadeDescricaoGrid=this.val()},val:function(n){return gx.fn.getGridControlValue("vRAMOATIVIDADEDESCRICAOGRID",n||gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};n[59]={lvl:2,type:"svchar",len:50,dec:0,sign:!1,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RAMOATIVIDADEGRUPORAMODESC",gxz:"Z10106RamoAtividadeGrupoRamoDesc",gxold:"O10106RamoAtividadeGrupoRamoDesc",gxvar:"A10106RamoAtividadeGrupoRamoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A10106RamoAtividadeGrupoRamoDesc=n},v2z:function(n){gx.O.Z10106RamoAtividadeGrupoRamoDesc=n},v2c:function(n){gx.fn.setGridControlValue("RAMOATIVIDADEGRUPORAMODESC",n||gx.fn.currentGridRowImpl(56),gx.O.A10106RamoAtividadeGrupoRamoDesc,0)},c2v:function(){gx.O.A10106RamoAtividadeGrupoRamoDesc=this.val()},val:function(n){return gx.fn.getGridControlValue("RAMOATIVIDADEGRUPORAMODESC",n||gx.fn.currentGridRowImpl(56))},nac:gx.falseFn};n[60]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV6bmpAlt",gxold:"OV6bmpAlt",gxvar:"AV6bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV6bmpAlt=n},v2z:function(n){gx.O.ZV6bmpAlt=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPALT",n||gx.fn.currentGridRowImpl(56),gx.O.AV6bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV6bmpAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPALT",n||gx.fn.currentGridRowImpl(56))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPALT_GXI",n||gx.fn.currentGridRowImpl(56))},gxvar_GXI:"AV36Bmpalt_GXI",nac:gx.falseFn};n[61]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV8bmpExc=n},v2z:function(n){gx.O.ZV8bmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(56),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(56))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(56))},gxvar_GXI:"AV37Bmpexc_GXI",nac:gx.falseFn};n[62]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:56,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV7bmpCon",gxold:"OV7bmpCon",gxvar:"AV7bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV7bmpCon=n},v2z:function(n){gx.O.ZV7bmpCon=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCON",n||gx.fn.currentGridRowImpl(56),gx.O.AV7bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV7bmpCon=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCON",n||gx.fn.currentGridRowImpl(56))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCON_GXI",n||gx.fn.currentGridRowImpl(56))},gxvar_GXI:"AV38Bmpcon_GXI",nac:gx.falseFn};n[69]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV20OrderedBy",gxold:"OV20OrderedBy",gxvar:"AV20OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV20OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV20OrderedBy,0)},c2v:function(){gx.O.AV20OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};n[70]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV5AcessoSistemaSequencia",gxold:"OV5AcessoSistemaSequencia",gxvar:"AV5AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV5AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV5AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};this.AV24RamoAtividadeCodigo=0;this.ZV24RamoAtividadeCodigo=0;this.OV24RamoAtividadeCodigo=0;this.AV25RamoAtividadeDescricao="";this.ZV25RamoAtividadeDescricao="";this.OV25RamoAtividadeDescricao="";this.AV21Pagina=0;this.ZV21Pagina=0;this.OV21Pagina=0;this.AV22PaginaAux=0;this.ZV22PaginaAux=0;this.OV22PaginaAux=0;this.Z10020RamoAtividadeCodigo=0;this.O10020RamoAtividadeCodigo=0;this.ZV30RamoatividadeDescricaoGrid="";this.OV30RamoatividadeDescricaoGrid="";this.Z10106RamoAtividadeGrupoRamoDesc="";this.O10106RamoAtividadeGrupoRamoDesc="";this.ZV6bmpAlt="";this.OV6bmpAlt="";this.ZV8bmpExc="";this.OV8bmpExc="";this.ZV7bmpCon="";this.OV7bmpCon="";this.AV20OrderedBy=0;this.ZV20OrderedBy=0;this.OV20OrderedBy=0;this.AV5AcessoSistemaSequencia=0;this.ZV5AcessoSistemaSequencia=0;this.OV5AcessoSistemaSequencia=0;this.AV24RamoAtividadeCodigo=0;this.AV25RamoAtividadeDescricao="";this.AV21Pagina=0;this.AV22PaginaAux=0;this.AV20OrderedBy=0;this.AV5AcessoSistemaSequencia=0;this.A10105RamoAtividadeDescricao="";this.A10019RamoAtividadeEmpresaId="";this.A10021RamoAtividadeGrupoRamoEmpId="";this.A10022RamoAtividadeGrupoRamoCodigo="";this.A10020RamoAtividadeCodigo=0;this.AV30RamoatividadeDescricaoGrid="";this.A10106RamoAtividadeGrupoRamoDesc="";this.AV6bmpAlt="";this.AV8bmpExc="";this.AV7bmpCon="";this.AV10EmpresaPadrao="";this.AV27SnRecuperaFiltro="";this.Events={e1124f2_client:["'ANTERIOR'",!0],e1224f2_client:["'PROXIMO'",!0],e2024f2_client:["'ALTERAR'",!0],e2124f2_client:["'EXCLUIR'",!0],e2224f2_client:["'CONSULTAR'",!0],e1724f2_client:["VPAGINA.CLICK",!0],e1324f2_client:["'NOVO'",!0],e1424f2_client:["'FECHAR'",!0],e1524f2_client:["'IMPRIMIR'",!0],e1624f2_client:["'PROCURAR'",!0],e2424f2_client:["ENTER",!0],e2524f2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV24RamoAtividadeCodigo",fld:"vRAMOATIVIDADECODIGO"},{av:"AV25RamoAtividadeDescricao",fld:"vRAMOATIVIDADEDESCRICAO"},{av:"AV20OrderedBy",fld:"vORDEREDBY"},{av:"AV10EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV6bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV7bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV27SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"}],[]];this.EvtParms["GRID.REFRESH"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV24RamoAtividadeCodigo",fld:"vRAMOATIVIDADECODIGO"},{av:"AV25RamoAtividadeDescricao",fld:"vRAMOATIVIDADEDESCRICAO"},{av:"AV20OrderedBy",fld:"vORDEREDBY"},{av:"AV10EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV6bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV7bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV27SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"}],[{ctrl:"RAMOATIVIDADECODIGO",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("RAMOATIVIDADECODIGO","Title")',ctrl:"RAMOATIVIDADECODIGO",prop:"Title"},{av:"AV13Imagem",fld:"vIMAGEM"},{ctrl:"vRAMOATIVIDADEDESCRICAOGRID",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("vRAMOATIVIDADEDESCRICAOGRID","Title")',ctrl:"vRAMOATIVIDADEDESCRICAOGRID",prop:"Title"},{av:"AV22PaginaAux",fld:"vPAGINAAUX"},{av:"AV21Pagina",fld:"vPAGINA"},{av:"AV19NumPagina",fld:"vNUMPAGINA"},{av:"AV27SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"},{av:"AV11filtros",fld:"vFILTROS"},{av:"AV20OrderedBy",fld:"vORDEREDBY"},{av:"AV25RamoAtividadeDescricao",fld:"vRAMOATIVIDADEDESCRICAO"},{av:"AV24RamoAtividadeCodigo",fld:"vRAMOATIVIDADECODIGO"}]];this.EvtParms["'ANTERIOR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV24RamoAtividadeCodigo",fld:"vRAMOATIVIDADECODIGO"},{av:"AV25RamoAtividadeDescricao",fld:"vRAMOATIVIDADEDESCRICAO"},{av:"AV20OrderedBy",fld:"vORDEREDBY"},{av:"AV10EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV6bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV7bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV27SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"},{av:"AV21Pagina",fld:"vPAGINA"}],[{av:"AV21Pagina",fld:"vPAGINA"},{av:"AV11filtros",fld:"vFILTROS"}]];this.EvtParms["'PROXIMO'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV24RamoAtividadeCodigo",fld:"vRAMOATIVIDADECODIGO"},{av:"AV25RamoAtividadeDescricao",fld:"vRAMOATIVIDADEDESCRICAO"},{av:"AV20OrderedBy",fld:"vORDEREDBY"},{av:"AV10EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV6bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV7bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV27SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"},{av:"AV21Pagina",fld:"vPAGINA"},{av:"AV22PaginaAux",fld:"vPAGINAAUX"}],[{av:"AV21Pagina",fld:"vPAGINA"},{av:"AV11filtros",fld:"vFILTROS"}]];this.EvtParms["'ALTERAR'"]=[[{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"AV21Pagina",fld:"vPAGINA"},{av:"AV20OrderedBy",fld:"vORDEREDBY"},{av:"AV25RamoAtividadeDescricao",fld:"vRAMOATIVIDADEDESCRICAO"},{av:"AV24RamoAtividadeCodigo",fld:"vRAMOATIVIDADECODIGO"}],[{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"AV11filtros",fld:"vFILTROS"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"AV21Pagina",fld:"vPAGINA"},{av:"AV20OrderedBy",fld:"vORDEREDBY"},{av:"AV25RamoAtividadeDescricao",fld:"vRAMOATIVIDADEDESCRICAO"},{av:"AV24RamoAtividadeCodigo",fld:"vRAMOATIVIDADECODIGO"}],[{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"AV11filtros",fld:"vFILTROS"}]];this.EvtParms["'CONSULTAR'"]=[[{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"AV21Pagina",fld:"vPAGINA"},{av:"AV20OrderedBy",fld:"vORDEREDBY"},{av:"AV25RamoAtividadeDescricao",fld:"vRAMOATIVIDADEDESCRICAO"},{av:"AV24RamoAtividadeCodigo",fld:"vRAMOATIVIDADECODIGO"}],[{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"AV11filtros",fld:"vFILTROS"}]];this.EvtParms["VPAGINA.CLICK"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV24RamoAtividadeCodigo",fld:"vRAMOATIVIDADECODIGO"},{av:"AV25RamoAtividadeDescricao",fld:"vRAMOATIVIDADEDESCRICAO"},{av:"AV20OrderedBy",fld:"vORDEREDBY"},{av:"AV10EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV6bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV7bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV27SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"},{av:"AV21Pagina",fld:"vPAGINA"}],[{av:"AV11filtros",fld:"vFILTROS"}]];this.EvtParms["'NOVO'"]=[[],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV5AcessoSistemaSequencia",fld:"vACESSOSISTEMASEQUENCIA"}],[]];this.EvtParms["'IMPRIMIR'"]=[[{av:"AV34Pgmname",fld:"vPGMNAME"},{av:"AV35Pgmdesc",fld:"vPGMDESC"}],[{av:"AV18NomeRelativo",fld:"vNOMERELATIVO"},{av:"AV17NomeAbsoluto",fld:"vNOMEABSOLUTO"},{av:"AV23QtdPagGeradas",fld:"vQTDPAGGERADAS"}]];this.EvtParms["'PROCURAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV24RamoAtividadeCodigo",fld:"vRAMOATIVIDADECODIGO"},{av:"AV25RamoAtividadeDescricao",fld:"vRAMOATIVIDADEDESCRICAO"},{av:"AV20OrderedBy",fld:"vORDEREDBY"},{av:"AV10EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV6bmpAlt",fld:"vBMPALT"},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:"vBMPALT",prop:"Tooltiptext"},{av:"AV8bmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:"AV7bmpCon",fld:"vBMPCON"},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:"vBMPCON",prop:"Tooltiptext"},{av:"AV27SnRecuperaFiltro",fld:"vSNRECUPERAFILTRO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"},{av:"AV21Pagina",fld:"vPAGINA"}],[{av:"AV21Pagina",fld:"vPAGINA"},{av:"AV11filtros",fld:"vFILTROS"}]];this.EvtParms.LOAD=[[{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"}],[{av:"AV30RamoatividadeDescricaoGrid",fld:"vRAMOATIVIDADEDESCRICAOGRID"},{av:'gx.fn.getCtrlProperty("vRAMOATIVIDADEDESCRICAOGRID","Tooltiptext")',ctrl:"vRAMOATIVIDADEDESCRICAOGRID",prop:"Tooltiptext"}]];this.setVCMap("AV10EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV27SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("A10105RamoAtividadeDescricao","RAMOATIVIDADEDESCRICAO",0,"svchar");this.setVCMap("AV10EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("AV27SnRecuperaFiltro","vSNRECUPERAFILTRO",0,"char");this.setVCMap("A10105RamoAtividadeDescricao","RAMOATIVIDADEDESCRICAO",0,"svchar");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[21]);t.addRefreshingVar(this.GXValidFnc[69]);t.addRefreshingVar({rfrVar:"AV10EmpresaPadrao"});t.addRefreshingVar({rfrVar:"AV6bmpAlt",rfrProp:"Value",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV6bmpAlt",rfrProp:"Tooltiptext",gxAttId:"Bmpalt"});t.addRefreshingVar({rfrVar:"AV8bmpExc",rfrProp:"Value",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV8bmpExc",rfrProp:"Tooltiptext",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV7bmpCon",rfrProp:"Value",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV7bmpCon",rfrProp:"Tooltiptext",gxAttId:"Bmpcon"});t.addRefreshingVar({rfrVar:"AV27SnRecuperaFiltro"});t.addRefreshingVar({rfrVar:"A10105RamoAtividadeDescricao"});this.InitStandaloneVars()});gx.setParentObj(new hramoatividade)