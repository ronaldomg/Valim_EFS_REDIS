/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:41:35.81
*/
gx.evt.autoSkip = false;
gx.define('hmodelorelatorios', false, function () {
   this.ServerClass =  "hmodelorelatorios" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV41SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV46Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e111f52_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121f52_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e151f52_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131f52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141f52_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e181f52_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e201f52_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211f52_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e221f52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e231f52_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,27,30,33,35,37,39,42,44,48,49,50,51,52,53,54,55,62,63,64,65,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",47,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodelorelatorios",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(9268,48,"OSMODELORELATORIO","","","OSModeloRelatorio","int",0,"px",2,2,"right",null,[],9268,"OSModeloRelatorio",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9265,49,"OSMODELORELATORIODESCRICAO","","","OSModeloRelatorioDescricao","svchar",0,"px",60,60,"left",null,[],9265,"OSModeloRelatorioDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Osmodelorelatoriosncanhoto",50,"vOSMODELORELATORIOSNCANHOTO","Modelo","","OSModeloRelatorioSNCanhoto","svchar",0,"px",20,20,"left",null,[],"Osmodelorelatoriosncanhoto","OSModeloRelatorioSNCanhoto",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Osmodelorelatoriosel","vOSMODELORELATORIOSEL",51,0,"px",17,"px",null,"","Ativo","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(9267,52,"OSMODELORELATORIOSNCANHOTO","Modelo","","OSModeloRelatorioSNCanhoto","char",0,"px",1,1,"left",null,[],9267,"OSModeloRelatorioSNCanhoto",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9266,53,"OSMODELORELATORIOSEL","Sel.","","OSModeloRelatorioSel","char",0,"px",1,1,"left",null,[],9266,"OSModeloRelatorioSel",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e201f52_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",55,0,"px",17,"px","e181f52_client","","Visualizar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOSMODELORELATORIO",gxz:"ZV37OSModeloRelatorio",gxold:"OV37OSModeloRelatorio",gxvar:"AV37OSModeloRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37OSModeloRelatorio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37OSModeloRelatorio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOSMODELORELATORIO",gx.O.AV37OSModeloRelatorio,0)},c2v:function(){gx.O.AV37OSModeloRelatorio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOSMODELORELATORIO",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOSMODELORELATORIODESCRICAO",gxz:"ZV38OSModeloRelatorioDescricao",gxold:"OV38OSModeloRelatorioDescricao",gxvar:"AV38OSModeloRelatorioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38OSModeloRelatorioDescricao=Value},v2z:function(Value){gx.O.ZV38OSModeloRelatorioDescricao=Value},v2c:function(){gx.fn.setControlValue("vOSMODELORELATORIODESCRICAO",gx.O.AV38OSModeloRelatorioDescricao,0)},c2v:function(){gx.O.AV38OSModeloRelatorioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vOSMODELORELATORIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TABLE6",grid:0};
   GXValidFnc[33]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[35]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OSMODELORELATORIO",gxz:"Z9268OSModeloRelatorio",gxold:"O9268OSModeloRelatorio",gxvar:"A9268OSModeloRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9268OSModeloRelatorio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9268OSModeloRelatorio=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OSMODELORELATORIO",row || gx.fn.currentGridRowImpl(47),gx.O.A9268OSModeloRelatorio,0)},c2v:function(){gx.O.A9268OSModeloRelatorio=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OSMODELORELATORIO",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OSMODELORELATORIODESCRICAO",gxz:"Z9265OSModeloRelatorioDescricao",gxold:"O9265OSModeloRelatorioDescricao",gxvar:"A9265OSModeloRelatorioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9265OSModeloRelatorioDescricao=Value},v2z:function(Value){gx.O.Z9265OSModeloRelatorioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("OSMODELORELATORIODESCRICAO",row || gx.fn.currentGridRowImpl(47),gx.O.A9265OSModeloRelatorioDescricao,0)},c2v:function(){gx.O.A9265OSModeloRelatorioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("OSMODELORELATORIODESCRICAO",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vOSMODELORELATORIOSNCANHOTO",gxz:"ZV40OSModeloRelatorioSNCanhoto",gxold:"OV40OSModeloRelatorioSNCanhoto",gxvar:"AV40OSModeloRelatorioSNCanhoto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV40OSModeloRelatorioSNCanhoto=Value},v2z:function(Value){gx.O.ZV40OSModeloRelatorioSNCanhoto=Value},v2c:function(row){gx.fn.setGridControlValue("vOSMODELORELATORIOSNCANHOTO",row || gx.fn.currentGridRowImpl(47),gx.O.AV40OSModeloRelatorioSNCanhoto,0)},c2v:function(){gx.O.AV40OSModeloRelatorioSNCanhoto=this.val()},val:function(row){return gx.fn.getGridControlValue("vOSMODELORELATORIOSNCANHOTO",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vOSMODELORELATORIOSEL",gxz:"ZV39OSModeloRelatorioSel",gxold:"OV39OSModeloRelatorioSel",gxvar:"AV39OSModeloRelatorioSel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV39OSModeloRelatorioSel=Value},v2z:function(Value){gx.O.ZV39OSModeloRelatorioSel=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vOSMODELORELATORIOSEL",row || gx.fn.currentGridRowImpl(47),gx.O.AV39OSModeloRelatorioSel,gx.O.AV50Osmodelorelatoriosel_GXI)},c2v:function(){gx.O.AV50Osmodelorelatoriosel_GXI=this.val_GXI();gx.O.AV39OSModeloRelatorioSel=this.val()},val:function(row){return gx.fn.getGridControlValue("vOSMODELORELATORIOSEL",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vOSMODELORELATORIOSEL_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV50Osmodelorelatoriosel_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OSMODELORELATORIOSNCANHOTO",gxz:"Z9267OSModeloRelatorioSNCanhoto",gxold:"O9267OSModeloRelatorioSNCanhoto",gxvar:"A9267OSModeloRelatorioSNCanhoto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9267OSModeloRelatorioSNCanhoto=Value},v2z:function(Value){gx.O.Z9267OSModeloRelatorioSNCanhoto=Value},v2c:function(row){gx.fn.setGridControlValue("OSMODELORELATORIOSNCANHOTO",row || gx.fn.currentGridRowImpl(47),gx.O.A9267OSModeloRelatorioSNCanhoto,0)},c2v:function(){gx.O.A9267OSModeloRelatorioSNCanhoto=this.val()},val:function(row){return gx.fn.getGridControlValue("OSMODELORELATORIOSNCANHOTO",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OSMODELORELATORIOSEL",gxz:"Z9266OSModeloRelatorioSel",gxold:"O9266OSModeloRelatorioSel",gxvar:"A9266OSModeloRelatorioSel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9266OSModeloRelatorioSel=Value},v2z:function(Value){gx.O.Z9266OSModeloRelatorioSel=Value},v2c:function(row){gx.fn.setGridControlValue("OSMODELORELATORIOSEL",row || gx.fn.currentGridRowImpl(47),gx.O.A9266OSModeloRelatorioSel,0)},c2v:function(){gx.O.A9266OSModeloRelatorioSel=this.val()},val:function(row){return gx.fn.getGridControlValue("OSMODELORELATORIOSEL",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(47),gx.O.AV7bmpAlt,gx.O.AV48Bmpalt_GXI)},c2v:function(){gx.O.AV48Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV48Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(47),gx.O.AV16bmpCon,gx.O.AV49Bmpcon_GXI)},c2v:function(){gx.O.AV49Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV49Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTERES",gxz:"ZV33QtCaracteres",gxold:"OV33QtCaracteres",gxvar:"AV33QtCaracteres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33QtCaracteres=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33QtCaracteres=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTERES",gx.O.AV33QtCaracteres,0)},c2v:function(){gx.O.AV33QtCaracteres=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTERES",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"JS", format:2,grid:0};
   this.AV37OSModeloRelatorio = 0 ;
   this.ZV37OSModeloRelatorio = 0 ;
   this.OV37OSModeloRelatorio = 0 ;
   this.AV38OSModeloRelatorioDescricao = "" ;
   this.ZV38OSModeloRelatorioDescricao = "" ;
   this.OV38OSModeloRelatorioDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.Z9268OSModeloRelatorio = 0 ;
   this.O9268OSModeloRelatorio = 0 ;
   this.Z9265OSModeloRelatorioDescricao = "" ;
   this.O9265OSModeloRelatorioDescricao = "" ;
   this.ZV40OSModeloRelatorioSNCanhoto = "" ;
   this.OV40OSModeloRelatorioSNCanhoto = "" ;
   this.ZV39OSModeloRelatorioSel = "" ;
   this.OV39OSModeloRelatorioSel = "" ;
   this.Z9267OSModeloRelatorioSNCanhoto = "" ;
   this.O9267OSModeloRelatorioSNCanhoto = "" ;
   this.Z9266OSModeloRelatorioSel = "" ;
   this.O9266OSModeloRelatorioSel = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV33QtCaracteres = 0 ;
   this.ZV33QtCaracteres = 0 ;
   this.OV33QtCaracteres = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV37OSModeloRelatorio = 0 ;
   this.AV38OSModeloRelatorioDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV33QtCaracteres = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV6PaginaAux = 0 ;
   this.A9268OSModeloRelatorio = 0 ;
   this.A9265OSModeloRelatorioDescricao = "" ;
   this.AV40OSModeloRelatorioSNCanhoto = "" ;
   this.AV39OSModeloRelatorioSel = "" ;
   this.A9267OSModeloRelatorioSNCanhoto = "" ;
   this.A9266OSModeloRelatorioSel = "" ;
   this.AV7bmpAlt = "" ;
   this.AV16bmpCon = "" ;
   this.AV41SnRecuperaFiltro = "" ;
   this.AV46Pgmname = "" ;
   this.Events = {"e111f52_client": ["'ANTERIOR'", true] ,"e121f52_client": ["'PROXIMO'", true] ,"e151f52_client": ["VPAGINA.CLICK", true] ,"e131f52_client": ["'FECHAR'", true] ,"e141f52_client": ["'PROCURAR'", true] ,"e181f52_client": ["'CONSULTAR'", true] ,"e201f52_client": ["'ALTERAR'", true] ,"e211f52_client": ["'ATUALIZAPAGINA'", true] ,"e221f52_client": ["ENTER", true] ,"e231f52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV38OSModeloRelatorioDescricao',fld:'vOSMODELORELATORIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV46Pgmname',fld:'vPGMNAME'},{av:'A9266OSModeloRelatorioSel',fld:'OSMODELORELATORIOSEL'},{av:'A9267OSModeloRelatorioSNCanhoto',fld:'OSMODELORELATORIOSNCANHOTO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV38OSModeloRelatorioDescricao',fld:'vOSMODELORELATORIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV46Pgmname',fld:'vPGMNAME'},{av:'A9266OSModeloRelatorioSel',fld:'OSMODELORELATORIOSEL'},{av:'A9267OSModeloRelatorioSNCanhoto',fld:'OSMODELORELATORIOSNCANHOTO'}],[{ctrl:'OSMODELORELATORIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OSMODELORELATORIO","Title")',ctrl:'OSMODELORELATORIO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'OSMODELORELATORIODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OSMODELORELATORIODESCRICAO","Title")',ctrl:'OSMODELORELATORIODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV38OSModeloRelatorioDescricao',fld:'vOSMODELORELATORIODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV38OSModeloRelatorioDescricao',fld:'vOSMODELORELATORIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV46Pgmname',fld:'vPGMNAME'},{av:'A9266OSModeloRelatorioSel',fld:'OSMODELORELATORIOSEL'},{av:'A9267OSModeloRelatorioSNCanhoto',fld:'OSMODELORELATORIOSNCANHOTO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV38OSModeloRelatorioDescricao',fld:'vOSMODELORELATORIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV46Pgmname',fld:'vPGMNAME'},{av:'A9266OSModeloRelatorioSel',fld:'OSMODELORELATORIOSEL'},{av:'A9267OSModeloRelatorioSNCanhoto',fld:'OSMODELORELATORIOSNCANHOTO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV38OSModeloRelatorioDescricao',fld:'vOSMODELORELATORIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV46Pgmname',fld:'vPGMNAME'},{av:'A9266OSModeloRelatorioSel',fld:'OSMODELORELATORIOSEL'},{av:'A9267OSModeloRelatorioSNCanhoto',fld:'OSMODELORELATORIOSNCANHOTO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV46Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV38OSModeloRelatorioDescricao',fld:'vOSMODELORELATORIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV46Pgmname',fld:'vPGMNAME'},{av:'A9266OSModeloRelatorioSel',fld:'OSMODELORELATORIOSEL'},{av:'A9267OSModeloRelatorioSNCanhoto',fld:'OSMODELORELATORIOSNCANHOTO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV46Pgmname',fld:'vPGMNAME'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A9268OSModeloRelatorio',fld:'OSMODELORELATORIO'},{av:'AV47Pgmdesc',fld:'vPGMDESC'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV43varcharCollection',fld:'vVARCHARCOLLECTION'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV34QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV15EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV42Orientacao',fld:'vORIENTACAO'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV43varcharCollection',fld:'vVARCHARCOLLECTION'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A9266OSModeloRelatorioSel',fld:'OSMODELORELATORIOSEL'},{av:'A9267OSModeloRelatorioSNCanhoto',fld:'OSMODELORELATORIOSNCANHOTO'}],[{av:'AV39OSModeloRelatorioSel',fld:'vOSMODELORELATORIOSEL'},{av:'AV40OSModeloRelatorioSNCanhoto',fld:'vOSMODELORELATORIOSNCANHOTO'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A9268OSModeloRelatorio',fld:'OSMODELORELATORIO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV38OSModeloRelatorioDescricao',fld:'vOSMODELORELATORIODESCRICAO'},{av:'AV46Pgmname',fld:'vPGMNAME'}],[{av:'A9268OSModeloRelatorio',fld:'OSMODELORELATORIO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37OSModeloRelatorio',fld:'vOSMODELORELATORIO'},{av:'AV38OSModeloRelatorioDescricao',fld:'vOSMODELORELATORIODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV46Pgmname',fld:'vPGMNAME'},{av:'A9266OSModeloRelatorioSel',fld:'OSMODELORELATORIOSEL'},{av:'A9267OSModeloRelatorioSNCanhoto',fld:'OSMODELORELATORIOSNCANHOTO'}],[]];
   this.setVCMap("AV41SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV46Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV41SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV46Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV41SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV46Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A9266OSModeloRelatorioSel", rfrProp:"Value", gxAttId:"9266"});
   GridContainer.addRefreshingVar({rfrVar:"A9267OSModeloRelatorioSNCanhoto", rfrProp:"Value", gxAttId:"9267"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodelorelatorios());
